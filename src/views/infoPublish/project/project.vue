<template>
  <div id="project">
    <Card>
      <Row>
        <Col :span="10">
          <Form
            ref="searchForm"
            :model="searchForm"
            inline
            label-position="right"
          >
            <Form-item prop="search">
              <Input
                search
                enter-button
                v-model="searchForm.search"
                placeholder="项目名称"
                @on-search="handleSearch"
              />
            </Form-item>
          </Form>
        </Col>
      </Row>
      <Row style="margin-bottom: 10px">
        <Button type="primary" @click="addProject" icon="md-add"
          >新建项目</Button
        >
        <Button @click="getDataList" icon="md-refresh" style="margin-left: 15px"
          >刷新</Button
        >
      </Row>
      <Row>
        <Table
          ref="selection"
          :loading="loading"
          :columns="columns"
          :data="data"
          @on-expand="onExpand"
          border
          class="table"
          :row-class-name="activeExpand"
        >
          <template slot-scope="{ row }" slot="action">
            <div
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 12px;
              "
            >
              <div
                style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  flex: 1;
                "
              >
                <div
                  class="menu-item"
                  @click="addPre(row)"
                  :class="{ notClick: row.status == 1 }"
                >
                  <p><Icon type="md-clipboard"></Icon></p>
                  <p>发资格预审公告</p>
                </div>
                <div
                  class="menu-item"
                  :class="{ notClick: row.status == 1 }"
                  @click="addTender(row)"
                >
                  <p><Icon type="md-albums"></Icon></p>
                  <p>发招标公告</p>
                </div>
              </div>
              <div style="width: 150px">
                <Button
                  type="primary"
                  size="small"
                  @click="copy(row)"
                  style="margin-right: 5px; font-size: 12px"
                  >复制项目</Button
                >
                <Button
                  type="primary"
                  size="small"
                  @click="editor(row)"
                  style="font-size: 12px"
                  >编辑项目</Button
                >
              </div>
            </div>
          </template>
        </Table>
      </Row>
      <Row type="flex" justify="end" style="margin-top: 10px">
        <Page
          transfer
          :current="searchForm.page"
          :total="totalCount"
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
  </div>
</template>

