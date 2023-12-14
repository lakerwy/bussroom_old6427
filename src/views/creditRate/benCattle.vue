<template>
  <div class="creditRate">
    <Card>
      <img class="img" src="../../assets/benCattle/img_neir.png" alt="" />
      <br>
      <div class="info">
        <div class="name">
          <img src="../../assets/benCattle/img_kef.png" alt="">
          <span>{{ name }}</span>
        </div>
        <div class="name">
          <img src="../../assets/benCattle/img_dh.png" alt="">
          <span>{{ phone }}</span>
        </div>
      </div>

    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
    };
  },
  mounted() {
    let userInfo = JSON.parse(this.getStore("userInfo"));
    this.name = userInfo.contact;
    this.phone = userInfo.contactPhone;
    let cusomerList = ["大客户部一组", "大客户部二组", "大客户部", "客服二组", "客服一组", "客服部"];
    if (userInfo.contactDept && cusomerList.includes(userInfo.contactDept)){
      this.name = "王达";
      this.phone = "13810410859";
    }
  },
};
</script>
<style scoped lang='less'>
.creditRate {
  /deep/ .ivu-card-body {
    background: url("../../assets/benCattle/img_bg.png");
    background-size: 100% 100%;
    height: calc(100vh - 134px);
    padding: 0;
    //padding-top: 100px;
    position: relative;
    text-align: center;
    .img {
      width: 60%;
      height: 60%;
      margin-top: 100px;
    }
    .info{
      //display: inline-block;
      margin: 0 auto;
      width: 800px;
      height: 100px;
      //border: 1px solid red;
      display: flex;
      .name {
        margin-top: 80px;
        text-align: left;
        width: 50%;
        font-size: 38px;
        color: white;
        display: flex;
        align-items: center;
        img {
          height: 40px;
          margin-right: 20px;
        }
      }
    }
  }
}
</style>