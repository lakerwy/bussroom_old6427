<template>
  <div class="resultStep1">
    <Form
      ref="formItem"
      :model="formItem"
      :rules="ruleValidate"
      :label-width="150"
    >
      <Card style="margin-bottom: 20px">
        <Row :gutter="20">
          <Col :span="20">
            <FormItem
              prop="refNoticeId"
              label="关联的公告名称"
              class="refNoticeId"
            >
              <Select
                v-model="formItem.refNoticeId"
                label-in-value
                @on-change="selectName"
                :disabled="flag"
              >
                <Option
                  v-for="item in tenderList"
                  :value="item.id"
                  :key="item.id"
                  :label="item.title"
                >
                  <span class="sptitle" :title="item.title">{{
                    item.title
                  }}</span>
                </Option>
              </Select>
            </FormItem>
          </Col>
          <Col :span="4">
            <Button @click="newTender">新建招标公告</Button>
          </Col>
        </Row>
      </Card>
      <Card style="margin-top: 10px">
        <Row>
          <Col :span="16"
            ><FormItem prop="noticeNumber" style="width: 100%" label="招标编号">
              <Input
                v-model="formItem.noticeNumber"
                maxlength="300"
                disabled
              /> </FormItem
          ></Col>
          <Col :span="8" style="margin-top: 6px"
            ><span>（招标人或代理机构发布公告所使用的编号）</span></Col
          >
        </Row>
        <FormItem prop="title" style="width: 100%" label="公告名称">
          <Input :maxlength="300" v-model="formItem.title" show-word-limit />
        </FormItem>
        <FormItem style="width: 100%" label="公告内容" prop="content" :rules="{required: true,message:'公告内容不能为空！',trigger:'blur'}">
          <tinymce-editor v-model="formItem.content"></tinymce-editor>
        </FormItem>
        <div class="center">
          <Button
            size="large"
            type="primary"
            :loading="subLoading"
            @click="next('formItem')"
            >保存，下一步</Button
          >
        </div>
      </Card>
    </Form>
  </div>
</template>

<script>
import TinymceEditor from "../../../my-components/xboot/tinymce";
import {
  getCanTenderList,
  saveResultFirst,
  viewResultFirst,
} from "@/api/publishApi";
export default {
  name: "resultStep1",
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
      flag: false,
      subLoading: false,
      tenderList: [],
      formItem: {
        refProjectId: "",
        refNoticeId: "",
        noticeNumber: "",
        title: "",
        content: "",
        area:''
      },
      ruleValidate: {
        refNoticeId: [
          {
            required: true,
            message: "请选择关联的公告！",
            trigger: "change",
          },
        ],
        /* noticeNumber: [
          { required: true, message: "中标结果公告编号！", trigger: "blur" },
        ], */
        title: [
          {
            required: true,
            message: "请输入中标结果公告名称！",
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() {
    this.getTenderList();
    if (this.getStore("resultId")) {
      this.flag = true;
      this.viewData(this.getStore("resultId"));
    }
  },
  activated() {
    this.getTenderList();
    if (this.getStore("resultAdd")) {
      this.removeStore("resultAdd");
    }
  },
  methods: {
    // 获取已提交的招标公告
    getTenderList() {
      getCanTenderList().then((res) => {
        if (res.success) {
          this.tenderList = res.result;
          if (this.getStore("addResultClickFlag")) {
            this.clearForm();
            this.removeStore('addResultClickFlag')
          }
          setTimeout(() => {
            if (this.getStore("tenderToResult")) {
              this.formItem.refNoticeId = this.getStore("tenderToResult");
              let data = this.tenderList.find(
                (item) => item.id == this.getStore("tenderToResult")
              );
              this.formItem.title = data.title;
              this.formItem.refProjectId = data.refProjectId;
              this.formItem.noticeNumber = data.noticeNumber;
              this.formItem.area = data.area;
              // this.removeStore("tenderToResult");
            }
          }, 100);
        }
      });
    },
    newTender() {
      if (
        this.$store.state.app.pageOpenedList.some(
          (item) => item.name === "addTender"
        )
      ) {
        this.$Modal.confirm({
          title: "提示",
          content: "当前已有公告正在创建，确认重新创建新公告？",
          onOk: () => {
            this.setStore("addTenderClickFlag", true);
            this.removeStore("projectToTender");
            this.removeStore("tenderId");
            this.setStore("tenderAdd", true);
            this.$router.push({
              name: "addTender",
            });
          },
        });
      } else {
        this.setStore("addTenderClickFlag", true);
        this.removeStore("projectToTender");
        this.removeStore("tenderId");
        this.setStore("tenderAdd", true);
        this.$router.push({
          name: "addTender",
        });
      }
    },
    next(name) {
      let data = { ...this.formItem };
      data.id = this.getStore("resultId") || "";
      this.$refs[name].validate((valid) => {
        if (valid) {
          if (this.getStore("resultId")) {
            this.subLoading = true;
            saveResultFirst(data).then((res) => {
              this.subLoading = false;
              if (res.success) {
                this.setStore("resultId", res.result.id);
                this.$emit("update:currentStep", 1);
              }
            });
          } else {
            this.$Modal.confirm({
              title: "提示",
              content: "提交后就无法重新修改关联公告，确认提交？",
              onOk: () => {
                this.subLoading = true;
                saveResultFirst(data).then((res) => {
                  this.subLoading = false;
                  if (res.success) {
                    this.setStore("resultId", res.result.id);
                    this.$emit("update:currentStep", 1);
                  }
                });
              },
            });
          }
        }
      });
    },
    // 回显
    viewData(id) {
      viewResultFirst(id).then((res) => {
        if (res.success) {
          this.formItem.refProjectId = res.result.refProjectId;
          this.formItem.refNoticeId = res.result.refNoticeId;
          this.formItem.noticeNumber = res.result.noticeNumber;
          this.formItem.title = res.result.title;
          this.formItem.content = res.result.content;
          this.formItem.area = res.result.area;
        }
      });
    },
    selectName(v) {
      this.formItem.title = v.label;
      let data = this.tenderList.find(
        (item) => item.id === v.value
      )
      this.formItem.refProjectId = data.refProjectId;
      this.formItem.refNoticeId = data.id;
      this.formItem.noticeNumber = data.noticeNumber;
      this.formItem.area = data.area;
    },
    // 清空表单
    clearForm() {
      this.$refs.formItem.resetFields();
      this.formItem.content = "";
      this.flag = false;
    },
  },
};
</script>

<style lang="less">
.resultStep1 {
  .center {
    text-align: center;
    margin-top: 30px;
  }
  .refNoticeId {
    .ivu-form-item-label {
      font-weight: bold;
    }
    .sptitle {
      width: 80%;
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
}
</style>
