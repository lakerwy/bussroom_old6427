<template>
  <card class="prequalificationDetails3">
    <h1>下载PDF</h1>
    <div>
      <ul class="psty" v-for="(item,index) in pdfData" :key="index">
        <span style="margin: 0px 10px">{{index+1}}</span>
        <a href="" style="color: #333">{{item}}</a>
      </ul>
    </div>
  </card>
</template>

<script>
export default {
  name: 'prequalificationDetail3',
  data() {
    return {
      modal: false,
      pdfData: ['国网赤峰供电公司', '大雁塔旅游公司'],
    };
  },
  props: {
  },
  computed: {
    getData() {
      return this.$store.state.prequalify.detail2;
    },
  },
  created() {
    // this.$store.dispatch('getpdf');
  },
  methods: {
    openModel() {
      this.modal = true;
    },
    close(num) {
      console.log(num);
      this.modal = false;
    },
    showDialog(data) {
      this.titleModal = true;
      const dialogData = {
        project: '钒钛高强冷轧板项目空调及通风排污系统',
        biderLabel: '标段（包）001:体育训练基地腾飞馆中央',
        company: '黑龙江哈尔滨工厂',
        address: '黑龙江哈尔滨市阳光花园１栋',
      };
      this.personData = data;
      this.dialogData = dialogData;
    },
    sure() {
      console.log(1234);
    },
  },
};
</script>

<style lang="less" scoped>
.prequalificationDetails3{
  h1{
    font-size: 20px;
    position: relative;
    padding-left: 15px;
    margin-bottom: 20px;
    span{
      color: #666;
      position: absolute;
      right: 0;
      bottom: 0;
      font-size: 14px;
      cursor: pointer;
    }
  }
  h1:before {
    content :"";
    display :block;
    position: absolute;
    left: 0;
    bottom: 4px;
    top: 4px;
    width: 4px;
    height:auto;
    background-color :#1d9ed5;
  }
  .volume{
    color: #2db7f5;
    cursor :pointer;
  }
  .psty{
    background-color: rgba(199, 199, 199, 0.32);
    margin-top: 10px;
    font-weight: 700;
    font-size :12px;
    height: 50px;
    padding-top :18px;
  }
}
.ivu-modal .ivu-modal-header{
    border: none;
  }
  .ivu-modal .ivu-modal-header-inner{
    font-size: 16px;
    font-weight: 100;
    text-align: center;
  }
  .ivu-modal .ivu-modal-footer {
    border: none;
    text-align: center;
  }
  .ivu-modal .ivu-table-wrapper {
    margin-top: 40px;
    overflow: inherit;
  }
</style>