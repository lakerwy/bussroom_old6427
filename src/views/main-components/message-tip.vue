<template>
  <div @click="showMessage" class="message-con">
    <Tooltip :content="value > 0 ? '有' + value + '条未读消息' : '无未读消息'" placement="bottom">
      <Badge :count="value" dot>
        <Icon type="md-notifications" :size="22" />
      </Badge>
    </Tooltip>
  </div>
</template>

<script>
import util from "@/libs/util.js";
export default {
  name: "messageTip",
  props: {
    value: {
      type: Number,
      default: 0
    },
    isOpenNewPage: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    showMessage() {
      util.openNewPage(this, "message_index");
      if(this.isOpenNewPage){
        let name = 'message_index';
        let sessionId = window.localStorage.getItem('sessionId');
        const resolve = this.$router.resolve({
          name: 'index',
        })
        window.open(resolve.href + '?sessionId='+sessionId+'&name='+name, '_blank')
      } else {
        this.$router.push({
          name: "message_index"
        });
      }
    }
  }
};
</script>
