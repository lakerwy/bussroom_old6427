<template>
  <div class="resultStep5">
    <Row style="width: 100%">
      <Row type="flex" justify="space-between">
        <Col style="width: 300px; max-width: 300px">
          <div class="inner-side">
            <div class="side-head">
              <strong>中标人列表</strong>
            </div>
            <div class="list">
              <section
                class="list-item"
                v-for="(bidItem, bidIndex) in resultList"
                :key="bidIndex"
              >
                <div class="title">
                  <strong>标段（包）{{ bidIndex + 1 }}</strong>

                  <span
                    style="cursor: pointer"
                    @click="addCandidat(bidItem, bidIndex)"
                    ><Icon
                      type="ios-add-circle-outline"
                      size="14"
                    />添加中标人</span
                  >
                </div>
                <div class="list-item-title">{{ bidItem.title }}</div>
                <div
                  class="list-item-sub"
                  v-for="(bidderItem, bidderIndex) in bidItem.bidderList"
                  :key="bidderIndex"
                >
                  <span class="num-style">{{ bidderIndex + 1 }}</span>
                  <span
                    @click="liClick(bidderItem, bidIndex, bidItem)"
                    :title="bidderItem.candidateName"
                    style="
                      color: white;
                      text-decoration: underline;
                      cursor: pointer;
                      width: 210px;
                    "
                  >
                    {{ bidderItem.candidateName }}
                  </span>
                  <Icon
                    type="ios-trash-outline"
                    size="20"
                    @click="removeLi(bidderItem)"
                  />
                </div>
              </section>
              <div class="bottom">
                <Button size="large" @click="pre">上一步</Button>
                <Button
                  size="large"
                  type="primary"
                  style="margin-left: 20px"
                  @click="next('formItem')"
                  >保存，下一步</Button
                >
              </div>
            </div>
          </div>
        </Col>
        <Col style="flex: 1">
          <div class="step-center" v-show="canInfoFlag">
            <Card style="margin-bottom: 10px">
              <strong>中标人信息</strong>
            </Card>
            <Card>
              <Form
                ref="formItem"
                :model="formItem"
                :rules="ruleValidate"
                :label-width="130"
              >
                <div style="margin-bottom: 10px">
                  标标段（包）{{ canIndex + 1 }}：{{ canTitle }}
                </div>
                <div class="step-container">
                  <FormItem
                    prop="candidateName"
                    style="width: 100%"
                    label="中标人名称"
                  >
                    <Input v-model="formItem.candidateName" />
                  </FormItem>
                  <Row :gutter="10">
                    <Col :span="14">
                      <FormItem prop="candidateCodeType" label="中标人代码">
                        <Select v-model="formItem.candidateCodeType">
                          <Option
                            v-for="item in typeList"
                            :value="item.value"
                            :key="item.value"
                            >{{ item.label }}</Option
                          >
                        </Select>
                      </FormItem>
                    </Col>
                    <Col :span="10">
                      <FormItem prop="candidateCode" class="labelHidden">
                        <Input v-model="formItem.candidateCode" />
                      </FormItem>
                    </Col>
                  </Row>
                  <FormItem>
                    <Button @click="addConsortiu">增加联合体</Button>
                    <span
                      style="
                        margin-top: 10px;
                        margin-left: 10px;
                        font-size: 12px;
                      "
                      >联合体的其他机构或名称</span
                    >
                  </FormItem>
                  <Row v-if="unionFlag">
                    <Row>
                      <Col :span="20">
                        <FormItem label="公司名称" prop="unionCompanyName">
                          <Input
                            v-model="formItem.unionCompanyName"
                            :maxlength="100"
                          />
                        </FormItem>
                      </Col>
                    </Row>
                    <Row :gutter="10">
                      <Col :span="20">
                        <FormItem label="公司代码" prop='unionCompanyNumber'>
                          <Input
                            v-model="formItem.unionCompanyNumber"
                            :maxlength="100"
                          />
                        </FormItem>
                      </Col>
                      <Col :span="4">
                        <Button @click="del" style="margin-left: 10px"
                          >删除</Button
                        >
                      </Col>
                    </Row>
                  </Row>
                  <Divider></Divider>
                  <Row style="margin-bottom: 10px">
                    <span
                      class="priceTitle"
                      style="font-size: 14px; font-weight: bold"
                      >投标报价（中标价格、中标费率、其他类型中标价 至少填写一项）</span
                    >
                  </Row>
                  <Row>
                    <Row :gutter="10">
                      <Col :span="20">
                        <FormItem prop="bidPrice" label="中标价格">
                          <Input v-model="formItem.bidPrice" @on-blur="
                              formItem.bidPrice === ''
                                ? null
                                : (priceFlag = false)
                            "/>
                        </FormItem>
                      </Col>
                      <Col :span="4" style="margin-top: 6px">万元</Col>
                    </Row>
                    <Row>
                      <Col
                        :span="20"
                        v-show="
                          formItem.bidPrice.split('.')[0].length >= 6 && flag1
                        "
                        
                      >
                        <p style="
                          margin-left: 130px;
                          margin-top: -22px;
                          color: #ed4014;
                        ">注意！金额超过10亿元</p>
                      </Col>
                      <Col
                        :span="20"
                        v-if="priceFlag"
                        
                      >
                        <p style="
                          margin-left: 130px;
                          margin-top: -22px;
                          color: #ed4014;
                        ">投标报价三项至少选择一项！</p>
                      </Col>
                    </Row>
                    <Row :gutter="10">
                      <Col :span="20">
                        <FormItem prop="rate" label="中标费率">
                          <Input v-model="formItem.rate" @on-blur="
                            formItem.rate === '' ? null : (priceFlag = false)
                          "/> </FormItem
                      ></Col>
                      <Col :span="4"></Col>
                      <Col
                        :span="20"
                        v-if="priceFlag"
                        
                      >
                        <p style="
                          margin-left: 130px;
                          margin-top: -22px;
                          color: #ed4014;
                        ">投标报价三项至少选择一项！</p>
                      </Col>
                    </Row>
                    <Row :gutter="10">
                      <Col :span="20">
                        <FormItem prop="otherPrice" label="其他类型中标价">
                          <Input v-model="formItem.otherPrice" @on-blur="
                            formItem.otherPrice === ''
                              ? null
                              : (priceFlag = false)
                          "/>
                        </FormItem>
                      </Col>
                      <Col :span="4"></Col>
                      <Col
                        :span="20"
                        v-if="priceFlag"
                        
                      >
                        <p style="
                          margin-left: 130px;
                          margin-top: -22px;
                          color: #ed4014;
                        ">投标报价三项至少选择一项！</p>
                      </Col>
                    </Row>
                  </Row>
                </div>
                <div class="center">
                  <Button
                    @click="save('formItem')"
                    size="large"
                    style="width: 150px"
                    >保存</Button
                  >
                </div>
              </Form>
            </Card>
          </div>
        </Col>
      </Row>
    </Row>
  </div>
