<template>
  <div id="result">
    <Card>
      <Row :gutter="16">
        <Col span="12">
          <Form
            ref="searchForm"
            :model="searchForm"
            inline
            label-position="right"
            style="width: 100%"
          >
            <Form-item prop="noticeName">
              <Input
                search
                enter-button
                v-model="searchForm.noticeName"
                placeholder="中标结果公告名称"
                @on-search="getDataList"
              />
            </Form-item>
          </Form>
        </Col>
        <Col span="12" style="text-align: end">
          <Button type="text" icon="md-filing" @click="addProject"
            >新建项目</Button
          >
          <Button type="text" icon="md-albums" @click="addTender"
            >新建招标公告</Button
          >
        </Col>
      </Row>
      <Row style="margin-bottom: 10px">
        <Button type="primary" icon="md-add" @click="addResult"
          >新建中标结果公告</Button
        >
        <Button @click="getDataList" icon="md-refresh" style="margin-left: 15px"
          >刷新</Button
        >
      </Row>
      <Row>
        <Table
          :loading="loading"
          border
          ref="selection"
          :columns="columns"
          :data="data"
        >
          <template slot-scope="{ row }" slot="time">
            <Tag color="blue" v-show="row.status === 1">编辑中</Tag>
            <Tag color="geekblue" v-show="row.status === 2">未发布</Tag>
            <Tag color="red" v-show="row.status === 3">已打回</Tag>
            <Tag color="green" v-show="row.status === 4">已发布</Tag>
            <p>{{ row.statusTime }}</p>
          </template>
          <template slot-scope="{ row }" slot="action">
            <div class="flex-row">
              <div
                v-show="row.status == 2 || row.status == 4"
                class="flex-row"
                :class="{ notActive: row.status == 2 }"
              >
                <!-- <a @click="share" class="titleNot">
                  <Icon type="md-share" />
                  分享
                </a> -->
                <a @click="correctResult(row)"  v-show="row.noticeType !== 12">
                  <Icon type="md-swap" />
                  发变更
                </a>
                <a @click="abandonResult(row)"  v-show="row.noticeType !== 12">
                  <Icon type="md-stats" />
                  发废标
                </a>
              </div>
              <div v-show="row.status === 3 || row.status === 1">
                <a @click="edit(row)">
                  <Icon type="md-create" />
                  编辑
                </a>
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
    <commonShare :shareFlag.sync="shareFlag"></commonShare>
  </div>
</template>

