<style lang="less">
@import "./home.less";
@import "../../styles/common.less";
</style>
<template>
  <div class="home">
    <Modal v-model="showVideo"  @on-cancel="cancelVideo" title="商务室订阅功能使用说明" :styles="{ top: '30px' }" footer-hide width="1000">
      <video ref="myVideo" webkit-playsinline="" v-if="showVideo" controls playsinline="" x-webkit-airplay="" x5-playsinline="" preload="preload"
             autoplay="autoplay" style="width: 100%; height: 100%;"
             src="/static/video.MP4"></video>
    </Modal>
    <Modal title="修改手机号" v-model="editMobileVisible" :closable="false" :mask-closable="false" :width="500">
      <Form ref="mobileEditForm" :model="mobileEditForm" :label-width="70" :rules="mobileEditValidate">

        <FormItem label="手机号" prop="mobile">
          <Input v-model="mobileEditForm.mobile" @on-change="hasChangePhone" placeholder="请输入新手机号" />
        </FormItem>
        <FormItem label="验证码" prop="code" :error="codeError">
          <Row type="flex" justify="space-between">
            <Input v-model="mobileEditForm.code" placeholder="请输入您收到的短信验证码" style="width: 280px" />
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
    <Modal title="欢迎进入商务室" v-model="wechatFlag" class-name="wechat" :mask-closable="false" style="text-align: center"
           @on-cancel="closeWechat">
      <p>这里是专属于您自己的商务空间，更多移动端服务关注公众号。</p>
      <img :src="wechatSrc" style="display: block; margin: 0 auto" alt="扫描绑定微信" />
      <div slot="footer">
        <Button type="primary" @click="closeWechat">关闭</Button>
      </div>
    </Modal>

    <div class="home_manager">
      <Card>
        <Row class="topbar" type="flex" align="middle" :gutter="10" style="padding: 10px">
          <Col span="8">
            <div class="item">
              <div class="head bold">
                <Avatar :src="head" size="70" />
              </div>
              <div class="intro">
                <p class="bold">
                  您好！<span style="width: 10px; display: inline-block"></span>{{ userInfo.nickname }}
                </p>
                <Poptip trigger="hover" :content="userInfo.companyName" placement="bottom" :disabled="companyNamePop">
                  <p class="second">
                    <span class="subtitle">所在企业：</span>{{ userInfo.companyName }}
                  </p>
                </Poptip>
              </div>
            </div>
          </Col>
          <Col span="8">
            <!-- <img style="vertical-align: middle; margin-left:2em;" src="@/assets/vip1.png" alt="">  -->
            <div class="item">
              <div class="head">
                <img src="@/assets/vip-icon.png" style="margin-top: 5px" alt="" />
              </div>
              <div class="intro">
                <p style="margin-top: 8px">
                  <span class="subtitle">会员级别：</span>{{ userInfo.memberType }}
                </p>
                <p class="second">
                  <span class="subtitle">会员到期时间：</span>{{ userInfo.expireTime }}
                </p>
              </div>
            </div>
          </Col>
          <Col span="8">
            <div class="item">
              <div class="head">
                <img :src="wxQrcode" alt="" />
              </div>
              <div class="intro">
                <p style="margin-top: 8px">
                  <span class="subtitle">专属客服：</span>{{ userInfo.contact }}
                </p>
                <Poptip trigger="hover" :content="userInfo.contactPhone" placement="bottom" :disabled="contactPhonePop">
                  <p class="second">
                    <span class="subtitle">客服电话：</span>{{ userInfo.contactPhone }}
                  </p>
                </Poptip>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
      <Card v-if="subTipFlag" style="margin-top: 20px">
        <p style="font-size: 14px">
          <span class="subtipIcon"></span>
          尊敬的用户您好，<span style="color: #3992F0">2023年元博网采购与招标网项目信息模块全新升级，您可以重新订阅自己关注的栏目，</span>如有疑问，可联系<span style="color: #3992F0;font-weight: bold">400-006-6655</span>
        </p>
      </Card>
      <Row :gutter="16" class="_row">
        <Col span="8">
          <Card :bordered="false">
            <div class="_clear" slot="title">
              <!-- <Icon type="ios-add-circle"  /> -->
              <span class="title">我的订阅</span><a style="color:#2d8cf0;font-size:18px;margin-left:5px;"
                                                @click="showVideo=true;">帮助<Icon type="social-youtube-outline"></Icon></a>
              <Button class="_right" @click="enterTo('subscribe-overview')" size="small" icon="ios-send">立即前往</Button>
            </div>
            <div class="card_body sub loading" v-if="loading">
              <Spin class="img">
                <Icon type="ios-loading" class="demo-spin-icon-load"/>
                <div>正在拼命加载中...</div>
              </Spin>
            </div>
            <div class="card_body sub" v-if="!loading">
              <p v-for="(item, i) in subList" :key="i">
                <a :href="item.url" target="_blank" :title="item.title">{{
                    item.title
                  }}</a>
              </p>
              <div v-show="subList.length === 0" style="
                  height: 100%;
                  width: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                ">
                <Button type="primary" @click="enterTo('tendering')" icon="ios-add">添加我的订阅</Button>
              </div>
            </div>
          </Card>
        </Col>
        <Col span="8">
          <Card :bordered="false">
            <div slot="title" class="_clear">
              <!-- <Icon type="ios-star" style="margin-right:5px;" /> -->
              <span class="title">我的收藏</span>
              <Button class="_right" @click="enterTo('collect')" size="small" icon="ios-send">立即前往</Button>
            </div>
            <div class="card_body sub">
              <p v-for="(item, i) in colList" :key="i">
                <a :href="item.url" target="_blank" :title="item.name">{{
                    item.name
                  }}</a>
              </p>
              <div v-show="colList.length === 0" style="
                  height: 100%;
                  width: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                ">
                还未添加过收藏
              </div>
            </div>
          </Card>
        </Col>
        <Col span="8">
          <Card :bordered="false">
            <div class="_clear" slot="title">
              <!-- <Icon type="ios-people" style="margin-right:5px;" /> -->
              <span class="title">现有成员（{{ allList.length }}）</span>
              <Button class="_right" v-if="managerFlag" @click="enterTo('count', { flag: 1 })" size="small"
                      icon="ios-send">立即前往</Button>
            </div>
            <div class="card_body member">
              <div class="manager" v-if="managerFlag">
                <a v-for="(item, i) in allList" @click="enterTo('count', { flag: 1 })"
                   :key="i">{{ item.nickname ? item.nickname : "[ ]" }}</a>
              </div>
              <div class="normal" v-else>
              <span v-for="(item, i) in allList" :key="i">{{
                  item.nickname ? item.nickname : "[ ]"
                }}</span>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <Row :gutter="16" class="_row row2" v-if="managerFlag">
        <Col span="16">
          <Card :bordered="false" v-if="false">
            <div class="_clear" slot="title">
              <!-- <Icon type="md-cart" style="margin-right:5px;" /> -->
              <span class="title">我的频道</span>
              <Button class="_right" @click="enterTo('special', { flag: 2 })" size="small" icon="ios-send">立即前往</Button>
              <Button class="_right" type="primary" size="small" icon="ios-add"
                      @click="enterTo('special', { flag: 1 })">添加更多</Button>
            </div>
            <div class="card_body channel">
              <a :href="item.url" target="_blank" v-for="(item, index) in paid_goods" :key="index">
                <img :src="item.image" tabindex="0" />
              </a>
              <div v-show="paid_goods.length === 0" style="
                  height: 100%;
                  width: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                ">
                还未购买频道
              </div>
            </div>
          </Card>
          <visit-volume :pv="this.userInfo.pv" />
        </Col>
        <Col span="8">
          <Card :bordered="false">
            <div class="_clear" slot="title">
              <!-- <Icon type="md-person-add" style="margin-right:5px;" /> -->
              <span class="title">待审批账号（{{ watingList.length }}）</span>
              <Button class="_right" @click="enterTo('count', { flag: 2 })" size="small" icon="ios-send">立即前往</Button>
            </div>
            <div class="card_body">
              <table class="wating">
                <thead>
                <tr>
                  <th>序号</th>
                  <th>申请人</th>
                  <th>申请时间</th>
                  <th>邀请人</th>
                  <th>邀请方式</th>
                </tr>
                </thead>
                <tbody>
                <p style="text-align: center; line-height: 260px" v-if="watingList.length === 0">
                  暂无数据
                </p>
                <tr v-for="(item, i) in watingList" :key="i">
                  <td>{{ i + 1 }}</td>
                  <td>{{ item.nickname }}</td>
                  <td>
                    {{ item.createTime ? item.createTime.split(" ")[0] : "" }}
                  </td>
                  <td>{{ item.creator }}</td>
                  <td>{{ "微信邀请" }}</td>
                </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </Col>
      </Row>
      <!-- 定制服务 -->
      <Row :gutter="16" style="margin-top: 16px">
        <Col span="16">
          <services></services>
        </Col>
        <Col span="8">
