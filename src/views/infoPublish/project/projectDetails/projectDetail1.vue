<template>
  <div class="projectDetails1">
    <Row>
      <p class="title">
        {{baseInfo.projectTitle}}
      </p>
    </Row>
    <Row>
      <h1>招标项目规模及概况</h1>
      <p class="text">{{ baseInfo.description }}</p>
    </Row>
    <Row>
      <h1>招标内容和范围</h1>
      <p class="text">{{ baseInfo.descContentScope }}</p>
    </Row>
    <Row>
      <h1>资金来源信息</h1>
      <Col :span="24" style="margin-top: 10px">
        <p style="line-height: 30px; text-indent: 12px" v-show="baseInfo.stateFund">国有资金：{{baseInfo.stateFund}}万</p>
        <p style="line-height: 30px; text-indent: 12px" v-show="baseInfo.overseasFund">境外资金：{{baseInfo.overseasFund}}万</p>
        <p style="line-height: 30px; text-indent: 12px" v-show="baseInfo.selfSource">自筹资金：{{baseInfo.selfSource}}万</p>
        <p style="line-height: 30px; text-indent: 12px" v-show="baseInfo.privateFund">私有资金：{{baseInfo.privateFund}}万</p>
        <p style="line-height: 30px; text-indent: 12px" v-show="baseInfo.otherFund">其他：{{baseInfo.otherFund}}万</p>
        <p style="line-height: 30px; text-indent: 12px" v-show="baseInfo.foreignCompanyFund">外国政府及企业投资：{{baseInfo.foreignCompanyFund}}万</p>
      </Col>
      <Col :span="24" style="margin: 10px 0px" v-if="bidList.length > 0">
        <div v-for="(item,index) in bidList" :key="index" style="margin-bottom:30px;">
          <table
            border="1"
            cellspacing="0"
            class="bidderList"
            bordercolor="#76b6dd"
          >
            <tr>
              <td class="wordRight">标段（包）1：</td>
              <td colspan="3" class="wordLeft">{{item.title}}</td>
            </tr>
            <tr>
              <td class="wordRight">标段（包）编号：</td>
              <td class="wordLeft">{{item.sectionNumber}}</td>
              <td class="wordRight">标段（包）专业分类：</td>
              <td class="wordLeft">{{ getCategory(item.bidCategoryId) }}</td>
            </tr>
            <tr>
              <td class="wordRight">所在行政区域：</td>
              <td class="wordLeft">{{item.area}}</td>
              <td class="wordRight">标段（包）招标方式：</td>
              <td class="wordLeft">{{item.bidType}}</td>
            </tr>
            <tr>
              <td class="wordRight">建立时间：</td>
              <td class="wordLeft" colspan="3">{{item.createTime}}</td>
            </tr>
          </table>
        </div>
      </Col>
    </Row>
    <Row>
      <h1>监督部门</h1>
      <p style="line-height: 30px; margin: 10px 0px; text-indent: 12px">
        本招标项目的监督部门为 {{baseInfo.jdbmName}}
      </p>
    </Row>
    <Row>
      <h1>联系方式</h1>
      <Form :label-width="140" style="margin-top: 20px">
        <FormItem label="招标人:">
          <span>{{formItem.agentName}}</span>
        </FormItem>
        <FormItem label="地址:">
          <span>{{formItem.agentAddress}}</span>
        </FormItem>
        <FormItem label="联系人:">
          <span>{{formItem.agentLink}}</span>
        </FormItem>
        <FormItem label="联系人手机号:">
          <span>{{formItem.agentPhone}}</span>
        </FormItem>
        <FormItem label="电子邮件:">
          <span>{{formItem.agentEmail}}</span>
        </FormItem>
      </Form>
      <Form :label-width="140" style="margin-top: 20px">
        <FormItem label="招标代理机构:">
          <span>{{formItem.organName}}</span>
        </FormItem>
        <FormItem label="地址:">
          <span>{{formItem.organAddress}}</span>
        </FormItem>
        <FormItem label="联系人:">
          <span>{{formItem.organLink}}</span>
        </FormItem>
        <FormItem label="联系人手机号:">
          <span>{{formItem.organPhone}}</span>
        </FormItem>
        <FormItem label="电子邮件:">
          <span>{{formItem.organEmail}}</span>
        </FormItem>
      </Form>
    </Row>
  </div>
