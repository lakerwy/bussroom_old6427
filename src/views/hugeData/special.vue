<template>
  <div id="special">

    <Tabs :animated="false" type="card" v-model="currentTable" class="my_tabs" @on-click="changeTable" closable
      :before-remove="removeTable">
      <TabPane label="频道列表" name="0" icon="ios-albums" :closable="false" class="tab1">
        <div class="goods_box">
          <div class="goods">
            <div class="item" v-for="(item,index) in goods" :key="index">
              <a target="_blank" :href="item.url" :alt="item.title"><img :src="item.image" alt=""></a>
              <p class="name"><span class="left">{{ item.title }}</span> <span class="right">￥{{ item.price }}</span>
              </p>
              <p class="removePrice">￥{{ (item.price*1.2).toFixed(2) }}</p>
              <p class="intro">{{  item.sellPoint }}</p>
              <div class="btn">
                <Button size="small" type="primary" ghost @click="enterChannel(item.url)">进入频道</Button>
                <Button size="small" type="primary" disabled  @click="goBuy(item,0)">立即购买</Button>
              </div>
            </div>
          </div>
        </div>
      </TabPane>
      <TabPane v-if="false" label="我的频道" name="1" icon="ios-contact" :closable="false" class="tab2">
        <div class="own-wrap" >
          <div class="menu">
            <Menu :active-name="currentMenu" theme="light" @on-select="changeMenu">
              <MenuItem name="已购买频道">已购买频道</MenuItem>
              <MenuItem name="已过期频道">已过期频道</MenuItem>
              <MenuItem name="频道订单">频道订单</MenuItem>
            </Menu>
          </div>
          <div class="content">
            <h2 class="title">{{currentMenu}}</h2>
            <div>
              <div v-show="currentMenu=='已购买频道'">
                <p class="noData" v-if="!paid_goods.length">暂无已购买频道</p>
                <div class="goods_box">
                  <div class="goods">
                    <div class="item" v-for="(item,index) in paid_goods" :key="index">
                      <a target="_blank" :href="item.url"><img :src="item.image" alt=""></a>
                      <p class="name"><span class="left">{{ item.productName }}</span></p>
                      <!-- <p class="removePrice"><span class="price">{{ item.price }}</span>￥{{ (item.price*1.2).toFixed(2) }}</p> -->
                      <p class="term">有效期：<span
                          style="color:#666">{{ item.createTime.split(" ")[0]+ "至" + item.expireDate.split(" ")[0] }}</span>
                      </p>
                      <div class="btn">
                        <Button size="small" type="primary" ghost @click="enterChannel(item.url)">进入频道</Button>
                        <Button size="small" type="primary" @click="goBuy(item,1)">提前续期</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-show="currentMenu=='已过期频道'">
                <p class="noData" v-if="!expire_goods.length">暂无已过期频道</p>
                <div class="goods_box">
                  <div class="goods">
                    <div class="item expire" v-for="(item,index) in expire_goods" :key="index" style="color:#999;">
                      <a target="_blank" :href="item.url"><img :src="item.image" alt=""></a>
                      <p class="name"><span class="left">{{ item.productName }}</span> <span class="right icon">
                          <Icon size="24" type="ios-trash" @click="removeChannel(item.id,index)" /></span></p>
                      <!-- <p class="removePrice"><span class="price">{{ item.price }}</span>￥{{ (item.price*1.2).toFixed(2) }}</p> -->
                      <p class="term">有效期：<span
                          style="color:#999">{{ item.createTime.split(" ")[0]+ "至" + item.expireDate.split(" ")[0] }}</span>
                      </p>
                      <div class="btn expire_btn" style="color:#999;">
                        <Button size="small" type="default"   @click="enterChannel(item.url)">进入频道</Button>
                        <Button size="small" class="xuqi" @click="goBuy(item,1)">我要续期</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-show="currentMenu=='频道订单'" style="overflow-x:auto;">
                <p class="noData" v-if="!orderList.length">暂无频道订单</p>
                <div id="order" v-if="orderList.length">
                  <!--  v-loading="loading" element-loading-text="加载中..." v-if="orderList.length" -->
                  <div style="min-height: 10vw;">
                    <div v-for="(item,i) in orderList" :key="i">
                      <div class="gray-sub-title cart-title">
                        <div class="first">
                          <div>
                            <span class="date">{{ formatDate(item.createTime) }}</span>
                            <!--  @click="orderDetail(item.orderId)">{{item.orderId}} -->
                            <span class="order-id"> 订单号： <a>{{item.id}}</a></a>
                            </span>
                          </div>
                          <div class="f-bc">
                            <span class="term">期限</span>
                            <span class="price">金额</span>
                            <span class="num">状态</span>
                            <span class="operation">操作</span>
                          </div>
                        </div>
                        <!-- <div class="last">
                          <span class="sub-total">实付金额</span>
                          @click="orderDetail(item.orderId)"
                          <span class="order-detail"> <a>查看详情 ><em class="icon-font"></em></a> </span>
                        </div> -->
                      </div>
                      <div class="pr">
                        <div class="cart">
                          <div class="cart-l bt">
                            <div class="car-l-l">
                              <div class="img-box"><a target="_blank" :href="item.url"><img :src="item.picPath" alt=""></a></div>
                              <div class="ellipsis"><a style="color: #626262;">{{item.title}}</a></div>
                            </div>
                            <div class="cart-l-r">
                              <div>{{ '1年' }}</div>
                              <div>¥ {{ item.payment?item.payment:"0.00" }}</div>
                              <div class="num">
                                <Badge status="processing" text="等待付款" v-if="item.status == 0" />
                                <Badge status="success" text="已完成" v-else-if="item.status == 1" />
                                <Badge status="error" text="已取消" v-else />
                              </div>
                              <div class="type">
                                <Button style="margin-left:20px; margin-bottom:3px;" type="success" size="small"
                                  @click="goBuy(item,2)" v-if="item.status == 0">立即付款</Button>
                                <Button style="margin-left:20px; margin-bottom:3px;" type="success" size="small"
                                  @click="goBuy(item,1)" v-else>再次购买</Button>
                                <Button style="margin-left:20px; margin-bottom:3px;" type="primary" size="small"
                                  v-if="item.status == 0" @click="cancelOrder(item.id,i)">取消订单</Button>
                                <Button style="margin-left:20px;" type="error" size="small"
                                  @click="removeOrder(item.id)">删除订单</Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="no-info">
                    <div style="padding: 100px 0;text-align: center" v-if="orderList.length ===0">
                      你还未创建过订单
                    </div>
                  </div> -->
                  <Page :total="orderTotal" :page-size="orderData.pageSize" :current.sync="orderData.pageNumber"
                    @on-change="getOrderList" show-elevator />
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabPane>
      
      <TabPane style="background:#eee;padding: 20px" :name="index+2+''" :label="obj.item.title" icon="ios-pricetag"
        v-for="(obj,index) in tabFlag" :key="index">
        <Card style="margin-bottom:30px;" v-show="!obj.payFlag">
          <div class="content">
            <div class="left"><img :src="obj.item.image" alt=""></div>
            <div class="right">
              <h2>{{obj.item.title}}</h2>
              <p class="sellPoint">{{ obj.item.sellPoint}}</p>
              <p class="price">￥{{ obj.item.price }}</p>
              <p>有效期：1年</p>
              <p><Button type="primary" @click="goPay(obj,index)">现在购买</Button></p>
            </div>
          </div>
        </Card>
        <Card :bordered="false" v-show="!obj.payFlag">
          <p slot="title">产品信息</p>
          <div class="productInfo" v-html="obj.info.itemDesc?obj.info.itemDesc:''"></div>
          <div class="productInfo" v-if="!obj.info.itemDesc">暂无产品信息</div>
        </Card>
        <payment :order="obj.order" v-if="obj.payFlag" @onBack="back(index)" @goMySub="goMySub(index)" @goChannel="goChannel(index)"/>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import {
    getAllProduct,
    getChannelBycondition,
    delChannel,
    getItemDesc,
    getAllOrder,
    saveOrder,
    alipay,
    wechatPay,
    delOrder,
    cancelOrder,
  } from '@/api/index.js';

  import payment from './payment'
  export default {
    components: {
      payment
    },
    name: "special",
    data() {
      return {
        tabFlag: [],
        goods: [],
        paid_goods: [],
        expire_goods: [],
        currentMenu: "已购买频道",
        currentTable: "0",
        orderList: [],
        orderData: {
          pageNumber: 1,
          pageSize: 15
        },
        orderTotal: 15,
        wechatPayFlag: false,
        createTime: "",
      };
    },
    methods: {
      removeChannel(id, i) {
        this.$Modal.confirm({
          title: "提醒",
          content: "确认删除?",
          onOk: () => {
            delChannel({
              ids: [id]
            }).then(res => {
              if (res.success) {
                this.expire_goods.splice(i, 1)
                this.$Message.success("删除成功")
              }
            })
          },
          onCancel: () => {
            11
          }
        });

      },
      changeTable(name) {
        if (name == "0") {
          this.getGoods()
        }
        if (name == "1") {
          this.currentMenu = "已购买频道";
          this.getChannelList1()
          // this.getOrderList()
        }
      },
      getAlipay(orderId) {
        alipay({
          orderId
        }).then(res => {
          const div = document.createElement('div');
          div.innerHTML = res; // html code
          document.body.appendChild(div);
          document.forms[0].setAttribute('target', '_blank')
          document.forms[0].submit();
        })
      },
      getWechatPay(orderId) {
        wechatPay({
          orderId
        }).then(res => {
          console.log(res);
          var qrcode = new QRCode(this.$refs.wechatFlag, {
            text: res.code_url,
            width: 100,
            height: 100,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
          })
          this.wechatPayFlag = true
        })
      },
      removeTable(name) {
        this.$Modal.confirm({
          title: "提醒",
          content: "是否确认关闭",
          onOk: () => {
            this.currentTable = parseInt(name) - 1 + "";
            let index = parseInt(name) - 2;
            this.tabFlag.splice(index, 1);
            console.log(this.tabFlag);
          },
          onCancel: () => {
            // this.$Message.info('Clicked cancel');
          }
        });
        return new Promise(function (resolve, reject) {

        })


        function resolve() {
          console.log(1);
        }

        function reject() {
          console.log(1);
        }

      },
      getGoods() {
        getAllProduct({
          pageNumber:1,
          pageSize:100
        }).then(res => {
          if (res.success) {
            this.goods = res.result.content;
          }
        })


      },
      getChannelList1() {
        // 未过期
        getChannelBycondition({
          status: 0,
          pageSize: 100,
          pageNumber: 1,
          order:"desc",
          sort:"createTime"
        }).then(res => {
          if (res.success) {
            this.paid_goods = res.result.content;
          }
        })
      },
      getChannelList2() {
        // 已过期
        getChannelBycondition({
          status: 1,
          pageSize: 100,
          pageNumber: 1,
          order:"desc",
          sort:"createTime"
        }).then(res => {
          if (res.success) {
            this.expire_goods = res.result.content;
          }
        })
      },
      getOrderList() {
        this.orderList = []
        getAllOrder(this.orderData).then(res => {
          if (res.success) {

            res.result.content.forEach(obj => {
              for (const key in obj) {
                if (obj[key] == null) {
                  obj[key] == ""
                }
              }
            })
            this.orderList = res.result.content;
            this.orderTotal = res.result.totalElements;

          }
        })
      },
      changeMenu(name) {
        this.currentMenu = name
        if(name === "已购买频道"){
          this.getChannelList1()
        }else if(name === "已过期频道"){
          this.getChannelList2()
        }else if(name === "频道订单"){
          this.getOrderList()
        }
      },
      enterChannel(url) {
        window.open(url)
      },
      goBuy(item, flag) {
        let order;
          if (flag === 1 || flag === 2) {
            // console.log(true);
            let newItem;
            order = item;
            this.goods.forEach(el => {
              if (el.id === item.productId) {
                newItem = el;
              }
            });
            item = newItem
          }
          console.log(item)
          getItemDesc(item.id).then(res => {
            if (res.success) {
              let info = res.result;
              let pageData = {
                item,
                info
              };
              pageData.payFlag = false;
              if(flag === 2){
                // this.goPay(pageData,this.tabFlag.length-1)
                pageData.order = order;
                pageData.payFlag = true;
                console.log(order);
              }
              this.currentTable = this.tabFlag.length + 2 + '';
              this.tabFlag.push(pageData)
              document.getElementsByClassName("single-page-con")[0].scrollTop = 0
            }
          })

      },
      goPay(obj, index) {
        let requestData = {};
        requestData.totalFee = obj.item.price;
        requestData.duration = 12;
        requestData.productId = obj.item.id;
        saveOrder(requestData).then(res => {
          for (let key in res.result) {
            if (res.result[key] == null) {
              res.result[key] = ""
            }
          }
          this.tabFlag.splice(index, 1, {
            ...obj,
            order: res.result
          })
          // this.getInterval(res.result.createTime)
          this.createTime = res.result.createTime;
          this.tabFlag[index].payFlag = true;
        })
      },
      removeOrder(id) {
        let flag =false;
        if(this.orderList.length <= 1 && this.orderData.pageNumber >= 1){
          flag = true;
        }
        this.$Modal.confirm({
          title: "提醒",
          content: "确认删除?",
          onOk: () => {
            delOrder({
              ids: [id]
            }).then(res => {
              if (res.success) {
                if (flag === true) this.orderData.pageNumber--;
                this.$Message.success("删除成功")
                this.getOrderList()
              }
            })
          }
        });

      },
      cancelOrder(id, i) {
        cancelOrder(id).then(res => {
          if (res.success) {
            this.$Message.success("取消成功")
            this.orderList[i].status = 2
          }

        })
      },
      getStatus(status) {
        if (status == 0) {
          return `<Badge status="processing" text="等待付款"/>`
        } else if (status == 1) {
          return `<Badge status="success" text="已完成"/>`
        } else if (status == 2) {
          return `<Badge status="error" text="已取消"/>`
        }
      },
      formatDate(date) {
        // return new Date(date).toLocaleString()
        return this.format(new Date(date), 'yyyy-MM-dd HH:mm:ss')
      },
      back(i) {
        this.tabFlag[i].payFlag = false;
        this.getChannelList1()
        this.getChannelList2()
        this.getOrderList()
      },
      goMySub(i){
        // this.tabFlag[i].payFlag = false;

        this.tabFlag.splice(i,1);
        this.currentMenu = "已购买频道"
        this.currentTable = "1";
        this.getChannelList1()
        this.getChannelList2()
        this.getOrderList()
      },
      goChannel(i){
        // this.tabFlag[i].payFlag = false;

        this.tabFlag.splice(i,1);
        this.currentTable = "0";
        this.getGoods()
      },
      init() {
        if (this.$route.params.flag) {
          if (this.$route.params.flag === 1) {
            // test
            this.currentTable = "0";
          } else if (this.$route.params.flag === 2) {
            // test
            this.currentTable = "1";
          } else if (this.$route.params.flag === 3) {
            // test
            this.currentTable = "1";
            this.currentMenu = "频道订单";
          }
        }
      }
    },
    activated() {
      this.init();
      this.getGoods();
      // this.getChannelList1()
      // this.getChannelList2()
      // this.getOrderList()
    },
    computed: {

    }
  };
