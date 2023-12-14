<template>
  <div class="symptomStep1">
    <Form
      ref="formItem"
      :model="formItem"
      :rules="ruleValidate"
      :label-width="130"
    >
      <Card>
        <FormItem
          style="width: 100%; font-weight: bold; margin-bottom: 0px"
          label="关联的公告名称"
        >
          <span style="color: #5070FA;font-size:16px;">{{ aboutProject }}</span>
        </FormItem>
      </Card>
      <Card style="margin-top: 10px">
        <Row>
          <Col :span="16">
            <FormItem prop="noticeNumber" style="width: 100%" label="招标编号">
              <Input
                v-model="formItem.noticeNumber"
                disabled
                :maxlength="300"
              />
            </FormItem>
          </Col>
          <Col :span="8" style="margin-top: 6px">
            <span>（招标人或代理机构发布公告所使用的编号）</span>
          </Col>
        </Row>
        <FormItem prop="title" style="width: 100%" label="废标公告名称">
          <Input v-model="formItem.title" :maxlength="300" show-word-limit />
        </FormItem>
        <FormItem style="width: 100%" label="废标公告内容" prop="content" :rules="{required: true,message:'公告内容不能为空！',trigger:'blur'}">
          <tinymce-editor v-model="formItem.content"></tinymce-editor>
        </FormItem>
        <div class="center">
          <Button size="large" type="primary" @click="next('formItem')"
            >保存，下一步</Button
          >
        </div>
      </Card>
    </Form>
  </div>
</template>

<script>
import { invalidNotice, getTenderStep, getAllProjects,saveInvalidNotice,getCanTenderList } from "@/api/publishApi";
import TinymceEditor from "../../../my-components/xboot/tinymce";
import { validateSpecial } from "@/libs/validate";
export default {
  name: "abandonStep1",
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
      aboutProject: "",
      formItem: {
        noticeNumber: "",
        title: "",
        content: "",
      },
      ruleValidate: {
        title: [
          { required: true, message: "公告名称不能为空！", trigger: "blur" },
          { validator: validateSpecial, trigger: "blur" },
          {
            max: 300,
            message: "公告名称度不能超过300个字符！",
            trigger: "blur",
          },
        ],
        content: [
          { required: true, message: "公告内容不能为空！", trigger: "blur" },
          { validator: validateSpecial, trigger: "blur" },
          {
            max: 5000,
            message: "公告内容度不能超过5000个字符！",
            trigger: "blur",
          },
        ],
      },
      noticeInfo: {}
    };
  },
  created() {
    if(this.getStore('abandonTenderId')){
      this.getProjects(this.getStore('abandonTenderId'))
    }else {
      this.getProjects(this.$route.query.id);
    }
    if(this.getStore('tenderAbandon')){
      this.removeStore('tenderAbandon');
    }
  },
  activated() {
    if(this.getStore('abandonTenderId')){
      this.getProjects(this.getStore('abandonTenderId'))
    }else {
      this.getProjects(this.$route.query.id);
    }
    if(this.getStore('tenderAbandon')){
      this.removeStore('tenderAbandon');
    }
  },
  methods: {
    // 获取项目
    getProjects(id) {
      getCanTenderList().then((res) => {
        if(this.getStore('abandonTenderClickFlag')) {
          this.clearForm();
          this.removeStore('abandonTenderClickFlag')
        }
        if (res.success) {
          let projectList = res.result;
          let data = projectList.find(item => this.$route.query.id == item.id)
          this.aboutProject = data.title;
          this.formItem.noticeNumber  = data.noticeNumber;
          getTenderStep(id).then((data) => {
            if (data.success) {
              this.noticeInfo = data.result;
              
              if(this.getStore('abandonTenderId')){
                this.formItem.content = this.noticeInfo.content;
                this.formItem.title = this.noticeInfo.title
              }else {
                this.formItem.title = this.noticeInfo.title + '（废标）'
              }
            }
          });
        }
      });
    },
    next(name) {
      if(this.getStore('abandonTenderId')) {
        let data = {
          ...this.formItem,
          id: this.getStore('abandonTenderId')
        }
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.subLoading = true;
            saveInvalidNotice(data).then(res => {
              this.subLoading = false;
              if(res.success) {
                this.$emit("update:currentStep", 1);
              }
            })
          }
        });
      }else {
        let data = {
          ...this.noticeInfo
        }
        data.title = this.formItem.title;
        data.content = this.formItem.content;
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.subLoading = true;
            invalidNotice(data).then(res => {
              this.subLoading = false;
              if(res.success) {
                this.setStore('abandonTenderId', res.result.id);
                this.$emit("update:currentStep", 1);
              }
            })
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
