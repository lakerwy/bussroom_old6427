<template>
  <div id="certificate">
    <Modal v-model="codeFlag" title="生成二维码" style="text-align:center;" @on-ok="ok" @on-cancel="cancel">
      <p style=" text-align:center;">
        <Icon type="ios-contacts" size="30" />微信扫一扫，分享到朋友圈
      </p>
      <img :src="codeSrc" style="margin:0 auto;" alt />

    </Modal>
    <!-- 个人信息完善 -->
    <Modal v-model="infoFlag" title="个人信息完善" style="text-align:center;" footer-hide @on-cancel="cancelInfo">
      <Form ref="personnelData" :model="personnelData" :rules="rulePer">
        <FormItem label="姓名：" prop="nickname">
          <Input v-model="personnelData.nickname" placeholder="请输入您的姓名"></Input>
        </FormItem>
        <FormItem label="手机号：" prop="mobile">
          <Input v-model="personnelData.mobile" placeholder="请输入您的手机号"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="upInfo('personnelData')" long>确认</Button>
        </FormItem>
      </Form>
    </Modal>

    <Card>
      <Tabs type="card" v-model="tabsFlag">
        <TabPane label="公司信息" name="1" style="margin-top:20px;">
          <Form label-position="left" ref="companyData" :model="companyData" :rules="ruleCustom" :label-width="120">
            <FormItem label="公司名称" prop="companyName">
              <Input class="half" type="text" v-model="companyData.companyName" placeholder="请输入公司名称"></Input>
            </FormItem>
            <FormItem label="公司座机" prop="telNumber">
              <Input class="half" type="text" v-model="companyData.telNumber" placeholder="请输入公司座机"></Input>
            </FormItem>
            <FormItem label="地址" prop="address">
              <Input class="half" type="text" v-model="companyData.address" placeholder="请输入公司地址"></Input>
            </FormItem>
            <FormItem label="主营业务/产品" prop="product">
              <Input class="half" type="text" v-model="companyData.product" placeholder="请输入公司主营业务/产品"></Input>
            </FormItem>

            <FormItem label="关注行业" prop="category2">
              <Row>
                <Col span="4">
                <Select transfer v-model="companyData.category1" placeholder="一级行业" @on-change="selectCate">
                  <Option v-for="(item,i) in category1" :value="item.name" :key="i">{{ item.name }}</Option>
                </Select>
                </Col>
                <Col span="4" push="1">
                <Input value="1" v-show="false"></Input>
                <Select transfer v-model="companyData.category2" placeholder="二级行业">
                  <Option v-for="(item,i) in nowCategory2" :value="item.name" :key="i">{{ item.name }}</Option>
                </Select>
                </Col>
              </Row>
            </FormItem>
            <FormItem label="经营模式" prop="companyType">
              <Input class="half" type="text" v-model="companyData.companyType" placeholder="请填写公司经营模式"></Input>
            </FormItem>
            <p class="statement" v-show="false">
              <Checkbox v-model="single" size="small"></Checkbox>
              我声明，此页面所填写的内容均真实有效，特别是经营地址为店铺最新可联系到的地址，同时可以作为行政机关和司法机关送达法律文件的地址。如果上述地址信息有误，愿意承担由此带来的平台处罚《
              <span style="color:#2d8cf0;cursor:pointer;">处罚细则</span> 》、行政监管和司法诉讼风险。
            </p>

            <FormItem>
              <Button type="primary" @click="save('companyData')">保存</Button>
            </FormItem>
          </Form>
        </TabPane>
        <TabPane label="企业名片" name="2">
          <p style="text-align:center;margin-top:80px;color:#999;">
            您还未生成名片
            <br>
            <br>
            <Button style="margin:0;" type="primary" :disabled="timeoutFlag" @click="getCard">
              生成名片
              <span v-show="timeoutFlag">({{ timeout }}S)</span>
            </Button>
          </p>
        </TabPane>
      </Tabs>
    </Card>
  </div>
</template>

