<template>
  <div id="recclue">
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
      <Form-item label="发布时间" class="time" prop="startDate">
        <Date-picker
          :value="formItem.startDate"
          @on-change="changeStartData"
          type="date"
          :editable="false"
          placement="bottom-end"
          placeholder="选择日期"
          style="width: 240px"
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
          style="width: 240px"
        ></Date-picker>
      </Form-item>
      <Form-item label="代理机构" prop="sourceName">
        <Input v-model="formItem.sourceName" placeholder="请输入"></Input>
      </Form-item>
      <!-- 地区 -->
      <div class="area">
        <FormItem prop="area" label="地区">
          <Input
            type="text"
            size="large"
            :readonly="true"
            v-model="areas"
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
      <Form-item label="所属行业" prop="industry">
        <Select v-model="formItem.industry">
          <Option
            v-for="item in formOptions.IndustryData"
            :value="item.value"
            :key="item.value"
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

    <Tabs value="name1" class="rectabs">
      <!-- 在线报名不要删，日后可能还会用上 -->
      <!-- <Tab-pane label="在线报名信息" name="name1">
        <div class="clue-tip">
          <p>
            共搜索到<span class="tip-num">{{ tipNum }}</span
            >条数据
            <Button type="primary" class="tip-delete" @click="batchCliam()"
              >批量认领</Button
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
                v-show="!row.isClaim"
                @click="clueClaim(row.id, row.isClaim)"
                class="t-btn"
                >认领</Button
              >
              <Button
                v-show="row.isClaim"
                @click="clueClaim(row.id, row.isClaim)"
                class="t-btn"
                >取消认领</Button
              >
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
      </Tab-pane> -->
      <Tab-pane label="采招信息" name="name1">
        <div class="clue-tip">
          <p>
            共搜索到<span class="tip-num">{{ tipNum }}</span
            >条数据
            <Button type="primary" class="tip-delete" @click="batchCliam()"
              >批量认领</Button
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
                v-show="!row.isClaim"
                @click="clueClaim(row.id, row.isClaim)"
                class="t-btn"
                >认领</Button
              >
              <Button
                v-show="row.isClaim"
                @click="clueClaim(row.id, row.isClaim)"
                class="t-btn"
                >取消认领</Button
              >
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
      </Tab-pane>
    </Tabs>
    <notVip ref="notVip" />
  </div>
</template>

