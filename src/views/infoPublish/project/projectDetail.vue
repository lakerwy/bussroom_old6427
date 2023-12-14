<template>
  <div class="projectDetails" v-if="projectDetailTabs.length !== 0">
    <Tabs
      type="card"
      closable
      @on-tab-remove="handleTabRemove"
      :animated="false"
      @on-click="changeTable"
      v-model="currentName"
    >
      <TabPane
        :label="item.title"
        v-for="item in projectDetailTabs"
        :key="item.id"
        :name="item.id"
      >
      </TabPane>
    </Tabs>
      <Row :gutter="10">
        <Col span="8">
          <Card>
            <div class="card">
              <p class="title">
                {{baseInfo.projectTitle}}
              </p>
              <p >
                {{baseInfo.statusTime}}
              </p>
              <Row>
                <Col :span="12" style="text-align: center; margin-top: 10px">
                  <p class="info-title">所属行业分类</p>
                  <p class="info-directory">{{categorys}}</p>
                </Col>
                <Col :span="12" style="text-align: center; margin-top: 10px">
                  <p class="info-title">所在行政区域</p>
                  <p class="info-directory">{{baseInfo.area}}</p>
                </Col>
              </Row>
              <Row>
                <Col :span="12" style="text-align: center; margin-top: 10px">
                  <p class="info-title">招标方式</p>
                  <p class="info-directory">{{baseInfo.bidType}}</p>
                </Col>
                <Col :span="12" style="text-align: center; margin-top: 10px">
                  <p class="info-title">招标组织形式</p>
                  <p class="info-directory">{{baseInfo.bidOrgnize}}</p>
                </Col>
              </Row>
            </div>
            <div class="operation" v-if="false">
              <Row>
                <Col
                  :span="12"
                  style="text-align: center; margin-top: 10px"
                  v-if="false"
                >
                  <Button
                    type="text"
                    @click="projectDetails(1)"
                    icon="md-git-merge"
                    >关联公告</Button
                  >
                </Col>
                <Col
                  :span="12"
                  style="text-align: center; margin-top: 10px"
                  v-if="false"
                >
                  <Button
                    @click="projectDetails(2)"
                    type="text"
                    icon="md-locate"
                    >投标管理</Button
                  >
                </Col>
              </Row>
              <Row>
                <Col :span="12" style="text-align: center; margin-top: 10px">
                  <Button
                    @click="addTender"
                    type="text"
                    icon="md-albums"
                    >发招标公告</Button
                  >
                </Col>
                <Col :span="12" style="text-align: center; margin-top: 10px">
                  <Button
                    @click="addPre"
                    type="text"
                    icon="md-clipboard"
                    >发资格预审公告</Button
                  >
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
        <Col span="16">
          <Card>
            <div class="projectDetails1">
              <Row>
                <p class="title">
                  {{ baseInfo.projectTitle }}
                </p>
              </Row>
              <Row>
                <h1>项目规模及概况</h1>
                <p class="text">{{ baseInfo.description }}</p>
              </Row>
              <Row>
                <h1>招标范围</h1>
                <p class="text">{{ baseInfo.descContentScope }}</p>
              </Row>
              <Row>
                <h1>资金来源信息</h1>
                <Col :span="24" style="margin-top: 10px">
                  <p
                    style="line-height: 30px; text-indent: 12px"
                    v-show="baseInfo.stateFund"
                  >
                    国有资金：{{ baseInfo.stateFund }}万
                  </p>
                  <p
                    style="line-height: 30px; text-indent: 12px"
                    v-show="baseInfo.overseasFund"
                  >
                    境外资金：{{ baseInfo.overseasFund }}万
                  </p>
                  <p
                    style="line-height: 30px; text-indent: 12px"
                    v-show="baseInfo.selfSource"
                  >
                    自筹资金：{{ baseInfo.selfSource }}万
                  </p>
                  <p
                    style="line-height: 30px; text-indent: 12px"
                    v-show="baseInfo.privateFund"
                  >
                    私有资金：{{ baseInfo.privateFund }}万
                  </p>
                  <p
                    style="line-height: 30px; text-indent: 12px"
                    v-show="baseInfo.otherFund"
                  >
                    其他：{{ baseInfo.otherFund }}
                  </p>
                  <p
                    style="line-height: 30px; text-indent: 12px"
                    v-show="baseInfo.foreignCompanyFund"
                  >
                    外国政府及企业投资：{{ baseInfo.foreignCompanyFund }}万
                  </p>
                  <p
                    style="line-height: 30px; text-indent: 12px"
                    v-show="!baseInfo.privateFund && !baseInfo.stateFund && !baseInfo.overseasFund && !baseInfo.selfSource && !baseInfo.otherFund && !baseInfo.foreignCompanyFund"
                  >
                    无
                  </p>
                </Col>
                
              </Row>
              <Row>
                <h1>标段信息</h1>
                <Col v-if="bidList.length == 0">
                  <p class="text">无</p>
                </Col>
                <Col
                  :span="24"
                  style="margin: 10px 0px"
                  v-if="bidList.length > 0"
                >
                  <div
                    v-for="(item, index) in bidList"
                    :key="index"
                    style="margin-top: 10px"
                  >
                    <table
                      border="1"
                      cellspacing="0"
                      class="bidderList"
                      bordercolor="#76b6dd"
                    >
                      <tr>
                        <td class="wordRight">标段（包）{{index + 1}}：</td>
                        <td colspan="3" class="wordLeft">{{ item.title }}</td>
                      </tr>
                      <tr>
                        <td class="wordRight">标段（包）编号：</td>
                        <td class="wordLeft">{{ item.sectionNumber }}</td>
                        <td class="wordRight">标段（包）专业分类：</td>
                        <td class="wordLeft">
                          {{ getCategory(item.bidCategoryId) }}
                        </td>
                      </tr>
                      <tr>
                        <td class="wordRight">所在行政区域：</td>
                        <td class="wordLeft">{{ item.area }}</td>
                        <td class="wordRight">标段（包）招标方式：</td>
                        <td class="wordLeft">{{ item.bidType }}</td>
                      </tr>
                      <tr>
                        <td class="wordRight">建立时间：</td>
                        <td class="wordLeft" colspan="3">
                          {{ item.createTime }}
                        </td>
                      </tr>
                    </table>
                  </div>
                </Col>
              </Row>
              <Row>
                <h1>监督部门</h1>
                <p
                  style="line-height: 30px; margin: 10px 0px; text-indent: 12px"
                >
                  本招标项目的监督部门为 {{ baseInfo.jdbmName }}
                </p>
              </Row>
              <Row>
                <h1>联系方式</h1>
                <Form :label-width="140" style="margin-top: 20px">
                  <FormItem label="招标人:">
                    <span>{{ formItem.agentName }}</span>
                  </FormItem>
                  <FormItem label="地址:">
                    <span>{{ formItem.agentAddress }}</span>
                  </FormItem>
                  <FormItem label="联系人:">
                    <span>{{ formItem.agentLink }}</span>
                  </FormItem>
                  <FormItem label="联系人手机号:">
                    <span>{{ formItem.agentPhone }}</span>
                  </FormItem>
                  <FormItem label="电子邮件:">
                    <span>{{ formItem.agentEmail }}</span>
                  </FormItem>
                </Form>
                <Form :label-width="140" style="margin-top:20px;" v-if="formItem.organName">
                  <FormItem label="招标代理机构:">
                    <span>{{ formItem.organName }}</span>
                  </FormItem>
                  <FormItem label="地址:">
                    <span>{{ formItem.organAddress }}</span>
                  </FormItem>
                  <FormItem label="联系人:">
                    <span>{{ formItem.organLink }}</span>
                  </FormItem>
                  <FormItem label="联系人手机号:">
                    <span>{{ formItem.organPhone }}</span>
                  </FormItem>
                  <FormItem label="电子邮件:">
                    <span>{{ formItem.organEmail }}</span>
                  </FormItem>
                </Form>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
  </div>
