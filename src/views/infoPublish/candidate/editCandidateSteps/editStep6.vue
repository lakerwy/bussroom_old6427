<template>
  <div class="candidateSteps6">
    <div class="inner-side">
      <Card
        style="
          padding-bottom: 200px;
          padding-top: 20px;
          height: 100%;
          overflow-y: auto;
        "
        class="inner-card"
      >
        <Row>
          <p class="title">
            {{ notice.title }}
          </p>
          <p class="title">（招标编号：{{ notice.noticeNumber }}）</p>
        </Row>
        <Row class="rowBox">
          <p class="infoText" style="margin-bottom: 15px">
            公示结束时间：{{
              format(new Date(notice.noticeEndTime), "yyyy年MM月dd日")
            }}
          </p>
        </Row>
        <Row class="rowBox">
          <div class="infoText">
            <div
              v-for="(item, index) in bidSectionInfoList"
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
                  <!-- <td>{{ baseIndex + 1 }}</td> -->
                  <td>{{baseItem.sort }}</td>
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
                        ? "投标报价金额:" + baseItem.bidPrice + '万元'
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
            {{ notice.objection }}
          </div>
        </Row>
        <Row class="rowBox">
          <p class="infoTitle">二、其他</p>
          <div class="infoText" v-html="notice.content"></div>
        </Row>
        <Row class="rowBox">
          <p class="infoTitle">三、联系方式</p>
          <Form :label-width="140">
            <FormItem label="招标人:">
              <span>{{ bidInfo.title }}</span>
            </FormItem>
            <FormItem label="地址:">
              <span>{{ bidInfo.address }}</span>
            </FormItem>
            <FormItem label="联系人:">
              <span>{{ bidInfo.contact }}</span>
            </FormItem>
            <FormItem label="联系人手机号:">
              <span>{{ bidInfo.contactPhone }}</span>
            </FormItem>
            <FormItem label="电子邮件:">
              <span>{{ bidInfo.email }}</span>
            </FormItem>
          </Form>
          <Form
            :label-width="140"
            style="margin-top: 20px"
            v-if="agentInfo.title"
          >
            <FormItem label="招标代理机构:">
              <span>{{ agentInfo.title }}</span>
            </FormItem>
            <FormItem label="地址:">
              <span>{{ agentInfo.address }}</span>
            </FormItem>
            <FormItem label="联系人:">
              <span>{{ agentInfo.contact }}</span>
            </FormItem>
            <FormItem label="联系人手机号:">
              <span>{{ agentInfo.contactPhone }}</span>
            </FormItem>
            <FormItem label="电子邮件:">
              <span>{{ agentInfo.email }}</span>
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
import { buildCandidate, canPreView } from "@/api/publishApi";
export default {
  name: "editStep6",
  props: {
    currentStep: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      tenderFlag: false,
      agentInfo: {},
      bidInfo: {},
      bidSectionInfoList: [],
      descContentScope: "",
      description: "",
      notice: {},
      projectName: "",
      uploadInfoList: [],
    };
  },
  activated() {
    if (this.getStore("candidateEdit")) {
      this.removeStore("candidateEdit");
      this.$emit("update:currentStep", 0);
    }
  },
  created() {
    this.view();
  },
  methods: {
    // 预览
    view() {
      canPreView(this.$route.query.id).then((res) => {
        if (res.success) {
          this.agentInfo = res.result.agentInfo;
          this.bidInfo = res.result.bidInfo;
          this.bidSectionInfoList = res.result.bidSectionInfoList.map(item => {
            item.bidderList.sort((a,b) => {
              return a.sort-b.sort
            })
            return item;
          });
          this.descContentScope = res.result.descContentScope;
          this.description = res.result.description;
          this.notice = res.result.notice;
          this.projectName = res.result.projectName;
          this.uploadInfoList = res.result.uploadInfoList;
        }
      });
    },
    pre() {
      this.$emit("update:currentStep", 4);
    },
    next() {
      // this.$store.dispatch('publish'); // 获取机构名称
      buildCandidate({
        id: this.$route.query.id,
      }).then((res) => {
        if (res.success) {
          this.$emit("update:currentStep", 6);
        }
      });
    },
  },
};
</script>

<style lang="less">
.candidateSteps6 {
  word-break: break-all;
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
  .inner-side {
    position: relative;
    height: calc(100vh - 132px);
    background-color: #e4e4e4;
    .inner-card {
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
    height: 130px;
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
