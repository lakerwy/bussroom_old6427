<template>
  <div class="announcementStep2">
    <Card style="margin-bottom: 20px">
      <div class="flex-row step-head">
        <strong>招标人、招标代理机构信息</strong>
      </div>
    </Card>
    <Card>
      <Form ref="formItem" :model="formItem" :label-width="150">
        <Divider orientation="left" size="small">招标人信息</Divider>
        <Row>
          <FormItem prop="agentName" label="招标人名称">
            <Input v-model="formItem.agentName" disabled :maxlength="32" />
          </FormItem>
        </Row>
        <Row>
          <Col :span="12">
            <FormItem prop="agentLink" label="联系人">
              <Input v-model="formItem.agentLink" disabled :maxlength="32" />
            </FormItem>
          </Col>
          <Col :span="12">
            <FormItem prop="agentPhone" label="联系人手机号">
              <Input v-model="formItem.agentPhone" disabled />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col :span="12">
            <FormItem prop="agentAddress" label="招标人地址">
              <Input
                v-model="formItem.agentAddress"
                disabled
                :maxlength="500"
              />
            </FormItem>
          </Col>
          <Col :span="12">
            <FormItem prop="agentEmail" label="电子邮箱">
              <Input v-model="formItem.agentEmail" disabled />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <FormItem prop="agentCode" label="招标人统一社会信用代码">
            <Input v-model="formItem.agentCode" :maxlength="18" disabled />
          </FormItem>
        </Row>
        <Row v-if="formItem.organName">
          <Divider orientation="left" size="small">招标代理机构信息</Divider>
          <Row>
            <FormItem prop="organName" label="招标代理机构名称">
              <Input v-model="formItem.organName" :maxlength="32" disabled />
            </FormItem>
          </Row>
          <Row>
            <Col :span="12">
              <FormItem prop="organLink" label="联系人">
                <Input v-model="formItem.organLink" :maxlength="32" disabled />
              </FormItem>
            </Col>
            <Col :span="12">
              <FormItem prop="organPhone" label="联系人手机号">
                <Input v-model="formItem.organPhone" disabled />
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col :span="12">
              <FormItem prop="organAddress" label="招标代理机构地址">
                <Input
                  v-model="formItem.organAddress"
                  :maxlength="500"
                  disabled
                />
              </FormItem>
            </Col>
            <Col :span="12">
              <FormItem prop="organEmail" label="电子邮箱">
                <Input v-model="formItem.organEmail" disabled />
              </FormItem>
            </Col>
          </Row>
          <Row>
            <FormItem prop="organCode" label="招标代理机构统一社会信用代码">
              <Input v-model="formItem.organCode" :maxlength="18" disabled />
            </FormItem>
          </Row>
        </Row>
        <Row>
          <div class="center">
            <Button size="large" @click="pre">上一步</Button>
            <Button size="large" type="primary" :loading='loading' @click="next('formItem')"
              >保存，下一步</Button
            >
          </div>
        </Row>
      </Form>
    </Card>
  </div>
</template>

<script>
import { getBidAgentInfo ,saveBidAgentInfo,findBidAgentInfoForNotice} from "@/api/publishApi";
export default {
  name: "tenderSteps3",
  props: {
    currentStep: {
      type: Number,
      default: 2,
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
      agentType:'',
      organId:'',
      loading:false,
    };
  },
  created() {
    this.getInfo();
  },
  activated() {
    if (this.getStore("tenderAdd")) {
      this.removeStore("tenderAdd");
      this.$emit("update:currentStep", 0);
    }
  },
  methods: {
    pre() {
      this.$emit("update:currentStep", 1);
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
          refId: this.getStore("tenderId"),
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
          refId: this.getStore("tenderId"),
          id: this.organId,
          agentType: 2,
        },
      ];
      this.loading = true;
      saveBidAgentInfo(data).then((res) => {
        this.loading = false;
        if (res.success) {
          this.$emit("update:currentStep", 3);
        }
      });
    },
    // 回显数据
    getInfo() {
      let id = this.getStore("tenderId");
      findBidAgentInfoForNotice(id).then((res) => {
        if (res.success) {
          if (res.result.length == 0) {
            getBidAgentInfo(id).then((res) => {
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
  },
};
</script>

<style lang="less" scoped>
.announcementStep2 {
  .ivu-select-item {
    span:nth-of-type(1) {
      width: 30%;
    }

    span:nth-of-type(2) {
      width: 10%;
    }

    span {
      display: inline-block;
      width: 15%;
    }

    span:nth-of-type(4) {
      width: 20%;
    }

    span:nth-of-type(5) {
      width: 20%;
    }
  }

  .center {
    text-align: center;
    margin-top: 30px;

    button {
      margin-left: 20px;
    }
  }

  .ivu-divider {
    margin-bottom: 10px;
  }

  .ivu-divider-inner-text {
    color: #2d8cf0;
  }

  .ivu-divider-horizontal.ivu-divider-with-text-left:before {
    width: 0;
  }

  /deep/ .ivu-divider-inner-text {
    color: #2d8cf0;
  }
}
.optionBox {
  display: flex;
  justify-content: space-between;
}
</style>
