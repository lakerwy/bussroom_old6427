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
              <Select v-model="formItem.refNoticeId" disabled label-in-value @on-change="selectName">
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
        <FormItem
          prop="title"
          style="width: 100%"
          label="公告名称"
        >
          <Input
            :maxlength="300"
            v-model="formItem.title"
            show-word-limit
          />
        </FormItem>
        <FormItem
          style="width: 100%"
          label="公告内容"
          prop="content" :rules="{required: true,message:'公告内容不能为空！',trigger:'blur'}"
        >
          <tinymce-editor v-model="formItem.content"></tinymce-editor>
        </FormItem>
        <div class="center">
          <Button size="large" type="primary" :loading="subLoading" @click="next('formItem')"
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
      subLoading: false,
      tenderList: [],
      formItem: {
        refProjectId:'',
        refNoticeId: "",
        noticeNumber: "",
        title: "",
        content: "",
      },
      ruleValidate: {
        refNoticeId: [
          {
            required: true,
            message: "请选择公告！",
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
    this.viewData(this.$route.query.id);
  },
  activated() {
    if(this.getStore('resultEdit')){
      this.removeStore('resultEdit');
    }
    this.getTenderList();
    this.viewData(this.$route.query.id);
  },
  methods: {
    // 获取已提交的招标公告
    getTenderList() {
      getCanTenderList().then((res) => {
        if (res.success) {
          this.tenderList = res.result;
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
    next(name) {
      let data = { ...this.formItem };
      data.id = this.$route.query.id;
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.subLoading = true;
          saveResultFirst(data).then((res) => {
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
      viewResultFirst(id).then((res) => {
        if (res.success) {
          this.formItem.refProjectId = res.result.refProjectId;
          this.formItem.refNoticeId = res.result.refNoticeId;
          this.formItem.noticeNumber = res.result.noticeNumber;
          this.formItem.title = res.result.title;
          this.formItem.content = res.result.content;
        }
      });
    },
    selectName(v) {
      this.formItem.title = v.label;
      this.formItem.refProjectId = this.tenderList.find(item => item.id === v.value).refProjectId
    }
  },
};
</script>

<style lang="less">
.resultStep1{
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
