<template>
  <div class="candidateStep1">
    <Row>
      <Form
        ref="formItem"
        :model="formItem"
        :rules="ruleValidate"
        :label-width="170"
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
                  disabled
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
        <Card>
          <Row>
            <Col :span="16"
              ><FormItem
                prop="noticeNumber"
                style="width: 100%"
                label="招标编号"
              >
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
          <Row>
            <Col :span="24">
              <FormItem
                prop="title"
                style="width: 100%"
                label="公示名称"
              >
                <Input
                  v-model="formItem.title"
                  maxlength="300"
                  show-word-limit
                />
              </FormItem>
            </Col>
          </Row>

          <Row :gutter="10">
            <Col :span="24"
              ><FormItem style="width: 100%" label="公示内容" prop="content" :rules="{required: true,message:'公示内容不能为空！',trigger:'blur'}">
                <tinymce-editor
                  v-model="formItem.content"
                ></tinymce-editor> </FormItem
            ></Col>
          </Row>
          <Row :gutter="10">
            <Col :span="24">
              <FormItem
                prop="objection"
                style="width: 100%"
                label="提出异议的渠道和方式"
              >
                <Input
                  type="textarea"
                  v-model="formItem.objection"
                  :maxlength="1000"
                  show-word-limit
                /> </FormItem
            ></Col>
          </Row>
          <Row>
            <FormItem
              prop="noticeEndTime"
              style="width: 100%"
              label="公示结束时间"
            >
              <DatePicker
                v-model="formItem.noticeEndTime"
                type="datetime"
                :editable="false"
                style="width: 300px"
                format="yyyy-MM-dd HH:mm:ss"
                transfer
              >
              </DatePicker>
            </FormItem>
          </Row>
          <div class="center">
            <Button
              size="large"
              :loading="subLoading"
              type="primary"
              @click="next('formItem')"
              >保存，下一步</Button
            >
          </div>
        </Card>
      </Form>
    </Row>
  </div>
</template>

<script>
import TinymceEditor from "../../../my-components/xboot/tinymce";
import { validateSpecial } from "@/libs/validate";
import {
  getCanTenderList,
  saveCanFirst,
  viewCanInfo,
} from "@/api/publishApi";
export default {
  name: "editStep1",
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
      subLoading: false,
      tenderList: [],
      formItem: {
        refNoticeId: "",
        noticeNumber: "",
        title: "",
        content: "",
        objection: "",
        noticeEndTime: "",
        refProjectId: "",
      },
      ruleValidate: {
        refNoticeId: [
          {
            required: true,
            message: "请选择招标项目！",
            trigger: "change",
          },
        ],
        /* noticeNumber: [
          { required: true, message: "请输入招标编号！", trigger: "blur" },
          { validator: validateSpecial, trigger: "blur" },
        ], */
        title: [
          { required: true, message: "请输入公示名称！", trigger: "blur" },
          { validator: validateSpecial, trigger: "blur" },
        ],
        objection: [
          {
            required: true,
            message: "请输入提出异议的渠道和方式！",
            trigger: "blur",
          },
          { validator: validateSpecial, trigger: "blur" },
        ],
        noticeEndTime: [
          {
            required: true,
            message: "请选择结束时间！",
            trigger: "change",
            type: "date",
          },
        ],
      },
    };
  },
  created() {
    this.getTenderList();
    this.viewData(this.$route.query.id);
  },
  activated() {
    if(this.getStore('candidateEdit')){
      this.removeStore('candidateEdit');
    }
    this.getTenderList();
    this.viewData(this.$route.query.id);
  },
  methods: {
    // 新建招标公告
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
            this.setStore('addTenderClickFlag', true)
            this.removeStore("projectToTender");
            this.removeStore("tenderId");
            this.setStore("tenderAdd", true);
            this.$router.push({
              name: "addTender",
            });
          },
        });
      } else {
        this.setStore('addTenderClickFlag', true)
        this.removeStore("projectToTender");
        this.removeStore("tenderId");
        this.setStore("tenderAdd", true);
        this.$router.push({
          name: "addTender",
        });
      }
    },
    // 获取已提交的招标公告
    getTenderList() {
      getCanTenderList().then((res) => {
        if (res.success) {
          this.tenderList = res.result;
        }
      });
    },
    next(name) {
      let data = { ...this.formItem, id: this.$route.query.id };
      this.$refs[name].validate((valid) => {
        if (valid) {
          data.noticeEndTime = this.format(new Date(this.formItem.noticeEndTime), 'yyyy-MM-dd HH:mm:ss')
          this.subLoading = true;
          saveCanFirst(data).then((res) => {
            this.subLoading = false;
            if (res.success) {
              this.$emit("update:currentStep", 1);
            }
          });
        }
      });
    },
    // 回显
    viewData(id) {
      viewCanInfo(id).then((res) => {
        if (res.success) {
          this.formItem.refNoticeId = res.result.refNoticeId;
          this.formItem.noticeNumber = res.result.noticeNumber;
          this.formItem.title = res.result.title;
          this.formItem.content = res.result.content;
          this.formItem.objection = res.result.objection;
          this.formItem.noticeEndTime = new Date(res.result.noticeEndTime);
        }
      });
    },
    // 选择公告
    selectName(v) {
      this.formItem.title = v.label;
      this.formItem.refProjectId = this.tenderList.find(
        (item) => item.id === v.value
      ).refProjectId;
    },
  },
};
</script>

<style lang="less" scoped>
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
</style>
