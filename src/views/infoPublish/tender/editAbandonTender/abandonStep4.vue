<template>
  <div class="symptomStep4">
    <Card>
      <p class="title">
        <Icon type="md-bulb" size="30" color="#2d8cf0" class="title-icon" />
        提交成功!
      </p>
      <div class="button">
        <Button size="large" @click="index">发布招标公告</Button>
        <Button size="large" @click="next">查看该公告</Button>
      </div>
      <div style="text-align: center" v-if="false">
        <div style="display: inline-block">
          <img
            src="../../../../assets/infoPublish/twod.png"
            style="width: 90px"
          />
        </div>
        <div style="font-size: 14px; display: inline-block; width: 138px">
          关注发布信息公众号随时掌握公告发布进度
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import { getTenderStep } from "@/api/publishApi";
export default {
  name: "abandonStep4",
  props: {
    currentStep: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      Lists: [],
      ck: false,
    };
  },
  activated() {
    if (this.getStore("editAbandonTender")) {
      this.removeStore("editAbandonTender");
      this.$emit("update:currentStep", 0);
    }
  },
  methods: {
    index() {
      if (
        this.$store.state.app.pageOpenedList.some(
          (item) => item.name === "addTender"
        )
      ) {
        this.$Modal.confirm({
          title: "提示",
          content: "当前已有公告正在创建，确认重新创建新公告？",
          onOk: () => {
            this.setStore('addTenderClickFlag', true)
            this.removeStore("projectToTender");
            this.removeStore("tenderId");
            this.setStore("tenderAdd", true);
            this.$router.replace({
              name: "addTender",
            });
            this.$store.commit("removeTag", "editAbandonTender");
            this.$store.commit("closePage", "editAbandonTender");
          },
        });
      } else {
        this.setStore('addTenderClickFlag', true)
        this.removeStore("projectToTender");
        this.removeStore("tenderId");
        this.setStore("tenderAdd", true);
        this.$router.replace({
          name: "addTender",
        });
        this.$store.commit("removeTag", "editAbandonTender");
        this.$store.commit("closePage", "editAbandonTender");
      }
    },
    next() {
      let id = this.$route.query.id;
      getTenderStep(id).then((res) => {
        if (res.success) {
          let data = this.getStore("tenderDetailsTabs") || [];
          if (data.length !== 0) {
            data = JSON.parse(data);
          }
          if (!data.some((item) => item.id == id)) {
            data.push({
              id: id + "",
              hash: id + "",
              title: res.result.title,
            });
          }
          this.setStore("tenderDetailsTabs", JSON.stringify(data));
          this.setStore("currentDetailId", id + "");
          this.$store.commit("removeTag", "editAbandonTender");
          this.$store.commit("closePage", "editAbandonTender");
          this.$router.replace("/infoPublish/noticeDetail#" + id);
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.symptomStep4 {
  .title {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    margin: 20px 0;
    .title-icon {
      margin-top: -5px;
    }
  }
  .button {
    margin: 20px 0;
    text-align: center;
    button {
      margin-left: 20px;
    }
  }
  .center {
    text-align: center;
    display: flex;
    p {
      font-weight: bold;
      font-size: 16px;
      margin-right: 20px;
    }
    .flex-row {
      display: flex;
      height: 32px;
      line-height: 32px;
    }
    .ivu-menu-horizontal.ivu-menu-light:after {
      background: inherit;
    }
  }
}
</style>
