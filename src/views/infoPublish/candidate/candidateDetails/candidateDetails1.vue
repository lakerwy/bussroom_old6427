<template>
  <div class="candidateDetails1">
    <div class="card-div1" ref="cont">
      <Card class="card-style" id="card1">
        <Row>
          <p class="title">
            中国电信股份有限公司喀什分公司校园行业室内、室外插大卡机采购项目
          </p>
          <p class="title">（招标编号：GLZB2018-48）</p>
        </Row>
        <Row>
          <p>公示结束时间：2018年8月11日</p>
        </Row>
        <Row>
          <p class="infoTitle">一、评标情况</p>
          <div class="infoText"></div>
        </Row>
        <Row>
          <p class="infoTitle">二、提出异议的渠道和方式</p>
          <div class="infoText">某某公司电话：1234567890</div>
        </Row>
        <Row>
          <p class="infoTitle">三、其他</p>
          <div class="infoText"></div>
        </Row>
        <Row>
          <p class="infoTitle">四、监督部门</p>
          <div class="infoText">某某公司电话：1234567890</div>
        </Row>
        <Row>
          <p class="infoTitle">五、联系方式</p>
          <Form :label-width="140">
            <FormItem label="招标人:">
              <span>中国邮政集团公司辽源市分公司</span>
            </FormItem>
            <FormItem label="地址:">
              <span>辽源市隆基华典55号楼门市</span>
            </FormItem>
            <FormItem label="联系人:">
              <span>李林禹</span>
            </FormItem>
            <FormItem label="联系人手机号:">
              <span>0437-3112056</span>
            </FormItem>
            <FormItem label="电子邮件:">
              <span>276599@qq.com</span>
            </FormItem>
            <FormItem label="招标代理机构:" style="margin-top:20px;">
              <span>中国邮政集团公司辽源市分公司</span>
            </FormItem>
            <FormItem label="地址:">
              <span>辽源市隆基华典55号楼门市</span>
            </FormItem>
            <FormItem label="联系人:">
              <span>李林禹</span>
            </FormItem>
            <FormItem label="联系人手机号:">
              <span>0437-3112056</span>
            </FormItem>
            <FormItem label="电子邮件:">
              <span>276599@qq.com</span>
            </FormItem>
          </Form>
        </Row>
        <Row style="margin-top: 100px;margin-bottom:50px">
          <Row>
            <Col :span="18">
              <p style="text-align: right">
                招标人或招标代理机构主要负责人（项目负责人）：
              </p>
            </Col>
            <Col :span="6"> </Col>
          </Row>
          <Row style="margin-top: 10px">
            <Col :span="18">
              <p style="text-align: right">招标人或其招标代理机构：</p>
            </Col>
            <Col :span="6"> </Col>
          </Row>
        </Row>
      </Card>
      <Card class="card-style" id="card2">
        <p class="cardTitle">附件</p>
        <Row>
          <Row class="fileRow">
            <Col :span="9"> 附件：W788954788905468.doc </Col>
            <Col :span="6"> 100kb </Col>
            <Col :span="9"> 上传时间：2019-06-12 </Col>
          </Row>
          <Row class="fileRow">
            <Col :span="9"> 附件：W788954788905468.doc </Col>
            <Col :span="6"> 100kb </Col>
            <Col :span="9"> 上传时间：2019-06-12 </Col>
          </Row>
        </Row>
      </Card>
    </div>
    <div class="card-div2">
      <Anchor show-ink container=".card-div1">
        <AnchorLink href="#card1" title="公示详情" />
        <AnchorLink href="#card2" title="附件" />
      </Anchor>
      <div style="margin-top: 10px">
        <img
          @click="goTop"
          style="height: 35px; margin-left: 10px; cursor: pointer"
          src="../../../../assets/infoPublish/arrow.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "candidateDetails1",
  props: {
    currentStep: {
      type: "Number",
      default: 0,
    },
  },
  data() {
    return {};
  },
  computed: {},
  created() {
    // this.$store.dispatch('getDetail1');
  },

  methods: {
    goTop() {
      this.$refs.cont.scrollTop = 0;
    },
  },
};
</script>

<style lang="less" scoped>
.candidateDetails1 {
  position: relative;
  .card-div1 {
    height: calc(100vh - 132px);
    overflow-y: scroll;
    width: 83%;
  }
  .card-div2 {
    position: absolute;
    right: 10px;
    top: 30%;
    width: 12%;
  }
  .ivu-form-item {
    margin-bottom: 0px;
  }
  .infoTitle {
    margin: 15px 0 5px;
  }
  .infoText {
    padding-left: 25px;
  }
  .title {
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .ivu-form-item {
    margin-bottom: 0px;
  }
  .fileRow {
    text-align: center;
    height: 50px;
    line-height: 50px;
    background-color: rgba(242, 242, 242, 1);
    margin-top: 10px;
  }
  .cardTitle {
    font-size: 20px;
    position: relative;
    padding-left: 10px;
    &::before {
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
