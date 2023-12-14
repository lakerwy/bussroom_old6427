<template>
  <div class="table-expand">
    <Table ref="table" :columns="columns" :data="data" disabled-hover>
      <template slot-scope="{ row }" slot="time">
        <Tag color="green" v-show="row.state === 1">已发布</Tag>
        <Tag color="red" v-show="row.state === 2">未发布</Tag>
        <Tag color="blue" v-show="row.state === 3">未提交</Tag>
        <p>{{ row.time }}</p>
      </template>
      <template slot-scope="{ row }" slot="start">
        <Dropdown placement="bottom-start">
          <a href="javascript:void(0)"> 所选标段 </a>
          <DropdownMenu slot="list">
            <DropdownItem v-for="item in row.periodList" :key="item"
              >{{ item }}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </template>
      <template slot-scope="{ row }" slot="action">
        <a v-show="row.state === 1" href="javascript:void(0)">
          <Icon type="md-share" />
          分享
        </a>
        <a v-show="row.state === 3" href="javascript:void(0)" @click="toEdit(row)">
          <Icon type="md-create" />
          编辑
        </a>
      </template>
    </Table>
    <Row type="flex" justify="end" style="margin-top: 10px">
      <Page
        transfer
        :current="pageNumber"
        :total="totalCount"
        :page-size="pageSize"
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
export default {
  name: "table-expand",
  data() {
    return {
      sData: [],
      start: 0,
      end: 5,
      pageSize:5,
      pageNumber:1,
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
                  title: params.row.name,
                },
                on: {
                  click: () => {
                    this.toDetail(params);
                  },
                },
              },
              params.row.name
            );
          },
        },
        {
          title: "公告类型",
          width: 130,
          key: "type",
          align: "center",
        },
        {
          title: "公告状态/状态时间",
          width: 160,
          slot: "time",
          align: "center",
        },
        {
          title: "操作",
          width: 100,
          slot: "action",
          align: "center",
        },
      ],
    };
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    console.log(1111111111111)
  },
  methods: {
    getDataList() {},
    changesize(v) {
      this.pageSize = v;
      this.getDataList();
    },
    changePage(v) {
      this.pageNumber = v;
      this.getDataList();
    },
    // 跳转到详情
    toDetail(v){

    },
    // 跳转到编辑
    toEdit(v) {

    },
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
  td,th{
    border: none !important;
    
  }
  td{
    background: #e4e4e4;
    border-top: 8px solid #f8f8f9 !important;
  }
}
</style>
