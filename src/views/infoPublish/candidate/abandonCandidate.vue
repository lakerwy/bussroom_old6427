<template>
  <div class="newSymptom">
    <Row :gutter="10" type="flex" justify="space-between">
      <Col style="width: 270px; max-width: 270px;position: absolute;">
        <Card class="stepCard">
          <Steps :current="currentStep" direction="vertical">
            <Step title="废标公示基本信息" content=""></Step>
            <Step title="上传附件" content=""></Step>
            <Step title="预览并提交" content=""></Step>
          </Steps>
        </Card>
      </Col>
      <Col style="flex: 1;width: 100%; padding-left: 270px;">
        <abandonStep1
          v-if="currentStep === 0"
          :currentStep.sync="currentStep"
        />
        <abandonStep2
          v-if="currentStep === 1"
          :currentStep.sync="currentStep"
        />
        <abandonStep3
          v-if="currentStep === 2"
          :currentStep.sync="currentStep"
        />
        <abandonStep4
          v-if="currentStep === 3"
          :currentStep.sync="currentStep"
        />
      </Col>
    </Row>
  </div>
</template>

<script>
import abandonStep1 from "./abandonCandidateSteps/abandonStep1";
import abandonStep2 from "./abandonCandidateSteps/abandonStep2";
import abandonStep3 from "./abandonCandidateSteps/abandonStep3";
import abandonStep4 from "./abandonCandidateSteps/abandonStep4";
export default {
  name: "abandonCandidate",
  components: {
    abandonStep1,
    abandonStep2,
    abandonStep3,
    abandonStep4,
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

<style lang="less" >
.newSymptom {
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
