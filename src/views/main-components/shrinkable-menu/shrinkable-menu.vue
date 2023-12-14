<style lang="less">
@import "./styles/menu.less";
</style>

<template>
  <div id="shangwushi-menu">
    <slot name="top"></slot>
    <sidebar-menu
      v-show="!shrink"
      :menu-list="menuList"
      :open-names="openNames"
      :iconSize="21"
      @on-change="handleChange"
    ></sidebar-menu>
    <sidebar-menu-shrink
      v-show="shrink"
      :menu-list="menuList"
      :icon-color="shrinkIconColor"
      @on-change="handleChange"
    ></sidebar-menu-shrink>
  </div>
</template>

<script>
import sidebarMenu from "./components/sidebarMenu.vue";
import sidebarMenuShrink from "./components/sidebarMenuShrink.vue";
import util from "@/libs/util";
export default {
  name: "shrinkableMenu",
  components: {
    sidebarMenu,
    sidebarMenuShrink,
  },
  props: {
    shrink: {
      type: Boolean,
      default: false,
    },
    menuList: {
      type: Array,
      required: true,
    },
    theme: {
      type: String,
      default: "dark",
      validator(val) {
        return util.oneOf(val, ["dark", "light"]);
      },
    },
    beforePush: {
      type: Function,
    },
    openNames: {
      type: Array,
    },
  },
  computed: {
    bgColor() {
      return this.theme == "dark" ? "#515a6e" : "#fff";
    },
    shrinkIconColor() {
      return this.theme == "dark" ? "#fff" : "#515a6e";
    },
  },
  methods: {
    handleChange(name) {
      console.log(name)
      let memberType = JSON.parse(this.getStore('userInfo')).memberType
      if (name === "creditRate" && memberType === '免费会员') {
        var url = "https://tb.53kf.com/code/client/160d33b8d6369cbb3d8ac9b54e49b8bc7/3";
        // var url = "https://tb.53kf.com/code/client/0ae6bb374440bbf180f02e04d57fb6962/10";
        window.open(
          url,
          "",
          "height=625,width=750,top=195,left=585,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=yes, status=no"
        );
        return;
      }
      if (name === "benCattle" && memberType === '免费会员') { //标书在线咨询弹窗
        // let benurl = "https://tb.53kf.com/code/client/ad1242c3030454db49a601a6dd1c437c4/3";
        let benurl = "https://tb.53kf.com/code/client/ad1242c3030454db49a601a6dd1c437c4/1";
        window.open(benurl, "", "height=625,width=750,top=195,left=585,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=yes, status=no");
        return;
      }
      if (name === "renewals") {
        window.open("https://www.chinabidding.cn/caidou/Renewals/index");
        return;
      }
      let willpush = true;
      if (this.beforePush !== undefined) {
        if (!this.beforePush(name)) {
          willpush = false;
        }
      }
      if (willpush) {
        this.$router.push({
          name: name,
        });
      }
      this.$emit("on-change", name);
    },
    // setPublish(){
    //   let that = this;
    //   var publish_box = document.createElement("div");
    //   publish_box.id = "publish_box";
    //   publish_box.innerHTML =
    //       `<div class="publish"><div class="publish_head">发布提示：<span class="publish_close">×</span></div><div class="publish_content">您还没有进行企业评估认证，认证后即可发布商品！<div class="publish_btn">立即前往</div></div></div>`;
    //   document.body.appendChild(publish_box);
    //   document.querySelector("#publish_box .publish_close").onclick = function () {
    //     document.querySelector("#publish_box").remove();
    //   }
    //   document.querySelector("#publish_box .publish_btn").onclick = function () {
    //     window.open("https://www.chinabidding.cn/");
    //     document.querySelector("#publish_box").remove();
    //
    //   }
    // }
  },
};
</script>

<style>
/*#publish_box {*/
/*  position: fixed;*/
/*  top: 0;*/
/*  left: 0;*/
/*  width: 100%;*/
/*  height: 100%;*/
/*  background-color: rgba(0, 0, 0, .5);*/
/*  z-index: 110;*/
/*  font-family: "Microsoft YaHei";*/
/*  font-weight: 600;*/
/*}*/
/*#publish_box .publish {*/
/*  position: absolute;*/
/*  top: 40%;*/
/*  left: 50%;*/
/*  transform: translate(-50%,-50%);*/
/*  width: 468px;*/
/*  height: 282px;*/
/*  background: #fff;*/
/*  border-radius: 5px;*/
/*  padding: 0 10px;*/
/*}*/
/*#publish_box .publish .publish_head{*/
/*  height: 46px;*/
/*  width: 448px;*/
/*  border-bottom: 2px solid #ECECEC;*/
/*  line-height: 46px;*/
/*  color: #333333;*/
/*  padding-left: 10px;*/
/*}*/
/*#publish_box .publish .publish_head .publish_close{*/
/*  float: right;*/
/*  font-size: 26px;*/
/*  font-weight: 400;*/
/*  cursor: pointer;*/
/*}*/
/*#publish_box .publish_content {*/
/*  text-align: center;*/
/*  font-size: 15px;*/
/*  color: #666;*/
/*  margin-top: 55px;*/
/*}*/
/*#publish_box .publish_btn{*/
/*  margin: 0 auto;*/
/*  margin-top: 55px;*/
/*  width: 141px;*/
/*  height: 46px;*/
/*  background: #4687FF;*/
/*  text-align: center;*/
/*  line-height: 46px;*/
/*  border-radius: 5px;*/
/*  color: #fff;*/
/*  cursor: pointer;*/
/*}*/
</style>