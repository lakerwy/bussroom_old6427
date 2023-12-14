<template>
  <card class="announcementDetails2">
    <h1>投标管理</h1>
    <Table border ref="selection" :columns="columns" :data="data">
      <template slot-scope="{ row }" slot="name">
        <a @click="showDialog(row)">{{ row.name }}</a>
      </template>
      <template slot-scope="{ row }" slot="start">
        <Dropdown placement="bottom-start">
          <a href="javascript:void(0)"> 投标标段 </a>
          <DropdownMenu slot="list">
            <DropdownItem v-for="item in row.periodList" :key="item"
              >{{ item }}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </template>
      <template slot-scope="{ row }" slot="action">
        <div v-show="row.action === 0">
          <Button size="small" type="info" ghost style="margin-right: 10px"
            >下载文件确认</Button
          >
        </div>
        <div v-show="row.action === 1">已确认</div>
        <div v-show="row.action === 2">
          已确认
          <span class="volume" @click="openModel"
            ><Icon type="md-volume-up" size="16" />通知补充资料</span
          >
        </div>
      </template>
    </Table>
    <Modal v-model="modal" ok-text="马上通知" cancel-text="不发了" width="500">
      <p slot="header" style="text-align: center; font-size: 16px">
        <span>通知投标人补充资料</span>
      </p>
      <div style="text-align: left">
        <p>
          After this task is deleted, the downstream 10 tasks will not be
          implemented.
        </p>
        <p>Will you delete it?</p>
      </div>
      <div slot="footer" style="text-align: center">
        <Button type="primary" @click="close(1)">马上通知</Button>
        <Button @click="close(1)">不发了</Button>
      </div>
    </Modal>
    <Modal v-model="bidderListModal" title="投标报名表" width="800">
      <table
        table
        border="1"
        cellspacing="0"
        class="bidderList"
        bordercolor="#E7F3FF"
      >
        <tr>
          <td style="width: 220px">投标项目</td>
          <td style="width: 680px">
            钒钛高强冷轧板项目空调及通风排污系统成套设备及服务招标公告
          </td>
        </tr>
        <tr>
          <td>投标标段</td>
          <td>标段（包）001：体育训练基地腾飞馆中央空调自控系统</td>
        </tr>
        <tr>
          <td>投标单位名称</td>
          <td>北京某某系统成套设备有限公司</td>
        </tr>
        <tr>
          <td>投标单位地址</td>
          <td>北京大兴区某某路某某大厦某层某号</td>
        </tr>
        <tr>
          <td>投标联系人</td>
          <td>王某某</td>
        </tr>
        <tr>
          <td>手机号</td>
          <td>18909890****</td>
        </tr>
        <tr>
          <td>电子邮件</td>
          <td>*****@**.com</td>
        </tr>
        <tr>
          <td colspan="2">
            <p>投标承诺</p>
            <p>
              在阅读和理解了本次招标公告后，认为我单位符合招标公告对投标人的基本要求，在此特向贵方提出参与招标编号的上述申请投标包件号的投标报名，特此申请。本投标单位有关信息如上。
            </p>
            <p>
              声明：招标文件为我公司自愿购买，如我公司资格条件不符合本项目投标人资格要求，相关责任由我公司自行承担。
            </p>
          </td>
        </tr>
      </table>
      <div slot="footer" style="text-align: center">
        <Button @click="bidderListModal = false">驳回</Button>
        <Button @click="bidderListModal = false" type="primary"
          >确认报名</Button
        >
      </div>
    </Modal>
  </card>
</template>

