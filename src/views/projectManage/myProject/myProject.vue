<template>
  <div class="search">
    <Card>
      <Row>
        <Form
          ref="searchForm"
          :model="searchForm"
          inline
          :label-width="100"
          label-position="right"
          :rules="rules"
        >
          <FormItem label="任务名称" prop="name">
            <Input
              v-model="searchForm.name"
              clearable
              style="width: 250px"
              placeholder="请输入任务名称"
            ></Input>
          </FormItem>
          <FormItem label="所属项目" prop="projectName">
            <Input
              v-model="searchForm.projectName"
              clearable
              style="width: 250px"
              placeholder="请输入项目名称"
            ></Input>
          </FormItem>
          <FormItem label="进展状态" prop="status">
            <Select v-model="searchForm.status" style="width: 250px">
              <Option :value="-1">全部</Option>
              <Option :value="0">未开始</Option>
              <Option :value="1">进行中</Option>
              <Option :value="2">已完成</Option>
            </Select>
          </FormItem>
          <FormItem label="任务类型" prop="type">
            <Select v-model="searchForm.type" style="width: 250px">
              <Option :value="-1">全部</Option>
              <Option :value="0">自建任务</Option>
              <Option :value="1">指派给我的</Option>
              <Option :value="2">我指派的</Option>
            </Select>
          </FormItem>
          <FormItem label="计划起止时间">
            <DatePicker
              type="datetimerange"
              format="yyyy-MM-dd HH:mm:ss"
              :editable="false"
              transfer
              placeholder="请选择起止时间"
              @on-change="rangeChange"
              v-model="rangeTime"
              style="width: 250px"
            ></DatePicker>
          </FormItem>
          <FormItem class="operation">
            <Button @click="handleSearch" type="primary" icon="ios-search"
              >查询</Button
            >
            <Button @click="handleReset">重置</Button>
          </FormItem>
        </Form>
      </Row>
      <Row style="margin-bottom: 10px">
        <Button type="primary" icon="md-add" @click="handleAddTask"
          >新建任务</Button
        >
        <Button
          @click="handleDel"
          icon="md-trash"
          style="margin-left: 10px"
          :disabled="selectCount === 0"
          >删除</Button
        >
      </Row>
      <Row>
        <Table
          border
          ref="table"
          :columns="columns"
          :data="data"
          @on-selection-change="changeSelect"
          :loading="loading"
        >
          <template slot-scope="{ row }" slot="status">
            <RadioGroup
              v-model="row.status"
              type="button"
              @on-change="handleStatus(row)"
            >
              <Radio :label="0" class="noBtn">未开始</Radio>
              <Radio :label="1" class="ingBtn">进行中</Radio>
              <Radio :label="2" class="edBtn">已完成</Radio>
            </RadioGroup>
          </template>
          <template slot-scope="{ row }" slot="type">
            <span v-show="row.type === 0">自建任务</span>
            <span v-show="row.type === 1">指派给我的</span>
            <span v-show="row.type === 2">我指派的</span>
          </template>
        </Table>
      </Row>
      <br />
      <Row type="flex" justify="end" style="margin-top: 10px">
        <Page
          transfer
          :current="searchForm.pageNumber"
          :total="total"
          :page-size="searchForm.pageSize"
          @on-change="changePage"
          @on-page-size-change="changesize"
          :page-size-opts="[10, 20, 50]"
          size="small"
          show-total
          show-elevator
          show-sizer
        ></Page>
      </Row>
    </Card>

    <Drawer
      title="新建任务"
      v-model="addModal"
      width="720"
      :mask-closable="false"
      :closable="false"
    >
      <Form :model="form" :label-width="110" ref="form" :rules="ruleValidate">
        <FormItem label="任务名称" prop="name">
          <Input v-model="form.name" placeholder="请输入任务名称"></Input>
        </FormItem>
        <FormItem label="所属项目" prop="projectId">
          <Select
            v-model="form.projectId"
            :label-in-value="true"
            @on-change="projectChange"
          >
            <Option
              v-for="item in projectList"
              :value="item.id"
              :key="item.id"
              >{{ item.name }}</Option
            >
          </Select>
        </FormItem>
        <FormItem label="任务描述" prop="description">
          <Input
            v-model="form.description"
            type="textarea"
            placeholder="请输入"
            maxlength="500"
            show-word-limit
            :rows="4"
          ></Input>
        </FormItem>
        <FormItem prop="status" label="进展状态">
          <Select v-model="form.status">
            <Option :value="0">未开始</Option>
            <Option :value="1">进行中</Option>
            <Option :value="2">已完成</Option>
          </Select>
        </FormItem>
        <FormItem prop="managerId" label="任务负责人">
          <Select v-model="form.managerId">
            <Option
              v-for="item in managerList"
              :value="item.userId"
              :key="item.userId"
              >{{ item.userName }}</Option
            >
          </Select>
        </FormItem>
        <Row>
          <Col :span="11">
            <FormItem prop="startTime" label="计划开始时间">
              <DatePicker
                @on-change="addStartTime"
                :editable="false"
                v-model="form.startTime"
                format="yyyy-MM-dd HH:mm:ss"
                type="datetime"
              >
              </DatePicker>
            </FormItem>
          </Col>
          <Col :span="13">
            <Row>
              <Col :span="4">
                <FormItem class="labelHidden">
                  <Checkbox
                    v-model="startCheck"
                    @on-change="startChange"
                  ></Checkbox>
                </FormItem>
              </Col>
              <Col :span="20">
                <FormItem
                  prop="startRemindTime"
                  label="开始前提醒"
                  class="labelWidth"
                >
                  <DatePicker
                    :disabled="!startCheck"
                    :editable="false"
                    @on-change="startRemind"
                    v-model="form.startRemindTime"
                    format="yyyy-MM-dd HH:mm:ss"
                    type="datetime"
                  ></DatePicker>
                </FormItem>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col :span="11">
            <FormItem prop="endTime" label="计划结束时间">
              <DatePicker
                @on-change="addEndTime"
                :editable="false"
                v-model="form.endTime"
                format="yyyy-MM-dd HH:mm:ss"
                type="datetime"
              ></DatePicker>
            </FormItem>
          </Col>
          <Col :span="13">
            <Row>
              <Col :span="4">
                <FormItem class="labelHidden">
                  <Checkbox
                    v-model="endCheck"
                    @on-change="endChange"
                  ></Checkbox>
                </FormItem>
              </Col>
              <Col :span="20">
                <FormItem
                  prop="endRemindTime"
                  label="结束前提醒"
                  class="labelWidth"
                >
                  <DatePicker
                    :disabled="!endCheck"
                    :editable="false"
                    @on-change="endRemind"
                    v-model="form.endRemindTime"
                    format="yyyy-MM-dd HH:mm:ss"
                    type="datetime"
                  ></DatePicker>
                </FormItem>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
      <div class="demo-drawer-footer">
        <Button type="primary" @click="handleSubmit()">提交</Button>
        <Button style="margin-left: 8px" @click="infoModal = true">取消</Button>
      </div>
    </Drawer>

    <Drawer title="任务详情" v-model="viewModal" width="720">
      <Form :model="viewForm" :label-width="120" ref="viewForm">
        <FormItem label="任务名称：" prop="name">
          <Input v-model="viewForm.name" readonly></Input>
        </FormItem>
        <FormItem label="所属项目：" prop="projectName">
          <Input v-model="viewForm.projectName" readonly></Input>
        </FormItem>
        <FormItem label="任务描述：" prop="description">
          <Input
            readonly
            v-model="viewForm.description"
            type="textarea"
            placeholder="请输入"
            :rows="4"
          ></Input>
        </FormItem>
        <FormItem prop="status" label="进展状态：">
          <!-- <Select v-model="viewForm.status">
            <Option value="1">未开始</Option>
            <Option value="2">进行中</Option>
            <Option value="3">已完成</Option>
          </Select> -->
          <Input v-show="viewForm.status === 0" value="未开始" readonly></Input>
          <Input v-show="viewForm.status === 1" value="进行中" readonly></Input>
          <Input v-show="viewForm.status === 2" value="已完成" readonly></Input>
        </FormItem>
        <FormItem prop="manager" label="任务负责人：">
          <!-- <Select v-model="viewForm.managerId">
            <Option
              v-for="item in managerList"
              :value="item.value"
              :key="item.value"
              >{{ item.label }}</Option
            >
          </Select> -->
          <Input v-model="viewForm.manager" readonly></Input>
        </FormItem>
        <Row>
          <Col :span="12">
            <FormItem prop="startTime" label="计划开始时间：">
              <!-- <DatePicker
                :value="viewForm.startTime"
                format="yyyy/MM/dd"
                type="datetime"
              >
              </DatePicker> -->
              <Input v-model="viewForm.startTime" readonly></Input>
            </FormItem>
          </Col>
          <Col :span="12">
            <FormItem prop="startRemindTime" label="开始前提醒：">
              <!-- <DatePicker
                :value="viewForm.startRemindTime"
                format="yyyy/MM/dd HH:mm:ss"
                type="datetime"
              ></DatePicker> -->
              <Input v-model="viewForm.startRemindTime" readonly></Input>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col :span="12">
            <FormItem prop="endTime" label="计划结束时间：">
              <!-- <DatePicker
                :value="viewForm.endTime"
                format="yyyy/MM/dd"
                type="datetime"
              ></DatePicker> -->
              <Input v-model="viewForm.endTime" readonly></Input>
            </FormItem>
          </Col>
          <Col :span="12">
            <FormItem prop="endRemindTime" label="结束前提醒：">
              <!-- <DatePicker
                :value="viewForm.endRemindTime"
                format="yyyy/MM/dd HH:mm:ss"
                type="datetime"
              ></DatePicker> -->
              <Input v-model="viewForm.endRemindTime" readonly></Input>
            </FormItem>
          </Col>
        </Row>
      </Form>
      <div class="demo-drawer-footer">
        <Button @click="viewModal = false">取消</Button>
      </div>
    </Drawer>

    <Modal v-model="infoModal" title="提示" :width="260">
      <p>您有未保存的任务，确认退出本次编辑？</p>
      <div slot="footer">
        <Button
          @click="
            addModal = false;
            infoModal = false;
          "
          >退出</Button
        >
        <Button
          type="primary"
          style="margin-left: 8px"
          @click="infoModal = false"
          >继续编辑</Button
        >
      </div>
    </Modal>
  </div>
