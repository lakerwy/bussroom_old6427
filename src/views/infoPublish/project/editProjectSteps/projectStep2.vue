<template>
  <div class="projectStep2">
    <Card class="step-head"
      ><b class="steptitle">资金来源</b
      ><!-- <span class="msgsty">必填</span> --></Card
    >
    <Card class="step-center">
      <Form ref="form" :model="form" :rules="ruleCustom" :label-width="140">
        <Row>
          <Col :span="12">
            <Row type="flex" justify="space-between" :gutter="5">
              <Col :span="22">
                <FormItem label="国有资金" prop="stateFund">
                  <Input type="text" v-model="form.stateFund"></Input>
                </FormItem>
              </Col>
              <Col :span="2"><p class="unitY">万元</p></Col>
            </Row>
            <Col
              :span="24"
              v-show="form.stateFund.split('.')[0].length >= 6  && flag1"
              style="margin-left: 135px; margin-top: -22px; color: #ed4014"
            >
              <p>注意！金额超过10亿元</p>
            </Col>
          </Col>

          <Col :span="12">
            <Row type="flex" justify="space-between" :gutter="5">
              <Col :span="22">
                <FormItem label="境外资金" prop="overseasFund">
                  <Input type="text" v-model="form.overseasFund"></Input>
                </FormItem>
              </Col>
              <Col :span="2"><p class="unitY">万元</p></Col>
            </Row>
            <Col
              :span="24"
              v-show="form.overseasFund.split('.')[0].length >= 6  && flag2"
              style="margin-left: 135px; margin-top: -22px; color: #ed4014"
            >
              <p>注意！金额超过10亿元</p>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col :span="12">
            <Row type="flex" justify="space-between" :gutter="5">
              <Col :span="22">
                <FormItem label="私有资金" prop="privateFund">
                  <Input type="text" v-model="form.privateFund"></Input>
                </FormItem>
              </Col>
              <Col :span="2"><p class="unitY">万元</p></Col>
            </Row>
            <Col
              :span="24"
              v-show="form.privateFund.split('.')[0].length >= 6  && flag3"
              style="margin-left: 135px; margin-top: -22px; color: #ed4014"
            >
              <p>注意！金额超过10亿元</p>
            </Col>
          </Col>
          <Col :span="12">
            <Row type="flex" justify="space-between" :gutter="5">
              <Col :span="22">
                <FormItem label="自筹资金" prop="selfSource">
                  <Input type="text" v-model="form.selfSource"></Input>
                </FormItem>
              </Col>
              <Col :span="2"><p class="unitY">万元</p></Col>
            </Row>
            <Col
              :span="24"
              v-show="form.selfSource.split('.')[0].length >= 6  && flag4"
              style="margin-left: 135px; margin-top: -22px; color: #ed4014"
            >
              <p>注意！金额超过10亿元</p>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col :span="12">
            <Row type="flex" justify="space-between" :gutter="5">
              <Col :span="22">
                <FormItem label="其它" prop="otherFund">
                  <Input
                    type="text"
                    :maxlength="50"
                    v-model="form.otherFund"
                  ></Input>
                </FormItem>
              </Col>
              <Col :span="2"></Col>
            </Row>
          </Col>
          <Col :span="12">
            <Row type="flex" justify="space-between" :gutter="5">
              <Col :span="22">
                <FormItem label="外国政府及企业投资" prop="foreignCompanyFund">
                  <Input type="text" v-model="form.foreignCompanyFund"></Input>
                </FormItem>
              </Col>
              <Col :span="2"><p class="unitY">万元</p></Col>
            </Row>
            <Col
              :span="24"
              v-show="form.foreignCompanyFund.split('.')[0].length >= 6  && flag5"
              style="margin-left: 135px; margin-top: -22px; color: #ed4014"
            >
              <p>注意！金额超过10亿元</p>
            </Col>
          </Col>
        </Row>

        <Row>
          <div class="center">
            <Col>
              <Button size="large" @click="pre">上一步</Button>
              <Button
                size="large"
                type="primary"
                @click="next"
                style="margin-left: 20px"
                :loading="loading"
                >保存，下一步</Button
              >
            </Col>
          </div>
        </Row>
      </Form>
    </Card>
  </div>
</template>