</template>

<script>
import { validateSpecial, validateCode } from "@/libs/validate";
import { viewResultThird, saveResultEr, removeCanBid } from "@/api/publishApi";
export default {
  name: "resultStep4",
  props: {
    currentStep: {
      type: Number,
      default: 3,
    },
  },
  data() {
    const validatePass1 = (rule, value, callback) => {
      let reg = /^((0)|([1-9][0-9]*)|(([0]\.\d+|[1-9][0-9]*\.\d+)))$/;
      if (value === "") {
        this.flag1 = true;
        callback();
      } else if (value.match(reg) == null) {
        this.flag1 = false;
        callback(new Error("请输入合法的金额！"));
      } else {
        this.flag1 = true;
        callback();
      }
    };
    const rateVali = (rule, value, callback) => {
      const reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
      if(value === ''){
        callback();
      }else if (!reg.test(value)) {
        callback(new Error("请输入数字！"));
      } else {
        callback();
      }
    };
    return {
      flag1:false,
      priceFlag: false,
      canInfoFlag: false,
      unionFlag: false, // 联合体标识
      bidId: "", // 标段id
      bidderId: "", // 中标候选人id
      canIndex: 0,
      canTitle: "", // 当前标段标题
      resultList: [],
      typeList: [
        {
          value: "统一社会信用代码",
          label: "统一社会信用代码",
        },
        {
          value: "组织机构代码",
          label: "组织机构代码",
        },
        {
          value: "其他“一证一照”代码",
          label: "其他“一证一照”代码",
        },
        {
          value: "其他机构代码",
          label: "其他机构代码",
        },
        {
          value: "国外企业",
          label: "国外企业",
        },
      ],
      formItem: {
        candidateName: "",
        candidateCodeType: "",
        unionCompanyName: "",
        unionCompanyNumber: "",
        candidateCode: "",
        bidPrice: "",
        rate: "",
        otherPrice: "",
      },
      ruleValidate: {
        candidateName: [
          {
            required: true,
            message: "请输入中标人名称！",
            trigger: "blur",
          },
          { validator: validateSpecial, trigger: "blur" },
          {
            max: 100,
            message: "中标人名称不能超过100个字符！",
            trigger: "blur",
          },
        ],
        candidateCodeType: [
          {
            required: true,
            message: "请选择代码类型！",
            trigger: "change",
          },
        ],
        candidateCode: [
          { required: true, message: "请输入中标人代码！", trigger: "blur" },
          {
            max: 50,
            message: "代码长度不能超过50个字符！",
            trigger: "blur",
          },
        ],
        unionCompanyName: [
          
          {
            required: true,
            message: "请输入公司名称！",
            trigger: "blur",
          },
          { validator: validateSpecial, trigger: "blur" },
          {
            max: 100,
            message: "公司名称长度不能超过100个字符！",
            trigger: "blur",
          },
        ],
        unionCompanyNumber: [
          {
            required: true,
            message: "请输入公司代码！",
            trigger: "blur",
          },
          { validator: validateSpecial, trigger: "blur" },
          {
            max: 100,
            message: "公司代码长度不能超过100个字符！",
            trigger: "blur",
          },
        ],
        bidPrice: [
          { validator: validatePass1, trigger: "blur" },
        ],
        rate: [
          {
            validator: rateVali,
            trigger: "blur",
          },
          {
            max: 100,
            message: "费率不能超过100个字符！",
            trigger: "blur",
          },
        ],
        otherPrice: [
          {
            max: 100,
            message: "其他类型投标报价不能超过100个字符！",
            trigger: "blur",
          },
        ],
      },
      sectionId: "",
    };
  },
  created() {
    this.viewBids();
  },
  activated() {
    if (this.getStore("resultAdd")) {
      this.removeStore("resultAdd");
      this.$emit("update:currentStep", 0);
    }
  },
  methods: {
    // 回显已选择的标段
    viewBids() {
      viewResultThird(this.getStore("resultId")).then((res) => {
        if (res.success) {
          this.resultList = res.result;
        }
      });
    },
    pre() {
      this.$emit("update:currentStep", 2);
    },
    next() {
      let flag = this.resultList.every((item) => {
        return item.bidderList.length;
      });
      if (flag) {
        this.$emit("update:currentStep", 4);
      } else {
        return this.$Modal.warning({
          title: "提示",
          content: "当前存在标段（包）未添加中标人信息，请添加完成后提交！",
        });
      }
    },
    removeLi(item) {
      this.$Modal.confirm({
        title: "提示",
        content: "确认删除当前中标人信息？",
        onOk: () => {
          removeCanBid(item.id).then((res) => {
            if (res.success) {
              this.viewBids();
              this.$Message.success("删除成功！");
              if(this.bidderId == item.id) {
                this.canInfoFlag = false;
              }
            }
          });
        },
      });
    },
    // 保存
    save(name) {
      this.$refs[name].validate((valid) => {
        if (
          this.formItem.bidPrice === "" &&
          this.formItem.rate === "" &&
          this.formItem.otherPrice === ""
        ) {
          this.priceFlag = true;
        } else {
          this.priceFlag = false;
        }
        if (valid && !this.priceFlag) {
          let data = {
            ...this.formItem,
            noticeId: this.getStore("resultId"),
          };
          data.sectionId = this.sectionId;
          data.id = this.bidderId ? this.bidderId : "";
          saveResultEr(data).then((res) => {
            if (res.success) {
              this.viewBids();
              this.canInfoFlag = false;
            }
          });
        }
      });
    },
    addCandidat(item, num) {
      if (this.resultList[num].bidderList.length > 0) {
        this.$Modal.warning({
          title: "提示",
          content: "标段（包）只能有一个中标候选人！",
        });
        return;
      }
      this.priceFlag = false;
      this.sectionId = this.resultList[num].sectionId;
      this.canInfoFlag = true;
      this.canIndex = num;
      this.canTitle = this.resultList[num].title;
      this.bidId = item.id;
      this.bidderId = "";
      this.$refs.formItem.resetFields();
      this.unionFlag = false;
      this.formItem.unionCompanyName = "";
      this.formItem.unionCompanyNumber = "";
    },
    // 增加联合体
    addConsortiu() {
      this.unionFlag = true;
    },
    // 删除联合体
    del() {
      this.unionFlag = false;
      this.formItem.unionCompanyName = "";
      this.formItem.unionCompanyNumber = "";
    },
    liClick(item, index, bItem) {
      this.priceFlag = false;
      this.canInfoFlag = true;
      this.$refs.formItem.resetFields();
      this.canTitle = bItem.title;
      this.bidId = bItem.id;
      this.sectionId = this.resultList[index].sectionId;
      this.canIndex = index;
      this.bidderId = item.id;
      if (item.unionCompanyName) {
        this.unionFlag = true;
      } else {
        this.unionFlag = false;
      }

      this.formItem.candidateName = item.candidateName;
      this.formItem.candidateCodeType = item.candidateCodeType;
      this.formItem.unionCompanyName = item.unionCompanyName;
      this.formItem.unionCompanyNumber = item.unionCompanyNumber;
      this.formItem.candidateCode = item.candidateCode;
      this.formItem.bidPrice = item.bidPrice + "";
      this.formItem.rate = item.rate;
      this.formItem.otherPrice = item.otherPrice;
    },
  },
};
</script>

