<template>
  <div class="announcementDetails1">
    <div class="card-div1" ref="cont">
      <div :id="index" class="detailCom" v-for="(item, index) in details" :key="index">
        <tenderCom
          v-if="item.type == '招标公告' || item.type == '资格预审公告'"
          :data="item.detail"
        ></tenderCom>
        <changeTenderCom
          v-if="
            item.type == '招标公告变更公告' ||
            item.type == '资格预审公告变更公告'
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
          v-if="item.type == '中标结果公告'"
          :data="item.detail"
        ></resultCom>
        <changeResultCom
          v-if="
            item.type == '中标候选人变更公示' ||
            item.type == '中标结果公告变更公告'
          "
          :data="item.detail"
        ></changeResultCom>
      </div>
    </div>
    <div class="card-div2">
      <!-- <p
        @click="anchorLink(item)"
        v-for="(item, index) in titleList"
        :key="index"
        :title="item"
        class="anchorLink"
        >{{ item }}</p
      > -->
      <Anchor show-ink container=".card-div1">
        <AnchorLink
          v-for="(item, index) in titleList"
          :key="index"
          :href="'#' + index"
          :title="item"
        />
      </Anchor>
      <div style="margin-top: 10px">
        <img
          @click="goTop"
          style="height: 35px; margin-left: 10px; cursor: pointer"
          src="../../../../assets/infoPublish/arrow.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
import tenderCom from "../../components/tenderCom";
import abandonCom from "../../components/abandonCom";
import changeTenderCom from "../../components/changeTenderCom";
import canCom from "../../components/canCom";
import resultCom from "../../components/resultCom";
import changeResultCom from "../../components/changeResultCom";
import { getDetail } from "@/api/publishApi";
export default {
  name: "tenderDetails1",
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
      titleList: [],
      details: [],
      leftDetails:{}
    };
  },
  activated() {
    this.tenderDetails(this.getStore("tenderDetailId"));
  },
  methods: {
    tenderDetails(id) {
      getDetail(id).then((res) => {
        if (res.success) {
          this.details = res.result.right;
          this.leftDetails = res.result.left;
          let data = {};
          this.titleList = [];
          res.result.right.forEach((item) => {
            if (data[item.type]) {
              data[item.type] = data[item.type] + 1;
            } else {
              data[item.type] = 1;
            }
            this.titleList.push(item.type + "" + data[item.type]);
          });
        }
      });
    },
    goTop() {
      this.$refs.cont.scrollTop = 0;
    },
    anchorLink(id) {
      document.querySelector("#" + id).scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="less" soped>
.announcementDetails1 {
  height: 100%;
  position: relative;
  .title {
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .card-div1 {
    height: calc(100vh - 132px);
    overflow-y: scroll;
    width: 80%;
  }
  .card-div2 {
    position: absolute;
    right: 10px;
    top: 30%;
    width: 15%;
  }
  .ivu-form-item {
    margin-bottom: 0px;
  }
  .fileRow {
    text-align: center;
    height: 50px;
    line-height: 50px;
    background-color: rgba(242, 242, 242, 1);
    margin-top: 10px;
  }
  .cardTitle {
    font-size: 20px;
    position: relative;
    padding-left: 10px;
    &::before {
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
  .detailCom {
    border-bottom: 2px solid #f0f0f0;
  }
  .anchorLink{
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
