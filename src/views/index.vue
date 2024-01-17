<template>
  <div class="login">
    <Row
      type="flex"
      justify="center"
      align="middle"
      @keydown.enter.native="submitLogin"
      style="height: 100%"
    >
      <Col class="layout" style="width: 400px">
        <div>
          <Header />
          <Row v-if="!socialLogining">
            <Tabs v-model="tabName" v-show="false">
              <TabPane
                :label="$t('usernameLogin')"
                name="username"
                icon="md-person"
              >
                <Form
                  ref="usernameLoginForm"
                  :model="form"
                  :rules="rules"
                  class="form"
                  v-if="tabName == 'username'"
                >
                  <FormItem prop="username">
                    <Input
                      v-model="form.username"
                      prefix="ios-contact"
                      size="large"
                      clearable
                      placeholder="账号/邮箱/手机号"
                      autocomplete="off"
                    />
                  </FormItem>
                  <FormItem prop="password">
                    <Input
                      type="password"
                      v-model="form.password"
                      prefix="ios-lock"
                      size="large"
                      password
                      placeholder="请输入密码"
                      autocomplete="off"
                    />
                  </FormItem>
                  <FormItem prop="imgCode">
                    <Row
                      type="flex"
                      justify="space-between"
                      style="align-items: center; overflow: hidden"
                    >
                      <Input
                        v-model="form.imgCode"
                        size="large"
                        clearable
                        placeholder="请输入图片验证码"
                        :maxlength="10"
                        class="input-verify"
                      />
                      <div
                        class="code-image"
                        style="position: relative; font-size: 12px"
                      >
                        <Spin v-if="loadingCaptcha" fix></Spin>
                        <img
                          :src="captchaImg"
                          @click="getCaptchaImg"
                          alt="加载验证码失败"
                          style="width: 110px; cursor: pointer; display: block"
                        />
                      </div>
                    </Row>
                  </FormItem>
                </Form>
              </TabPane>
              <TabPane
                :label="$t('mobileLogin')"
                name="mobile"
                icon="ios-phone-portrait"
              >
                <Form
                  ref="mobileLoginForm"
                  :model="form"
                  :rules="rules"
                  class="form"
                  v-if="tabName == 'mobile'"
                >
                  <FormItem prop="mobile">
                    <Input
                      v-model="form.mobile"
                      prefix="ios-phone-portrait"
                      size="large"
                      clearable
                      placeholder="请输入手机号"
                    />
                  </FormItem>
                  <FormItem prop="code" :error="errorCode">
                    <Row type="flex" justify="space-between">
                      <Input
                        v-model="form.code"
                        prefix="ios-mail-outline"
                        size="large"
                        clearable
                        placeholder="请输入短信验证码"
                        :maxlength="6"
                        class="input-verify"
                      />
                      <CountDownButton
                        ref="countDown"
                        @on-click="sendSmsCode"
                        :autoCountDown="false"
                        size="large"
                        :loading="sending"
                        :text="getSms"
                      />
                    </Row>
                  </FormItem>
                </Form>
              </TabPane>
            </Tabs>
            <Form
              ref="usernameLoginForm"
              :model="form"
              :rules="rules"
              class="form"
              v-if="tabName == 'username'"
            >
              <FormItem prop="username">
                <Input
                  v-model="form.username"
                  prefix="ios-contact"
                  size="large"
                  clearable
                  placeholder="账号/邮箱/手机号"
                  autocomplete="off"
                />
              </FormItem>
              <FormItem prop="password">
                <Input
                  type="password"
                  v-model="form.password"
                  prefix="ios-lock"
                  size="large"
                  password
                  placeholder="请输入密码"
                  autocomplete="off"
                />
              </FormItem>
              <FormItem prop="imgCode">
                <Row
                  type="flex"
                  justify="space-between"
                  style="align-items: center; overflow: hidden"
                >
                  <Input
                    v-model="form.imgCode"
                    size="large"
                    clearable
                    placeholder="请输入图片验证码"
                    :maxlength="10"
                    class="input-verify"
                  />
                  <div
                    class="code-image"
                    style="position: relative; font-size: 12px"
                  >
                    <Spin v-if="loadingCaptcha" fix></Spin>
                    <img
                      :src="captchaImg"
                      @click="getCaptchaImg"
                      alt="加载验证码失败"
                      style="width: 110px; cursor: pointer; display: block"
                    />
                  </div>
                </Row>
              </FormItem>
            </Form>
            <Row type="flex" justify="space-between" align="middle">
              <Checkbox v-model="saveLogin" size="large">{{
                $t("autoLogin")
              }}</Checkbox>
              <Dropdown trigger="click" @on-click="handleDropDown">
                <a class="forget-pass">{{ $t("forgetPass") }}</a>
                <DropdownMenu slot="list">
                  <DropdownItem name="test">体验测试账号</DropdownItem>
                  <DropdownItem name="resetByMobile"
                    >使用手机号重置密码(付费)</DropdownItem
                  >
                  <DropdownItem name="resetByEmail"
                    >使用邮箱重置密码(付费)</DropdownItem
                  >
                </DropdownMenu>
              </Dropdown>
            </Row>
            <Row>
              <Button
                class="login-btn"
                type="primary"
                size="large"
                :loading="loading"
                @click="submitLogin"
                long
              >
                <span v-if="!loading">{{ $t("login") }}</span>
                <span v-else>{{ $t("logining") }}</span>
              </Button>
            </Row>
            <Row
              v-show="false"
              type="flex"
              justify="space-between"
              class="other-login"
            >
              <div class="other-way icons">
                {{ $t("otherLogin") }}
                <div class="other-icon" @click="toGithubLogin">
                  <icon scale="1.3" name="brands/github"></icon>
                </div>
                <div class="other-icon" @click="toQQLogin">
                  <icon scale="1.2" name="brands/qq"></icon>
                </div>
                <div class="other-icon" @click="toWeixinLogin">
                  <icon scale="1.3" name="brands/weixin"></icon>
                </div>
                <div class="other-icon" @click="toWeiboLogin">
                  <icon scale="1.3" name="brands/weibo"></icon>
                </div>
              </div>
              <router-link to="/regist">
                <a class="forget-pass">{{ $t("regist") }}</a>
              </router-link>
            </Row>
          </Row>
          <div v-if="socialLogining">
            <RectLoading />
          </div>
        </div>
        <!-- <Footer /> -->
      </Col>
      <!-- <LangSwitch /> -->
    </Row>
  </div>
