<template>
  <div id="platform">
    <!-- 基本信息 -->
    <div class="base">
      <h2><i></i>供应商工作台</h2>
      <div class="binfo">
        <div class="cl">
          <img
          :src="infoData.info.logoUrlStr || defaultLogo"
          alt=""
          class="bpic"/>
          <div class="bjoin">
          <div class="bcompany cl">
            <h3 class="sl">
              <span>{{ infoData.info.companyName }}</span>
              <img v-show="vipType=='入门会员'" src="../../../assets/supplier/notVip.png" alt="">
              <img v-show="vipType!='入门会员'" src="../../../assets/supplier/vip.png" alt="">
            </h3>
            <!-- <div class="btrade">企</div> -->
          </div>
          <p>入驻时间：{{ filterCreateTime(infoData.info.createTime) }}</p>
          </div>
          <div class="bmsg">
          <router-link to="/supplier/recclue">
            <h3>
              消息提醒<span>{{ infoData.lo4 }}</span>
            </h3>
            <p>线索消息更新</p>
          </router-link>
          </div>
        </div> 
      </div>
      <ul>
        <li><a href="https://www.chinabidding.cn/public/bidagency/index.html#/largeScreen">数据大屏</a></li>
        <li><a href="https://www.ybcredit.com.cn/">征信证书</a></li>
        <li><a href="https://www.chinabidding.cn/public/yuanbo/html/index.html">标书代写</a></li>
      </ul>
      <div class="btnGroup">
          <span>
            发布采购，
            <a href="https://www.chinabidding.cn/public/bidagency/index.html#/agentSettled?from=supplierWorkbench" target="_blank">一键成为采购人</a>
          </span>
          <router-link to="/supplier/infoManagement">
            <button type="button">信息管理</button>
          </router-link>
          <router-link to="/supplier/reissueTheBid">
          <button type="button">补发中标</button>

          </router-link>
        </div>
    </div>
    

    <!-- 跟进状态 -->
    <div class="status">
      <ul>
        <li>
          <div class="sicon">
            <img src="../../../assets/supplier/icon-jrtjxs.png" alt="" />
          </div>
          <div class="stext">
            <h4>{{ infoData.lo1 }}</h4>
            <p>今日推荐线索</p>
          </div>
        </li>
        <li>
          <div class="sicon">
            <img src="../../../assets/supplier/icon-dgjxs.png" alt="" />
          </div>
          <div class="stext">
            <h4>{{ infoData.lo2 }}</h4>
            <p>待跟进线索</p>
          </div>
        </li>
        <li>
          <div class="sicon">
            <img src="../../../assets/supplier/icon-yrlxs.png" alt="" />
          </div>
          <div class="stext">
            <h4>{{ infoData.lo3 }}</h4>
            <p>已认领线索</p>
          </div>
        </li>
        <li>
          <div class="sicon">
            <img src="../../../assets/supplier/icon-yrlxs.png" alt="" />
          </div>
          <div class="stext">
            <h4>{{ infoData.lo3 }}</h4>
            <p>已报名线索</p>
          </div>
        </li>
      </ul>
    </div>

    <!-- 采购线索 -->
    <div class="clue">
      <h2>
        <span>采购线索推荐</span>
        <span class="purchase">
          <a
          target="_blank"
          href="https://www.chinabidding.cn/public/bidagency/index.html#/enterpriseProcurement"
          >政企采购</a>
          <span> / </span>
          <a
          target="_blank"
          href="https://www.chinabidding.cn/public/bidagency/index.html#/supplierExclusive"
          >供应商专享</a>
        </span>
      </h2>
      <Carousel
        v-show="clueData.length >= 12"
        autoplay
        v-model="carIndex"
        :loop="true"
        :autoplay-speed="3000"
      >
        <Carousel-item
          v-for="(caritem, i) in Math.ceil(clueData.length / 4)"
          :key="i"
        >
          <div class="demo-carousel">
            <ul>
              <li
                v-for="(item, i) in clueData.slice(
                  (caritem - 1) * 4,
                  caritem * 4
                )"
                :key="i"
                @click="linkRecclue"
              >
                <h4 class="title">{{ item.title }}</h4>
                <div class="keys cl">
                  <div class="ktext" v-for="kitem in item.keys" :key="kitem">
                    {{ kitem }}
                  </div>
                </div>
                <p class="block">
                  <span class="blockItem">{{ filterArea(item.area) }}</span>
                  <span class="blockItem">{{
                    filterPurchaseType(item.purchaseType)
                  }}</span>
                </p>
                <p><span>数量：</span>{{ item.amount }}{{ item.unit }}</p>
                <p>
                  <span>发布时间：</span>{{ item.publishTime.split(' ')[0] }}
                </p>
                <p>
                  <span>采购期限：</span
                  >{{
                    filterPurchasePeriod(
                      item.purchasePeriod,
                      item.purchaseDeadline
                    )
                  }}
                </p>
                <p class="content"><span>采购说明：</span>{{ item.content }}</p>
                <!-- <p><span>距离截止剩余时间：</span>{{ item.deadline }}</p> -->
              </li>
            </ul>
          </div>
        </Carousel-item>
      </Carousel>
      <div v-show="clueData.length < 12" class="demo-carousel">
        <ul>
          <li
            v-for="(item, i) in clueData.slice(0, 4)"
            :key="i"
            @click="linkRecclue"
          >
            <h4 class="title">{{ item.title }}</h4>
            <div class="keys cl">
              <div class="ktext" v-for="kitem in item.keys" :key="kitem">
                {{ kitem }}
              </div>
            </div>
            <p class="block">
              <span class="blockItem">{{ filterArea(item.area) }}</span>
              <span class="blockItem">{{
                filterPurchaseType(item.purchaseType)
              }}</span>
            </p>
            <p><span>数量：</span>{{ item.amount }}{{ item.unit }}</p>
            <p><span>发布时间：</span>{{ item.publishTime.split(' ')[0] }}</p>
            <p>
              <span>采购期限：</span
              >{{
                filterPurchasePeriod(item.purchasePeriod, item.purchaseDeadline)
              }}
            </p>
            <p class="content"><span>采购说明：</span>{{ item.content }}</p>
            <!-- <p><span>距离截止剩余时间：</span>{{ item.deadline }}</p> -->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getSupplierInfo, getCgxxRmd } from '@/api/index'
