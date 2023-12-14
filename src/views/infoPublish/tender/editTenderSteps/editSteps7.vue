<template>
  <div class="announcementStep6">
    <div class="inner-side">
      <Card style="padding-bottom: 200px;height:100%;overflow-y: auto;" class="inner-card">
        <Row>
          <p class="title">
            {{notice.title}}
          </p>
          <p class="title">（招标编号：{{notice.noticeNumber}}）</p>
        </Row>
        <Row>
          <p class="infoText" style="margin-bottom:15px;">项目所在地区：{{notice.area}}</p>
        </Row>
        <Row>
          <div class="infoText" style="padding-left: 0px;text-indent: 30px;">
            {{projectName}}，招标人为：{{bidInfo.title}}，资金已落实。项目已具备招标条件，现邀请有意向的潜在投标人前来投标
          </div>
        </Row>
        <Row>
          <p class="infoTitle">一、项目规模及概况</p>
          <div class="infoText">
            {{description}}
          </div>
        </Row>
        <Row>
          <p class="infoTitle">二、招标范围</p>
          <div class="infoText">
            {{descContentScope}}
          </div>
        </Row>
        <Row>
          <p class="infoTitle">三、投标人资格要求</p>
          <div class="infoText">
            <div v-for="(item,index) in bidSectionInfoList" :key="index" style="margin-bottom:15px;">
              <p>标段（包）编号：{{item.sectionNumber}}</p>
              <p>标段（包）名称：{{item.title}}</p>
              <p>投标人的资格能力要求：{{item.qualify}}</p>
            </div>
          </div>
        </Row>
        <Row>
          <p class="infoTitle">四、招标文件的获取</p>
          <div class="infoText">
            <p>获取时间：{{notice.obtainFileStart}} 至 {{notice.obtainFileEnd}}</p>
            <p>获取方式：{{notice.obtainFileMethod}}</p>
          </div>
        </Row>
        <Row>
          <p class="infoTitle">五、投标文件的递交</p>
          <div class="infoText">
            <p>递交截止时间：{{notice.postDeadline}}</p>
            <p>递交方式：{{notice.postType}}</p>
            <p>递交地址：{{notice.postAddress}}</p>
          </div>
        </Row>
        <Row>
          <p class="infoTitle">六、开标时间及地点</p>
          <div class="infoText">
            <p>开标时间：{{notice.openBidTime}}</p>
            <p>开标地点：{{notice.openBidAddress}}</p>
          </div>
        </Row>
        <Row>
          <p class="infoTitle">七、其他</p>
          <div class="infoText" v-html="notice.content">
            
          </div>
        </Row>
        <Row>
          <p class="infoTitle">八、联系方式</p>
          <Form :label-width="140">
            <FormItem label="招标人:">
              <span>{{bidInfo.title}}</span>
            </FormItem>
            <FormItem label="地址:">
              <span>{{bidInfo.address}}</span>
            </FormItem>
            <FormItem label="联系人:">
              <span>{{bidInfo.contact}}</span>
            </FormItem>
            <FormItem label="联系人手机号:">
              <span>{{bidInfo.contactPhone}}</span>
            </FormItem>
            <FormItem label="电子邮件:">
              <span>{{bidInfo.email}}</span>
            </FormItem>
          </Form>
          <Form :label-width="140" style="margin-top: 20px" v-if="agentInfo.title">
            <FormItem label="招标代理机构:">
              <span>{{agentInfo.title}}</span>
            </FormItem>
            <FormItem label="地址:">
              <span>{{agentInfo.address}}</span>
            </FormItem>
            <FormItem label="联系人:">
              <span>{{agentInfo.contact}}</span>
            </FormItem>
            <FormItem label="联系人手机号:">
              <span>{{agentInfo.contactPhone}}</span>
            </FormItem>
            <FormItem label="电子邮件:">
              <span>{{agentInfo.email}}</span>
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
import {
  saveBuildNotice,tenderPreView
} from "@/api/publishApi";
export default {
  name: "editSteps7",
  props: {
    currentStep: {
      type: Number,
      default: 6,
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
  created() {
    this.view();
  },
  activated() {
    if(this.getStore('tenderEdit')){
      this.removeStore('tenderEdit');
      this.$emit("update:currentStep", 0);
    }
  },
  methods: {
    pre() {
      this.$emit("update:currentStep", 5);
    },
    // 预览
    view() {
      tenderPreView(this.$route.query.id).then(res => {
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
    next() {
      saveBuildNotice({
        id: this.$route.query.id
      }).then(res => {
        if(res.success) {
          this.$emit("update:currentStep", 7);
        }
      })
    },
  },
};
</script>

<style lang="less">
.announcementStep6 {
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
  .textCol {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
