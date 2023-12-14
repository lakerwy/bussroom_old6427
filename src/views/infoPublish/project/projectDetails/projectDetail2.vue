<template>
  <div class="projectDetails2">
    <h1>关联公告</h1>
    <Table border ref="selection" :columns="columns" :data="data">
      <template slot-scope="{ row }" slot="name">
        <a href="javascript:void(0)"
           @click="routerEnv('tenderDetail')"
           class="project-name tsty">
          {{ row.name }}
        </a>
        <div class="infoupdate">变更{{row.update}}</div>
      </template>
      <template slot-scope="{ row }" slot="time">
        <Tag color="green" v-show="row.state === 1">已发布</Tag>
        <Tag color="red" v-show="row.state === 2">未发布</Tag>
        <Tag color="blue" v-show="row.state === 3">未提交</Tag>
        <p>{{ row.time }}</p>
      </template>
      <template slot-scope="{ row }" slot="action">
        <a v-show="row.state === 1" @click="share">
          <Icon type="md-share" />
          分享
        </a>
        <a v-show="row.state === 3" @click="routerEnv('tenderStep')">
          <Icon type="md-create" />
          编辑
        </a>
      </template>
    </Table>
    <commonShare :shareFlag.sync="shareFlag"></commonShare>
  </div>
</template>

<script>
import commonShare from '../../../my-components/xboot/common-share';

export default {
  name: 'projectDetails2',
  components: {
    commonShare,
  },
  data() {
    return {
      columns: [
        {
          title: '公告名称',
          slot: 'name',
        },
        {
          title: '公告状态/状态时间',
          width: 150,
          slot: 'time',
        },
        {
          title: '公告类型',
          width: 130,
          key: 'type',
          align: 'center',
        },
        {
          title: '操作',
          width: 80,
          slot: 'action',
          align: 'center',
        },
      ],
      data: [
        {
          name: '中国铁路成都局集团有限公司成都1',
          periodList: [
            '标段（包）001：风机安装Ⅱ标段',
            '标段（包）002：风机安装Ⅱ标段',
            '标段（包）003：风机安装Ⅱ标段',
            '标段（包）004：风机安装Ⅱ标段',
          ],
          update: 1,
          time: '2018-10-23 15:34:12',
          state: 1,
          type: '招标公告',
        },
        {
          name: '中国铁路成都局集团有限公司成都2',
          periodList: [
            '标段（包）001：风机安装Ⅱ标段',
            '标段（包）002：风机安装Ⅱ标段',
            '标段（包）003：风机安装Ⅱ标段',
            '标段（包）004：风机安装Ⅱ标段',
          ],
          update: 2,
          time: '2018-10-23 15:34:12',
          state: 2,
          type: '中标候选人公示',
        },
        {
          name: '中国铁路成都局集团有限公司成都3',
          periodList: [
            '标段（包）001：风机安装Ⅱ标段',
            '标段（包）002：风机安装Ⅱ标段',
            '标段（包）003：风机安装Ⅱ标段',
            '标段（包）004：风机安装Ⅱ标段',
          ],
          update: 3,
          time: '2018-10-23 15:34:12',
          state: 3,
          type: '中标结果公告',
        },
      ],
      shareFlag: false,
    };
  },
  props: {
  },
  computed: {
    getData() {
      return this.$store.state.project.detail2;
    },
  },
  created() {
    // this.$store.dispatch('getDetail2');
  },
  methods: {
    routerEnv(name) {
      this.$router.push({
        name
      });
    },
    share() {
      this.shareFlag = true;
    },
  },
};
</script>

<style lang="less" scoped>
/deep/ div.ivu-table {
  font-size: 12px !important;
}
.projectDetails2{
  h1{
    font-size :20px;
    position :relative;
    padding-left: 15px;
    margin-bottom: 20px;
    span{
      color: #666;
      position :absolute;
      right: 0;
      bottom: 0;
      font-size :14px;
      cursor: pointer;
    }
  }
  h1:before {
    content: "";
    display: block;
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
  .tsty{
    width:500px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
  }
  .infoupdate{
    width: 45px;
    background-color: rgba(82, 164, 248, 1);
    color: white;
    display: inline-block;
    text-align :center;
    border-radius :10px;
    vertical-align: top;
  }
}
</style>
