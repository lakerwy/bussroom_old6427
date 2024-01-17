<style lang="less">
@import "./main.less";
</style>

<template>
  <div class="main">
    <Modal
        v-model="busyFlag"
        :mask-closable="false"
        width="360"
        :closable="false"
    >
      <p slot="header" style="color: #f60; text-align: center">
        <Icon type="ios-information-circle"></Icon>
        <span>提醒</span>
      </p>
      <div style="text-align: center">
        <p>服务器繁忙,请稍后再操作</p>
      </div>
      <div slot="footer">
        <Button type="error" size="large" long :loading="true"
        >{{ busyTimeout }}秒后重试</Button
        >
      </div>
    </Modal>
    <div
        class="main-header-con"
    >
      <div class="main-header-nav main-header">
        <div class="mySws">我的商务室</div>
        <div class="topNav">
          <navMenu class="navMenu" :menu-list="menuList"></navMenu>
        </div>
        <div :class="{'header-avator-con': navType != 4,'header-avator-con nav4': navType == 4,}">
          <!--          <full-screen-->
          <!--              class="tool_icon"-->
          <!--              v-model="isFullScreen"-->
          <!--              @on-change="fullscreenChange"-->
          <!--          ></full-screen>-->
          <message-tip class="tool_icon" v-model="mesCount"></message-tip>
          <div class="user-dropdown-menu-con">
            <Row
                type="flex"
                justify="end"
                align="middle"
                class="user-dropdown-innercon"
            >
              <Dropdown
                  transfer
                  trigger="hover"
                  @on-click="handleClickUserDropdown"
              >
                <a style="color: #fff">
                  <Avatar
                      :src="avatarPath"
                      style="background: #619fe7; margin-left: 10px"
                  ></Avatar>
                  <span class="main-user-name">{{
                      $store.state.user.nickname
                    }}</span>
                  <Icon type="md-arrow-dropdown" />
                </a>
                <DropdownMenu slot="list">
                  <DropdownItem name="ownSpace">{{
                      $t("userCenter")
                    }}</DropdownItem>
                  <DropdownItem name="changePass">{{
                      $t("changePass")
                    }}</DropdownItem>
                  <DropdownItem name="loginout" divided v-show="showLogout">{{
                      $t("logout")
                    }}</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Row>
          </div>
        </div>
      </div>
      <div class="tags-con">
        <tags-page-opened :pageTagsList="pageTagsList"></tags-page-opened>
      </div>
    </div>
    <div class="single-page-con">
      <div class="single-page">
        <keep-alive :include="cachePage">
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
    <!-- 全局加载动画 -->
    <circleLoading class="loading-position" v-show="loading" />
    <div class="containter">
      <div class="containter_box">
        <p class="closebtn"><img src="https://cdn.chinabidding.cn/public/2020/img/syhd_tc_icongb2.png" alt="" /></p>
      </div>
    </div>
  </div>
</template>

<script>
import homepage from "./home/homepage";
import navMenu from "./main-components/navMenu/nav-menu.vue";
import tagsPageOpened from "./main-components/tags-page-opened.vue";
import breadcrumbNav from "./main-components/breadcrumb-nav.vue";
import fullScreen from "./main-components/fullscreen.vue";
import lockScreen from "./main-components/lockscreen/lockscreen.vue";
import messageTip from "./main-components/message-tip.vue";
import circleLoading from "@/views/my-components/xboot/circle-loading.vue";
import Cookies from "js-cookie";
import util from "@/libs/util.js";
import {
  ws,
  getMessageSendData,
  getOtherSet,
  ticketLogout, // 退出登录
} from "@/api/index";
import SockJS from "sockjs-client";
import stompOld from "@/libs/stomp.js";
import axios from "axios";

