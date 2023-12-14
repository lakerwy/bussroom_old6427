<template>
  <div id="myenter">
    <Form
      :model="formItem"
      :label-width="80"
      class="form"
      ref="form"
      :rules="ruleValidate"
    >
      <Form-item label="信息标题" prop="title">
        <Input v-model="formItem.title" placeholder="请输入"></Input>
      </Form-item>
      <Form-item label="信息类型" prop="infoType">
        <Select v-model="formItem.infoType" placeholder="请选择">
          <Option
            v-for="item in formOptions.types"
            :key="item.value"
            :value="item.value"
            >{{ item.label }}</Option
          >
        </Select>
      </Form-item>
      <Form-item label="报名时间" class="time" prop="startDate">
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
          :editable="false"
          type="date"
          placement="bottom-end"
          placeholder="选择日期"
          style="width: 13.7vw"
        ></Date-picker>
      </Form-item>
      <Form-item label="公司名称" prop="companyName">
        <Input v-model="formItem.companyName" placeholder="请输入"></Input>
      </Form-item>
      <Form-item label="状态" prop="signType">
        <Select v-model="formItem.signType" placeholder="请选择">
          <Option
            v-for="item in formOptions.sources"
            :key="item.value"
            :value="item.value"
            >{{ item.label }}</Option
          >
        </Select>
      </Form-item>
      <Form-item label="" class="submit">
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
        共搜索到<span class="tip-num">{{ total }}</span
        >条数据
      </p>
    </div>

    <div class="clue-table">
      <Table border :columns="clueColumns" :data="clueData">
        <template slot-scope="{ row }" slot="action">
          <Button @click="enterView(row)" class="t-btn">查看</Button>
          <Button @click="enterDetail(row)">报名详情</Button>
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

    <!-- 信息详情 -->
    <Modal v-model="dFlag" title="报名信息" class-name="dmodal">
      <div class="dcol" v-if="fsignCustom.indexOf('1') != -1">
        <div class="dcoll">公司名称：</div>
        <div class="dcolr">{{ dMsg.companyName ? dMsg.companyName : '' }}</div>
      </div>
      <div class="dcol" v-if="fsignCustom.indexOf('2') != -1">
        <div class="dcoll">公司所在地：</div>
        <div class="dcolr">
          {{ dMsg.provice ? filterArea(dMsg.provice) : '' }}
        </div>
      </div>
      <div class="dcol" v-if="fsignCustom.indexOf('3') != -1">
        <div class="dcoll">所属行业：</div>
        <div class="dcolr">{{ dMsg.industryStr ? dMsg.industryStr : '' }}</div>
      </div>
      <div class="dcol" v-if="fsignCustom.indexOf('4') != -1">
        <div class="dcoll">注册资金：</div>
        <div class="dcolr">{{ dMsg.amount ? dMsg.amount : '' }}万元</div>
      </div>
      <div class="dcol" v-if="fsignCustom.indexOf('5') != -1">
        <div class="dcoll">成立时间：</div>
        <div class="dcolr">
          {{ dMsg.establishTime ? dMsg.establishTime : '' }}
        </div>
      </div>
      <div class="dcol" v-if="fsignCustom.indexOf('6') != -1">
        <div class="dcoll">公司规模：</div>
        <div class="dcolr">
          {{ dMsg.scaleCompany ? filterCompanyScale(dMsg.scaleCompany) : '' }}
        </div>
      </div>
      <div class="dcol" v-if="fsignCustom.indexOf('7') != -1">
        <div class="dcoll">经营模式：</div>
        <div class="dcolr">
          {{
            dMsg.managermentPattern
              ? filterBusinessModel(dMsg.managermentPattern)
              : ''
          }}
        </div>
      </div>
      <div class="dcol" v-if="fsignCustom.indexOf('8') != -1">
        <div class="dcoll">公司法人：</div>
        <div class="dcolr">{{ dMsg.corporation ? dMsg.corporation : '' }}</div>
      </div>

      <div class="dcol" v-if="fsignCustom.indexOf('9') != -1">
        <div class="dcoll">公司简介：</div>
        <div class="dcolr">
          {{ dMsg.companyProfile ? dMsg.companyProfile : '' }}
        </div>
      </div>
      <div class="dcol" v-if="fsignCustom.indexOf('10') != -1">
        <div class="dcoll">主营业务：</div>
        <div class="dcolr">
          {{ dMsg.mainBusiness ? dMsg.mainBusiness : '' }}
        </div>
      </div>
      <div class="dcol" v-if="fsignCustom.indexOf('11') != -1">
        <div class="dcoll">营业执照：</div>
        <ul class="imgList">
          <li v-for="(item, index) in dMsg.FBusinessList" :key="index">
            <img :src="item.fileUrl" alt="" />
          </li>
        </ul>
      </div>
      <div class="dcol" v-if="fsignCustom.indexOf('12') != -1">
        <div class="dcoll">资质证书：</div>
        <ul class="imgList">
          <li
            v-for="(item, index) in dMsg.FQualificationList"
            :key="index"
            :style="index >= 3 ? { marginTop: '5px' } : ''"
          >
            <img :src="item.fileUrl" alt="" />
          </li>
        </ul>
      </div>
      <div class="dcol">
        <div class="dcoll">联系人：</div>
        <div class="dcolr">{{ dMsg.contact }}</div>
      </div>
      <div class="dcol">
        <div class="dcoll">职位：</div>
        <div class="dcolr">{{ dMsg.position }}</div>
      </div>
      <div class="dcol">
        <div class="dcoll">联系电话：</div>
        <div class="dcolr">{{ dMsg.mobile }}</div>
      </div>
      <div class="dcol">
        <div class="dcoll">邮箱：</div>
        <div class="dcolr">{{ dMsg.email }}</div>
      </div>
      <div slot="footer" class="dfooter">
        <Button type="primary" @click="ModalClose(1)">确定</Button>
      </div>
    </Modal>
    <!-- 查看弹框 -->
    <Modal v-model="vFlag" title="状态查看" class-name="vmodal">
      <p class="vcon">您已经报名成功，预祝您中标！</p>
      <div slot="footer" class="vfooter">
        <Button type="primary" @click="ModalClose(2)">关闭</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import { supplierEnterList, supplierEnterDetail } from '@/api/index'
