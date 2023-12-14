<template>
  <div class="search">
    <Card>
      <Row>
        <Form
          ref="searchForm"
          :model="searchForm"
          inline
          :label-width="80"
          label-position="right"
        >
          <Form-item label="公告名称" prop="keyword" style="width: 280px">
            <Input v-model="searchForm.keyword" clearable></Input>
          </Form-item>
          <FormItem prop="noticeType" label="公告类型" style="width: 280px">
            <Select v-model="searchForm.noticeType">
              <Option
                v-for="item in typeList"
                :value="item.value"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
          <FormItem prop="status" label="公告状态" style="width: 280px">
            <Select v-model="searchForm.status">
              <Option
                v-for="item in stateList"
                :value="item.value"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
          <FormItem prop="startTime" label="状态时间" style="width: 280px">
            <DatePicker
              v-model="time"
              format="yyyy-MM-dd"
              type="datetimerange"
              @on-change="timeChange"
            ></DatePicker>
          </FormItem>
          <Form-item class="operation">
            <Button @click="handleSearch" type="primary" icon="ios-search"
              >查询</Button
            >
            <Button @click="handleReset">重置</Button>
          </Form-item>
        </Form>
      </Row>
      <Row>
        <Table
          border
          ref="table"
          :columns="columns"
          :data="data"
          :loading="loading"
        >
          <template slot-scope="{ row }" slot="noticeType">
            <span color="blue" v-if="row.noticeType == 1">资格预审</span>
            <span color="geekblue" v-else-if="row.noticeType == 4"
              >招标公告</span
            >
            <span color="red" v-else-if="row.noticeType == 7"
              >中标候选人公示</span
            >
            <span color="green" v-else-if="row.noticeType == 10"
              >中标结果公告</span
            >
            <span color="green" v-else>变更公告</span>
          </template>
          <template slot-scope="{ row }" slot="time">
            <Tag color="blue" v-show="row.status === 1">编辑中</Tag>
            <Tag color="geekblue" v-show="row.status === 2">未发布</Tag>
            <Tag color="red" v-show="row.status === 3">已打回</Tag>
            <Tag color="green" v-show="row.status === 4">已发布</Tag>
            <p>{{ row.statusTime }}</p>
          </template>
          <template slot-scope="{ row }" slot="action">
            <!-- <a
              v-show="row.state !== 3"
              href="javascript:void(0)"
              disabled
              @click="share"
              style="color:#c5c8ce"
            >
              <Icon type="md-share" />
              分享
            </a> -->
            <a
              v-show="row.status === 1 || row.status === 3"
              href="javascript:void(0)"
              @click="edit(row)"
            >
              <Icon type="md-create" />
              编辑
            </a>
            <a
              v-show="row.status === 2 || row.status === 4"
              href="javascript:void(0)"
              @click="view(row)"
            >
              <Icon type="md-paper" />
              查看
            </a>
          </template>
        </Table>
      </Row>
      <br />
      <Row type="flex" justify="end">
        <Page
          transfer
          :current="searchForm.page"
          :total="total"
          :page-size="searchForm.size"
          @on-change="changePage"
          @on-page-size-change="changesize"
          :page-size-opts="[10, 20, 50]"
          size="small"
          show-total
          show-elevator
          show-sizer
        ></Page>
      </Row>
    </Card>
    <commonShare :shareFlag.sync="shareFlag"></commonShare>
  </div>
</template>

