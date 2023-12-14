<template>
  <div class="tenderCom">
    <div class="inner-side">
      <Card style="height:100%;overflow-y: auto;" class="inner-card">
        <Row>
          <p class="title">
            {{data.notice.title}}
          </p>
          <p class="title">（招标编号：{{data.notice.noticeNumber}}）</p>
        </Row>
        <Row>
          <p class="infoText" style="margin-bottom:15px;">项目所在地区：{{data.notice.area}}</p>
        </Row>
        <Row>
          <div class="infoText" style="padding-left: 0px;text-indent: 30px;">
            {{data.projectName}}，招标人为：{{data.bidInfo.title}}，资金已落实。项目已具备招标条件，现邀请有意向的潜在投标人前来投标。
          </div>
        </Row>
        <Row>
          <p class="infoTitle">一、项目规模及概况</p>
          <div class="infoText">
            {{data.description}}
          </div>
        </Row>
        <Row>
          <p class="infoTitle">二、招标范围</p>
          <div class="infoText">
            {{data.descContentScope}}
          </div>
        </Row>
        <Row>
          <p class="infoTitle">三、投标人资格要求</p>
          <div class="infoText">
            <div v-for="(item,index) in data.bidSectionInfoList" :key="index" style="margin-bottom:15px;">
              <p>标段（包）编号：{{item.sectionNumber}}</p>
              <p>标段（包）名称：{{item.title}}</p>
              <p>投标人的资格能力要求：{{item.qualify}}</p>
            </div>
          </div>
        </Row>
        <Row>
          <p class="infoTitle">四、招标文件的获取</p>
          <div class="infoText">
            <p>获取时间：{{data.notice.obtainFileStart}} 至 {{data.notice.obtainFileEnd}}</p>
            <p>获取方式：{{data.notice.obtainFileMethod}}</p>
          </div>
        </Row>
        <Row>
          <p class="infoTitle">五、{{tenderTitle}}</p>
          <div class="infoText">
            <p>递交截止时间：{{data.notice.postDeadline}}</p>
            <p>递交方式：{{data.notice.postType}}</p>
            <p>递交地址：{{data.notice.postAddress}}</p>
          </div>
        </Row>
        <Row>
          <p class="infoTitle">六、开标时间及地点</p>
          <div class="infoText">
            <p>开标时间：{{data.notice.openBidTime}}</p>
            <p>开标地点：{{data.notice.openBidAddress}}</p>
          </div>
        </Row>
        <Row>
          <p class="infoTitle">七、其他</p>
          <div class="infoText" v-html="data.notice.content">
            
          </div>
        </Row>
        <Row>
          <p class="infoTitle">八、联系方式</p>
          <Form :label-width="140">
            <FormItem label="招标人:">
              <span>{{data.bidInfo.title}}</span>
            </FormItem>
            <FormItem label="地址:">
              <span>{{data.bidInfo.address}}</span>
            </FormItem>
            <FormItem label="联系人:">
              <span>{{data.bidInfo.contact}}</span>
            </FormItem>
            <FormItem label="联系人手机号:">
              <span>{{data.bidInfo.contactPhone}}</span>
            </FormItem>
            <FormItem label="电子邮件:">
              <span>{{data.bidInfo.email}}</span>
            </FormItem>
          </Form>
          <Form :label-width="140" style="margin-top: 20px" v-if="data.agentInfo.title">
            <FormItem label="招标代理机构:">
              <span>{{data.agentInfo.title}}</span>
            </FormItem>
            <FormItem label="地址:">
              <span>{{data.agentInfo.address}}</span>
            </FormItem>
            <FormItem label="联系人:">
              <span>{{data.agentInfo.contact}}</span>
            </FormItem>
            <FormItem label="联系人手机号:">
              <span>{{data.agentInfo.contactPhone}}</span>
            </FormItem>
            <FormItem label="电子邮件:">
              <span>{{data.agentInfo.email}}</span>
            </FormItem>
          </Form>
        </Row>
        <Row style="margin-top:100px;">
          <Row>
            <Col :span="18">
              <p style="text-align: right;">招标人或招标代理机构主要负责人（项目负责人）：</p>
            </Col>
            <Col :span="6">

            </Col>
          </Row>
          <Row style="margin-top:10px;">
            <Col :span="18">
               <p style="text-align: right;">招标人或其招标代理机构：</p>
            </Col>
            <Col :span="4">
            </Col>
          </Row>
        </Row>
        <Row style="margin-top:150px;">
          <Row  class="fileRow" v-for="(item,index) in data.uploadInfoList" :key="index">
            <Col :span="10" class="textCol">
              <p class="textHover"  @click="downloadFile(item.url)">附件：{{item.fileName}}</p>
            </Col>
            <Col :span="4">
              {{item.fileSize}}
            </Col>
            <Col :span="10" class="textCol">
              上传时间：{{item.updateTime}}
            </Col>
          </Row>
        </Row>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  name: "tenderCom",
  props: {
    data: {
      type: Object,
      default:  () => {},
    },
    tenderTitle:{
      type: String,
      default:""
    }
  },
  data() {
    return {
    };
  },
  created() {
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
.tenderCom {
  .ivu-row{
    word-break: break-all;
  }
  overflow: hidden;
  .infoTitle {
    margin: 15px 0 5px;
  }
  .infoText {
    padding-left: 30px;
  }
  .title {
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .msinfo {
    display: inline-block;
    margin-left: 520px;
    margin-top: -20px;
    color: white;
  }
  .ivu-form-item {
    margin-bottom: 0px;
  }
  .fileRow{
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
