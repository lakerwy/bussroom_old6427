<template>
  <div class="table-expand">
    <Table border ref="selection" :columns="columns" :data="table(data)">
      <template slot-scope="{ row }" slot="start">
        <Dropdown placement="bottom-start">
          <a href="javascript:void(0)">
            投标标段
          </a>
          <DropdownMenu slot="list">
            <DropdownItem v-for="item in row.periodList" :key='item'>{{item}}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </template>
      <template slot-scope="{ row }" slot="action">
        <div v-show="row.action === 0">
          <Button size="small" type="info" ghost style="margin-right: 10px;">下载文件确认</Button>
        </div>
        <div v-show="row.action === 1">
          已确认
        </div>
        <div v-show="row.action === 2">
          已确认
          <span class="volume" @click="openModel"><Icon type="md-volume-up" size="16"/>通知补充资料</span>
        </div>
      </template>
    </Table>
    <Page :total="totalCount" :page-size="pageSize" size="small"
          show-total @on-change="changeData"/>
    <Modal
      v-model="modal"
      ok-text="马上通知"
      cancel-text="不发了"
      width="500">
      <p slot="header" style="text-align:center;font-size: 16px;">
        <span>通知投标人补充资料</span>
      </p>
      <div style="text-align:left">
        <p>After this task is deleted, the downstream 10 tasks will not be implemented.</p>
        <p>Will you delete it?</p>
      </div>
      <div slot="footer" style="text-align:center">
        <Button type="primary" @click="close(1)">马上通知</Button>
        <Button @click="close(1)">不发了</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'table-expand',
  data() {
    return {
      modal: false,
      sData: [],
      start: 0,
      end: 5,
    };
  },
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
    totalCount: {
      type: Number,
      default: () => 0,
    },
    pageSize: {
      type: Number,
      default: () => 0,
    },
  },
  methods: {
    openModel() {
      this.modal = true;
    },
    close(num) {
      console.log(num);
      this.modal = false;
    },
    table(data) {
      this.sData = data;
      const da = data.slice(this.start, this.end);
      return da;
    },
    changeData(index) {
      const _start = (index - 1) * this.pageSize;
      this.start = _start;
      const _end = index * this.pageSize;
      this.end = _end;
    },
  },
};
</script>

<style lang="less" scoped>
/deep/ div.ivu-table {
  font-size: 12px !important;
}
.table-expand {
  .ivu-table-wrapper {
    margin-top: 40px;
    overflow: inherit;
  }
  .volume{
    margin-left: 10px;
    cursor: pointer;
    color: #1d9ed5;
    i{
      margin-right: 2px;
    }
  }
}
</style>
