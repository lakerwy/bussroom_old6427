<template>
  <!--左侧信息列表-->
  <div class="projectStep5">
    <Row style="width: 100%">
      <!-- <Form ref="formItem" :model="formItem" :rules="ruleValidate" :label-width="120"> -->
      <Row type="flex" justify="space-between">
        <Col style="max-width: 300px; width: 300px; margin-right: 10px">
          <div class="inner-side">
            <div class="side-head">
              <strong>标段信息</strong>
              <span class="addition" @click="addblock"
                ><Icon type="ios-add-circle-outline" />添加标段</span
              >
            </div>
            <div
              v-if="liData.length === 0"
              style="margin-left: 10px; margin-top: 10px"
            >
              暂无标段信息，请添加...
            </div>
            <ul v-else>
              <li
                v-for="(item, index) in liData"
                :key="index"
                style="list-style: none"
              >
                <div class="title">
                  <span>标段(包){{ index + 1 }}</span>
                </div>
                <div
                  class="info"
                  :class="{ activeInfo: tenderIndex == index }"
                  @click="handleInfo(index)"
                  :ref="'bidder' + index"
                >
                  <span>{{ item.title }}</span>
                  <div class="icon-container">
                    <Icon
                      type="md-copy"
                      @click.stop="copyList(index)"
                      title="复制标段"
                    />
                    <Icon
                      type="md-trash"
                      @click.stop="removeLi(item.id)"
                      title="删除标段"
                    />
                  </div>
                </div>
              </li>
            </ul>
            <div class="bottom">
              <div class="insty">建项成功之后，项目名称无法修改！</div>
              <Button size="large" @click="pre">上一步</Button>
              <Button size="large" type="primary" @click="next('formItem')"
                >提交，完成建项</Button
              >
            </div>
          </div>
        </Col>
        <Col style="flex: 1">
          <Form
            ref="formItem"
            :model="formItem"
            :rules="ruleValidate"
            :label-width="150"
          >
            <div class="step-center" v-show="bidderFlag">
              <Row>
                <Card>
                  <p
                    class="mt10"
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      margin-bottom: 20px;
                    "
                  >
                    标段(包){{ tenderIndex + 1 }}基本信息
                  </p>
                  <Row>
                    <FormItem
                      style="width: 100%"
                      label="标段(包)编号"
                      prop="sectionNumber"
                    >
                      <Input disabled v-model="formItem.sectionNumber" />
                    </FormItem>
                  </Row>
                  <Row>
                    <FormItem prop="title" label="标段(包)名称">
                      <Input v-model="formItem.title" :maxlength="100" />
                    </FormItem>
                  </Row>
                  <Row>
                    <FormItem prop="bidCategoryId" label="标段(包)专业分类">
                      <Select
                        v-model="formItem.bidCategoryId"
                        multiple
                        filterable
                      >
                        <Option
                          v-for="item in this.SEL.industryClass"
                          :value="item.value"
                          :key="item.value"
                          >{{ item.label }}
                        </Option>
                      </Select>
                    </FormItem>
                  </Row>
                  <Row>
                    <FormItem label="所在行政区域" prop='area'>
                      <i-region
                        v-model="formItem.area"
                        data-type="name"
                        type="city"
                        @on-change="areaChange"
                      />
                    </FormItem>
                  </Row>
                  <Row>
                    <FormItem prop="bidType" label="标段(包)招标方式">
                      <Select v-model="formItem.bidType">
                        <Option
                          v-for="item in this.SEL.bidForm"
                          :value="item.value"
                          :key="item.value"
                          >{{ item.label }}
                        </Option>
                      </Select>
                    </FormItem>
                  </Row>
                  <Row>
                    <div class="center">
                      <Button
                        size="large"
                        @click="save('formItem')"
                        :loading="loading"
                        >保存</Button
                      >
                    </div>
                  </Row>
                </Card>
              </Row>
            </div>
          </Form>
        </Col>
      </Row>
    </Row>

    <Modal
      title="复制标段"
      v-model="copyModal"
      :mask-closable="false"
      :width="600"
    >
      <Form
        ref="copyForm"
        :model="copyForm"
        :label-width="150"
        :rules="ruleValidate"
      >
        <FormItem style="width: 100%" label="标段(包)编号" prop="sectionNumber">
          <Input disabled v-model="copyForm.sectionNumber" />
        </FormItem>
        <FormItem prop="title" label="标段(包)名称">
          <Input v-model="copyForm.title" :maxlength="100" />
        </FormItem>
        <FormItem prop="bidCategoryId" label="标段(包)专业分类">
          <Select v-model="copyForm.bidCategoryId" multiple filterable>
            <Option
              v-for="item in this.SEL.industryClass"
              :value="item.value"
              :key="item.value"
              >{{ item.label }}
            </Option>
          </Select>
        </FormItem>
        <FormItem label="所在行政区域" prop="area">
          <i-region
            v-model="copyForm.area"
            data-type="name"
            type="city"
            @on-change="areaChange"
          />
        </FormItem>
        <FormItem prop="bidType" label="标段(包)招标方式">
          <Select v-model="copyForm.bidType">
            <Option
              v-for="item in this.SEL.bidForm"
              :value="item.value"
              :key="item.value"
              >{{ item.label }}
            </Option>
          </Select>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="Default" @click="copyModal = false">取消</Button>
        <Button type="primary" :loading="submitLoading" @click="copySubmit"
          >保存</Button
        >
      </div>
    </Modal>
  </div>
