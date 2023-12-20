import Vue from 'vue';
import ViewUI from 'view-design';
import Util from '../libs/util';
import { clearHttpRequestingList } from '../libs/axios';
import VueRouter from 'vue-router';
import Cookies from 'js-cookie';
import {
    routers,
    otherRouter
} from './router';
import {
    getStore,
    setStore
} from '../libs/storage';
import store from '../store';

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

// 路由配置
const RouterConfig = {
    mode: 'hash',
    routes: routers
};

export const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    ViewUI.LoadingBar.start();
    Util.title(to.meta.title);
    var name = to.name;

    if (Cookies.get('locking') == '1' && name !== 'locking') {
        // 判断当前是否是锁定状态
        next({
            replace: true,
            name: 'locking'
        });
    } else if (Cookies.get('locking') == '0' && name == 'locking') {
        next(false);
    } else {
        // 白名单
        var whiteList = name != 'login' && name != 'regist' && name != 'regist-result' && name != 'index' && name != 'relate' && name != 'reset' && name != 'authorize' && name != 'second-info';
        if (name == 'login') {
            if (to.query.query == 'email') {
                if (to.query.type == 1) {
                    location.href = "https://www.chinabidding.cn/public/2020/html/login.html?query=email&type=1";
                }
                else if (to.query.type == 2) {
                    location.href = "https://www.chinabidding.cn/public/2020/html/login.html?query=email&type=2";
                }
                else if (to.query.type == 0) {
                    location.href = "https://www.chinabidding.cn/public/2020/html/login.html?query=email&type=0";
                }
            } else {
                location.href = "https://www.chinabidding.cn/";
            }
        } else
            if (!window.localStorage.getItem('userInfo') && whiteList) {
                // 判断是否已经登录且前往的页面不是登录页
                if (to.query.query == 'email') {
                    if (to.query.type == 1) {
                        next({
                            name: 'login',
                            query: {
                                query: 'email',
                                type: 1
                            }
                        });
                    }
                    else if (to.query.type == 2) {
                        next({
                            name: 'login',
                            query: {
                                query: 'email',
                                type: 2
                            }
                        });
                    }
                    else if (to.query.type == 0) {
                      next({
                        name: 'login',
                        query: {
                            query: 'email',
                            type: 0
                        }
                    });
                    }
                    else {
                        next({
                            name: 'login',
                            query: {
                                query: 'email'
                            }
                        });
                    }
                } else {
                    next({
                        name: 'login',
                    });
                }
            } else if (window.localStorage.getItem('userInfo') && name == 'login') {
                // 判断是否已经登录且前往的是登录页
                Util.title();
                next({
                    name: 'home_index'
                });
            } else {
                clearHttpRequestingList()
                Util.toDefaultPage([...routers], name, router, next);
            }
    }
});

router.afterEach((to) => {

    Util.openNewPage(router.app, to.name, to.params, to.query);
    ViewUI.LoadingBar.finish();
    window.scrollTo(0, 0);
});

router.onError((error) => {
    const pattern = /Loading chunk (\d)+ failed/g;
    const isChunkLoadFailed = error.message.match(pattern);
    const targetPath = router.history.pending.fullPath;
    if (isChunkLoadFailed) {
        router.replace(targetPath);
    }
});

