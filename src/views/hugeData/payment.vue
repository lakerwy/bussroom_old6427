<template>
  <Card :bordered="false">
    <p slot="title">
      <Icon type="ios-card" />请选择支付方式
    </p>
    <a slot="extra" @click="back">
      <Icon type="ios-arrow-back" />返回
    </a>
    <div class="footer">
      <p class="big">
        订单：
        <a>{{ order.id }}</a>
      </p>
      <p class="small">
        <img :src="order.picPath" alt />
      </p>
      <p class="title">{{ order.title }}</p>
      <p class="left">{{ order.sellPoint }}</p>
      <p class="small">有效期：{{ order.duration/12 }}年</p>
      <p class="small">￥{{ order.totalFee }}</p>
    </div>
    <div class="order-info">
      <div class="box-inner order-info">
        <p class="payment-detail">订单提交成功，请尽快付款</p>
        <p class="payment-detail">
          订单号：
          <a>{{order.id}}</a>
        </p>
        <p class="payment-detail">
          请在
          <a style="color:#f44;">{{ interval }}</a>内完成支付，否则订单会被自动取消。
        </p>
      </div>
      <div class="pay-type">
        <div class="p-title">支付方式</div>
        <div class="pay-item">
          <div id="ali" :class="payType == 0?'active':''" @click="getAlipay(order.id)">
            <img alt src="@/assets/alipay.png" />
          </div>
          <div id="wechat" :class="payType == 1?'active':''" @click="getWechatPay(order.id)">
            <img alt src="@/assets/wechatpay.png" />
          </div>
        </div>
      </div>
      <div v-if="payType === 0">
        <p class="payment-detail" style="text-align:center;">已跳转到支付宝支付页面</p>
      </div>
    </div>
    <div v-if="payType === 1">
      <div class="box-inner order-info">
        <img class="wechat" style="margin:0 auto;" src="@/assets/weixinpay.png" alt="扫一扫标识" />
        <p class="payment-detail">扫一扫付款￥{{ order.totalFee }}（元）</p>
        <p class="payment-detail">
          交易将在
          <span style="color:#f44;">{{ wechatInterval }}</span> 后关闭，请及时付款！
        </p>
        <p class="payment-detail" style="margin-bottom:10px" v-if="custom">
          支付时请在备注中输入您的订单标识号：
          <span class="payNum">{{payNum}}</span>
        </p>
        <p class="payment-money">{{orderTotal}}</p>
        <div class="img-box">
          <!-- <img  ref="wechatFlag" alt="加载失败"/> -->
          <div class="pic" ref="wechatFlag" width="168px" height="168px"></div>
          <div class="timeout" v-if="timeout">二维码已过期</div>
        </div>
      </div>
      <img class="explain" src="@/assets/wechat-explain.png" style alt="扫一扫标识" />
      <!-- <div class="count">{{timecount}}</div> -->
    </div>


  </Card>
</template>

<script>
  import {
    alipay,
    wechatPay,
    getOrderById
  } from "@/api/index.js";
  import QRCode from "qrcodejs2";
  export default {
    name: "payment",
    props: ["order"],
    data() {
      return {
        wechatPayFlag: false,
        interval: "23小时59分钟59秒",
        payType: -1,
        wechatInterval: "1小时59分钟59秒",
        wechatIntervalId: "",
        statusInterval: "",
        timeout: false
      };
    },
    methods: {
      getAlipay(orderId) {
        this.payType = 0;
        alipay({
          orderId
        }).then(res => {
          const div = document.createElement("div");
          div.innerHTML = res; // html code
          document.body.appendChild(div);
          div.getElementsByTagName("form")[0].setAttribute("target", "_blank");
          div.getElementsByTagName("form")[0].submit();
          // div.forms[0].setAttribute("target", "_blank");
          // div.forms[0].submit();
        });
      },
      getWechatPay(orderId) {
        this.payType = 1;
        wechatPay({
          orderId
        }).then(res => {
          console.log(this.$refs.wechatFlag);
          this.$refs.wechatFlag.innerHTML = ""
          var qrcode = new QRCode(this.$refs.wechatFlag, {
            text: res.code_url,
            width: 168,
            height: 168,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
          });
          let date = new Date().getTime();
          this.getInterval(date, 2, 1);
          this.wechatPayFlag = true;
        });
      },
      getInterval(date, hour, flag) {
        let start = new Date(date);
        let end = start.getTime() + hour * 60 * 60 * 1000 - 1;
        if (flag === 1) {
          this.wechatInterval = 1 + "小时" + 59 + "分钟" + 59 + "秒";
          this.timeout = false;
          clearInterval(this.wechatIntervalId);
          this.wechatIntervalId = setInterval(() => {
            let now = new Date().getTime();
            let interval = (end - now) / 1000;
            let h = parseInt((interval / 60 / 60) % 24);
            let m = parseInt((interval / 60) % 60);
            let s = parseInt(interval % 60);
            this.wechatInterval = h + "小时" + m + "分钟" + s + "秒";
            if (interval < 0) {
              clearInterval(this.wechatIntervalId);
              this.timeout = true;
              this.wechatInterval = "0小时0分钟0秒";
            }
          }, 1000);
        } else {
          let intervalId = setInterval(() => {
            let now = new Date().getTime();
            let interval = (end - now) / 1000;
            if (interval < 0) {
              clearInterval(intervalId);
            }
            let h = parseInt((interval / 60 / 60) % 24);
            let m = parseInt((interval / 60) % 60);
            let s = parseInt(interval % 60);
            this.interval = h + "小时" + m + "分钟" + s + "秒";
          }, 1000);
        }
      },
      back(flag) {
        if (flag === 1) {
          this.$emit("onBack");
        } else if (flag === 2) {
          this.$emit("goMySub");
        } else if (flag === 3) {
          this.$emit("goChannel");
        } else {
          this.$Modal.confirm({
            title: "提醒",
            content: "确认关闭支付页面?",
            onOk: () => {
              clearInterval(this.statusInterval);
              this.$emit("onBack");
            }
          })
        }

      },
      init() {
        this.getInterval(this.order.createTime, 24);
        this.statusInterval = setInterval(() => {
          this.getStatus();
        }, 1000);
      },
      getStatus() {
        getOrderById(this.order.id).then(res => {
          if(res.code === 404){
            clearInterval(this.statusInterval)
          }
          if (res.result.status === 1) {
            clearInterval(this.wechatInterval)
            clearInterval(this.wechatIntervalId)
            clearInterval(this.statusInterval)
            this.$Modal.confirm({
              title: "支付成功",
              content: "恭喜你，付款成功。",
              okText: '查看已购买频道',
              cancelText: '返回专题频道',
              onOk: () => {
                this.back(2);
              },
              onCancel: () => {
                this.back(3);
              }
            });
          }
        });
      }
    },
    mounted() {
      this.init();
    },
    destroyed() {
      clearInterval(this.wechatInterval)
      clearInterval(this.wechatIntervalId)
      clearInterval(this.statusInterval)

    }
  };
