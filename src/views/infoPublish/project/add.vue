<template>
  <div class="newProject">
    <Row :gutter="10" type="flex" justify="space-between">
      <Col style="width: 245px; max-width: 245px">
        <Card class="stepCard">
          <Steps :current="currentStep" direction="vertical">
            <Step title="招标项目基本信息" content=""></Step>
            <Step title="资金来源" content=""></Step>
            <Step title="招标人、招标代理信息" content=""></Step>
            <Step title="标段信息" content=""></Step>
            <Step title="提交成功" content=""></Step>
          </Steps>
        </Card>
      </Col>
      <Col style="flex: 1">
        <ProjectStep1
          v-if="currentStep === 0"
          :currentStep.sync="currentStep"
        />
        <ProjectStep2
          v-if="currentStep === 1"
          :currentStep.sync="currentStep"
        />
        <ProjectStep3
          v-if="currentStep === 2"
          :currentStep.sync="currentStep"
        />
        <ProjectStep4
          v-if="currentStep === 3"
          :currentStep.sync="currentStep"
        />
        <ProjectStep5
          v-if="currentStep === 4"
          :currentStep.sync="currentStep"
        />
      </Col>
    </Row>
  </div>
</template>

<script>
import ProjectStep1 from "./projectSteps/projectStep1";
import ProjectStep2 from "./projectSteps/projectStep2";
import ProjectStep3 from "./projectSteps/projectStep3";
import ProjectStep4 from "./projectSteps/projectStep4";
import ProjectStep5 from "./projectSteps/projectStep5";
export default {
  name: "addProject",
  components: { ProjectStep1, ProjectStep2, ProjectStep3,ProjectStep4,ProjectStep5},
  data() {
    return {
      currentStep: 0,
    };
  },
  methods: {},
  created() {
    this.currentStep = 0;
  },
  destroyed() {
    this.currentStep = 0;
  }
};
</script>

<style lang="less" scoped>
.newProject {
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

  .fontS {
    font-size: 14px;
  }

  .stepCard /deep/ .ivu-steps-vertical{
    height: 500px;
  }

  .stepCard /deep/ .ivu-steps-vertical /deep/ .ivu-steps-item{
      height: 20%;
    }
}
</style>