import areaData from '../static/area.json'
import industryData from '../static/industry.json'
export default {
  data() {
    return {
      vipType:'',
      defaultLogo: require('../../../assets/supplier/logo.jpg'),
      infoData: {
        info: {
          id: '',
          logoUrlStr: null,
          createTime: '',
          companyName: '',
        },
        lo1: 0,
        lo2: 0,
        lo3: 0,
        lo4: 0,
      },
      carIndex: 0,
      clueData: [
        {
          amount: null,
          area: 120000,
          biddingType: null,
          content: '2222222测试',
          id: '1515037963988992',
          industry: '18,3,4',
          infoType: 405,
          isClaim: 0,
          publishTime: '2022-07-25 10:51:11',
          purchasePeriod: 1,
          purchaseType: 2,
          sourceName: null,
          title: '矿石',
          unit: null,
        },
      ],
    }
  },
  methods: {
    // 获取公司信息
    async getCompanyInfo() {
      const res = await getSupplierInfo()
      if (res.code == 200) {
        this.infoData = JSON.parse(JSON.stringify(res.result))
      } else {
        this.$Message.warning(res.message)
      }
    },

    //获取采购推荐
    async getCgxxRmd() {
      const res = await getCgxxRmd()
      if (res.code == 200) {
        this.clueData = JSON.parse(JSON.stringify(res.result.content))
      } else {
        this.$Message.warning(res.message)
      }
    },

    // 处理时间
    filterCreateTime(val) {
      let timestamp = new Date().getTime() - new Date(val).getTime()
      let day = timestamp / (24 * 60 * 60 * 1000)
      let year = day / 365
      if (year >= 1) {
        if (day % 365) {
          return Math.floor(year) + '年' + (Math.floor(day) % 365) + '天'
        } else {
          return year + '年'
        }
      } else {
        return Math.floor(day) + '天'
      }
    },

    // 过滤城市
    filterArea(val) {
      let area = ''
      areaData.forEach((item) => {
        if (val == item.fid) {
          area = item.fname.replace(
            /省|市|自治区|特别行政区|壮族|回族|维吾尔/g,
            ''
          )
        }
      })
      return area
    },
    // 过滤采购类型
    filterPurchaseType(val) {
      if (val == 1) {
        return '企业采购'
      } else if (val == 2) {
        return '政府采购'
      } else {
        return '其他'
      }
    },

    filterPurchasePeriod(type, date) {
      if (type == 1) {
        return '长期采购'
      } else {
        return date
      }
    },

    // 跳转线索推荐
    linkRecclue() {
      this.$router.push('/supplier/recclue')
    },

    //过滤采购期限
    // filterProcurement(data) {
    //   console.log(data, 'data');
    // }
  },
  mounted() {
    this.vipType = JSON.parse(localStorage.getItem('userInfo')).memberType
    this.getCompanyInfo()
    this.getCgxxRmd()
    // this.filterCreateTime("2022-08-17 10:12:49")
  },
}
</script>