</script>

<style lang="less" scoped>
  .w {
    padding-top: 39px;
  }

  .order-info {
    padding: 0;
    color: #333;
    background: #fff !important;

    h3 {
      padding-bottom: 14px;
      line-height: 36px;
      text-align: center;
      font-size: 36px;
      color: #212121;
    }

    .payment-detail {
      text-align: center;
      line-height: 24px;
      font-size: 14px;
      color: #999;
    }
  }

  .box-inner {
    line-height: 60px;
    background: #f9f9f9;
    // border-top: 1px solid #e5e5e5;
    box-sizing: border-box;

    >div {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      padding: 0 20px;
    }

    em {
      margin-left: 5px;
      font-size: 24px;
      color: #d44d44;
      font-weight: 700;
      margin-right: 20px;

      span {
        margin-right: 4px;
        font-size: 16px;
      }
    }
  }

  .box-btn {
    line-height: 60px;
    background: #f9f9f9;
    border-top: 1px solid #e5e5e5;
    box-sizing: border-box;

    >div {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 20px;
    }

    em {
      margin-left: 5px;
      font-size: 24px;
      color: #d44d44;
      font-weight: 700;
      margin-right: 20px;

      span {
        margin-right: 4px;
        font-size: 16px;
      }
    }
  }

  .payment-money {
    text-align: center;
    font-size: 30px;
    color: #d44d44;
    font-weight: 700;
  }

  .img-box {
    position: relative;
    width: 180px;
    height: auto;
    min-height: 168px;
    margin: 0 auto;
    padding: 6px;
    border: 1px solid #d3d3d3;
    box-shadow: 1px 1px 1px #ccc;
    display: inline-block;
  }


  .explain {
    margin: 0 auto;
    display: flex;
    width: 180px;
    margin-top: 5px;
    margin-bottom: 70px;
  }

  .pic {
    margin-top: 3px;
  }

  .wechat {
    margin: 0 auto;
    display: flex;
    margin-top: -40px;
    width: 220px;
  }

  .count {
    display: flex;
    position: absolute;
    text-align: center;
    width: 230px;
    flex-direction: column;
    align-items: center;
    margin-left: calc(50% - 115px);
    margin-top: 0px;
    color: #222;
    margin-top: -45px;
  }

  .timeout {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.95);
    color: #333;
    height: 178px;
    line-height: 178px;
    text-align: center;
    z-index: 1;

    &::before {
      content: "";
      width: 20px;
      height: 20px;
      background-image: url("../../assets/mark.png");
      background-size: 100% 100%;
      z-index: 1;
      display: inline-block;
      vertical-align: middle;
      margin: -2px 5px 0 0;
      // position: absolute;
      // left: 25px;
      // top: 50%;
      // transform: translateY(-50%);
    }
  }

  .payNum {
    color: #d44d44;
    font-weight: 700;
    font-size: 18px;
  }

  .footer {
    margin: -16px;
    margin-bottom: 20px;
    height: 100px;
    line-height: 100px;
    display: flex;
    text-align: center;
    // background-color: rgba(91, 85, 85, 0.0627450980392157);
    box-sizing: border-box;
    border-bottom: 1px solid #e8eaec;

    &>P {
      padding: 0 5px;
    }

    .left {
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .title {
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }


    img {
      margin-top: 12px;
      width: 127px;
      height: 76px;
    }

    &>p {
      // display: flex;
      align-items: center;
      flex: 2;
      line-height: 99px;

      a {
        width: 40px;
      }
    }

    .small {
      flex: 1;
    }

    .big {
      flex: 3;
    }

  }

  /*支付类型*/
  .pay-type {
    margin: 0 auto;
    // width: 90%;
    padding-bottom: 30px;

    .p-title {
      font-size: 18px;
      line-height: 40px;
      padding: 0 10px;
      position: relative;

      &:before {
        content: " ";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        border-bottom: 1px solid #ccc;
      }
    }
  }

  .pay-type {
    .pay-item {
      display: flex;
      align-items: center;
      width: 400px;
      justify-content: space-between;
      margin: 0 auto;

      div {
        margin-top: 20px;
        width: 175px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #e5e5e5;
        cursor: pointer;
        border-radius: 6px;
        //   margin-right: 10px;
        background: #fafafa;

        &.active {
          border-color: #6a8fe5;
          background: #fff;
        }

        img {
          display: block;
          height: 34px;
          margin: 8px auto;
        }
      }
    }
  }
</style>