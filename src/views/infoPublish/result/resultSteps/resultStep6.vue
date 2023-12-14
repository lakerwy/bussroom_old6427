<template>
  <div class="resultStep6">
    <div class="container">
      <Card style="padding-top: 20px" class="inner-card">
        <Row>
          <p class="title">
            {{ notice.title }}
          </p>
          <p class="title">（招标编号：{{ notice.noticeNumber }}）</p>
        </Row>
        <Row>
          <div class="infoText">
            <div
              v-for="(item, index) in bidSectionInfoList"
              :key="index"
              style="margin-bottom: 20px"
            >
              <p>标段（包）编号：{{ item.title }}</p>
              <p>标段（包）名称：{{ item.sectionNumber }}</p>
              <p>
                中标人：{{ item.bidderList[0].candidateName
                }}{{
                  item.bidderList[0].unionCompanyName
                    ? "，" + item.bidderList[0].unionCompanyName
                    : ""
                }}
              </p>
              <p>中标价：{{ item.bidderList[0].bidPrice }}万元</p>
              <p>中标费率：{{ item.bidderList[0].rate }}</p>
              <p>其他类型中标价：{{ item.bidderList[0].otherPrice }}</p>
            </div>
          </div>
        </Row>
        <Row class="rowBox">
          <p class="infoTitle">一、其他</p>
          <div class="infoText" v-html="notice.content"></div>
        </Row>
        <Row>
          <p class="infoTitle">二、监督部门</p>
          <div class="infoText">{{ jdbmName }}</div>
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
            <Col :span="6"> </Col>
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
import { buildCandidate, resultPreView } from "@/api/publishApi";
export default {
  name: "resultStep6",
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
      jdbmName: "",
      uploadInfoList: [],
    };
  },
  activated() {
    if (this.getStore("resultAdd")) {
      this.removeStore("resultAdd");
      this.$emit("update:currentStep", 0);
    }
  },
  created() {
    this.view();
  },
  methods: {
    // 预览
    view() {
      resultPreView(this.getStore("resultId")).then((res) => {
        if (res.success) {
          this.agentInfo = res.result.agentInfo;
          this.bidInfo = res.result.bidInfo;
          this.bidSectionInfoList = res.result.bidSectionInfoList;
          this.descContentScope = res.result.descContentScope;
          this.description = res.result.description;
          this.notice = res.result.notice;
          this.jdbmName = res.result.jdbmName;
          this.uploadInfoList = res.result.uploadInfoList;
        }
      });
    },
    pre() {
      this.$emit("update:currentStep", 4);
    },
    next() {
      buildCandidate({
        id: this.getStore("resultId"),
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
.resultStep6 {
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
      label {
        color: #fff;
      }
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
