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
          label="关联的公告名称"
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
        <FormItem prop="title" style="width: 100%" label="变更公告名称">
          <Input v-model="formItem.title" :maxlength="300" show-word-limit />
        </FormItem>
        <FormItem style="width: 100%" prop="content" :rules="{required: true,message:'公告内容不能为空！',trigger:'blur'}" label="变更公告内容">
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
import {
  viewResultFirst,
  saveChangeResult,
  getCanTenderList,
  saveChangeRes,
} from "@/api/publishApi";
import { validateSpecial } from "@/libs/validate";
import TinymceEditor from "../../../my-components/xboot/tinymce";
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
      formItem: {
        noticeNumber: "",
        title: "",
        content: "",
        area:''
      },
      tenderTitle:'',
      ruleValidate: {
        noticeNumber: [
          { required: true, message: "招标编号不能为空！", trigger: "blur" },
          { validator: validateSpecial, trigger: "blur" },
          { max: 300, message: "编号长度不能超过300个字符！", trigger: "blur" },
        ],
        title: [
          { required: true, message: "公告名称不能为空！", trigger: "blur" },
          { validator: validateSpecial, trigger: "blur" },
          {
            max: 300,
            message: "公告名称度不能超过300个字符！",
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() {
    if (this.getStore("changeResultId")) {
      this.getView(this.getStore("changeResultId"));
    } else {
      this.getView(this.$route.query.id);
    }
  },
  activated() {
    if (this.getStore("changeResultId")) {
      this.getView(this.getStore("changeResultId"));
    } else {
      this.getView(this.$route.query.id);
    }
    if (this.getStore("resultChange")) {
      this.removeStore("resultChange");
    }
  },
  methods: {
    // 回显
    getView(id) {
      viewResultFirst(id).then((data) => {
        if (data.success) {
          this.canInfo = data.result;
          if (this.canInfo.pid) {
            viewResultFirst(this.canInfo.pid).then((item) => {
              this.tenderTitle = item.result.title;
            });
          } else {
            this.tenderTitle = this.canInfo.title;
          }
          this.formItem.noticeNumber = this.canInfo.noticeNumber;
          this.formItem.area = this.canInfo.area;
          if (this.getStore("changeResultId")) {
            this.formItem.content = this.canInfo.content;
            this.formItem.title = this.canInfo.title;
          } else {
            this.formItem.title = this.canInfo.title + "（变更）";
          }
        }
        if (this.getStore("changeResultClickFlag")) {
          this.clearForm();
          this.removeStore("changeResultClickFlag");
        }
      });
    },
    next(name) {
      if (this.getStore("changeResultId")) {
        let data = {
          ...this.formItem,
          id: this.getStore("changeResultId"),
        };
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.subLoading = true;
            saveChangeRes(data).then((res) => {
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
            saveChangeResult(data).then((res) => {
              this.subLoading = false;
              if (res.success) {
                this.setStore("changeResultId", res.result.id);
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
