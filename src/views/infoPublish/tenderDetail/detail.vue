<template>
  <div class="noticeDetail" v-if="tenderDetailsTabs.length != 0">
    <Tabs
      type="card"
      closable
      @on-tab-remove="handleTabRemove"
      :animated="false"
      @on-click="changeTable"
      v-model="currentName"
      class="tabClazz"
    >
      <TabPane
        :label="item.title"
        v-for="item in tenderDetailsTabs"
        :key="item.id"
        :name="item.id"
        style="width: 30%"
      >
      </TabPane>
    </Tabs>
    <Row :gutter="10" type="flex" justify="space-between">
      <Col span="7">
        <Card>
          <div class="card">
            <p class="title">
              {{ leftDetails.title }}
            </p>
            <Row
              type="flex"
              justify="space-between"
              style="text-align: center; margin-top: 10px"
            >
              {{ leftDetails.statusTime }}
            </Row>
            <Row style="text-align: center; margin-top: 15px">
              <Row>
                <Col :span="12">
                  <p class="info-title">所属行业分类</p>
                  <p class="info-directory">{{ getClass }}</p>
                </Col>
                <Col :span="12">
                  <p class="info-title">所在行政区域</p>
                  <p class="info-directory">{{ leftDetails.area }}</p>
                </Col>
              </Row>
            </Row>
          </div>
          <div style="text-align: center; margin: 15px 0px" v-if="false">
            <Row>
              <Col :span="12">
                <Button
                  type="text"
                  icon="md-swap"
                  @click="correctTender"
                  :disabled='status != 4'
                  >发变更</Button
                >
              </Col>
              <Col :span="12">
                <Button
                  type="text"
                  icon="md-hammer"
                  @click="abandonTender"
                  :disabled='status != 4'
                  >发废标</Button
                >
              </Col>
            </Row>
            <Row>
              <Col :span="12">
                <Button
                  type="text"
                  icon="md-grid"
                  @click="addCandidate"
                  :disabled='status != 4'
                  >发中标候选人公示</Button
                >
              </Col>
              <Col :span="12">
                <Button
                  type="text"
                  icon="md-stats"
                  @click="addResult"
                  :disabled='status != 4'
                  >发中标结果公告</Button
                >
              </Col>
            </Row>
          </div>
        </Card>
      </Col>
      <Col span="17">
        <div class="card-div1" ref="cont">
          <div
            :id="titleList[index].id"
            class="detailCom"
            v-for="(item, index) in details"
            :key="index"
          >
            <tenderCom
              v-if="item.type == '招标公告' || item.type == '资格预审公告'"
              :data="item.detail"
              :tenderTitle="item.type=='招标公告' ? '投标文件的递交' : '资格预审申请文件的递交'"
            ></tenderCom>
            <changeTenderCom
              v-if="
                item.type == '招标公告变更公告' ||
                item.type == '资格预审变更公告'
              "
              :data="item.detail"
            ></changeTenderCom>
            <abandonCom
              v-if="item.type.includes('废标')"
              :data="item.detail"
            ></abandonCom>
            <canCom
              v-if="item.type == '中标候选人公示'"
              :data="item.detail"
            ></canCom>
            <resultCom
              v-if="item.type == '中标结果公示'"
              :data="item.detail"
            ></resultCom>
            <changeResultCom
              v-if="
                item.type == '中标候选人变更公示' ||
                item.type == '中标结果变更公示'
              "
              :data="item.detail"
            ></changeResultCom>
          </div>
        </div>
        <div class="card-div2">
          <Anchor show-ink container=".card-div1" @on-select='linkChange'>
            <AnchorLink
              v-for="item in titleList"
              :key="item.id"
              :href="'#' + item.id"
              :title="item.title"
            />
          </Anchor>
          <div style="margin-top: 10px">
            <img
              @click="goTop"
              style="height: 35px; margin-left: 10px; cursor: pointer"
              src="../../../assets/infoPublish/arrow.png"
            />
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import tenderCom from "../components/tenderCom";
import abandonCom from "../components/abandonCom";
import changeTenderCom from "../components/changeTenderCom";
import canCom from "../components/canCom";
import resultCom from "../components/resultCom";
import changeResultCom from "../components/changeResultCom";
import { getDetail } from "@/api/publishApi";
export default {
  name: "noticeDetail",
  components: {
    tenderCom,
    changeTenderCom,
    abandonCom,
    canCom,
    resultCom,
    changeResultCom,
  },
  data() {
    return {
      routerFlag: false,
      titleList: [],
      details: [],
      leftDetails: {},
      industryClass: this.SEL.industryClass,
      liList: [],
      tenderDetailsTabs: [],
      currentName: "",
      type: 0,
      status: 0
    };
  },
  activated() {
    if (this.getStore("currentDetailId")) {
      this.currentName = this.getStore("currentDetailId");
      this.tenderDetails(this.getStore("currentDetailId"));
    }
    this.tenderDetailsTabs =
      JSON.parse(this.getStore("tenderDetailsTabs")) || [];

    this.type = this.tenderDetailsTabs.find(item => this.currentName == item.id).type;
    this.status = this.tenderDetailsTabs.find(item => this.currentName == item.id).status;
    console.log(this.tenderDetailsTabs)
  },
  computed: {
    getClass() {
      if (!this.leftDetails.categoryId) return;
      let arr = this.leftDetails.categoryId.split(",");
      let strArr = [];
      arr.forEach((item) => {
        strArr.push(this.industryClass.find((cl) => cl.value == item).label);
      });
      return strArr.join(",");
    },
  },

  methods: {
    handleTabRemove(id) {
      let data = JSON.parse(this.getStore("tenderDetailsTabs"));
      let index = data.findIndex((item) => item.id == id);
      data.splice(index, 1);
      this.setStore("tenderDetailsTabs", JSON.stringify(data));
      this.tenderDetailsTabs.splice(index , 1);
      var currentDetailId = location.href.split("#")[2];
      if(currentDetailId !== id){
        // 删除不是当前打开详情，不改变
        return;
      }else if (data.length == 0) {
        // 删除完无打开详情
        this.tenderDetailsTabs = [];
        this.removeStore("currentDetailId");
      } else if (index == 0) {
        // 删除的是第一个打开页面，则继续打开第一个页面
        this.changeTable(data[index].id);
        let hrefIndex = location.href.lastIndexOf("#");
        location.href = location.href.slice(0, hrefIndex) + "#" + data[index].hash;
        this.tenderDetails(data[index].id);
      } else {
        // 删除的不是第一个打开页面，则打开上一个页面
        this.changeTable(data[index - 1].id);
        let hrefIndex = location.href.lastIndexOf("#");
        location.href = location.href.slice(0, hrefIndex) + "#" + data[index - 1].hash;
        this.tenderDetails(data[index - 1].id);
      }
    },
    changeTable(name) {
      this.currentName = name 
      let data = JSON.parse(this.getStore("tenderDetailsTabs"));
      let tabIndex = data.findIndex((item) => item.id == name);
      this.setStore("currentDetailId", this.currentName);

      if(location.href.match(/#/g).length > 1) {
        let index = location.href.lastIndexOf("#");
        location.href = location.href.slice(0, index) + "#" + data[tabIndex].hash;
      }else {
        location.href = location.href + '#' + data[tabIndex].hash;
      }
      this.tenderDetails(name);
    },
    tenderDetails(id) {
      getDetail(id).then((res) => {
        if (res.success) {
          this.details = res.result.right;
          this.leftDetails = res.result.left;
          let data = {};
          this.titleList = [];
          let arr = [...res.result.right].reverse();
          let titleList = [];
          arr.forEach((item, i) => {
            let title = arr[i].type;
            if (data[item.type]) {
              data[item.type] = data[item.type] + 1;
            } else {
              data[item.type] = 1;
            }
            titleList.push(title + "" + data[title]);
          });
          titleList.reverse();
          this.details.forEach((item, i) => {
            this.titleList.push({
              title: titleList[i],
              id: item.detail.notice.id,
            });
          });
        }
      });
    },
    goTop() {
      this.$refs.cont.scrollTop = 0;
    },
    // 切换锚链接
    linkChange(newHref) {
      let data = JSON.parse(this.getStore("tenderDetailsTabs"));
      let index = data.findIndex((item) => item.id == this.currentName);
      let item = data.find(item => item.id == this.currentName);
      item.hash = newHref.replace('#','');
      data.splice(index,1,item);
      this.setStore("tenderDetailsTabs", JSON.stringify(data));
    },
    // 发变更
    correctTender() {
      if (
        this.$store.state.app.pageOpenedList.some(
          (item) => item.name === "correctTenderStep"
        )
      ) {
        this.$Modal.confirm({
          title: "提示",
          content: "当前已有废标公告正在被发布，确认要发布新的废标公告？",
          onOk: () => {
            this.removeStore("changeTenderId");
            this.setStore("tenderChange", true);
            this.$router.push({
              name: "correctTenderStep",
              query: {
                id: this.currentName,
              },
            });
          },
        });
      } else {
        this.removeStore("changeTenderId");
        this.setStore("tenderChange", true);
        this.$router.push({
          name: "correctTenderStep",
          query: {
            id: this.currentName,
          },
        });
      }
    },
    // 发废标
    abandonTender() {
      if (
        this.$store.state.app.pageOpenedList.some(
          (item) => item.name === "abandonTender"
        )
      ) {
        this.$Modal.confirm({
          title: "提示",
          content: "当前已有废标公告正在被发布，确认要发布新的废标公告？",
          onOk: () => {
            this.removeStore("abandonTenderId");
            this.setStore("tenderAbandon", true);
            this.$router.push({
              name: "abandonTender",
              query: {
                id: this.currentName,
              },
            });
          },
        });
      } else {
        this.removeStore("abandonTenderId");
        this.setStore("tenderAbandon", true);
        this.$router.push({
          name: "abandonTender",
          query: {
            id: this.currentName,
          },
        });
      }
    },
    // 新建中标候选人
    addCandidate() {
      if (
        this.$store.state.app.pageOpenedList.some(
          (item) => item.name === "addCandidate"
        )
      ) {
        this.$Modal.confirm({
          title: "提示",
          content: "当前已有公示正在创建，确认重新创建新公示？",
          onOk: () => {
            this.setStore('addCanClickFlag', true);
            this.removeStore('tenderToCan')
            this.setStore('tenderToCan', this.currentName)
            this.removeStore("candidateId");
            this.setStore("candidateAdd", true);
            this.$router.push({
              name: "addCandidate",
            });
          },
        });
      } else {
        this.setStore('addCanClickFlag', true);
        this.removeStore('tenderToCan')
        this.setStore('tenderToCan', this.currentName)
        this.removeStore("candidateId");
        this.setStore("candidateAdd", true);
        this.$router.push({
          name: "addCandidate",
        });
      }
    },
    // 发中标结果
    addResult() {
      if (
        this.$store.state.app.pageOpenedList.some(
          (item) => item.name === "addResult"
        )
      ) {
        this.$Modal.confirm({
          title: "提示",
          content: "当前已有公示正在创建，确认重新创建新公示？",
          onOk: () => {
            this.setStore('addResultClickFlag', true)
            this.removeStore("tenderToResult")
            this.setStore('tenderToResult',  this.currentName)
            this.removeStore("resultId");
            this.setStore("resultAdd", true);
            this.$router.push({
              name: "addResult",
            });
          },
        });
      } else {
        this.setStore('addResultClickFlag', true)
        this.removeStore("tenderToResult")
        this.setStore('tenderToResult',  this.currentName)
        this.removeStore("resultId");
        this.setStore("resultAdd", true);
        this.$router.push({
          name: "addResult",
        });
      }
    },
  },
};
</script>

<style lang="less">
.noticeDetail {
  .card {
    border-bottom: #f5f7f9 1px solid;
    padding-bottom: 20px;
    word-break: break-all;
    .title {
      font-size: 16px;
      font-weight: bold;
    }
    .info-title {
      font-weight: bold;
    }
    .info-directory {
      color: #1d9ed5;
      font-size: 13px;
    }
  }
  .associated {
    border-top: #f5f7f9 1px solid;
    margin-bottom: 15px;
    .aboutText {
      cursor: pointer;
      text-indent: 10px;
      &:hover {
        color: #2d8cf0;
      }
    }
    h1 {
      font-size: 14px;
      position: relative;
      padding-left: 5px;
      margin: 15px 0 5px 0;
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
  .card-div1 {
    height: calc(100vh - 180px);
    overflow-y: scroll;
    width: 80%;
  }
  .card-div2 {
    position: absolute;
    right: 10px;
    top: 30%;
    width: 15%;
  }
  .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
    width: 25vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab .ivu-tabs-close {
    position: absolute;
    right: 10px;
    top: 5px;
  }
}
</style>
