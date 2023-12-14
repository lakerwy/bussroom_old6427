<template>
  <div class="announcementStep1">
    <Row>
      <Form
        ref="formItem"
        :model="formItem"
        :rules="ruleValidate"
        :label-width="140"
      >
        <Card style="margin-bottom: 20px">
          <Row :gutter="20">
            <Col :span="20">
              <FormItem
                prop="refProjectId"
                label="关联的项目名称："
                class="refProjectId"
              >
                <Select
                  v-model="formItem.refProjectId"
                  @on-change="selectName"
                  label-in-value
                  :disabled="flag"
                >
                  <Option
                    v-for="item in projectList"
                    :value="item.id"
                    :key="item.id"
                    :label="item.projectTitle"
                  >
                    <span class="spanName" :title="item.projectTitle">{{
                      item.projectTitle
                    }}</span>
                  </Option>
                </Select>
              </FormItem>
            </Col>
            <Col :span="4">
              <Button @click="newProject">新建项目</Button>
            </Col>
          </Row>
        </Card>
        <Card>
          <Divider orientation="left" size="small">1、招标公告基本信息</Divider>
          <Row>
            <Col :span="12">
              <FormItem prop="noticeNumber" label="招标编号">
                <Input v-model="formItem.noticeNumber" :maxlength="300" />
              </FormItem>
            </Col>
            <Col :span="12">
              <p style="margin-top: 10px">
                （招标人或代理机构发布公告所使用的编号）
              </p>
            </Col>
          </Row>
          <Row>
            <FormItem prop="title" label="公告名称">
              <Input v-model="formItem.title" :maxlength="300" />
            </FormItem>
          </Row>
          <Row>
            <FormItem label="公告内容" prop="content" :rules="{required: true,message:'公告内容不能为空！',trigger:'blur'}">
              <tinymce-editor v-model="formItem.content"></tinymce-editor>
            </FormItem>
          </Row>
          <Row>
            <Col :span="12">
              <FormItem prop="categoryId" label="所属行业分类">
                <Select v-model="formItem.categoryId" multiple filterable>
                  <Option
                    v-for="item in this.SEL.industryClass"
                    :value="item.value"
                    :key="item.value"
                    >{{ item.label }}
                  </Option>
                </Select>
              </FormItem>
            </Col>
            <Col :span="12">
              <FormItem prop="area" label="所在行政区域">
                <i-region
                  v-model="formItem.area"
                  data-type="name"
                  type="city"
                  @on-change="areaChange"
                />
              </FormItem>
            </Col>
          </Row>
          <Divider orientation="left" size="small">2、招标文件获取信息</Divider>
          <Row>
            <Col :span="12">
              <FormItem prop="obtainFileStart" label="招标文件获取时间">
                <!-- <DatePicker
                  type="date"
                  v-model="formItem.obtainFileTime"
                  style="width: 100%"
                  format="yyyy-MM-dd"
                  :options="timeOptions"
                  :editable="false"
                  transfer
                ></DatePicker> -->
                <DatePicker
                  type="datetimerange"
                  placeholder="请选择时间"
                  format="yyyy-MM-dd"
                  style="width: 100%"
                  @on-change="timeChange"
                  v-model="timeRange"
                  :editable="false"
                  :options="timeOptions"
                ></DatePicker>
              </FormItem>
            </Col>
            <Col :span="12" v-if="false">
              <p style="margin-top: 10px; margin-left: 10px; color: red">
                当日17:30—24:00间提交的，文件获取开始时间请选择第二日0点后时间！
              </p>
            </Col>
          </Row>
          <Row>
            <FormItem prop="obtainFileMethod" label="招标文件获取方法">
              <Input
                type="textarea"
                v-model="formItem.obtainFileMethod"
                :maxlength="1000"
                show-word-limit
              />
            </FormItem>
          </Row>
          <Row>
            <div class="center">
              <Button
                size="large"
                type="primary"
                :loading="subLoading"
                @click="next('formItem')"
                >保存，下一步</Button
              >
            </div>
          </Row>
        </Card>
      </Form>
    </Row>
  </div>
