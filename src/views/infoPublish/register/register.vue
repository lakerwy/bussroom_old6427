<template>
  <div class="register">
    <Card>
      <!-- <Card style="height: 60px"></Card> -->
      <!-- <Header
          :style="{
            background: '#fff',
            boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)',
          }"
        >
          <TopCommon :isShow="false"></TopCommon>
        </Header> -->
      <Row type="flex" justify="center">
        <Col style="width: 750px">
          <Steps :current="current" class="registerStep">
            <Step title="填写注册信息" content=""></Step>
            <Step title="上传法定代表人授权书" content=""></Step>
            <Step title="信息发布平台审核" content=""></Step>
          </Steps>
        </Col>
      </Row>

      <div
        style="width: 750px; margin: 0 auto; padding: 20px; position: relative"
        v-show="current === 0"
      >
        <Form
          ref="formItem"
          :model="formItem"
          :rules="ruleValidate"
          :label-width="160"
        >
          <div class="title" style="font-size: 16px">机构信息</div>
          <div class="form-item">
            <!-- <span>机构名称：</span> -->
            <FormItem prop="companyname" label="机构名称：">
              <Input
                style="width: 300px"
                placeholder="与法定代表人授权书信息保持一致"
                :maxlength="50"
                v-model="formItem.companyname"
              />
            </FormItem>
          </div>
          <div class="form-item">
            <!-- <span>统一社会信用代码：</span> -->
            <FormItem
              prop="socode"
              style="display: inline-block"
              label="统一社会信用代码："
            >
              <Input
                style="width: 300px"
                placeholder="机构是否已注册可输入代码验证"
                :maxlength="18"
                v-model="formItem.socode"
              />
            </FormItem>
            <span class="alert"
              >机构注册！可联系公司相关人员绑定操作员账号！</span
            >
          </div>
          <div class="form-item">
            <!-- <span>所在行政区域：</span>
              <v-region
                @values="regChange"
                :city="true"
                :ui="true"
                :search="false"
                :area="false"
              ></v-region> -->
            <FormItem prop="positionnum" label="所在行政区域：">
              <!-- <v-region
                  @values="regChange"
                  :city="true"
                  :ui="true"
                  :search="false"
                  :area="false"
                  style="min-width: 120px"
                ></v-region> -->
            </FormItem>
          </div>
          <!-- <span v-show="formItem.area === '' && show === 1" class="alert"
              >请选择行政区域！</span
            > -->
          <div class="title">
            <span style="color: #52a4f8; font-size: 16px; margin-right: 20px"
              >机构管理员信息</span
            >
            <span style="font-size: 12px; color: #999"
              >负责管理机构账号、操作员账号开通等事宜。</span
            >
            <span style="float: right"
              ><span style="color: #333">已有账号？</span>
              <a @click="routego">立即登录</a></span
            >
          </div>
          <div class="form-item">
            <!-- <span>姓名：</span> -->
            <FormItem prop="name" label="姓名：">
              <Input
                style="width: 300px"
                placeholder="与法定代表人授权书信息保持一致"
                v-model="formItem.name"
              />
            </FormItem>
          </div>
          <div class="form-item">
            <!-- <span>身份证号：</span> -->
            <FormItem prop="idcard" label="身份证号：">
              <Input
                style="width: 300px"
                placeholder="请输入18位合法身份证号"
                :maxlength="18"
                v-model="formItem.idcard"
              />
            </FormItem>
          </div>
          <div class="form-item">
            <!-- <span>常用邮箱：</span> -->
            <FormItem prop="uemail" label="常用邮箱：">
              <Input
                style="width: 300px"
                placeholder="请准确填写，用于管理账号、修改密码等操作"
                v-model="formItem.uemail"
              />
            </FormItem>
          </div>
          <div class="form-item">
            <!-- <span>手机：</span> -->
            <FormItem prop="phone" label="手机：">
              <Input
                style="width: 170px"
                v-model="formItem.phone"
                :maxlength="11"
                placeholder="用于登录、账号管理等"
              />
            </FormItem>
            <Button
              style="
                width: 120px;
                margin-left: 8px;
                height: 33px;
                margin-top: -5px;
              "
              v-show="showbtn === 0"
              @click="getidentcode"
              >发送验证码</Button
            >
            <Button
              style="
                width: 120px;
                margin-left: 8px;
                height: 33px;
                margin-top: -5px;
              "
              v-show="showbtn === 1"
              :disabled="true"
              >{{ countdown }}秒后重新发送</Button
            >
          </div>
          <!-- <div
              v-show="phonecode === -80"
              style="color: red; margin-left: 120px"
            >
              该号码已注册，请更换手机号注册！
            </div> -->
          <div class="form-item">
            <!-- <span>验证码：</span> -->
            <FormItem label="验证码：" prop="identcode">
              <Input
                style="width: 170px"
                placeholder="验证码60秒内有效"
                v-model="formItem.identcode"
              />
            </FormItem>
          </div>
        </Form>
        <div class="sub">
          <Button
            type="primary"
            @click="login2"
            style="width: 100px; margin-bottom: 8px; font-size: 14px"
            >提交
            <Icon
              size="16"
              style="margin-left: 2px"
              type="md-arrow-round-forward"
          /></Button>
          <span class="alert">提交之后，注册信息将无法修改！</span>
        </div>
      </div>
      <div
        style="width: 750px; margin: 0 auto; padding: 20px"
        v-show="current === 1"
      >
        <h2 style="text-align: center">注册信息提交成功！</h2>
        <p style="text-align: center; margin: 20px 0">
          发布信息，还需上传加盖公章的法定代表人授权书！
        </p>
        <div>
          <p style="color: #2d8cf0">办理流程：</p>
          <p style="margin: 10px 0" class="process">
            <span>1、下载授权书</span>
            <span>2、加盖清晰公章（2个）签字（1个）</span>
            <span>3、扫描成电子文件</span>
            <span>4、上传</span>
          </p>
          <p
            style="
              color: #2d8cf0;
              text-align: center;
              margin: 10px 0;
              cursor: pointer;
            "
            @click="getDownload"
          >
            下载法定代表人授权书
          </p>
          <p style="text-align: center; margin: 10px 0">
            支持PDF、JPEG、PNG等格式 最大不可超过10M
          </p>
          <div style="text-align: center">
            <div style="display: inline-block">
              <!-- <Upload
                action="/cebmeta.user/regist2"
                ref="upload"
                :format="[
                  'jpg',
                  'jpeg',
                  'png',
                  'doc',
                  'docx',
                  'xls',
                  'xlsx',
                  'pdf',
                  'dwg',
                  'rar',
                ]"
                :max-size="10240"
                :before-upload="handleBeforeUpload"
                :on-format-error="handleFormatError"
                :on-exceeded-size="handleMaxSize"
                :on-success="haSuccess"
              >
                <Button icon="ios-cloud-upload-outline">预览授权书</Button>
              </Upload> -->
            </div>
          </div>
        </div>
        <div style="text-align: center; margin-top: 40px">
          <Button
            type="primary"
            @click="login3"
            style="width: 100px; margin-bottom: 8px; font-size: 14px"
            >提交
            <Icon
              size="16"
              style="margin-left: 2px"
              type="md-arrow-round-forward"
            />
          </Button>
        </div>
      </div>
      <div
        style="width: 750px; margin: 0 auto; padding: 20px"
        v-show="current === 2"
      >
        <div class="current-div">
          <h2>法定代表人授权书提交成功！</h2>
          <p>感谢您的支持，平台将在1小时之内为您审核！</p>
          <p>请留意平台短信通知！</p>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import {
  validateFault,
  validateSpecial,
  validateCode,
  validateIDCard,
  validateEmail,
  validatePhone,
  validateIdentCode,
} from "@/libs/validate";
export default {
  // component: { vRegion },
  name: "register",
  data() {
    return {
      formItem: {
        companyname: "",
        socode: "",
        name: "",
        idcard: "",
        uemail: "",
        phone: "",
        identcode: "",
        area: "",
        positionnum: "",
      },
      fileData: null,
      Lists: [],
      msg: "",
      phonecode: 0,
      current: 0,
      show: "",
      showbtn: 0,
      first: true,
      countdown: 61,
      timer: null,
      isAccess: false,
      ruleValidate: {
        companyname: [
          {
            reqiured: true,
            trigger: "blur",
            message: "机构名称不能为空！",
          },
          {
            validator: validateSpecial,
            trigger: "blur",
          },
          {
            max: 50,
            message: "机构名称长度不能超过50个字符！",
            trigger: "blur",
          },
        ],
        socode: [{ reqiured: true, validator: validateCode, trigger: "blur" }],
        name: [
          {
            reqiured: true,
            trigger: "blur",
            message: "姓名不能为空！",
          },
          { validator: validateFault, trigger: "blur" },
          { max: 32, message: "姓名长度不能超过24个字符！", trigger: "blur" },
        ],
        idcard: [
          { reqiured: true, validator: validateIDCard, trigger: "blur" },
        ],
        uemail: [{ reqiured: true, validator: validateEmail, trigger: "blur" }],
        phone: [{ reqiured: true, validator: validatePhone, trigger: "blur" }],
        positionnum: [
          { required: true, message: "请选择所在行政区域！", trigger: "blur" },
        ],
        // identcode: [{ validator: validateIdentCode, trigger: "blur" }],
      },
    };
  },
  watch: {},
  computed: {},
  methods: {
    login2() {
      this.$refs.formItem.validate((valid) => {
        if (valid) {
          this.current = 1;
        }
      });
    },
    login3() {
      this.current = 2;
    },
    button(name) {
      // this.$refs[name].validate((valid) => {
      //   if (this.formItem.area === "") {
      //     this.show = 1;
      //   } else {
      //     this.show = 2;
      //   }
      //   if (valid && this.show === 2) {
      //     const info = {
      //       name: this.formItem.companyname,
      //       orgcode: this.formItem.socode,
      //       city: this.formItem.positionnum,
      //       adminrealname: this.formItem.name,
      //       idcardnum: this.formItem.idcard,
      //       mail: this.formItem.uemail,
      //       mobilephone: this.formItem.phone,
      //     };
      //     this.$store.dispatch("getRegister", info);
      //   }
      // });
    },
    handleFormatError(file, fileList) {
      // this.$Notice.warning({
      //   title: "提示",
      //   desc: `文件${file.name} 格式错误`,
      // });
    },
    // 下载法定人授权书
    getDownload() {
      // 下载
      window.location.href =
        "https://bid-files.oss-cn-beijing.aliyuncs.com/public/zzzb/%E6%B3%95%E5%AE%9A%E4%BB%A3%E8%A1%A8%E4%BA%BA%E6%8E%88%E6%9D%83%E4%B9%A6.docx";
    },
    handleBeforeUpload(file) {
      // this.Lists = this.$refs.upload.fileList;
      // const check = this.Lists.length < 1;
      // const list = {
      //   // 变量
      //   corporationauthorigyfile: file,
      //   energyid: this.msg,
      // };
      // this.fileData = list;
      // if (!check) {
      //   this.$Notice.warning({
      //     title: "提示",
      //     desc: "最多可以上传1个文件",
      //   });
      // }
      // return check;
    },
    handleMaxSize(file) {
      // this.$Notice.warning({
      //   title: "提示",
      //   desc: `文件${file.name}超过10M`,
      // });
    },
    haSuccess(res, file, filelist) {
      // const dom = document.getElementsByClassName("ivu-upload-list-file");
      // dom[
      //   dom.length - 1
      // ].children[0].innerHTML += `<span style="margin-left: 20px">${
      //   filelist[dom.length - 1].size / 1000
      // }kb</span><span style="margin-left: 30px;color: #5bbdde">本地上传成功！</span>`;
    },
    submit() {
      // if (this.fileData !== null) {
      //   const config = {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   };
      //   const fd = new FormData();
      //   fd.append(
      //     "corporationauthorigyfile",
      //     this.fileData.corporationauthorigyfile
      //   );
      //   fd.append("energyid", this.fileData.energyid);
      //   this.axios.post("/cebmeta.user/regist2", fd, config).then((res) => {
      //     if (res.status === 200) {
      //       if (res.data.code === 1) {
      //         this.current = 2;
      //       } else if (res.data.code === -1) {
      //         this.$Message.error({
      //           content: "上传附件为空",
      //         });
      //       } else if (res.data.code === -2) {
      //         this.$Message.error({
      //           content: "请填写上一步信息",
      //         });
      //       } else {
      //         this.$Message.error({
      //           content: "提交文件失败",
      //         });
      //       }
      //     }
      //   });
      // } else {
      //   this.$Message.error({
      //     content: "请上传代表人授权书",
      //   });
      // }
      // this.$store.dispatch("getCompany");
      // this.$store.dispatch("getSign");
    },
    regChange(data) {
      // const dom = document.getElementsByClassName("rg-default-btn");
      // if (data.province == null) {
      //   dom[0].innerHTML = '请选择 <span class="rg-caret-down"></span>';
      //   this.formItem.positionnum = "";
      //   this.formItem.area = "";
      // } else {
      //   const arealist = region(data);
      //   this.formItem.positionnum = arealist.num;
      //   this.formItem.area = arealist.text;
      //   dom[0].innerText = arealist.text;
      //   dom[0].value = arealist.num;
      //   if (this.formItem.area === "") {
      //     this.show = 1;
      //   }
      // }
    },
    getidentcode() {
      // if(this.formItem.phone.trim() === '') {
      //   return this.$Message.error('请输入手机号！')
      // }
      // if(!this.REG.reg.telphone.test(this.formItem.phone)) {
      //   return this.$Message.error('手机号输入错误，请重新输入！')
      // }
      // if (!this.timer) {
      //   this.countdown = 6;
      //   this.showbtn = 1;
      //   this.timer = setInterval(() => {
      //     if (this.countdown > 1) {
      //       this.showbtn = 1;
      //       this.countdown = this.countdown - 1;
      //     } else {
      //       this.showbtn = 0;
      //       this.countdown = 6;
      //       clearInterval(this.timer);
      //       this.timer = null;
      //     }
      //   }, 1000);
      // }
    },
    isMatch() {
      // return true;
    },
    isRegister() {
      // return true;
    },
    pRegister() {
      // return true;
    },
    routego() {
      // this.$router.push("/login");
    },
  },
};
</script>

