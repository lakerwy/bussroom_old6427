<template>
  <div class="editor">
    <div ref="editor"></div>
  </div>
</template>

<script>
import E from "wangeditor";


// import { getToken } from "@/utils/auth";
import wLayoutMenu from "@/libs/wangeditor/wLayoutMenu";
export default {
  name: "editor",
  props: {
    content: {
      require: true,
      type: String,
      default: ""
    }
  },
  data() {
    return {
      editor: null
    };
  },
  methods: {
    // keyDownReview() {
    //   document.onkeydown = function(event) {
    //     var e = event || window.event;
    //     e.returnValue = true;
    //   };
    // },
    // keyDown() {
    //   let that = this;
    //   this.$nextTick(() => {
    //     document.onkeydown = function(event) {
    //       var e = event || window.event;
    //       var keyCode = e.keyCode || e.which;
    //       if (keyCode == 27) {
    //         console.log(that, "this");
    //         that.editor.unFullScreen();
    //       }
    //       // if (e && e.preventDefault) {
    //       //   e.preventDefault();
    //       // } else {
    //       //   window.event.returnValue = false;
    //       // }
    //     };
    //   });
    // },

    /**
     * 清空内容
     */
    clearContent() {
      this.editor.txt.clear();
    }
  },
  watch: {
    content: function(newVal, oldval) {
      if (newVal !== this.editor.txt.html()) {
        this.editor.txt.html(this.content); //根据父组件传来的值设置html值
      }
    }
  },
  created() {},
  mounted() {
    this.editor = new E(this.$refs.editor); // 实例化富文本编辑器
    this.editor.config.height = 220; // 设置编辑区域高度为 750px
    // 注册菜单
    this.editor.menus.extend("shortcutLayout", wLayoutMenu);
    // this.editor.menus.extend("shortcutLayout1", wLayoutMenu1);
    // 也可以通过配置 menus 调整菜单的顺序，参考【配置菜单】部分的文档
    this.editor.config.menus = this.editor.config.menus.concat(
      "shortcutLayout",
      "shortcutLayout1"
    );
    this.editor.config.zIndex = 500; // 设置editor的层级
    // 子传父实时输入数据
    this.editor.config.onchange = html => {
      console.log(html,'html');
      this.$emit("update:content", html);
    };
    this.editor.config.pasteFilterStyle = false;

    // this.editor.config.customPaste = event => {
    //   console.log(1111111111);
    //   // JS 语法

    //   // event 是 ClipboardEvent 类型，可以拿到粘贴的数据
    //   // 可参考 https://developer.mozilla.org/zh-CN/docs/Web/API/ClipboardEvent

    //   const html = event.clipboardData.getData("text/html"); // 获取粘贴的 html
    //   const text = event.clipboardData.getData("text/plain"); // 获取粘贴的纯文本
    //   const rtf = event.clipboardData.getData("text/rtf"); // 获取 rtf 数据（如从 word wsp 复制粘贴）

    //   // 同步
    //   editor.insertText("xxx");

    //   // 异步
    //   setTimeout(() => {
    //     editor.insertText("yy");
    //   }, 1000);

    //   // 阻止默认的粘贴行为
    //   event.preventDefault();
    //   return false;

    //   // 继续执行默认的粘贴行为
    //   return true;
    // };
    // 配置iview ui message提示
    this.editor.config.customAlert = (s, t) => {
      switch (t) {
        case "success":
          Message.success(s);
          break;
        case "info":
          Message.info(s);
          break;
        case "warning":
          Message.warning(s);
          break;
        case "error":
          Message.error(s);
          break;
        default:
          Message.info(s);
          break;
      }
    };
    // 配置上传图片服务端接口
    // this.editor.config.uploadImgServer = "/agency.info.Fbxx/uploadFileTest";
    this.editor.config.uploadImgShowBase64 = true
    this.editor.config.uploadImgMaxSize = 10 * 1024 * 1024;
    this.editor.config.uploadImgMaxLength = 1;
    this.editor.config.uploadFileName = "file"; // formdata中的name属性
    // this.editor.config.uploadImgHeaders = {
    //   Authorization: "Bearer " + getToken() // 设置请求头
    // }

    (this.editor.config.fontSizes = {
      "x-small": { name: "12px", value: "1" },
      small: { name: "14px", value: "2" },
      normal: { name: "16px", value: "3" },
      large: { name: "18px", value: "4" },
      "x-large": { name: "24px", value: "5" },
      "xx-large": { name: "32px", value: "6" },
      "xxx-large": { name: "48px", value: "7" }
    }),
      // 配置字体
      (this.editor.config.fontNames = [
        "黑体",
        "仿宋",
        "楷体",
        "标楷体",
        "华文仿宋",
        "华文楷体",
        "宋体",
        "微软雅黑",
        "Arial",
        "Tahoma",
        "Verdana",
        "Times New Roman",
        "Courier New"
      ]);

    this.editor.config.uploadImgHooks = {
      // 图片上传并返回结果，但图片插入错误时触发
      fail: function(xhr, editor, result) {},
      success: function(xhr, editor, result) {
        // 图片上传并返回结果，图片插入成功之后触发
      },
      customInsert: function(insertImgFn, result) {
        // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
        // insertImgFn 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果

        // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
        const { code, msg, data } = result;
        if (code == 200) {
          var url = data;
          insertImgFn(url);
          // result 必须是一个 JSON 格式字符串！！！否则报错
          // setTimeout(() => {
          //   // 图片上传完成就默认一个样式
          //   let img = document.querySelector('.w-e-text-container img[src="' + url + '"]');
          //   let parentDom = img.parentNode;
          //   let width = img.width;
          //   let height = img.height;
          //   let ratio = width / height;
          //   let setW = 600;
          //   let setH = 0;  // 等比计算
          //   if (setW / setH != ratio) {
          //     setH = setW / ratio;
          //   }
          //   img.setAttribute('width', setW);
          //   img.setAttribute('height', setH);
          //   parentDom.style.cssText = "text-align: center";
          // }, 100);
        } else {
          Message.warning(msg);
        }
      }
    };

    this.editor.create(); // 创建富文本编辑器
    this.editor.txt.html(this.content); // 初始化默认内容
  },

  beforeDestroy() {
    // 销毁编辑器
    this.editor.destroy();
    this.editor = null;

    //取消监听键盘按下事件
    // this.keyDownReview();
  }
};
</script>

<style lang="less" scoped></style>