<script>
import expandRow from "./table-expand";
import { getProjectList } from "@/api/publishApi";
export default {
  name: "project",
  components: {
    expandRow,
  },
  data() {
    return {
      loading: false,
      searchForm: {
        search: "",
        size: 10,
        page: 1,
      },
      columns: [
        {
          title: "项目名称",
          minWidth: 200,
          key: "projectTitle",
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
                  title: params.row.projectTitle,
                },
                class: params.row.status === 1 ? "titleNot" : "titleCan",
                on: {
                  click: () => {
                    this.toDetail(params.row);
                  },
                },
              },
              params.row.projectTitle
            );
          },
        },
        {
          title: "创建时间",
          width: 180,
          key: "lastModifiedTime",
          align: "center",
        },
        {
          title: "操作",
          slot: "action",
          width: 400,
          align: "center",
        },
        {
          title: "关联公告",
          type: "expand",
          align: "center",
          width: 100,
          render: (h, params) => {
            return h(expandRow, {
              props: {
                projectId: params.row.projectId,
              },
            });
          },
        },
      ],
      data: [],
      totalCount: 0,
    };
  },
  activated() {
    this.getDataList();
  },
  methods: {
    getDataList() {
      this.loading = true;
      getProjectList(this.searchForm).then((res) => {
        if (res.success) {
          this.data = res.result.list;
          this.totalCount = res.result.total;
        }
        this.loading = false;
      });
    },
    changesize(v) {
      this.searchForm.size = v;
      this.getDataList();
    },
    changePage(v) {
      this.searchForm.page = v;
      this.getDataList();
    },
    // 跳转新建项目
    addProject() {
      if (
        this.$store.state.app.pageOpenedList.some(
          (item) => item.name === "addProject"
        )
      ) {
        console.log(this.$store.state.app.pageOpenedList);
        this.$Modal.confirm({
          title: "提示",
          content: "当前已有项目正在创建，确认重新创建新项目？",
          onOk: () => {
            this.removeStore("projectId");
            this.removeStore("oldProjectId");
            this.removeStore("projectStep");
            this.setStore("addProject", true);
            this.$router.push({
              name: "addProject",
            });
          },
        });
      } else {
        this.removeStore("projectId");
        this.removeStore("oldProjectId");
        this.removeStore("projectStep");
        this.setStore("addProject", true);
        this.$router.push({
          name: "addProject",
        });
      }
    },
    // 跳转详情
    toDetail(v) {
      let data = this.getStore("projectDetailTabs") || [];
      if (data.length !== 0) {
        data = JSON.parse(data);
      }
      console.log(data);
      if (!data.some((item) => item.id == v.projectId)) {
        data.push({
          id: v.projectId + "",
          title: v.projectTitle,
        });
      }
      this.setStore("projectDetailTabs", JSON.stringify(data));
      this.setStore("currentProjectDetailId", v.projectId + "");
      this.$router.push({
        name: "projectDetail",
      });
    },
    // 按项目名称查询
    handleSearch() {
      this.getDataList();
    },
    // 判断关联公告是否由下级
    activeExpand(row, index) {
      if (row.relateNum == 0) {
        return "notClass";
      } else {
        return "activeClass";
      }
    },
    routerEnv(name) {
      this.$router.push({
        name,
      });
    },
    copy(v) {
      // 复制项目
      if (
        this.$store.state.app.pageOpenedList.some(
          (item) => item.name === "addProject"
        )
      ) {
        console.log(this.$store.state.app.pageOpenedList);
        this.$Modal.confirm({
          title: "提示",
          content: "当前已有项目正在创建，确认重新创建新项目？",
          onOk: () => {
            this.setStore("oldProjectId", v.projectId);
            this.setStore("addProject", true);
            this.removeStore("projectId");
            this.removeStore("projectStep");
            this.$router.push({
              name: "addProject",
            });
          },
        });
      } else {
        this.setStore("oldProjectId", v.projectId);
        this.setStore("addProject", true);
        this.removeStore("projectId");
        this.removeStore("projectStep");
        this.$router.push({
          name: "addProject",
        });
      }
    },
    // 编辑项目
    editor(v) {
      if (
        this.$store.state.app.pageOpenedList.some(
          (item) => item.name === "editProject"
        )
      ) {
        console.log(this.$store.state.app.pageOpenedList);
        this.$Modal.confirm({
          title: "提示",
          content: "当前已有项目正在编辑，确认重新编辑新项目？",
          onOk: () => {
            this.setStore("editProject", true);
            this.$router.push({
              name: "editProject",
              query: {
                projectId: v.projectId,
                type: v.status,
              },
            });
          },
        });
      } else {
        this.setStore("editProject", true);
        this.$router.push({
          name: "editProject",
          query: {
            projectId: v.projectId,
            type: v.status,
          },
        });
      }
    },
    // 发招标
    addTender(v) {
      if (
        this.$store.state.app.pageOpenedList.some(
          (item) => item.name === "addTender"
        )
      ) {
        this.$Modal.confirm({
          title: "提示",
          content: "当前已有公告正在创建，确认重新创建新公告？",
          onOk: () => {
            this.setStore('addTenderClickFlag', true)
            this.setStore("projectToTender", v.projectId);
            this.removeStore("tenderId");
            this.setStore("tenderAdd", true);
            this.$router.push({
              name: "addTender",
            });
          },
        });
      } else {
        this.setStore('addTenderClickFlag', true)
        this.setStore("projectToTender", v.projectId);
        this.removeStore("tenderId");
        this.setStore("tenderAdd", true);
        this.$router.push({
          name: "addTender",
        });
      }
    },
    // 新建资格预审公告
    addPre(v) {
      if (
        this.$store.state.app.pageOpenedList.some(
          (item) => item.name === "addPrequalification"
        )
      ) {
        this.$Modal.confirm({
          title: "提示",
          content: "当前已有公告正在创建，确认重新创建新公告？",
          onOk: () => {
            this.setStore('addPreClickFlag', true)
            this.setStore("projectToPre", v.projectId);
            this.removeStore("addPreId");
            this.setStore("preAdd", true);
            this.$router.push({
              name: "addPrequalification",
            });
          },
        });
      } else {
        this.setStore('addPreClickFlag', true)
        this.setStore("projectToPre", v.projectId);
        this.removeStore("addPreId");
        this.setStore("preAdd", true);
        this.$router.push({
          name: "addPrequalification",
        });
      }
    },
  },
};
</script>

<style lang="less">
#project {
  .menu-item {
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;
    color: #2d8cf0;
  }

  .ivu-form-inline .ivu-form-item {
    width: 100%;
  }
  .activeClass .ivu-table-cell-expand i {
    color: #2d8cf0 !important;
  }
  .notClass .ivu-table-cell-expand i {
    color: #c5c8ce;
  }
  .notClass .ivu-table-cell-expand {
    pointer-events: none;
  }
  div.notClick {
    color: #c5c8ce;
    pointer-events: none;
  }
  .titleNot {
    pointer-events: none;
    color: #c5c8ce;
  }
  .titleCan {
    color: #2d8cf0;
  }
}
</style>
