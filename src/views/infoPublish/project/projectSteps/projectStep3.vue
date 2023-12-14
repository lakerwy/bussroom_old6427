<template>
  <div class="projectStep3">
    <Card class="step-head"
      ><b style="font-size: 16px">招标人、招标代理机构信息</b></Card
    >
    <Card class="step-center">
      <Form
        ref="formItem"
        :model="formItem"
        :rules="ruleValidate"
        :label-width="150"
      >
        <Divider orientation="left" style="font-size: 14px">招标人信息</Divider>
        <Row>
          <FormItem prop="agentName" style="width: 100%" label="招标人名称">
            <Input v-model="formItem.agentName" />
          </FormItem>
        </Row>
        <Row>
          <Col :span="12">
            <FormItem prop="agentLink" style="width: 100%" label="联系人">
              <Input v-model="formItem.agentLink" :maxlength="32" />
            </FormItem>
          </Col>
          <Col :span="12">
            <FormItem
              prop="agentPhone"
              style="width: 100%"
              label="联系人手机号"
            >
              <Input v-model="formItem.agentPhone" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col :span="12">
            <FormItem
              prop="agentAddress"
              style="width: 100%"
              label="招标人地址"
            >
              <Input v-model="formItem.agentAddress" :maxlength="500" />
            </FormItem>
          </Col>
          <Col :span="12">
            <FormItem prop="agentEmail" style="width: 100%" label="电子邮箱">
              <Input v-model="formItem.agentEmail" />
            </FormItem>
          </Col>
        </Row>
        <FormItem
          prop="agentCode"
          style="width: 100%"
          label="招标人统一社会信用代码"
        >
          <Input v-model="formItem.agentCode" :maxlength="18" />
        </FormItem>
        <Row v-if="agentFlag">
          <Divider orientation="left" style="font-size: 14px"
            >招标代理机构信息</Divider
          >
          <Row>
            <FormItem
              prop="organName"
              style="width: 100%"
              label="招标代理机构名称"
            >
              <Input v-model="formItem.organName" />
            </FormItem>
          </Row>
          <Row>
            <Col :span="12">
              <FormItem prop="organLink" style="width: 100%" label="联系人">
                <Input v-model="formItem.organLink" :maxlength="32" />
              </FormItem>
            </Col>
            <Col :span="12">
              <FormItem
                prop="organPhone"
                style="width: 100%"
                label="联系人手机号"
              >
                <Input v-model="formItem.organPhone" />
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col :span="12">
              <FormItem
                prop="organAddress"
                style="width: 100%"
                label="招标代理机构地址"
              >
                <Input v-model="formItem.organAddress" :maxlength="500" />
              </FormItem>
            </Col>
            <Col :span="12">
              <FormItem prop="organEmail" style="width: 100%" label="电子邮箱">
                <Input v-model="formItem.organEmail" />
              </FormItem>
            </Col>
          </Row>
          <Row>
            <FormItem
              prop="organCode"
              style="width: 100%"
              label="招标代理机构统一社会信用代码"
            >
              <Input v-model="formItem.organCode" :maxlength="18" />
            </FormItem>
          </Row>
        </Row>
        <Row>
          <div class="center">
            <Button size="large" @click="pre">上一步</Button>
            <Button
              size="large"
              type="primary"
              :loading="loading"
              @click="next('formItem')"
              >保存，下一步</Button
            >
          </div>
        </Row>
      </Form>
    </Card>
  </div>
</template>

