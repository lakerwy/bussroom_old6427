<template>
  <div class="spinner">
    <div class="rect1"></div>
    <div class="rect2"></div>
    <div class="rect3"></div>
    <div class="rect4"></div>
    <div class="rect5"></div>
  </div>
</template>

<script>
export default {
  name: "rectLoading",
};
</script>

<style lang="less">
.spinner {
  margin-top: 12vh;
  margin-bottom: 30vh;
  height: 160px;
  text-align: center;
  font-size: 10px;
  span {
    display: block;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.45);
    margin-top: 1vh;
  }
  div {
    margin-right: 12px;
    background-color: #5accf3;
    height: 100%;
    width: 12px;
    display: inline-block;
    -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
    animation: stretchdelay 1.2s infinite ease-in-out;
  }
  .rect2 {
    background-color: #139fdc;
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }
  .rect3 {
    background-color: #1f76ba;
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }
  .rect4 {
    background-color: #46409a;
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }
  .rect5 {
    background-color: #2e3094;
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }
}

@-webkit-keyframes stretchdelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
}

@keyframes stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}
</style>