</template>

<script>
import {
  getToken,
  login,
  userInfo,
  githubLogin,
  qqLogin,
  weiboLogin,
  wechatLogin,
  getJWT,
  sendLoginSms,
  smsLogin,
  initCaptcha,
  drawCodeImage,
  getOtherSet,
  getNotice,
} from "@/api/index";
import { validateMobile } from "@/libs/validate";
import Cookies from "js-cookie";
import Header from "@/views/main-components/header";
import Footer from "@/views/main-components/footer";
import LangSwitch from "@/views/main-components/lang-switch";
import RectLoading from "@/views/main-components/rect-loading";
import CountDownButton from "@/views/my-components/xboot/count-down-button";
import util from "@/libs/util.js";
export default {
  components: {
    CountDownButton,
    RectLoading,
    LangSwitch,
    Header,
    Footer,
  },
  data() {
    return {
      captchaId: "",
      captchaImg: "",
      loadingCaptcha: true,
      socialLogining: true,
      error: false,
      tabName: "username",
      saveLogin: true,
      getSms: "获取验证码",
      loading: false,
      sending: false,
      errorCode: "",
      form: {
        username: "",
        password: "123456",
        mobile: "",
        code: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "账号不能为空",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur",
          },
        ],
        imgCode: [
          {
            required: true,
            message: "验证码不能为空",
            trigger: "blur",
          },
        ],
        mobile: [
          {
            required: true,
            message: "手机号不能为空",
            trigger: "blur",
          },
          {
            validator: validateMobile,
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    getCaptchaImg() {
      this.loadingCaptcha = true;
      initCaptcha().then((res) => {
        this.loadingCaptcha = false;
        if (res.success) {
          this.captchaId = res.result;
          this.captchaImg = drawCodeImage + this.captchaId;
        }
      });
    },
    sendSmsCode() {
      this.$refs.mobileLoginForm.validate((valid) => {
        if (valid) {
          this.sending = true;
          this.getSms = "发送中";
          sendLoginSms(this.form.mobile).then((res) => {
            this.getSms = "获取验证码";
            this.sending = false;
            if (res.success) {
              this.$Message.success("发送短信验证码成功");
              // 开始倒计时
              this.$refs.countDown.startCountDown();
            }
          });
        }
      });
    },
    afterLogin(res) {
      let accessToken = res.result;
      let endDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 - 1);
      this.setStore("accessToken", accessToken);
      getOtherSet().then((res) => {
        if (res.result) {
          let domain = res.result.ssoDomain;
          Cookies.set("accessToken", accessToken, {
            domain: domain,
            expires: endDate,
          });
          Cookies.set("popFlag", 1, {
            expires: endDate,
          });
        }
      });

      // 获取用户信息
      userInfo().then((res) => {
        var hrefStr = location.href.split("?")[1];
        var queryStr = "";
        var queryType = '';
        if (hrefStr.indexOf("&") != -1) {
          var objQuery = this.getQuery()
          queryStr = objQuery.query? objQuery.query : '';
          queryType = objQuery.type? objQuery.type : '';

          // queryStr = hrefStr.split("&")[1].split("=")[1];
          // queryType = hrefStr.split("&")[2] ? hrefStr.split("&")[2].split("=")[1] : '';
        }
        if (res.success) {
          // 避免超过大小限制
          delete res.result.permissions;
          let roles = [];
          res.result.roles.forEach((e) => {
            roles.push(e.name);
          });
          this.setStore("roles", roles);
          this.setStore("saveLogin", this.saveLogin);
          // 当天12点清除缓存
          Cookies.set("userInfo", JSON.stringify(res.result), {
            expires: endDate,
          });

          this.setStore("userInfo", JSON.stringify(res.result));
          this.$store.commit("setAvatarPath", res.result.avatar);
          this.$store.commit("setAdded", false);
          // 加载菜单
          util.initRouter(this, queryStr, queryType);
          if (this.$route.query.from) {
            this.$router.push({
              name: "home_index",
              query: {
                from: this.$route.query.from
              }
            });
          } else {
            this.$router.push({
              name: "home_index",
            });
          }
        } else {
          this.loading = false;
        }
      });
    },
    submitLogin() {
      if (this.tabName == "username") {
        this.$refs.usernameLoginForm.validate((valid) => {
          if (valid) {
            this.loading = true;
            login({
              username: this.form.username,
              password: this.form.password,
              code: this.form.imgCode,
              captchaId: this.captchaId,
              saveLogin: this.saveLogin,
            }).then((res) => {
              if (res.success) {
                this.afterLogin(res);
              } else {
                this.loading = false;
                this.getCaptchaImg();
              }
            });
          }
        });
      } else if (this.tabName == "mobile") {
        this.$refs.mobileLoginForm.validate((valid) => {
          if (valid) {
            if (this.form.code == "") {
              this.errorCode = "验证码不能为空";
              return;
            } else {
              this.errorCode = "";
            }
            this.loading = true;
            this.form.saveLogin = this.saveLogin;
            smsLogin(this.form).then((res) => {
              if (res.success) {
                this.afterLogin(res);
              } else {
                this.loading = false;
              }
            });
          }
        });
      }
    },
    toGithubLogin() {
      this.socialLogining = true;
      githubLogin().then((res) => {
        if (res.success) {
          window.location.href = res.result;
        } else {
          this.socialLogining = false;
        }
      });
    },
    toQQLogin() {
      this.socialLogining = true;
      qqLogin().then((res) => {
        if (res.success) {
          window.location.href = res.result;
        } else {
          this.socialLogining = false;
        }
      });
    },
    toWeiboLogin() {
      this.socialLogining = true;
      weiboLogin().then((res) => {
        if (res.success) {
          window.location.href = res.result;
        } else {
          this.socialLogining = false;
        }
      });
    },
    toWeixinLogin() {
      this.socialLogining = true;
      wechatLogin().then((res) => {
        if (res.success) {
          window.location.href = res.result;
        } else {
          this.socialLogining = false;
        }
      });
    },
    relatedLogin() {
      let q = this.$route.query;
      let error = q.error;
      if (error !== "" && error !== undefined) {
        this.$Message.error(error);
      }
      let related = q.related;
      let JWTKey = q.JWTKey;
      if (related && related == "1" && JWTKey) {
        getJWT({
          JWTKey: JWTKey,
        }).then((res) => {
          if (res.success) {
            this.socialLogining = true;
            let accessToken = res.result;
            this.setStore("accessToken", accessToken);
            getOtherSet().then((res) => {
              if (res.result) {
                let domain = res.result.ssoDomain;
                Cookies.set("accessToken", accessToken, {
                  domain: domain,
                  expires: 7,
                });
              }
            });
            // 获取用户信息
            userInfo().then((res) => {
              if (res.success) {
                // 避免超过大小限制
                delete res.result.permissions;
                let roles = [];
                res.result.roles.forEach((e) => {
                  roles.push(e.name);
                });
                this.setStore("roles", roles);
                // 当天12点清除缓存
                Cookies.set("userInfo", JSON.stringify(res.result), {
                  expires: 7,
                });
                this.setStore("userInfo", JSON.stringify(res.result));
                this.$store.commit("setAvatarPath", res.result.avatar);
                // 加载菜单11
                util.initRouter(this);
                this.$router.push({
                  name: "home_index",
                });
              } else {
                this.socialLogining = false;
                this.$Message.error("获取登录用户信息失败");
              }
            });
          } else {
            this.socialLogining = false;
            this.$Message.error("使用第三方账号登录失败");
          }
        });
      } else {
        this.socialLogining = false;
      }
    },
    handleDropDown(v) {
      if (v == "test") {
        this.test();
      } else if (v == "resetByMobile") {
        this.$router.push({
          name: "reset",
        });
      } else if (v == "resetByEmail") {
        this.$router.push({
          name: "reset",
          query: {
            type: "1",
          },
        });
      }
    },
    showNotice() {
      getNotice().then((res) => {
        if (res.success) {
          if (!res.result) {
            return;
          }
          let data = res.result;
          if (
            data.open &&
            (data.title || data.content) &&
            data.position == "LOGIN"
          ) {
            this.$Notice.info({
              title: data.title,
              desc: data.content,
              duration: data.duration,
            });
          }
        }
      });
    },
    test() {
      this.$Notice.info({
        title: "测试体验账号",
        desc: "账号：test或test2<br>密码：123456",
      });
    },
    indexLogin() {
      console.log("indexLogin")
      var hrefStr = location.href.split("?")[1];
      var objQuery = this.getQuery()
      var sessionId = objQuery.sessionId || '';
      console.log(objQuery)
      if (sessionId) {
        getToken({
          sessionId,
        }).then((res) => {
          if (res.success) {
            var aprilList = localStorage.getItem("aprilList")
              ? JSON.parse(localStorage.getItem("aprilList"))
              : [];
            var aprilFlag = localStorage.getItem("aprilFlag")
              ? localStorage.getItem("aprilFlag")
              : "";
            var marketSourceFlag = localStorage.getItem("marketSourceFlag")
                ? localStorage.getItem("marketSourceFlag")
                : "";
            localStorage.clear();
            localStorage.setItem("marketSourceFlag", marketSourceFlag);
            localStorage.setItem("aprilList", JSON.stringify(aprilList));
            localStorage.setItem("aprilFlag", aprilFlag);
            localStorage.setItem("sessionId", sessionId);
            this.afterLogin(res);
          } else {
            console.log(res);
            this.$Modal.info({
              title: "提醒",
              content: "用户已失效，点击确认跳转到官网首页。",
              onOk: () => {
                location.href = "https://www.chinabidding.cn/";
              },
            });
          }
        });
      } else {
        this.$router.push({
          name: "login",
        });
      }
    },
    getQuery() {
      let queryList = location.href.split("?")[1]
      let query = {};
      if (queryList) {
        queryList = queryList.replace(/&/g,'&@').split('&@')
        queryList.forEach(function (item) {
          var arr = item.replace(/=/g,'=@').split('=@')
          query[arr[0]] = arr[1];
        })
      }
      return query;
    }
  },
  mounted() {
    this.indexLogin();
    // this.showNotice();
    // this.relatedLogin();
    // this.getCaptchaImg();
  },
};
</script>

<style lang="less">
@import "./login.less";
</style>