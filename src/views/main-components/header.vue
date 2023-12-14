<template>
  <div>
    <Row class="header">
      <!-- <img src="../../assets/xboot.png" width="220px">
      <div class="description">{{ $t('xboot') }}</div> -->
            <div class="my_logo">我的商务室</div>
      <div class="description">2021新版邮件订阅已更新上线<br>
开启订阅之前请先到个人中心绑定您的邮箱</div>

    </Row>

  </div>
</template>

<script>
export default {
  name: "header"
};
</script>

<style lang="less">
.header {
  margin-top: 18vh;
  margin-bottom: 5vh;
  text-align: center;


    .my_logo {
    width: 220px;
    height: 70px;
    line-height: 70px;
    font-size: 40px;
    text-align: center;
    margin: 0 auto;
    color: #4e9ff5;
  }

  .description {
    font-size: 17px;
    text-align: center;
    color: rgba(0, 0, 0, 0.7);
    margin-top: 5vh;
  }

}
</style>