<script>
import {
  validateCode,
  validateSpecial,
  validateFault,
  validateContactTel,
  validateEmail,
  validatePhone,
} from "@/libs/validate";
import { saveAgent, agentView, projectView } from "@/api/publishApi";
export default {
  name: "projectStep3",
  props: {
    currentStep: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      agentFlag: false,
      loading: false,
      agentId: "",
      organId: "",
      formItem: {
        agentName: "", // 招标人名称
        agentLink: "", // 联系人
        agentPhone: "", // 联系电话
        agentAddress: "", // 招标人地址
        agentEmail: "", // 电子邮箱
        agentCode: "", // 统一社会信用代码
        organName: "", // 组织名称
        organLink: "", // 联系人
        organPhone: "", // 联系电话
        organAddress: "", // 招标机构地址
        organEmail: "", // 电子邮箱
        organCode: "", // 统一社会信用代码
      },
      ruleValidate: {
        agentName: [
          { message: "招标人名称不能为空！", trigger: "blur", required: true },
          { validator: validateSpecial, trigger: "blur" },
          { max: 50, message: "名称长度不能超过50个字符！", trigger: "blur" },
        ],
        agentLink: [
          { message: "联系人不能为空！", trigger: "blur", required: true },
          { validator: validateFault, trigger: "blur" },
          { max: 32, message: "联系人长度不能超过32个字符！", trigger: "blur" },
        ],
        agentPhone: [
          {
            message: "联系人手机号不能为空！",
            trigger: "blur",
            required: true,
          },
          { validator: validatePhone, trigger: "blur" },
        ],
        agentAddress: [
          { message: "地址不能为空！", trigger: "blur", required: true },
          { validator: validateSpecial, trigger: "blur" },
          { max: 500, message: "地址长度不能超过500个字符！", trigger: "blur" },
        ],
        agentEmail: [
          { message: "邮箱不能为空！", trigger: "blur", required: true },
          { validator: validateEmail, trigger: "blur" },
        ],
        agentCode: [
          { message: "编码内容不能为空！", trigger: "blur", required: true },
          { validator: validateCode, trigger: "blur" },
        ],
        organName: [
          {
            message: "招标代理机构名称不能为空！",
            trigger: "blur",
            required: true,
          },
          { validator: validateSpecial, trigger: "blur" },
          { max: 50, message: "名称长度不能超过50个字符！", trigger: "blur" },
        ],
        organLink: [
          { message: "联系人不能为空！", trigger: "blur", required: true },
          { validator: validateFault, trigger: "blur" },
          { max: 32, message: "联系人长度不能超过32个字符！", trigger: "blur" },
        ],
        organPhone: [
          {
            message: "联系人手机号不能为空！",
            trigger: "blur",
            required: true,
          },
          { validator: validatePhone, trigger: "blur" },
        ],
        organAddress: [
          { message: "地址不能为空！", trigger: "blur", required: true },
          { validator: validateSpecial, trigger: "blur" },
          { max: 500, message: "地址长度不能超过500个字符！", trigger: "blur" },
        ],
        organEmail: [
          { message: "邮箱不能为空！", trigger: "blur", required: true },
          { validator: validateEmail, trigger: "blur" },
        ],
        organCode: [
          { message: "编码内容不能为空！", trigger: "blur", required: true },
          { validator: validateCode, trigger: "blur" },
        ],
      },
    };
  },
  created() {
    /* if (!this.getStore("projectStep")) {
      this.getCurrentDetail(this.getStore("projectId"));
    } else if (
      this.getStore("projectStep") &&
      this.getStore("projectStep") >= this.currentStep + 1
    ) {
      this.getCurrentDetail(this.getStore("projectId"));
    } else {
      this.getCurrentDetail(this.getStore("oldProjectId"));
    } */
    this.getCurrentDetail()
    this.getProjectView();
  },
  activated() {
    if (this.getStore("addProject")) {
      this.removeStore("addProject");
      this.$emit("update:currentStep", 0);
    }
  },
  methods: {
    // 获取自行招标
    getProjectView() {
      projectView({ projectId: this.getStore("projectId") }).then((res) => {
        if (res.success) {
          let bidOrgnize = res.result.bidOrgnize;
          if (bidOrgnize == "自行招标") {
            this.agentFlag = false;
          } else {
            this.agentFlag = true;
          }
        }
      });
    },
    pre() {
      this.$emit("update:currentStep", 1);
    },
    next(name) {
      let data;
      if (this.agentFlag) {
        data = [
          {
            title: this.formItem.agentName,
            contact: this.formItem.agentLink,
            contactPhone: this.formItem.agentPhone,
            address: this.formItem.agentAddress,
            email: this.formItem.agentEmail,
            informationCode: this.formItem.agentCode,
            refId: this.getStore("projectId"),
            id: this.agentId,
            agentType: 1,
          },
          {
            title: this.formItem.organName,
            contact: this.formItem.organLink,
            contactPhone: this.formItem.organPhone,
            address: this.formItem.organAddress,
            email: this.formItem.organEmail,
            informationCode: this.formItem.organCode,
            refId: this.getStore("projectId"),
            id: this.organId,
            agentType: 2,
          },
        ];
      } else {
        data = [
          {
            title: this.formItem.agentName,
            contact: this.formItem.agentLink,
            contactPhone: this.formItem.agentPhone,
            address: this.formItem.agentAddress,
            email: this.formItem.agentEmail,
            informationCode: this.formItem.agentCode,
            refId: this.getStore("projectId"),
            id: this.agentId,
            agentType: 1,
          },
          {
            title: "",
            contact: "",
            contactPhone: "",
            address: "",
            email: "",
            informationCode: "",
            refId: this.getStore("projectId"),
            id: this.organId,
            agentType: 2,
          },
        ];
      }
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.loading = true;
          saveAgent(data).then((res) => {
            this.loading = false;
            if (res.success) {
              if (
                this.getStore("oldProjectId") &&
                this.getStore("projectStep") <= this.currentStep + 1
              ) {
                this.setStore("projectStep", 3);
              }
              this.$emit("update:currentStep", 3);
            }
          });
        }
      });
    },
    // 回显
    getCurrentDetail() {
      agentView({
        projectId: this.getStore("projectId"),
      }).then((res) => {
        if (res.success) {
          if (res.result.length === 0 && this.getStore("oldProjectId")) {
            agentView({ projectId: this.getStore("oldProjectId") }).then(
              (data) => {
                if (data.success) {
                  if (data.result.length === 0) return;
                  let agentInfo = data.result.find(
                    (item) => item.agentType == 1
                  );
                  let organInfo = data.result.find(
                    (item) => item.agentType == 2
                  );

                  this.formItem.agentName = agentInfo.title;
                  this.formItem.agentLink = agentInfo.contact;
                  this.formItem.agentPhone = agentInfo.contactPhone;
                  this.formItem.agentAddress = agentInfo.address;
                  this.formItem.agentEmail = agentInfo.email;
                  this.formItem.agentCode = agentInfo.informationCode;

                  this.formItem.organName = organInfo.title;
                  this.formItem.organLink = organInfo.contact;
                  this.formItem.organPhone = organInfo.contactPhone;
                  this.formItem.organAddress = organInfo.address;
                  this.formItem.organEmail = organInfo.email;
                  this.formItem.organCode = organInfo.informationCode;
                }
              }
            );
          } else {
            let agentInfo = res.result.find((item) => item.agentType == 1);
            let organInfo = res.result.find((item) => item.agentType == 2);

            this.formItem.agentName = agentInfo.title;
            this.formItem.agentLink = agentInfo.contact;
            this.formItem.agentPhone = agentInfo.contactPhone;
            this.formItem.agentAddress = agentInfo.address;
            this.formItem.agentEmail = agentInfo.email;
            this.formItem.agentCode = agentInfo.informationCode;
            this.agentId = agentInfo.id;

            this.formItem.organName = organInfo.title;
            this.formItem.organLink = organInfo.contact;
            this.formItem.organPhone = organInfo.contactPhone;
            this.formItem.organAddress = organInfo.address;
            this.formItem.organEmail = organInfo.email;
            this.formItem.organCode = organInfo.informationCode;
            this.organId = organInfo.id;
          }
        }
      });
    },
  },
};
</script>

<style lang="less">
.projectStep3 {
  .step-head {
    margin-bottom: 10px;
  }

  .center {
    text-align: center;
    margin-top: 40px;

    button {
      margin-left: 20px;
    }
  }

  .ivu-divider-inner-text {
    color: #2d8cf0;
  }

  .ivu-divider-horizontal.ivu-divider-with-text-left:before {
    width: 0;
  }
}
.optionBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
