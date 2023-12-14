<template>
  <div class="symptomStep3">
    <div class="container">
      <Card  style="padding-top: 20px;" class="inner-card">
        <Row>
          <p class="title">
             {{ notice.title }}
          </p>
          <p class="title">（招标编号：{{ notice.noticeNumber }}）</p>
        </Row>
        <Row class="rowBox">
          <p class="infoTitle">一、内容</p>
          <div class="infoText" v-html="notice.content"></div>
        </Row>
        <Row style="margin-top: 150px">
          <Row
            class="fileRow"
            v-for="(item, index) in uploadInfoList"
            :key="index"
          >
            <Col :span="10" class="textCol"> 附件：{{ item.fileName }} </Col>
            <Col :span="5">
              {{ item.fileSize }}
            </Col>
            <Col :span="9"> 上传时间：{{ item.updateTime }} </Col>
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
          <Button size="large" style="margin-right: 20px" @click="pre"
            >上一步</Button
          >
          <Button
            size="large"
            :disabled="!tenderFlag"
            type="primary"
            @click="next"
            >提交，完成发布</Button
          >
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
import {saveBuildNotice,resultPreView} from "@/api/publishApi";
export default {
  name: "abandonStep3",
  props: {
    currentStep: {
      type: "Number",
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
      jdbmName:"",
      uploadInfoList:[]
    };
  },
  activated() {
    if(this.getStore('resultAbandon')){
      this.removeStore('resultAbandon');
      this.$emit("update:currentStep", 0);
    }
  },
  created() {
    this.view();
  },
  methods: {
    // 预览
    view() {
      resultPreView(this.getStore("abandonResultId")).then(res => {
        if(res.success) {
          this.agentInfo = res.result.agentInfo;
          this.bidInfo = res.result.bidInfo;
          this.bidSectionInfoList = res.result.bidSectionInfoList;
          this.descContentScope = res.result.descContentScope;
          this.description = res.result.description;
          this.notice = res.result.notice;
          this.jdbmName = res.result.jdbmName;
          this.uploadInfoList = res.result.uploadInfoList;
        }
      })
    },
    pre() {
      this.$emit("update:currentStep", 1);
    },
    next() {
      saveBuildNotice({
        id: this.getStore("abandonResultId")
      }).then(res => {
        if(res.success) {
          this.$emit("update:currentStep", 3);
        }
      })
    },
  },
};
</script>

<style lang="less" >
.symptomStep3 {
  word-break: break-all;
  .container {
    position: relative;
    background-color: #efefef;
    height: calc(100vh - 132px);
    .inner-card {
      min-height: calc(100vh - 132px);
      padding-bottom: 200px;
      height: 100%;
      overflow-y: auto;
    }
    .title {
      font-size: 18px;
      text-align: center;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .bottom {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 130px;
      background-color: rgba(0, 0, 0, 0.3);
    }
    .bottom-row {
      text-align: center;
      margin-top: 40px;
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
}
</style>