<script>
import { validatePrice } from "@/libs/validate";
import { saveFund, projectView } from "@/api/publishApi";
export default {
  name: "projectStep2",
  props: {
    currentStep: {
      type: Number,
      default: 1,
    },
  },
  data() {
    const validatePass1 = (rule, value, callback) => {
      let reg = /^((0)|([1-9][0-9]*)|(([0]\.\d+|[1-9][0-9]*\.\d+)))$/;
      if (value === "") {
        this.flag1 = true;
        callback();
      } else if(value.match(reg) == null) {
        this.flag1 = false;
        callback(new Error("请输入合法的金额！"));
      } else {
        this.flag1 = true;
        callback()
      }
    };
    const validatePass2 = (rule, value, callback) => {
      let reg = /^((0)|([1-9][0-9]*)|(([0]\.\d+|[1-9][0-9]*\.\d+)))$/;
      if (value === "") {
        this.flag2 = true;
        callback();
      } else if(value.match(reg) == null) {
        this.flag2 = false;
        callback(new Error("请输入合法的金额！"));
      } else {
        this.flag2 = true;
        callback()
      }
    };
    const validatePass3 = (rule, value, callback) => {
      let reg = /^((0)|([1-9][0-9]*)|(([0]\.\d+|[1-9][0-9]*\.\d+)))$/;
      if (value === "") {
        this.flag3 = true;
        callback();
      } else if(value.match(reg) == null) {
        this.flag3 = false;
        callback(new Error("请输入合法的金额！"));
      } else {
        this.flag3 = true;
        callback()
      }
    };
    const validatePass4 = (rule, value, callback) => {
      let reg = /^((0)|([1-9][0-9]*)|(([0]\.\d+|[1-9][0-9]*\.\d+)))$/;
      if (value === "") {
        this.flag4 = true;
        callback();
      } else if(value.match(reg) == null) {
        this.flag4 = false;
        callback(new Error("请输入合法的金额！"));
      } else {
        this.flag4 = true;
        callback()
      }
    };
    const validatePass5 = (rule, value, callback) => {
      let reg = /^((0)|([1-9][0-9]*)|(([0]\.\d+|[1-9][0-9]*\.\d+)))$/;
      if (value === "") {
        this.flag5 = true;
        callback();
      } else if(value.match(reg) == null) {
        this.flag5 = false;
        callback(new Error("请输入合法的金额！"));
      } else {
        this.flag5 = true;
        callback()
      }
    };
    return {
      flag1:true,
      flag2:true,
      flag3:true,
      flag4:true,
      flag5:true,
      loading: false,
      form: {
        stateFund: "",
        overseasFund: "",
        privateFund: "",
        selfSource: "",
        otherFund: "",
        foreignCompanyFund: "",
      },
      ruleCustom: {
        stateFund: [{ validator: validatePass1, trigger: "blur" }],
        overseasFund: [{ validator: validatePass2, trigger: "blur" }],
        privateFund: [{ validator: validatePass3, trigger: "blur" }],
        selfSource: [{ validator: validatePass4, trigger: "blur" }],
        otherFund: [
          {
            max: 50,
            message: "其他内容长度不能超过50个字符！",
            trigger: "blur",
          },
        ],
        foreignCompanyFund: [{ validator: validatePass5, trigger: "blur" }],
      },
      projectId: "",
    };
  },
  created() {
    this.projectId = this.$route.query.projectId;
    this.getCurrentDetail(this.projectId);
  },
  activated() {
    if (this.getStore("editProject")) {
      this.removeStore("editProject");
      this.$emit("update:currentStep", 0);
    }
  },
  methods: {
    pre() {
      this.$emit("update:currentStep", 0);
    },
    // 下一步
    next() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true;
          saveFund({
            ...this.form,
            projectId: this.projectId,
          }).then((res) => {
            this.loading = false;
            if (res.success) {
              this.$emit("update:currentStep", 2);
            }
          });
        }
      });
    },
    // 回显当前步骤数据
    getCurrentDetail(id) {
      projectView({
        projectId: id,
      }).then((res) => {
        if (res.success) {
          this.form.stateFund = res.result.stateFund
            ? res.result.stateFund + ""
            : "";
          this.form.overseasFund = res.result.overseasFund
            ? res.result.overseasFund + ""
            : "";
          this.form.privateFund = res.result.privateFund
            ? res.result.privateFund + ""
            : "";
          this.form.selfSource = res.result.selfSource
            ? res.result.selfSource + ""
            : "";
          this.form.otherFund = res.result.otherFund;
          this.form.foreignCompanyFund = res.result.foreignCompanyFund
            ? res.result.foreignCompanyFund + ""
            : "";
        }
      });
    },
  },
};
</script>

<style lang="less">
.projectStep2 {
  .step-head {
    margin-bottom: 10px;
  }
  .center {
    text-align: center;
    margin-top: 40px;

    button {
      margin-left: 20px;
    }
  }

  .msgsty {
    margin-left: 20px;
    font-size: 14px;
  }

  .unitY {
    margin-top: 8px;
    color: red;
    font-weight: bold;
    min-width: 50px;
    font-size: 12px;
  }
}
</style>