</template>

<script>
import { projectDetail } from "@/api/publishApi";
export default {
  name: "projectDetail",
  data() {
    return {
      projectId: "",
      bidList: [],
      baseInfo: {
        /* projectTitle:'',  // 项目名称
        jdbmName:'',  // 监督部门
        description: '',  // 概况
        descContentScope: '',  // 内容和范围
        stateFund: "",  // 国有资金
        overseasFund: "", // 境外资金
        privateFund: "",  // 私有资金
        selfSource: "", // 自筹资金
        otherFund: "",  // 其他
        foreignCompanyFund: "",  // 外国政府
        categoryId:'', */
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
      industryClass: this.SEL.industryClass,
      currentName:'',
      projectDetailTabs: [],
      categorys:''
    };
  },
  activated() {
    /* this.projectId = this.$route.query.id;
    this.getDetail(this.projectId); */
    if (this.getStore("currentProjectDetailId")) {
      this.currentName = this.getStore("currentProjectDetailId");
      this.getDetail(this.getStore("currentProjectDetailId"));
    }
    this.projectDetailTabs =
      JSON.parse(this.getStore("projectDetailTabs")) || [];
  },
  methods: {
    routerEnv(name) {
      this.$router.push({
        name,
      });
    },
    getDetail(id) {
      projectDetail({
        projectId: id,
      }).then((res) => {
        if (res.success) {
          this.getAgent(res.result.agentInfo);
          this.bidList = res.result.bidSectionInfo;
          this.baseInfo = res.result.baseInfo;
          this.categorys = this.getCategory(res.result.baseInfo.categoryId);
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
      return arr.join(',')
    },
    handleTabRemove(name) {
      let data = JSON.parse(this.getStore("projectDetailTabs"));
      let index = data.findIndex((item) => item.id == name);
      data.splice(index, 1);
      this.projectDetailTabs.splice(index, 1);
      this.setStore("projectDetailTabs", JSON.stringify(data));
      if (data.length == 0) {
        this.projectDetailTabs = [];
        this.removeStore("currentProjectDetailId");
      }else if(index === 0){
        this.changeTable(data[index].id);
        this.getDetail(data[index].id);
      }else {
        this.changeTable(data[index - 1].id);
        this.getDetail(data[index - 1].id);
      }
    },
    changeTable(name) {
      this.getDetail(name);
      this.setStore("currentProjectDetailId", this.currentName);
    },
    // 发招标
    addTender() {
      
      if (
        this.$store.state.app.pageOpenedList.some(
          (item) => item.name === "addTender"
        )
      ) {
        this.$Modal.confirm({
          title: "提示",
          content: "当前已有公告正在创建，确认重新创建新公告？",
          onOk: () => {
            this.setStore('addTenderClickFlag', true)
            this.setStore('projectToTender', this.getStore('currentProjectDetailId'))
            this.removeStore("tenderId");
            this.setStore("tenderAdd", true);
            this.$router.push({
              name: "addTender",
            });
          },
        });
      } else {
        this.setStore('addTenderClickFlag', true)
        this.setStore('projectToTender', this.getStore('currentProjectDetailId'))
        this.removeStore("tenderId");
        this.setStore("tenderAdd", true);
        this.$router.push({
          name: "addTender",
        });
      }
    },
    // 新建资格预审公告
    addPre() {
      
      if (
        this.$store.state.app.pageOpenedList.some(
          (item) => item.name === "addPrequalification"
        )
      ) {
        this.$Modal.confirm({
          title: "提示",
          content: "当前已有公告正在创建，确认重新创建新公告？",
          onOk: () => {
            this.setStore('addPreClickFlag', true)
            this.setStore('projectToPre', this.getStore('currentProjectDetailId'))
            this.removeStore("addPreId");
            this.setStore("preAdd", true);
            this.$router.push({
              name: "addPrequalification",
            });
          },
        });
      } else {
        this.setStore('addPreClickFlag', true)
        this.setStore('projectToPre', this.getStore('currentProjectDetailId'))
        this.removeStore("addPreId");
        this.setStore("preAdd", true);
        this.$router.push({
          name: "addPrequalification",
        });
      }
    },
  },
};
</script>

<style lang="less">
.projectDetails {
  .ivu-row{
    word-break: break-all;
  }
  .card {
    border-bottom: #f5f7f9 1px solid;
    padding-bottom: 20px;
    word-break: break-all;
    .title {
      font-size: 16px;
      font-weight: bold;
    }
    .time {
      margin: 10px 0;
      font-size: 14px;
      text-align: center;
      span {
        margin-left: 10px;
        cursor: pointer;
        color: #1d9ed5;
      }
      span.state4 {
        background-color: #19be6b;
        padding: 2px 5px;
        opacity: 0.8;
        color: #fff;
        font-size: 12px;
        margin-left: 0;
        margin-right: 10px;
      }
      span.state5 {
        font-size: 12px;
        margin-left: 0;
        margin-right: 10px;
        color: #2db7f5;
      }
    }
    .info-title {
      font-weight: bold;
    }
    .info-directory {
      color: #1d9ed5;
    }
  }
  .operation {
    .icon-color {
      color: #2d8cf0;
    }
    ul {
      display: inline-flex;
      flex-wrap: wrap;
      width: 100%;
      margin: 10px 0;
      li {
        cursor: pointer;
        padding-left: 20px;
        display: inline-flex;
        flex-wrap: wrap;
        width: 50%;
        margin-top: 10px;
      }
    }
  }
  p.state {
    margin-top: 5px;
  }
  .menu-div {
    text-align: center;
  }
  .ivu-layout-sider-trigger {
    display: none;
  }
  .ivu-menu-vertical .ivu-menu-item {
    padding-left: 10px;
    padding-right: 10px;
  }
  .ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab{
    width: 25vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab .ivu-tabs-close{
    position: absolute;
    right: 10px;
    top: 5px;
  }
}
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
    margin-top: 10px;
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
