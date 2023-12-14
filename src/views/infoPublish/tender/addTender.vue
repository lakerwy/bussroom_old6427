<template>
  <div class="newAnnouncement">
    <Row :gutter="10" type="flex" justify="space-between">
      <Col style="width: 270px; max-width: 270px;position: absolute;">
        <Card class="stepCard">
          <Steps :current="currentStep" direction="vertical">
            <Step title="招标公告基本信息" content=""></Step>
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
        <tenderSteps1
          v-if="currentStep === 0"
          :currentStep.sync="currentStep"
        />
        <tenderSteps2
          v-if="currentStep === 1"
          :currentStep.sync="currentStep"
        />
        <tenderSteps3
          v-if="currentStep === 2"
          :currentStep.sync="currentStep"
        />
        <tenderSteps4
          v-if="currentStep === 3"
          :currentStep.sync="currentStep"
        />
        <tenderSteps5
          v-if="currentStep === 4"
          :currentStep.sync="currentStep"
        />
        <tenderSteps6
          v-if="currentStep === 5"
          :currentStep.sync="currentStep"
        />
        <tenderSteps7
          v-if="currentStep === 6"
          :currentStep.sync="currentStep"
        />
        <tenderSteps8
          v-if="currentStep === 7"
          :currentStep.sync="currentStep"
        />
      </Col>
    </Row>
  </div>
</template>

<script>
import tenderSteps1 from "./tenderSteps/tenderSteps1";
import tenderSteps2 from "./tenderSteps/tenderSteps2";
import tenderSteps3 from "./tenderSteps/tenderSteps3";
import tenderSteps4 from "./tenderSteps/tenderSteps4";
import tenderSteps5 from "./tenderSteps/tenderSteps5";
import tenderSteps6 from "./tenderSteps/tenderSteps6";
import tenderSteps7 from "./tenderSteps/tenderSteps7";
import tenderSteps8 from "./tenderSteps/tenderSteps8";
export default {
  name: "addTender",
  components: {
    tenderSteps1,
    tenderSteps2,
    tenderSteps3,
    tenderSteps4,
    tenderSteps5,
    tenderSteps6,
    tenderSteps7,
    tenderSteps8,
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

<style lang="less" scoped>
.newAnnouncement {
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
  height: 14%;
}
</style>