<script>
export default {
  name: "tenderDetails2",
  data() {
    return {
      modal: false,
      bidderListModal: false,
      columns: [
        {
          title: "序号",
          width: 60,
          key: "no",
          align: "center",
        },
        {
          title: "投标单位名称",
          key: "name",
          slot: "name",
          minWidth: 120,
        },
        /* {
          title: ' ',
          width: 80,
          slot: 'start',
          align: 'center',
        }, */
        {
          title: "报名时间",
          width: 150,
          key: "time",
        },
        {
          title: "联系人",
          width: 80,
          key: "contact",
          align: "center",
        },
        {
          title: "手机号",
          width: 130,
          key: "phoneNo",
          align: "center",
        },
        /*
        {
          title: '邮件',
          width: 120,
          key: 'email',
          align: 'center',
        },
        */
        {
          title: "文件下载/报名确认",
          width: 160,
          slot: "action",
          align: "left",
        },
      ],
      data: [
        {
          no: 1,
          name: "唐县卫生和计划生育局",
          periodList: [
            "标段（包）001：风机安装Ⅱ标段",
            "标段（包）002：风机安装Ⅱ标段",
            "标段（包）003：风机安装Ⅱ标段",
            "标段（包）004：风机安装Ⅱ标段",
          ],
          time: "2018-10-23",
          contact: "王先生",
          phoneNo: "1234567890234",
          email: "*****@**.com",
          action: 0,
        },
        {
          no: 2,
          name: "濮阳豫能发电有限责任公司",
          periodList: [
            "标段（包）001：风机安装Ⅱ标段",
            "标段（包）002：风机安装Ⅱ标段",
            "标段（包）003：风机安装Ⅱ标段",
            "标段（包）004：风机安装Ⅱ标段",
          ],
          time: "2018-10-23",
          contact: "王先生",
          phoneNo: "1234567890234",
          email: "*****@**.com",
          action: 1,
        },
        {
          no: 3,
          name: "宁夏英力特化工股份有限公司",
          periodList: [
            "标段（包）001：风机安装Ⅱ标段",
            "标段（包）002：风机安装Ⅱ标段",
            "标段（包）003：风机安装Ⅱ标段",
            "标段（包）004：风机安装Ⅱ标段",
          ],
          time: "2018-10-23",
          contact: "王先生",
          phoneNo: "1234567890234",
          email: "*****@**.com",
          action: 2,
        },
      ],
      titleModal: false,
      dialogData: [],
      personData: [],
    };
  },
  props: {},
  computed: {
    getData() {
      return this.$store.state.announce.detail2;
    },
  },
  created() {
    this.$store.dispatch("getDetail2");
  },
  methods: {
    openModel() {
      this.modal = true;
    },
    close(num) {
      console.log(num);
      this.modal = false;
    },
    showDialog(data) {
      this.bidderListModal = true;
      const dialogData = {
        project: "钒钛高强冷轧板项目空调及通风排污系统",
        biderLabel: "标段（包）001:体育训练基地腾飞馆中央",
        company: "黑龙江哈尔滨工厂",
        address: "黑龙江哈尔滨市阳光花园１栋",
      };
      this.personData = data;
      this.dialogData = dialogData;
    },
    sure() {
      console.log(1234);
    },
  },
};
</script>

<style lang="less" scoped>
.announcementDetails2 {
  h1 {
    font-size: 20px;
    position: relative;
    padding-left: 15px;
    margin-bottom: 20px;
    span {
      color: #666;
      position: absolute;
      right: 0;
      bottom: 0;
      font-size: 14px;
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
    height: auto;
    background-color: #1d9ed5;
  }
  .volume {
    color: #2db7f5;
    cursor: pointer;
  }
}

.ivu-modal .ivu-modal-header {
  border: none;
}
.ivu-modal .ivu-modal-header-inner {
  font-size: 16px;
  font-weight: 100;
  text-align: center;
}
.ivu-modal .ivu-modal-footer {
  border: none;
  text-align: center;
}
.ivu-modal .ivu-table-wrapper {
  margin-top: 40px;
  overflow: inherit;
}
.bidderList {
  td {
    height: 46px;
    line-height: 46px;
    text-align: center;
    p {
      line-height: 30px;
    }
  }
}
</style>
