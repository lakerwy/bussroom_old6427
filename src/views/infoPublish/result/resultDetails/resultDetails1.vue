<template>
  <div class="resultDetails1">
    <div class="card-div1" ref="cont">
      <Card class="card-style" id="card1">1</Card>
      <Card class="card-style" id="card2">2</Card>
      <Card class="card-style" id="card3">3</Card>
      <Card class="card-style" id="card4">4</Card>
      <Card class="card-style" id="card5">5</Card>
    </div>
    <div class="card-div2">
      <Anchor show-ink container=".card-div1">
        <AnchorLink href="#card1" title="card1" />
        <AnchorLink href="#card2" title="card2" />
        <AnchorLink href="#card3" title="card3" />
        <AnchorLink href="#card4" title="card4" />
        <AnchorLink href="#card5" title="card5" />
      </Anchor>
      <div style="margin-top: 10px">
        <img @click="goTop"
             style="height: 35px;margin-left: 10px;cursor: pointer"
             src="../../../../assets/infoPublish/arrow.png"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'resultDetails1',
  props: {
    currentStep: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
    };
  },
  computed: {

  },
  created() {
    // this.$store.dispatch('getDetail1');
  },
  methods: {
    goTop() {
      this.$refs.cont.scrollTop = 0;
    },
  },
};
</script>

<style lang="less" scoped>
  .resultDetails1{
    position: relative;
    .card-div1{
      height: calc(100vh - 128px);
      overflow-y: scroll;
      width: 80%;
    }
    .card-div2{
      position: absolute;
      right: 10px;
      top: 30%;
      width: 15%;
    }
    .card-style{
      height:300px;
    }
  }
</style>
