<template>
  <div class="correctStep1">
    <Form
      ref="formItem"
      :model="formItem"
      :rules="ruleValidate"
      :label-width="120"
    >
      <Card>
        <FormItem
          style="width: 100%; font-weight: bold; margin-bottom: 0px"
          label="关联的公示名称"
        >
          <span style="color: #5070fa; font-size: 16px">{{ tenderTitle }}</span>
        </FormItem>
      </Card>
      <Card style="margin-top: 10px">
        <Row>
          <Col :span="16">
            <FormItem prop="noticeNumber" style="width: 100%" label="招标编号">
              <Input
                disabled
                v-model="formItem.noticeNumber"
                :maxlength="300"
              />
            </FormItem>
          </Col>
          <Col :span="8" style="margin-top: 6px">
            <span>（招标人或代理机构发布公告所使用的编号）</span>
          </Col>
        </Row>
        <FormItem prop="title" style="width: 100%" label="变更公示名称">
          <Input v-model="formItem.title" :maxlength="300" show-word-limit />
        </FormItem>
        <FormItem style="width: 100%" label="变更公示内容" prop="content" :rules="{required: true,message:'公示内容不能为空！',trigger:'blur'}">
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
import { validateSpecial } from "@/libs/validate";
import {
  viewCanInfo,
  changeCandidate,
  getCanTenderList,
  saveChangeCandidate,
} from "@/api/publishApi";
export default {
  name: "correctStep1",
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
      tenderTitle: "",
      formItem: {
        noticeNumber: "",
        title: "",
        content: "",
        area:'',
      },
      ruleValidate: {
        noticeNumber: [
          { required: true, message: "招标编号不能为空！", trigger: "blur" },
          { validator: validateSpecial, trigger: "blur" },
          { max: 300, message: "编号长度不能超过300个字符！", trigger: "blur" },
        ],
        title: [
          { required: true, message: "公示名称不能为空！", trigger: "blur" },
          { validator: validateSpecial, trigger: "blur" },
          {
            max: 300,
            message: "公示名称度不能超过300个字符！",
            trigger: "blur",
          },
        ],
        content: [
          { required: true, message: "公示内容不能为空！", trigger: "blur" },
          { validator: validateSpecial, trigger: "blur" },
          {
            max: 5000,
            message: "公示内容度不能超过5000个字符！",
            trigger: "blur",
          },
        ],
      },
      canInfo: {},
    };
  },
  created() {
    if (this.getStore("changeCanId")) {
      this.getView(this.getStore("changeCanId"));
    } else {
      this.getView(this.$route.query.id);
    }
  },
  activated() {
    if (this.getStore("changeCanId")) {
      this.getView(this.getStore("changeCanId"));
    } else {
      this.getView(this.$route.query.id);
    }
    if (this.getStore("candidateChange")) {
      this.removeStore("candidateChange");
    }
  },
  methods: {
    getView(id) {
      viewCanInfo(id).then((data) => {
        if(this.getStore('changeCanClickFlag')){
          this.clearForm();
          this.removeStore('changeCanClickFlag')
        }
        if (data.success) {
          this.canInfo = data.result;
          if (this.canInfo.pid) {
            viewCanInfo(this.canInfo.pid).then((item) => {
              this.tenderTitle = item.result.title;
            });
          } else {
            this.tenderTitle = this.canInfo.title;
          }
          this.formItem.noticeNumber = this.canInfo.noticeNumber;
          this.formItem.area = this.canInfo.area;
          if (this.getStore("changeCanId")) {
            this.formItem.content = this.canInfo.content;
            this.formItem.title = this.canInfo.title;
          } else {
            this.formItem.title = this.canInfo.title + "（变更）";
          }
        }
      });
    },

    next(name) {
      if (this.getStore("changeCanId")) {
        let data = {
          ...this.formItem,
          id: this.getStore("changeCanId"),
        };
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.subLoading = true;
            saveChangeCandidate(data).then((res) => {
              this.subLoading = false;
              if (res.success) {
                this.$emit("update:currentStep", 1);
              }
            });
          }
        });
      } else {
        let data = {
          ...this.canInfo,
        };
        data.title = this.formItem.title;
        data.content = this.formItem.content;
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.subLoading = true;
            changeCandidate(data).then((res) => {
              this.subLoading = false;
              if (res.success) {
                this.setStore("changeCanId", res.result.id);
                this.$emit("update:currentStep", 1);
              }
            });
          }
        });
      }
    },
    // 清空表单
    clearForm() {
      this.$refs.formItem.resetFields();
      this.formItem.content = "";
    },
  },
};
</script>

<style lang="less" scoped>
.center {
  text-align: center;
  margin-top: 30px;
}
</style>
