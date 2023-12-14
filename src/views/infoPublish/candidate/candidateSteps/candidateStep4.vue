<template>
  <div class="addCandidateStep5">
    <Row style="width: 100%">
      <Row type="flex" justify="space-between">
        <Col style="width: 300px; max-width: 300px">
          <div class="inner-side">
            <div class="side-head">
              <strong>中标候选人列表</strong>
            </div>
            <div class="list">
              <section
                class="list-item"
                v-for="(bidItem, bidIndex) in candidateList"
                :key="bidItem.id"
              >
                <div class="title">
                  <strong>标段（包）{{ bidIndex + 1 }}</strong>
                  <Icon type="ios-add-circle-outline" size="14" />
                  <span
                    style="cursor: pointer"
                    @click="addCandidat(bidItem, bidIndex)"
                    >添加中标候选人</span
                  >
                </div>
                <div class="list-item-title">{{ bidItem.title }}</div>
                <div
                  class="list-item-sub"
                  v-for="(bidderItem, bidderIndex) in bidItem.bidderList"
                  :key="bidderItem.id"
                >
                  <Row>
                    <Col :span="3" style="text-align: center"
                      ><span class="num-style">{{ bidderIndex + 1 }}</span></Col
                    >
                    <Col :span="18"
                      style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;"
                      ><span
                        @click="liClick(bidderItem, bidIndex, bidItem)"
                        :title="bidderItem.candidateName"
                        style="
                          color: white;
                          text-decoration: underline;
                          cursor: pointer;
                        "
                      >
                        {{ bidderItem.candidateName }}</span
                      ></Col
                    >
                    <Col :span="3" style="text-align: center"
                      ><Icon
                        type="ios-trash-outline"
                        style="cursor: pointer"
                        size="20"
                        @click="removeLi(bidderItem)"
                    /></Col>
                  </Row>
                </div>
              </section>
              <div class="bottom">
                <Button size="large" @click="pre">上一步</Button>
                <Button size="large" type="primary" @click="next('formItem')"
                  >保存，下一步</Button
                >
              </div>
            </div>
          </div>
        </Col>
        <Col style="flex: 1">
          <div class="step-center" v-show="canInfoFlag">
            <Card style="margin-bottom: 10px">
              <strong>中标候选人及项目负责人信息</strong>
            </Card>
            <Card>
              <div style="color: #0366d5; margin-bottom: 8px">
                标段（包）{{ canIndex + 1 }}：{{ canTitle }}
              </div>
              <Form
                ref="formItem"
                :model="formItem"
                :label-width="150"
                :rules="ruleValidate"
              >
                <Row :gutter="10">
                  <Col :span="14">
                    <FormItem prop="sort" style="width: 100%" label="排名">
                      <Input v-model="formItem.sort" style="width: 100%" />
                    </FormItem>
                  </Col>
                  <Col :span="10" style="margin-top: 6px">
                    请输入从1开始的整数
                  </Col>
                </Row>
                <Row>
                  <Col :span="24">
                    <FormItem
                      prop="candidateName"
                      style="width: 100%"
                      label="中标候选人名称"
                    >
                      <Input v-model="formItem.candidateName" />
                    </FormItem>
                  </Col>
                </Row>
                <Row :gutter="10">
                  <Col :span="14">
                    <FormItem prop="candidateCodeType" label="中标候选人代码">
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
                <Row>
                  <FormItem label="工期/交货期/服务期" prop="delivery">
                    <Row>
                      <Col :span="10">
                        <Input v-model="formItem.delivery" />
                      </Col>
                      <Col :span="10" style="margin-left: 10px">
                        天
                        <span
                          class="tip"
                          style="font-size: 12px; margin-left: 20px"
                          >没有可填0</span
                        >
                      </Col>
                    </Row>
                  </FormItem>
                </Row>
                <Row>
                  <Col :span="24">
                    <FormItem>
                      <Button style="width: 100px" @click="addConsortiu"
                        >增加联合体</Button
                      >
                      <span
                        class="tip"
                        style="font-size: 12px; margin-left: 20px"
                        >联合体的其他机构或名称</span
                      >
                    </FormItem>
                  </Col>
                </Row>
                <Row v-if="unionFlag">
                  <Row>
                    <Col :span="20">
                      <FormItem prop="unionCompanyName" label="公司名称">
                        <Input
                          v-model="formItem.unionCompanyName"
                          :maxlength="100"
                        />
                      </FormItem>
                    </Col>
                  </Row>
                  <Row :gutter="10">
                    <Col :span="20">
                      <FormItem prop="unionCompanyNumber" label="公司代码">
                        <Input
                          v-model="formItem.unionCompanyNumber"
                          :maxlength="100"
                        />
                      </FormItem>
                    </Col>
                    <Col :span="4">
                      <Button class="fontstl" @click="del">删除</Button>
                    </Col>
                  </Row>
                </Row>

                <Divider></Divider>
                <Row>
                  <span
                    class="priceTitle"
                    style="font-size: 14px; font-weight: bold"
                    >投标报价（中标价格、中标费率、其他类型中标价 至少填写一项）</span
                  >
                </Row>
                <Row>
                  <Row :gutter="8">
                    <Row>
                      <Col :span="20"
                        ><FormItem prop="bidPrice" label="投标报价金额">
                          <Input
                            v-model="formItem.bidPrice"
                            @on-change="
                              formItem.bidPrice === ''
                                ? null
                                : (priceFlag = false)
                            "
                          /> </FormItem
                      ></Col>
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
                          margin-left: 150px;
                          margin-top: -22px;
                          color: #ed4014;
                        ">注意！金额超过10亿元</p>
                      </Col>
                      <Col
                        :span="20"
                        v-if="priceFlag"
                        
                      >
                        <p style="
                          margin-left: 150px;
                          margin-top: -22px;
                          color: #ed4014;
                        ">投标报价三项至少选择一项！</p>
                      </Col>
                    </Row>
                  </Row>
                  <Row>
                    <Col :span="20">
                      <FormItem prop="rate" label="费率">
                        <Input
                          v-model="formItem.rate"
                          @on-change="
                            formItem.rate === '' ? null : (priceFlag = false)
                          "
                        /> </FormItem
                    ></Col>
                    <Col :span="4"></Col>
                    <Col
                      :span="20"
                      v-if="priceFlag"
                      
                    >
                      <p style="
                        margin-left: 150px;
                        margin-top: -22px;
                        color: #ed4014;
                      ">投标报价三项至少选择一项！</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col :span="20"
                      ><FormItem prop="otherPrice" label="其他类型投标报价">
                        <Input
                          v-model="formItem.otherPrice"
                          @on-change="
                            formItem.otherPrice === ''
                              ? null
                              : (priceFlag = false)
                          "
                        /> </FormItem
                    ></Col>
                    <Col :span="4"></Col>
                    <Col
                      :span="20"
                      v-if="priceFlag"
                      
                    >
                      <p style="
                        margin-left: 150px;
                        margin-top: -22px;
                        color: #ed4014;
                      ">投标报价三项至少选择一项！</p>
                    </Col>
                  </Row>
                </Row>
                <Divider></Divider>
                <Row>
                  <Col :span="24">
                    <FormItem prop="projectManager" label="项目负责人姓名">
                      <Input v-model="formItem.projectManager" />
                    </FormItem>
                  </Col>
                </Row>
                <Row :gutter="10">
                  <Col :span="12">
                    <FormItem label="项目负责人证件" prop="identityType">
                      <Select v-model="formItem.identityType">
                        <Option
                          v-for="item in idType"
                          :value="item.value"
                          :key="item.value"
                          >{{ item.label }}
                        </Option>
                      </Select>
                    </FormItem>
                  </Col>
                  <Col :span="12">
                    <FormItem prop="identityNumber" class="labelHidden">
                      <Input
                        v-model="formItem.identityNumber"
                        :maxlength="18"
                      />
                    </FormItem>
                  </Col>
                </Row>
                <Row>
                  <Col :span="24">
                    <FormItem
                      prop="certificate"
                      label="项目负责人相关证书和编号"
                    >
                      <Input
                        type="textarea"
                        :maxlength="5000"
                        v-model="formItem.certificate"
                        show-word-limit
                      /> </FormItem
                  ></Col>
                </Row>
                <Divider></Divider>
                <Row :gutter="10">
                  <Col :span="24">
                    <FormItem prop="quality" label="质量">
                      <Input
                        type="text"
                        :maxlength="25"
                        show-word-limit
                        v-model="formItem.quality"
                      />
                    </FormItem>
                  </Col>
                </Row>
                <Row :gutter="10">
                  <Col :span="24">
                    <FormItem
                      prop="qualification"
                      label="中标候选人响应招标文件的资格能力条件"
                    >
                      <Input
                        type="text"
                        :maxlength="25"
                        show-word-limit
                        v-model="formItem.qualification"
                      />
                    </FormItem>
                  </Col>
                </Row>
                <Row :gutter="10">
                  <Col :span="24">
                    <FormItem prop="evaluation" label="评标情况">
                      <Input
                        type="text"
                        :maxlength="25"
                        show-word-limit
                        v-model="formItem.evaluation"
                      />
                    </FormItem>
                  </Col>
                </Row>
                <div class="center">
                  <Button
                    size="large"
                    style="width: 150px"
                    @click="save('formItem')"
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
import { validateSpecial, validateCode, validateFault } from "@/libs/validate";
import {
  viewCanBids,
  saveCanProInfo,
  removeCanBid,
  findCanSectionsForNotice,
  checkSort,
} from "@/api/publishApi";
export default {
  name: "candidateStep4",
  props: {
    currentStep: {
      type: Number,
      default: 3,
    },
  },
  data() {
    const sortVali = (rule, value, callback) => {
      let reg = /^[1-9]\d{0,}$/;
      if (!reg.test(value)) {
        callback(new Error("请输入大于0的整数！"));
      } else {
        checkSort({
          noticeId: this.getStore("candidateId"),
          sectionId: this.sectionId,
          sort: this.formItem.sort,
          bidderId: this.bidderId ? this.bidderId : 0,
        }).then((res) => {
          if (res.success) {
            if (res.result) {
              callback();
            } else {
              callback(new Error("当前序号已存在！"));
            }
          }
        });
      }
    };
    const deliveryVali = (rule, value, callback) => {
      let reg = /^(?!0\d)\d+([.][0-9]{1}){0,1}$/;
      if (!reg.test(value)) {
        callback(new Error("请输入最多保留一位小数的正数！"));
      } else {
        callback();
      }
    };
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
      if (value === "") {
        callback();
      } else if (!reg.test(value)) {
        callback(new Error("请输入数字！"));
      } else {
        callback();
      }
    };
    return {
      priceFlag: false,
      flag1: false,
      unionFlag: false, // 联合体标识
      canInfoFlag: false,
      bidId: "", // 标段id
      bidderId: "", // 中标候选人id
      canIndex: 0,
      canTitle: "", // 当前标段标题
      candidateList: [],
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
      idType: [
        {
          value: 1,
          label: "身份证",
        },
        {
          value: 2,
          label: "护照",
        },
      ],
      formItem: {
        sort: "",
        candidateName: "",
        candidateCodeType: "",
        candidateCode: "",
        delivery: "0",
        unionCompanyName: "",
        unionCompanyNumber: "",
        bidPrice: "",
        rate: "",
        otherPrice: "",
        projectManager: "",
        identityType: 1,
        identityNumber: "",
        certificate: "",
        quality: "",
        qualification: "",
        evaluation: "",
      },
      ruleValidate: {
        sort: [
          { required: true, message: "排名不能为空！", trigger: "blur" },
          {
            max: 8,
            message: "排名长度不能超过8个字符！",
            trigger: "blur",
          },
          {
            validator: sortVali,
            trigger: "blur",
          },
          
        ],
        identityType: [
          {
            type: "number",
            required: true,
            message: "请选择项目负责人证件！",
            trigger: "change",
          },
        ],
        delivery: [
          { required: true, message: "工期不能为空！", trigger: "blur" },
          { validator: deliveryVali, trigger: "blur" },
          {
            max: 100,
            message: "候选人名称长度不能超过100个字符！",
            trigger: "blur",
          },
        ],
        candidateName: [
          {
            required: true,
            message: "请输入中标候选人名称！",
            trigger: "blur",
          },
          { validator: validateSpecial, trigger: "blur" },
          {
            max: 100,
            message: "候选人名称长度不能超过100个字符！",
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
          { required: true, message: "请输入中标候选人代码！", trigger: "blur" },
          {
            max: 50,
            message: "代码长度不能超过50个字符！",
            trigger: "blur",
          },
        ],
        unionCompanyName: [
          { required: true, message: "请输入公司名称！", trigger: "blur" },
          { validator: validateSpecial, trigger: "blur" },
          {
            max: 100,
            message: "公司名称长度不能超过100个字符！",
            trigger: "blur",
          },
        ],
        unionCompanyNumber: [
          { required: true, message: "请输入公司代码！", trigger: "blur" },
          { validator: validateSpecial, trigger: "blur" },
          {
            max: 100,
            message: "公司代码长度不能超过100个字符！",
            trigger: "blur",
          },
        ],
        projectManager: [
          {
            required: true,
            message: "请选择项目负责人证件！",
            trigger: "change",
          },
          { validator: validateFault, trigger: "blur" },
          {
            max: 100,
            message: "项目负责人姓名长度不能超过100个字符！",
            trigger: "blur",
          },
        ],
        identityNumber: [
          {
            required: true,
            message: "请输入项目负责人相关证件号！",
            trigger: "blur",
          },
          {
            max: 50,
            message: "相关证件号长度不能超过50个字符！",
            trigger: "blur",
          },
        ],
        certificate: [
          {
            required: true,
            message: "请输入项目负责人相关证书和编号！",
            trigger: "blur",
          },
          {
            max: 5000,
            message: "项目负责人相关证书和编号长度不能超过5000个字符！",
            trigger: "blur",
          },
        ],
        qualification: [
          {
            required: true,
            message: "请输入资格能力条件！",
            trigger: "blur",
          },
          {
            max: 25,
            message: "能力条件长度不能超过25个字符！",
            trigger: "blur",
          },
        ],
        quality: [
          {
            required: true,
            message: "请输入质量内容！",
            trigger: "blur",
          },
          { validator: validateSpecial, trigger: "blur" },
          {
            max: 5000,
            message: "质量内容长度不能超过5000个字符！",
            trigger: "blur",
          },
        ],
        evaluation: [
          {
            required: true,
            message: "请输入评标情况！",
            trigger: "blur",
          },
          { validator: validateSpecial, trigger: "blur" },
          {
            max: 5000,
            message: "评标情况长度不能超过5000个字符！",
            trigger: "blur",
          },
        ],
        bidPrice: [{ validator: validatePass1, trigger: "blur" }],
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
      sortFlag: false,
      sectionId: "",
    };
  },
  created() {
    this.viewTenderBids();
  },
  activated() {
    if (this.getStore("candidateAdd")) {
      this.removeStore("candidateAdd");
      this.$emit("update:currentStep", 0);
    }
  },
  methods: {
    // 回显已选择的标段
    viewTenderBids() {
      findCanSectionsForNotice(this.getStore("candidateId")).then((res) => {
        if (res.success) {
          this.candidateList = res.result;
        }
      });
    },
    liClick(item, index, bItem) {
      this.priceFlag = false;
      this.canInfoFlag = true;
      this.$refs.formItem.resetFields();
      this.canTitle = bItem.title;
      this.bidId = bItem.id;
      this.canIndex = index;
      this.sectionId = this.candidateList[index].sectionId;
      this.bidderId = item.id;
      if (item.unionCompanyName) {
        this.unionFlag = true;
      } else {
        this.unionFlag = false;
      }
      this.formItem.sort = item.sort + "";
      this.formItem.candidateName = item.candidateName;
      this.formItem.candidateCodeType = item.candidateCodeType;
      this.formItem.candidateCode = item.candidateCode;
      this.formItem.delivery = item.delivery + "";
      this.formItem.unionCompanyName = item.unionCompanyName;
      this.formItem.unionCompanyNumber = item.unionCompanyNumber;
      this.formItem.bidPrice = item.bidPrice + "";
      this.formItem.rate = item.rate + "";
      this.formItem.otherPrice = item.otherPrice;
      this.formItem.projectManager = item.projectManager;
      this.formItem.identityType = item.identityType;
      this.formItem.identityNumber = item.identityNumber;
      this.formItem.certificate = item.certificate;
      this.formItem.quality = item.quality;
      this.formItem.qualification = item.qualification;
      this.formItem.evaluation = item.evaluation;
    },
    pre() {
      this.$emit("update:currentStep", 2);
    },
    // 保存，下一步
    next() {
      let flag = this.candidateList.every((item) => {
        return item.bidderList.length;
      });
      if (flag) {
        this.$emit("update:currentStep", 4);
      } else {
        return this.$Modal.warning({
          title: "提示",
          content: "当前存在标段（包）未添加中标候选人信息，请添加完成后提交！",
        });
      }
    },
    removeLi(item) {
      this.$Modal.confirm({
        title: "提示",
        content: "确认删除当前中标候选人信息？",
        onOk: () => {
          removeCanBid(item.id).then((res) => {
            if (res.success) {
              if (this.bidderId == item.id) {
                this.canInfoFlag = false;
              }
              this.viewTenderBids();
              this.$Message.success("删除成功！");
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
            noticeId: this.getStore("candidateId"),
          };
          data.sectionId = this.sectionId;
          data.id = this.bidderId ? this.bidderId : "";
          saveCanProInfo(data).then((res) => {
            if (res.success) {
              this.viewTenderBids();
              this.canInfoFlag = false;
            }
          });
        }
      });
    },
    addCandidat(item, num) {
      this.priceFlag = false;
      this.$refs.formItem.resetFields();
      if (this.candidateList[num].bidderList.length == 0) {
        this.formItem.sort = "1";
      } else {
        let len = this.candidateList[num].bidderList.length;
        this.formItem.sort =
          this.candidateList[num].bidderList[len - 1].sort + 1 + "";
      }
      this.sectionId = this.candidateList[num].sectionId;
      this.canInfoFlag = true;
      this.canIndex = num;
      this.canTitle = this.candidateList[num].title;
      this.bidId = item.id;
      this.bidderId = "";
      this.unionFlag = false;
      this.formItem.unionCompanyName = "";
      this.formItem.unionCompanyNumber = "";
    },
    addConsortiu() {
      this.unionFlag = true;
    },
    del() {
      this.formItem.unionCompanyName = "";
      this.formItem.unionCompanyNumber = "";
      this.unionFlag = false;
    },
  },
};
</script>
<style lang="less">
.addCandidateStep5 {
  display: flex;
  .ivu-divider-horizontal {
    margin: 18px 0;
  }
  .inner-side {
    height: calc(100vh - 132px);
    position: relative;
    width: 300px;
    min-width: 300px;
    max-width: 300px;
    background-color: #e4e4e4;
    padding: 20px;
    display: inline-block;
    .side-head {
      margin-bottom: 10px;
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
        .ivu-icon-ios-identityNumber-outline {
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
          width: 100%;
          line-height: 36px;
          height: 36px;
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
        display: flex;
        justify-content: space-around;
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
    flex-grow: 1;
    margin-left: 10px;
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    .step-container {
      .title {
        font-size: 12px;
      }
    }
    .cops {
      font-size: 12px;
      .ivu-input-wrapper {
        margin: 0 8px;
      }
    }
    .radio-group {
      .title {
        display: inline-block;
      }
    }
    .ivu-icon-md-add-circle,
    .ivu-icon-ios-identityNumber-outline {
      cursor: pointer;
      position: relative;
    }
    .ivu-icon-md-add-circle:hover:after,
    .ivu-icon-ios-identityNumber-outline:hover:after {
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
    .ivu-icon-ios-identityNumber-outline:hover:after {
      content: "插入模板";
      right: -10px;
    }
  }

  .priceTitle::before {
    content: "*";
    display: inline-block;
    margin-right: 4px;
    line-height: 1;
    font-family: SimSun;
    font-size: 14px;
    color: #ed4014;
  }
  .ivu-form-item-error-tip{
    white-space: nowrap;
  }
  .labelHidden .ivu-form-item-content {
    margin-left: 0px !important;
  }
}

</style>