<!--          <Card :bordered="false" v-if=" memberType === '免费会员' || !memberType">-->
<!--            <div class="_clear" slot="title">-->
<!--            <span class="title" style="-->
<!--                  width: 100%;-->
<!--                  overflow: hidden;-->
<!--                  display: block;-->
<!--                  white-space: nowrap;-->
<!--                  text-overflow: ellipsis;-->
<!--                ">敬请期待</span>-->
<!--            </div>-->
<!--            <div style="widht: 100%; height: 170px; padding: -20px"></div>-->
<!--          </Card>-->
          <Card :bordered="false" class="couponAmount" v-if="memberType != '免费会员' || yhqList.length">
            <div class="_clear" slot="title">
            <span class="title" style="
                  width: 100%;
                "><span>优惠劵专区</span></span>
            </div>
            <div v-if="yhqList.length" @mouseenter="enterYhq" @mouseleave="leaveYhq">
              <transition name="imgs">
                <div v-for="(item,index) in yhqList" :key="index" v-if="index==value2">
                  <div class="yhqBg" :style="{backgroundImage: 'url('+item.img+')', backgroundSize: '100% 100%'}">
                    <div class="price">
                      <template v-if="item.flag == 4">
                        {{ item.discount ?discountField[item.discount-1]:'95' }}<span style="position: relative;bottom: 3px;"> 折</span>
                      </template>
                      <template v-else>
                        <span>¥</span>{{ item.price }}
                      </template>
                      <div class="shu"></div>
                    </div>
                    <div class="title">
                      <h2>{{ item.title }}</h2>
                      <div class="hen"></div>
                      <h3>有效期：{{item.date}}</h3>
                      <img v-if="item.status == '1'" class="yhq-used" :src="item.price!=0?'img/icon-ygq.png':'img/icon_ysy.png'" alt="">
                    </div>
                  </div>
                  <div class="description" v-if="item.flag == 4">
                    <p>使用说明：</p>
                    <p>1、本折扣券需在使用截止日期前消费使用；</p>
                    <p>2、本折扣券不予兑换现金；</p>
                    <p>3、本折扣券可购买产品可咨询专属客服；</p>
                    <p>4、本折扣券最终解释权归元博网采购与招标网所有。</p>
                  </div>
                  <div class="description" v-else>
                    <p>使用说明：</p>
                    <p>1、本优惠券需在使用截止日期前消费使用；</p>
                    <p>2、本优惠券不予兑换现金；</p>
                    <p>3、{{item.title=="代写标书券"?"本优惠券可以购买标书制作产品；":"本优惠券可购买产品需咨询您的专属客服，查询获得/消耗记录；"}}</p>
                    <p>4、该优惠券最终解释权归采购与招标网所有。</p>
                  </div>
                </div>
              </transition>
              <ul class="yhqView">
                <li v-for='(item,index) in yhqList.length' @mouseover='select(index)' :class='{con:index==value2}'><button type="button" class=""></button></li>
              </ul>
            </div>
            <div class="noYhq" v-else>
              <div class="wyhq">
                <img src="img/img_wyhq.png" alt="">
                <h2>您目前暂无可使用优惠券！</h2>
                <h3>具体获得形式可咨询您的专属客服！</h3>
              </div>
              <div class="description">
                <p>使用说明：</p>
                <p>1、本优惠券需在使用截止日期前消费使用；</p>
                <p>2、本优惠券不予兑换现金；</p>
                <p>3、本优惠券可购买产品需咨询您的专属客服，查询获得/消耗记录；</p>
                <p>4、该优惠券最终解释权归采购与招标网所有。</p>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
    <div v-show="false" class="home_normal">
      <Card>
        <Row class="top" type="flex" align="middle" style="">
          <Col span="3" style="text-align: center">
            <Avatar :src="head" size="large" />
          </Col>
          <Col span="21">
            <h3>
              欢迎您进入商务室，这里将为您开启专属于您自己的工作空间，有助您更高效的开发和管理项目。
            </h3>
          </Col>
        </Row>
      </Card>
      <Card style="margin-top: 20px">
        <p slot="title">
          <Icon type="md-search" />
          空间正在搭建中，如果您对此还有那些建议想法，欢迎留言给我们！
        </p>
        <Form>
          <FormItem label-position="left" label="留言框" :label-width="100" style="width: 700px">
            <Input v-model="keywords" type="textarea" :rows="6" placeholder="请输入留言..." />
          </FormItem>
          <FormItem style="margin-left: 100px">
            <Button type="primary">提交</Button>
          </FormItem>
        </Form>
      </Card>
    </div>
  </div>
