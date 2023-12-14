<template>
  <div id="candidate">
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
                placeholder="中标候选人公示名称"
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
        <Button type="primary" @click="addCandidate" icon="md-add"
          >新建中标候选人公示</Button
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
                v-show="row.status == 2 || row.status === 4"
                class="flex-row"
                :class="{ notActive: row.status == 2 }"
              >
                <!-- <a @click="share" class="titleNot">
                  <Icon type="md-share" />
                  分享
                </a> -->
                <a @click="correctCandidate(row)" v-show="row.noticeType !== 9">
                  <Icon type="md-swap" />
                  发变更
                </a>
                <a @click="abandonCandidate(row)" v-show="row.noticeType !== 9">
                  <Icon type="md-stats" />
                  发废标
                </a>
                <!-- <a @click="addResult(row)" v-show="row.noticeType !== 9">
                  <Icon type="md-grid" />
                  发中标结果
                </a> -->
              </div>
              <div v-show="row.status === 1 || row.status === 3">
                <a @click="candateEdit(row)">
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
import { getCandidateList } from "@/api/publishApi";
export default {
  name: "candidate",
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
      totalCount: 100,
      loading: false,
      columns: [
        {
          title: "中标候选人公示名称",
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
          width: 180,
          slot: "time",
          align: "center",
        },
        {
          title: "操作",
          slot: "action",
          width: 300,
          align: "left",
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
      getCandidateList(this.searchForm).then((res) => {
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
    // 新建中标候选人
    addCandidate() {
      if (
        this.$store.state.app.pageOpenedList.some(
          (item) => item.name === "addCandidate"
        )
      ) {
        this.$Modal.confirm({
          title: "提示",
          content: "当前已有公示正在创建，确认重新创建新公示？",
          onOk: () => {
            this.setStore('addCanClickFlag', true);
            this.removeStore('tenderToCan')
            this.removeStore("candidateId");
            this.setStore("candidateAdd", true);
            this.$router.push({
              name: "addCandidate",
            });
          },
        });
      } else {
        this.setStore('addCanClickFlag', true);
        this.removeStore('tenderToCan')
        this.removeStore("candidateId");
        this.setStore("candidateAdd", true);
        this.$router.push({
          name: "addCandidate",
        });
      }
    },
    // 编辑
    candateEdit(r) {
      if (r.noticeType === 7) {
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
                  id: r.id,
                },
              });
            },
          });
        } else {
          this.setStore("candidateEdit", true);
          this.$router.push({
            name: "editCandidate",
            query: {
              id: r.id,
            },
          });
        }
      } else if (r.noticeType === 8) {
        if (
          this.$store.state.app.pageOpenedList.some(
            (item) => item.name === "editCorrectCan"
          )
        ) {
          this.$Modal.confirm({
            title: "提示",
            content: "当前已有变更公示正在编辑，确认要编辑新的变更公示？",
            onOk: () => {
              this.setStore("editCorrectCan", true);
              this.$router.push({
                name: "editCorrectCan",
                query: {
                  id: r.id,
                },
              });
            },
          });
        } else {
          this.setStore("editCorrectCan", true);
          this.$router.push({
            name: "editCorrectCan",
            query: {
              id: r.id,
            },
          });
        }
      }else {
        if (
          this.$store.state.app.pageOpenedList.some(
            (item) => item.name === "editAbandonCan"
          )
        ) {
          this.$Modal.confirm({
            title: "提示",
            content: "当前已有废标公示正在编辑，确认要编辑新的废标公示？",
            onOk: () => {
              this.setStore("editAbandonCan", true);
              this.$router.push({
                name: "editAbandonCan",
                query: {
                  id: r.id,
                },
              });
            },
          });
        } else {
          this.setStore("editAbandonCan", true);
          this.$router.push({
            name: "editAbandonCan",
            query: {
              id: r.id,
            },
          });
        }
      }
    },
    // 发变更
    correctCandidate(v) {
      if (
        this.$store.state.app.pageOpenedList.some(
          (item) => item.name === "correctCandidate"
        )
      ) {
        this.$Modal.confirm({
          title: "提示",
          content: "当前已创建了变更公示，确认要创建新的变更公示？",
          onOk: () => {
            this.setStore("changeCanClickFlag", true);
            this.removeStore("changeCanId");
            this.setStore("candidateChange", true);
            this.$router.push({
              name: "correctCandidate",
              query: {
                id: v.id,
              },
            });
          },
        });
      } else {
        this.setStore("changeCanClickFlag", true);
        this.removeStore("changeCanId");
        this.setStore("candidateChange", true);
        this.$router.push({
          name: "correctCandidate",
          query: {
            id: v.id,
          },
        });
      }
    },
    // 发废标
    abandonCandidate(v) {
      if (
        this.$store.state.app.pageOpenedList.some(
          (item) => item.name === "abandonCandidate"
        )
      ) {
        this.$Modal.confirm({
          title: "提示",
          content: "当前已创建了废标公示，确认要创建新的废标公示？",
          onOk: () => {
            this.setStore('abandonCanClickFlag', true)
            this.removeStore("abandonCanId");
            this.setStore("candidateAbandon", true);
            this.$router.push({
              name: "abandonCandidate",
              query: {
                id: v.id,
              },
            });
          },
        });
      } else {
        this.setStore('abandonCanClickFlag', true)
        this.removeStore("abandonCanId");
        this.setStore("candidateAbandon", true);
        this.$router.push({
          name: "abandonCandidate",
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
          type:3
        });
      }
      this.setStore("tenderDetailsTabs", JSON.stringify(data));
      this.setStore("currentDetailId", v.id + "");
      this.$router.push("/infoPublish/noticeDetail#" + v.id);
    },
    searchTab() {
      // 查询关键字
      const info = {
        noticeName: this.noticeNames,
      };
    },
    routerEnv(name) {
      this.$router.push({
        name,
      });
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
    // 发中标结果
    addResult(v) {
      if (
        this.$store.state.app.pageOpenedList.some(
          (item) => item.name === "addResult"
        )
      ) {
        this.$Modal.confirm({
          title: "提示",
          content: "当前已有公示正在创建，确认重新创建新公示？",
          onOk: () => {
            this.setStore('addResultClickFlag', true)
            this.removeStore("tenderToResult")
            this.setStore('tenderToResult', v.id)
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
        this.setStore('tenderToResult', v.id)
        this.removeStore("resultId");
        this.setStore("resultAdd", true);
        this.$router.push({
          name: "addResult",
        });
      }
    },
  },
};
</script>

<style lang="less" >
#candidate {
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
  .operationBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
