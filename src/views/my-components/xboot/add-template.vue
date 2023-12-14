<template>
    <Modal v-model="model"
           width="800"
           class="add-template"
           :mask-closable="false"
           :closable="false">
      <p slot="header" style="text-align:center;font-size: 16px;">
        <span>{{title}}-添加模板</span>
      </p>
      <div class="modal-center">
        <div class="flex-row">
          <span>模版标题</span>
          <Input :maxlength="50" @input="descInput" v-model="titlem"/>
          <span>{{remnant1}}/50</span>
        </div>
        <div class="flex-row">
          <span style="flex-grow:0;">模板内容</span>
          <!-- 方法一
          <tinymce-editor :content="content"></tinymce-editor>
          -->
          <!-- 方法二 -->
          <editor :data2="data2" v-if="model"></editor>
          <!--
          <Input type="textarea"
                 max-length="20000"
                 :rows="8"
                 placeholder=""
                 @input="descInput2"
                 v-model="desc2"
          />
          -->
          <!--
          <span>{{remnant2}}/20000</span>
          -->
        </div>
      </div>
      <div slot="footer" style="text-align:center">
        <Button size="large" type="primary" @click="save">保存</Button>
        <Button size="large" @click="cancel">取消</Button>
      </div>
    </Modal>
</template>

<script>
// import TinymceEditor from '../tinymce-editor/tinymce-editor.vue';
import Editor from './wangEditor.vue';

export default {
  name: 'add-template',
  // 方法一
  // components: { TinymceEditor },
  // 方法二
  components: { Editor },
  data() {
    return {
      remnant1: 0,
      remnant2: 0,
      content: '',
      titlem: '',
      desc2: '',
      obj: {},
      getE: '',
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
    data2: {
      type: String,
      default: '',
    },
  },
  methods: {
    descInput() {
      this.remnant1 = 0 + this.titlem.length;
    },
    descInput2() {
      this.remnant2 = 0 + this.desc2.length;
    },
    save() {
      this.getE = sessionStorage.getItem('contain');
      this.$emit('modelObj', this.getE, 'add');
    },
    cancel() {
      this.$emit('modelObj', '', 'add');
    },
  },
};
</script>

<style lang="less" scoped>
.add-template{
  .ivu-modal-content{
    background-color :#f8f8f9;
  }
  .modal-center{
    .flex-row {
      margin-bottom :10px;
      display :flex;
      align-items :center;
      flex-wrap: nowrap;
      strong {
        width:fit-content;
        word-break :keep-all;
      }
      button {
        margin-left :10px;
      }
      >span{
        font-size: 14px;
        word-break :keep-all;
        padding :0 8px;
        white-space:nowrap;
        flex-shrink :0;
      }
      >span:first-of-type {
        padding-left: 0;
        width :7em;
        word-break :break-all;
        white-space:normal;
        text-align: center;
      }
      input{
        padding-left: 8px;
      }
      a {
        word-break: keep-all;
        margin-left: 10px;
      }
    }
  }
}
</style>
