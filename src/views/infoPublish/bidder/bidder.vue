<template>
  <div class="bidder">
    <Card>
      <Row :gutter="16">
        <Col span="6">
          <Form
            ref="searchForm"
            :model="searchForm"
            inline
            label-position="right"
            style="width: 100%"
          >
            <Form-item prop="keyword">
              <Input
                search
                enter-button
                v-model="searchForm.keyword"
                placeholder="项目名称"
                @on-search="handleSearch"
              />
            </Form-item>
          </Form>
        </Col>
      </Row>
      <Row>
        <Table
          :loading="loading"
          border
          ref="selection"
          :columns="columns"
          :data="data"
        >
          <template slot-scope="{ row }" slot="name">
            <a
              href="javascript:;"
              @click="routerEnv('bidderDetail')"
              class="project-name"
            >
              {{ row.name }}
            </a>
          </template>
          <template slot-scope="{ row }" slot="tender">
            <Icon type="md-hand" />{{ row.tender }}
          </template>
          <template slot-scope="{ row }" slot="winning">
            <Icon type="md-hammer" />{{ row.winning }}
          </template>
          <template slot-scope="{ row }" slot="note">
            <span v-show="row.state !== 1 && row.state !== 3">{{
              row.note
            }}</span>
            <a v-show="!row.note" @click="marksModal = true">添加备注</a>
            <!-- <a
              v-show="row.state === 2"
              @click="edit(row)"
              style="margin-left: 10px"
              >修改</a
            >
            <Input
              v-model="row.note"
              v-show="row.state === 1 || row.state === 3"
              style="width: 150px; margin-left: 20px"
            />
            <Button
              type="info"
              v-show="row.state === 1 || row.state === 3"
              style="margin-right: 10px; margin-left: 10px"
              @click="save(row)"
              >保存</Button
            >
            <Button
              type="info"
              v-show="row.state === 1 || row.state === 3"
              @click="cancle(row)"
              >取消</Button
            > -->
          </template>
        </Table>
      </Row>

      <Row type="flex" justify="end" class="page" style="margin-top: 10px">
        <Page
          :total="totalCount"
          :page-size="searchForm.pageSize"
          size="small"
          show-total
          @on-change="changepage"
        />
      </Row>

      <Modal title="添加备注" v-model="marksModal" :closable="false">
        <Form ref="form" :model="form" :label-width="80">
          <FormItem
            label="备注"
            :rules="{
              required: true,
              message: '备注不能为空！',
              trigger: 'blur',
            }"
            prop='marks'
          >
            <Input type="text" v-model="form.marks"></Input>
          </FormItem>
        </Form>
        <div slot="footer">
          <Button @click="handleReset('form')" style="margin-left: 8px"
            >取消</Button
          >
          <Button type="primary" @click="handleSubmit('form')">提交</Button>
        </div>
      </Modal>
    </Card>
  </div>
</template>

<script>
export default {
  name: "bidder",
  data() {
    return {
      marksModal: false,
      form: {
        marks: "",
      },
      searchForm: {
        keyword: "",
        pageSize: 10,
        pageNumber: 1,
      },
      loading: false,
      index: 7,
      pageSize: 5,
      totalCount: 6,
      columns: [
        {
          title: "参与投标公司",
          slot: "name",
          minWidth: 200,
        },
        {
          title: "加入渠道",
          width: 150,
          key: "channel",
        },
        {
          title: "加入时间",
          width: 150,
          key: "time",
        },
        {
          title: "投标次数",
          width: 100,
          slot: "tender",
          align: "center",
        },
        {
          title: "中标次数",
          width: 100,
          slot: "winning",
          align: "center",
        },
        {
          title: "操作",
          width: 200,
          slot: "note",
          align: "center",
        },
      ],
      data: [
        {
          name: "宁夏英力特化工股英力特化工份有限公司",
          channel: "网站报名",
          time: "2018-10-23 15:34:12",
          tender: 5,
          winning: 4,
          state: 0,
          note: "",
        },
        {
          name: "广西英力特化工股英力特化工份有限公司",
          channel: "网站报名",
          time: "2018-10-23 15:34:12",
          tender: 5,
          winning: 4,
          state: 0,
          note: "",
        },
        {
          name: "厦门英力特化工股英力特化工份有限公司",
          channel: "网站报名",
          time: "2018-10-23 15:34:12",
          tender: 5,
          winning: 4,
          state: 0,
          note: "",
        },
        {
          name: "宁夏英力特化工股英力特化工份有限公司1",
          channel: "网站报名",
          time: "2018-10-23 15:34:12",
          tender: 5,
          winning: 4,
          state: 0,
          note: "",
        },
        {
          name: "广西英力特化工股英力特化工份有限公司2",
          channel: "网站报名",
          time: "2018-10-23 15:34:12",
          tender: 5,
          winning: 4,
          state: 0,
          note: "",
        },
        {
          name: "厦门英力特化工股英力特化工份有限公司3",
          channel: "网站报名",
          time: "2018-10-23 15:34:12",
          tender: 5,
          winning: 4,
          state: 0,
          note: "",
        },
      ],
      historyData: [],
    };
  },

  methods: {
    handleSubmit(name) {},
    handleReset(name) {
      this.$refs[name].resetFields();
      this.marksModal = false;
    },
    searchTab() {
      // 查询关键字
      const info = {
        keyword: this.keywords,
      };
      // this.$store.dispatch('getASearchData', info);
    },
    saveData() {
      this.historyData = this.data;
      if (this.data.length < this.pageSize) {
        this.data = this.historyData;
      } else {
        this.data = this.historyData.slice(0, this.pageSize);
      }
    },
    save(row) {
      if (row.note === "") {
        row.state = 0;
      } else {
        row.state = 2;
      }
    },
    edit(row) {
      row.state = 3;
    },
    routerEnv(name) {
      this.$router.push({
        name,
      });
    },
    changepage(index) {
      const _start = (index - 1) * this.pageSize;
      const _end = index * this.pageSize;
      this.data = this.historyData.slice(_start, _end);
    },
    showInput(row) {
      row.state = 1;
    },
    cancle(row) {
      row.state = 0;
    },
  },
};
</script>

<style lang="less" scoped>
/deep/ div.ivu-table {
  font-size: 12px !important;
}
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
</style>
