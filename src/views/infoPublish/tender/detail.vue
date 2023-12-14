<template>
  <div class="announcementDetails">
    <Row :gutter="10" type="flex" justify="space-between">
      <Col span="7">
        <Card>
          <div class="card">
            <p class="title">
              {{leftDetails.title}}
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
                  <p class="info-directory">{{getClass}}</p>
                </Col>
                <Col :span="12">
                  <p class="info-title">所在行政区域</p>
                  <p class="info-directory">{{ leftDetails.area }}</p>
                </Col>
              </Row>
            </Row>
          </div>
          <div style="text-align: center; margin: 15px 0px">
            <Row>
              <Col :span="12">
                <Button
                  type="text"
                  icon="md-swap"
                  @click="routerEnv('correctTenderStep')"
                  >发变更</Button
                >
              </Col>
              <Col :span="12">
                <Button
                  type="text"
                  icon="md-hammer"
                  @click="routerEnv('addResult')"
                  >发中标结果</Button
                >
              </Col>
            </Row>
            <Row>
              <Col :span="12">
                <Button
                  type="text"
                  icon="md-grid"
                  @click="routerEnv('addCandidate')"
                  >发中标候选人</Button
                >
              </Col>
              <Col :span="12">
                <Button
                  type="text"
                  icon="md-stats"
                  @click="routerEnv('abandonTender')"
                  >发流标/废标</Button
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
          <Anchor show-ink container=".card-div1">
            <AnchorLink
              v-for="(item) in titleList"
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
  name: "detail",
  components: {
    tenderCom,
    changeTenderCom,
    abandonCom,
    canCom,
    resultCom,
    changeResultCom,
  },
  props:{
    id: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      titleList: [],
      details: [],
      leftDetails: {},
      industryClass: this.SEL.industryClass,
      liList: []
    };
  },
  activated() {
    console.log('this.id',this.id)
    this.tenderDetails(this.id);
  },
  created(){
    console.log('this.id',this.id)
  },
  computed:{
    getClass(){
      if(!this.leftDetails.categoryId) return
      let arr = this.leftDetails.categoryId.split(',');
      let strArr = [];
      arr.forEach(item => {
        strArr.push(this.industryClass.find(cl => cl.value == item).label);
      })
      return strArr.join(',');
    } 
  },
  methods: {
    tenderDetails(id) {
      getDetail(id).then((res) => {
        if (res.success) {
          this.details = res.result.right;
          this.leftDetails = res.result.left;
          let data = {};
          this.titleList = [];
          res.result.right.forEach((item,i) => {
            if (data[item.type]) {
              data[item.type] = data[item.type] + 1;
            } else {
              data[item.type] = 1;
            }
           this.titleList.push({
                title: item.type + "" + data[item.type],
                id: item.detail.notice.id
              }
            );
        
          });
            console.log(this.titleList)
         
        }
      });
    },
    goTop() {
      this.$refs.cont.scrollTop = 0;
    },
  },
};
</script>

<style lang="less" scoped>
.announcementDetails {
  .card {
    border-bottom: #f5f7f9 1px solid;
    padding-bottom: 20px;
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
}
</style>