<style lang="less">
.ivu-form .ivu-form-item-label {
  font-size: 14px;
}

.register {
  .alert {
    color: red;
    font-size: 12px;
  }

  .title {
    color: #2d8cf0;
    margin-top: 10px;
  }

  .form-item {
    display: flex;
    margin-top: 10px;

    /* >span:first-of-type {
      width: 12em;
      text-align: right;
    } */

    .alert {
      margin-left: 10px;
      margin-top: -6px;
      // max-width: 200px;
      // color: #F36363;
    }
  }

  .sub {
    position: absolute;
    right: 40px;
    bottom: 10px;
    display: flex;
    flex-direction: column;
  }

  .process {
    span {
      margin-right: 20px;
      font-weight: bold;
    }
  }

  .current-div {
    padding: 60px 0;
    text-align: center;

    h2 {
      margin-bottom: 30px;
    }

    p:nth-of-type(1) {
      margin-bottom: 30px;
    }

    p:nth-of-type(2) {
      color: #2d8cf0;
    }
  }

  .ivu-form-item {
    margin-bottom: 16px;
    margin-top: -5px;
  }

  .v-region {
    display: inline-block;
    margin-top: -6px;

    button {
      width: 100%;
    }
  }

  .rg-caller-container {
    width: 100%;
  }
}
</style>
