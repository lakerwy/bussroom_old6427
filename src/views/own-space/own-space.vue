<template>
  <div class="own-space">
    <Modal v-model="codeFlag" title="扫一扫下载app">
      <div style="text-align:center;">
        <img src="@/assets/app.png" alt="">
      </div>
    </Modal>

    <Modal v-model="wechatFlag" title="扫一扫绑定微信" @on-cancel="closeWechat" @on-ok="closeWechat">
      <div style="text-align:center;">
        <img :src="wechatSrc" alt="扫一扫绑定微信">
      </div>
    </Modal>


    <Card class="own-space-new">
      <div class="own-wrap">
        <div style="width:240px">
          <Menu :active-name="activeName" theme="light" @on-select="changeMenu">
            <MenuItem name="基本信息">基本信息</MenuItem>
            <MenuItem name="安全设置">安全设置</MenuItem>
            <MenuItem name="第三方账号绑定">第三方账号绑定</MenuItem>
            <MenuItem name="企业采钻" v-if="managerFlag" to="https://jfsc.chinabidding.cn/front/index.html#/home" target="_blank">企业采钻</MenuItem>
            <!-- <MenuItem name="我的订单" :to="{name:'special',params:{flag:3}}">我的订单</MenuItem> -->
          </Menu>
        </div>
        <div style="padding: 8px 40px;width:100%">
          <div class="title">{{currMenu}}</div>
          <div>
            <div v-show="currMenu=='基本信息'" id="mainInfo">
              <Form ref="userForm" :model="userForm" :rules="rules" :label-width="90" label-position="left">
                <FormItem label="用户头像：">
                  <upload-pic-thumb v-model="userForm.avatar" :multiple="false"></upload-pic-thumb>
                </FormItem>
                <!-- <FormItem label="用户名：">
                  <span>{{ userForm.username }}</span>
                </FormItem> -->
                <FormItem label="姓名：" prop="nickname">
                  <Input v-model="userForm.nickname" style="width: 250px" />
                </FormItem>

                <!-- <FormItem label="昵称：" prop="nickName">
                  <Input v-model="userForm.nickName" style="width: 250px" />
                </FormItem> -->
                <FormItem label="性别：">
                  <RadioGroup v-model="userForm.sex" size="small">
                    <Radio v-for="(item, i) in dictSex" :key="i" :label="item.value">{{item.title}}</Radio>
                  </RadioGroup>
                </FormItem>
                <FormItem label="个人简介：" v-show="false" prop="description">
                  <Input v-model="userForm.description" type="textarea" style="width: 250px"
                    :autosize="{minRows: 3,maxRows: 5}" placeholder="个人简介"></Input>
                </FormItem>
                <FormItem label="国家/地区：" v-show="false">
                  <Select v-model="area" style="width: 250px">
                    <Option :value="86">中国</Option>
                  </Select>
                </FormItem>
                <FormItem label="所在省市：" v-show="false">
                  <al-cascader v-model="userForm.addressArray" @on-change="changeAddress" data-type="code" level="2"
                    style="width:250px" />
                </FormItem>
                <FormItem label="街道地址：" prop="street" v-show="false">
                  <Input v-model="userForm.street" style="width: 250px" />
                </FormItem>
                <FormItem label="所属部门：">
                  <span>{{ userForm.department }}</span>
                </FormItem>
                <FormItem label="用户类型：">
                  <span>{{ userForm.typeTxt }}</span>
                </FormItem>
                <FormItem label="状态：">
                  <Badge :status="userForm.status == 0?`success`:'error'" :text="userForm.status == 0?`启用`:'禁用'">
                  </Badge>
                </FormItem>
                <FormItem label="注册时间：" v-show="false">
                  <span>{{ userForm.createTime }}</span>
                </FormItem>
                <FormItem>
                  <Button type="primary" style="width: 100px;margin-left:20px" :loading="saveLoading"
                    @click="saveEdit">保存</Button>
                </FormItem>
              </Form>
            </div>
            <div v-show="currMenu=='安全设置'" class="safe">
              <div class="item">
                <div>
                  <div class="title">账户密码 <a @click="changePass" style="fontWeight:normal">修改</a></div>
                  <div v-if="userForm.passStrength" class="desc">
                    当前密码强度：
                    <span v-if="userForm.passStrength=='弱'" class="red">{{userForm.passStrength}}</span>
                    <span v-if="userForm.passStrength=='中'" class="middle">{{userForm.passStrength}}</span>
                    <span v-if="userForm.passStrength=='强'" class="green">{{userForm.passStrength}}</span>
                    
                  </div>
                </div>
                <div>
                </div>
              </div>
              <!-- test -->
              <div class="item" v-if="false">
                <div>
                  <div class="title">绑定手机</div>
                  <div class="desc">
                    <span v-if="userForm.mobile">已绑定手机</span>
                    <!-- ：{{userForm.mobile}} -->
                    <span v-else>未绑定手机号</span>
                    <a @click="showChangeMobile">修改</a>
                  </div>
                </div>
                <div>
                  
                </div>
              </div>
              <div class="item">
                <div>
                  <div class="title">绑定邮箱</div>
                  <div class="desc">
                    <span v-if="userForm.email">已绑定邮箱</span>
                    <!-- ：{{userForm.email}} -->
                    <span v-else>未绑定邮箱</span>
                    <a @click="showChangeEmail">修改</a>
                  </div>
                </div>
                <div>
                  
                </div>
              </div>
              <div class="item" v-show="false">
                <div>
                  <div class="title">密保问题</div>
                  <div class="desc">未设置密保问题，密保问题可有效保护账户安全</div>
                </div>
                <div>
                  <a>暂不支持设置</a>
                </div>
              </div>
            </div>
            <div  v-show="currMenu=='第三方账号绑定'" class="safe">
              <div class="item" v-if="false">
                <div style="display:flex;align-items:center">
                  <Icon type="md-appstore" size="42" color="#181617" style="margin-right: 16px;" />
                  <div>
                    <div class="title">APP</div>
                    <div class="desc">
                      <!-- test -->
                      <span v-if="userForm.app">已绑定app账号：{{userForm.app}}</span>
                      <span v-else>账号</span>
                      <a v-if="!userForm.app" @click="bindApp">立即绑定</a>
                  <a v-else @click="bindApp">解除绑定</a>
                    </div>
                  </div>
                </div>
                <div>
                  <!-- toRelateGithub() unRelateGithub() -->
                  
                </div>
              </div>
              <div class="item" v-show="false">
                <div style="display:flex;align-items:center">
                  <icon name="brands/qq" scale="2.5" style="margin: 0 16px 0 6px;color:#2eabff"></icon>
                  <div>
                    <div class="title">QQ</div>
                    <div class="desc">
                      <span v-if="qq.related">已绑定QQ账号：{{qq.username}}</span>
                      <span v-else>当前未绑定QQ账号</span>
                      <a v-if="!qq.related" @click="toRelateQQ()">立即绑定</a>
                  <a v-else @click="unRelateQQ()">解除绑定</a>
                    </div>
                  </div>
                </div>
                <div>
                  
                </div>
              </div>
              <div class="item" v-show="false">
                <div style="display:flex;align-items:center">
                  <icon name="brands/weibo" scale="2.5" style="margin: 0 16px 0 2px;color:#e22429"></icon>
                  <div>
                    <div class="title">微博</div>
                    <div class="desc">
                      <span v-if="weibo.related">已绑定微博账号：{{weibo.username}}</span>
                      <span v-else>当前未绑定微博账号</span>
                    </div>
                  </div>
                </div>
                <div>
                  <a v-if="!weibo.related" @click="toRelateWeibo()">立即绑定</a>
                  <a v-else @click="unRelateWeibo()">解除绑定</a>
                </div>
              </div>
              <div class="item">
                <div style="display:flex;align-items:center">
                  <icon name="brands/weixin" scale="2.5" style="margin: 0 16px 0 2px;color:#60c126"></icon>
                  <div>
                    <div class="title">微信</div>
                    <div class="desc">
                      <span v-if="userForm.wechat">已绑定微信账号</span>
                      <span v-else>当前未绑定微信账号</span>
                      <a v-if="!userForm.wechat" @click="bindWechat">立即绑定</a>
                  <a v-else @click="unbindWechat">解除绑定</a>
                    </div>
                  </div>
                </div>
                <div>
                  <!-- toRelateWechat()unRelateWechat() -->
                  
                </div>
              </div>
              <Spin fix v-if="jumping">跳转中...</Spin>
            </div>
            <div v-show="currMenu=='我的订单'" class="safe">
              我的订单
              <!-- <div class="item">
                <div>
                  <div class="title">系统消息</div>
                  <div class="desc">系统消息将以站内信的形式通知</div>
                </div>
                <div>
                  <i-switch v-model="messageOpen" @on-change="changeMessage" :true-value="1" :false-value="0">
                    <span slot="open">开</span>
                    <span slot="close">关</span>
                  </i-switch>
                </div>
              </div> -->
              <!-- <Table :data="orderList" :columns="columns"></Table> -->
            </div>
          </div>
        </div>
      </div>
    </Card>

    <Modal title="修改手机号" v-model="editMobileVisible" :closable="false" :mask-closable="false" :width="500">
      <Form ref="mobileEditForm" :model="mobileEditForm" :label-width="70" :rules="mobileEditValidate">
        <FormItem label="手机号" prop="mobile">
          <Input v-model="mobileEditForm.mobile" @on-change="hasChangePhone" placeholder="请输入新手机号" />
        </FormItem>
        <FormItem label="验证码" prop="code" :error="codeError">
          <Row type="flex" justify="space-between">
            <Input v-model="mobileEditForm.code" placeholder="请输入您收到的短信验证码" style="width:280px;" />
            <CountDownButton ref="countDownMobile" @on-click="sendEditMobileCode" :disabled="canSendMobileCode"
              :autoCountDown="false" :loading="sending" :text="getSms" />
          </Row>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="text" @click="cancelInputCodeBox">取消</Button>
        <Button type="primary" :loading="checkCodeLoading" @click="submitEditMobile">提交</Button>
      </div>
    </Modal>

    <Modal title="修改邮箱" v-model="editEmailVisible" :closable="false" :mask-closable="false" :width="500">
      <Form ref="emailEditForm" :model="emailEditForm" :label-width="100" :rules="emailEditValidate">
        <FormItem label="新邮箱地址" prop="email">
          <Input v-model="emailEditForm.email" @on-change="hasChangeEmail" placeholder="请输入新邮箱地址"></Input>
        </FormItem>
        <FormItem label="验证码" prop="code" :error="codeError">
          <Row type="flex" justify="space-between">
            <Input v-model="emailEditForm.code" placeholder="请输入您收到的邮件中的验证码" style="width:250px;" />
            <CountDownButton ref="countDownEmail" @on-click="sendVerifyEmail" :disabled="canSendEditEmail"
              :autoCountDown="false" :loading="sending" :text="getSms" />
          </Row>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="text" @click="cancelEditEmail">取消</Button>
        <Button type="primary" :loading="editEmailLoading" @click="submitEditEmail">提交</Button>
      </div>
    </Modal>

    <check-password ref="checkPassMobile" @on-success="checkSuccessMobile" />

    <check-password ref="checkPassEmail" @on-success="checkSuccessEmail" />
  </div>
