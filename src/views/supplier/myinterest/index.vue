<template>
  <div id="myinteres">
    <Form
      :model="formItem"
      :label-width="80"
      ref="form"
      class="form"
      :rules="ruleValidate"
    >
      <Form-item label="公司名称" prop="companyName">
        <Input v-model="formItem.companyName" placeholder="请输入"></Input>
      </Form-item>
      <Form-item label="关注时间" prop="startDate" class="time">
        <Date-picker
          :value="formItem.startDate"
          @on-change="changeStartData"
          type="date"
          :editable="false"
          placement="bottom-end"
          placeholder="选择日期"
          style="width: 13.7vw"
        ></Date-picker>
        <span class="line">-</span>
        <Date-picker
          :value="formItem.endDate"
          @on-change="changeEndData"
          :options="enterEndTimeOption"
          type="date"
          :editable="false"
          placement="bottom-end"
          placeholder="选择日期"
          style="width: 13.7vw"
        ></Date-picker>
      </Form-item>
      <Form-item label="">
        <Button type="primary" icon="ios-search" @click="formSearch"
          >查询</Button
        >
        <Button icon="md-refresh" class="ivu-form-refresh" @click="formReset"
          >重置</Button
        >
      </Form-item>
    </Form>

    <div class="clue-tip">
      <p>
        共搜索到<span class="tip-num">{{ tipNum }}</span
        >条数据
      </p>
    </div>

    <div class="clue-table">
      <Table border :columns="clueColumns" :data="clueData">
        <template slot-scope="{ row }" slot="action">
          <Button @click="isFocus(row)" class="t-btn">{{
            row.isDeleted == 1 ? "取消关注" : "关注"
          }}</Button>
          <Button @click="interestView(row)">查看</Button>
        </template>
      </Table>
      <Page
        :current="formItem.pageNumber"
        :page-size="formItem.pageSize"
        :total="total"
        show-elevator
        @on-change="pageChange"
        class="t-page"
      ></Page>
    </div>
  </div>
</template>