</template>

<script>
import { projectDetail } from "@/api/publishApi";
export default {
  name: "projectDetails1",
  data() {
    return {
      projectId: "",
      bidList: [],
      baseInfo: {
        projectTitle:'',  // 项目名称
        jdbmName:'',  // 监督部门
        description: '',  // 概况
        descContentScope: '',  // 内容和范围
        stateFund: "",  // 国有资金
        overseasFund: "", // 境外资金
        privateFund: "",  // 私有资金
        selfSource: "", // 自筹资金
        otherFund: "",  // 其他
        foreignCompanyFund: "",  // 外国政府
      },
      formItem: {
        agentName: "", // 招标人名称
        agentLink: "", // 联系人
        agentPhone: "", // 联系电话
        agentAddress: "", // 招标人地址
        agentEmail: "", // 电子邮箱
        organName: "", // 组织名称
        organLink: "", // 联系人
        organPhone: "", // 联系电话
        organAddress: "", // 招标机构地址
        organEmail: "", // 电子邮箱
      },
      industryClass: this.SEL.industryClass
    };
  },
  created() {
    this.projectId = this.$route.query.id;
    this.getDetail(this.projectId);
    console.log(this.industryClass)
  },
  methods: {
    getDetail(id) {
      projectDetail({
        projectId: id,
      }).then((res) => {
        if (res.success) {
          this.getAgent(res.result.agentInfo);
          this.bidList = res.result.bidSectionInfo;
          this.baseInfo = res.result.baseInfo;
        }
      });
    },
    getAgent(list) {
      if(list.length === 0) return;
      let agentInfo = list.find((item) => item.agentType == 1);
      let organInfo = list.find((item) => item.agentType == 2);

      this.formItem.agentName = agentInfo.title;
      this.formItem.agentLink = agentInfo.contact;
      this.formItem.agentPhone = agentInfo.contactPhone;
      this.formItem.agentAddress = agentInfo.address;
      this.formItem.agentEmail = agentInfo.email;

      this.formItem.organName = organInfo.title;
      this.formItem.organLink = organInfo.contact;
      this.formItem.organPhone = organInfo.contactPhone;
      this.formItem.organAddress = organInfo.address;
      this.formItem.organEmail = organInfo.email;
    },
    // 处理行业分类
    getCategory(cate) {
      cate = cate.split(',');
      let arr = [];
      cate.forEach(item => {
        arr.push(this.industryClass.find(ca => ca.value == item).label)
      })
      console.log(arr)
      return arr.join(',')
    }
  },
};
</script>

<style lang="less" scoped>
.projectDetails1 {
  .title {
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .text {
    margin: 10px 0;
    margin-left: 12px;
  }
  h1 {
    font-size: 20px;
    position: relative;
    font-weight: 400;
    padding-left: 15px;
    span {
      color: #666;
      position: absolute;
      right: 0;
      bottom: 0;
      font-size: 12px;
      cursor: pointer;
    }
  }
  h1:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 4px;
    top: 4px;
    width: 4px;
    height: auto;
    background-color: #1d9ed5;
  }
  .bidderList {
    margin-left: 12px;
    width: 100%;
    .wordRight {
      text-align: right;
    }
    .wordLeft {
      padding-left: 6px;
    }
    tr{
      width: 100%;
    }
    td{
      width: 25%;
      padding: 8px 0;
    }
  }
  .ivu-form-item {
    margin-bottom: 0px;
  }
}
</style>
