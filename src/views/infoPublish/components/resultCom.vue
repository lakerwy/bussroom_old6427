<template>
  <div class="resultCom">
    <div class="container">
      <Card  style="padding-top: 20px;" class="inner-card">
        <Row>
          <p class="title">
             {{ data.notice.title }}
          </p>
          <p class="title">（招标编号：{{ data.notice.noticeNumber }}）</p>
        </Row>
        <Row>
          <div class="infoText">
            <div v-for="(item,index) in data.bidSectionInfoList" :key="index" style="margin-bottom:20px;">
              <p>标段（包）编号：{{item.title}}</p>
              <p>标段（包）名称：{{item.sectionNumber}}</p>
              <p>中标人：{{item.bidderList[0].candidateName}}{{item.bidderList[0].unionCompanyName ? "，" + item.bidderList[0].unionCompanyName : ''}}</p>
              <p>中标价：{{item.bidderList[0].bidPrice}}万元</p>
              <p>中标费率：{{item.bidderList[0].rate}}</p>
              <p>其他类型中标价：{{item.bidderList[0].otherPrice}}</p>
            </div>
          </div>
        </Row>
        <Row class="rowBox">
          <p class="infoTitle">一、其他</p>
          <div class="infoText" v-html="data.notice.content"></div>
        </Row>
        <Row>
          <p class="infoTitle">二、监督部门</p>
          <div class="infoText">{{data.jdbmName}}</div>
        </Row>
        <Row class="rowBox">
          <p class="infoTitle">三、联系方式</p>
          <Form :label-width="140">
            <FormItem label="招标人:">
              <span>{{ data.bidInfo.title }}</span>
            </FormItem>
            <FormItem label="地址:">
              <span>{{ data.bidInfo.address }}</span>
            </FormItem>
            <FormItem label="联系人:">
              <span>{{ data.bidInfo.contact }}</span>
            </FormItem>
            <FormItem label="联系人手机号:">
              <span>{{ data.bidInfo.contactPhone }}</span>
            </FormItem>
            <FormItem label="电子邮件:">
              <span>{{ data.bidInfo.email }}</span>
            </FormItem>
          </Form>
          <Form :label-width="140" style="margin-top:20px;" v-if="data.agentInfo.title">
            <FormItem label="招标代理机构:">
              <span>{{ data.agentInfo.title }}</span>
            </FormItem>
            <FormItem label="地址:">
              <span>{{ data.agentInfo.address }}</span>
            </FormItem>
            <FormItem label="联系人:">
              <span>{{ data.agentInfo.contact }}</span>
            </FormItem>
            <FormItem label="联系人手机号:">
              <span>{{ data.agentInfo.contactPhone }}</span>
            </FormItem>
            <FormItem label="电子邮件:">
              <span>{{ data.agentInfo.email }}</span>
            </FormItem>
          </Form>
        </Row>
        <Row style="margin-top: 100px">
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
        <Row style="margin-top: 150px">
          <Row
            class="fileRow"
            v-for="(item, index) in data.uploadInfoList"
            :key="index"
          >
            <Col :span="10" class="textCol">
              <p class="textHover"  @click="downloadFile(item.url)">附件：{{item.fileName}}</p>
            </Col>
            <Col :span="4">
              {{ item.fileSize }}
            </Col>
            <Col :span="10" class="textCol"> 上传时间：{{ item.updateTime }} </Col>
          </Row>
        </Row>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  name: "resultCom",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data(){
    return {
    }
  },
  methods: {
    downloadFile(url) {
      const link = document.createElement("a");
      link.style.display = "none";
      // http to https
      link.href = url.replace('http','https');
      // link.href = url;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  },
};
</script>

<style lang="less">
.resultCom {
  .ivu-row{
    word-break: break-all;
  }
  overflow: hidden;
  .container {
    position: relative;
    background-color: #efefef;
    .title {
      font-size: 18px;
      text-align: center;
      font-weight: bold;
      margin-bottom: 20px;
    }
  }
  .ivu-form-item {
    margin-bottom: 0px;
  }
  .infoTitle {
    margin: 15px 0 5px;
  }
  .infoText {
    padding-left: 30px;
  }
  .fileRow {
    text-align: center;
    height: 50px;
    line-height: 50px;
    background-color: rgba(242, 242, 242, 1);
    margin-bottom: 10px;
  }
  .textCol {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .textHover:hover{
    color: #2d8cf0;
    cursor: pointer;
  }
}
</style>
