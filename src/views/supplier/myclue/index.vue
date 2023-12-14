<template>
  <!-- 我的线索 -->
  <div id="myclue">
    <Form
      :model="formItem"
      :label-width="80"
      class="form"
      ref="form"
      :rules="ruleValidate"
    >
      <Form-item label="信息标题" prop="infoTitle">
        <Input v-model="formItem.infoTitle" placeholder="请输入"></Input>
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
      <Form-item label="认领时间" class="time" prop="startDate">
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
      <!-- 地区 -->
      <div class="area">
        <FormItem prop="provice" label="地区">
          <Input
            type="text"
            size="large"
            v-model="areas"
            :readonly="true"
            placeholder="请选择"
            @on-focus.stop="areaBoxShow = true"
            icon="ios-arrow-down"
          >
          </Input>
        </FormItem>
        <div
          class="inner"
          v-show="areaBoxShow"
          @click="areaBoxShow = false"
        ></div>
        <div class="areabox" v-show="areaBoxShow">
          <div
            class="item"
            v-for="item in formOptions.areaList"
            :key="item.type"
          >
            <div class="type">{{ item.type }}</div>
            <ul>
              <li
                :class="i.selected ? 'active' : ''"
                v-for="(i, y) in item.list"
                :key="y"
                @click="i.selected = !i.selected"
              >
                {{ i.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 所属行业 -->
      <FormItem class="Industry" label="行业" prop="industry">
        <Select v-model="formItem.industry">
          <Option
            v-for="item in formOptions.IndustryData"
            :value="item.value"
            :key="item.value"
            >{{ item.label }}</Option
          >
        </Select>
      </FormItem>
      <Form-item label="状态" prop="status">
        <Select v-model="formItem.status" placeholder="请选择">
          <Option
            v-for="item in formOptions.sources"
            :key="item.value"
            :value="item.value"
            >{{ item.label }}</Option
          >
        </Select>
      </Form-item>
      <Form-item label="" class="submit">
        <Button type="primary" icon="ios-search" @click="handleSearch"
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
        <Button type="primary" class="tip-delete" @click="deleteClaim"
          >删除认领</Button
        >
      </p>
    </div>

    <div class="clue-table">
      <Table
        border
        :columns="clueColumns"
        :data="clueData"
        @on-selection-change="selectChange"
      >
        <template slot-scope="{ row }" slot="action">
          <Button
            v-show="row.signFlag == 1"
            title="敬请期待"
            type="primary"
            class="t-btn"
            >一键报名</Button
          >
          <Button v-show="row.signFlag == 2" title="敬请期待" class="a-btn"
            >一键报名</Button
          >
          <Button @click="clueFollow(row.id)" class="t-btn">跟进</Button>
          <Button @click="clueView(row)">查看</Button>
        </template>
      </Table>
      <Page
        :total="total"
        :current="formItem.pageNumber"
        :page-size="formItem.pageSize"
        show-total
        show-elevator
        @on-change="pageChange"
        class="t-page"
      ></Page>
    </div>
    <regModal ref="regmodal" :currentindex="currentindex" />
    <trackModal ref="trackmodal" />
    <tipsModal ref="tipsModal" />

    <!-- <regModal /> -->
    <!-- 在线报名 -->
    <!-- <Modal v-model="enterFlag" width="580">
      <div
        slot="header"
        style="font-size: 20px; line-height: 20px; padding-top: 10px"
      >
        <p>
          在线报名<span style="color: #999; font-size: 14px; margin-left: 20px"
            >报名须知：报名信息务必真实，一遍及时联系</span
          >
        </p>
      </div>
      <div style="text-align: left">
        <Form
          ref="enterfrom"
          :model="enterfrom"
          :rules="enterValidate"
          :label-width="100"
        >
          <Form-item label="公司名称" prop="company">
            <Input
              v-model="enterfrom.company"
              placeholder="请输入公司名称"
            ></Input>
          </Form-item>
          <Form-item label="公司法人" prop="legal">
            <Input
              v-model="enterfrom.legal"
              placeholder="请输入公司法人"
            ></Input>
          </Form-item>
          <Form-item label="注册资金" prop="registmoney">
            <Input
              v-model="enterfrom.registmoney"
              placeholder="请输入公司注册资金"
            ></Input>
          </Form-item>
          <Form-item label="公司所在地" prop="location">
            <Select
              v-model="enterfrom.province"
              style="width: 150px; margin-right: 20px"
            >
              <Option value="beijing">北京市</Option>
              <Option value="shanghai" disabled>上海市</Option>
              <Option value="shenzhen">深圳市</Option>
            </Select>
            <Select v-model="enterfrom.city" style="width: 150px">
              <Option value="beijing">北京市</Option>
              <Option value="shanghai">上海市</Option>
              <Option value="shenzhen">深圳市</Option>
            </Select>
          </Form-item>
          <Form-item label="公司简介" prop="introduce">
            <Input
              v-model="enterfrom.introduce"
              type="textarea"
              :rows="3"
              placeholder="请输入公司介绍"
            ></Input>
          </Form-item>
        </Form>
      </div>
      <div slot="footer" style="text-align: center">
        <Button type="primary" size="large" @click="submitEnter('enterfrom')"
          >下一步1/2</Button
        >
      </div>
    </Modal>
    <Ad /> -->
  </div>
</template>

<script>
import regModal from '../components/regModal.vue'
import trackModal from '../components/trackModal.vue'
import tipsModal from '../components/tipsModal.vue'
import {
  supplierClueList,
  deleteClaim,
  getTrackInfo,
  getSupplierAuth,
  getCategory,
} from '@/api/index'

export default {
  components: {
    regModal,
    trackModal,
    tipsModal,
  },
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
      areas: '', //选中地区回显到输入框
      areaBoxShow: false,
      enterFlag: false,
      currentindex: 0, //点击行索引
      formItem: {
        infoTitle: '',
        infoType: '',
        startDate: '',
        endDate: '',
        areas: '',
        industry: '',
        status: '',
        pageNumber: 1,
        pageSize: 10,
      },
      industryVal: [],

      //报名结束时间禁用规则
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
      rowData: {}, //当行数据缓存
      formOptions: {
        // 地区列表
        areaList: [
          {
            type: 'A-G',
            list: [
              { name: '北京市', fid: 110000, selected: false },
              { name: '安徽省', fid: 340000, selected: false },
              { name: '福建省', fid: 350000, selected: false },
              { name: '广东省', fid: 440000, selected: false },
              { name: '广西省', fid: 450000, selected: false },
              { name: '贵州省', fid: 520000, selected: false },
              { name: '甘肃省', fid: 620000, selected: false },
              { name: '重庆市', fid: 500000, selected: false },
              { name: '澳门 ', fid: 820000, selected: false },
            ],
          },
          {
            type: 'H-N',
            list: [
              { name: '河北省', fid: 130000, selected: false },
              { name: '内蒙古', fid: 150000, selected: false },
              { name: '辽宁省', fid: 210000, selected: false },
              { name: '吉林省', fid: 220000, selected: false },
              { name: '海南省', fid: 460000, selected: false },
              { name: '黑龙江', fid: 230000, selected: false },
              { name: '江苏省', fid: 320000, selected: false },
              { name: '江西省', fid: 360000, selected: false },
              { name: '河南省', fid: 410000, selected: false },
              { name: '湖南省', fid: 430000, selected: false },
              { name: '湖北省', fid: 420000, selected: false },
              { name: '宁夏省', fid: 640000, selected: false },
            ],
          },
          {
            type: 'O-U',
            list: [
              { name: '上海市', fid: 310000, selected: false },
              { name: '天津市', fid: 120000, selected: false },
              { name: '山西省', fid: 140000, selected: false },
              { name: '山东省', fid: 370000, selected: false },
              { name: '陕西省', fid: 610000, selected: false },
              { name: '四川省', fid: 510000, selected: false },
              { name: '青海省', fid: 630000, selected: false },
              { name: '台湾', fid: 710000, selected: false },
            ],
          },
          {
            type: 'V-Z',
            list: [
              { name: '新疆 ', fid: 650000, selected: false },
              { name: '云南 ', fid: 530000, selected: false },
              { name: '浙江省', fid: 330000, selected: false },
              { name: '西藏 ', fid: 540000, selected: false },
              { name: '香港 ', fid: 810000, selected: false },
            ],
          },
        ],
        IndustryData: [
          { value: '11', label: '出版印刷' },
          { value: '12', label: '轻工纺织食品' },
          { value: '13', label: '农林牧渔' },
          { value: '14', label: '商业服务' },
          { value: '16', label: '园林绿化' },
          { value: '17', label: '能源' },
          { value: '18', label: '化工' },
          { value: '1', label: '交通运输' },
          { value: '2', label: '网络通讯计算机' },
          { value: '3', label: '市政房地产建筑' },
          { value: '4', label: '水利桥梁' },
          { value: '5', label: '机械电子电器' },
          { value: '6', label: '环保' },
          { value: '8', label: '医疗卫生' },
          { value: '9', label: '科技文教旅游' },
          { value: '10', label: '冶金矿产原材料' },
          // {
          //   value: "化工",
          //   label: "化工",
          //   children: [
          //     {
          //       value: "化工废料",
          //       label: "化工废料",
          //       children: [
          //         {
          //           value: "废塑料",
          //           label: "废塑料"
          //         },
          //         {
          //           value: "电石渣",
          //           label: "电石渣"
          //         }
          //       ]
          //     },
          //     {
          //       value: "化工机械",
          //       label: "化工机械",
          //       children: [
          //         {
          //           value: "废机械",
          //           label: "废机械"
          //         },
          //         {
          //           value: "废铁皮",
          //           label: "废铁皮"
          //         }
          //       ]
          //     }
          //   ]
          // },
          // {
          //   value: "建筑建材",
          //   label: "建筑建材",
          //   children: [
          //     {
          //       value: "工程建筑",
          //       label: "工程建筑",
          //       children: [
          //         {
          //           value: "公寓",
          //           label: "公寓",
          //         },
          //         {
          //           value: "写字楼",
          //           label: "写字楼",
          //         }
          //       ]
          //     },
          //     {
          //       value: "建材",
          //       label: "建材",
          //       children: [
          //         {
          //           value: "商砼",
          //           label: "商砼",
          //         },
          //         {
          //           value: "水泥",
          //           label: "水泥",
          //         }
          //       ]
          //     }
          //   ]
          // }
        ],
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
          {
            label: '跟进中',
            value: '1',
          },
          {
            label: '未跟进',
            value: '0',
          },
        ],
      },
      tipNum: 2389, //线索条数
      clueColumns: [
        {
          type: 'selection',
          width: 60,
          align: 'center',
          type: 'selection',
        },
        {
          title: '信息标题',
          key: 'infoTitle',
          minWidth: 100,
        },
        {
          title: '信息类型',
          key: 'infoType',
          render: (h, params) => {
            if (params.row.infoType == '401') {
              return h('span', {}, '招标公告')
            } else if (params.row.infoType == '402') {
              return h('span', {}, '招标预告')
            }
            //  else if (params.row.infoType == '403') {
            //   return h('span', {}, '招标变更')}
            else if (params.row.infoType == '404') {
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
          title: '所属地区',
          key: 'provice',
          render: (h, params) => {
            let txt = ''
            this.formOptions.areaList.forEach((item) => {
              item.list.forEach((i) => {
                if (params.row.provice == i.fid) {
                  txt = i.name
                }
              })
            })
            return h('span', {}, txt ? txt : '——')
          },
        },
        {
          title: '所属行业',
          key: 'industry',
          render: (h, params) => {
            let arr = []
            params.row.industry.split(',').forEach((item) => {
              this.formOptions.IndustryData.forEach((i) => {
                if (item == i.value) {
                  arr.push(i.label)
                }
              })
            })

            return h('span', {}, arr.join(',') ? arr.join(',') : '——')
          },
        },
        {
          title: '代理机构',
          key: 'sourceName',
          render: (h, params) => {
            return h(
              'sapn',
              {},
              params.row.sourceName ? params.row.sourceName : '——'
            )
          },
        },
        {
          title: '发布时间',
          key: 'publishTime',
          width: 200,
        },
        {
          title: '认领时间',
          key: 'createTime',
        },
        {
          title: '状态',
          key: 'status',
          render: (h, params) => {
            if (params.row.status) {
              return h('span', '跟进中')
            } else {
              return h('span', '未跟进')
            }
          },
        },
        {
          title: '操作',
          slot: 'action',
          align: 'center',
          fixed: 'right',
          minWidth: 200,
        },
      ],
      clueData: [
        // {
        //   id: '1559614678978662400',
        //   createTime: null,
        //   infoId: '1511523445481472',
        //   infoTitle: '阿的说法',
        //   infoType: 401,
        //   infoSource: '1544598238370201600',
        //   sourceName: null,
        //   provice: 130000,
        //   city: null,
        //   county: null,
        //   industry: '14,16',
        //   publishTime: '2022-07-15 12:28:10',
        //   status: 0,
        //   isDeleted: 0,
        //   loginId: '123456',
        //   yuanUserId: '123456',
        // },
        // {
        //   id: '1559614678978662401',
        //   createTime: null,
        //   infoId: '1511523445481472',
        //   infoTitle: '阿的说法',
        //   infoType: 401,
        //   infoSource: '1544598238370201600',
        //   sourceName: null,
        //   provice: 130000,
        //   city: null,
        //   county: null,
        //   industry: '14,16',
        //   publishTime: '2022-07-15 12:28:10',
        //   status: 0,
        //   isDeleted: 0,
        //   loginId: '123456',
        //   yuanUserId: '123456',
        // },
      ],
      total: 0,

      seletedData: [], //表格选中的row

      // enterfrom: {
      //   company: '',
      //   legal: '',
      //   registmoney: '',
      //   location: '',
      //   introduce: '',
      //   province: '',
      //   city: ''
      // },
      ruleValidate: {
        startDate: [
          { required: false, validator: validDate, trigger: 'change' },
        ],
        infoTitle: [
          { required: false, validator: validateName, trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    // 获取行业
    async getCategory() {
      const res = await getCategory()
      console.log(res, '行业res')
    },

    // 筛选地区
    selectArea(val) {
      this.formItem.provice = val
    },

    changeStartData(val) {
      this.formItem.startDate = val
      this.formItem.endDate = ''
    },

    changeEndData(val) {
      this.formItem.endDate = val
    },

    handleSearch() {
      this.areaBoxShow = false
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.formSearch()
        } else {
        }
      })
    },

    async formSearch() {
      //搜索
      let form = {}
      for (let key in this.formItem) {
        form[key] = this.formItem[key]
      }

      if (form.infoType == 1) {
        form.infoType = ''
      }
      let selectAreaList = []
      this.formOptions.areaList.forEach((item) => {
        item.list.forEach((i) => {
          if (i.selected) {
            selectAreaList.push(i.fid)
          }
        })
      })

      form.areas = selectAreaList.join(',')

      const res = await supplierClueList(form)
      if (res.code == 200) {
        this.clueData = JSON.parse(JSON.stringify(res.result.content))
        this.total = res.result.totalElements
        this.tipNum = res.result.totalElements
      } else {
        this.$Message.warning(res.message)
      }
    },

    // 已报名提示
    messageShow() {
      this.$Message.warning('您已经报名，请在我的报名中查看')
    },

    formReset() {
      //重置
      this.$refs.form.resetFields()
      this.areas = ''
      this.formOptions.areaList.forEach((item) => {
        item.list.forEach((i) => {
          i.selected = false
        })
      })
      this.formItem.pageNumber = 1
      this.formItem.startDate = ''
      this.formItem.endDate = ''
      this.formSearch()
    },

    //获取供应商权限
    async getSupplierAuth(row) {
      this.rowData = row
      const res = await getSupplierAuth()
      // res.result = {
      //   custRightGroup: 0,   // 会员等级
      //   appliedCount: 5,     //已报名次数
      //   unAppliyCount: 1,    //剩余报名次数
      //   nowAppliedCount: 0,   //当日已报名次数
      // }
      if (!res.result.custRightGroup) {
        //是否是会员
        if (
          new Date().getTime() - new Date(res.result.endDate).getTime() >=
          0
        ) {
          //是否超过有效期
          if (res.result.unAppliyCount) {
            //剩余报名次数
            if (res.result.nowAppliedCount) {
              // 当日报名次数
              this.$refs.tipsModal.disabled = true
            } else {
              this.$refs.tipsModal.disabled = false
            }
            this.$refs.tipsModal.type = 1
            this.$refs.tipsModal.applyCount = res.result.appliedCount
            this.$refs.tipsModal.unApplyCount = res.result.unAppliyCount
            this.$refs.tipsModal.modal = true
          } else {
            this.$refs.tipsModal.type = 2
            this.$refs.tipsModal.modal = true
          }
        } else {
          this.$Message.warning('免费报名已超过有效期，请咨询客服')
        }
      } else {
        this.clueEntry()
      }
    },

    // 报名弹框弹出
    clueEntry() {
      // 一键报名
      this.$refs.regmodal.infoId = this.rowData.infoId
      this.$refs.regmodal.getEnterInfo()
      this.currentindex = this.rowData._index
      this.$refs.regmodal.modal = true
      // this.enterFlag = true
    },
    async clueFollow(cid) {
      // 跟进
      this.$refs.trackmodal.resetFields()
      const res = await getTrackInfo({ cid })
      if (res.code == 200) {
        if (res.result.length >= 5) {
          this.$refs.trackmodal.disabled = true
        }
        this.$refs.trackmodal.trackList = JSON.parse(JSON.stringify(res.result))
        this.$refs.trackmodal.modal = true
      } else {
        this.$Message.warning(res.message)
      }
      // this.$refs.trackmodal.trackList = [
      //   { method: 301, sign: 1, callTime: '2022-7-15', memo: '跟进1', company: '中国电信', contact: '张三儿' },
      //   { method: 302, sign: 2, callTime: '2022-8-15', memo: '跟进2', company: '中国移动', contact: '李四' },
      //   { method: 303, sign: 3, callTime: '2022-7-15', memo: '跟进2', company: '中国移动', contact: '李四' },
      // ]
      this.$refs.trackmodal.claimId = cid
      this.$refs.trackmodal.modal = true
    },
    clueView(row) {
      // 查看
      if (row.infoUrl) {
        window.open(row.infoUrl)
      } else {
        window.open(
        'https://www.chinabidding.cn/public/bidagency/index.html#/infoDetails?fid=' +
          row.infoId
      )
      }
      // window.open('http://localhost:8081/#/infoDetails?fid=' + row.infoId, '_blank')
      
    },

    pageChange(val) {
      // 页码改变
      this.formItem.pageNumber = val
      this.formSearch()
    },

    // 批量删除认领
    async deleteClaim() {
      if (this.seletedData.length) {
        let cids = this.seletedData.map((item) => {
          return item.infoId
        })
        const res = await deleteClaim({ cids })
        if (res.code == 200) {
          this.$Message.success('删除认领成功')
          this.formSearch()
        } else {
          this.$Message.warning(res.message)
        }
      } else {
        this.$Message.warning('请至少勾选一条线索')
      }
    },

    selectChange(data) {
      //table的选中列表
      this.seletedData = data
    },
    // submitEnter(name) {  //报名提交
    //   this.$refs[name].validate((valid) => {
    //     if (valid) {
    //       this.$Message.success('提交成功!');
    //     } else {
    //       this.$Message.error('表单验证失败!');
    //     }
    //   })
    // }
  },
  mounted() {
    this.getCategory()
    this.formSearch()
    this.$Message.config({
      top: 20,
      duration: 3,
    })
  },

  watch: {
    'formOptions.areaList': {
      handler(n, o) {
        let array = []
        n.forEach((item) => {
          item.list.forEach((i) => {
            if (i.selected) {
              array.push(
                i.name.replace(/省|市|自治区|特别行政区|壮族|回族|维吾尔/g, '')
              )
            }
          })
        })
        this.areas = array.join('/')
      },
      deep: true,
    },
  },
}
</script>

<style lang="less" scoped>
#myclue {
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
      /deep/ .ivu-input {
        width: 13.7vw;
        height: 30px;
        font-size: 14px;
      }

      /deep/ .ivu-select-placeholder {
        width: 13.7vw;
      }

      /deep/ .ivu-form-item-label {
        text-align: left;
      }

      /deep/ .ivu-select-selected-value {
        width: 13.7vw;
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
      position: relative;
      z-index: 9;

      /deep/ .ivu-form-item-content {
        margin-left: 2px !important;
      }
    }

    .area {
      display: inline-block;
      position: relative;
      // .ivu-form-item {
      //   // width: 300px;
      //   margin-right: 4.2vw;
      //   margin-bottom: 16px;
      //   /deep/ .ivu-input {
      //     width: 240px;
      //   }

      //   /deep/ .ivu-select-placeholder {
      //     width: 238px;
      //   }

      //   /deep/ .ivu-form-item-label {
      //     text-align: left;
      //   }
      // }

      /deep/ .ivu-icon {
        font-size: 14px !important;
        line-height: 30px !important;
      }
      .areabox::-webkit-scrollbar {
        /*滚动条整体样式*/
        width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
      }
      .areabox::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        border-radius: 10px;
        background-color: #dce1e5;
      }
      .inner {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
      }
      .areabox {
        background-color: #fff;
        height: 236px;
        overflow-y: scroll;
        position: absolute;
        font-size: 12px;
        top: 34px;
        left: 80px;
        z-index: 50;
        padding: 15px 0;
        box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.15);
        .item {
          padding-left: 14px;
          .type {
            float: left;
            width: 30px;
            height: 100%;
            padding-top: 8px;
          }
          ul {
            margin-bottom: 10px;
            float: left;
            width: 166px;
            list-style: none;
            li {
              float: left;
              padding: 3px;
              margin: 5px;
              border-radius: 2px;
              cursor: pointer;
            }
            :hover {
              background-color: #5e8af7;
              color: #fff;
            }

            .active {
              color: #fff;
              background: #5e8af7;
            }
          }
        }
      }
    }
    .ivu-form-refresh {
      margin-left: 20px;
    }
  }

  .clue-tip {
    padding: 0 20px;
    font-size: 14px;
    line-height: 16px;
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
    .a-btn {
      color: #fff;
      background: #999;
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