<script>
import commonShare from "../../my-components/xboot/common-share";
import { getResultAll } from "@/api/publishApi";
export default {
  name: "result",
  components: {
    commonShare,
  },
  data() {
    return {
      searchForm: {
        noticeName: "",
        size: 10,
        page: 1,
      },
      shareFlag: false,
      loading: false,
      totalCount: 0,
      columns: [
        {
          title: "中标结果公告名称",
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
                    this.toDetail(params.row);
                  },
                },
              },
              params.row.title
            );
          },
        },
        {
          title: "公告状态/状态时间",
          width: 200,
          slot: "time",
          align: "center",
        },
        {
          title: "操作",
          slot: "action",
          align: "left",
          width: 200,
        },
      ],
      data: [],
    };
  },
  activated() {
    this.getDataList();
  },
  methods: {
    getDataList() {
      this.loading = true;
      getResultAll(this.searchForm).then((res) => {
        this.loading = false;
        if (res.success) {
          this.data = res.result.content;
          this.totalCount = res.result.totalElements;
        }
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
    // 发中标结果
    addResult() {
      if (
        this.$store.state.app.pageOpenedList.some(
          (item) => item.name === "addResult"
        )
      ) {
        this.$Modal.confirm({
          title: "提示",
          content: "当前已有公告正在创建，确认重新创建新公告？",
          onOk: () => {
            this.setStore('addResultClickFlag', true)
            this.removeStore("tenderToResult")
            this.removeStore("resultId");
            this.setStore("resultAdd", true);
            this.$router.push({
              name: "addResult",
            });
          },
        });
      } else {
        this.setStore('addResultClickFlag', true)
        this.removeStore("tenderToResult")
        this.removeStore("resultId");
        this.setStore("resultAdd", true);
        this.$router.push({
          name: "addResult",
        });
      }
    },
    // 跳转编辑页面
    edit(v) {
      if (v.noticeType == 10) {
        if (
          this.$store.state.app.pageOpenedList.some(
            (item) => item.name === "editResult"
          )
        ) {
          this.$Modal.confirm({
            title: "提示",
            content: "当前已有公告正在被编辑，确认编辑新的公告？",
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
      } else if (v.noticeType == 11) {
        if (
          this.$store.state.app.pageOpenedList.some(
            (item) => item.name === "editCorrectResult"
          )
        ) {
          this.$Modal.confirm({
            title: "提示",
            content: "当前已有变更公告正在被编辑，确认编辑新的变更公告？",
            onOk: () => {
              this.setStore("editCorrectResult", true);
              this.$router.push({
                name: "editCorrectResult",
                query: {
                  id: v.id,
                },
              });
            },
          });
        } else {
          this.setStore("editCorrectResult", true);
          this.$router.push({
            name: "editCorrectResult",
            query: {
              id: v.id,
            },
          });
        }
      } else {
        if (
          this.$store.state.app.pageOpenedList.some(
            (item) => item.name === "editAbandonResult"
          )
        ) {
          this.$Modal.confirm({
            title: "提示",
            content: "当前已有废标公告正在被编辑，确认编辑新的废标公告？",
            onOk: () => {
              this.setStore("editAbandonResult", true);
              this.$router.push({
                name: "editAbandonResult",
                query: {
                  id: v.id,
                },
              });
            },
          });
        } else {
          this.setStore("editAbandonResult", true);
          this.$router.push({
            name: "editAbandonResult",
            query: {
              id: v.id,
            },
          });
        }
      }
    },
    // 发变更
    correctResult(v) {
      if (
        this.$store.state.app.pageOpenedList.some(
          (item) => item.name === "correctResult"
        )
      ) {
        this.$Modal.confirm({
          title: "提示",
          content: "当前已创建了变更公告，确认创建新的变更公告？",
          onOk: () => {
            this.setStore('changeResultClickFlag', true)
            this.removeStore("changeResultId");
            this.setStore("resultChange", true);
            this.$router.push({
              name: "correctResult",
              query: {
                id: v.id,
              },
            });
          },
        });
      } else {
        this.setStore('changeResultClickFlag', true)
        this.removeStore("changeResultId");
        this.setStore("resultChange", true);
        this.$router.push({
          name: "correctResult",
          query: {
            id: v.id,
          },
        });
      }
    },
    // 发废标
    abandonResult(v) {
      if (
        this.$store.state.app.pageOpenedList.some(
          (item) => item.name === "abandonResult"
        )
      ) {
        this.$Modal.confirm({
          title: "提示",
          content: "当前已创建了废标公告，确认创建新的废标公告？",
          onOk: () => {
            this.setStore('abandonResultClickFlag', true)
            this.removeStore("abandonResultId");
            this.setStore("resultAbandon", true);
            this.$router.push({
              name: "abandonResult",
              query: {
                id: v.id,
              },
            });
          },
        });
      } else {
        this.setStore('abandonResultClickFlag', true)
        this.removeStore("abandonResultId");
        this.setStore("resultAbandon", true);
        this.$router.push({
          name: "abandonResult",
          query: {
            id: v.id,
          },
        });
      }
    },
    // 前往详情页面
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
          type:4
        });
      }
      this.setStore("tenderDetailsTabs", JSON.stringify(data));
      this.setStore("currentDetailId", v.id + "");
      this.$router.push("/infoPublish/noticeDetail#" + v.id);
    },
    share() {
      this.shareFlag = true;
    },
    addProject() {
      if (
        this.$store.state.app.pageOpenedList.some(
          (item) => item.name === "addProject"
        )
      ) {
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
    addTender() {
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
            this.removeStore("projectToTender");
            this.removeStore("tenderId");
            this.setStore("tenderAdd", true);
            this.$router.push({
              name: "addTender",
            });
          },
        });
      } else {
        this.setStore('addTenderClickFlag', true)
        this.removeStore("projectToTender");
        this.removeStore("tenderId");
        this.setStore("tenderAdd", true);
        this.$router.push({
          name: "addTender",
        });
      }
    },
  },
};
</script>

<style lang="less" >
#result {
  .project-name {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: inline-block;
    max-width: 780px;
  }
  div.menu-item {
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;
    color: #2d8cf0;
  }
  .ivu-form-inline .ivu-form-item {
    width: 100%;
  }
  .flex-row a {
    margin-right: 10px;
  }
  .nameBox {
    display: flex;
    align-items: center;
  }
  .notActive {
    pointer-events: none;
    a {
      color: #c5c8ce;
    }
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
