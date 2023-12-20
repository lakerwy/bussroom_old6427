<template>
  <div id="my-slide-menu" style=" margin-top:20px;">
    <template v-for="(item, index) in menuList">
      <div style="text-align: center;" :key="index">
        <Dropdown transfer v-if="item.children.length !== 1" placement="right-start" :key="index"
          @on-click="changeMenu">
          <Button style="width: 60px;height: 42px;padding:10px 0;" type="text">
            <Icon :size="22" v-if="showIconFlag(itemTitle(item))" :color="iconColor" :type="item.icon"></Icon>
            <span class="iconfont" v-if="itemTitle(item) === '找项目'">&#xe60d;</span>
            <span class="iconfont" v-if="itemTitle(item) === '企业管理'">&#xe60c;</span>
            <span class="iconfont" v-if="itemTitle(item) === '我的项目'">&#xe60f;</span>
            <span class="iconfont" v-if="itemTitle(item) === '非招标采购信息发布'">&#xe62a;</span>
            <span class="iconfont" v-if="itemTitle(item) === '我的订阅'">&#xe609;</span>
          </Button>
          <DropdownMenu style="width: 150px;" slot="list">
            <template v-for="(child, i) in item.children">
              <DropdownItem :name="child.name" :key="i">
                <!-- <Icon :type="child.icon"></Icon> -->
                <span style="padding-left:10px;">{{ itemTitle(child) }}</span>
              </DropdownItem>
            </template>
          </DropdownMenu>
        </Dropdown>
        <Dropdown transfer v-else placement="right-start" :key="index" @on-click="changeMenu"
                  :class="{renewShow: (itemTitle(item.children[0]) === '自主续费' && !(userType == 1 && loginPrompt == 1 && showRenewal))}">
          <Button @click="changeMenu(item.children[0].name)" style="width: 60px;height: 42px;padding:10px 0;" 
            type="text">
            <Icon v-if="showIconFlag(itemTitle(item.children[0]))"  :size="22" :color="iconColor"
              :type="item.children[0].icon || item.icon"></Icon>

            <span class="iconfont" v-if="itemTitle(item.children[0]) === '首页'">&#xe608;</span>
            <span class="iconfont" v-if="itemTitle(item.children[0]) === '个人中心'">&#xe60a;</span>
            <span class="iconfont" v-if="itemTitle(item.children[0]) === '专题频道'">&#xe60b;</span>
            <span class="iconfont" v-if="itemTitle(item.children[0]) === '我的收藏'">&#xe60e;</span>
            <span class="iconfont" v-if="itemTitle(item.children[0]) === '我的订阅'">&#xe609;</span>
            <!-- test -->
            <span class="iconfont" v-if="itemTitle(item.children[0]) === 'AAA企业信用等级'">&#xe64d;</span>
            <span class="iconfont" v-if="itemTitle(item.children[0]) === '自主续费'">&#xe69e;</span>
            
            <span class="iconfont" v-if="itemTitle(item.children[0]) === '非招标采购公告专区'">&#xe628;</span>
          </Button>
          <DropdownMenu style="width: 150px;" slot="list">
            <DropdownItem :name="item.children[0].name" :key="'d' + index">
              <!-- <Icon v-if="showIconFlag(itemTitle(item.children[0]))" :type="item.children[0].icon || item.icon"></Icon> -->
              <!-- <span class="iconfont" v-if="itemTitle(item.children[0]) === '首页'">&#xe608;</span> -->
              <!-- <span class="iconfont" v-if="itemTitle(item.children[0]) === '个人中心'">&#xe60a;</span> -->
              <!-- <span class="iconfont" v-if="itemTitle(item.children[0]) === '专题频道'">&#xe60b;</span> -->
              <!-- <span class="iconfont" v-if="itemTitle(item.children[0]) === '我的收藏'">&#xe60e;</span> -->
              <!-- <span class="iconfont" v-if="itemTitle(item.children[0]) === '我的订阅'">&#xe609;</span> -->
              <span style="padding-left:10px;">{{ itemTitle(item.children[0]) }}</span>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: "sidebarMenuShrink",
    props: {
      menuList: {
        type: Array
      },
      iconColor: {
        type: String,
        default: "white"
      },
      menuTheme: {
        type: String,
        default: "dark"
      }
    },
    data() {
      return {
        pageList: [
          '首页',
          '个人中心',
          '专题频道',
          '我的收藏',
          '我的订阅',
          '邮件订阅',
          '订阅总览',          
          '订阅管理',          
          '找项目',
          '企业管理',
          '招标与采购',
          '前期拟在建',
          '企业认证',
          '账号管理',
          '我的项目',
          'AAA企业信用等级',
          '自主续费',
          "非招标采购公告专区",
          "非招标采购信息发布",
        ],
        userType: '',
        loginPrompt: '',
        showRenewal: false,
      }
    },
    methods: {
      changeMenu(active) {
        this.$emit("on-change", active);
      },
      itemTitle(item) {
        if (typeof item.title == "object") {
          return this.$t(item.title.i18n);
        } else {
          return item.title;
        }
      },
      showIconFlag(str) {
        return this.pageList.indexOf(str) < 0 ? true : false
      },
    },
    mounted() {
      this.userType = JSON.parse(window.localStorage.getItem('userInfo')).type;
      this.loginPrompt = JSON.parse(window.localStorage.getItem('userInfo')).loginPrompt;

      // 是否显示自主续费 3月1日到5月31日的到期的客户自主续费不显示
      let endDate = JSON.parse(this.getStore("userInfo")).expireTime;
      let nowTime = new Date().getTime(); //当前日期
      if (endDate){
        // if (nowTime >= new Date('2023-03-27 00:00:00').getTime() || new Date(endDate).getTime()>= new Date('2023-06-01 00:00:00').getTime()){
        if (nowTime >= new Date('2023-06-30 00:00:00').getTime()){
          this.showRenewal = true;
        }
      }
    }
  };
</script>
<style lang="less">
  #my-slide-menu {
    @font-face {
      font-family: 'iconfont';
      src: url('../../../../../public/font/iconfont.eot');
      src: url('../../../../../public/font/iconfont.eot?#iefix') format('embedded-opentype'),
        url('../../../../../public/font/iconfont.woff2') format('woff2'),
        url('../../../../../public/font/iconfont.woff') format('woff'),
        url('../../../../../public/font/iconfont.ttf') format('truetype'),
        url('../../../../../public/font/iconfont.svg#iconfont') format('svg');
    }

    .iconfont {
      font-family: "iconfont" !important;
      font-size: 16px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      vertical-align: top;
      margin-right: 0em;
      line-height: 20px;
      color: #fff;
    }

    .ivu-btn-text:hover {
      .iconfont {
        color: #2d8cf0;
      }
    }
  }
  .renewShow{
    display: none;
  }
</style>