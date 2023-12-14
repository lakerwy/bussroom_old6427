import Cookies from 'js-cookie';

const user = {
    state: {
        nickname: "",
        userInfo:{}
    },
    mutations: {
        logout() {
            Cookies.remove('userInfo');
            // 清空打开的页面等数据
            localStorage.clear();
        },
        logout2() {
            Cookies.remove('userInfo');
            Cookies.remove('accessToken');
            // 清空打开的页面等数据
            localStorage.clear();
            location.reload();
        },
        getNickName(state) {
            let v = JSON.parse(Cookies.get("userInfo"));
            // 转换null为""
            for (let attr in v) {
                if (v[attr] == null) {
                    v[attr] = "";
                }
            }
            let str = JSON.stringify(v);
            state.userInfo = JSON.parse(str);
            state.nickname = state.userInfo.nickname;
        }
    }
};

export default user;