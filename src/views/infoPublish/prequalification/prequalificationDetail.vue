<template>
  <div class="prequalificationDetails">
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
                style="text-align: center; margin-top: 5px"
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
                    @click="download"
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
                <Row style="margin-top: 5px">
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
            <div style="text-align: center; margin: 15px 0px">
              <Row>
                <Col :span="12">
                  <Button
                    type="text"
                    icon="md-swap"
                    @click="routerEnv('correctPre')"
                    >发变更</Button
                  >
                </Col>
                <Col :span="12">
                  <Button
                    type="text"
                    icon="md-hammer"
                    @click="routerEnv('addResult')"
                    >发资格预审结果</Button
                  >
                </Col>
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
            <PrequalificationDetails1 v-show="currentStep === 0" />
            <PrequalificationDetails2 v-show="currentStep === 2" />
            <PrequalificationDetails3 v-show="currentStep === 3" />
        </Col>
      </Row>
    </div>
    <!-- <Modal v-model="showupload" title="上传文件">
      <Upload
        action="//jsonplaceholder.typicode.com/posts/"
        style="text-align: center"
      >
        <Button icon="ios-cloud-upload-outline">上传附件</Button>
      </Upload>
      <div slot="footer">
        <Button type="primary" @click="uFile"> 确定 </Button>
      </div>
    </Modal> -->

    <commonShare :shareFlag.sync="shareFlag"></commonShare>
  </div>
</template>

<script>
import commonShare from "../../my-components/xboot/common-share";
import PrequalificationDetails1 from "./prequalificationDetails/prequalificationDetail1";
import PrequalificationDetails2 from "./prequalificationDetails/prequalificationDetail2";
import PrequalificationDetails3 from "./prequalificationDetails/prequalificationDetail3";
export default {
  name: "prequalificationDetail",
  components: {
    commonShare,
    PrequalificationDetails1,
    PrequalificationDetails2,
    PrequalificationDetails3,
  },
  data() {
    return {
      shareFlag: false,
      showupload: false,

      index: 6,
      currentStep: 0,
      state: 1, // 1为已提交 2为已保存
    };
  },
  created() {
    // this.$store.dispatch('getDetail');
  },
  computed: {
    getData() {
      // 获取数据
      return this.$store.state.prequalify.detail;
    },
  },
  methods: {
    projectDetails(num) {
      this.currentStep = num;
    },
    share() {
      this.shareFlag = true;
    },

    uploadFile() {
      this.showupload = true;
    },
    uFile() {
      this.showupload = false;
    },
    routerEnv(name) {
      this.$router.push(name);
    },
  },
};
</script>

<style lang="less">
.prequalificationDetails {
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
    .aboutText{
      cursor: pointer;
      text-indent: 10px;
      &:hover{
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
