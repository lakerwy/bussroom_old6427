<template>
  <div class="resultStep2">
    <Card class="step-head"
      ><b style="font-size: 16px">招标人、招标代理机构信息</b></Card
    >
    <Card class="step-center">
      <Form ref="formItem" :model="formItem" :label-width="150">
        <Divider orientation="left" style="font-size: 14px">招标人信息</Divider>
        <Row>
          <FormItem prop="agentName" style="width: 100%" label="招标人名称">
            <Input v-model="formItem.agentName" disabled />
          </FormItem>
        </Row>
        <Row>
          <Col :span="12">
            <FormItem prop="agentLink" style="width: 100%" label="联系人">
              <Input v-model="formItem.agentLink" :maxlength="32" disabled />
            </FormItem>
          </Col>
          <Col :span="12">
            <FormItem
              prop="agentPhone"
              style="width: 100%"
              label="联系人手机号"
            >
              <Input v-model="formItem.agentPhone" disabled />
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
              <Input
                v-model="formItem.agentAddress"
                :maxlength="500"
                disabled
              />
            </FormItem>
          </Col>
          <Col :span="12">
            <FormItem prop="agentEmail" style="width: 100%" label="电子邮箱">
              <Input v-model="formItem.agentEmail" disabled />
            </FormItem>
          </Col>
        </Row>
        <FormItem
          prop="agentCode"
          style="width: 100%"
          label="招标人统一社会信用代码"
        >
          <Input v-model="formItem.agentCode" :maxlength="18" disabled />
        </FormItem>
        <Row v-if="formItem.organName">
          <Divider orientation="left" style="font-size: 14px"
            >招标代理机构信息</Divider
          >
          <Row>
            <FormItem
              prop="organName"
              style="width: 100%"
              label="招标代理机构名称"
            >
              <Input v-model="formItem.organName" disabled />
            </FormItem>
          </Row>
          <Row>
            <Col :span="12">
              <FormItem prop="organLink" style="width: 100%" label="联系人">
                <Input
                  v-model="formItem.organLink"
                  :maxlength="32"
                  disabled
                />
              </FormItem>
            </Col>
            <Col :span="12">
              <FormItem
                prop="organPhone"
                style="width: 100%"
                label="联系人手机号"
              >
                <Input v-model="formItem.organPhone" disabled />
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
                <Input
                  v-model="formItem.organAddress"
                  :maxlength="500"
                  disabled
                />
              </FormItem>
            </Col>
            <Col :span="12">
              <FormItem prop="organEmail" style="width: 100%" label="电子邮箱">
                <Input v-model="formItem.organEmail" disabled />
              </FormItem>
            </Col>
          </Row>
          <Row>
            <FormItem
              prop="organCode"
              style="width: 100%"
              label="招标代理机构统一社会信用代码"
            >
              <Input v-model="formItem.organCode" :maxlength="18" disabled />
            </FormItem>
          </Row>
        </Row>
        <Row>
          <div class="center">
            <Button size="large" @click="pre">上一步</Button>
            <Button size="large" type="primary" @click="next('formItem')"
              >保存，下一步</Button
            >
          </div>
        </Row>
      </Form>
    </Card>
  </div>
</template>

<script>
import { viewCanAgent,saveBidAgentInfo,findBidAgentInfoForNotice } from "@/api/publishApi";
export default {
  name: "resultStep2",
  props: {
    currentStep: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
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
    };
  },
  created() {
    this.getInfo();
    this.removeStore('tenderToResult');
  },
  activated() {
    if(this.getStore('resultAdd')){
      this.removeStore('resultAdd');
      this.$emit("update:currentStep", 0);
    }
  },
  methods: {
    // 回显数据
    getInfo() {
      let id = this.getStore("resultId");
      findBidAgentInfoForNotice(id).then((res) => {
        if (res.success) {
          if (res.result.length == 0) {
            viewCanAgent(id).then((res) => {
              if (res.result.length === 0) return;
              let agentInfo = res.result.find((item) => item.agentType == 1);
              let organInfo = res.result.find((item) => item.agentType == 2);

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
            });
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
    pre() {
      this.$emit("update:currentStep", 0);
    },
    next(name) {
      let data = [
        {
          title: this.formItem.agentName,
          contact: this.formItem.agentLink,
          contactPhone: this.formItem.agentPhone,
          address: this.formItem.agentAddress,
          email: this.formItem.agentEmail,
          informationCode: this.formItem.agentCode,
          refId: this.getStore("resultId"),
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
          refId: this.getStore("resultId"),
          id: this.organId,
          agentType: 2,
        },
      ];
      this.loading = true;
      saveBidAgentInfo(data).then((res) => {
        this.loading = false;
        if (res.success) {
          this.$emit("update:currentStep", 2);
        }
      });
    },
  },
};
</script>

<style lang="less">
.resultStep2 {
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