</template>

<script>
  import {
    userInfo,
    userInfoEdit,
    relatedInfo,
    unRelate,
    githubLogin,
    qqLogin,
    weiboLogin,
    wechatLogin,
    sendEditEmail,
    editEmail,
    sendEditMobileSms,
    changeMobile,
    toBindWechat,
    unbindWechat,
    getAllOrder,
    getOtherSet
  } from "@/api/index";
  import {
    validateMobile
  } from "@/libs/validate";
  import CountDownButton from "@/views/my-components/xboot/count-down-button";
  import uploadPicThumb from "@/views/my-components/xboot/upload-pic-thumb";
  import checkPassword from "@/views/my-components/xboot/check-password";
  import checkEmpty from "@/libs/validate.js";
  import Cookies from "js-cookie";
  import messageVue from "../message/message.vue";
  export default {
    components: {
      uploadPicThumb,
      checkPassword,
      CountDownButton
    },
    name: "ownspace_index",
    data() {

      const checkNickname = (rule, value, callback) => {
        // var reg = /^[^ ]+$/;
        if (value.indexOf(" ") > -1) {
          callback(new Error('不能包含空格'));
        } else if (value.length >= 20) {
          callback(new Error('姓名长度小于20'));
        } else {
          callback();
        }
      };

      return {
        timeId: '',
        rules: {
          nickname: [{
              required: true,
              message: "姓名不能为空",
              trigger: "blur"
            },
            {
              validator: checkNickname,
              trigger: "blur"
            }
          ]
        },
        codeFlag: false,
        wechatFlag: false,
        activeName: "基本信息",
        area: 86,
        messageOpen: 1,
        userForm: {
          id: "",
          avatar: "",
          username: "",
          sex: "",
          mobile: "",
          email: "",
          status: "",
          type: "",
          typeTxt: "",
          address: "",
          addressArray: []
        },
        mobileEditForm: {
          mobile: "",
          code: ""
        },
        emailEditForm: {
          email: "",
          code: ""
        },
        codeError: "",
        initPhone: "",
        initEmail: "",
        saveLoading: false,
        sending: false,
        getSms: "获取验证码",
        canSendMobileCode: false, // 是否可点获取验证码
        checkCodeLoading: false,
        checkPassLoading: false,
        editEmailLoading: false,
        mobileEditValidate: {
          mobile: [{
              required: true,
              message: "请输入手机号码"
            },
            {
              validator: validateMobile
            }
          ]
        },
        emailEditValidate: {
          email: [{
              required: true,
              message: "请输入邮箱地址"
            },
            {
              type: "email",
              message: "邮箱格式不正确"
            }
          ]
        },
        editMobileVisible: false, // 显示填写验证码box
        editEmailVisible: false,
        canSendEditEmail: false,
        github: {
          related: false,
          id: "",
          username: ""
        },
        qq: {
          related: false,
          id: "",
          username: ""
        },
        weibo: {
          related: false,
          id: "",
          username: ""
        },
        wechat: {
          related: false,
          id: "",
          username: ""
        },
        jumping: false,
        currMenu: "基本信息",
        dictSex: [{
          value: "男",
          title: "男"
        }, {
          value: "女",
          title: "女"
        }],
        // orderList: [{
        //   id: "1234",
        //   name: "医疗专题",
        //   buyTime: "2020-08-04",
        //   price: "188",
        //   startTime: "2020-08-04",
        //   endTime: "2021-08-04",
        //   status: 1,
        // }],
        columns: [{
            type: "index",
            minWidth: 70,
            align: "center",
            title: "序号"
          },
          {
            title: "订单号",
            key: "id",
            minWidth: 200,
            align: "center",
          },
          {
            title: "产品名",
            key: "name",
            width: 100,
            align: "center"
          },
          {
            title: "购买时间",
            key: "buyTime",
            minWidth: 100,
            align: "center",
          },
          {
            title: "单价",
            key: "price",
            align: "center",
            minWidth: 100
          },
          {
            title: "服务开始时间",
            key: "startTime",
            align: "center",
            minWidth: 110
          },
          {
            title: "服务结束时间",
            key: "endTime",
            align: "center",
            minWidth: 110
          },
          {
            title: "订单状态",
            key: "status",
            width: 200,
            align: "center",
            render: (h, params) => {
              return h("div", [
                h("Badge", {
                  props: {
                    status: params.row.status == 1 ? "success" : "error"
                  }
                }),
                h("span", params.row.status == 1 ? "已付款" : "未付款")
              ]);
            }
          }
        ],
        orderList: [],
        managerFlag: ""
      };
    },
    methods: {
      bindApp() {
        this.$Modal.info({
          title: '提醒',
          content: '正在开发中，稍后开通。'
        })
      },
      unbindWechat() {
        // 微信解绑
        unbindWechat().then(res => {
          console.log(res)
          // userInfo()
          if (res.success) {
            this.$Message.success("解绑成功");
            this.updateUserInfo();
            this.userForm.wechat = res.result.wechat;
          }
        })
      },
      closeWechat() {
        // 取消绑定
        clearInterval(this.timeId)
      },
      bindWechat() {
        let that = this
        toBindWechat().then(res => {
          if (res.success) {
            var ticket = res.result.ticket;
            this.wechatSrc =
              "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=" + ticket;
            this.wechatFlag = true;
            this.getLinkFlag()
          }
        });
      },
      getLinkFlag() {
        // 定时获取是否绑定微信
        clearInterval(this.timeId)
        this.timeId = setInterval(() => {
          userInfo().then((res) => {
            if(res.code === 404){
              clearInterval(this.timeId)
            }
            if (res.result.wechat) {
              this.wechatFlag = false;
              this.$Message.success("绑定成功");
              this.updateUserInfo();
              this.userForm.wechat = res.result.wechat;
              clearInterval(this.timeId);
            }
          })
        }, 1000)
      },
      init() {
        userInfo().then(res => {
          if (res.success) {
            console.log(res);
            let endDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 - 1);
            // 避免超过大小限制
            delete res.result.permissions;
            Cookies.set("userInfo", JSON.stringify(res.result), {
              expires: endDate
            });
            this.setStore("userInfo", JSON.stringify(res.result));
            let userInfo = res.result;
            userInfo.addressArray = [];
            for (let attr in userInfo) {
              if (userInfo[attr] == null) {
                userInfo[attr] = "";
              }
            }

            this.userForm = userInfo;
            this.managerFlag = this.userForm.type === 1 ? true : false;
            console.log(this.managerFlag);
            this.initPhone = userInfo.mobile;
            this.mobileEditForm.mobile = "";
            this.initEmail = userInfo.email;
            this.emailEditForm.email = "";
            if (userInfo.address) {
              this.userForm.address = userInfo.address;
              this.userForm.addressArray = JSON.parse(userInfo.address);
            }
            if (this.userForm.type == 0) {
              this.userForm.typeTxt = "普通用户";
            } else if (this.userForm.type == 1) {
              this.userForm.typeTxt = "管理员";
            }
          }



        });
        // let userInfo = JSON.parse(str);

        let v = JSON.parse(window.localStorage.getItem('userInfo'));
        // 转换null为""
        for (let attr in v) {
          if (v[attr] == null) {
            v[attr] = "";
          }
        }
        relatedInfo(v.username).then(res => {
          if (res.success) {
            let r = res.result;
            this.github.related = r.github;
            this.github.id = r.githubId;
            this.github.username = r.githubUsername;
            this.qq.related = r.qq;
            this.qq.id = r.qqId;
            this.qq.username = r.qqUsername;
            this.weibo.related = r.weibo;
            this.weibo.id = r.weiboId;
            this.weibo.username = r.weiboUsername;
            this.wechat.related = r.wechat;
            this.wechat.id = r.wechatId;
            this.wechat.username = r.wechatUsername;
          } else {
            this.$Message.error("加载绑定第三方账号信息失败");
          }
        });
        let messageOpen = this.getStore("messageOpen");
        if (
          messageOpen != "" &&
          messageOpen != undefined &&
          messageOpen != null
        ) {
          this.messageOpen = Number(messageOpen);
        } else {
          this.setStore("messageOpen", 1);
        };
      },
      changePass() {
        this.$router.push({
          name: "change_pass"
        });
      },
      changeMenu(v) {
        this.currMenu = v;
      },
      toRelateGithub() {
        this.jumping = true;
        githubLogin().then(res => {
          if (res.success) {
            window.location.href = res.result;
          } else {
            this.jumping = false;
          }
        });
      },
      toRelateQQ() {
        this.jumping = true;
        qqLogin().then(res => {
          if (res.success) {
            window.location.href = res.result;
          } else {
            this.jumping = false;
          }
        });
      },
      toRelateWeibo() {
        this.jumping = true;
        weiboLogin().then(res => {
          if (res.success) {
            window.location.href = res.result;
          } else {
            this.jumping = false;
          }
        });
      },
      toRelateWechat() {
        this.jumping = true;
        wechatLogin().then(res => {
          if (res.success) {
            window.location.href = res.result;
          } else {
            this.jumping = false;
          }
        });
      },
      unRelateGithub() {
        this.$Modal.confirm({
          title: "确认解绑Github账号",
          content: "您确认要解除绑定 " + this.github.username + " ?",
          loading: true,
          onOk: () => {
            let params = {
              socialType: 0,
              ids: [this.github.id],
              usernames: this.userForm.username
            };
            unRelate(params).then(res => {
              this.$Modal.remove();
              if (res.success) {
                this.$Message.success("操作成功");
                this.github.related = false;
              }
            });
          }
        });
      },
      unRelateQQ() {
        this.$Modal.confirm({
          title: "确认解绑QQ账号",
          content: "您确认要解除绑定 " + this.qq.username + " ?",
          loading: true,
          onOk: () => {
            let params = {
              socialType: 1,
              ids: [this.qq.id],
              usernames: this.userForm.username
            };
            unRelate(params).then(res => {
              this.$Modal.remove();
              if (res.success) {
                this.$Message.success("操作成功");
                this.qq.related = false;
              }
            });
          }
        });
      },
      unRelateWeibo() {
        this.$Modal.confirm({
          title: "确认解绑微博账号",
          content: "您确认要解除绑定 " + this.weibo.username + " ?",
          loading: true,
          onOk: () => {
            let params = {
              socialType: 2,
              ids: [this.weibo.id],
              usernames: this.userForm.username
            };
            unRelate(params).then(res => {
              this.$Modal.remove();
              if (res.success) {
                this.$Message.success("操作成功");
                this.weibo.related = false;
              }
            });
          }
        });
      },
      unRelateWechat() {
        this.$Modal.confirm({
          title: "确认解绑微信账号",
          content: "您确认要解除绑定 " + this.wechat.username + " ?",
          loading: true,
          onOk: () => {
            let params = {
              socialType: 3,
              ids: [this.wechat.id],
              usernames: this.userForm.username
            };
            unRelate(params).then(res => {
              this.$Modal.remove();
              if (res.success) {
                this.$Message.success("操作成功");
                this.wechat.related = false;
              }
            });
          }
        });
      },
      showChangeMobile() {
        this.$refs.checkPassMobile.show();
      },
      checkSuccessMobile() {
        this.editMobileVisible = true;
      },
      showChangeEmail() {
        // this.$refs.checkPassEmail.show();
        this.checkSuccessEmail();
        // 清空缓存
        this.emailEditForm.email = "";
        this.emailEditForm.code = "";

      },
      checkSuccessEmail() {
        this.editEmailVisible = true;
      },
      saveEdit() {
        console.log(this.dictSex)
        this.$refs.userForm.validate(valid => {
          if (valid) {
            this.saveLoading = true;
            let params = {};
            for (let i in this.userForm) {
              params[i] = this.userForm[i]
            }
            delete params.roles
            delete params.mobile
            delete params.email
            delete params.departmentId
            delete params.department;
            userInfoEdit(params).then(res => {
              this.saveLoading = false;
              if (res.success) {
                this.$Message.success("保存成功");
                // 更新用户信息
                Cookies.set("userInfo", this.userForm);
                // 更新头像
                this.$store.commit("setAvatarPath", this.userForm.avatar);
                this.$store.commit("getNickName")
                console.log(this.$store.state);
              }
            });
          }
        })
      },
      changeAddress() {
        this.userForm.address = JSON.stringify(this.userForm.addressArray);
      },
      cancelInputCodeBox() {
        this.editMobileVisible = false;
        this.userForm.mobile = this.initPhone;
      },
      cancelEditEmail() {
        this.editEmailVisible = false;
        this.emailEditForm.email = this.initEmail;
      },
      sendEditMobileCode() {
        this.$refs["mobileEditForm"].validate(valid => {
          if (valid) {
            this.getSms = "发送中";
            this.sending = true;
            sendEditMobileSms(this.mobileEditForm.mobile).then(res => {
              this.getSms = "获取验证码";
              this.sending = false;
              if (res.success) {
                this.$Message.success("发送短信验证码成功");
                // 开始倒计时
                this.$refs.countDownMobile.startCountDown();
              }
            });
          }
        });
      },
      submitEditMobile() {
        this.$refs["mobileEditForm"].validate(valid => {
          if (valid) {
            if (!this.mobileEditForm.code) {
              this.codeError = "请填写短信验证码";
              return;
            } else {
              this.codeError = "";
            }
            this.$Modal.confirm({
              title: "确认更改手机号",
              content: "修改手机号后您的用户名将成为新手机号，并退出登录！",
              onOk: () => {
                this.checkCodeLoading = true;
                changeMobile(this.mobileEditForm).then(res => {
                  this.checkCodeLoading = false;
                  if (res.success) {
                    this.$Message.success("修改成功");
                    this.userForm.mobile = this.mobileEditForm.mobile;
                    this.initPhone = this.mobileEditForm.mobile;
                    this.updateUserInfo();
                    this.editMobileVisible = false;

                    // 退出登录
                    this.$store.commit("setLoading", true);
                    this.$store.commit("clearOpenedSubmenu");
                    this.setStore("accessToken", "");
                    this.$store.commit("logout2", this);
                    // // 退出登录
                  }
                });
              }
            });

          }
        });
      },
      hasChangePhone() {
        if (this.mobileEditForm.mobile == this.initPhone) {
          this.canSendMobileCode = true;
        } else {
          this.$refs["mobileEditForm"].validate(valid => {
            if (valid) {
              this.canSendMobileCode = false;
            } else {
              this.canSendMobileCode = true;
            }
          });
        }
      },
      hasChangeEmail() {
        if (this.emailEditForm.email == this.initEmail) {
          this.canSendEditEmail = true;
        } else {
          this.canSendEditEmail = false;
        }
      },
      sendVerifyEmail() {
        this.$refs["emailEditForm"].validate(valid => {
          if (valid) {
            this.getSms = "发送中";
            this.sending = true;
            sendEditEmail(this.emailEditForm.email).then(res => {
              this.getSms = "获取验证码";
              this.sending = false;
              if (res.success) {
                this.$Message.success("发送邮件验证码成功，请注意查收");
                // 开始倒计时
                this.$refs.countDownEmail.startCountDown();
              }
            });
          }
        });
      },
      submitEditEmail() {
        this.$refs["emailEditForm"].validate(valid => {
          if (valid) {
            if (!this.emailEditForm.code) {
              this.codeError = "验证码不能为空";
              return;
            } else {
              this.codeError = "";
            }
            this.editEmailLoading = true;
            editEmail(this.emailEditForm).then(res => {
              this.editEmailLoading = false;
              if (res.success) {
                this.initEmail = this.emailEditForm.email;
                this.userForm.email = this.emailEditForm.email;
                this.updateUserInfo();
                this.$Message.success("修改邮件成功");
                this.editEmailVisible = false;
              }
            });
          }
        });
      },
      updateUserInfo() {
        // 更新用户信息
        userInfo().then(res => {
          if (res.success) {
            let endDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 - 1);
            // 避免超过大小限制
            delete res.result.permissions;
            Cookies.set("userInfo", JSON.stringify(res.result), {
              expires: endDate
            });
            this.setStore("userInfo", JSON.stringify(res.result));
          }
        });
      },
      changeMessage(v) {
        this.setStore("messageOpen", v);
      }
    },
    activated() {
      let type = this.$route.query.type;
      if (type == "social") {
        this.activeName = "第三方账号绑定";
        this.currMenu = "第三方账号绑定";
      }
      let paramsType = this.$route.params.type;
      if (paramsType == "social") {
        this.activeName = "第三方账号绑定";
        this.currMenu = "第三方账号绑定";
      } else if(paramsType == "email"){
        this.activeName = "安全设置";
        this.currMenu = "安全设置";
      } else {
        this.activeName = "基本信息";
        this.currMenu = "基本信息";
      }
      this.init();
    },

  };
</script>
<style lang="less">
  @import "./own-space.less";
</style>