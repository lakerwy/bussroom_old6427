<style lang="less">
@import "./styles/menu.less";
.renewShow {
  display: none;
}
</style>

<template>
  <Menu mode="horizontal" theme="primary" active-name="1" @on-select="changeMenu">
    <template v-for="item in menuList2">
      <!-- 如果是一级菜单并设置了不一直显示 -->
      <template v-if="item.level == '1' && !item.showAlways">
        <MenuItem v-if="item.children.length <= 1" :class="{
            renewShow:
              itemTitle(item.children[0]) === '自主续费' &&
              !(userType == 1 && loginPrompt == 1 && showRenewal)
          }" :name="item.children[0].name" :key="'menuitem' + item.name">
          <Icon v-if="showIconFlag(itemTitle(item.children[0]))" :type="item.children[0].icon || item.icon" :key="'menuicon' + item.name"></Icon>
          <span class="iconMenu" v-if="itemTitle(item.children[0]) === '首页'">&#xe608;</span>
          <span class="iconMenu" v-if="itemTitle(item.children[0]) === '个人中心'">&#xe60a;</span>
          <span class="iconMenu" v-if="itemTitle(item.children[0]) === '专题频道'">&#xe60b;</span>
          <span class="iconMenu" v-if="itemTitle(item.children[0]) === '我的收藏'">&#xe60e;</span>
          <span class="iconMenu" v-if="itemTitle(item.children[0]) === '我的订阅'">&#xe609;</span>
          <!-- test -->
          <span class="iconMenu" v-if="itemTitle(item.children[0]) === 'AAA企业信用等级'">&#xe64d;</span>
          <span class="iconMenu" v-if="itemTitle(item.children[0]) === '自主续费'">&#xe69e;</span>
          <span class="iconMenu" v-if="itemTitle(item.children[0]) === '非招标采购公告专区'">&#xe628;</span>
          {{itemTitle(item.children[0]) }}
        </MenuItem>
        <Submenu v-if="item.children.length > 1" :name="item.name" :key="item.name">
          <template slot="title">
            <span class="iconMenu" v-if="itemTitle(item) === '我的订阅'">&#xe609;</span>
            <Icon :type="item.icon" v-if="showIconFlag(itemTitle(item))"></Icon>
            {{ itemTitle(item) }}
          </template>
          <template v-for="child in item.children">
            <MenuItem :name="child.name" :key="'menuitem' + child.name">
              {{itemTitle(child)}}
            </MenuItem>
          </template>
        </Submenu>
      </template>
      <template v-else>
        <Submenu :name="item.name" :key="item.name">
          <template slot="title">
            <Icon v-if="showIconFlag(itemTitle(item))" :type="item.icon" ></Icon>
            <span class="iconMenu" v-if="itemTitle(item) === '找项目'">&#xe60d;</span>
            <span class="iconMenu" v-if="itemTitle(item) === '企业管理'">&#xe60c;</span>
            <span class="iconMenu" v-if="itemTitle(item) === '我的项目'">&#xe60f;</span>
            <span class="iconMenu" v-if="itemTitle(item) === '非招标采购信息发布'">&#xe62a;</span>
            {{ itemTitle(item) }}
          </template>
          <template v-for="child in item.children">
            <MenuItem :name="child.name" :key="'menuitem' + child.name">
              {{itemTitle(child)}}
            </MenuItem>
          </template>
        </Submenu>
      </template>
    </template>
  </Menu>
</template>

<script>
export default {
  name: "nav-menu",
  props: {
    menuList: {
      type: Array,
      required: true,
    },
  },
  data(){
    return {
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
      menuList2: []
    }
  },
  methods: {
    changeMenu(name){
      console.log(name)
      let memberType = JSON.parse(window.localStorage.getItem('userInfo')).memberType
      if (name === "creditRate" && memberType === '免费会员') {
        var url = "https://tb.53kf.com/code/client/160d33b8d6369cbb3d8ac9b54e49b8bc7/3";
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
    },
    itemTitle(item) {
      if (typeof item.title == "object") {
        return this.$t(item.title.i18n);
      } else {
        return item.title;
      }
    },
    showIconFlag(str) {
      return this.pageList.indexOf(str) < 0 ? true : false;
    },
    setNavList(){
      const navList = [];
      let moreNav = {
        "name": "more",
        "showAlways": true,
        "level": 1,
        "type": 0,
        "title": "更多",
        "path": "/home",
        "icon": "ios-apps",
        children: [],
      }
      for (let i=0; i<this.menuList.length; i++) {
        if(this.menuList[i].children.length>1 || this.menuList[i].title == '首页' || this.menuList[i].title == '我的收藏'){
          navList.push(this.menuList[i])
        } else {
          moreNav.children.push(this.menuList[i].children[0])
        }
      }
      navList.push(moreNav);
      return navList
    },
    resize() {
      this.menuList2 = [];
      let currWidth = document.body.clientWidth;
      // if (currWidth <= 1280 ) {
      if (currWidth <= 1280 ) {
        this.menuList2 = this.setNavList();
      }  else {
        this.menuList2 = Object.assign({},this.menuList);
      }
      console.log(this.menuList2)
    },
  },
  watch: {
    menuList(val) {
      this.resize();
    }
  },
  mounted() {
    let that = this;
    this.resize();
    window.addEventListener("resize", function () {
      that.resize();
    });
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
  },
}
</script>

<style scoped>

</style>