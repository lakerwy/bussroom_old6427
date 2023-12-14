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
        <FormItem prop="title" style="width: 100%" label="变更公告名称">
          <Input v-model="formItem.title" :maxlength="300" show-word-limit />
        </FormItem>
        <FormItem style="width: 100%" label="变更公告内容" prop="content" :rules="{required: true,message:'公告内容不能为空！',trigger:'blur'}">
          <tinymce-editor v-model="formItem.content"></tinymce-editor>
        </FormItem>
        <FormItem style="width: 100%" label="是否延期开标" prop="isDelay">
          <RadioGroup v-model="formItem.isDelay">
            <Radio :label="1">是</Radio>
            <Radio :label="0">否</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem prop="openBidTime" style="width: 100%" label="开标时间" v-if="formItem.isDelay">
          <DatePicker
            v-model="formItem.openBidTime"
            type="datetime"
            style="width: 220px"
            transfer
            format="yyyy-MM-dd HH:mm:ss"
            :editable="false"
          ></DatePicker>
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
import { validateSpecial } from "@/libs/validate";
import TinymceEditor from "../../../my-components/xboot/tinymce";
import { changeNotice, getTenderStep, getAllProjects,saveChangeNotice,getCanTenderList } from "@/api/publishApi";
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
      aboutProject: "",
      formItem: {
        noticeNumber: "",
        title: "",
        content: "",
        isDelay: 1,
        openBidTime: "",
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
        isDelay: [
          {
            required: true,
            message: "请选择是否延期开标！",
            trigger: "change",
            type:'number'
          },
        ],
        openBidTime: [
          {
            required: true,
            message: "请选择开标时间！",
            trigger: "change",
            type: "date",
          },
        ],
      },
      noticeInfo: {}
    };
  },
  created() {
    if(this.getStore('changeTenderId')){
      this.getProjects(this.getStore('changeTenderId'))
    }else {
      this.getProjects(this.$route.query.id);
    }
    if(this.getStore('editCorrectTender')){
      this.removeStore('editCorrectTender');
    }
  },
  activated() {
    if(this.getStore('changeTenderId')){
      this.getProjects(this.getStore('changeTenderId'))
    }else {
      this.getProjects(this.$route.query.id);
    }
    if(this.getStore('editCorrectTender')){
      this.removeStore('editCorrectTender');
    }
  },
  methods: {
    // 获取项目
    getProjects(id) {
      getCanTenderList().then((res) => {
        if(this.getStore('changeTenderClickFlag')) {
          this.clearForm();
          this.removeStore('changeTenderClickFlag')
        }
        if (res.success) {
          let projectList = res.result;
          let data = projectList.find(item => this.$route.query.id == item.id)
          this.aboutProject = data.title;
          this.formItem.noticeNumber  = data.noticeNumber;
          getTenderStep(id).then((data) => {
            if (data.success) {
              this.noticeInfo = data.result;
              
              if(this.getStore('changeTenderId')){
                this.formItem.content = this.noticeInfo.content;
                this.formItem.isDelay = this.noticeInfo.isDelay;
                this.formItem.openBidTime = this.noticeInfo.openBidTime;
                this.formItem.title = this.noticeInfo.title
              }else {
                this.formItem.title = this.noticeInfo.title + '（变更）'
              }
            }
          });
        }
      });
    },
    next(name) {
      if(this.getStore('changeTenderId')) {
        let data = {
          ...this.formItem,
          id: this.getStore('changeTenderId')
        }
        this.$refs[name].validate((valid) => {
          if(data.isDelay) {
            data.openBidTime = this.format(new Date(this.formItem.openBidTime), 'yyyy-MM-dd HH:mm:ss');
          }else {
            data.openBidTime = ''
          }
          if (valid) {
            this.subLoading = true;
            saveChangeNotice(data).then(res => {
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
        data.isDelay = this.formItem.isDelay;
        this.$refs[name].validate((valid) => {
          if(data.isDelay) {
            data.openBidTime = this.format(new Date(this.formItem.openBidTime), 'yyyy-MM-dd HH:mm:ss');
          }else {
            data.openBidTime = ''
          }
          if (valid) {
            this.subLoading = true;
            changeNotice(data).then(res => {
              this.subLoading = false;
              if(res.success) {
                this.setStore('changeTenderId', res.result.id);
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

<style lang="less">
.correctStep1 {
  .center {
    text-align: center;
    margin-top: 30px;
  }
}
</style>
