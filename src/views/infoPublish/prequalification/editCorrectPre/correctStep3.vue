<template>
  <div class="correctStep3">
    <div class="inner-side">
      <Card style="padding-bottom: 200px;padding-top:20px;height:100%;overflow-y: auto;" class="inner-card">
        <Row>
          <p class="title">
            {{notice.title}}
          </p>
          <p class="title">（招标编号：{{notice.noticeNumber}}）</p>
        </Row>
        <Row>
          <p class="infoTitle">一、内容</p>
          <div class="infoText" v-html="notice.content">
            
          </div>
        </Row>
        <Row>
          <p class="infoTitle">二、是否延期开标</p>
          <div class="infoText">
            <p v-show="notice.isDelay == 0">否</p>
            <p v-show="notice.isDelay == 1">延期开标时间：{{format(new Date(notice.openBidTime), 'yyyy年MM月dd日 HH时mm分ss秒')}}</p>
          </div>
        </Row>
        <Row style="margin-top:150px;">
          <Row  class="fileRow" v-for="(item,index) in uploadInfoList" :key="index">
            <Col :span="9" class="textCol">
              附件：{{item.fileName}}
            </Col>
            <Col :span="6">
              {{item.fileSize}}
            </Col>
            <Col :span="9">
              上传时间：{{item.updateTime}}
            </Col>
          </Row>
        </Row>
      </Card>
      <div class="bottom">
        <Row style="text-align: center; margin-top: 25px">
          <Checkbox label="" v-model="tenderFlag">
            提交之后该信息将进入发布流程，无法修改！
          </Checkbox>
        </Row>
        <Row style="text-align: center; margin-top: 25px">
          <Button size="large" style="margin-right: 10px" @click="pre"
            >上一步</Button
          >
          <Button size="large" type="primary" :disabled="!tenderFlag" @click="next"
            >提交，完成发布</Button
          >
          
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
import { saveBuildNotice,prePreView } from "@/api/publishApi";
export default {
  name: "correctStep3",
  props: {
    currentStep: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      tenderFlag: false,
      agentInfo:{},
      bidInfo:{},
      bidSectionInfoList:[],
      descContentScope:'',
      description:'',
      notice:{},
      projectName:"",
      uploadInfoList:[]
    };
  },
  activated() {
    if(this.getStore('editCorrectPre')){
      this.removeStore('editCorrectPre');
      this.$emit("update:currentStep", 0);
    }
  },
  created() {
    this.view();
  },
  methods: {
    // 预览
    view() {
      prePreView(this.$route.query.id).then(res => {
        if(res.success) {
          this.agentInfo = res.result.agentInfo;
          this.bidInfo = res.result.bidInfo;
          this.bidSectionInfoList = res.result.bidSectionInfoList;
          this.descContentScope = res.result.descContentScope;
          this.description = res.result.description;
          this.notice = res.result.notice;
          this.projectName = res.result.projectName;
          this.uploadInfoList = res.result.uploadInfoList;
        }
      })
    },
    pre() {
      this.$emit("update:currentStep", 1);
    },
    next() {
      saveBuildNotice({
        id: this.$route.query.id
      }).then(res => {
        if(res.success) {
          this.$emit("update:currentStep", 3);
        }
      })
    },
  },
};
</script>

<style lang="less">
.correctStep3 {
  word-break: break-all;
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
  .inner-side {
    position: relative;
    height: calc(100vh - 132px);
    background-color: #e4e4e4;
    .inner-card{
      min-height: calc(100vh - 132px);
    }
  }
  .msinfo {
    display: inline-block;
    margin-left: 520px;
    margin-top: -20px;
    color: white;
  }
  .bottom {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 150px;
    background-color: rgba(0, 0, 0, 0.8);
    label {
      color: #fff;
    }
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
}
</style>
