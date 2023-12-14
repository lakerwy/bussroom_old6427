<template>
  <div class="projectDetails3">
    <h1>投标管理</h1>
    <Table ref="selection" :columns="columns" :data="data">
      <template slot-scope="{ row }" slot="time">
        <Tag color="green" v-show="row.state === 1">已发布</Tag>
        <Tag color="red" v-show="row.state === 2">未发布</Tag>
        <Tag color="blue" v-show="row.state === 3">未提交</Tag>
        <p>{{ row.time }}</p>
      </template>
      <!-- 留一份保底
      <template slot-scope="{ row }" slot="start">
        <Dropdown placement="bottom-start">
          <a href="javascript:void(0)">
            标段详情
          </a>
          <DropdownMenu slot="list">
            <DropdownItem v-for="item in row.periodList" :key='item'>{{item}}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </template>
      -->
      <template slot-scope="{ row }" slot="action">
        <a v-show="row.state === 1" href="javascript:void(0)" @click="share">
          <Icon type="md-share" />
          分享
        </a>
      </template>
      <template slot-scope="{ row }" slot="manage">
        <div v-show=" row.manage === 0 ">
          <a style="color: gray">投标管理</a>
        </div>
        <div v-show=" row.manage !== 0 ">
          <a>投标管理
            <span style="color: red">({{row.manage}})
          </span></a>
        </div>
      </template>
    </Table>
    <commonShare :shareFlag.sync="shareFlag"></commonShare>
    <!--为eslint-->
    <expandRow style="display: none"></expandRow>
    <!--为eslint-->
  </div>
</template>

<script>
import expandRow from './table-expand.vue';
import commonShare from '../../../my-components/xboot/common-share';

export default {
  name: 'projectDetails3',
  components: {
    expandRow,
    commonShare,
  },
  data() {
    return {
      shareFlag: false,
      columns: [
        {
          title: '招标公告名称',
          key: 'name',
        },
        {
          title: '当前状态/建立时间',
          width: 150,
          slot: 'time',
        },
        {
          title: '操作',
          width: 180,
          slot: 'action',
          align: 'center',
        },
        {
          title: ' ',
          slot: 'manage',
          width: 85,
          align: 'center',
        },
        {
          type: 'expand',
          width: 20,
          render: h => h(expandRow, {
            props: {
              data: this.data1,
              columns: this.columns1,
              totalCount: this.totalCount,
              pageSize: this.pageSize,
            },
          }),
        },
      ],
      data: [
        {
          name: '中国铁路成都局集团有限公司成都公司成',
          time: '2018-10-23 15:34:12',
          state: 1,
          manage: 0,
          _expanded: false,
        },
        {
          name: '中国湖北高铁建设服务中心',
          time: '2018-10-23 15:34:12',
          state: 2,
          manage: 1,
          _expanded: false,
        },
      ],
      columns1: [
        {
          title: '序号',
          width: 60,
          key: 'no',
          align: 'center',
        },
        {
          title: '投标人',
          width: 200,
          key: 'name',
        },
        {
          title: ' ',
          width: 80,
          slot: 'start',
          align: 'center',
        },
        {
          title: '投标报名时间',
          width: 150,
          key: 'time',
        },
        {
          title: '投标联系人',
          width: 100,
          key: 'contact',
          align: 'center',
        },
        {
          title: '手机号',
          width: 130,
          key: 'phoneNo',
          align: 'center',
        },
        {
          title: '邮件',
          width: 120,
          key: 'email',
          align: 'center',
        },
        {
          title: '导出报名表',
          width: 180,
          slot: 'action',
          align: 'left',
        },
      ],
      data1: [
        {
          no: 1,
          name: '中国铁路成都局集团有限公司成都',
          periodList: [
            '标段（包）001：风机安装Ⅱ标段',
            '标段（包）002：风机安装Ⅱ标段',
            '标段（包）003：风机安装Ⅱ标段',
            '标段（包）004：风机安装Ⅱ标段',
          ],
          time: '2018-10-23 15:34:12',
          contact: '王先生',
          phoneNo: '1234567890234',
          email: '*****@**.com',
          action: 2,
        },
        {
          no: 2,
          name: '中国高铁有限公司',
          periodList: [
            '标段（包）001：风机安装Ⅱ标段',
          ],
          time: '2018-10-21 15:34:12',
          contact: '刘先生',
          phoneNo: '1234567890222',
          email: '*****@**.com',
          action: 1,
        },
        {
          no: 3,
          name: '湖北建成有限公司',
          periodList: [
            '标段（包）001：风机安装Ⅱ标段',
          ],
          time: '2018-10-21 15:34:12',
          contact: '陶先生',
          phoneNo: '1234567220222',
          email: '*****@**.com',
          action: 1,
        },
        {
          no: 4,
          name: '湖北例程有限公司',
          periodList: [
            '标段（包）001：风机安装Ⅱ标段',
          ],
          time: '2018-10-21 15:34:12',
          contact: '马先生',
          phoneNo: '1234567890222',
          email: '*****@**.com',
          action: 1,
        },
        {
          no: 5,
          name: '中国波卡尔有限公司',
          periodList: [
            '标段（包）001：风机安装Ⅱ标段',
          ],
          time: '2018-10-21 15:34:12',
          contact: '李先生',
          phoneNo: '1234567890222',
          email: '*****@**.com',
          action: 1,
        },
        {
          no: 6,
          name: '中国隧道有限公司',
          periodList: [
            '标段（包）001：风机安装Ⅱ标段',
          ],
          time: '2018-10-21 15:34:12',
          contact: '赵先生',
          phoneNo: '1211117890222',
          email: '*****@**.com',
          action: 1,
        },

      ],
      totalCount: 6,
      pageSize: 5,
    };
  },
  props: {
  },
  computed: {
    getData() {
      return this.$store.state.project.detail3;
    },
  },
  created() {
    // this.$store.dispatch('getDetail3'); // 获取数据
  },
  methods: {
    share() {
      this.shareFlag = true;
    }
  },
};
</script>

<style lang="less" scoped>
/deep/ div.ivu-table {
  font-size: 12px !important;
}
.projectDetails3{
  .ivu-table{
    font-size: 12px;
  }
  h1{
    font-size :20px;
    position: relative;
    padding-left: 15px;
    margin-bottom: 20px;
    span{
      color: #666;
      position: absolute;
      right: 0;
      bottom: 0;
      font-size: 14px;
      cursor: pointer;
    }
  }
  h1:before {
    content :"";
    display :block;
    position: absolute;
    left: 0;
    bottom: 4px;
    top: 4px;
    width: 4px;
    height:auto;
    background-color: #1d9ed5;
  }
  .ivu-table-wrapper {
    margin-top: 40px;
    overflow: inherit;
  }
}
</style>
