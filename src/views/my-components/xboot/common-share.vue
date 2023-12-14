<template>
  <div class="common-share">
    <Modal
      v-model="shareFlag"
      cancel-text="关闭"
      class="commonShare"
      @on-visible-change="shareChange"
      title="分享到微信">
      <div style="text-align: center">
        <img src="../../../assets/infoPublish/bider.png" style="width: 200px;height: 200px"/>
      </div>
      <div style="text-align: center">打开微信扫一扫分享</div>
      <div style="text-align: center">更多投标人报名</div>
      <div slot="footer" style="text-align: center">
        <Button type="primary" @click="cancle">关闭</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'common-share',
  create() {
    console.log(this.model);
  },
  props: {
    shareFlag: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
    };
  },
  methods: {
    cancle() {
      this.$emit('update:shareFlag', false);
    },
    shareChange(v) {
      if(!v) {
        this.$emit('update:shareFlag', false);
      }
    }
  },
};
</script>

<style lang="less" scoped>
.commonShare{
  text-align: center;
}
</style>
