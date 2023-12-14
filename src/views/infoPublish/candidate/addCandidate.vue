<template>
  <div class="newCandidate">
    <Row :gutter="10" type="flex" justify="space-between">
      <Col style="width: 270px; max-width: 270px;position: absolute;">
        <Card class="stepCard">
          <Steps :current="currentStep" direction="vertical">
            <Step title="中标候选人公示基本信息" content=""></Step>
            <Step title="招标人、招标代理机构信息" content=""></Step>
            <Step title="选择标段" content=""></Step>
            <Step title="中标候选人信息" content=""></Step>
            <Step title="上传附件" content=""></Step>
            <Step title="预览并提交" content=""></Step>
          </Steps>
        </Card>
      </Col>
      <Col style="flex: 1;width: 100%; padding-left: 270px;">
        <CandidateStep1
          v-if="currentStep === 0"
          :currentStep.sync="currentStep"
        />
        <CandidateStep2
          v-if="currentStep === 1"
          :currentStep.sync="currentStep"
        />
        <CandidateStep3
          v-if="currentStep === 2"
          :currentStep.sync="currentStep"
        />
        <CandidateStep4
          v-if="currentStep === 3"
          :currentStep.sync="currentStep"
        />
        <CandidateStep5
          v-if="currentStep === 4"
          :currentStep.sync="currentStep"
        />
        <CandidateStep6
          v-if="currentStep === 5"
          :currentStep.sync="currentStep"
        />
        <CandidateStep7 v-if="currentStep === 6" :currentStep.sync="currentStep" />
      </Col>
    </Row>
  </div>
</template>

<script>
import CandidateStep1 from "./candidateSteps/candidateStep1";
import CandidateStep2 from "./candidateSteps/candidateStep2";
import CandidateStep3 from "./candidateSteps/candidateStep3";
import CandidateStep4 from "./candidateSteps/candidateStep4";
import CandidateStep5 from "./candidateSteps/candidateStep5";
import CandidateStep6 from "./candidateSteps/candidateStep6";
import CandidateStep7 from "./candidateSteps/candidateStep7";
export default {
  name: "addCandidate",
  components: {
    CandidateStep1,
    CandidateStep2,
    CandidateStep3,
    CandidateStep4,
    CandidateStep5,
    CandidateStep6,
    CandidateStep7,
  },
  data() {
    return {
      currentStep: 0,
    };
  },
  computed: {},
  methods: {
    pageCallBack(num) {
      this.currentStep = num;
    },
  },
};
</script>
<style lang="less" scoped>
.newCandidate {
  .side-title {
    line-height: 40px;
    font-size: 24px;
    color: #fff;
    margin: 0 -16px 10px -16px;
    background-color: #5cadff;
    padding-left: 20px;
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
}
.stepCard .ivu-steps-vertical {
  height: 500px;
}

.stepCard .ivu-steps-vertical .ivu-steps-item {
  height: 16%;
}
</style>
