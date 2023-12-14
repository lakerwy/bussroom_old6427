<template>
  <div class="messageRemind">
    <div class="title">
      <span>提醒</span>
      <span>系统为您保留近30天的提醒</span>
    </div>
    <Row :gutter="16">
      <Col span="12">
        <Card>
          <List>
            <ListItem>
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  width: 100%;
                  align-items: center;
                "
              >
                <span style="color: #2d8cf0"> 今天 </span>
                <span @click="clickAllLook" style="cursor: pointer">
                  全部已读
                </span>
              </div>
            </ListItem>
            <ListItem v-for="(item, i) in remindList" :key="i">
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  width: 100%;
                  align-items: center;
                "
              >
                <p style="font-size: 12px">
                  {{ item.title }}
                  <span style="color: #1d9ed5">
                    {{ item.name }}
                  </span>
                  {{ item.message }}
                </p>
                <p>
                  <span :style="{ color: item.show ? '#999' : '#ed4014' }">{{
                    item.show ? "已读" : "new"
                  }}</span>
                </p>
              </div>
            </ListItem>
          </List>
        </Card>
      </Col>
      <Col span="12" class="col_right">
        <Card>
          <List>
            <ListItem>
              <div style="color: #2d8cf0">更早</div>
            </ListItem>
            <ListItem v-for="(item, i) in remindList2" :key="i">
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  width: 100%;
                  align-items: center;
                "
              >
                <p style="font-size: 12px">
                  {{ item.title }}
                  <span style="color: #1d9ed5">
                    {{ item.name }}
                  </span>
                  {{ item.message }}
                </p>
                <p>
                  <span :style="{ color: item.show ? '#999' : '#ed4014' }">{{
                    item.show ? "已读" : "new"
                  }}</span>
                </p>
              </div>
            </ListItem>
          </List>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: "allTips",
  data() {
    return {
      theme2: "light",
      theme3: "primary",
      isCollapsed: false,
      index: 1,
      allLook: false,
      remindList: [
        {
          title: "投标报名",
          message: "有一个新报名",
          name:
            "石家庄市桥西区发展改革局新石中路377号写字楼物业管理服务采购招标公告",
          show: false,
        },
        {
          title: "公告",
          message: "已发布",
          name:
            "石家庄市桥西区发展改革局新石中路377号写字楼物业管理服务采购招标公告",
          show: false,
        },
        {
          title: "投标报名",
          message: "有一个新报名",
          name:
            "石家庄市桥西区发展改革局新石中路377号写字楼物业管理服务采购招标公告",
          show: false,
        },
      ],
      remindList2: [
        {
          title: "投标报名",
          message: "有一个新报名",
          name:
            "石家庄市桥西区发展改革局新石中路377号写字楼物业管理服务采购招标公告",
        },
        {
          title: "公告",
          message: "已发布",
          name:
            "石家庄市桥西区发展改革局新石中路377号写字楼物业管理服务采购招标公告",
        },
        {
          title: "投标报名",
          message: "有一个新报名",
          name:
            "石家庄市桥西区发展改革局新石中路377号写字楼物业管理服务采购招标公告",
        },
        {
          title: "投标报名",
          message: "有一个新报名",
          name:
            "石家庄市桥西区发展改革局新石中路377号写字楼物业管理服务采购招标公告",
        },
        {
          title: "公告",
          message: "已发布",
          name:
            "石家庄市桥西区发展改革局新石中路377号写字楼物业管理服务采购招标公告",
        },
        {
          title: "投标报名",
          message: "有一个新报名",
          name:
            "石家庄市桥西区发展改革局新石中路377号写字楼物业管理服务采购招标公告",
        },
        {
          title: "投标报名",
          message: "有一个新报名",
          name:
            "石家庄市桥西区发展改革局新石中路377号写字楼物业管理服务采购招标公告",
        },
        {
          title: "公告",
          message: "已发布",
          name:
            "石家庄市桥西区发展改革局新石中路377号写字楼物业管理服务采购招标公告",
        },
        {
          title: "投标报名",
          message: "有一个新报名",
          name:
            "石家庄市桥西区发展改革局新石中路377号写字楼物业管理服务采购招标公告",
        },
        {
          title: "投标报名",
          message: "有一个新报名",
          name:
            "石家庄市桥西区发展改革局新石中路377号写字楼物业管理服务采购招标公告",
        },
        {
          title: "公告",
          message: "已发布",
          name:
            "石家庄市桥西区发展改革局新石中路377号写字楼物业管理服务采购招标公告",
        },
        {
          title: "投标报名",
          message: "有一个新报名",
          name:
            "石家庄市桥西区发展改革局新石中路377号写字楼物业管理服务采购招标公告",
        },
      ],
    };
  },
  created() {},
  methods: {
    routerEnv(name) {},
    changeState(i) {},
    clickAllLook() {},
  },
  watch: {},
  computed: {},
};
</script>

<style lang="less" scoped>
.messageRemind {
  height: 100%;
  .title {
    width: 50%;
    margin: 16px 0;
    line-height: 30px;
    span:nth-of-type(1) {
      font-size: 24px;
    }
    span:nth-of-type(2) {
      float: right;
      color: #999;
      font-size: 14px;
    }
  }
}
</style>
