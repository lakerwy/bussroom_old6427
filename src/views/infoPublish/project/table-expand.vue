<template>
  <div class="table-expand">
    <Table ref="table" :columns="columns" :data="data" disabled-hover>
      <template slot-scope="{ row }" slot="noticeType">
        <span color="blue" v-if="row.noticeType == 1">资格预审</span>
        <span color="geekblue" v-else-if="row.noticeType == 4">招标公告</span>
        <span color="red" v-else-if="row.noticeType == 7">中标候选人公示</span>
        <span color="green" v-else-if="row.noticeType == 10">中标结果公告</span>
        <span color="green" v-else>变更公告</span>
      </template>
      <template slot-scope="{ row }" slot="time">
        <Tag color="blue" v-show="row.status === 1">编辑中</Tag>
        <Tag color="geekblue" v-show="row.status === 2">未发布</Tag>
        <Tag color="red" v-show="row.status === 3">已打回</Tag>
        <Tag color="green" v-show="row.status === 4">已发布</Tag>
        <p>{{ row.statusTime }}</p>
      </template>
      <!-- <template slot-scope="{ row }" slot="action">
        <a v-show="row.state !== 3" href="javascript:void(0)">
          <Icon type="md-share" />
          分享
        </a>
        <a v-show="row.state === 3" href="javascript:void(0)" @click="toEdit(row)">
          <Icon type="md-create" />
          编辑
        </a>
      </template> -->
    </Table>
    <Row type="flex" justify="end" style="margin-top: 10px">
      <Page
        transfer
        :current="page"
        :total="total"
        :page-size="size"
        @on-change="changePage"
        @on-page-size-change="changesize"
        :page-size-opts="[5, 10, 20]"
        size="small"
        show-total
        show-elevator
        show-sizer
      ></Page>
    </Row>
  </div>
</template>

<script>
import { getRelationList } from "@/api/publishApi";
export default {
  name: "table-expand",
  data() {
    return {
      size: 5,
      page: 1,
      columns: [
        {
          title: "公告名称",
          key: "name",
          minWidth: 300,
          align: "left",
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
                  color: "#2d8cf0",
                  cursor: "pointer",
                },
                domProps: {
                  title: params.row.title,
                },
                on: {
                  click: () => {
                    this.toDetail(params.row);
                  },
                },
              },
              params.row.title
            );
          },
        },
        {
          title: "公告类型",
          width: 150,
          slot: "noticeType",
          align: "center",
        },
        {
          title: "公告状态/状态时间",
          width: 180,
          slot: "time",
          align: "center",
        },
        /* {
          title: "操作",
          width: 100,
          slot: "action",
          align: "center",
        }, */
      ],
      data: [],
      total: 0,
    };
  },
  props: {
    projectId: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    this.getDataList();
  },
  methods: {
    getDataList() {
      getRelationList({
        page: this.page,
        size: this.size,
        projectId: this.projectId,
      }).then((res) => {
        if (res.success) {
          this.data = res.result.list;
          this.total = res.result.total;
        }
      });
    },
    changesize(v) {
      this.size = v;
      this.getDataList();
    },
    changePage(v) {
      this.page = v;
      this.getDataList();
    },
    // 跳转到详情
    toDetail(v) {
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
    // 跳转到编辑
    toEdit(v) {},
    routerEnv(name) {
      this.$router.push({
        name,
      });
    },
  },
};
</script>

<style lang="less">
.table-expand {
  .ivu-table-wrapper {
    margin-top: 40px;
    overflow: inherit;
  }
  .project-name {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  td,
  th {
    border: none !important;
  }
  td {
    background: #e4e4e4;
    border-top: 8px solid #f8f8f9 !important;
  }
}
</style>