<script>
import {
  claimRecommendList,
  claimInfo,
  unClaimInfo,
  allClaimInfo,
  getSupplierAuth,
} from '@/api/index'
import notVip from '@/views/supplier/components/notVip'
export default {
  components: {
    notVip,
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
      modal: true,
      areas: '', //选中地区回显到输入框
      hyFlag: true,
      auth: 0, //会员等级
      formItem: {
        title: '',
        infoType: '',
        areas: {},
        industry: '',
        sourceName: '',
        startDate: '',
        endDate: '',
        pageNumber: 1,
        pageSize: 10,
        flag: 1,
      },
      industryVal: [],
      areaBoxShow: false,
      total: 0,
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
        },
        {
          title: '信息标题',
          key: 'title',
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
          title: '所属地区',
          key: 'area',
          render: (h, params) => {
            let txt = ''
            if (params.row.area == 99) {
              txt='其他'
            } else {
              this.formOptions.areaList.forEach((item) => {
              item.list.forEach((i) => {
                if (params.row.area == i.fid) {
                  txt = i.name
                }
                })
              })
            }
            
            return h('span', {}, txt ? txt : '')
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
            return h('span', {}, arr.length ? arr.join(',') : '——')
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
        },
        {
          title: '状态',
          key: 'isClaim',
          render: (h, params) => {
            if (params.row.isClaim) {
              return h('span', {}, '已认领')
            } else {
              return h('span', {}, '未认领')
            }
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
        // {
        //   id: "1511523445481472",
        //   title: "阿的说法",
        //   infoType: 401,
        //   area: 130000,
        //   industry: "14,16",
        //   sourceName: null,
        //   publishTime: "2022-07-15 12:28:10",
        //   isClaim: 0
        // },
        // {
        //   id: "1511523445481470",
        //   title: "阿的说法",
        //   infoType: 401,
        //   area: 130000,
        //   industry: "14,16",
        //   sourceName: null,
        //   publishTime: "2022-07-15 12:28:10",
        //   isClaim: 1
        // },
      ],

      //验证规则
      ruleValidate: {
        startDate: [
          { required: false, validator: validDate, trigger: 'change' },
        ],
        title: [{ required: false, validator: validateName, trigger: 'blur' }],
      },
      seletedData: {}, //table选中的row
    }
  },
  methods: {
    // 切换tab,通过传flag获取不同类型的信息
    switchTab(val) {
      if (val == 'name1') {
        this.formItem.flag = 0
      } else {
        this.formItem.flag = 1
      }
      this.formSearch()
    },
    // 筛选地区
    selectArea(val) {
      this.formItem.area = val
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
      const res = await claimRecommendList(form)
      if (res.code == 200) {
        this.clueData = JSON.parse(JSON.stringify(res.result.content))
        this.clueData.forEach((item) => {
          if (item.isClaim) {
            item._disabled = true
          }
        })
        this.total = res.result.totalElements
        this.tipNum = res.result.totalElements
        console.log(this.clueData, 'cluedata')
      } else {
        this.$Message.warning(res.message)
      }
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
      console.log(this.formItem.pageNumber, 'pageNumber')
      this.formItem.startDate = ''
      this.formItem.endDate = ''
      this.formSearch()
    },

    async batchCliam() {
      //批量认领
      if (this.seletedData.length) {
        if (this.auth) {
          let cids = this.seletedData.map((item) => {
            return item.id
          })
          const res = await allClaimInfo({ cids })
          if (res.code == 200) {
            this.$Message.success('批量认领成功')
            this.formSearch()
          } else {
            this.$Message.warning(res.message)
          }
        } else {
          this.$refs.notVip.modal = true
        }
      } else {
        this.$Message.warning('请至少勾选一条线索')
      }
    },
    async clueClaim(id, flag) {
      // 认领or取消认领
      let res = {}
      if (flag) {
        res = await unClaimInfo({ id })
        if (res.code == 200) {
          this.$Message.success('取消认领成功')
          this.formSearch()
        } else {
          this.$Message.warning(res.message)
        }
      } else {
        if (this.auth) {
          //判断会员权限
          res = await claimInfo({ id })
          if (res.code == 200) {
            this.$Message.success('认领成功')
            this.formSearch()
          } else {
            this.$Message.warning(res.message)
          }
        } else {
          this.$refs.notVip.modal = true
        }
      }
    },

    // 获取供应商权限
    async getSupplierAuth() {
      const res = await getSupplierAuth()
      console.log(res, 'res')
      if (res.code == 200) {
        this.auth = res.result.custRightGroup
      } else {
        this.$Message.warning(res.message)
      }
    },

    clueView(row) {
      // 查看
      if (this.formItem.flag) {
        window.open(row.url, '_blank')
      } else {
        window.open(
          'https://www.chinabidding.cn/public/bidagency/index.html#/infoDetails?fid=' +
            row.id,
          '_blank'
        )
      }
    },
    pageChange(val) {
      // 页码改变
      this.formItem.pageNumber = val
      this.formSearch()
    },
    changeStartData(val) {
      this.formItem.startDate = val
      this.formItem.endDate = ''
    },

    changeEndData(val) {
      this.formItem.endDate = val
    },

    selectChange(data) {
      //table的选中列表
      this.seletedData = data
    },
  },
  created() {
    console.log('父组件created')
  },
  mounted() {
    this.getSupplierAuth()
    this.formSearch()
    this.$Message.config({
      top: 20,
      duration: 3,
    })

    console.log(this.$refs.notVip, '子组件')
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
#recclue {
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
        width: 240px;
        height: 30px;
        font-size: 14px;
      }

      /deep/ .ivu-select-placeholder {
        width: 238px;
      }

      /deep/ .ivu-form-item-label {
        text-align: left;
      }

      /deep/ .ivu-select-selected-value {
        width: 240px;
      }

      /deep/ .ivu-form-item-error-tip {
        padding-top: 4px;
        font-size: 12px;
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
        margin-left: -17px !important;
      }
    }
    .ivu-form-refresh {
      margin-left: 20px;
    }
  }

  .rectabs {
    padding: 0 20px;
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