</template>

<script>
import { validateSpecial } from "@/libs/validate";
import {
  getBidList,
  getBidNum,
  saveProjectBid,
  delProBidId,
  projectSubmit
} from "@/api/publishApi";
export default {
  name: "projectStep4",
  props: {
    currentStep: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      loading: false,
      submitLoading:false,
      bidderFlag: false, //  标段基本信息显示
      copyModal: false, // 复制弹框
      tenderIndex: 0,
      liData: [],
      formItem: {
        sectionNumber: "", // 标段编号
        title: "", // 标段名称
        bidCategoryId: [], // 专业分类
        area: [], // 地区
        bidType: "", // 招标方式
      },
      copyForm: {
        sectionNumber: "", // 标段编号
        title: "", // 标段名称
        bidCategoryId: [], // 专业分类
        area: [], // 地区
        bidType: "", // 招标方式
      },
      ruleValidate: {
        title: [
          {
            required: true,
            message: "标段（包）名称不能为空！",
            trigger: "blur",
          },
          { validator: validateSpecial, trigger: "blur" },
          {
            max: 100,
            message: "标段（包）名称不能超过100个字符！",
            trigger: "blur",
          },
        ],
        bidCategoryId: [
          {
            required: true,
            message: "请选择行业分类！",
            trigger: "change",
            type: "array",
          },
        ],
        bidType: [
          {
            required: true,
            message: "请选择招标方式！",
            trigger: "change",
          },
        ],
        area: [
          {
            required: true,
            message: "请选择所在行政区域！",
            trigger: "change",
            type: "array",
          },
        ],
      },
      editBidId: "",
    };
  },
  activated() {
    if(this.getStore('addProject')){
      this.removeStore('addProject')
      this.$emit("update:currentStep", 0)
    }
  },
  created() {
    this.getDataList();
  },
  methods: {
    // 获取所有标段信息
    getDataList() {
      getBidList({
        projectId: this.getStore("projectId"),
      }).then((res) => {
        if (res.success) {
          this.liData = res.result;
          this.bidderFlag = false;
        }
      });
    },
    addblock() {
      this.editBidId = "";
      this.bidderFlag = true;
      this.formItem.area = [];
      this.$refs.formItem.resetFields();
      this.getBidNumber('formItem');
    },
    pre() {
      this.$emit("update:currentStep", 2);
    },
    // 提交项目
    next() {
      projectSubmit({
        projectId: this.getStore('projectId')
      }).then(res => {
        if(res.success) {
          this.$emit("update:currentStep", 4);
        }
      })
    },
    // 保存标段信息
    save(name) {
      let data = {
        sectionNumber: this.formItem.sectionNumber,
        title: this.formItem.title,
        bidCategoryId: this.formItem.bidCategoryId.join(","),
        area: this.formItem.area.join(""),
        bidType: this.formItem.bidType,
        projectId: this.getStore("projectId"),
        id: this.editBidId,
      };
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.loading = true;
          saveProjectBid(data).then((res) => {
            this.loading = false;
            if (res.success) {
              this.getDataList();
              this.$Message.success("添加成功！");
              this.bidderFlag = false;
            }
          });
        }
      });
    },
    // 删除标段
    removeLi(id) {
      this.$Modal.confirm({
        title: "提示",
        content: "确认删除当前标段信息？",
        onOk: () => {
          delProBidId({
            sectionId: id,
          }).then((res) => {
            if (res.success) {
              this.$Message.success("删除成功");
              this.getDataList();
            }
          });
        },
      });
    },
    // 标段复制
    copyList(i) {
      this.$refs.copyForm.resetFields();
      this.copyForm.area = [];
      this.copyModal = true
      // 获取复制标段的编号
      this.getCurretBid(i, 'copyForm');
      this.getBidNumber('copyForm');
    },
    // 保存复制标段
    copySubmit() {
      let data = {
        sectionNumber: this.copyForm.sectionNumber,
        title: this.copyForm.title,
        bidCategoryId: this.copyForm.bidCategoryId.join(","),
        area: this.copyForm.area.join(""),
        bidType: this.copyForm.bidType,
        projectId: this.getStore("projectId"),
        id: '',
      };
      this.$refs.copyForm.validate((valid) => {
        if (valid) {
          this.submitLoading = true;
          saveProjectBid(data).then((res) => {
            this.submitLoading = false;
            if (res.success) {
              this.getDataList();
              this.$Message.success("添加成功！");
              this.copyModal = false;
            }
          });
        }
      });
    },
    // 点击标段包
    handleInfo(i) {
      console.log(i);
      this.bidderFlag = true;
      this.editBidId = this.liData[i].id;
      this.getCurretBid(i, 'formItem');
      this.tenderIndex = i;
    },
    // 回显当前标段详情
    getCurretBid(i,name) {
      this[name] = { ...this.liData[i] };
      this[name].bidCategoryId = this.liData[i].bidCategoryId.split(",");
      let area = this.liData[i].area;
      let index;
      let arr;
      if (area.includes("省")) {
        index = area.indexOf("省") + 1;
      } else if (area.includes("自治区")) {
        index = area.indexOf("自治区") + 3;
      } else if (area.includes("港澳")) {
        index = area.indexOf("港澳") + 2;
      } else {
        index = area.indexOf("市") + 1;
      }
      arr = [area.slice(0, index), area.slice(index)];
      this[name].area = arr;
    },
    // 获取标段编号
    getBidNumber(name) {
      getBidNum({
        projectId: this.getStore("projectId"),
      }).then((res) => {
        if (res.success) {
          this[name].sectionNumber = res.result;
        }
      });
    },
    /* areaChange(value) {
      console.log(value)
    }, */
  },
};
</script>