</template>

<script>
import {
  ipInfo,
  findAllUserData,
  getUserListData,
  changeMobile,
  sendEditMobileSms,
  toBindWechat,
  userInfo,
  getAllGroup,
  ztbSearch,
  getCollection,
  getAllProduct,
  getChannelBycondition,
  nzjSearch,
} from "@/api/index";
import visitVolume from "./components/visitVolume.vue";
import services from "./components/services";
import visitSeparation from "./components/visitSeparation.vue";
import infoCard from "./components/infoCard.vue";
import show from "./show.vue";
import Cookies from "js-cookie";
import CountDownButton from "@/views/my-components/xboot/count-down-button";
import {
  validateMobile
} from "@/libs/validate";
export default {
  components: {
    visitVolume,
    CountDownButton,
    services,
  },
  data() {
    return {
      loading: false,
      memberType: '', // 会员状态
      couponAmount: 0, //（金额）
      couponExpire: '', //（有效期）
      companyNamePop: true,
      contactPhonePop: true,
      showVideo: false,
      nzjSearchData: {
        keyword: "",
        table: ["-1"],
        area: ["-1"],
        category1: ["-1"],
        category2: ["-1"],
        stage: ["0"],
        page: 1,
        rows: 30,
        type: 0,
        range: 4,
      },
      editMobileVisible: false,
      keywords: "",
      head: localStorage.avatorImgPath,
      managerFlag: "",
      userInfo: {},
      watingList: [],
      allList: [],
      searchForm: {
        id: "",
        username: "",
        departmentId: "",
        mobile: "",
        email: "",
        sex: "",
        type: "",
        status: "",
        pageNumber: 1,
        pageSize: 1000000,
        sort: "createTime",
        order: "desc",
        startDate: "",
        endDate: "",
        department: "",
        nickname: "",
        delFlag: 0,
      },
      mobileEditForm: {
        mobile: "",
        code: "",
      },
      mobileEditValidate: {
        mobile: [{
          required: true,
          message: "请输入手机号码",
        },
          {
            validator: validateMobile,
          },
        ],
      },
      canSendMobileCode: false,
      codeError: "",
      sending: false,
      getSms: "获取验证码",
      checkCodeLoading: false,
      wechatFlag: false,
      wechatSrc: "",
      timeId: 0,
      subList: [],
      colList: [],
      proList: [],
      paid_goods: [],
      wxQrcode: "img/service-icon.png",
      subTipFlag: false,
      value2: 0,
      yhqList: [
        // {id: 1, title: "代写标书券", img: "img/img_bg_dxbsq.png", price: 1000, date: "2023.03.22"},
        // {id: 2, title: "代金券", img: "img/img_bg_djq.png", price: 500, date: "2023.03.22"},
        // {id: 3, title: "消费券", img: "img/img_bg_yhq.png", price: 5000, date: "2023.03.22"},
        // {id: 4, title: "代写标书券", img: "img/img_bg_ysy.png", price: 0, date: "2023.03.22"},
        // {id: 5, title: "代金券", img: "img/img_bg_ygq.png", price: 500, date: "2023.03.22"},
        // {id: 6, title: "探项网单省折扣券", img: "img/img_bg_zkq.png", price: 1000, date: "2023.03.22", flag: 4,},
      ],
      projectIdField: ["探项网单省", "元博关系圈", "元博征信", "标书代写"],
      discountField: ["95", "9", "85", "8", "75", "55"],
      timer: null,
    };
  },
  methods: {
    //优惠券逻辑
    nextBg:function(){
      if(this.value2==this.yhqList.length-1){
        this.value2=0;
      }else{
        this.value2++;
      }
    },
    enterYhq(){
      clearInterval(this.timer);
    },
    leaveYhq(){
      this.timer=setInterval(()=>{
        this.nextBg()
      },8000)
    },
    select(index){
      this.value2=index;
    },
    // 获取用户信息
    getUserInfo() {
      userInfo().then((res) => {
        if (res.success) {
          let endDate = new Date(
              new Date().getTime() + 24 * 60 * 60 * 1000 - 1
          );
          // 避免超过大小限制
          delete res.result.permissions;
          Cookies.set("userInfo", JSON.stringify(res.result), {
            expires: endDate,
          });
          this.setStore("userInfo", JSON.stringify(res.result));
          let userInfo = res.result;
          this.memberType = userInfo.memberType;
          this.couponAmount = userInfo.couponAmount;
          this.couponExpire = this.format(new Date(userInfo.couponExpire), 'yyyy年MM月dd日');
          if (userInfo.wxQrcode){
            this.wxQrcode = userInfo.wxQrcode;
          }
          this.subTipFlag = userInfo.subTipFlag;
          // flag 优惠券类型  1代金券 2消费券 3代写标书券  status 状态 0上线 1失效 2下线
          if (userInfo.voucherUsers.length){
            this.yhqList = userInfo.voucherUsers.map(item => {
              let yhqTitle, yhqImg;
              if (item.flag == "1"){
                yhqTitle = "代金券";
                yhqImg = "img/img_bg_djq.png";
              } else if (item.flag == "2"){
                yhqTitle = "消费券";
                yhqImg = "img/img_bg_yhq.png";
              } else if(item.flag == "3") {
                yhqTitle = "代写标书券";
                yhqImg = "img/img_bg_dxbsq.png";
              } else {
                yhqTitle = item.projectId?this.projectIdField[item.projectId-1]+"折扣券":"折扣券";
                yhqImg = "img/img_bg_zkq.png";
              }
              if (item.status == "1"){
                yhqImg = item.amount?"img/img_bg_h.png":"img/img_bg_h.png";
              }
              return {
                id: item.id,
                title: yhqTitle,
                img: yhqImg,
                price: item.amount,
                date: item.endDate,
                status: item.status,
                flag: item.flag,
                discount: item.discount,
              }
            })
            this.timer=setInterval(()=>{
              this.nextBg()
            },8000)
          }
        }
      });
    },
    cancelVideo() {
      // console.log(123);
      // this.$refs.myVideo.paused = true;
    },
    closeWechat() {
      // 取消绑定
      clearInterval(this.timeId);
      this.wechatFlag = false;
    },
    submitEditMobile() {
      this.$refs["mobileEditForm"].validate((valid) => {
        if (valid) {
          if (!this.mobileEditForm.code) {
            this.codeError = "请填写短信验证码";
            return;
          } else {
            this.codeError = "";
          }
          this.checkCodeLoading = true;
          changeMobile(this.mobileEditForm).then((res) => {
            this.checkCodeLoading = false;
            if (res.success) {
              this.$Message.success("修改成功");
              this.userInfo.mobile = this.mobileEditForm.mobile;
              // this.initPhone = this.mobileEditForm.mobile;
              this.updateUserInfo();
              this.editMobileVisible = false;
            }
          });
        }
      });
    },
    cancelInputCodeBox() {
      this.editMobileVisible = false;
    },
    sendEditMobileCode() {
      this.$refs["mobileEditForm"].validate((valid) => {
        if (valid) {
          this.getSms = "发送中";
          this.sending = true;
          sendEditMobileSms(this.mobileEditForm.mobile).then((res) => {
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
    hasChangePhone() {
      if (this.mobileEditForm.mobile == this.initPhone) {
        this.canSendMobileCode = true;
      } else {
        this.$refs["mobileEditForm"].validate((valid) => {
          if (valid) {
            this.canSendMobileCode = false;
          } else {
            this.canSendMobileCode = true;
          }
        });
      }
    },
    enterTo(a, data) {
      this.$router.push({
        name: a,
        params: data,
      });
    },
    updateUserInfo() {
      // 更新用户信息
      userInfo().then((res) => {
        if (res.success) {
          let endDate = new Date(
              new Date().getTime() + 24 * 60 * 60 * 1000 - 1
          );
          // 避免超过大小限制
          delete res.result.permissions;
          Cookies.set("userInfo", JSON.stringify(res.result), {
            expires: endDate,
          });
          this.setStore("userInfo", JSON.stringify(res.result));
        }
      });
    },
    getLinkFlag() {
      // 定时获取是否绑定微信
      this.timeId = setInterval(() => {
        userInfo().then((res) => {
          if (res.code === 404) {
            clearInterval(this.timeId);
          }
          if (res.result.wechat) {
            this.wechatFlag = false;
            this.$Message.success("绑定成功");
            this.updateUserInfo();
            this.userInfo.wechat = res.result.wechat;
            clearInterval(this.timeId);
          }
        });
      }, 1000);
    },
    setAprilFlag(id, endtime) {
      var date = localStorage.getItem("aprilFlag");
      var now = new Date().toLocaleDateString();
      if (date !== now) {
        // 新一天,清空id列表
        localStorage.setItem("aprilList", "");
        localStorage.setItem("aprilFlag", now);
      }
      var aprilList = localStorage.getItem("aprilList") ? JSON.parse(localStorage.getItem("aprilList")) : [];
      var flag1 = true;
      // 未关闭过
      for (var i = 0; i < aprilList.length; i++) {
        if (aprilList[i] === id) {
          flag1 = false;
          break;
        }
      }
      // 会员到期时间为四月到六月之间
      var april_n = new Date("2021/04/01").getTime()
      var june_n = new Date("2021/06/30").getTime()
      var end_n = new Date(endtime).getTime();
      var flag2 = end_n > april_n && end_n < june_n;


      if (flag1 && flag2) {
        var april_box = document.createElement("div");
        april_box.id = "april_box";
        april_box.innerHTML =
            `<div class="april" ><div id="april_close" @click="close"></div><div class="april_content"><h2 class="april_title red">公告</h2><p class="april_first">尊敬的用户：</p><p><img src="https://cdn.chinabidding.cn/public/2020/img/laba.png" alt=""> 避免给您造成经济损失，请仔细阅读!</p><p>您好！目前市场已经进入招标旺季，一些“钓鱼网站”，通过短信、邮件等方式，以我网的名义给广大用户发送到期通知，导致一些用户汇错款项，造成了不必要的经济损失。</p><p>在此提醒广大用户，请在办理续费前，与您的客服专员联系或拨打<span class="red"> 400-006-6655 </span>核对汇款信息！</p><p class="red"> 温馨提示：元博网采购与招标网首页右侧可随时查看账号的到期时间及专属客服联系方式。</p><p class="bottom">元博网采购与招标网</p></div></div>`;
        document.body.appendChild(april_box);
        aprilList.push(id);
        localStorage.setItem("aprilList", JSON.stringify(aprilList))
        document.querySelector("#april_close").onclick = function () {
          document.querySelector("#april_box").remove();

        }
        return false;
      }

      return true;

    },
    init() {


      let aprilTipFlag = true;
      let v = JSON.parse(window.localStorage.getItem('userInfo'));
      // 转换null为""
      for (let attr in v) {
        if (v[attr] == null) {
          v[attr] = "";
        }
      }
      let str = JSON.stringify(v);
      this.userInfo = JSON.parse(str);
      if (this.userInfo.memberType !== "免费会员") {
        aprilTipFlag = this.setAprilFlag(this.userInfo.id, this.userInfo.expireTime);
      }
      if (this.userInfo.companyName && this.userInfo.companyName.length > 15) {
        this.companyNamePop = false;
      }
      if (
          this.userInfo.contactPhone &&
          this.userInfo.contactPhone.length > 20
      ) {
        this.contactPhonePop = false;
      }
      let popFlag = Cookies.get("popFlag");
      this.userInfo.expireTime = this.userInfo.expireTime.slice(0, 10);
      this.managerFlag = this.userInfo.type === 1 ? true : false;
      this.searchForm.companyId = this.userInfo.companyId;

      //判断是否显示专属客服弹窗
      /*let marketSourceVo = JSON.parse(this.getStore("userInfo")).marketSourceVo;
      if (popFlag == 1 && marketSourceVo?.urlPath && aprilTipFlag && this.userInfo.wechat) {
        let nowWork = this.getCooldate();
        if (localStorage.getItem("marketSourceFlag") != nowWork) {
          let containter = document.getElementsByClassName("containter")[0];
          let containterBox = containter.getElementsByClassName("containter_box")[0];
          let closebtn = containter.getElementsByClassName("closebtn")[0];
          containterBox.style.background = "url(" + marketSourceVo.urlPath + ") no-repeat center";
          containter.style.display = "block";
          let that = this;
          closebtn.addEventListener("click", function () {
            let marketDate = that.getCooldate();
            console.log(marketDate);
            localStorage.setItem("marketSourceFlag", marketDate);
            containter.style.display = "none";
          })
          Cookies.set("popFlag", 0);
        }
      }*/

      //免费会员专属客服弹窗
      let endWork = 20230226
      let marketFlag = true;
      // let customerTxz = ["哈恩博","陆紫剑","苏晓彤"]; //探项组
      let nowWork = this.getCooldate();
      let popWxFlag = this.userInfo.popWxFlag;
      if (nowWork <= endWork) {
        if (popWxFlag && localStorage.getItem("marketingFlag") != nowWork){
          var customerTc = document.createElement("div");
          customerTc.id = "customerTc";
          customerTc.innerHTML = '<div class="containter_bgc"><div class="containter_box"><p class="customerWxImg"></p><p class="closebtn"><img src="https://cdn.chinabidding.cn/public/2020/img/newYear/icon_gb.png" alt=""></p></div></div>'
          document.body.appendChild(customerTc);
          document.querySelector("#customerTc .customerWxImg").style.background = "url(" + this.userInfo.wxQrcode + ") no-repeat center";
          document.querySelector("#customerTc .customerWxImg").style.backgroundSize = "100% 100%";
          marketFlag = false;
          let that = this;
          document.querySelector("#customerTc .closebtn").addEventListener("click", function (){
            let markeDate = that.getCooldate();
            localStorage.setItem("marketingFlag", markeDate);
            document.querySelector("#customerTc").remove();
          })
        }
      }

      // 获取现有成员列表
      getUserListData(this.searchForm).then((res) => {
        this.allList = res.result.content;
        // 引导弹窗逻辑
        if (popFlag == 1 && aprilTipFlag && marketFlag) {
          if (!this.userInfo.wechat) {
            // 未绑定微信
            toBindWechat().then((res) => {
              if (res.success) {
                var ticket = res.result.ticket;
                this.wechatSrc =
                    "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=" +
                    ticket;
                this.wechatFlag = true;
                this.getLinkFlag();
              }
            });
            // this.wechatSrc = '/xboot/ticket/createQrcode?inviterId=' + this.userInfo.id
            Cookies.set("popFlag", 0);
          } else if (this.managerFlag) {
            if (res.result.content.length < 2) {
              this.$Modal.confirm({
                title: "欢迎进入商务室",
                content: "您可通过账号管理，邀请更多同事加入企业账号，共享会员服务。",
                okText: "立即邀请",
                onOk: () => {
                  this.$router.push({
                    path: "/companyManage/count",
                  });
                },
              });
              // 未邀请用户
              Cookies.set("popFlag", 0);
            }
          }
        }
        // 弹窗逻辑end
      });
      let watingData = {
        ...this.searchForm,
      };
      watingData.status = 1;
      delete watingData.delFlag;
      getUserListData(watingData).then((res) => {
        this.watingList = res.result.content.slice(0, 5);
      });

      getChannelBycondition({
        status: 0,
      }).then((res) => {
        if (res.success) {
          this.paid_goods = res.result.content.slice(0, 4);
        }
      });

      if (this.$route.query.from) {
        this.$router.push({
          path: '/supplier/platform'
        })
      }
    },
    getCooldate(){
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1 + "";
      var nowDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (nowDate >= 0 && nowDate <= 9) {
        nowDate = "0" + nowDate;
      }
      var newDate = year + month + nowDate;
      return Number(newDate);
    },
    getByItem(group, index) {
      let item = group[index];
      if (item.type === 0) {
        let searchData = {
          page: 1,
          rows: 30,
        };
        searchData.area = item.area;
        searchData.range = item.dateRange;
        searchData.table = item.infoType;
        searchData.keyword = item.keyword;
        if (searchData.range == -1) {
          /* searchData.startTime = new Date(item.startTime)
            .toLocaleString()
            .split(" ")[0];
          searchData.endTime = new Date(item.endTime)
            .toLocaleString()
            .split(" ")[0]; */
          searchData.startTime = this.format(
              new Date(item.startTime),
              "yyyy/MM/dd"
          );
          searchData.endTime = this.format(
              new Date(item.endTime),
              "yyyy/MM/dd"
          );
        }
        ztbSearch(searchData).then((data) => {
          if (data.code == 6015){
            setTimeout(()=>{
              this.getByItem(group, index);
            },1000)
            return;
          }
          console.log(data)
          if (data.status === "OK") {
            if (data.result.items.length >= 5) {
              this.subList = data.result.items.slice(0, 5);
              this.loading = false;
            } else if (index > 0) {
              index--;
              this.getByItem(group, index);
            }
          }
        });

      } else if (item.type === 1) {
        this.nzjSearchData.area = [];
        item.area.split(",").forEach((b) => {
          if (b) {
            this.nzjSearchData.area.push(parseInt(b));
          }
        });
        this.nzjSearchData.range = item.dateRange;
        this.nzjSearchData.keyword = item.keyword;
        this.nzjSearchData.type = item.searchRange;
        this.nzjSearchData.table = item.infoType.split(",");
        this.nzjSearchData.category1 = item.primaryIndustry.split(",");
        this.nzjSearchData.category2 = item.secondaryIndustry.split(",");
        this.nzjSearchData.stage = item.stage.split(",");
        nzjSearch(this.nzjSearchData).then((data) => {
          if (data.code == 6015){
            setTimeout(()=>{
              this.getByItem(group, index);
            },1000)
            return;
          }
          if (data.status === "OK") {
            if (data.result.items.length >= 5) {
              this.subList = data.result.items.slice(0, 5);
              this.loading = false;
            } else if (index > 0) {
              index--;
              this.getByItem(group, index);
            }
          }
        });
      }
    },
    getItemInfo() {
      // 获取我的订阅
      getAllGroup().then((res) => {
        this.loading = true;
        if (res.success && res.result.length > 0) {
          res.result.forEach((item) => {
            for (let key in item) {
              item[key] = item[key] === null ? "" : item[key];
            }
          });
          let group = res.result;
          this.getByItem(group, group.length - 1);
        }
      });

      // 获取我的收藏
      let collectData = {
        name: "",
        type: 0,
        pageSize: 30,
        pageNumber: 1,
        delFlag: 0,
        sort: "createTime",
        order: "desc",
      };
      getCollection(collectData).then((res) => {
        if (res.success) {
          this.colList = res.result.content.slice(0, 5);
        }
      });
      // 获取频道页面
      getAllProduct().then((res) => {});
    },

  },
  mounted() {
    this.init();
    this.getItemInfo();
    this.getUserInfo();

    /* this.$router.push({
            name: "subscribe",
          }); */
    window.addEventListener("resize", function () {
      console.log(111)
    });
  },
  destroyed() {
    clearInterval(this.timeId);
  },
  computed: {},
};
</script>

<style lang="less" scoped>
@vw: 19.2vw;
@vh: 10.8vh;

.loading .img {
  margin-top: 50px;
}
/*加载中icon样式*/
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.couponAmount {
  /deep/ .ivu-card-body {
    padding-bottom: 5px;
    position: relative;
  }
  min-height: 340px;
  .yhqView{
    bottom: 0px;
    z-index: 10;
    position: relative;
    list-style: none;
    text-align: center;
    padding: 0;
    width: 100%;
    height: 17px;
    display: block;
    margin-top: 3px;
    .con{
      button {
        opacity: 1;
        width: 24px;
      }
    }
  }
  .yhqView li{
    position: relative;
    display: inline-block;
    vertical-align: top;
    text-align: center;
    margin: 0 2px;
    padding: 7px 0;
    cursor: pointer;
    button {
      border: 0;
      cursor: pointer;
      background: #8391a5;
      opacity: .3;
      display: block;
      width: 16px;
      height: 3px;
      border-radius: 1px;
      outline: 0;
      font-size: 0;
      color: rgba(0,0,0,0);
      transition: all .5s;
    }
  }
  .yhqBg {
    //max-width: 504.3px;
    margin-bottom: 15px;
    height: 89px;
    display: flex;
    //width: 483px;
    width: 100%;
    background-size: 100% 100%;
    .price {
      height: 89px;
      width: 38.27%;
      font-size: 50 / @vw;
      font-family: DIN-Bold, DIN;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 89px;
      text-align: center;
      span {
        font-size: 24 / @vw;
      }
      position: relative;
      .shu {
        position: absolute;
        width: 1px;
        height: 62px;
        right: 0px;
        top: 15px;
        background-image: linear-gradient(to bottom, #fff 0%, #fff 50%, transparent 50%);
        background-size: 1px 9px;
        background-repeat: repeat-y;
      }
    }
    .title {
      height: 89px;
      width: 61%;
      text-align: center;
      position: relative;
      .yhq-used {
        width: 56px;
        height: 43px;
        position: absolute;
        top: 8px;
        right: 3%;
      }
      h2 {
        width: 98%;
        margin: 0 auto;
        font-size: 18px;
        font-family: Noto Sans SC-Medium, Noto Sans SC;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 37px;
        text-align: center;
        //border-bottom: 1px solid #FFFFFF;
        margin-top: 12px;
      }
      .hen {
        margin: 0 auto;
        width: 68%;
        height: 1px;
        border-bottom: 1px solid #FFFFFF;
      }
      h3 {
        text-align: center;
        font-size: 13px;
        font-family: Noto Sans SC-Medium, Noto Sans SC;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 26px;
      }
    }
  }
  .description {
    min-height: 146px;
    background: #F8F8F8;
    widht: 100%;
    padding: 15px;
    font-size:12px;
    line-height: 24px;
    p {
      font-size: 12px;
      font-family: Microsoft YaHei UI-Regular, Microsoft YaHei UI;
      font-weight: 400;
      color: #999999;
    }
  }
  .noYhq {
    padding-bottom: 14px;
    .wyhq {
      text-align: center;
      img {
        vertical-align: top;
      }
      h2 {
        font-size: 16px;
        font-family: Microsoft YaHei UI-Bold;
        font-weight: bold;
        color: #666666;
        line-height: 36px;
      }
      h3 {
        font-size: 14px;
        font-family: Microsoft YaHei UI-Regular;
        color: #999999;
        font-weight: normal;
        margin-bottom: 20px;
      }
    }
  }
}
.subtipIcon {
  display: inline-block;
  width: 16px;
  height: 16px;
  //border: 1px solid;
  vertical-align: middle;
  background: url("../../assets/icon_laba.png") no-repeat;
  margin-right: 5px;
}
@media (max-width: 1071px) {
  .couponAmount {
    .yhqBg {
      .price {
        font-size: 28px;
        span {
          font-size: 13px;
        }
      }
    }
  }
}

.imgs-enter-active, .slide-leave-active {
  transition: all 1s;
}
.imgs-enter {
  opacity: 0;
}

.imgs-leave-active {
  opacity: 0;
}

</style>

<style>
/* 2022四月营销活动弹出 */
#customerTc{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 109;
  background-color:rgba(0, 0, 0, 0.6);
  /*display: none;*/
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#88000000',endColorstr='#88000000');
}
#customerTc .containter_box{
  width: 100%;
  height: 100%;
  /*background: url(https://cdn.chinabidding.cn/public/2020/img/syhd_tc_bg8.png) no-repeat center;*/
  background: url(../../assets/tc1.png) no-repeat center;
}
#customerTc .containter_box{
  width: 700px;
  height: 560px;
  position: absolute;
  top: 46%;
  left: 50%;
  z-index: 119;
  /*transform: translate(-50%,-50%);*/
  margin-left:-340px;
  margin-top:-240px;
}
#customerTc .closebtn {
  position: absolute;
  right: -20px;
  top: 20px;
  cursor: pointer;
}

.customerWxImg {
  position: absolute;
  width: 120px;
  height: 120px;
  margin: 0;
  top: 373px;
  left: 290px;
  background-size: 100% 100%;
}

</style>