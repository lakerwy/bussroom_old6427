<template>
  <div class="correctCandidate">
    <Row :gutter="10" type="flex" justify="space-between">
      <Col style="width: 270px; max-width: 270px;position: absolute;">
        <Card class="stepCard">
          <Steps :current="currentStep" direction="vertical">
            <Step title="变更公示基本信息" content=""></Step>
            <Step title="上传附件" content=""></Step>
            <Step title="预览并提交" content=""></Step>
          </Steps>
        </Card>
      </Col>
      <Col style="flex: 1;width: 100%; padding-left: 270px;">
        <correctStep1 v-if="currentStep === 0" :currentStep.sync="currentStep" />
        <correctStep2 v-if="currentStep === 1" :currentStep.sync="currentStep" />
        <correctStep3 v-if="currentStep === 2" :currentStep.sync="currentStep" />
        <correctStep4 v-if="currentStep === 3" :currentStep.sync="currentStep" />
      </Col>
    </Row>
  </div>
</template>

<script>
import correctStep1 from "./correntCandidateSteps/correctStep1";
import correctStep2 from "./correntCandidateSteps/correctStep2";
import correctStep3 from "./correntCandidateSteps/correctStep3";
import correctStep4 from "./correntCandidateSteps/correctStep4";
export default {
  name: "correctCandidate",
  components: {
    correctStep1,
    correctStep2,
    correctStep3,
    correctStep4,
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
.correctCandidate {
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
    height: 300px;
  }

  .stepCard .ivu-steps-vertical .ivu-steps-item {
    height: 33%;
  }
}

</style>