<script>
import {
  supplierInterestList,
  supplierInterestFocus,
  supplierInterestUnfocus
} from "@/api/index";
export default {
  data() {
    const validateName = (rule, value, callback) => {
      let reg = /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/
      if (!value) {
        callback();
      }
      else if (!reg.test(value)) {
        callback(new Error('关键词包含特殊字符，请酌情删减'));
      } else if (value.length > 100) {
        callback(new Error('关键词过多，请酌情删减'));
      } else {
        callback();
      }
    }
    // 发布时间验证
    const validDate = (rule, value, callback) => {
      if (!this.formItem.startDate && !this.formItem.endDate) {
        callback();
      }
      else if (!this.formItem.startDate && this.formItem.endDate) {
        callback(new Error('请选择开始时间'));
      } else if (this.formItem.startDate && !this.formItem.endDate) {
        callback(new Error('请选择结束时间'));
      } else {
        callback();
      }
    }
    return {
      formItem: {
        companyName: '',
        startDate: '',
        endDate: '',
        pageNumber: 1,
        pageSize: 10,
      },
      total: 0,
      tipNum: 0,  //线索条数
      //报名结束时间禁用规则
      enterEndTimeOption: {
        disabledDate: (date) => {
          const now = Date.now();
          // const three = 3 * 24 * 60 * 60 * 1000;
          // const threeDays = now + three;
          return date.getTime() < new Date(this.formItem.startDate) - 1000 * 60 * 60 * 24 && date.getTime()
        }
      },

      ruleValidate: {
        startDate: [
          { required: false, validator: validDate, trigger: 'change' }
        ],
        companyName: [
          { required: false, validator: validateName, trigger: 'blur' }
        ],

      },
      clueColumns: [
        {
          title: '关注类型',
          key: 'dataType',
          render: (h, params) => {
            return h('span', {}, params.row.dataType == 2 ? '代理机构' : '')
          }
        },
        {
          title: '公司名称',
          key: 'companyName',
          minWidth: 160
        },
        {
          title: '关注时间',
          key: 'lastUpdateTime'
        },
        {
          title: '状态',
          key: 'isDeleted',
          render: (h, params) => {
            return h('span', {}, params.row.isDeleted == 1 ? '已关注' : '已取消')
          }
        },
        {
          title: "操作",
          slot: "action",
          align: "center",
          fixed: "right",
          minWidth: 160
        }
      ],
      clueData: [
        {
          "id": "1518779993460736",
          "companyName": "七月十五星期五",
          "dataType": 2,
          "remark": null,
          "lastUpdateTime": "2022-08-05 00:34:31",
          "isDeleted": 1,  //1代表已关注
          "loginId": 1300572259819520,
          "yuanUserId": 1291015782215680,
          "settleId": 1547745551439626200
        }
      ],
      clueForm: {
        page: 1,
        size: 10,
        companyName: '',
        startDate: '',
        endDate: ''
      }
    };
  },
  methods: {

    changeStartData(val) {
      this.formItem.startDate = val
      this.formItem.endDate = ''
    },

    changeEndData(val) {
      this.formItem.endDate = val
    },

    formSearch() {   //搜索
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.getInterestList();
        } else {
        }
      })

    },
    formReset() {   //重置
      this.formItem.companyName = '';
      this.formItem.startDate = '';
      this.formItem.endDate = '';
      this.formItem.pageNumber = 1
      this.getInterestList()
    },
    isFocus(row) {
      if (row.isDeleted == 1) { //已关注
        supplierInterestUnfocus({
          id: row.settleId
        }).then(res => {
          if (res.success) {
            this.$Message.success("取消关注成功");
            row.isDeleted = row.isDeleted == 1 ? 0 : 1
          } else {
            this.$Message.warning("取消关注失败");
          }
        })
      } else { //未关注
        supplierInterestFocus({
          id: row.settleId
        }).then(res => {
          if (res.success) {
            this.$Message.success("关注成功");
            row.isDeleted = row.isDeleted == 1 ? 0 : 1
          } else {
            this.$Message.warning("关注失败");
          }
        })
      }

    },
    interestView(row) {   // 查看
      window.open('https://www.chinabidding.cn/public/bidagency/index.html#/agencyInfo/agencyBasicInfo?id=' + row.settleId, '_blank')
    },
    pageChange(val) {   // 页码改变
      this.clueForm.page = val;
      this.getInterestList();
    },
    getInterestList() {
      supplierInterestList(this.formItem).then(res => {
        if (res.success) {
          this.clueData = res.result.content;
          this.total = res.result.numberOfElements;
          this.tipNum = res.result.totalElements
        } else {
          this.$Message.warning("数据加载失败");
        }
      })
    }
  },
  mounted() {
    this.getInterestList()
  }
};
</script>

<style lang="less" scoped>
#myinteres {
  width: 100%;
  min-height: 520px;
  background-color: #fff;
  .form {
    display: flex;
    flex-direction: row;
    justify-content: start;
    flex-wrap: wrap;
    padding: 20px;
    .ivu-form-item {
      // width: 300px;
      margin-right: 4.2vw;
      margin-bottom: 16px;
      // /deep/ .ivu-input-suffix {
      //   right: -39px !important;
      // }
      /deep/ .ivu-input {
        width: 13.7vw;
      }

      /deep/ .ivu-select-placeholder {
        width: 238px;
      }

      /deep/ .ivu-form-item-label {
        text-align: left;
      }

      /deep/ .ivu-form-item-error-tip {
        padding-top: 4px;
        font-size: 12px;
      }
    }

    .ivu-form-item.time {
      margin-right: 0;
      .line {
        color: rgb(221, 216, 216);
        margin: 0 1px;
      }
    }
    .ivu-form-item.submit {
      margin-right: 0px;

      /deep/ .ivu-form-item-content {
        margin-left: 383px !important;
      }
    }
    .ivu-form-refresh {
      margin-left: 20px;
    }
  }

  .clue-tip {
    font-size: 14px;
    line-height: 16px;
    padding: 0 20px;
    color: #999;
    .tip-delete {
      margin-left: 20px;
    }
  }

  .clue-table {
    padding: 20px;
    .t-btn {
      margin-right: 5px;
    }
    .t-page {
      text-align: center;
      padding-top: 20px;
    }
    /deep/ .ivu-table-header {
      th {
        background-color: #edf2ff;
      }
    }
    /deep/ .ivu-table-fixed-header {
      th {
        background-color: #edf2ff;
      }
    }
  }
}
</style>