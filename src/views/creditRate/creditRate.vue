<template>
  <div class="creditRate">
    <Card>
      <img src="../../assets/sws.gif" alt="" />
      <div class="name" :style="{ fontSize: fontSize, top: nameTop }">
        {{ name }}
      </div>
      <div class="phone" :style="{ fontSize: fontSize, top: phoneTop }">
        {{ phone }}
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  name: "creditRate",
  data() {
    return {
      name: "",
      phone: "",
      fontSize: "22px",
      nameTop: "55.5%",
      phoneTop: "61.2%",
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
    /*     console.log("clientWidth", document.body.clientWidth);
    console.log("clientHeight", document.body.clientHeight); */
    if (document.body.clientWidth > 1400) {
      this.fontSize = "22px";
    } else if (
      document.body.clientWidth <= 1400 &&
      document.body.clientWidth > 1200
    ) {
      this.fontSize = "20px";
    } else if (document.body.clientWidth <= 1200) {
      this.fontSize = "18px";
    } else if (document.body.clientWidth <= 960) {
      this.fontSize = "16px";
    }

    if (document.body.clientHeight >= 900) {
      this.fontSize = "22px";
    } else if (
      document.body.clientHeight < 900 &&
      document.body.clientHeight >= 800
    ) {
      this.fontSize = "20px";
    } else if (
      document.body.clientHeight < 800 &&
      document.body.clientHeight > 700
    ) {
      this.fontSize = "18px";
    } else if (
      document.body.clientHeight <= 700 &&
      document.body.clientHeight > 600
    ) {
      this.fontSize = "16px";
    } else if (document.body.clientHeight <= 600) {
      this.fontSize = "14px";
    }

    window.onresize = (e) => {
      /*       console.log("clientWidth", document.body.clientWidth);
      console.log("clientHeight", document.body.clientHeight); */
      if (document.body.clientWidth > 1400) {
        this.fontSize = "22px";
      } else if (
        document.body.clientWidth <= 1400 &&
        document.body.clientWidth > 1200
      ) {
        this.fontSize = "20px";
      } else if (
        document.body.clientWidth <= 1200 &&
        document.body.clientWidth > 960
      ) {
        this.fontSize = "18px";
      } else if (document.body.clientWidth <= 960) {
        this.fontSize = "16px";
      }

      if (document.body.clientHeight >= 900) {
        this.fontSize = "22px";
      } else if (
        document.body.clientHeight < 900 &&
        document.body.clientHeight >= 800
      ) {
        this.fontSize = "20px";
      } else if (
        document.body.clientHeight < 800 &&
        document.body.clientHeight > 700
      ) {
        this.fontSize = "18px";
      } else if (
        document.body.clientHeight <= 700 &&
        document.body.clientHeight > 600
      ) {
        this.fontSize = "16px";
      } else if (document.body.clientHeight <= 600) {
        this.fontSize = "14px";
      }
    };
  },
};
</script>
<style scoped lang='less'>
.creditRate /deep/ .ivu-card-body {
  height: calc(100vh - 134px);
  padding: 0;
  position: relative;
  div {
    position: absolute;
    font-size: 22px;
    font-weight: bold;
    color: #eee;
  }
  .name {
    left: 52.5%;
    top: 55.5%;
  }
  .phone {
    left: 52.5%;
    top: 61.2%;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>