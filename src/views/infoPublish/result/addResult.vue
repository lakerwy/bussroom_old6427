<template>
  <div class="newResult">
    <Row :gutter="10" type="flex" justify="space-between">
      <Col style="width: 270px; max-width: 270px;position: absolute;">
        <Card class="stepCard">
          <Steps :current="currentStep" direction="vertical">
            <Step title="中标结果公告基本信息" content=""></Step>
            <Step title="招标人、招标代理机构信息" content=""></Step>
            <Step title="选择标段" content=""></Step>
            <Step title="中标人信息" content=""></Step>
            <Step title="上传附件" content=""></Step>
            <Step title="预览并提交" content=""></Step>
          </Steps>
        </Card>
      </Col>
      <Col style="flex: 1;width: 100%; padding-left: 270px;">
        <ResultStep1 v-if="currentStep === 0" :currentStep.sync="currentStep" />
        <ResultStep2 v-if="currentStep === 1" :currentStep.sync="currentStep" />
        <ResultStep3 v-if="currentStep === 2" :currentStep.sync="currentStep" />
        <ResultStep4 v-if="currentStep === 3" :currentStep.sync="currentStep" />
        <ResultStep5 v-if="currentStep === 4" :currentStep.sync="currentStep" />
        <ResultStep6 v-if="currentStep === 5" :currentStep.sync="currentStep" />
        <ResultStep7 v-if="currentStep === 6" :currentStep.sync="currentStep" />
      </Col>
    </Row>
  </div>
</template>

<script>
import ResultStep1 from "./resultSteps/resultStep1";
import ResultStep2 from "./resultSteps/resultStep2";
import ResultStep3 from "./resultSteps/resultStep3";
import ResultStep4 from "./resultSteps/resultStep4";
import ResultStep5 from "./resultSteps/resultStep5";
import ResultStep6 from "./resultSteps/resultStep6";
import ResultStep7 from "./resultSteps/resultStep7";
export default {
  name: "addResult",
  data() {
    return {
      currentStep: 0,
    };
  },
  components: {
    ResultStep1,
    ResultStep2,
    ResultStep3,
    ResultStep4,
    ResultStep5,
    ResultStep6,
    ResultStep7,
  },
  methods: {
    pageCallBack(num) {
      this.currentStep = num;
    },
  },
};
</script>

<style lang="less">
.newResult {
  .title-name {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    padding: 20px 0 10px 0;
  }
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
    height: 16%;
  }
}

</style>
