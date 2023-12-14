<template>
  <div class="prequalificationStep8">
    <Card>
      <Row
        type="flex"
        justify="center"
        align="middle"
        style="margin-bottom: 20px"
      >
        <Icon type="md-bulb" size="50" color="#2d8cf0" class="title-icon" />
        <span style="font-size: 16px; font-weight: bold; margin-left: 10px"
          >提交成功</span
        >
      </Row>
      <Row
        type="flex"
        justify="center"
        align="middle"
        style="margin-bottom: 20px"
      >
        <Button size="large" @click="index">继续发布资格预审公告</Button>
        <Button size="large" @click="next" style="margin-left: 20px"
          >查看该公告</Button
        >
      </Row>
      <Row
        type="flex"
        justify="center"
        align="middle"
        style="margin-bottom: 20px"
        v-if="false"
      >
        <div style="display: inline-block">
          <img
            src="../../../../assets/infoPublish/twod.png"
            style="width: 95px"
          />
        </div>
        <div class="infosty">关注发布信息公众号随时掌握公告发布进度</div>
      </Row>
    </Card>
  </div>
</template>

<script>
import { viewPreFirst } from "@/api/publishApi";
export default {
  name: "prequalificationStep8",
  props: {
    currentStep: {
      type: Number,
      default: 7,
    },
  },
  data() {
    return {};
  },
  activated() {
    if (this.getStore("preAdd")) {
      this.removeStore("preAdd");
      this.$emit("update:currentStep", 0);
    }
  },
  methods: {
    index() {
      this.removeStore("addPreId");
      this.$emit("update:currentStep", 0);
    },
    next() {
      let id = this.getStore("addPreId");
      viewPreFirst(id).then((res) => {
        if (res.success) {
          this.$store.commit("removeTag", "addPrequalification");
          this.$store.commit("closePage", "addPrequalification");
          let data = this.getStore("tenderDetailsTabs") || [];
          if (data.length !== 0) {
            data = JSON.parse(data);
          }
          if (!data.some((item) => item.id == id)) {
            data.push({
              id: id + "",
              hash: id + "",
              title: res.result.title,
              type: 1
            });
          }
          this.setStore("tenderDetailsTabs", JSON.stringify(data));
          this.setStore("currentDetailId", id + "");
          this.$router.replace("/infoPublish/noticeDetail#" + id);
        }
      });
    },
  },
};
</script>

<style lang="less">
.prequalificationStep8 {
  .infosty {
    vertical-align: top;
    font-size: 14px;
    display: inline-block;
    width: 140px;
    margin-left: 5px;
    margin-top: 25px;
  }
}
</style>
