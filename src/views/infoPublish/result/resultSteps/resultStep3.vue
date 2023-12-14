<template>
  <div class="resultStep3">
    <div class="inner-side">
      <div class="side-head">
        <strong style="font-size: 14px; text-align: center; display: block"
          >选择标段</strong
        >
      </div>
      <div class="list">
        <CheckboxGroup v-model="checkGroups">
          <Checkbox
            :label="item.sectionId"
            :title="item.title"
            v-for="(item, index) in bidList"
            :key="item.sectionId"
            >标段（包）{{ index + 1 }}：{{ item.title }}</Checkbox
          >
        </CheckboxGroup>
        <div class="bottom">
          <Button size="large" @click="pre">上一步</Button>
          <Button
            size="large"
            type="primary"
            :loading="subLoading"
            @click="next('formItem')"
            >保存，下一步</Button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  findCanBids,
  saveCanBids,
  viewCanBids,
  saveCanSectionExtend,
  saveBidsList,
  findEverySectionsForNotice,
  findCanSectionsForNotice,
} from "@/api/publishApi";
export default {
  name: "resultStep3",
  props: {
    currentStep: {
      type: Number,
      default: 2,
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
    this.viewTenderBids();
  },
  activated() {
    if (this.getStore("resultAdd")) {
      this.removeStore("resultAdd");
      this.$emit("update:currentStep", 0);
    }
  },
  methods: {
    pre() {
      this.$emit("update:currentStep", 1);
    },
    next() {
      if (this.bidList.length && this.checkGroups.length === 0) {
        return this.$Message.warning("请选择标段！");
      }
      this.subLoading = true;

      saveBidsList({
        id: this.getStore("resultId"),
        selectedSectionIds: this.checkGroups.join(","),
      }).then((res) => {
        this.subLoading = false;
        if (res.success) {
          this.$emit("update:currentStep", 3);
        }
      });
      if (this.flag && this.bidList.length != 0) {
        let ids = this.bidList.map((item) => {
          return item.id;
        });

        saveCanSectionExtend({
          id: this.getStore("resultId"),
          everySectionIds: ids.join(","),
        }).then((res) => {
          if (res.success) {
          }
        });
      }
    },
    // 回显已选择的标段
    viewTenderBids() {
      let id = this.getStore("resultId");
      findEverySectionsForNotice(id).then((res) => {
        if (res.success) {
          if (res.result.length == 0) {
            findCanBids(id).then((data) => {
              if (data.success) {
                this.bidList = data.result;
              }
            });
          } else {
            this.flag = false;
            this.bidList = res.result;
            findCanSectionsForNotice(id).then((item) => {
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

<style lang="less" socped>
.resultStep3 {
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
