<template>
  <div class="prequalificationStep4">
    <Form ref="formItem" :model="formItem" :rules="ruleValidate">
      <div class="inner-side">
        <div class="side-head">
          <strong style="font-size: 14px; text-align: center; display: block"
            >选择标段</strong
          >
        </div>
        <div class="list">
          <FormItem prop="checkGroups">
            <CheckboxGroup v-model="checkGroups" v-if="flag">
              <Checkbox
                :label="item.id"
                :title="item.title"
                v-for="(item, index) in bidList"
                :key="item.id"
                >标段（包）{{ index + 1 }}：{{ item.title }}</Checkbox
              >
            </CheckboxGroup>
            <CheckboxGroup v-model="checkGroups" v-else>
              <Checkbox
                :label="item.sectionId"
                :title="item.title"
                v-for="(item, index) in bidList"
                :key="item.sectionId"
                >标段（包）{{ index + 1 }}：{{ item.title }}</Checkbox
              >
            </CheckboxGroup>
          </FormItem>
          <div class="bottom">
            <Button size="large" @click="pre">上一步</Button>
            <Button
              size="large"
              :loading="subLoading"
              type="primary"
              @click="next('formItem')"
              >保存，下一步</Button
            >
          </div>
        </div>
      </div>
    </Form>
  </div>
</template>

<script>
import {
  getBidProList,
  saveBidsList,
  getBidsList,
  saveSectionExtend,
  findEverySectionsForNotice,
} from "@/api/publishApi";
export default {
  name: "prequalificationStep4",
  props: {
    currentStep: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      subLoading: false,
      checkGroups: [],
      bidList: [],
      flag: true,
    };
  },
  created() {
    this.getProList();
  },
  activated() {
    if (this.getStore("preEdit")) {
      this.removeStore("preEdit");
      this.$emit("update:currentStep", 0);
    }
  },
  methods: {
    pre() {
      this.$emit("update:currentStep", 2);
    },
    next() {
      if (this.bidList.length && this.checkGroups.length === 0) {
        return this.$Message.warning("请选择标段！");
      }
      this.subLoading = true;
      saveBidsList({
        id: this.$route.query.id,
        selectedSectionIds: this.checkGroups.join(","),
      }).then((res) => {
        this.subLoading = false;
        if (res.success) {
          this.$emit("update:currentStep", 4);
        }
      });
      if (this.flag && this.bidList.length != 0) {
        let ids = this.bidList.map((item) => {
          return item.id;
        });
        saveSectionExtend({
          id: this.$route.query.id,
          everySectionIds: ids.join(","),
        }).then((res) => {
          if (res.success) {
          }
        });
      }
    },
    // 获取关联项目标段列表
    getProList() {
      let id = this.$route.query.id;
      findEverySectionsForNotice(id).then((res) => {
        if (res.success) {
          if (res.result.length == 0) {
            getBidProList(id).then((data) => {
              if (data.success) {
                this.bidList = data.result;
              }
            });
          } else {
            this.flag = false;
            this.bidList = res.result;
            getBidsList(id).then((item) => {
              if (item.success) {
                this.checkGroups = item.result.map((item1) => {
                  return item1.sectionId;
                });
              }
            });
          }
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.prequalificationStep4 {
  .side-head {
    line-height: 40px;
  }
  .inner-side {
    width: 300px;
    min-width: 300px;
    max-width: 300px;
    position: relative;
    min-height: calc(100vh - 132px);
    background-color: #e4e4e4;
    padding: 10px 10px;
    text-align: center;
    .list {
      max-height: calc(100vh - 300px);
      overflow-x: hidden;
      overflow-y: auto;
      padding-bottom: 30px;
    }
  }
  .ivu-checkbox-wrapper {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 40px;
    text-align: left;
    width: 100%;
  }
  .bottom {
    text-align: center;
    padding: 20px 0;
    display: flex;
    justify-content: space-around;
    position: absolute;
    width: calc(100% - 20px);
    background-color: #e4e4e4;
    bottom: 0;
  }
}
</style>
