<template>
  <div class="prequalificationStep2">
    <Form
      ref="formItem"
      :model="formItem"
      :rules="ruleValidate"
      :label-width="165"
    >
      <Card>
        <div class="flex-row step-head">
          <strong>投标报名、开标信息</strong>
        </div>
      </Card>
      <Card style="margin-top: 8px">
        <Divider orientation="left" size="small">投标报名信息</Divider>
        <Row>
          <Col :span="12">
            <FormItem
              prop="postDeadline"
              label="资格预审申请文件递交截止时间"
            >
              <DatePicker
                  type="datetime"
                  v-model="formItem.postDeadline"
                  style="width: 100%"
                  format="yyyy-MM-dd HH:mm:ss"
                  :options="timeOptions"
                  :editable="false"
                  transfer
                ></DatePicker>
            </FormItem>
          </Col>
          <Col :span="12">
            <FormItem
              prop="postType"
              style="width: 100%"
              label="资格预审申请文件递交方法"
            >
              <Select v-model="formItem.postType">
                <Option
                  v-for="item in this.SEL.processList"
                  :value="item.value"
                  :key="item.index"
                  >{{ item.label }}</Option
                >
              </Select>
            </FormItem>
          </Col>
        </Row>

        <FormItem
          prop="postAddress"
          style="width: 100%"
          label="资格预审申请文件递交地址"
        >
          <Input type="text" v-model="formItem.postAddress"></Input>
        </FormItem>
        <FormItem label="是否允许联合体投标">
          <RadioGroup v-model="formItem.allowUnitBid" style="width: 100%">
            <Radio :label="1">是</Radio>
            <Radio :label="0">否</Radio>
          </RadioGroup>
        </FormItem>
        <Divider orientation="left" size="small">开标信息</Divider>
        <FormItem prop="openBidTime" style="width: 50%" label="开启时间">
          <DatePicker
            v-model="formItem.openBidTime"
            type="datetime"
            :editable="false"
            transfer
            style="width: 100%"
            
          ></DatePicker>
        </FormItem>
        <FormItem prop="openBidAddress" style="width: 100%" label="开启地点">
          <Input type="text" v-model="formItem.openBidAddress"></Input>
        </FormItem>
        <FormItem prop="evaluateMethod" style="width: 100%" label="评审办法">
          <Input
            type="textarea"
            v-model="formItem.evaluateMethod"
            maxlength="3000"
            show-word-limit
          />
        </FormItem>
        <div class="center">
          <Button size="large" @click="pre">上一步</Button>
          <Button
            size="large"
            type="primary"
            :loading="sunLoading"
            @click="next('formItem')"
            >保存，下一步</Button
          >
        </div>
      </Card>
    </Form>
  </div>
</template>

<script>
import { validateSpecial } from "@/libs/validate";
import { viewPreFirst, savePreFirst } from "@/api/publishApi";
export default {
  name: "prequalificationStep2",
  props: {
    currentStep: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      timeOptions: {
        disabledDate(date) {
          return date && date.valueOf() < new Date(window.localStorage.getItem('preObtainFileTime')).getTime() - 86400000;
        }
      },
      obtainFileTime: '',
      sunLoading: false,
      formItem: {
        postDeadline: "",
        postType: "",
        postAddress: "",
        allowUnitBid: 0,
        openBidTime: "",
        openBidAddress: "",
        evaluateMethod:''
      },
      ruleValidate: {
        postDeadline: [
          { required: true, message: "截止时间不能为空！", trigger: "change",type:'date' },
        ],
        postType: [
          {
            required: true,
            message: "请选择文件递交方法！",
            trigger: "change",
          },
        ],
        postAddress: [
          {
            required: true,
            message: "请输入资格预审申请文件递交地址！",
            trigger: "blur",
          },
          {
            max: 1000,
            message: "文件递交地址内容长度不能超过1000个字符！",
            trigger: "blur",
          },
        ],
        openBidTime: [
          { required: true, message: "开标时间不能为空！", trigger: "change", type:'date' },
        ],
        openBidAddress: [
          { required: true, message: "请输入开标地点！", trigger: "blur" },
        ],
        evaluateMethod: [
          { required: true, message: "请输入评审办法！", trigger: "blur" },
          { validator: validateSpecial, trigger: "blur" },
          {
            max: 3000,
            message: "评审办法内容长度不能超过3000个字符！",
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() {
    this.getCurrentStep(this.getStore("addPreId"));
    this.removeStore('projectToPre');
  },
  activated() {
    if(this.getStore('preAdd')){
      this.removeStore('preAdd');
      this.$emit("update:currentStep", 0);
    }
  },
  methods: {
    pre() {
      this.$emit("update:currentStep", 0);
    },
    next(name) {
      let data = {
        ...this.formItem,
      };
      data.id = this.getStore("addPreId");
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.subLoading = true;
          data.openBidTime = this.format(new Date(this.formItem.openBidTime), 'yyyy-MM-dd HH:mm:ss')
          data.postDeadline = this.format(new Date(this.formItem.postDeadline), 'yyyy-MM-dd HH:mm:ss')
          savePreFirst(data).then((res) => {
            if (res.success) {
              this.$emit("update:currentStep", 2);
            }
            this.subLoading = false
          });
        }
      });
    },
    // 获取当前步骤已保存的信息
    getCurrentStep(id) {
      viewPreFirst(id).then((res) => {
        if (res.success) {
          if(!res.result.postDeadline) return;
          this.formItem.postDeadline = res.result.postDeadline;
          this.formItem.postType = res.result.postType;
          this.formItem.postAddress = res.result.postAddress;
          this.formItem.allowUnitBid = res.result.allowUnitBid;
          this.formItem.openBidTime = res.result.openBidTime;
          this.formItem.openBidAddress = res.result.openBidAddress;
          this.formItem.evaluateMethod = res.result.evaluateMethod;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
/deep/ .ivu-divider-inner-text {
  color: #2d8cf0;
}

.ivu-divider-horizontal.ivu-divider-with-text-left:before {
  width: 0;
}
.center {
  text-align: center;
  margin-top: 30px;
  button {
    margin-left: 20px;
  }
}
</style>