<style lang="less" scoped>
.resultStep5 {
  display: flex;
  .ivu-divider-horizontal {
    margin: 18px 0;
  }

  .inner-side {
    position: relative;
    min-height: calc(100vh - 132px);
    background-color: #e4e4e4;
    padding: 20px;
    .side-head {
      text-align: center;
      font-size: 14px;
      padding: 0 10px;
      .addition {
        cursor: pointer;
      }
    }
    .list {
      font-size: 12px;
      line-height: 40px;
      max-height: calc(100vh - 300px);
      overflow-x: hidden;
      overflow-y: auto;
      padding-bottom: 30px;
      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #e4e4e4;
        color: #333;

        strong {
          flex-grow: 1;
        }

        .ivu-icon-md-add-circle,
        .ivu-icon-ios-paper-outline {
          margin: 0 4px;
          cursor: pointer;
        }
      }

      section {
        color: #fff;
        margin-bottom: 20px;

        > * {
          padding: 0 10px;
        }

        .list-item-title {
          line-height: 32px;
        }

        .list-item-sub {
          display: flex;
          align-items: center;
          line-height: 36px;
          height: 36px;
          padding-right: 20px;
          position: relative;

          i {
            cursor: pointer;
            position: absolute;
            right: 0;
            display: block;
            // top :calc(50% - 10px);
            margin: auto;
          }

          > span {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
        .num-style {
          display: inline-block;
          width: 14px;
          height: 14px;
          line-height: 14px;
          border-radius: 50%;
          background-color: #fff;
          text-align: center;
          margin-right: 5px;
          font-weight: bold;
        }
      }

      section:nth-of-type(4n + 1) {
        background-color: #2db7f5;

        .list-item-title {
          background-color: #2b85e4;
        }
        .num-style {
          color: #2b85e4;
          overflow: inherit;
        }
      }

      section:nth-of-type(4n + 2) {
        background-color: #19be6b;

        .list-item-title {
          background-color: #199a59;
        }
        .num-style {
          color: #199a59;
          overflow: inherit;
        }
      }

      section:nth-of-type(4n + 3) {
        background-color: #ff9900;

        .list-item-title {
          background-color: #e26c00;
        }
        .num-style {
          color: #e26c00;
          overflow: inherit;
        }
      }

      section:nth-of-type(4n + 4) {
        background-color: #ed4014;

        .list-item-title {
          background-color: #cc3551;
        }
        .num-style {
          color: #cc3551;
          overflow: inherit;
        }
      }

      .bottom {
        position: absolute;
        bottom: 20px;
        left: 0;
        right: 0;
        text-align: center;
      }
    }
  }

  .center {
    text-align: center;
    margin-top: 20px;
    button {
      margin-left: 20px;
    }
  }
  .step-center {
    margin-left: 10px;
    .step-container {
      background-color: #f6f7f8;
      padding: 10px;
      border: 1px solid #e4e4e4;

      .title {
        min-width: 9em;
        font-size: 12px;
      }
    }

    .radio-group {
      .title {
        min-width: 8em;
        display: inline-block;
      }
    }

    .ivu-icon-md-add-circle,
    .ivu-icon-ios-paper-outline {
      cursor: pointer;
      position: relative;
    }

    .ivu-icon-md-add-circle:hover:after,
    .ivu-icon-ios-paper-outline:hover:after {
      content: "保存为模板";
      position: absolute;
      bottom: -20px;
      right: -20px;
      color: #fff;
      background-color: gray;
      font-size: 10px;
      height: 15px;
      line-height: 15px;
      word-break: keep-all;
      padding: 0 4px;
      box-shadow: gray 0 0 4px;
      opacity: 0.8;
    }

    .ivu-icon-ios-paper-outline:hover:after {
      content: "插入模板";
      right: -10px;
    }
  }
}

.labelHidden /deep/ .ivu-form-item-content {
  margin-left: 0px !important;
}
</style>
