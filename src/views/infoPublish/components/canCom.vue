<template>
  <div class="canCom">
    <div class="inner-side">
      <Card
        style="padding-top: 20px; height: 100%; overflow-y: auto"
        class="inner-card"
      >
        <Row>
          <p class="title">
            {{ data.notice.title }}
          </p>
          <p class="title">（招标编号：{{ data.notice.noticeNumber }}）</p>
        </Row>
        <Row class="rowBox">
          <p class="infoText" style="margin-bottom: 15px">
            公示结束时间：{{
              format(new Date(data.notice.noticeEndTime), "yyyy年MM月dd日")
            }}
          </p>
        </Row>
        <Row class="rowBox">
          <div class="infoText">
            <div
              v-for="(item, index) in returnData"
              :key="index"
              style="margin-bottom: 30px"
            >
              <p style="font-size: 14px; font-weight: bold">
                标段（包）{{ index + 1 }} {{ item.title }}：
              </p>
              <p style="margin: 10px 0 10px 20px">1、中标候选人基本情况</p>
              <table cellspacing="0" class="bidderList">
                <tr>
                  <td style="width: 10%">排名</td>
                  <td style="width: 30%">中标候选人名称</td>
                  <td style="width: 20%">投标报价</td>
                  <td style="width: 20%">质量</td>
                  <td style="width: 20%">工期/交货期/服务期</td>
                </tr>
                <tr
                  v-for="(baseItem, baseIndex) in item.bidderList"
                  :key="baseIndex"
                >
                  <td>{{ baseItem.sort }}</td>
                  <td>
                    {{ baseItem.candidateName
                    }}{{
                      baseItem.unionCompanyName
                        ? "，" + baseItem.unionCompanyName
                        : ""
                    }}
                  </td>
                  <td>
                    {{
                      baseItem.bidPrice
                        ? "投标报价金额:" + baseItem.bidPrice + "万元"
                        : ""
                    }}
                    <br />
                    {{ baseItem.rate ? "费率:" + baseItem.rate : "" }}<br />{{
                      baseItem.otherPrice
                        ? "其他类型投标报价:" + baseItem.otherPrice
                        : ""
                    }}
                  </td>
                  <td>{{ baseItem.quality }}</td>
                  <td>{{ baseItem.delivery }}天</td>
                </tr>
              </table>

              <p style="margin: 20px 0 10px 20px">
                2、中标候选人按照招标文件要求承诺的项目负责人情况
              </p>
              <table cellspacing="0" class="bidderList">
                <tr>
                  <td style="width: 10%">排名</td>
                  <td style="width: 30%">中标候选人名称</td>
                  <td style="width: 30%">项目负责人姓名</td>
                  <td style="width: 30%">项目负责人相关证书和编号</td>
                </tr>
                <tr
                  v-for="(manItem, manIndex) in item.bidderList"
                  :key="manIndex"
                >
                  <td>{{ manItem.sort }}</td>
                  <td>
                    {{ manItem.candidateName
                    }}{{
                      manItem.unionCompanyName
                        ? "，" + manItem.unionCompanyName
                        : ""
                    }}
                  </td>
                  <td>{{ manItem.projectManager }}</td>
                  <td>{{ manItem.certificate }}</td>
                </tr>
              </table>

              <p style="margin: 20px 0 10px 20px">
                3、中标候选人响应招标文件要求的资格能力条件
              </p>
              <table cellspacing="0" class="bidderList">
                <tr>
                  <td style="width: 10%">排名</td>
                  <td style="width: 30%">中标候选人名称</td>
                  <td style="width: 60%">资格能力条件</td>
                </tr>
                <tr v-for="(abItem, abIndex) in item.bidderList" :key="abIndex">
                  <td>{{ abItem.sort }}</td>
                  <td>
                    {{ abItem.candidateName
                    }}{{
                      abItem.unionCompanyName
                        ? "，" + abItem.unionCompanyName
                        : ""
                    }}
                  </td>
                  <td>{{ abItem.qualification }}</td>
                </tr>
              </table>
            </div>
          </div>
        </Row>
        <Row class="rowBox">
          <p class="infoTitle">一、提出异议的渠道和方式</p>
          <div class="infoText">
            {{ data.notice.objection }}
          </div>
        </Row>
        <Row class="rowBox">
          <p class="infoTitle">二、其他</p>
          <div class="infoText" v-html="data.notice.content"></div>
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
          <Form
            :label-width="140"
            style="margin-top: 20px"
            v-if="data.agentInfo.title"
          >
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
            <Col :span="4"> </Col>
          </Row>
        </Row>
        <Row style="margin-top: 150px">
          <Row
            class="fileRow"
            v-for="(item, index) in data.uploadInfoList"
            :key="index"
          >
            <Col :span="10" class="textCol">
              <p class="textHover" @click="downloadFile(item.url)">
                附件：{{ item.fileName }}
              </p>
            </Col>
            <Col :span="4">
              {{ item.fileSize }}
            </Col>
            <Col :span="10" class="textCol">
              上传时间：{{ item.updateTime }}
            </Col>
          </Row>
        </Row>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  name: "canCom",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  computed: {
    returnData() {
      return this.data.bidSectionInfoList.map((item) => {
        item.bidderList.sort((a, b) => {
          return a.sort - b.sort;
        });
        return item;
      });
    },
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
    },
  },
};
</script>

<style lang="less">
.canCom {
  .ivu-row {
    word-break: break-all;
  }
  .rowBox {
    margin-bottom: 20px;
  }
  .infoTitle {
    margin-bottom: 6px;
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
  .bottom {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 100px;
    background-color: rgba(0, 0, 0, 0.3);
    label {
      color: #fff;
    }
  }
  .ivu-form-item {
    margin-bottom: 0px;
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
  .textHover:hover {
    color: #2d8cf0;
    cursor: pointer;
  }
  .bidderList {
    width: 100%;
    border-top: 1px solid #dcdee2;
    border-left: 1px solid #dcdee2;
    border-bottom: 0px solid #dcdee2;
    border-right: 0px solid #dcdee2;
    tr {
      width: 100%;
      text-align: center;
    }
    td {
      padding: 8px 5px;
      border-right: 1px solid #e8eaec;
      border-bottom: 1px solid #e8eaec;
    }
  }
}
</style>
