<template>
  <div class="changeTenderCom">
    <div class="inner-side">
      <Card style="padding-top:20px;height:100%;overflow-y: auto;" class="inner-card">
        <Row>
          <p class="title">
            {{data.notice.title}}
          </p>
          <p class="title">（招标编号：{{data.notice.noticeNumber}}）</p>
        </Row>
        <Row>
          <p class="infoTitle">一、内容</p>
          <div class="infoText" v-html="data.notice.content">
            
          </div>
        </Row>
        <Row>
          <p class="infoTitle">二、是否延期开标</p>
          <div class="infoText">
            <p v-show="data.notice.isDelay === 0">否</p>
            <p v-show="data.notice.isDelay === 1">延期开标时间：{{format(new Date(data.notice.openBidTime), 'yyyy年MM月dd日 HH时mm分ss秒')}}</p>
          </div>
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
  name: "changeTenderCom",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
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
  }
   
};
</script>

<style lang="less">
.changeTenderCom {
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
  .textCol{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .textHover:hover{
    color: #2d8cf0;
    cursor: pointer;
  }
}
</style>
