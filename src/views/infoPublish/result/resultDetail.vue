<template>
  <div class="resultDetails">
    <div>
      <Row :gutter="16">
        <Col span="8">
          <Card>
            <div class="card">
              <p class="title">
                中国电信股份有限公司喀什分公司校园行业室内、室外插大卡机采购项目
              </p>
              <p class="time">
                <span v-if="state === 1" class="state4">已发布</span>
                <span v-else-if="state === 2" class="state6">未发布</span>
                <span v-else-if="state === 3" class="state5">未提交</span>
                2018-10-22
                <span @click="projectDetails(0)">公示详情</span>
              </p>
              <ul class="info-details">
                <li>
                  <p class="info-title">所属行业分类</p>
                  <p class="info-directory">机械电子电器,市政</p>
                </li>
                <li>
                  <p class="info-title">所在行政区域</p>
                  <p class="info-directory">北京，海淀</p>
                </li>
                <li>
                  <p class="info-title">招标方式</p>
                  <p class="info-directory">公开招标</p>
                </li>
                <li>
                  <p class="info-title">招标组织形式</p>
                  <p class="info-directory">委托招标</p>
                </li>
              </ul>
            </div>
            <div class="operation">
              <ul>
                <li @click="projectDetails(1)">
                  <Icon
                    size="20"
                    type="md-cloud-download"
                    class="icon-color"
                  />下载PDF
                </li>
                <li @click="share">
                  <Icon size="20" type="md-share" class="icon-color" />扫码分享
                </li>
              </ul>
            </div>
            <div class="associated">
              <h1>关联招标项目</h1>
              <p>
                中国电信股份有限公司喀什分公司校园行业室内、室外插大卡机采购项目
              </p>
            </div>
            <div class="associated">
              <h1>关联招标公告</h1>
              <p>
                中国电信股份有限公司喀什分公司校园行业室内、室外插大卡机采购项目
              </p>
            </div>
            <div class="associated">
              <h1>关联中标候选人公示</h1>
              <p>
                中国电信股份有限公司喀什分公司校园行业室内、室外插大卡机采购项目
              </p>
            </div>
          </Card>
        </Col>
        <Col span="16">
          <Card>
            <ResultDetails1 v-show="currentStep === 0" />
            <ResultDetails2 v-show="currentStep === 1" />
          </Card>
        </Col>
      </Row>
    </div>
    <commonShare :shareFlag.sync="shareFlag"></commonShare>
  </div>
</template>

<script>
import commonShare from "../../my-components/xboot/common-share";

import ResultDetails1 from './resultDetails/resultDetails1'
import ResultDetails2 from './resultDetails/resultDetails2'
export default {
  name: "resultDetail",
  components: {
    commonShare,
    ResultDetails1,
    ResultDetails2,
  },
  data() {
    return {
      index: 5,
      state: 1,
      currentStep: 0,
      shareFlag: false,
      menuData: [
        {
          name: "首页",
          index: 1,
          icon: "md-home",
          router: "/",
        },
        {
          name: "项目",
          index: 2,
          icon: "md-filing",
          router: "/project",
        },
        {
          name: "招标公告",
          index: 3,
          icon: "md-albums",
          router: "/announcement",
        },
        {
          name: "中标候选人公示",
          index: 4,
          icon: "md-grid",
          router: "/candidate",
        },
        {
          name: "中标结果公告",
          index: 5,
          icon: "md-hammer",
          router: "/result",
        },
        {
          name: "资格预审公告",
          index: 6,
          icon: "md-clipboard",
          router: "/prequalification",
        },
        {
          name: "投标人",
          index: 7,
          icon: "md-disc",
          router: "/bidder",
        },
        {
          name: "标书购买",
          index: 8,
          icon: "md-list-box",
          router: "",
        },
      ],
    };
  },
  created() {
    // this.$store.dispatch('getDetail');
  },
  methods: {
    projectDetails(num) {
      this.currentStep = num;
    },
    share() {
      this.shareFlag = true;
    },
    modelBoolean() {
      this.shareFlag = false;
    },
  },
  computed: {
    getData() {
      return this.$store.state.Result.detail;
    },
  },
};
</script>

<style lang="less" scoped>
.resultDetails {
  .card {
    border-bottom: #f5f7f9 1px solid;
    padding-bottom: 20px;
    .title {
      font-size: 14px;
      font-weight: bold;
      text-align: center;
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
        font-size: 12px;
        margin-left: 0;
        margin-right: 10px;
        color: #19be6b;
      }
      span.state5 {
        font-size: 12px;
        margin-left: 0;
        margin-right: 10px;
        color: #2db7f5;
      }
      span.state6 {
        font-size: 12px;
        margin-left: 0;
        margin-right: 10px;
        color: #ed4014;
      }
      span.state7 {
        font-size: 12px;
        margin-left: 0;
        margin-right: 10px;
        color: #9900ff;
      }
      span.state8 {
        font-size: 12px;
        margin-left: 0;
        margin-right: 10px;
        color: #ff9900;
      }
    }
    .info-details {
      display: inline-flex;
      flex-wrap: wrap;
      width: 100%;
      li {
        display: inline-flex;
        flex-wrap: wrap;
        width: 50%;
        justify-content: center;
        margin-top: 10px;
        p {
          width: 100%;
          text-align: center;
        }
        .info-title {
          font-weight: bold;
        }
        .info-directory {
          color: #1d9ed5;
        }
      }
    }
  }
  .operation {
    .icon-color {
      color: #2d8cf0;
      line-height: 24px;
      margin-right: 5px;
    }
    ul {
      display: inline-flex;
      flex-wrap: wrap;
      width: 100%;
      margin: 10px 0;
      li {
        line-height: 24px;
        cursor: pointer;
        padding-left: 20px;
        display: inline-flex;
        flex-wrap: wrap;
        width: 50%;
        margin-top: 10px;
      }
    }
  }
  .associated {
    border-top: #f5f7f9 1px solid;
    margin-bottom: 15px;
    h1 {
      font-size: 14px;
      position: relative;
      padding-left: 5px;
      margin: 15px 0 5px 0;
      span {
        color: #666;
        position: absolute;
        right: 0;
        bottom: 0;
        font-size: 14px;
        cursor: pointer;
      }
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
}
</style>
