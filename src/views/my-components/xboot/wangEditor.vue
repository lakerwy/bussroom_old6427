<template>
  <div>
    <div ref="editor" style="text-align:left"></div>
  </div>
</template>

<script>
import E from 'wangeditor';

export default {
  name: 'wangEditor',
  data() {
    return {
      editorContent: '',
    };
  },
  props: {
    data2: {
      type: String,
      default: '',
    },
  },
  methods: {
  },
  mounted() {
    const editor = new E(this.$refs.editor);
    editor.customConfig.menus = [
      'head',
      'bold',
      'fontSize',
      'fontName',
      'italic',
      'underline',
      'strikeThrough',
      'foreColor',
      'backColor',
      'link',
      'list',
      'justify',
      'quote',
      'image',
      'table',
      'code',
      'undo',
      'redo',
    ];
    editor.customConfig.onblur = function () {
      // html 即编辑器中的内容
      sessionStorage.setItem('contain', editor.txt.text());
    };
    editor.create();
    editor.txt.html(this.data2);
  },
};
</script>
