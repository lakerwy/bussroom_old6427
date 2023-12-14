<template>
  <div class="announcementStep7">
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
        <Button size="large" @click="index">继续发布招标公告</Button>
        <Button size="large" @click="next" style="margin-left:20px">查看该公告</Button>
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
      <!-- <div v-show="ck"
        style="border: 1px dashed;border: 1px dashed;text-align: -webkit-center;
        padding: 10px;margin-left: auto;margin-right: auto;width: 359px;">
        <Upload action="//jsonplaceholder.typicode.com/posts/"
           ref="upload"
           :format="['jpg','jpeg','png','doc','docx','xls','xlsx','pdf','dwg','rar']"
           :max-size="10240"
           :before-upload="handleBeforeUpload"
           :on-format-error="handleFormatError"
           :on-exceeded-size="handleMaxSize"
           :on-success="haSuccess">
          <a href="" class="fil">选择招标文件</a>
          <span>上传，下载确认后，投标人可直接下载！</span>
        </Upload>
      </div> -->
    </Card>
  </div>
</template>

<script>
import { getTenderStep } from "@/api/publishApi";
export default {
  name: "tenderSteps8",
  props: {
    currentStep: {
      type: Number,
      default: 7,
    },
  },
  data() {
    return {
    };
  },
  activated() {
    if(this.getStore('tenderAdd')){
      this.removeStore('tenderAdd');
      this.$emit("update:currentStep", 0);
    }
  },
  methods: {
    index() {
      this.removeStore('tenderId')
      this.$emit("update:currentStep", 0);
    },
    next() {
      let id = this.getStore('tenderId');
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
              type: 2
            });
          }
          this.setStore("tenderDetailsTabs", JSON.stringify(data));
          this.setStore("currentDetailId", id + "");
          this.$store.commit("removeTag", "addTender");
          this.$store.commit("closePage", "addTender");
          this.$router.replace("/infoPublish/noticeDetail#" + id);
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.announcementStep7 {
  .infosty {
    vertical-align: top;
    font-size: 14px;
    display: inline-block;
    width: 140px;
    margin-left: 5px;
  }
}
</style>
