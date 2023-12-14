<template>
  <div class="collect" style="height: 100%">
    <Drawer
      title="企业账号收藏记录"
      placement="right"
      :closable="true"
      width="800"
      v-model="importFlag"
      class-name="c-drawer"
      @on-close="closeDrawer"
    >
      <Button
        type="primary"
        :loading="handleImportLoading"
        @click="handleImport"
        >导入</Button
      >
      <Button
        type="primary"
        :loading="handleImportLoading"
        @click="handleImportAll"
        >全部导入</Button
      >

      <Row style="margin: 10px 0">
        <Alert show-icon>
          已选择
          <span class="select-count">{{ selectIdList.length }}</span> 项
          <a class="select-clear" @click="clearSelectAll">清空勾选</a>
        </Alert>
      </Row>
      <Table
        ref="collectSel"
        :columns="importColumns"
        :data="importData"
        :loading="importLoading"
        @on-selection-change="showSelect"
      >
        <template slot-scope="{ row }" slot="title">
          <a target="_blank" :href="row.url"> {{ row.title }} </a>
        </template>
        <template slot-scope="{ row }" slot="type">
          <strong>【{{ row.type }}】</strong>
        </template>
      </Table>
      <p style="text-align: center; margin: 20px 0">
        <Page
          :total="importTotal"
          show-total
          :page-size="15"
          @on-change="handleGetPreviousCollection"
          :current.sync="importForm.pageNumber"
        />
      </p>
      <!-- <div class="demo-drawer-footer">
        <Button style="margin-right: 8px" @click="importFlag = false"
          >取消</Button
        >
        <Button type="primary" :loading="handleImportLoading" @click="handleImport">导入</Button>
      </div> -->
    </Drawer>
    <Card>
      <!-- <Modal v-model="downloadFlag" title="投标工具下载"></Modal> -->
      <div class="own-wrap">
        <div style="width: 243px">
          <Menu :active-name="activeName" theme="light" @on-select="changeMenu">
            <MenuItem name="我收藏的项目">我收藏的项目</MenuItem>
            <MenuItem name="历史收藏记录">历史收藏记录</MenuItem>
          </Menu>
        </div>
        <div style="padding: 8px 40px; width: calc(100% - 243px)">
          <div class="title">{{ currMenu }}</div>
          <div>
            <div v-show="currMenu == '我收藏的项目'">
              <div class="top_action">
                <Input v-model="searchData.name" class="search">
                  <Select
                    v-model="searchData.type"
                    transfer
                    slot="prepend"
                    placeholder="类型"
                    style="width: 120px"
                  >
                    <Option :value="0">全部</Option>
                    <Option :value="1">工程招标</Option>
                    <Option :value="2">货物招标</Option>
                    <Option :value="3">服务招标</Option>
                    <Option :value="4">中标公示</Option>
                    <Option :value="5">招标预告</Option>
                    <Option :value="6">政府采购</Option>
                    <Option :value="7">企业采购</Option>
                    <Option :value="8">项目信息</Option>
                  </Select>
                  <Button
                    slot="append"
                    icon="ios-search"
                    type="primary"
                    @click="takeCollection(1)"
                  ></Button>
                </Input>

                <Button
                  ghost
                  icon="ios-arrow-dropright-circle"
                  type="primary"
                  @click="showHistory"
                  >导入企业账号收藏记录</Button
                >
                <!-- <Button
                  type="primary"
                  ghost
                  class="down_btn"
                  icon="md-arrow-down"
                  @click="goDownload"
                  >投标工具下载按钮</Button
                > -->
              </div>
              <Table :columns="columns" :data="data" :loading="loadingFlag">
                <template slot-scope="{ row }" slot="title">
                  <a target="_blank" :href="row.url"> {{ row.title }} </a>
                </template>
                <template slot-scope="{ row }" slot="type">
                  <strong>【{{ row.type }}】</strong>
                </template>

                <template slot-scope="{ row }" slot="action">
                  <infoButtons :row="row" :isBtn="true" />
                  <Button
                    type="error"
                    class="my_btn"
                    size="small"
                    @click="remove(row.id, row.index)"
                    :loading="removeFlag === row.index"
                    >移除</Button
                  >
                </template>
              </Table>

              <p style="text-align: center; margin: 20px 0">
                <Page
                  :total="total"
                  show-total
                  :page-size="30"
                  @on-change="changePage"
                  :current.sync="searchData.pageNumber"
                />
              </p>
            </div>
            <div v-show="currMenu == '历史收藏记录'">
              <div class="top_action">
                <Input v-model="searchData.name" class="search">
                  <Select
                    v-model="searchData.type"
                    transfer
                    slot="prepend"
                    placeholder="类型"
                    style="width: 120px"
                  >
                    <Option :value="0">全部</Option>
                    <Option :value="1">工程招标</Option>
                    <Option :value="2">货物招标</Option>
                    <Option :value="3">服务招标</Option>
                    <Option :value="4">中标公示</Option>
                    <Option :value="5">招标预告</Option>
                    <Option :value="6">政府采购</Option>
                    <Option :value="7">企业采购</Option>
                    <Option :value="8">项目信息</Option>
                  </Select>
                  <Button
                    slot="append"
                    icon="ios-search"
                    type="primary"
                    @click="takeCollection(1)"
                  ></Button>
                </Input>
              </div>
              <Table :columns="columns" :data="data" :loading="loadingFlag">
                <template slot-scope="{ row }" slot="action" class="my_action">
                  <Button
                    type="primary"
                    size="small"
                    class="my_btn"
                    @click="restore(row.id, row.index)"
                    :loading="restoreFlag === row.index"
                    >还原</Button
                  >
                  <Button
                    type="error"
                    size="small"
                    @click="deleteByid(row.id, row.index)"
                    class="my_btn"
                    :loading="deleteFlag === row.index"
                    >删除</Button
                  >
                </template>
                <template slot-scope="{ row }" slot="type">
                  <strong>【{{ row.type }}】</strong>
                </template>
                <template slot-scope="{ row }" slot="title">
                  <a target="_blank" :href="row.url"> {{ row.title }} </a>
                </template>
              </Table>
              <p style="text-align: center; margin: 20px 0">
                <Page
                  :total="total"
                  show-total
                  :page-size="30"
                  @on-change="changePage"
                  :current.sync="searchData.pageNumber"
                />
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
  removeCollection,
  delCollection,
  restoreCollection,
  getCollection,
  upCollection,
  getPreviousCollection,
  importPreviousCollection,
  importAllCollection,
} from "@/api/index";
import infoButtons from "@/views/my-components/xboot/info-buttons";
export default {
  name: "collect",
  components: {
    infoButtons,
  },
  data() {
    return {
      importFlag: false,
      importLoading: false,
      handleImportLoading: false,
      deleteFlag: -1,
      restoreFlag: -1,
      removeFlag: -1,
      downloadFlag: true,
      collectLoading: false,
      typeArr: [
        "工程招标",
        "货物招标",
        "服务招标",
        "中标公示",
        "招标预告",
        "政府采购",
        "企业采购",
        "项目信息",
      ],
      activeName: "我收藏的项目",
      currMenu: "我收藏的项目",
      searchData: {
        name: "",
        type: 0,
        pageSize: 30,
        pageNumber: 1,
        delFlag: 0,
        sort: "createTime",
        order: "desc",
      },
      importForm: {
        pageSize: 15,
        pageNumber: 1,
        sort: "collectTime",
        order: "desc",
      },
      columns: [
        {
          title: "类型",
          slot: "type",
          align: "center",
          minWidth: 120,
        },
        {
          title: "标题",
          slot: "title",
          align: "left",
          minWidth: 230,
        },
        {
          title: "发布时间",
          key: "publishDate",
          align: "center",
          minWidth: 110,
        },
        {
          title: "收藏时间",
          key: "date",
          align: "center",
          minWidth: 110,
        },
        {
          title: "操作",
          slot: "action",
          align: "center",
          minWidth: 200,
        },
      ],
      importColumns: [
        {
          type: "selection",
          width: 60,
          align: "center",
        },
        {
          type: "状态",
          width: 100,
          title: "状态",
          align: "center",
          render: (h, parmas) => {
            let status = "primary";
            let text = "未发布";
            /**
             * 信息发送状态
             * -1 已删除
             * 0 未发布
             * 1 编辑中
             * 2 已发布
             * 200 推送成功
             * 400 推送失败
             */
            switch (parmas.row._disabled) {
              case true:
                status = "success";
                text = "已导入";
                break;
              case false:
                status = "processing";
                text = "未导入";
                break;
              default:
                break;
            }
            return h("Badge", {
              props: {
                status: status,
                text: text,
              },
            });
          },
        },
        {
          title: "类型",
          slot: "type",
          align: "center",
          minWidth: 120,
        },
        {
          title: "标题",
          slot: "title",
          align: "left",
          minWidth: 230,
        },
        {
          title: "发布时间",
          key: "publishDate",
          align: "center",
          minWidth: 110,
        },
        {
          title: "收藏时间",
          key: "date",
          align: "center",
          minWidth: 110,
        },
      ],
      data: [],
      importData: [],
      selectIdList: [],
      total: 0,
      importTotal: 0,
      loadingFlag: false,
    };
  },
  methods: {
    showHistory() {
      this.importFlag = true;
      this.importForm.pageNumber = 1;
      this.handleGetPreviousCollection();
    },
    closeDrawer() {
      // this.changeMenu("我收藏的项目");
    },
    clearSelectAll() {
      this.$refs.collectSel.selectAll(false);
    },
    handleCollect() {},
    showSelect(e) {
      this.selectIdList = e.map((item) => {
        return item.id;
      });
      console.log(this.selectIdList, "this.selectIdList");
    },
    goDownload() {
      this.$router.push({
        name: "download",
      });
    },
    restore(id, index) {
      let flag;
      if (this.data.length <= 1 && this.searchData.pageNumber > 1) flag = true;
      this.restoreFlag = index;
      this.data.forEach((el, i) => {
        if (el.id === id) {
          index = i;
        }
      });

      restoreCollection({
        id,
      }).then((res) => {
        if (res.success) {
          this.data.splice(index, 1);

          this.takeCollection();
          if (flag) {
            this.searchData.pageNumber--;
            this.changePage(this.searchData.pageNumber);
          }
          this.$Message.success("还原成功");
        }
        this.restoreFlag = -1;
      });
    },
    deleteByid(ids, index) {
      let flag = false;
      if (this.data.length <= 1 && this.searchData.pageNumber > 1) flag = true;
      this.deleteFlag = index;
      this.data.forEach((el, i) => {
        if (el.id === ids) {
          index = i;
        }
      });
      delCollection({
        ids,
      }).then((res) => {
        if (res.success) {
          this.$Message.success("成功删除");
          this.data.splice(index, 1);
          this.takeCollection();
          if (flag) {
            this.searchData.pageNumber--;
            this.changePage(this.searchData.pageNumber);
          }
        }
        this.deleteFlag = -1;
      });
    },
    changePage() {
      this.takeCollection();
    },
    remove(id, index) {
      let flag = false;
      if (this.data.length <= 1 && this.searchData.pageNumber > 1) flag = true;
      this.removeFlag = index;
      this.data.forEach((el, i) => {
        if (el.id === id) {
          index = i;
        }
      });
      removeCollection({
        id,
      }).then((res) => {
        if (res.success) {
          this.data.splice(index, 1);
          this.takeCollection();
          this.$Message.success("成功移除");
          if (flag) {
            this.searchData.pageNumber--;
            this.changePage(this.searchData.pageNumber);
          }
        }
        this.removeFlag = -1;
      });
    },
    changeMenu(v) {
      this.searchData.name = "";
      this.searchData.type = 0;
      this.currMenu = v;
      if (v == "我收藏的项目") {
        this.searchData.delFlag = 0;
      } else if (v == "历史收藏记录") {
        this.searchData.delFlag = 1;
      }
      // this.data = []
      this.searchData.type = 0;
      this.takeCollection(1);
    },
    takeCollection(flag) {
      if (flag == 1) {
        // page参数恢复默认
        this.searchData.pageNumber = 1;
      }
      this.data = [];
      getCollection(this.searchData).then((res) => {
        if (res.success) {
          res.result.content.forEach((item, index) => {
            let obj = {};
            obj.type = this.typeArr[parseInt(item.type) - 1];
            obj.date = item.createTime ? item.createTime.split(" ")[0] : "";
            obj.id = item.id;
            obj.title = item.name;
            obj.url = item.url;
            obj.index = index;
            obj.publishDate = item.publishDate;
            this.data.push(obj);
          });
          this.total = res.result.totalElements;
        }
      });
    },
    handleGetPreviousCollection() {
      this.importData = [];
      this.importLoading = true;
      getPreviousCollection(this.importForm).then((res) => {
        if (res.success) {
          res.result.content.forEach((item, index) => {
            let obj = {};
            obj.type = this.typeArr[parseInt(item.type) - 1];
            obj.date = item.createTime ? item.createTime.split(" ")[0] : "";
            obj.id = item.id;
            obj.title = item.name;
            obj.url = item.url;
            obj.index = index;
            obj._disabled = item.isExist;
            obj.publishDate = item.publishDate ? item.publishDate.split(" ")[0] : "";
            this.importData.push(obj);
          });
          this.importTotal = res.result.totalElements;
        }
        this.importLoading = false;
      });
    },
    handleImport() {
      this.handleImportLoading = true;
      importPreviousCollection({ ids: this.selectIdList }).then((res) => {
        if (res.success) {
          this.$Message.success("导入成功");
          this.handleGetPreviousCollection();
          this.selectIdList = [];
          this.changeMenu("我收藏的项目");
        }
        this.handleImportLoading = false;
      });
    },
    handleImportAll() {
      this.$Modal.confirm({
        title: "提醒",
        content:
          "<p>确定将该企业内" +
          this.importTotal +
          "条收藏全部导入该账号吗？</p>",
        onOk: () => {
          this.handleImportLoading = true;
          importAllCollection({ ids: this.selectIdList }).then((res) => {
            if (res.success) {
              this.$Message.success("导入成功");
              this.handleGetPreviousCollection();
              this.selectIdList = [];
              this.changeMenu("我收藏的项目");
            }
            this.handleImportLoading = false;
          });
        },
        onCancel: () => {
        },
      });
    },
  },
  mounted() {},
  activated() {
    this.takeCollection(1);
  },
  computed: {
    userId(){
      return this.$store.state.user.userInfo.id;
    }
  }
};
</script>

<style lang="less">
.down_btn {
  .ivu-icon:before {
    color: #2d8cf0;
  }
}

.c-drawer .ivu-drawer-body {
  position: static;
  padding-bottom: 60px;
}

.ivu-table-cell {
  padding-left: 8px;
  padding-right: 8px;
}

.demo-drawer-footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: 1px solid #e8e8e8;
  padding: 10px 16px;
  text-align: right;
  background: #fff;
  z-index: 10;
}

.collect {
  // min-width: 1200px;
  .own-wrap {
    display: flex;

    .title {
      font-size: 20px;
      color: rgba(0, 0, 0, 0.85);
      line-height: 28px;
      font-weight: 500;
      margin-bottom: 12px;
    }

    .top_action {
      margin-bottom: 20px;
      // display: flex;
      // justify-content: space-between;
      overflow: hidden;

      .search {
        width: 400px;
        float: left;
      }

      button {
        float: right;
        margin-left: 20px;
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
</style>