<style lang="less">
@import "../../../../components/region/region.css";
.projectStep5 {
  .inner-side {
    position: relative;
    min-height: calc(100vh - 132px);
    background-color: #e4e4e4;
    padding: 20px 0;

    .side-head {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      padding: 0 10px;
      margin-bottom: 5px;
      .addition {
        cursor: pointer;
      }
    }

    ul {
      font-size: 14px;
      max-height: calc(100vh - 300px);
      overflow-y: auto;
      list-style: none;
      .title {
        line-height: 40px;
        span {
          padding: 0 10px;
        }
      }
      .info {
        height: 40px;
        line-height: 40px;
        background-color: #f6f5f8;
        position: relative;
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        cursor: pointer;
        > span {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .icon-container {
          width: 36px;
          display: flex;
          justify-content: space-between;
          align-items: center;

          i {
            cursor: pointer;
          }
        }
      }
      .activeInfo {
        background: #fff;
        border: 1px solid #4d8dfa;
        line-height: 38px;
      }

      .info:before {
        content: "";
        position: absolute;
        display: block;
        top: 0;
        bottom: 0;
        width: 4px;
        left: 0;
        background-color: #2d8cf0;
      }
    }
  }

  .step-head {
    margin-bottom: 10px;
  }

  .bottom {
    text-align: center;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    position: absolute;
    width: 100%;
    background-color: #e4e4e4;
    bottom: 20px;
  }

  .center {
    text-align: center;
    margin-top: 20px;

    button {
      margin-left: 20px;
    }
  }

  .insty {
    text-align: center;
    font-size: 14px;
    position: absolute;
    margin-top: -30px;
    text-align: center;
    font-size: 14px;
  }

  .rg-default-btn {
    font-size: 12px;
    width: 120px;
  }

  .ivu-form-item-content {
    line-height: 25px;
  }

  .ivu-dropdown .ivu-select-dropdown{
    width: 100%!important;
    left: 0!important;
  }
}
</style>
