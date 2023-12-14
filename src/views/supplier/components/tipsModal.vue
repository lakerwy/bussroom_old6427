<template>
  <!-- 一键报名相关弹框 -->
  <div class="regTips">
    <Modal
      class="regTips"
      :transfer="false"
      title="提示"
      v-model="modal"
      :width="498"
      :footer-hide="true"
      mask-closable
    >
      <!-- type为1 -->
      <!-- <div v-show="type == 1">
        <p class="text">入驻供应商后才能在线报名</p>
        <p class="text1">
          为了在线报名真实有效，入驻后累计可享受5次免费报名福利
        </p>
        <div class="btnGroup">
          <Button @click="modal = false">取消</Button>
          <Button type="primary" @click="regSuppiler">填写入驻信息</Button>
        </div>
      </div> -->
      <!-- type为2 -->
      <div v-show="type == 1">
        <p class="text">
          您已经报名{{ applyCount }}次，还剩余{{ unApplyCount }}次报名机会
        </p>
        <p class="text1">每天只能报名1次，入驻福利一个月内有效</p>
        <div class="btnGroup">
          <Button @click="modal = false">取消</Button>
          <Button type="primary" @click="SignUp" :disabled="disabled"
            >开始报名</Button
          >
        </div>
      </div>
      <!-- type为3 -->
      <div v-show="type == 2">
        <p class="text mb55">
          您免费报名次数已用完，报名次数越多<br />
          成交机会越大，开通会员获取更多报名机会吧
        </p>

        <div class="btnGroup">
          <Button @click="modal = false">取消</Button>
          <Button type="primary" @click="onlineServices">联系客服</Button>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
      type: 1,
      applyCount: 0, //已报名次数
      unApplyCount: 0, //剩余次数
      disabled: false, //报名按钮禁用
    }
  },
  methods: {
    // 立即报名
    SignUp() {
      this.modal = false
      this.$parent.clueEntry()
    },

    //填写入驻信息
    regSuppiler() {
      window.open(
        'https://www.chinabidding.cn/public/bidagency/index.html#/supplierSettled',
        '_blank'
      )
    },

    //在线咨询&联系客服
    onlineServices() {
      var url =
        'https://tb.53kf.com/code/client/0ae6bb374440bbf180f02e04d57fb6962/3' //游客
      window.open(
        url,
        '',
        'modal=yes,width=800,height=600,resizable=no,scrollbars=no,left=100,top=100'
      )
      // var xmlhttp;
      // if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
      //   xmlhttp = new XMLHttpRequest();
      // } else { // code for IE6, IE5
      //   xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      // }
      // xmlhttp.open("GET", "/cblcn/home/logincheck?t=" + Math.random(), true);
      // xmlhttp.send();
      // xmlhttp.onreadystatechange = function () {
      //   if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      //     var result = xmlhttp.responseText;
      //     if (result) {
      //       var us = eval('(' + result + ')');
      //       if (us && us.record_id) {
      //         //免费用户
      //         if (us.cust_right_group == 0) {
      //           url = "https://tb.53kf.com/code/client/0ae6bb374440bbf180f02e04d57fb6962/1";
      //         } else {
      //           //收费用户
      //           url = "https://tb.53kf.com/code/client/0ae6bb374440bbf180f02e04d57fb6962/2";
      //         }

      //       }

      //     }
      //   }
      // }
    },
  },
}
</script>

<style lang="less" scoped>
.regTips {
  /deep/ .ivu-modal-header {
    border: none !important;
    padding: 26px 24px;
    padding-bottom: 0px;
  }

  /deep/ .ivu-modal-header-inner {
    font-size: 20px !important;
    font-weight: 400 !important;
    padding-bottom: 13px;
    height: 35px !important;
    border-bottom: 1px solid #dcdee2;
  }
  /deep/ .ivu-modal-body {
    padding: 20px;
    padding-bottom: 64px;
    padding-top: 41px;
  }

  .text {
    font-size: 20px;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
  }

  .mb55 {
    margin-bottom: 55px;
  }

  .text1 {
    color: #666;
    font-size: 16px;
    text-align: center;
    margin-bottom: 50px;
  }

  .btnGroup {
    text-align: center;
  }

  /deep/ .ivu-btn {
    min-width: 127px;
    height: 48px;
    border-radius: 2px;
    font-size: 18px;
  }

  /deep/ .ivu-btn:nth-child(1) {
    margin-right: 24px;
  }
}
</style>
