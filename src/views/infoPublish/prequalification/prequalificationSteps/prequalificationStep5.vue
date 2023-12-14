<template>
  <div class="prequalificationStep5">
    <Row style="width: 100%">
      <Form
        ref="formItem"
        :model="formItem"
        :rules="ruleValidate"
        :label-width="120"
        label-position="left"
      >
        <Row type="flex" justify="space-between">
          <Col style="width: 300px; max-width: 300px; margin-right: 10px">
            <div class="inner-side">
              <div class="side-head">
                <strong>标段信息</strong>
              </div>
              <ul>
                <li v-for="(item, i) in dataList" :key="i">
                  <div class="title">
                    <span>标段（包）{{ i + 1 }}</span>
                  </div>
                  <div
                    class="info"
                    :class="{ focusty: tenderIndex == i }"
                    @click="liClick(i)"
                  >
                    <span>{{ item.title }}</span>
                    <Icon
                      size="20"
                      type="md-checkmark-circle-outline"
                      :class="iconFlag[i] ? 'item-color' : ''"
                    />
                  </div>
                </li>
              </ul>
              <div class="bottom">
                <Button size="large" @click="pre">上一步</Button>
                <Button size="large" type="primary" :loading="subLoading" @click="next('formItem')"
                  >保存，下一步</Button
                >
              </div>
            </div>
            <!--右侧添加信息-->
          </Col>
          <Col style="flex: 1">
            <div class="step-center" v-if="tenderFlag">
              <Card>
                <h3 style="line-height: 50px; color: #4d8dfa">
                  标段（包）{{ tenderIndex + 1 }}基本信息
                </h3>
                <FormItem label="标段(包)编号">
                  <span>{{ formItem.sectionNumber }}</span>
                </FormItem>
                <FormItem label="标段(包)名称">
                  <span>{{ formItem.title }}</span>
                </FormItem>
                <FormItem prop="qualify" label="投标人的资格能力要求">
                  <Input
                    type="textarea"
                    :maxlength="10000"
                    show-word-limit
                    v-model="formItem.qualify"
                  />
                </FormItem>
                <FormItem prop="content" label="标段（包）内容">
                  <Input
                    type="textarea"
                    :maxlength="10000"
                    show-word-limit
                    v-model="formItem.content"
                  />
                </FormItem>
                <Row :gutter="10">
                  <Col :span="18">
                    <FormItem label="标段（包）合同估算价" prop="price">
                      <Input
                        style="width: 100%"
                        :min="0"
                        :maxlength="100"
                        v-model="formItem.price"
                      />
                    </FormItem>
                  </Col>
                  <Col :span="4" style=" margin-top: 6px"
                    ><span>万元</span></Col
                  >
                </Row>
                <div class="center">
                  <Button
                    size="large"
                    @click="save('formItem')"
                    v-if="tenderIndex === dataList.length - 1"
                    >保存</Button
                  >
                  <Button
                    size="large"
                    @click="save('formItem')"
                    v-show="tenderIndex !== dataList.length - 1"
                    >保存,编辑下一段</Button
                  >
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </Form>
    </Row>
  </div>
</template>

