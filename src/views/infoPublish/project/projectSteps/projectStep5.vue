<template>
  <div class="projectStep6">
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
        <Button size="large" @click="toProject">前往项目列表</Button>
      </Row>
      <Row
        type="flex"
        justify="center"
        align="middle"
        style="margin-bottom: 20px"
      >
        <p style="font-weight: bold">您可以直接发布</p>
        <Button type="text" icon="md-clipboard" @click="addPrequalification"
          >发资格预审公告</Button
        >
        <Button type="text" icon="md-albums" @click="addTender"
          >发招标公告</Button
        ><!-- 
        <Button type="text" icon="md-grid" @click="addCandaidate">发中标候选人</Button>
        <Button type="text" icon="md-hammer" @click="addResult">发中标结果</Button> -->
      </Row>
      <Row type="flex" justify="center" align="middle" v-if="false">
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
export default {
  name: "projectStep5",
  props: {
    currentStep: {
      type: Number,
      default: 4,
    },
  },
  data() {
    return {};
  },
  activated() {
    if (this.getStore("addProject")) {
      this.removeStore("addProject");
      this.$emit("update:currentStep", 0);
    }
  },
  created() {
    // this.removeStore("projectId");
  },
  methods: {
    toProject() {
      this.$store.commit("removeTag", "addProject");
      this.$router.replace({ name: "project" });
    },
    addTender() {
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
            this.setStore('projectToTender', this.getStore("projectId"))
            this.removeStore("tenderId");
            this.setStore("tenderAdd", true);
            this.$router.replace({
              name: "addTender",
            });
            this.$store.commit("removeTag", "addProject");
          },
        });
      } else {
        this.setStore('addTenderClickFlag', true)
        this.setStore('projectToTender', this.getStore("projectId"))
        this.removeStore("tenderId");
        this.setStore("tenderAdd", true);
        this.$router.replace({
          name: "addTender",
        });
        this.$store.commit("removeTag", "addProject");
      }
    },
    addPrequalification() {
      if (
        this.$store.state.app.pageOpenedList.some(
          (item) => item.name === "addPrequalification"
        )
      ) {
        this.$Modal.confirm({
          title: "提示",
          content: "当前已有公告正在创建，确认重新创建新公告？",
          onOk: () => {
            this.setStore('addPreClickFlag', true)
            this.setStore('projectToPre', this.getStore("projectId"))
            this.removeStore("addPreId");
            this.setStore("preAdd", true);
            this.$router.replace({
              name: "addPrequalification",
            });
            this.$store.commit("removeTag", "addProject");
          },
        });
      } else {
        this.setStore('addPreClickFlag', true)
        this.setStore('projectToPre', this.getStore("projectId"))
        this.removeStore("addPreId");
        this.setStore("preAdd", true);
        this.$router.replace({
          name: "addPrequalification",
        });
        this.$store.commit("removeTag", "addProject");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.projectStep6 {
  .infosty {
    font-size: 14px;
    display: inline-block;
    width: 140px;
    margin-left: 5px;
  }
}
</style>
