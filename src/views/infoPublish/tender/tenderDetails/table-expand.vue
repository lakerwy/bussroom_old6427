<template>
  <div class="table-expand">
    <Table ref="selection" :columns="columns" :data="table(data)" border>
      <template slot-scope="{ row }" slot="bidder">
        <a
          href="javascript:;"
          @click="bidderListModal = true"
          class="project-name"
        >
          {{ row.bidder }}
        </a>
      </template>
      <!-- <template slot-scope="{ row }" slot="start">
        <Dropdown placement="bottom-start">
          <a href="javascript:void(0)">
            投标标段
          </a>
          <DropdownMenu slot="list">
            <DropdownItem v-for="item in row.periodList" :key='item'>{{item}}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </template> -->
      <template slot-scope="{ row }" slot="action">
        <div v-show="row.action === 0">
          <Button
            size="small"
            type="info"
            ghost
            style="margin-right: 10px"
            @click="open(1)"
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
        <div v-show="row.action === 3">
          <Button
            size="small"
            type="info"
            ghost
            style="margin-right: 10px"
            @click="open(2)"
            >报名确认</Button
          >
        </div>
      </template>
    </Table>
    <Page
      :total="totalCount"
      :page-size="pageSize"
      size="small"
      show-total
      @on-change="changeData"
    />
    <Modal v-model="modal" width="500">
      <p slot="header" style="text-align: center; font-size: 16px">
        <span style="font-weight: bold">通知投标人补充资料</span>
      </p>
      <div style="text-align: left">
        <p>本通知可提醒投标人补充基本信息，节省您发布中标候选人公示的时间。</p>
        <p style="font-weight: bold">通知示例：</p>
        <p>***招标项目报名申请成功，可继续补充贵公司投标资料。采购与招标网</p>
      </div>
      <div slot="footer" style="text-align: center">
        <Button type="primary" @click="close(1)">马上通知</Button>
        <Button @click="close(0)">不发了</Button>
      </div>
    </Modal>
    <Modal v-model="bmodal" width="500">
      <p>确认成功，通知信息已送出，确认还请联系投标相关人员！</p>
      <div slot="footer" style="text-align: center">
        <Button @click="bclose(0)">关闭</Button>
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
        <Button @click="bidderListModal = false" type="primary">确认报名</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: "table-expand",
  data() {
    return {
      bidderListModal: false,
      modal: false,
      bmodal: false,
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
    pageSize: {
      type: Number,
      default: () => 0,
    },
    totalCount: {
      type: Number,
      default: () => 0,
    },
  },
  methods: {
    openModel() {
      this.modal = true;
    },
    open(num) {
      this.bmodal = true;
      if (num === 1) {
        console.log("下载文件");
      } else {
        console.log("报名通知");
      }
    },
    close(num) {
      this.modal = false;
      if (num === 1) {
        this.axios.post("/cebmeta.zbgg/baoming").then((res) => {
          if (res.status === 200) {
            console.log(res.data);
          }
        });
      }
    },
    bclose() {
      this.bmodal = false;
    },
    routerEnv(name) {
      this.$router.push({
        name,
      });
    },
    changeData(index) {
      const _start = (index - 1) * this.pageSize;
      this.start = _start;
      const _end = index * this.pageSize;
      this.end = _end;
    },
    table(data) {
      this.sData = data;
      const da = data.slice(this.start, this.end);
      return da;
    },
  },
};
</script>

<style lang="less" scoped>
.table-expand {
  .ivu-table-wrapper {
    margin-top: 40px;
    overflow: inherit;
  }
}
.bidderList {
  td {
    height: 46px;
    line-height: 46px;
    text-align: center;
    p{
      line-height: 30px;
    }
  }
}
</style>