</template>

<script>
import { validateSpecial } from "@/libs/validate";
import { getAllProjects, tenderFirst, getTenderStep } from "@/api/publishApi";
import TinymceEditor from "../../../my-components/xboot/tinymce";
export default {
  name: "tenderSteps1",
  props: {
    currentStep: {
      type: Number,
      default: 0,
    },
  },
  components: {
    TinymceEditor,
  },

  data() {
    return {
      timeRange: [],
      subLoading: false,
      timeOptions: {
        disabledDate(date) {
          return date && date.valueOf() < Date.now() - 63000000;
        },
      },
      projectList: [],
      formItem: {
        refProjectId: "",
        noticeNumber: "",
        title: "",
        content: "",
        categoryId: [], // 所属行业分类
        obtainFileStart: "",
        obtainFileEnd: "",
        area: [],
        obtainFileMethod: "",
      },
      ruleValidate: {
        refProjectId: [
          {
            required: true,
            message: "请选择关联的项目！",
            trigger: "change",
          },
        ],
        noticeNumber: [
          { required: true, message: "招标编号不能为空！", trigger: "blur" },
          { validator: validateSpecial, trigger: "blur" },
          { max: 300, message: "编号长度不能超过300个字符！", trigger: "blur" },
        ],
        title: [
          { required: true, message: "公告名称不能为空！", trigger: "blur" },
          { validator: validateSpecial, trigger: "blur" },
          {
            max: 10000,
            message: "名称长度不能超过10000个字符！",
            trigger: "blur",
          },
        ],
        categoryId: [
          {
            type: "array",
            required: true,
            message: "请选择行业分类！",
            trigger: "change",
          },
        ],
        obtainFileStart: [
          { required: true, message: "时间不能为空！", trigger: "change" },
        ],
        obtainFileMethod: [
          {
            required: true,
            message: "招标文件获取方法不能为空！",
            trigger: "blur",
          },
          { validator: validateSpecial, trigger: "blur" },
          {
            max: 1000,
            message: "招标文件获取方法长度不能超过1000个字符！",
            trigger: "blur",
          },
        ],
        area: [
          {
            required: true,
            message: "请选择所在行政区域！",
            trigger: "change",
            type: "array",
          },
        ],
      },
      flag: false,
    };
  },
  created() {
    this.getProjects();
    if (this.getStore("tenderId")) {
      this.flag = true;
      this.getCurrentStep(this.getStore("tenderId"));
    }
  },
  activated() {
    this.getProjects();
    if (this.getStore("tenderAdd")) {
      this.removeStore("tenderAdd");
      this.$emit("update:currentStep", 0);
    }
  },
  methods: {
    // 获取所有项目
    getProjects() {
      getAllProjects().then((res) => {
        if (res.success) {
          this.projectList = res.result;
          if (this.getStore("addTenderClickFlag")) {
            this.clearForm();
            this.removeStore("addTenderClickFlag");
          }
          setTimeout(() => {
            if (this.getStore("projectToTender")) {
              this.formItem.refProjectId = this.getStore("projectToTender");
              this.formItem.title = this.projectList.find(
                (item) => item.id == this.getStore("projectToTender")
              ).projectTitle;
              // this.removeStore("projectToTender");
            }
          }, 100);
        }
      });
    },
    // 选择项目名称
    selectName(v) {
      if (!v) return;
      this.formItem.title = v.label;
    },
    // 获取当前步骤已保存的信息
    getCurrentStep(id) {
      getTenderStep(id).then((res) => {
        if (res.success) {
          window.localStorage.setItem(
            "tenObtainFileTime",
            res.result.obtainFileEnd
          );
          this.formItem.refProjectId = res.result.refProjectId + "";
          this.formItem.noticeNumber = res.result.noticeNumber;
          this.formItem.title = res.result.title;
          this.formItem.content = res.result.content;
          this.formItem.categoryId = res.result.categoryId.split(",");
          this.formItem.obtainFileStart = res.result.obtainFileStart;
          this.formItem.obtainFileEnd = res.result.obtainFileEnd;
          this.formItem.obtainFileMethod = res.result.obtainFileMethod;
          this.timeRange = [
            res.result.obtainFileStart,
            res.result.obtainFileEnd,
          ];

          let area = res.result.area;
          let index;
          let arr;
          if (area.includes("省")) {
            index = area.indexOf("省") + 1;
          } else if (area.includes("自治区")) {
            index = area.indexOf("自治区") + 3;
          } else if (area.includes("港澳")) {
            index = area.indexOf("港澳") + 2;
          } else {
            index = area.indexOf("市") + 1;
          }
          arr = [area.slice(0, index), area.slice(index)];
          this.formItem.area = arr;
        }
      });
    },
    next(name) {
      let data = {
        ...this.formItem,
        categoryId: this.formItem.categoryId.join(","),
        area: this.formItem.area.join(""),
        id: "",
      };
      if (this.getStore("tenderId")) {
        data.id = this.getStore("tenderId");
        this.$refs[name].validate((valid) => {
          if (valid) {
            window.localStorage.setItem(
              "tenObtainFileTime",
              data.obtainFileEnd
            );
            this.subLoading = true;
            tenderFirst(data).then((res) => {
              this.subLoading = false;
              if (res.success) {
                this.setStore("tenderId", res.result.id);
                this.$emit("update:currentStep", 1);
              }
            });
          }
        });
      } else {
        this.$refs[name].validate((valid) => {
          if (valid) {
            window.localStorage.setItem(
              "tenObtainFileTime",
              data.obtainFileEnd
            );
            this.$Modal.confirm({
              title: "提示",
              content: "提交后就无法重新修改关联项目，确认提交？",
              onOk: () => {
                this.subLoading = true;
                tenderFirst(data).then((res) => {
                  this.subLoading = false;
                  if (res.success) {
                    this.setStore("tenderId", res.result.id);
                    this.$emit("update:currentStep", 1);
                  }
                });
              },
            });
          }
        });
      }
    },
    newProject() {
      if (
        this.$store.state.app.pageOpenedList.some(
          (item) => item.name === "addProject"
        )
      ) {
        this.$Modal.confirm({
          title: "提示",
          content: "当前已有项目正在创建，确认重新创建新项目？",
          onOk: () => {
            this.removeStore("projectId");
            this.removeStore("oldProjectId");
            this.removeStore("projectStep");
            this.setStore("addProject", true);
            this.$router.push({
              name: "addProject",
            });
          },
        });
      } else {
        this.removeStore("projectId");
        this.removeStore("oldProjectId");
        this.removeStore("projectStep");
        this.setStore("addProject", true);
        this.$router.push({
          name: "addProject",
        });
      }
    },
    timeChange(v) {
      this.formItem.obtainFileStart = v[0];
      this.formItem.obtainFileEnd = v[1];
    },
    // 清空表单
    clearForm() {
      this.$refs.formItem.resetFields();
      this.timeRange = [];
      this.formItem.content = "";
      this.flag = false;
    },
  },
};
</script>

<style lang="less">
@import "../../../../components/region/region.css";
.announcementStep1 {
  min-height: calc(100vh - 132px);
  .ivu-divider {
    margin-bottom: 10px;
  }

  .ivu-divider-inner-text {
    color: #2d8cf0;
  }

  .ivu-divider-horizontal.ivu-divider-with-text-left:before {
    width: 0;
  }

  .center {
    text-align: center;
    margin-top: 30px;
  }

  .rg-default-btn {
    min-width: 120px;
  }

  .refProjectId {
    .ivu-form-item-label {
      font-weight: bold;
    }

    .spanName {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-right: 10px;
    }

    .ivu-select-dropdown {
      width: 100%;
      left: 0px;
    }

    .ivu-select-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .ivu-divider-inner-text {
    color: #2d8cf0;
  }

  .ivu-dropdown .ivu-select-dropdown {
    width: 100% !important;
    left: 0 !important;
  }
}
</style>
