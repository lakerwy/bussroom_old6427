<template>
  <div>
    <Modal v-model="wechatFlag" title="扫一扫绑定微信" @on-cancel="closeWechat" @on-ok="closeWechat">
      <div style="text-align:center;">
        <img :src="wechatSrc" alt="扫一扫绑定微信">
      </div>
    </Modal>
  </div>
</template>

<script>
import {userInfo, toBindWechat,} from "@/api/index";
import Cookies from "js-cookie";

export default {
  name: "bindWechatModal",
  data(){
    return {
      wechatFlag: false,
      wechatSrc: '',
      timeId: null,
    }
  },
  created() {
    // this.wechatFlag = true;
    this.bindWechat()
  },
  methods: {
    closeWechat() {
      // 取消绑定
      clearInterval(this.timeId);
      this.$emit("closeWechat", false);
    },
    bindWechat() {
      let that = this
      toBindWechat().then(res => {
        if (res.success) {
          var ticket = res.result.ticket;
          this.wechatSrc =
              "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=" + ticket;
          this.wechatFlag = true;
          this.getLinkFlag()
        }
      });
    },
    getLinkFlag() {
      // 定时获取是否绑定微信
      clearInterval(this.timeId)
      this.timeId = setInterval(() => {
        userInfo().then((res) => {
          if(res.code === 404){
            clearInterval(this.timeId)
          }
          if (res.result.wechat) {
            this.$emit("closeWechat", false);
            this.$Message.success("绑定成功");
            this.updateUserInfo();
            clearInterval(this.timeId);
          }
        })
      }, 1000)
    },
    updateUserInfo() {
      // 更新用户信息
      userInfo().then(res => {
        if (res.success) {
          let endDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 - 1);
          // 避免超过大小限制
          delete res.result.permissions;
          Cookies.set("userInfo", JSON.stringify(res.result), {
            expires: endDate
          });
          this.setStore("userInfo", res.result);
        }
      });
    },
  }
}
</script>

<style scoped lang="less">

</style>