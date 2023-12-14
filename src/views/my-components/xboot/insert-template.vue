<template>
    <Modal v-model="model"
           width="800"
           class="insert-template"
           :mask-closable="false"
           :closable="false">
      <p slot="header" style="text-align:center;font-size: 16px;">
        <span>{{title}}-选择模板</span>
      </p>
      <div class="modal-center">
        <div class="center-left">
          <p class="center-title">模版标题</p>
          <RadioGroup
            size="large"
            v-model="vertical"
            @on-change="radioGroup"
            vertical>
            <Radio
              class="modal-radio"
              :class="item.id === action ? 'modal-action' : ''"
              v-for="(item, i) in data1"
              :key="i"
              :label=item.id>
              <Icon type="social-apple"></Icon>
              <span>{{item.name}}</span>
            </Radio>
          </RadioGroup>
        </div>
        <div class="center-right">
          <p class="center-text">{{text}}</p>
        </div>
      </div>
      <div slot="footer" style="text-align:center">
        <Button size="large" type="primary" @click="insert">插入模版</Button>
        <Button size="large" @click="cancel">取消</Button>
      </div>
    </Modal>
</template>

<script>
export default {
  name: 'insert-template',
  data() {
    return {
      action: '',
      vertical: '',
      text: '',
      obj: {},
    };
  },
  props: {
    model: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    data1: {
      type: Array,
      default: () => [],
    },
  },
  created() {
    this.vertical = this.data1[0].id;
    this.text = this.data1[0].text;
  },
  watch: {
    verticalData(verticalData) {
      if (verticalData) {
        console.log(verticalData);
      }
    },
  },
  computed: {
    verticalData() {
      return this.data1[0].id;
    },
  },
  methods: {
    radioGroup(id) {
      this.action = id;
      this.data1.map((obj) => {
        if (obj.id === id) {
          this.text = obj.text;
        }
        return obj.id;
      });
    },
    insert() {
      this.$emit('modelObj', this.text, 'insert');
    },
    cancel() {
      this.$emit('modelObj', {}, 'insert');
    },
  },
};
</script>

<style lang="less" scoped>
.insert-template{
  .ivu-modal-content{
    background-color :#f8f8f9;
  }
  .modal-center{
    height: 300px;
    .center-left{
      float: left;
      width :30%;
      height: 300px;
      background-color: #e4e4e4;
      overflow-y: scroll;
      .center-title{
        line-height :30px;
        text-align :center;
        font-size: 14px;
      }
    }
    .center-right{
      float: left;
      height: 300px;
      width: 70%;
      overflow-y: scroll;
      background-color :#fff;
      .center-text{
        padding: 20px;
      }
    }
    .ivu-radio-group{
      width: 100%;
    }
    .modal-radio{
      padding-left :20px;
      margin-right :0;
    }
    .modal-action{
      background-color :#fff;
    }
    .ivu-radio-group-vertical .ivu-radio-wrapper{
      height :40px;
      line-height :40px;
    }
  }
}
</style>
