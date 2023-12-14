<template>
  <div class="projectManage" style="height:100%">
    <Card>
      <div class="own-wrap">
        <div class="own-menu">
          <Menu :active-name="activeName" theme="light" @on-select="changeMenu">
            <MenuItem name=" 我的项目">我的项目</MenuItem>
            <MenuItem name="完成项目">完成项目</MenuItem>
            <MenuItem name="放弃项目">放弃项目</MenuItem>
          </Menu>
        </div>
        <div class="own-content">
          <div class="title">{{currMenu}}</div>
          <div>
            <div>
              <div class="top_action">
                <Input v-model="searchData.name" placeholder="请输入项目名称" class="search">
                <Button slot="append" icon="ios-search" type="primary" @click="takeProject(1)">搜索</Button>
                </Input>
                <Button type="primary" ghost class="down_btn" icon="md-add" @click="goDownload">创建</Button>
              </div>
              <Table :columns="columns" :data="data" :loading="loadingFlag">
                <template slot-scope="{row}" slot="name">
                  <router-link :to="{name:'projectInfo',query:{projectId:row.id,projectItem:row}}"> {{ row.name }}
                  </router-link>
                </template>
                <template slot-scope="{row}" slot="action">
                  <div v-show="row.status === 0">
                    <Button type="success" class="my_btn" size="small" @click="changeStatus(row.id,1)"
                      :loading="row.loadingFlag">完成</Button>
                    <Button type="error" class="my_btn" size="small" @click="changeStatus(row.id,2)"
                      :loading="row.loadingFlag">放弃</Button></div>
                  <div v-show="row.status === 1">
                    <Button type="primary" class="my_btn" size="small" @click="changeStatus(row.id,0)"
                      :loading="row.loadingFlag">跟进</Button>
                    <Button type="error" class="my_btn" size="small" @click="changeStatus(row.id,2)"
                      :loading="row.loadingFlag">放弃</Button></div>
                  <div v-show="row.status === 2">
                    <Button type="primary" class="my_btn" size="small" @click="changeStatus(row.id,0)"
                      :loading="row.loadingFlag">跟进</Button>
                    <Button type="success" class="my_btn" size="small" @click="changeStatus(row.id,1)"
                      :loading="row.loadingFlag">完成</Button></div>
                </template>
              </Table>
              <p style="text-align:center; margin:20px 0;">
                <Page :total="total" :page-size="15" show-total @on-change="changePage"
                  :current.sync="searchData.pageNumber" />
              </p>
            </div>

          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
  import {
    delProject,
    getProjectList,
    saveProject,
    changeProject,
    restoreCollection,
    removeCollection,
  } from "@/api/index";
  export default {
    name: "projectManage",
    data() {
      return {
        followFlag: -1,
        finishFlag: -1,
        abandonFlag: -1,
        activeName: ' 我的项目',
        currMenu: ' 我的项目',
        searchData: {
          name: '',
          pageSize: 15,
          pageNumber: 1,
          status: 0,
          sort: "createTime",
          order: "desc"
        },
        columns: [{
            title: "序号",
            key: "index",
            align: "center",
            minWidth: 60
          },
          {
            title: "业主单位",
            key: "company",
            align: "center",
            minWidth: 120
          },
          {
            title: "项目名称",
            slot: "name",
            align: "left",
            minWidth: 230
          },
          {
            title: "进展阶段",
            key: "phase",
            align: "center",
            minWidth: 100,
          },
          {
            title: "项目总金额(万元)",
            key: "investMoney",
            align: "center",
            minWidth: 100,
          },
          {
            title: "项目负责人",
            key: "manager",
            align: "center",
            minWidth: 90,
          },
          {
            title: "创建时间",
            key: "createTime",
            align: "center",
            minWidth: 100,
          },
          {
            title: "操作",
            slot: "action",
            align: "center",
            minWidth: 160,
            fixed: "right"
          },

        ],
        data: [],
        total: 0,
        loadingFlag: false,
        totalPages: 0
      };
    },
    methods: {
      goDownload() {
        this.$router.push({
          name: "projectCreate"
        });
      },
      changePage() {
        this.takeProject()
      },
      changeStatus(id, status) {
        // let flag = false;
        if (this.data.length <= 1 && this.searchData.pageNumber > 1) {
          this.searchData.pageNumber--
        }

        // 加上loading状态
        let index;
        this.data.forEach((el, i) => {
          if (el.id === id) {
            index = i
            this.data[index].loadingFlag = true;
          }
        })
        changeProject({
          id,
          status
        }).then(res => {
          if (res.success) {
            // this.data.splice(index, 1)
            this.$Message.success("操作成功")
            this.takeProject()
            // if (flag) {
            //   this.changePage(this.searchData.pageNumber);
            // }
          }

        })
      },
      changeMenu(v) {
        // 防止重复点击同一个菜单
        if (this.currMenu === v) return false;

        this.searchData.name = "";
        this.currMenu = v;
        if (v == " 我的项目") {
          this.searchData.status = 0
        } else if (v == "完成项目") {
          this.searchData.status = 1
        } else if (v == "放弃项目") {
          this.searchData.status = 2
        }
        // this.data = []
        this.takeProject(1);
      },
      takeProject(flag) {
        this.loadingFlag = true;
        if (flag == 1) {
          // page参数恢复默认
          this.searchData.pageNumber = 1;
        }
        getProjectList(this.searchData).then(res => {
          if (res.success) {
            this.data = []
            res.result.content.forEach((item, index) => {
              item.index = index + 1;
              item.loadingFlag = false;
              item.createTime = item.createTime.split(" ")[0];
              this.data.push(item);
            })
            this.total = res.result.totalElements;
            this.totalPages = res.result.totalPages;
          }
          this.loadingFlag = false;
        })
      }
    },
    mounted() {},
    activated() {
      this.takeProject(1)
    }
  };
</script>

<style lang="less">
  .down_btn {
    .ivu-icon:before {
      color: #2d8cf0;
    }
  }

  .ivu-table-cell {
    padding-left: 8px;
    padding-right: 8px;
  }

  .projectManage {


    .own-wrap {
      position: relative;

      .own-menu {
        position: absolute;
        left: 0;
        top: 0;
        width: 240px;
      }

      .own-content {
        padding: 8px 40px 8px 260px;

        .title {
          font-size: 20px;
          color: rgba(0, 0, 0, .85);
          line-height: 28px;
          font-weight: 500;
          margin-bottom: 12px;
        }

        .top_action {
          margin-bottom: 20px;
          display: flex;
          justify-content: space-between;

          .search {
            width: 400px;
          }
        }

        .info_buttons {
          display: inline-block;

        }

        .my_btn {
          margin-right: 5px;

          span {
            margin-left: 0;
          }
        }
      }
    }
  }
</style>