</template>

<script>
import { getStore, setStore } from "@/libs/storage";
import {
  getTaskList,
  addTask,
  changeTask,
  removeTask,
  getAllProject,
  getManageList,
  taskDetail,
} from "@/api/index";
export default {
  name: "myProject",
  components: {},
  data() {
    const startRemind = (rule, value, callback) => {
      if (this.startCheck && value === "") {
        callback(new Error("请选择提醒时间！"));
      } else if (new Date(this.form.startTime) <= new Date(value)) {
        callback(new Error("提醒时间不能晚于计划开始时间！"));
      } else if (new Date(value) <= new Date()) {
        callback(new Error("提醒时间不能早于当前时间！"));
      } else {
        callback();
      }
    };
    const endRemind = (rule, value, callback) => {
      if (this.endCheck && value === "") {
        callback(new Error("请选择提醒时间！"));
      } else if (new Date(this.form.endTime) <= new Date(value)) {
        callback(new Error("提醒时间不能晚于计划结束时间！"));
      } else if (new Date(value) <= new Date()) {
        callback(new Error("提醒时间不能早于当前时间！"));
      } else {
        callback();
      }
    };
    const validateStart = (rule, value, callback) => {
      /* let nowDate = this.format(new Date(), "yyyy-MM-dd");
      let nowTime = new Date(nowDate).getTime() + 16 * 3600 * 1000 - 1000;
      let startTime = new Date(value).getTime(); */
      if (new Date(value) >= new Date(this.form.endTime)) {
        callback(new Error("开始时间不能晚于结束时间！"));
      } else if (new Date(value) <= new Date()) {
        callback(new Error("开始时间不能早于当前时间！"));
      } else {
        callback();
      }
    };
    const validateEnd = (rule, value, callback) => {
      if (new Date(value) <= new Date(this.form.startTime)) {
        callback(new Error("结束时间不能早于开始时间！"));
      } else {
        callback();
      }
    };
    return {
      infoModal: false,
      rangeTime: "",
      addModal: false,
      loading: true,
      searchForm: {
        name: "",
        projectName: "",
        status: -1,
        type: -1,
        startTime: "",
        endTime: "",
        pageSize: 10,
        pageNumber: 1,
        sort: "createTime",
        order: "desc",
      },
      rules: {},
      total: 0,
      data: [],
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center",
        },
        {
          title: "任务名称",
          key: "name",
          minWidth: 150,
          align: "center",
          render: (h, params) => {
            return h(
              "div",
              {
                style: {
                  title: params.row.name,
                  cursor: 'pointer',
                  color: '#2d8cf0',
                },
                class: "spanDom",
                domProps: {
                  title: params.row.name,
                },
                on: {
                  click: () => {
                    this.handleView(params.row);
                  },
                },
              },
              params.row.name
            );
          },
        },
        {
          title: "所属项目",
          minWidth: 150,
          key: "projectName",
          align: "center",
          render: (h, params) => {
            return h(
              "div",
              {
                style: {
                  title: params.row.projectName,
                },
                class: "spanDom",
                domProps: {
                  title: params.row.projectName,
                },
                
              },
              params.row.projectName
            );
          },
        },

        {
          title: "负责人",
          width: 120,
          key: "manager",
          align: "center",
        },
        {
          title: "计划开始时间",
          width: 170,
          key: "startTime",
          align: "center",
        },
        {
          title: "计划结束时间",
          width: 170,
          key: "endTime",
          align: "center",
        },

        {
          title: "创建人",
          width: 130,
          key: "creator",
          align: "center",
        },

        {
          title: "任务类型",
          width: 130,
          slot: "type",
          align: "center",
        },
        {
          title: "进展状态",
          width: 260,
          slot: "status",
          align: "center",
        },
        {
          title: "操作",
          width: 100,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small",
                  },
                  style: {},
                  on: {
                    click: () => {
                      this.handleView(params.row);
                    },
                  },
                },
                "查看"
              ),
            ]);
          },
        },
      ],
      selectCount: 0,
      selectList: [],
      ruleValidate: {
        name: [
          { required: true, message: "任务名称不能为空！", trigger: "blur" },
          { max: 12, message: "名称长度不能超过12个字符！", trigger: "blur" },
        ],
        projectId: {
          required: true,
          message: "请选择所属项目！",
          trigger: "change",
        },
        description: [
          { required: true, message: "任务描述不能为空！", trigger: "blur" },
        ],
        status: {
          required: true,
          message: "请选择进展状态！",
          trigger: "change",
          type: "number",
        },
        managerId: {
          required: true,
          message: "请选择任务负责人！",
          trigger: "change",
        },
        startTime: [
          {
            required: true,
            message: "请选择计划开始时间！",
            trigger: "change",
          },
          { validator: validateStart, trigger: "change" },
        ],
        endTime: [
          {
            required: true,
            message: "请选择计划结束时间！",
            trigger: "change",
          },
          { validator: validateEnd, trigger: "change" },
        ],
        startRemindTime: { validator: startRemind, trigger: "change" },
        endRemindTime: { validator: endRemind, trigger: "change" },
      },
      form: {
        name: "",
        projectId: "",
        projectName: "",
        description: "",
        status: 0,
        managerId: "",
        startTime: "",
        endTime: "",
        startRemindTime: "",
        endRemindTime: "",
      },
      projectList: [], // 所属项目列表
      managerList: [], // 任务负责人列表
      viewModal: false,
      viewForm: {
        name: "",
        projectName: "",
        description: "",
        status: "",
        manager: "",
        startTime: "",
        endTime: "",
        startRemindTime: "",
        endRemindTime: "",
      },
      endCheck: false,
      startCheck: false,
    };
  },
  created() {
    this.getDataList();
    this.getAllPro();
  },
  methods: {
    // 获取任务列表
    getDataList() {
      this.loading = true;
      let data = {
        ...this.searchForm,
      };
      getTaskList(data).then((res) => {
        this.loading = false;
        if (res.success) {
          if (res.result.content.length !== 0) {
            this.data = res.result.content;
          } else {
            if (this.searchForm.pageNumber !== 1) {
              this.searchForm.pageNumber -= 1;
              this.getDataList();
            } else {
              this.data = res.result.content;
            }
          }
          this.total = res.result.totalElements;
          this.clearSelectAll();
        }
      });
    },
    changeSelect(e) {
      this.selectList = e;
      this.selectCount = e.length;
    },
    changePage(v) {
      this.searchForm.pageNumber = v;
      this.getDataList();
    },
    changesize(v) {
      this.searchForm.pageSize = v;
      this.getDataList();
    },
    clearSelectAll() {
      this.$refs.table.selectAll(false);
    },
    // 获取所有项目
    getAllPro() {
      getAllProject({ pageNumber: 1, pageSize: 1000000 }).then((res) => {
        if (res.success) {
          this.projectList = res.result.content;
        }
      });
    },
    // 新建提交
    handleSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          addTask(this.form).then((res) => {
            if (res.success) {
              this.$Message.success("添加成功！");
            } else {
              this.$Message.error("添加失败！");
            }
            this.addModal = false;
            this.getDataList();
          });
        }
      });
    },
    // 删除
    handleDel() {
      let ids = this.selectList.map((item) => item.id);
      this.$Modal.confirm({
        title: "确认",
        content: "您确认要删除当前选中的数据？",
        loading: true,
        onOk: () => {
          removeTask({ ids }).then((res) => {
            this.$Modal.remove();
            if (res.success) {
              this.$Message.success("删除成功");
              this.getDataList();
            }
          });
        },
      });
    },
    // 查看
    handleView(v) {
      this.viewModal = true;
      this.viewForm = v;
      /* taskDetail(v.id).then((res) => {
        if (res.success) {
          this.viewForm = res.result;
        }
      }); */
    },
    // 搜索
    handleSearch() {
      this.searchForm.pageNumber = 1;
      this.searchForm.pageSize = 10;
      this.getDataList();
    },
    // 重置
    handleReset() {
      this.searchForm.pageNumber = 1;
      this.searchForm.pageSize = 10;
      this.rangeTime = "";
      this.searchForm.startTime = "";
      this.searchForm.endTime = "";
      this.$refs.searchForm.resetFields();
      // 重新加载数据
      this.getDataList();
    },
    // 新建任务按钮
    handleAddTask() {
      this.$refs.form.resetFields();
      if (this.projectList.length > 0) {
        this.form.projectId = this.projectList[0].id;
        this.form.projectName = this.projectList[0].name;
        this.getManagerDate();
      }
      this.startCheck = false;
      this.endCheck = false;
      this.addModal = true;
    },
    // 获取任务负责人列表
    getManagerDate() {
      let userId = JSON.parse(getStore("userInfo")).id;
      getManageList({
        projectId: this.form.projectId,
        pageNumber: 1,
        pageSize: 1000000,
      }).then((res) => {
        if (res.success) {
          this.managerList = res.result.content;
          this.form.managerId = userId;
        }
      });
    },
    // 切换状态
    handleStatus(v) {
      this.$Modal.confirm({
        title: "确认",
        content: "您确认要切换当前进展状态？",
        loading: true,
        onOk: () => {
          changeTask({ id: v.id, status: v.status }).then((res) => {
            this.$Modal.remove();
            if (res.success) {
              this.$Message.success("操作成功");
              this.getDataList();
            }
          });
        },
        onCancel: () => {
          this.$Message.info("操作取消");
          this.getDataList();
        },
      });
    },
    addEndTime(v) {
      this.form.endTime = v;
    },
    addStartTime(v) {
      this.form.startTime = v;
    },
    rangeChange(v) {
      this.searchForm.startTime = v[0];
      this.searchForm.endTime = v[1];
    },
    endRemind(v) {
      this.form.endRemindTime = v;
    },
    startRemind(v) {
      this.form.startRemindTime = v;
    },
    startChange(v) {
      if (!v) {
        this.form.startRemindTime = "";
      }
    },
    endChange(v) {
      if (!v) {
        this.form.endRemindTime = "";
      }
    },
    projectChange(v) {
      this.form.projectId = v.value;
      this.form.projectName = v.label;
      this.getManagerDate();
    },
  },
};
</script>
<style lang="less" scoped>
.ivu-radio-group-button .ivu-radio-wrapper-checked.ingBtn {
  background: #2d8cf0;
  border-color: #2d8cf0;
  color: #fff;
}
.ivu-radio-group-button .ivu-radio-wrapper-checked.noBtn {
  background: #2db7f5;
  border-color: #2db7f5;
  color: #fff;
}
.ivu-radio-group-button .ivu-radio-wrapper-checked.edBtn {
  background: #19be6b;
  border-color: #19be6b;
  color: #fff;
}
.demo-drawer-footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: 1px solid #e8e8e8;
  padding: 10px 16px;
  text-align: left;
  background: #fff;
}
.labelHidden /deep/ .ivu-form-item-content {
  margin-left: 0px !important;
  text-align: right;
}
.labelWidth /deep/ .ivu-form-item-label {
  width: 90px !important;
}
.labelWidth /deep/ .ivu-form-item-content {
  margin-left: 90px !important;
}
.labelHidden /deep/ .ivu-checkbox-wrapper {
  margin-right: 0px !important;
}
/deep/ .spanDom {
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  
}
</style>