import areaData from '../static/area.json'

export default {
  data() {
    // 代理名称
    const validateName = (rule, value, callback) => {
      let reg = /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/
      if (!value) {
        callback()
      } else if (!reg.test(value)) {
        callback(new Error('关键词包含特殊字符，请酌情删减'))
      } else if (value.length > 100) {
        callback(new Error('关键词过多，请酌情删减'))
      } else {
        callback()
      }
    }
    // 发布时间验证
    const validDate = (rule, value, callback) => {
      if (!this.formItem.startDate && !this.formItem.endDate) {
        callback()
      } else if (!this.formItem.startDate && this.formItem.endDate) {
        callback(new Error('请选择开始时间'))
      } else if (this.formItem.startDate && !this.formItem.endDate) {
        callback(new Error('请选择结束时间'))
      } else {
        callback()
      }
    }
    return {
      formItem: {
        title: '',
        infoType: null,
        startDate: '',
        endDate: '',
        companyName: '',
        signType: null,
        pageNumber: 1,
        pageSize: 10,
      },
      total: 0,
      fsignCustom: [], //查看报名字段回显
      formOptions: {
        types: [
          {
            label: '全部',
            value: 1,
          },
          {
            label: '招标公告',
            value: '401',
          },
          {
            label: '招标预告',
            value: '402',
          },
          // {
          //   label: '招标变更',
          //   value: '403'
          // },
          {
            label: '中标公告',
            value: '404',
          },
          // {
          //   label: '采购信息',
          //   value: '405'
          // },
          {
            label: '企业采购',
            value: '4051',
          },
          {
            label: '政府采购',
            value: '4052',
          },
        ],
        sources: [
          // {
          //   label: '全部',
          //   value: '0'
          // },
          {
            label: '已报名',
            value: '1',
          },
        ],
      },
      clueColumns: [
        {
          title: '信息标题',
          key: 'title',
          minWidth: 100,
          render: (h, params) => {
            return h(
              'span',
              {
                on: {
                  click: () => {
                    window.open(
                      'https://www.chinabidding.cn/public/bidagency/index.html#/infoDetails?fid=' +
                        params.row.infoId,
                      '_blank'
                    )
                  },
                },
                style: {
                  cursor: 'pointer',
                },
              },
              params.row.title
            )
          },
        },
        {
          title: '采购数量',
          key: 'amount',
          render: (h, params) => {
            return h(
              'span',
              {},
              params.row.amount ? params.row.amount + params.row.unit : '——'
            )
          },
        },
        {
          title: '信息类型',
          key: 'infoType',
          render: (h, params) => {
            if (params.row.infoType == '401') {
              return h('span', {}, '招标公告')
            } else if (params.row.infoType == '402') {
              return h('span', {}, '招标预告')
              // } else if (params.row.infoType == '403') {
              //   return h('span', {}, '招标变更')
            } else if (params.row.infoType == '404') {
              return h('span', {}, '中标公告')
            } else if (params.row.infoType == '405') {
              if (params.row.purchaseType == 1) {
                return h('span', {}, '企业采购')
              } else {
                return h('span', {}, '政府采购')
              }
            }
          },
        },
        {
          title: '公司名称',
          key: 'sourceName',
          minWidth: 160,
          render: (h, params) => {
            return h('span', {}, params.row.sourceName || '——')
          },
        },
        {
          title: '报名时间',
          key: 'signTime',
          render: (h, params) => {
            return h('span', {}, params.row.signTime || '——')
          },
        },
        {
          title: '状态',
          key: 'signType',
          render: (h, params) => {
            return h('span', {}, '已报名')
          },
        },
        {
          title: '操作',
          slot: 'action',
          align: 'center',
          fixed: 'right',
          minWidth: 160,
        },
      ],
      clueData: [
        {
          id: '1',
          title: '测试标题',
          infoType: '4051',
          companyName: '测试公司',
          amount: 33,
          unit: '吨',
          signTime: '2022-07-19 11:19:28',
          signType: 1,
        },
      ],

      ruleValidate: {
        startDate: [
          { required: false, validator: validDate, trigger: 'change' },
        ],
        title: [{ required: false, validator: validateName, trigger: 'blur' }],
      },
      enterEndTimeOption: {
        disabledDate: (date) => {
          const now = Date.now()
          // const three = 3 * 24 * 60 * 60 * 1000;
          // const threeDays = now + three;
          return (
            date.getTime() <
              new Date(this.formItem.startDate) - 1000 * 60 * 60 * 24 &&
            date.getTime()
          )
        },
      },

      // clueForm: {
      //   pageNumber: 1,
      //   pageSize: 10,
      //   title: '',
      //   infoType: '',
      //   companyName: '',
      //   startDate: '',
      //   endDate: '',
      //   signType: ''
      // },
      dFlag: false, //详情弹框
      vFlag: false, //查看弹框
      dMsg: {},
    }
  },
  methods: {
    changeStartData(val) {
      this.formItem.startDate = val
      this.formItem.endDate = ''
    },

    changeEndData(val) {
      this.formItem.endDate = val
    },

    formSearch() {
      //搜索
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.getEnterList()
        } else {
        }
      })
    },
    formReset() {
      //重置
      this.formItem.companyName = ''
      this.formItem.title = ''
      this.formItem.startDate = ''
      this.formItem.endDate = ''
      this.formItem.infoType = null
      this.formItem.signType = null
      this.formItem.pageNumber = 1
      this.formSearch()
    },

    enterView(row) {
      // 查看
      this.vFlag = true
    },
    enterDetail(row) {
      // 报名详情
      supplierEnterDetail({
        sid: row.id,
      }).then((res) => {
        if (res.success) {
          this.fsignCustom = res.result.custom.split(',')
          this.dMsg = res.result.message
          this.dMsg.businessList = this.dMsg.businessList
            ? this.dMsg.businessList
            : []
          this.dMsg.qualificationList = this.dMsg.qualificationList
            ? this.dMsg.qualificationList
            : []
        } else {
          this.$Message.warning('获取报名详情失败')
        }
      })
      this.dFlag = true
    },
    ModalClose(type) {
      if (type == 1) {
        this.dFlag = false
      } else if (type == 2) {
        this.vFlag = false
      }
    },
    pageChange(val) {
      // 页码改变
      this.formItem.pageNumber = val
      this.getEnterList()
    },
    getEnterList() {
      let form = {}
      for (let key in this.formItem) {
        form[key] = this.formItem[key]
      }
      if (form.infoType == 1) {
        form.infoType = ''
      }

      supplierEnterList(form).then((res) => {
        if (res.success) {
          this.clueData = res.result.content
          this.total = res.result.numberOfElements
        } else {
          this.$Message.warning('数据加载失败')
        }
      })
    },

    // 过滤地区
    filterArea(val) {
      let name
      areaData.forEach((item) => {
        if (val == item.fid) {
          name = item.fname
        }
      })
      return name
    },

    // 过滤公司规模
    filterCompanyScale(val) {
      switch (val) {
        case 101:
          return '0-20人'
          break

        case 102:
          return '20-99人'
          break

        case 103:
          return '100-499人'
          break

        case 104:
          return '500-999人'
          break

        case 105:
          return '1000-9999人'
          break

        case 106:
          return '10000人以上'
          break

        default:
          return ''
      }
    },

    // 过滤经营模式
    filterBusinessModel(val) {
      switch (val) {
        case 201:
          return '生产型'
          break

        case 202:
          return '贸易型'
          break

        case 203:
          return '服务型'
          break

        case 204:
          return '经销批发'
          break

        case 205:
          return '招商代理'
          break

        case 206:
          return '政府机构'
          break
        case 207:
          return '其他'
          break
        default:
          return ''
      }
    },
  },
  mounted() {
    this.getEnterList()
  },
}
</script>