<script>
  import {
    update,
    create,
    getCode,
    editUser,
    linkFlag,
    getCompanyInfo,
    userInfo,
    getInviteCode
  } from "@/api/index";
  import Cookies from "js-cookie";
  export default {
    name: "certificate",
    // name: "certificate",

    data() {
      const validateTel = (rule, value, callback) => {
        // 座机号验证
        var a = /^(0\d{2,3}-\d{7,8})|已填写$/;
        if (a.test(value)) {
          callback();
        } else {
          callback(new Error(`请输入正确格式的电话号码"区号-号码"`));
        }
      };

      const validateMobile = (rule, value, callback) => {
        // 手机号验证
        var a = /^1[3456789]\d{9}$/;
        if (a.test(value)) {
          callback();
        } else {
          callback(new Error(`请输入正确格式的手机号`));
        }
      };

      const validateText = (rule, value, callback) => {
        // 长度限制
        if (!value || value.length<=50) {
          callback();
        } else {
          callback(new Error(`长度不超过50`));
        }
      };

      return {
        companyData: {
          companyName: "",
          telNumber: "",
          address: "",
          product: "",
          category1: "",
          category2: "",
          companyType: "",
          id: ""
        },
        personnelData: {
          nickname: "",
          mobile: ""
        },
        ruleCustom: {
          companyName: [{
            required: true,
            message: "请填写公司名称",
            trigger: "blur"
          }],
          address:[
            {
              validator: validateText,
              trigger: "blur"
            }
          ],
          telNumber: [
            {
              required: true,
              message: "请填写公司座机",
              trigger: "blur"
            },
            {
              validator: validateTel,
              trigger: "blur"
            }
          ],
          product: [
            {
            required: true,
            message: "请填写公司主营业务/产品",
            trigger: "blur"
          },
          {
              validator: validateText,
              trigger: "blur"
            }
          ],
          category2: [{
            required: true,
            message: "请填写公司主营业务/产品",
            trigger: "blur"
          }],
          companyType:[
            {
              validator: validateText,
              trigger: "blur"
            }
          ]
        },
        rulePer: {
          nickname: [{
            required: true,
            message: "请填写姓名",
            trigger: "blur"
          }],
          mobile: [{
              required: true,
              message: "请填写手机号",
              trigger: "blur"
            },
            {
              validator: validateMobile,
              trigger: "blur"
            }
          ]
        },
        category1: [{
            name: "交通运输",
            value: "1"
          },
          {
            name: "能源化工--电力",
            value: "2"
          },
          {
            name: "能源化工--化工",
            value: "3"
          },
          {
            name: "冶金矿产",
            value: "4"
          },
          {
            name: "机械电子",
            value: "5"
          },
          {
            name: "网络通讯计算机",
            value: "6"
          },
          {
            name: "市政房地产建筑",
            value: "7"
          },
          {
            name: "水利",
            value: "8"
          },
          {
            name: "环保",
            value: "9"
          },
          {
            name: "医疗卫生",
            value: "10"
          },
          {
            name: "科技文教旅游",
            value: "11"
          },
          {
            name: "出版印刷",
            value: "12"
          },
          {
            name: "轻工纺织食品",
            value: "13"
          },
          {
            name: "农林牧渔",
            value: "14"
          },
          {
            name: "商业服务",
            value: "15"
          },
          {
            name: "园林绿化",
            value: "16"
          }
        ],
        category2: [
          [{
              name: "高速公路、道路",
              value: "101"
            },
            {
              name: "桥梁、立交桥",
              value: "102"
            },
            {
              name: "机场",
              value: "103"
            },
            {
              name: "铁路、轨道交通",
              value: "104"
            },
            {
              name: "航道、水利枢纽",
              value: "105"
            },
            {
              name: "港口、码头、泊位、渔港",
              value: "106"
            },
            {
              name: "客运站、交通枢纽",
              value: "107"
            },
            {
              name: "隧道",
              value: "108"
            },
            {
              name: "物流",
              value: "109"
            }
          ],
          [{
              name: "火电",
              value: "201"
            },
            {
              name: "核电",
              value: "202"
            },
            {
              name: "水电",
              value: "203"
            },
            {
              name: "风电",
              value: "204"
            },
            {
              name: "电网建设",
              value: "205"
            },
            {
              name: "太阳能、光伏发电",
              value: "206"
            },
            {
              name: "垃圾焚烧发电及其他新能源发电",
              value: "207"
            },
            {
              name: "水泥余热发电",
              value: "208"
            }
          ],
          [{
              name: "天然气、输气管道",
              value: "301"
            },
            {
              name: "石油、石化",
              value: "302"
            },
            {
              name: "有机化学",
              value: "303"
            },
            {
              name: "无机化学",
              value: "304"
            },
            {
              name: "煤化工",
              value: "305"
            }
          ],
          [{
              name: "选煤厂、煤矿、尾矿",
              value: "401"
            },
            {
              name: "矿山、矿产、矿石",
              value: "402"
            },
            {
              name: "水泥生产线、混凝土",
              value: "403"
            },
            {
              name: "金属冶炼",
              value: "404"
            },
            {
              name: "钢厂、钢结构",
              value: "405"
            },
            {
              name: "玻璃及其他",
              value: "406"
            }
          ],
          [{
              name: "机械产品、厂房、生产车间",
              value: "501"
            },
            {
              name: "医疗器械、电子产品、电器产品",
              value: "502"
            },
            {
              name: "造船、造车",
              value: "503"
            }
          ],
          [{
            name: "网络通讯计算机",
            value: "601"
          }],
          [{
              name: "房地产建筑",
              value: "701"
            },
            {
              name: "供热",
              value: "702"
            },
            {
              name: "排水",
              value: "704"
            },
            {
              name: "土地治理",
              value: "705"
            }
          ],
          [{
              name: "水厂、供水",
              value: "801"
            },
            {
              name: "灌溉",
              value: "802"
            },
            {
              name: "围海造地",
              value: "803"
            },
            {
              name: "水库、引水",
              value: "804"
            },
            {
              name: "防护堤、防洪堤",
              value: "805"
            }
          ],
          [{
              name: "垃圾",
              value: "901"
            },
            {
              name: "水处理",
              value: "902"
            },
            {
              name: "废弃物处理",
              value: "903"
            },
            {
              name: "脱硫脱硝、除尘除渣",
              value: "904"
            },
            {
              name: "污泥治理",
              value: "905"
            }
          ],
          [{
              name: "医院",
              value: "1001"
            },
            {
              name: "制药制剂",
              value: "1002"
            }
          ],
          [{
            name: "科技文教旅游",
            value: "1105"
          }],
          [{
            name: "出版印刷",
            value: "1205"
          }],
          [{
              name: "纺织",
              value: "1301"
            },
            {
              name: "食品生产",
              value: "1302"
            },
            {
              name: "肉类加工、屠宰",
              value: "1303"
            },
            {
              name: "造纸",
              value: "1304"
            },
            {
              name: "粮食储备",
              value: "1305"
            },
            {
              name: "卷烟物流",
              value: "1306"
            },
            {
              name: "其他",
              value: "1307"
            }
          ],
          [{
            name: "农林牧渔",
            value: "1405"
          }],
          [{
            name: "商业服务",
            value: "1505"
          }],
          [{
            name: "园林绿化",
            value: "1605"
          }]
        ],
        nowCategory2: [],
        single: true,
        timeout: 15,
        timeoutFlag: false,
        codeSrc: "",
        codeFlag: false,
        infoFlag: false, //test
        companyFlag: false,
        personnelFlag: true,
        tabsFlag: "1"
      };
    },
    methods: {
      init() {
        let v = JSON.parse(Cookies.get("userInfo"));
        // console.log(userInfo);
        if (v.companyId) {
          let id = v.companyId;
          getCompanyInfo(id).then(res => {
            if (res.success) {
              console.log(res);
              for (let key in this.companyData) {
                this.companyData[key] = res.result[key]
                if(this.companyData[key] == null) this.companyData[key] = "";
              }
              console.log(this.companyData);
              this.category1.forEach((item, i) => {
                if (item.name == this.companyData.category1) {
                  this.nowCategory2 = this.category2[i];
                }
              });
            }
          })
        }
      },
      cancelInfo() {
        that.infoFlag = false;
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
            this.setStore("userInfo", res.result);
          }
        });
      },
      save(name) {
        this.$refs[name].validate(valid => {
          if (valid) {
            if (this.single) {
              if (!this.companyData.id) {
                delete this.companyData.id
              }
              update(this.companyData).then(res => {
                if (res.success) {
                  this.$Message.success("更新信息成功");
                  if (!this.companyData.id) {
                    this.companyData.id = res.result.id;
                    let v = Cookies.get("userInfo")
                    v = JSON.parse(v)
                    v.companyId = res.result.id;
                    console.log(v);
                    let endDate = new Date(new Date().getTime() + 24 * 60 * 60 *
                      1000 - 1);
                    Cookies.set("userInfo", JSON.stringify(v), {
                      expires: endDate
                    });
                  }
                  this.updateUserInfo()
                } else {
                  this.$Message.warning("更新信息失败");
                }
              });
            } else {
              this.$Message.warning("请先同意说明");
            }
          }
        });
      },
      upInfo(name) {
        var that = this;
        this.$refs[name].validate(valid => {
          if (valid) {
            editUser(that.personnelData).then(res => {
              if (res.success) {
                that.infoFlag = false;
              }
            });
          }
        });
      },
      selectCate() {
        this.category1.forEach((item, i) => {
          if (item.name == this.companyData.category1) {
            this.nowCategory2 = this.category2[i];
          }
        });
      },
      getCard() {
        this.timeout = 15;
        this.timeoutFlag = true;
        var timeId = setInterval(() => {
          this.timeout -= 1;
          if (this.timeout <= 0) {
            this.timeoutFlag = false;
            this.timeout = 15;
            clearInterval(timeId);
            timeId = null;
          }
        }, 1000);

        this.$Modal.success({
          title: "企业名片",
          content: "通过【企业名片】您可以邀请您的同事加入到您的企业的会员账号中，一起开启高效的办公体验。",
          onOk: () => {
            var that = this;
            create(parseInt(Math.random() * 10000)).then(res => {
              if (res.success) {
                let v = JSON.parse(Cookies.get("userInfo"));
                var inviterId = v.id
                getInviteCode().then(response => { //这里的第一次处理后台返回来的二进制留数据 转化为base64
                  //这里的data数据是后台返回来的，这里的key是params中的键值（byte）
                  return 'data:image/png;base64,' + btoa(
                    new Uint8Array(response).reduce((data, key) => data + String.fromCharCode(key),
                      '')
                  )
                }).then(data => { //这一次箭头函数是依赖于第一次.then函数处理的data值
                  this.codeSrc = data
                })
                that.codeFlag = true;
                // that.getLinkFlag()
              } else if (res.code == 500 && res.message == "请先完善企业信息") {
                this.tabsFlag = "1";
                this.$Message.warning(res.message);
              } else if (res.code == 500 && res.message == "请先完善个人信息") {
                this.infoFlag = true;
              }
            });
          }
        });

      },
      getLinkFlag() {
        let that = this
        let timeId = setInterval(() => {
          linkFlag().then((res) => {
            if (res.success) {
              that.codeFlag = false;
              that.$Message.success("跳转成功");
              clearInterval(timeId)
            }
          })
        }, 1000)
      }
    },
    mounted() {
      this.init()
    }
  };
</script>

<style lang="less">
  #certificate {
    // background-color: #fff;
    // width: 80%;
    .statement {
      margin: 10px;
      font-size: 12px;
      color: #666;
    }
    margin: 0 auto;
    // background: #000;
    .ivu-form-item-error-tip {
      padding-left: 20px;
    }
    .ivu-form-item-content {
      padding-left: 20px;
    }
    .ivu-form-item-label {
            text-align: right;
            padding-right: 18px;
            // padding-left: 20px;
            
        }
        .half {
          width: 380px;
        }
  }
</style>