var Stomp = stompOld.Stomp;
var client;
export default {
  components: {
    homepage,
    navMenu,
    tagsPageOpened,
    breadcrumbNav,
    fullScreen,
    lockScreen,
    messageTip,
    circleLoading,
  },
  data() {
    return {
      sliceNum: 3,
      shrink: false,
      username: "",
      userId: "",
      isFullScreen: false,
      openedSubmenuArr: this.$store.state.app.openedSubmenuArr,
      firstThreeNav: [],
      lastNav: [],
      navType: 1,
      showLogout: true,
    };
  },
  computed: {
    busyFlag() {
      return this.$store.state.app.busyFlag;
    },
    busyTimeout() {
      return this.$store.state.app.busyTimeout;
    },
    loading() {
      return this.$store.state.app.loading;
    },
    navList() {
      return this.$store.state.app.navList;
    },
    currNav() {
      return this.$store.state.app.currNav;
    },
    currNavTitle() {
      return this.$store.state.app.currNavTitle;
    },
    menuList() {
      return this.$store.state.app.menuList;
    },
    pageTagsList() {
      return this.$store.state.app.pageOpenedList; // 打开的页面的页面对象
    },
    currentPath() {
      return this.$store.state.app.currentPath; // 当前面包屑数组
    },
    avatarPath() {
      return localStorage.avatorImgPath;
    },
    cachePage() {
      return this.$store.state.app.cachePage;
    },
    lang() {
      return this.$store.state.app.lang;
    },
    menuTheme() {
      return this.$store.state.app.menuTheme;
    },
    mesCount() {
      return this.$store.state.app.messageCount;
    },
  },
  stompClient: {
    monitorIntervalTime: 100,
    stompReconnect: true,
    timeout(orgCmd) {},
  },
  methods: {
    init() {
      this.$store.commit("getNickName");
      let userInfo = JSON.parse(window.localStorage.getItem('userInfo'));
      this.username = this.$store.state.user.nickname;

      this.userId = userInfo.id;
      this.checkTag(this.$route.name);
      let currWidth = document.body.clientWidth;
      if (currWidth <= 1200) {
        this.sliceNum = 2;
      }
      // 读取未读消息数
      getMessageSendData({
        userId: userInfo.id,
        status: 0,
      }).then((res) => {
        if (res.success) {
          this.$store.commit("setMessageCount", res.result.totalElements);
        }
      });
      // 消息开关 websocket
      let messageOpen = this.getStore("messageOpen");
      console.log("messageOpen", messageOpen);
      if (messageOpen != "0") {
        this.connect();
      }
    },
    connect() {
      var headers = {};
      client = Stomp.over(new SockJS(ws));
      client.connect(headers, this.onConnected, this.onFailed);
    },
    onConnected(frame) {
      console.log("连接ws成功: " + frame);
      var topicSubscription = client.subscribe(
          "/topic/subscribe",
          this.responseCallback
      );
      var queueSubscription = client.subscribe(
          "/user/" + this.userId + "/queue/subscribe",
          this.responseCallback
      );
    },
    onFailed(frame) {
      console.log("连接ws失败： " + JSON.stringify(frame));
    },
    responseCallback(frame) {
      console.log("收到消息：" + frame.body);
      this.$store.commit("setMessageCount", this.mesCount + 1);
    },
    selectNav(name) {
      this.$store.commit("setCurrNav", name);
      this.setStore("currNav", name);
      // 清空所有已打开标签
      // this.$store.commit("clearAllTags");
      if (this.$route.name != "home_index") {
        this.$router.push({
          name: "home_index",
        });
      }
      util.initRouter(this);
    },
    toggleClick() {
      this.shrink = !this.shrink;
    },
    handleLanDropdown(name) {
      this.$i18n.locale = name;
      this.$store.commit("switchLang", name);
    },
    handleClickUserDropdown(name) {
      if (name == "ownSpace") {
        util.openNewPage(this, "ownspace_index");
        this.$router.push({
          name: "ownspace_index",
        });
      } else if (name == "changePass") {
        util.openNewPage(this, "change_pass");
        this.$router.push({
          name: "change_pass",
        });
      } else if (name == "loginout") {
        if (window.frames.length != window.parent.frames.length) {
          console.log('在iframe中111');
          window.top.postMessage({close:true},'*')
          return window.parent.top.postMessage({close:true},'*')
        }
        try {
          window.top.postMessage({close:true},'*')
        } catch(error) {
          console.log(error)
        }
        // 退出登录
        let sessionId = localStorage.getItem("sessionId");
        this.$store.commit("setLoading", true);
        getOtherSet().then((res) => {
          this.$store.commit("setLoading", false);
          if (res.result) {
            let domain = res.result.ssoDomain;
            Cookies.set("accessToken", "", {
              domain: domain,
              expires: 7,
            });
          }
          this.$store.commit("logout", this);
          this.$store.commit("clearOpenedSubmenu");
          this.setStore("accessToken", "");
          // 强制刷新页面 重新加载router
          location.reload();
        });
      }
    },
    checkTag(name) {
      let openpageHasTag = this.pageTagsList.some((item) => {
        if (item.name == name) {
          return true;
        }
      });
      if (!openpageHasTag) {
        //  解决关闭当前标签后再点击回退按钮会退到当前页时没有标签的问题
        util.openNewPage(
            this,
            name,
            this.$route.params || {},
            this.$route.query || {}
        );
      }
    },
    handleSubmenuChange(val) {
      // console.log(val)
    },
    beforePush(name) {
      // console.log(name)
      return true;
    },
    fullscreenChange(isFullScreen) {
      // console.log(isFullScreen);
    },
    //新打开一个窗口页面
    openNewWindow(name){
      let sessionId = window.localStorage.getItem('sessionId')
      const resolve = this.$router.resolve({
        name: 'index',
      })
      window.open(resolve.href + '?sessionId='+sessionId+'&name='+name, '_blank')
    }
  },
  watch: {
    $route(to) {
      this.$store.commit("setCurrentPageName", to.name);
      let pathArr = util.setCurrentPath(this, to.name);
      if (pathArr.length > 2) {
        this.$store.commit("addOpenSubmenu", pathArr[1].name);
      }
      this.checkTag(to.name);
      localStorage.currentPageName = to.name;
    },
    lang() {
      util.setCurrentPath(this, this.$route.name); // 在切换语言时用于刷新面包屑
    },
  },
  mounted() {
    this.init();
    if (window.frames.length != window.parent.frames.length) {
      console.log('在iframe中111');
      // this.showLogout = false;
    }
  },
  created() {
    // 显示打开的页面的列表
    this.$store.commit("setOpenedList");
  },
};
</script>
<style lang="less" scoped>
.main-header-con {
  padding-left: 0;
}
.single-page-con {
  left: 0;
}
.main-header-nav {
  min-width: 740px;
  height: 60px;
  background: #fff;
  //-webkit-box-shadow: 0 2px 1px 1px rgba(100, 100, 100, 0.1);
  //box-shadow: 0 2px 1px 1px rgba(100, 100, 100, 0.1);
  position: relative;
  z-index: 11;
  display: flex;
  background: #2B64CE;
  .mySws {
    //vertical-align: top;
    //display: inline-block;
    width: 180px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 20px;
    color: #fff;
    font-weight: bold;
  }
  .topNav {
    width: calc(100% - 350px);
    .navMenu {
      background: #2B64CE;
      height: auto;
      display: inline-block;
      vertical-align: middle;
      position: relative;
      z-index: 0;
    }
  }
  /deep/.ivu-menu-horizontal>.ivu-menu-item, /deep/.ivu-menu-horizontal .ivu-menu-submenu {
    position: initial;
    padding:0 15px;
  }
  /deep/.ivu-menu-submenu-title>i {
    margin-right: 0;
  }
  .header-avator-con {
    width: 170px;
    z-index: 999;
  }
  .message-con {
    /deep/ .ivu-icon-md-notifications {
      color: #fff;
    }
  }
  //.main-user-name {
  //  color: #fff;
  //}
}
</style>

<style>
/* 2022四月营销活动弹出 */
.containter{
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: 109;
  display: none;
  background-color:rgba(0, 0, 0, 0.6);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#88000000',endColorstr='#88000000');
}

.containter_box{
  width: 700px;
  height: 560px;
  position: absolute;
  top: 46%;
  left: 50%;
  z-index: 119;
  /*transform: translate(-50%,-50%);*/
  margin-left:-340px;
  margin-top:-240px;
  /*background: url(https://img.chinabidding.cn/banner/2022/swstc/swstc2.png) no-repeat center;*/
}
.closebtn {
  position: absolute;
  right: -20px;
  top: -20px;
  cursor: pointer;
}

</style>