<template>
  <div class="prequalificationStep1">
    <Form
      ref="formItem"
      :model="formItem"
      :rules="ruleValidate"
      :label-width="170"
    >
      <Card>
        <Row :gutter="20">
          <Col :span="20">
            <FormItem prop="refProjectId" label="关联的项目名称：" class="projectname">
              <Select
                v-model="formItem.refProjectId"
                label-in-value
                @on-change="selectName"
                disabled
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
            <Button @click="newTender">新建项目</Button>
          </Col>
        </Row>
      </Card>
      <Card style="margin-top: 8px">
        <div class="step-center">
          <Divider orientation="left" size="small"
            >1、资格预审公告基本信息</Divider
          >
          <Row>
            <Col :span="16">
              <FormItem prop="noticeNumber" label="招标编号">
                <Input v-model="formItem.noticeNumber" />
              </FormItem>
            </Col>
            <Col :span="8" style="margin-top: 6px">
              <span style="font-size: 12px"
                >（招标人或代理机构发布公告所使用的编号）</span
              >
            </Col>
          </Row>

          <FormItem prop="title" label="公告名称">
            <Input v-model="formItem.title" />
          </FormItem>
          <FormItem label="公告内容" prop="content" :rules="{required: true,message:'公告内容不能为空！',trigger:'blur'}">
            <tinymce-editor v-model="formItem.content"></tinymce-editor>
          </FormItem>
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
          <Divider orientation="left" size="small"
            >2、资格预审文件获取信息</Divider
          >
          <Row>
            <FormItem prop="obtainFileStart" label="资格预审文件获取时间">
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
          </Row>
          <Row>
            <Col :span="24">
              <FormItem prop="obtainFileMethod" label="资格预审文件获取方法">
                <Input
                  maxlength="1000"
                  type="textarea"
                  show-word-limit
                  v-model="formItem.obtainFileMethod"
                />
              </FormItem>
            </Col>
          </Row>
          <div class="center">
            <Button size="large" type="primary" @click="next('formItem')"
              >保存，下一步</Button
            >
          </div>
        </div>
      </Card>
    </Form>
  </div>
</template>

<script>
import { validateSpecial } from "@/libs/validate";
import TinymceEditor from "../../../my-components/xboot/tinymce";
import { getAllProjects, savePreFirst, viewPreFirst } from "@/api/publishApi";
export default {
  name: "prequalificationStep1",
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
      timeOptions: {
        disabledDate(date) {
          return date && date.valueOf() < Date.now() - 63000000;
        }
      },
      projectList: [],
      formItem: {
        refProjectId: "",
        noticeNumber: "",
        title: "",
        content: "",
        categoryId: [],
        area: [],
        obtainFileMethod: "",
        obtainFileStart: "",
        obtainFileEnd: "",
      },
      ruleValidate: {
        categoryId: [
          {
            required: true,
            message: "请选择行业分类！",
            trigger: "change",
            type: "array",
          },
        ],
        refProjectId: [
          { required: true, message: "请选择项目名称！", trigger: "change" },
        ],
        noticeNumber: [
          { required: true, message: "请输入招标编号！", trigger: "blur" },
          { validator: validateSpecial, trigger: "blur" },
          { max: 300, message: "编号长度不能超过300个字符！", trigger: "blur" },
        ],
        title: [
          { required: true, message: "请输入公告名称！", trigger: "blur" },
          { validator: validateSpecial, trigger: "blur" },
          { max: 300, message: "名称长度不能超过300个字符！", trigger: "blur" },
        ],
        obtainFileStart: [
          {
            required: true,
            message: "时间不能为空！",
            trigger: "change",
          },
        ],
        obtainFileMethod: [
          {
            required: true,
            message: "请输入资格预审文件获取方法！",
            trigger: "blur",
          },
          { validator: validateSpecial, trigger: "blur" },
          {
            max: 1000,
            message: "资格预审文件获取方法内容长度不能超过1000个字符！",
            trigger: "blur",
          },
        ],
        area: [
          {
            required: true,
            message: "请选择行政区域！",
            trigger: "change",
            type: "array",
          },
        ],
      },
    };
  },
  created() {
    this.getProjects();
    this.getCurrentStep(this.$route.query.id);
  },
  activated() {
    if (this.getStore("preEdit")) {
      this.removeStore("preEdit");
    }
    this.getProjects();
    this.getCurrentStep(this.$route.query.id);
  },
  methods: {
    // 获取所有项目
    getProjects() {
      getAllProjects().then((res) => {
        if (res.success) {
          this.projectList = res.result;
        }
      });
    },
    // 选择项目名称
    selectName(v) {
      this.formItem.title = v.label;
    },
timeChange(v) {
      this.formItem.obtainFileStart = v[0];
      this.formItem.obtainFileEnd = v[1];
    },
    // 跳转新建招标项目
    newTender() {
      if (
        this.$store.state.app.pageOpenedList.some(
          (item) => item.name === "addProject"
        )
      ) {
        console.log(this.$store.state.app.pageOpenedList);
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
    next(name) {
      let data = {
        ...this.formItem,
        categoryId: this.formItem.categoryId.join(","),
        area: this.formItem.area.join(""),
        id: this.$route.query.id,
      };
      this.$refs[name].validate((valid) => {
        if (valid) {
          window.localStorage.setItem('preObtainFileTimeEdit',  data.obtainFileEnd)
          this.subLoading = true;
          savePreFirst(data).then((res) => {
            this.subLoading = false;
            if (res.success) {
              this.$emit("update:currentStep", 1);
            }
          });
        }
      });
    },
    getCurrentStep(id) {
      viewPreFirst(id).then((res) => {
        if (res.success) {
          window.localStorage.setItem('preObtainFileTimeEdit',  res.result.obtainFileEnd)
          this.formItem.refProjectId = res.result.refProjectId;
          this.formItem.noticeNumber = res.result.noticeNumber;
          this.formItem.title = res.result.title;
          this.formItem.content = res.result.content;
          this.formItem.categoryId = res.result.categoryId.split(",");
          this.formItem.obtainFileStart =  res.result.obtainFileStart;
          this.formItem.obtainFileEnd =  res.result.obtainFileEnd;
          this.formItem.obtainFileMethod = res.result.obtainFileMethod;
          this.timeRange = [res.result.obtainFileStart, res.result.obtainFileEnd];
          
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
  },
};
</script>

<style lang="less">
@import "../../../../components/region/region.css";
.prequalificationStep1 {
  min-height: calc(100vh - 132px);
  .center {
    text-align: center;
    margin-top: 30px;
  }
  .projectname {
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

  .ivu-divider-horizontal.ivu-divider-with-text-left:before {
    width: 0;
  }

  .labelHidden .ivu-form-item-content {
    margin-left: 0px !important;
  }

  .ivu-dropdown .ivu-select-dropdown{
    width: 100%!important;
    left: 0!important;
  }
}
</style>
