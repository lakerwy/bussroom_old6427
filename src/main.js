// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import '@babel-polyfill'
// import "core-js/stable";
// import "regenerator-runtime/runtime";
import Vue from 'vue' 
import ViewUI from 'view-design' 
import 'view-design/dist/styles/iview.css'
import App from './App'
import { router } from './router/index'
import store from './store'
import i18n from '@/locale'
import Icon from 'vue-awesome/components/Icon'
// 按需引入awesome图标 
import 'vue-awesome/icons/brands/qq'
import 'vue-awesome/icons/brands/weixin'
import 'vue-awesome/icons/brands/weibo'
import 'vue-awesome/icons/brands/github'
import { getRequest, postRequest, putRequest, postBodyRequest, getNoAuthRequest, postNoAuthRequest } from '@/libs/axios'
import { setStore, getStore, removeStore } from '@/libs/storage'
import { format } from "date-fns";
import util from '@/libs/util'
import dictUtil from '@/libs/dictUtil'
import hasPermission from '@/libs/hasPermission'
import hasRole from '@/libs/hasRole'
import iviewArea from '@/views/my-components/iview-area';
import VueLazyload from 'vue-lazyload'
import VueClipboard from 'vue-clipboard2'
import VueApexCharts from 'vue-apexcharts'
import SEL from '@/libs/commonSel';

// 导入行政区域组件
import iRegion from '@/components/region/region.min';
Vue.use(iRegion);
// import vRegion from 'v-region';

// Vue.use(vRegion);
Vue.prototype.SEL = SEL;
Vue.config.productionTip = false
Vue.use(VueLazyload, {
    error: require('./assets/img-error.png'),
    loading: require('./assets/loading2.gif')
})
Vue.use(ViewUI, {
    i18n: (key, value) => i18n.t(key, value)
});
Vue.component('icon', Icon);
Vue.use(VueClipboard);
Vue.use(hasPermission);
Vue.use(hasRole);
Vue.use(iviewArea);
Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts);
// 挂载全局使用的方法
Vue.prototype.getRequest = getRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.postBodyRequest = postBodyRequest;
Vue.prototype.getNoAuthRequest = getNoAuthRequest;
Vue.prototype.postNoAuthRequest = postNoAuthRequest;
Vue.prototype.setStore = setStore;
Vue.prototype.getStore = getStore;
Vue.prototype.removeStore = removeStore;
Vue.prototype.format = format;
Vue.prototype.$httpRequestList = [];

// const files = require.context('./libs',false,/l.js$/)
// let configLibs = []
// files.keys().forEach(key => {
//     console.log("key",key);
//     console.log("files return",files(key));
//     console.log("resolve return",files.resolve(key));
//     configLibs = configLibs.concat(files(key).default)
// })
// console.log(configLibs,"cofigLibs");
// console.log(files.resolve(request));
// files.keys().forEach(key => {
//     console.log(key,"key");
//     console.log(files(key),"files");
// })
// console.log(files.id,"id");






/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    i18n,
    render: h => h(App),
    data: {
        currentPageName: ''
    },
    mounted() {
        // 初始化菜单
        var sessionId = location.href.split("?sessionId=")[1];
        if (sessionId) {
            this.$store.commit('setAdded', true)
        }
        util.initRouter(this);
        // 初始化全局数据字典
        dictUtil.initDictData(this);
        this.currentPageName = this.$route.name;
        // 显示打开的页面的列表
        this.$store.commit('setOpenedList');
        this.$store.commit('initCachepage');

        this.$Message.config({
            top: document.body.offsetHeight/2,
            duration: 3
        });

    }
})