<style lang="less" scoped>
#platform {
  min-width: 960px;
  min-height: 520px;
  color: #333;
  .sl {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .cl:after {
    content: '';
    display: block;
    clear: both;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
  .cl {
    zoom: 1;
  }

  .base {
    width: 100%;
    // height: 152px;
    background-color: #fff;
    margin-bottom: 20px;
    padding-bottom: 45px;
    position: relative;
    h2 {
      font-size: 20px;
      line-height: 60px;
      padding-left: 33px;
      padding-right: 20px;
      position: relative;
      i {
        position: absolute;
        left: 20px;
        top: 20px;
        width: 3px;
        height: 20px;
        background-color: #2d6eff;
        border-radius: 2px;
      }
    }
    .binfo {
      padding: 0 20px;
      display: flex;
      .bpic {
        float: left;
        width: 46px;
        height: 46px;
        border-radius: 50%;
      }
      .bjoin {
        float: left;
        padding-left: 30px;
        padding-right: 256px;
        .bcompany {
          h3 {
            float: left;
            font-size: 16px;
            line-height: 20px;
            max-width: 240px;
            span{
              vertical-align: middle;
            }
            img{
              vertical-align: middle;
              margin-left: 7px;
            }
          }
          .btrade {
            float: left;
            width: 16px;
            height: 16px;
            line-height: 14px;
            font-size: 12px;
            border: 1px solid #5489ff;
            margin-top: -10px;
            margin-left: 4px;
            color: #5489ff;
            border-radius: 16px;
          }
        }
        p {
          font-size: 14px;
          padding-top: 6px;
          line-height: 20px;
        }
      }

      
      .bmsg {
        float: left;
        padding-left: 90px;
        border-left: 2px solid #c4c8cf;
        h3 {
          font-size: 16px;
          line-height: 20px;
          position: relative;
          span {
            position: absolute;
            left: 68px;
            top: -12px;
            padding: 0 10px;
            line-height: 18px;
            font-size: 14px;
            background-color: #ffd0d0;
            color: #ff0000;
            border-radius: 18px;
            font-weight: normal;
          }
        }
        p {
          font-size: 14px;
          padding-top: 6px;
          line-height: 20px;
        }
        a {
          color: #333;
        }
      }
    }

    ul{
      list-style: none;
      display: flex;
      padding-left: 96px;
      padding-top: 6px;
      li{
        padding-left: 22px;
        margin-right: 30px;
        a{
          color: rgba(51, 51, 51, 1);
          font-size: 14px;
        }
      }
      li:first-child{
        background: url(../../../assets/supplier/icon-sjdp.png) no-repeat 0 4px;
      }
      li:nth-child(2){
        background: url(../../../assets/supplier/icon-zxzs.png) no-repeat 0 4px;
      }
      li:nth-child(3){
        background: url(../../../assets/supplier/icon-sjdp.png) no-repeat 0 4px;
      }
    }
    .btnGroup{
        position: absolute;
        right: 20px;
        top: 50%;
        a{
          color: RGBA(87, 128, 246, 1);
        }
        button{
          width: 88px;
          height: 34px;
          border-radius: 4px;
          border: 1px solid #3F6EF5;
          background-color: #fff;
          color:rgba(63, 110, 245, 1);
          cursor: pointer;
          margin-left: 26px;
        }
        button:hover{
          background-color: rgba(63, 110, 245, 1);
          color: #fff;
         
        }
      }
  }

  .status {
    width: 100%;
    height: 135px;
    background-color: #fff;
    margin-bottom: 20px;
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      padding: 30px 90px;
      li {
        list-style: none;
        min-width: 200px;
        margin-right: 70px;
        a {
          color: #333;
        }
        .sicon {
          float: left;
          width: 78px;
          height: 78px;
          background-color: #eef2ff;
          border-radius: 4px;
          text-align: center;
          margin-right: 20px;
          img {
            margin-top: 17px;
            width: 44px;
          }
        }
        .stext {
          float: left;
          h4 {
            font-size: 20px;
            line-height: 40px;
          }
          p {
            font-size: 16px;
            line-height: 30px;
          }
        }
      }
    }
  }

  .clue {
    width: 100%;
    // height: 680px;
    background-color: #fff;
    padding-bottom: 65px;
    /deep/ .ivu-carousel-dots-inside {
      bottom: -25px !important;
    }
    h2 {
      font-size: 20px;
      line-height: 60px;
      padding-left: 20px;
      padding-right: 20px;
      display: flex;
      justify-content: space-between;
      .purchase {
        font-size: 16px;
        a{
        color: rgba(102, 102, 102, 1);
          font-weight: 400;
        }
      }

    }
    ul {
      padding: 0 20px;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      //justify-content: space-between;
      justify-content: flex-start;
      li {
        list-style: none;
        width: 366px;
        height: 336px;
        padding: 10px 20px;
        background: url('../../../assets/supplier/bg-cgxstj.png') no-repeat 0 0;
        background-size: 368px 336px;
        margin: 0 10px;
        cursor: pointer;
        .title {
          font-size: 16px;
          line-height: 56px;
          overflow: hidden; //隐藏超出的内容
          text-overflow: ellipsis; //指定文字超出的部分用省略号展示
          white-space: nowrap;
        }
        .ktext {
          float: left;
          font-size: 14px;
          color: #fff;
          line-height: 28px;
          padding: 0 10px;
          background: #6394ff;
          margin-right: 20px;
          margin-bottom: 10px;
        }
        .content {
          padding: 0;
          line-height: 41px;
          display: -webkit-box;

          -webkit-box-orient: vertical;

          -webkit-line-clamp: 2;

          overflow: hidden;
        }
        .block {
          line-height: 27px;
          padding-top: 0;
          .blockItem {
            color: #fff;
            display: inline-block;
            background-color: #6394ff;
            padding: 0px 10px;
            font-size: 14px;
            border-radius: 2px;
          }

          .blockItem {
            margin-right: 22px;
          }
        }
        p {
          font-size: 14px;
          padding: 10px 0;
          span {
            color: #666;
          }
        }
      }
    }
  }
}
</style>