<style lang="less" scoped>
#myenter {
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
        width: 13.7vw;
      }

      /deep/ .ivu-select-selected-value {
        width: 13.7vw;
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
        color: rgb(197, 195, 195);
        margin: 0 1px;
      }
    }
    .ivu-form-item.submit {
      margin-right: 0px;

      /deep/ .ivu-form-item-content {
        margin-left: 429px !important;
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

  .vmodal {
    .vcon {
      color: #666;
      font-size: 16px;
      line-height: 120px;
      text-align: center;
    }
    .vfooter {
      text-align: center;
    }
  }
}
.dmodal {
  .ivu-modal-body .dcol {
    overflow: hidden;
    font-size: 14px;
    color: #333;
    display: flex;
    padding: 0 20px;
    .dcoll {
      float: left;
      width: 85px;
      height: 30px;
      line-height: 30px;
      text-align: left;
      color: #333;
    }
    .dcolr {
      float: left;
      width: 340px;
      min-height: 30px;
      line-height: 30px;
    }
    .imgList {
      display: flex;
      flex-wrap: wrap;
      li {
        text-align: center;
        display: -webkit-flex;
        width: 100px;
        height: 100px;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #d2d2d2;
        border-radius: 2px;
        margin-right: 5px;
        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
  }
  .dfooter {
    text-align: center;
  }
}
</style>
