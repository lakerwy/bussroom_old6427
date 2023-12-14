<template>
  <div class="notVip">
    <Modal
      class="notVipModal"
      :transfer="false"
      title="提示"
      v-model="modal"
      :width="498"
      :footer-hide="true"
      mask-closable
    >
      <p class="text">
        您还不是采招会员，办理采招会员后<br />
        可以查看和认领，办理会员在线咨询客服
      </p>
      <div class="btnGroup">
        <Button @click="modal = false">取消</Button>
        <Button type="primary" @click="onlineServices">在线咨询</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
    }
  },
  methods: {
    onlineServices() {
      var url =
        'https://tb.53kf.com/code/client/0ae6bb374440bbf180f02e04d57fb6962/3' //游客

      window.open(
        url,
        '',
        'modal=yes,width=800,height=600,resizable=no,scrollbars=no,left=100,top=100'
      )
      // var xmlhttp
      // if (window.XMLHttpRequest) {
      //   // code for IE7+, Firefox, Chrome, Opera, Safari
      //   xmlhttp = new XMLHttpRequest()
      // } else {
      //   // code for IE6, IE5
      //   xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
      // }
      // xmlhttp.open('GET', '/cblcn/home/logincheck?t=' + Math.random(), true)
      // xmlhttp.send()
      // xmlhttp.onreadystatechange = function () {
      //   if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      //     var result = xmlhttp.responseText
      //     if (result) {
      //       var us = eval('(' + result + ')')
      //       if (us && us.record_id) {
      //         //免费用户
      //         if (us.cust_right_group == 0) {
      //           url =
      //             'https://tb.53kf.com/code/client/0ae6bb374440bbf180f02e04d57fb6962/1'
      //         } else {
      //           //收费用户
      //           url =
      //             'https://tb.53kf.com/code/client/0ae6bb374440bbf180f02e04d57fb6962/2'
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
.notVip {
  /deep/ .ivu-modal-header {
    border: none !important;
    padding: 26px 24px;
    padding-bottom: 20px;
  }

  /deep/ .ivu-modal-header-inner {
    font-size: 20px !important;
    font-weight: 400 !important;
    padding-bottom: 13px;
    height: 35px !important;
    border-bottom: 1px solid #dcdee2;
  }
  /deep/ .ivu-modal-body {
    padding: 20px 40px;
    padding-bottom: 64px;
    padding-top: 41px;
  }

  .text {
    font-size: 20px;
    color: #333;
    text-align: center;
    margin-bottom: 59px;
  }
  .btnGroup {
    text-align: center;
  }

  /deep/ .ivu-btn {
    width: 127px;
    height: 48px;
    border-radius: 2px;
    font-size: 18px;
  }

  /deep/ .ivu-btn:nth-child(1) {
    margin-right: 24px;
  }
}
</style>
