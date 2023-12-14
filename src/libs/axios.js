import axios from 'axios';
import {
    baseURL
} from '@/api/baseURL'

axios.defaults.baseURL = baseURL;

const CancelToken = axios.CancelToken;



import {
    getStore,
    setStore
} from './storage';
import {
    router
} from '../router/index';
import store from "../store/index"

import {
    Message,
    Modal,
    Notice
} from 'view-design';
import Cookies from 'js-cookie';
// 统一请求路径前缀
let base = '/studio';
// 超时设定
axios.defaults.timeout = 15000;
axios.interceptors.request.use(config => {
    return config;
}, err => {
    Message.error('请求超时');
    return Promise.resolve(err);
});

// http response 拦截器
axios.interceptors.response.use(response => {
    const data = response.data;
    // 根据返回的code值来做不同的处理(和后端约定)
    switch (data.code) {
        case 401:
            // 未登录 清除已登录状态
            Cookies.set('userInfo', '');
            Cookies.set('accessToken', '');
            Cookies.set('locking', '');
            setStore('accessToken', '');
            if (router.history.current.name != "login") {
                if (data.message !== null) {
                    Message.error(data.message);
                } else {
                    Message.error("未知错误，请重新登录");
                }
                router.push('/login');
            }
            break;
        case 402:
            // 账号已被禁用
            Cookies.set('userInfo', '');
            Cookies.set('accessToken', '');
            Cookies.set('locking', '');
            setStore('accessToken', '');
            Modal.warning({
                title: "提示",
                content: "您的账号已被禁用，请联系客服人员",
                onOk: () => {
                    router.push('/login');
                }
            });
            break;
        case 403:
            // 没有权限
            if (data.message !== null) {
                Message.error(data.message);
            } else {
                Message.error("未知错误");
            }
            break;
        case 404:
            // 新网站对接单点登录
            Cookies.set('userInfo', '');
            Cookies.set('accessToken', '');
            Cookies.set('locking', '');
            setStore('accessToken', '');
                Modal.warning({
                    title: "提示",
                    content: data.message == null?"未知错误":data.message,
                    onOk: () => {
                        router.push('/login');
                    }
                });

           
            break;
        case 500:
            // 错误
            if (data.message !== null) {
                Message.error(data.message);
            } else {
                Message.error("未知错误");
            }
            break;
        case 6015:
            let url = window.location.href;
            let n=url.indexOf("/#/");
            let tem = url.substring(n+3);
            if(tem == 'home'){
                return data;
            } else {
                // 限流，操作太频繁
                store.commit('setBusyFlag',true);
                store.commit("initBusyTimeout")
            }
            // 限流，操作太频繁
            // store.commit('setBusyFlag',true);
            // store.commit("initBusyTimeout")
            break;
        default:
            return data;
    }

    return data;
}, (err) => {
    // 返回状态码不为200时候的错误处理
    // Message.error(err.toString());
    return Promise.resolve(err);
});


export const getRequest = (url, params) => {
    if (!getStore('accessToken') && Cookies.get("accessToken")) {
        setStore('accessToken', Cookies.get("accessToken"));
    }
    let accessToken = getStore('accessToken');

    return axios({
        method: 'get',
        url: `${base}${url}`,
        cancelToken: new CancelToken(function executor(c) {
            Vue.prototype.$httpRequestList.push(c) //存储cancle
        }),
        params: params,
        headers: {
            'accessToken': accessToken
        }
    })
};
export const postRequest = (url, params) => {
    let accessToken = getStore("accessToken");
    return axios({
        method: 'post',
        url: `${base}${url}`,
        cancelToken: new CancelToken(function executor(c) {
            Vue.prototype.$httpRequestList.push(c) //存储cancle
        }),
        data: params,        
        transformRequest: [function (data) {
            let ret = '';
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
            }
            ret = ret.substring(0, ret.length - 1);
            return ret;
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'accessToken': accessToken
        }
    });
};

export const deleteRequest = (url, params) => {
    if (!getStore('accessToken') && Cookies.get("accessToken")) {
        setStore('accessToken', Cookies.get("accessToken"));
    }
    let accessToken = getStore('accessToken');
    return axios({
        method: 'delete',
        url: `${base}${url}`,
        params: params,
        headers: {
            'accessToken': accessToken
        }
    });
};


export const putRequest = (url, params) => {
    let accessToken = getStore("accessToken");
    return axios({
        method: 'put',
        url: `${base}${url}`,
        data: params,
        transformRequest: [function (data) {
            let ret = '';
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
            }
            ret = ret.substring(0, ret.length - 1);
            return ret;
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'accessToken': accessToken
        }
    });
};

export const postBodyRequest = (url, params) => {
    if (!getStore('accessToken') && Cookies.get("accessToken")) {
        setStore('accessToken', Cookies.get("accessToken"));
    }
    let accessToken = getStore('accessToken');
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params,
        headers: {
            'accessToken': accessToken
        }
    });
};

export const getImgRequest = (url, params) => {
    if (!getStore('accessToken') && Cookies.get("accessToken")) {
        setStore('accessToken', Cookies.get("accessToken"));
    }
    let accessToken = getStore('accessToken');
    return axios({
        method: 'get',
        url: `${base}${url}`,
        data: params,
        headers: {
            'accessToken': accessToken
        },
        responseType: 'arraybuffer'
    });
}


// axios.get('url', {
//     params: {
//         key: this.key //这里是请求接口书需要传的数据
//     },
//     responseType: 'arraybuffer' //这里是声明期望返回的数据类型
// }).then(response => { //这里的第一次处理后台返回来的二进制留数据 转化为base64
//     //这里的data数据是后台返回来的，这里的key是params中的键值（byte）
//     return 'data:image/png;base64,' + btoa(
//         new Uint8Array(response.data).reduce((data, key) => data + String.fromCharCode(key), '')
//     )
// }).then(data => { //这一次箭头函数是依赖于第一次.then函数处理的data值
//     this.imgsrc = data
// })

export const postFileRequest = (url, params) => {
    if (!getStore('accessToken') && Cookies.get("accessToken")) {
        setStore('accessToken', Cookies.get("accessToken"));
    }
    let accessToken = getStore('accessToken');
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params,
        headers: {
            'accessToken': accessToken,
            'Content-Type': 'application/json'
        },
        responseType: 'blob'
    });
};

/**
 * 无需token验证的GET请求 避免旧token过期导致请求失败
 * @param {*} url 
 * @param {*} params 
 */
export const getNoAuthRequest = (url, params) => {
    return axios({
        method: 'get',
        url: `${base}${url}`,
        params: params
    });
};

export const postNoAuthRequest = (url, params) => {
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params,
        transformRequest: [function (data) {
            let ret = '';
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
            }
            ret = ret.substring(0, ret.length - 1);
            return ret;
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
};

// 清空cancelToken中的cancel函数
export const clearHttpRequestingList =  function () {
    if (Vue.prototype.$httpRequestList.length > 0) {
      Vue.prototype.$httpRequestList.forEach((item) => {
        item()
      })
      Vue.prototype.$httpRequestList = []
    }
  }