<script>
import { validatePrice } from "@/libs/validate";
import { getBidsList,savePreFive ,saveSectionInfo} from "@/api/publishApi";
export default {
  name: "prequalificationStep5",
  props: {
    currentStep: {
      type: Number,
      default: 4,
    },
  },
  data() {
    return {
      subLoading:false,
      tenderFlag: false,
      iconFlag: [],
      tenderIndex: 0,
      dataList: [],
      formItem: {
        id: "",
        sectionNumber: "",
        title: "",
        qualify: "",
        content: "",
        price: "",
      },
      ruleValidate: {
        qualify: [
          { required: true, message: "能力要求不能为空！", trigger: "blur" },
          {
            max: 10000,
            message: "能力要求内容长度不能超过10000个字符！",
            trigger: "blur",
          },
        ],
        price: [
          { validator: validatePrice, trigger: "blur" },
        ]
      },
      sectionId:''
    };
  },
  created() {
    this.getTenderBids();
  },
  activated() {
    if(this.getStore('preAdd')){
      this.removeStore('preAdd');
      this.$emit("update:currentStep", 0);
    }
  },
  methods: {
    pre() {
      this.$emit("update:currentStep", 3);
    },
    next() {
      let flag = this.iconFlag.every((item) => item);
      console.log(this.iconFlag)
      if (!flag) {
        this.$Notice.warning({
          title: "提示！",
          desc: "还有标段内容未保存",
        });
      }else {
        this.$emit("update:currentStep", 5);
      }
    },
    // 获取当前公告关联标段
    getTenderBids() {
      getBidsList(this.getStore("addPreId")).then((res) => {
        if (res.success) {
          this.dataList = res.result;
          this.iconFlag = res.result.map((item) => {
            return !!item.qualify;
          });
          if(this.dataList.length !== 0) {
            this.liClick(this.tenderIndex);
          }else {
            this.tenderFlag = false;
          }
        }
      });
    },
    liClick(index) {
      this.$refs.formItem.resetFields();
      this.sectionId = this.dataList[index].sectionId;
      this.tenderFlag = true;
      this.tenderIndex = index;
      this.formItem.sectionNumber = this.dataList[index].sectionNumber;
      this.formItem.id = this.dataList[index].id || '';
      this.formItem.title = this.dataList[index].title;
      this.formItem.qualify = this.dataList[index].qualify;
      this.formItem.content = this.dataList[index].content;
      this.formItem.price = this.dataList[index].price
        ? this.dataList[index].price + ''
        : "0";
    },
    save(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          let data = {
            ...this.formItem,
            noticeId: this.getStore("addPreId"),
            sectionId: this.sectionId
          }
          saveSectionInfo(data).then((res) => {
            if (res.success) {
              getBidsList(this.getStore("addPreId")).then((res) => {
                if (res.success) {
                  this.dataList = res.result;
                  this.iconFlag = res.result.map((item) => {
                    return !!item.qualify;
                  });
                }
              });
              if (this.tenderIndex >= this.dataList.length - 1) {
                this.tenderFlag = false;
              } else {
                this.tenderIndex = this.tenderIndex + 1;
                this.liClick(this.tenderIndex);
              }
            }
          });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.prequalificationStep5 {
  li {
    list-style: none;
  }
  .inner-side {
    position: relative;
    min-height: calc(100vh - 132px);
    background-color: #e4e4e4;
    padding: 20px 0;
    .side-head {
      text-align: center;
      font-size: 14px;
      padding: 0 10px;
      .addition {
        cursor: pointer;
      }
    }
    ul {
      font-size: 14px;

      max-height: calc(100vh - 300px);
      overflow-y: auto;
      .title {
        line-height: 40px;
        span {
          padding: 0 10px;
        }
      }
      .info {
        line-height: 40px;
        height: 40px;
        box-sizing: border-box;
        cursor: pointer;
        background-color: rgba(246, 245, 248, 1);
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px 0 10px;
        > span {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        i {
          margin-left: 8px;
        }
      }
      .focusty {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 1);
        border: 1px solid rgba(77, 141, 250, 1);
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px 0 10px;
        > span {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        i {
          margin-left: 8px;
        }
      }
      .info:before,
      .focusty:before {
        content: "";
        position: absolute;
        display: block;
        top: 0;
        bottom: 0;
        width: 4px;
        left: 0;
        /*background-color #2d8cf0*/
      }
    }
    ul li:nth-of-type(6n + 1) .info:before,
    focusty:before {
      background-color: #2d8cf0;
    }
    ul li:nth-of-type(6n + 2) .info:before,
    focusty:before {
      background-color: #808695;
    }
    ul li:nth-of-type(6n + 3) .info:before,
    focusty:before {
      background-color: #ff9900;
    }
    ul li:nth-of-type(6n + 4) .info:before,
    focusty:before {
      background-color: #ed4014;
    }
    ul li:nth-of-type(6n + 5) .info:before,
    focusty:before {
      background-color: #19be6b;
    }
    ul li:nth-of-type(6n + 6) .info:before,
    focusty:before {
      background-color: #17233d;
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
  .center {
    text-align: center;
    margin-top: 20px;
    button {
      margin-left: 20px;
    }
  }
  .item-color {
    color: #19be6b;
  }
  .ivu-card-body {
    height: 420px;
    margin-left: 20px;
    margin-top: 10px;
  }
}
</style>