<script>
import commonShare from "../../my-components/xboot/common-share";
import { getAllNotice } from "@/api/publishApi";
export default {
  name: "stateList",
  components: {
    commonShare,
  },
  data() {
    return {
      time: [this.format(new Date(new Date() - 30*24*3600*1000), 'yyyy-MM-dd'), this.format(new Date(), 'yyyy-MM-dd')],
      loading: true,
      shareFlag: false,
      searchForm: {
        keyword: "",
        noticeType: "",
        status: -1,
        startTime: this.format(new Date(new Date() - 30*24*3600*1000), 'yyyy-MM-dd'),
        endTime: this.format(new Date(), 'yyyy-MM-dd'),
        size: 10,
        page: 1,
      },
      typeList: [
        {
          label: "变更公告",
          value: "2,3,5,6,8,9,11,12",
        },
        {
          label: "招标公告",
          value: "1",
        },
        {
          label: "中标候选人公示",
          value: "4",
        },
        {
          label: "中标结果公告",
          value: "7",
        },
        {
          label: "资格预审公告",
          value: "10",
        },
      ],
      stateList: [
        {
          label: "全部",
          value: -1,
        },
        {
          label: "编辑中",
          value: 1,
        },
        {
          label: "未发布",
          value: 2,
        },
        {
          label: "已打回",
          value: 3,
        },
        {
          label: "已发布",
          value: 4,
        },
      ],
      columns: [
        {
          title: "公告名称",
          key: "title",
          render: (h, params) => {
            return h(
              "div",
              {
                style: {
                  overflow: "hidden",
                  "text-overflow": "ellipsis",
                  display: " -webkit-box",
                  "-webkit-line-clamp": 2,
                  "-webkit-box-orient": "vertical",
                  cursor: "pointer",
                },
                domProps: {
                  title: params.row.title,
                },
                class: params.row.status === 1 ? "titleNot" : "titleCan",
                on: {
                  click: () => {
                    this.view(params.row);
                  },
                },
              },
              params.row.title
            );
          },
        },
        {
          title: "公告状态/状态时间",
          width: 180,
          align: "center",
          slot: "time",
        },
        {
          title: "公告类型",
          width: 140,
          slot: "noticeType",
          align: "center",
        },
        {
          title: "操作",
          width: 120,
          slot: "action",
          align: "center",
        },
      ],
      total: 0,
      data: [],
    };
  },
  created() {
    this.getDataList();
  },
  methods: {
    getDataList() {
      this.loading = true;
      getAllNotice(this.searchForm).then((res) => {
        this.loading = false;
        if (res.success) {
          this.data = res.result.content;
          this.total = res.result.totalElements;
        }
      });
    },
    changePage(v) {
      this.searchForm.page = v;
      this.getDataList();
    },
    changesize(v) {
      this.searchForm.size = v;
      this.getDataList();
    },
    timeChange(v) {
      this.searchForm.startTime = v[0];
      this.searchForm.endTime = v[1];
    },
    // 编辑
    edit(v) {
      if (v.noticeType == 1 || v.noticeType == 2 || v.noticeType == 3) {
        if (
          this.$store.state.app.pageOpenedList.some(
            (item) => item.name === "editPrequalification"
          )
        ) {
          this.$Modal.confirm({
            title: "提示",
            content: "当前已有公告正在被编辑，确认要编辑新公告？",
            onOk: () => {
              this.setStore("preEdit", true);
              this.$router.push({
                name: "editPrequalification",
                query: {
                  id: v.id,
                },
              });
            },
          });
        } else {
          this.setStore("preEdit", true);
          this.$router.push({
            name: "editPrequalification",
            query: {
              id: v.id,
            },
          });
        }
      } else if (v.noticeType == 4 || v.noticeType == 5 || v.noticeType == 6) {
        if (
          this.$store.state.app.pageOpenedList.some(
            (item) => item.name === "editTender"
          )
        ) {
          this.$Modal.confirm({
            title: "提示",
            content: "当前已有公告正在被编辑，确认要编辑新公告？",
            onOk: () => {
              this.setStore("tenderEdit", true);
              this.$router.push({
                name: "editTender",
                query: {
                  id: v.id,
                },
              });
            },
          });
        } else {
          this.setStore("tenderEdit", true);
          this.$router.push({
            name: "editTender",
            query: {
              id: v.id,
            },
          });
        }
      } else if (v.noticeType == 7 || v.noticeType == 8 || v.noticeType == 9) {
        if (
          this.$store.state.app.pageOpenedList.some(
            (item) => item.name === "editCandidate"
          )
        ) {
          this.$Modal.confirm({
            title: "提示",
            content: "当前已有公示正在编辑，确认要编辑新的公示？",
            onOk: () => {
              this.setStore("candidateEdit", true);
              this.$router.push({
                name: "editCandidate",
                query: {
                  id: v.id,
                },
              });
            },
          });
        } else {
          this.setStore("candidateEdit", true);
          this.$router.push({
            name: "editCandidate",
            query: {
              id: v.id,
            },
          });
        }
      } else {
        if (
          this.$store.state.app.pageOpenedList.some(
            (item) => item.name === "editResult"
          )
        ) {
          this.$Modal.confirm({
            title: "提示",
            content: "当前已有公示正在被编辑，确认编辑新的公示？",
            onOk: () => {
              this.setStore("resultEdit", true);
              this.$router.push({
                name: "editResult",
                query: {
                  id: v.id,
                },
              });
            },
          });
        } else {
          this.setStore("resultEdit", true);
          this.$router.push({
            name: "editResult",
            query: {
              id: v.id,
            },
          });
        }
      }
    },
    // 查看
    view(v) {
      let data = this.getStore("tenderDetailsTabs") || [];
      if (data.length !== 0) {
        data = JSON.parse(data);
      }
      if (!data.some((item) => item.id == v.id)) {
        data.push({
          id: v.id + "",
          hash: v.id + "",
          title: v.title,
        });
      }
      this.setStore("tenderDetailsTabs", JSON.stringify(data));
      this.setStore("currentDetailId", v.id + "");
      this.$router.push("/infoPublish/noticeDetail#" + v.id);
    },
    handleSearch() {
      // 搜索
      this.getDataList();
    },
    handleReset() {
      this.$refs.searchForm.resetFields();
      this.searchForm.startTime = '';
      this.searchForm.endTime = '';
      this.time = [];
      this.getDataList();
    },
    share() {
      // 分享
      this.shareFlag = true;
    },
  },
};
</script>
<style lang='less'>
.search {
  .titleNot {
    pointer-events: none;
    color: #c5c8ce;
  }
  .titleCan {
    color: #2d8cf0;
  }
}
</style>
