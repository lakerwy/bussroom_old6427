<style lang="less">
  @import "../styles/menu.less";

  .renewShow {
    display: none;
  }
</style>
<template>
  <Menu ref="sideMenu" accordion :active-name="$route.name" :open-names="singleOpenName" :theme="menuTheme" width="auto"
    @on-select="changeMenu">
    <template v-for="item in menuList">
      <!-- 如果是一级菜单并设置了不一直显示 -->
      <template v-if="item.level == '1' && !item.showAlways">
        <MenuItem v-if="item.children.length <= 1" :class="{
            renewShow:
              itemTitle(item.children[0]) === '自主续费' &&
              !(userType == 1 && loginPrompt == 1 && showRenewal)
          }" :name="item.children[0].name" :key="'menuitem' + item.name">

        <Icon style="font-size: 16px;margin-right: 0.8em" v-if="showIconFlag(itemTitle(item.children[0]))" :type="item.children[0].icon || item.icon"
          :size="iconSize" :key="'menuicon' + item.name"></Icon>
        <span class="iconfont" v-if="itemTitle(item.children[0]) === '首页'">&#xe608;</span>
        <span class="iconfont" v-if="itemTitle(item.children[0]) === '个人中心'">&#xe60a;</span>
        <span class="iconfont" v-if="itemTitle(item.children[0]) === '专题频道'">&#xe60b;</span>
        <span class="iconfont" v-if="itemTitle(item.children[0]) === '我的收藏'">&#xe60e;</span>
        <span
            class="iconfont"
            v-if="itemTitle(item.children[0]) === '我的订阅'"
            >&#xe609;</span
          >
          <!-- test -->
        <span class="iconfont" v-if="itemTitle(item.children[0]) === 'AAA企业信用等级'">&#xe64d;</span>
        <span class="iconfont" v-if="itemTitle(item.children[0]) === '自主续费'">&#xe69e;</span>
        <span class="iconfont" v-if="itemTitle(item.children[0]) === '非招标采购公告专区'">&#xe628;</span>
        <span class="layout-text" :key="'title' + item.name">{{
            itemTitle(item.children[0])
          }}</span>
        </MenuItem>
        <Submenu v-if="item.children.length > 1" :name="item.name" :key="item.name">
          <template slot="title">
            <span class="iconfont" v-if="itemTitle(item) === '我的订阅'">&#xe609;</span>
            <Icon :type="item.icon" v-if="showIconFlag(itemTitle(item))" :size="iconSize"></Icon>
            <span class="layout-text">{{ itemTitle(item) }}</span>
          </template>
          <template v-for="child in item.children">
            <MenuItem :name="child.name" :key="'menuitem' + child.name">
            <span class="empty"></span>
            <Icon :type="child.icon" :size="iconSize" :key="'icon' + child.name" v-if="showIconFlag(itemTitle(child))">
            </Icon>
            <span class="layout-text" :key="'title' + child.name">{{
                itemTitle(child)
              }}</span>
            </MenuItem>
          </template>
        </Submenu>
      </template>
      <template v-else>
        <Submenu :name="item.name" :key="item.name">

          <template slot="title">
            <Icon v-if="showIconFlag(itemTitle(item))" :type="item.icon" :size="iconSize"></Icon>
            <span class="iconfont" v-if="itemTitle(item) === '找项目'">&#xe60d;</span>
            <span class="iconfont" v-if="itemTitle(item) === '企业管理'">&#xe60c;</span>
            <span class="iconfont" v-if="itemTitle(item) === '我的项目'">&#xe60f;</span>

            <span class="iconfont" v-if="itemTitle(item) === '非招标采购信息发布'">&#xe62a;</span>
            <span class="layout-text">{{ itemTitle(item) }}</span>
          </template>
          <template v-for="child in item.children">
            <MenuItem :name="child.name" :key="'menuitem' + child.name">
            <!-- <Icon v-if="showIconFlag(itemTitle(child))" :type="child.icon" :size="iconSize" :key="'icon' + child.name">
            </Icon> -->
            <span class="empty"></span>
            <span class="layout-text" :key="'title' + child.name">{{
                itemTitle(child)
              }}</span>
            </MenuItem>
          </template>
        </Submenu>
      </template>
    </template>
  </Menu>
</template>

<script>
  export default {
    name: "sidebarMenu",
    data() {
      return {
        singleOpenName: [],
        pageList: [
          "首页",
          "个人中心",
          "专题频道",
          "我的收藏",
          '我的订阅',
          '邮件订阅',
          '订阅总览',
          '订阅管理',
          "找项目",
          "企业管理",
          "招标与采购",
          "前期拟在建",
          "企业认证",
          "账号管理",
          "我的项目",
          "AAA企业信用等级",
          "自主续费",
          "非招标采购公告专区",
          "非招标采购信息发布",
        ],
        userType: "",
        loginPrompt: "",
        showRenewal: false,
      };
    },
    props: {
      menuList: Array,
      iconSize: Number,
      menuTheme: {
        type: String,
        default: "dark",
      },
      openNames: {
        type: Array,
      },
    },
    methods: {
      changeMenu(active) {
        this.$emit("on-change", active);
      },
      handleSelect(name) {
        this.$emit("on-select", name);
      },
      itemTitle(item) {
        if (typeof item.title == "object") {
          return this.$t(item.title.i18n);
        } else {
          return item.title;
        }
      },
      getOpenedNamesByActiveName(name) {
        return this.$route.matched
          .map((item) => item.name)
          .filter((item) => item !== name);
      },
      showIconFlag(str) {
        return this.pageList.indexOf(str) < 0 ? true : false;
      },
    },
    updated() {
      this.$nextTick(() => {
        if (this.$refs.sideMenu) {
          this.$refs.sideMenu.updateOpened();
        }
      });
    },
    watch: {
      // 监听路由变化
      $route(to, from) {
        this.singleOpenName = [this.$route.matched[0].name];
      },
    },
    mounted() {
      console.log(this.menuList);
      this.userType = JSON.parse(this.getStore("userInfo")).type;
      this.loginPrompt = JSON.parse(this.getStore("userInfo")).loginPrompt;

      // 是否显示自主续费 3月1日到5月31日的到期的客户自主续费不显示
      let endDate = JSON.parse(this.getStore("userInfo")).expireTime;
      let nowTime = new Date().getTime(); //当前日期
      if (endDate){
        if (nowTime >= new Date('2023-06-30 00:00:00').getTime()){
          this.showRenewal = true;
        }
      }

      this.singleOpenName = [this.$route.matched[0].name];
    },
  };
</script>
<style lang="less" scoped>
  /deep/ .empty {
    margin: 0;
    padding: 0;
    width: 14px;
    height: 14px;
    display: inline-block;

  }
</style>