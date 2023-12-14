<template>
  <div class="newPrequalification">
    <Row :gutter="10" type="flex" justify="space-between">
      <Col style="width: 270px; max-width: 270px;position: absolute;">
        <Card class="stepCard">
          <Steps :current="currentStep" direction="vertical">
            <Step title="资格预审公告基本信息" content=""></Step>
            <Step title="投标报名、开标信息" content=""></Step>
            <Step title="招标人、招标代理机构信息" content=""></Step>
            <Step title="选择标段" content=""></Step>
            <Step title="标段信息" content=""></Step>
            <Step title="上传附件" content=""></Step>
            <Step title="预览并提交" content=""></Step>
          </Steps>
        </Card>
      </Col>
      <Col style="flex: 1;width: 100%; padding-left: 270px;">
        <PrequalificationStep1
          v-if="currentStep === 0"
          :currentStep.sync="currentStep"
        />
        <PrequalificationStep2
          v-if="currentStep === 1"
          :currentStep.sync="currentStep"
        />
        <PrequalificationStep3
          v-if="currentStep === 2"
          :currentStep.sync="currentStep"
        />
        <PrequalificationStep4
          v-if="currentStep === 3"
          :currentStep.sync="currentStep"
        />
        <PrequalificationStep5
          v-if="currentStep === 4"
          :currentStep.sync="currentStep"
        />
        <PrequalificationStep6
          v-if="currentStep === 5"
          :currentStep.sync="currentStep"
        />
        <PrequalificationStep7
          v-if="currentStep === 6"
          :currentStep.sync="currentStep"
        />
        <PrequalificationStep8
          v-if="currentStep === 7"
          :currentStep.sync="currentStep"
        />
      </Col>
    </Row>
  </div>
</template>

<script>
import PrequalificationStep1 from "./prequalificationSteps/prequalificationStep1";
import PrequalificationStep2 from "./prequalificationSteps/prequalificationStep2";
import PrequalificationStep3 from "./prequalificationSteps/prequalificationStep3";
import PrequalificationStep4 from "./prequalificationSteps/prequalificationStep4";
import PrequalificationStep5 from "./prequalificationSteps/prequalificationStep5";
import PrequalificationStep6 from "./prequalificationSteps/prequalificationStep6";
import PrequalificationStep7 from "./prequalificationSteps/prequalificationStep7";
import PrequalificationStep8 from "./prequalificationSteps/prequalificationStep8";
export default {
  name: "addPrequalification",
  components: {
    PrequalificationStep1,
    PrequalificationStep2,
    PrequalificationStep3,
    PrequalificationStep4,
    PrequalificationStep5,
    PrequalificationStep6,
    PrequalificationStep7,
    PrequalificationStep8,
  },
  data() {
    return {
      currentStep: 0,
    };
  },
  computed: {},
  methods: {},
};
</script>

<style lang="less">
.newPrequalification {
  .menu-div {
    text-align: center;
  }
  .ivu-layout-sider-trigger {
    display: none;
  }
  .ivu-menu-vertical .ivu-menu-item {
    padding-left: 10px;
    padding-right: 10px;
  }
  .stepCard .ivu-steps-vertical {
    height: 500px;
  }

  .stepCard .ivu-steps-vertical .ivu-steps-item {
    height: 14%;
  }
}

</style>