</script>

<style lang="less">
  #special {
    padding: 20px;
    background-color: #fff;
    .expire_btn {
      .xuqi {
        background-color: #eee;
      }
      span {
        color: #999;
      }
    }
    .ivu-tabs-tab {
      max-width: 210px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      position: relative;
      padding-right: 21px;
      .ivu-icon-ios-close {
        position: absolute;
        right: 10px;
        transform: translateY(7px);
      }
    }

    .goods {

      &::after {
        content: "";
        display: block;
        clear: both;
      }

      .item {
        transition: all .5s;
        transform: translateY(0);
        position: relative;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 1px 1px 20px #999;
          border: 1px solid #dedede;

          &::before {
            display: none;
          }
        }

        &.expire::before {
          position: absolute;
          content: "";
          width: 100%;
          left: 0;
          top: 0;
          height: 100%;
          background-color: rgba(0, 0, 0, .1);
          z-index: 1;
        }

        &.expire {
          color: #666;
        }

        float: left;
        margin: 0 2px 10px;
        margin: 8px;
        width: 200px;
        text-align: center;
        padding: 15px;
        border: 1px solid #dedede;
        color: #333;

        a {
          position: relative;
          display: block;
          width: 100%;
          height: 120px;

          img {
            vertical-align: top;
            width: 100%;
            height: 120px;
          }
        }

        p {
          text-align: left;
        }

        .name {
          font-weight: bold;
          font-size: 16px;
          height: 25px;
          line-height: 25px;
          display: flex;

          .left {
            flex: 4;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          .right {
            flex: 1;
            color: #f33;
            text-align: right;

            &.icon {
              color: #333;
              cursor: pointer;
              flex: .8;
            }
          }
        }

        .removePrice {
          text-align: right;
          text-decoration: line-through;
          color: #999;
          overflow: hidden;
          // line-height: 40px;
        }

        .intro {
          color: #666;
          letter-spacing: 0;
          margin-top: 8px;
          height: 36px;
          overflow: hidden;
          display: -webkit-box;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          /*要显示的行数*/
          -webkit-box-orient: vertical;
          font-size: 12px;
        }

        .term {
          text-align-last: left;
          font-size: 12px;
          line-height: 20px;
        }

        .btn {
          display: flex;
          justify-content: space-between;
          text-align: left;
          margin-top: 10px;
          padding: 0 5px;
        }
      }
    }

    .own-wrap {
      .menu {
        width: 240px;
        float: left;
      }

      .content {
        padding-left: 250px;

        .title {
          margin-bottom: 10px;
        }
      }
    }

    .content {
      .noData {
        text-align: center;
        padding: 10px;
      }

      // height: 400px;
      // overflow: hidden;
      &::after {
        content: "";
        display: block;
        clear: both;
      }

      ;

      .left {
        width: 30%;
        float: left;

        &::after {
          content: "";
          clear: both;
        }

        img {
          width: 100%;
        }
      }

      .right {

        box-sizing: border-box;
        width: 100%;
        padding-left: 31%;

        p {
          margin: 5px 0;
        }

        .sellPoint {
          color: #999;
        }

        .price {
          font-size: 20px;
          color: #f33;
        }

      }
    }

    .productInfo {
      img {
        width: 100% !important;
      }
    }

    #order {
      min-width: 771px;

      .pr {
        position: relative;
      }

      .pa {
        position: absolute;
      }

      .gray-sub-title {
        height: 38px;
        padding: 0 24px;
        background: #EEE;
        border-top: 1px solid #DBDBDB;
        border-bottom: 1px solid #DBDBDB;
        line-height: 38px;
        font-size: 12px;
        color: #666;
        display: flex;

        span {
          display: inline-block;
          height: 100%;
        }

        .first {
          display: flex;
          justify-content: space-between;
          flex: 1;

          .f-bc {
            >span {
              width: 95px;
              text-align: center;
            }
          }
        }

        .last {
          width: 230px;
          text-align: center;
          display: flex;
          border-left: 1px solid #ccc;

          span {
            flex: 1;
          }
        }
      }

      .bt {
        border-top: 1px solid #EFEFEF;
      }

      .date {
        padding-left: 0px;
      }

      .order-id {
        margin-left: 25px;
      }

      .cart {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 24px;




        .cart-l {
          display: flex;
          align-items: center;
          flex: 1;
          padding: 15px 0;
          justify-content: space-between;
          position: relative;



          .ellipsis {
            margin-left: 20px;
            width: 220px;
          }

          .img-box {
            border: 1px solid #EBEBEB;
          }

          img {
            display: block;
            width: 80px;
            height: 80px;
          }

          .cart-l-r {
            display: flex;

            >div {
              height: 113px;
              line-height: 113px;
              text-align: center;
              width: 95px;
            }
            >div:last-of-type{
              width: 100px;
            }

            .type {
              display: flex;
              flex-direction: column;
              justify-content: center;

              button {
                padding: 0;
                margin: 5px 20px;
              }
            }
          }

          .car-l-l {
            display: flex;
            align-items: center;
          }
        }

        .cart-r {
          width: 230px;
          display: flex;

          span {
            text-align: center;
            flex: 1;
          }
        }
      }

      .prod-operation {
        height: 110px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 254px;

        div {
          width: 100%;
          text-align: center;
        }

        div:last-child {
          padding-right: 24px;
        }
      }
    }


  }
</style>