<template>
  <div class="candidateDetails">
    <div>
      <Row :gutter="10">
        <Col span="7">
          <Card>
            <div class="card">
              <p class="title">
                中国电信股份有限公司喀什分公司校园行业室内、室外插大卡机采购项目
              </p>
              <Row
                type="flex"
                justify="space-between"
                style="text-align: center; margin-top: 10px"
              >
                <Col :span="8">
                  <Tag color="green" v-show="state === 1">已发布</Tag>
                  <Tag color="red" v-show="state === 2">未发布</Tag>
                  <Tag color="geekblue" v-show="state === 3">未提交</Tag>
                  <Tag color="purple" v-show="state === 4">已开标</Tag>
                  <Tag color="orange" v-show="state === 5">废标</Tag>
                </Col>
                <Col :span="8"> 2018-10-22 </Col>
                <Col :span="8">
                  <span
                    @click="projectDetails(0)"
                    style="cursor: pointer; color: #1d9ed5"
                    >下载</span
                  >
                </Col>
              </Row>
              <Row style="text-align: center; margin-top: 15px">
                <Row>
                  <Col :span="12">
                    <p class="info-title">所属行业分类</p>
                    <p class="info-directory">机械电子电器,市政</p>
                  </Col>
                  <Col :span="12">
                    <p class="info-title">所在行政区域</p>
                    <p class="info-directory">北京，海淀</p>
                  </Col>
                </Row>
                <Row style="margin-top: 10px">
                  <Col :span="12">
                    <p class="info-title">招标方式</p>
                    <p class="info-directory">公开招标</p>
                  </Col>
                  <Col :span="12">
                    <p class="info-title">招标组织形式</p>
                    <p class="info-directory">委托招标</p>
                  </Col>
                </Row>
              </Row>
            </div>
            <div class="operation">
              <Row style="text-align: center; margin: 15px 0px">
                <Row v-if="false">
                  <Col :span="12">
                    <Button
                      type="text"
                      @click="projectDetails(1)"
                      icon="md-cloud-download"
                      >下载PDF</Button
                    >
                  </Col>
                  <Col :span="12" @click="share">
                    <Button type="text" icon="md-share">扫码分享</Button>
                  </Col>
                </Row>
                <Row style="margin-top: 10px">
                  <Col :span="12">
                    <Button
                      type="text"
                      @click="routerEnv('addResult')"
                      icon="md-hammer"
                      >发中标结果</Button
                    >
                  </Col>
                  <Col :span="12">
                    <Button
                      type="text"
                      @click="routerEnv('correctCandidate')"
                      icon="md-swap"
                      >发变更</Button
                    >
                  </Col>
                </Row>
              </Row>
            </div>
            <div>
              <div class="associated">
                <h1>关联招标项目</h1>
                <p class="aboutText">
                  中国电信股份有限公司喀什分公司校园行业室内、室外插大卡机采购项目
                </p>
              </div>
              <div class="associated">
                <h1>关联招标公告</h1>
                <p class="aboutText">
                  中国电信股份有限公司喀什分公司校园行业室内、室外插大卡机采购项目
                </p>
              </div>
              <div class="associated">
                <h1>关联中标结果公告</h1>
                <p class="aboutText">
                  中国电信股份有限公司喀什分公司校园行业室内、室外插大卡机采购项目
                </p>
              </div>
            </div>
          </Card>
        </Col>
        <Col span="17">
          <CandidateDetails1 v-show="currentStep === 0" />
          <CandidateDetails2 v-show="currentStep === 1" />
        </Col>
      </Row>
    </div>
    <commonShare :shareFlag.sync="shareFlag"></commonShare>
  </div>
</template>

<script>
import commonShare from "../../my-components/xboot/common-share";

import CandidateDetails1 from "./candidateDetails/candidateDetails1";
import CandidateDetails2 from "./candidateDetails/candidateDetails2";
export default {
  name: "candidateDetail",
  components: {
    commonShare,
    CandidateDetails1,
    CandidateDetails2,
  },
  data() {
    return {
      shareFlag: false,
      index: 4,
      state: 1,
      currentStep: 0,
    };
  },
  created() {
    // this.$store.dispatch('getDetail');
  },
  methods: {
    routerEnv(name) {
      this.$router.push({
        name,
      });
    },
    share() {
      // 分享
      this.model = true;
    },
    modelBoolean() {
      // 关闭
      this.model = false;
    },
    projectDetails(num) {
      this.currentStep = num;
    },
  },
  computed: {
    getData() {
      // 获取数据
      return this.$store.state.candidate.data;
    },
  },
};
</script>

<style lang="less" scoped>
.candidateDetails {
  .card {
    border-bottom: #f5f7f9 1px solid;
    padding-bottom: 20px;
    .title {
      font-size: 16px;
      font-weight: bold;
    }
    .info-title {
      font-weight: bold;
    }
    .info-directory {
      color: #1d9ed5;
    }
  }
  .associated {
    border-top: #f5f7f9 1px solid;
    margin-bottom: 15px;
    .aboutText {
      cursor: pointer;
      text-indent: 10px;
      &:hover {
        color: #2d8cf0;
      }
    }
    h1 {
      font-size: 14px;
      position: relative;
      padding-left: 5px;
      margin: 15px 0 5px 0;
    }
    h1:before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      bottom: 3px;
      top: 3px;
      width: 3px;
      height: auto;
      background-color: #1d9ed5;
    }
  }
}
</style>
