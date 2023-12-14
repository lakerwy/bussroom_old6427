<template>
  <div class="reissueTheBid">
    <h3 class="title">补发中标业绩</h3>
    <Form
      class="form"
      ref="form"
      :model="formData"
      :rules="ruleValidate"
      :label-width="110"
    >
      <div class="left">
        <!-- 中标申请函 -->
        <FormItem
          label="补发申请函:"
          prop="applicationletter"
          class="applicationletter"
        >
          <div class="inner">
            <div class="download"  @click="downloadApplicationletter">
              <img src="../../../assets/supplier/file.png" alt="" />
              <span>申请函下载</span>
            </div>
            <Upload
              ref="letter"
              :format="[
                'doc',
                'docx',
                'xls',
                'pdf',
                'rar',
                'zip',
                'jpg',
                'jpeg',
                'png',
              ]"
              :max-size="20480"
              :on-success="
                (response, file, fileList) => {
                  bidDocSuccess(response, file, fileList, 1)
                }
              "
              :headers="accessToken"
              :on-format-error="bidDocError"
              :on-exceeded-size="handleMaxSize"
              :on-remove="
                (file, fileList) => {
                  handleRemove(file, fileList,type)
                }
              "
              :data="{ fileType: 403 }"
              :default-file-list="formData.applicationletter"
              :before-upload="HandleBeforeUpload"
              :action="uploadUrl"
            >
              <Button icon="ios-cloud-upload-outline" :iconsize="20"
                >上传申请函</Button
              >
            </Upload>
          </div>
          <p class="tips">
            提示：请先下载申请函，填写后盖章上传申请函，支持 .docx
            .pdf .jpg .png 格式；
          </p>
        </FormItem>
        <!-- 原公告时间 -->
        <FormItem
          label="原公告时间:"
          prop="oldAnnouncementTime"
          class="oldAnnouncementTime"
        >
        <Date-picker
            @on-change="selectOldAnnouncementTime"
            type="datetime"
            :editable="false"
            placeholder="选择原公告时间"
            class="forminpsel"
            :value="formData.oldAnnouncementTime"
          ></Date-picker>
        </FormItem>
        <!-- 招标代理 -->
        <FormItem label="招标代理:" prop="zbdl" class="zbdl">
          <Input
            v-model="formData.zbdl"
            placeholder="请输入招标代理"
          ></Input>
        </FormItem>
        <!-- 中标标题 -->
        <FormItem label="信息标题:" prop="bidTitle" class="bidTitle">
          <Input
            v-model="formData.bidTitle"
            placeholder="请输入中标公告标题"
          ></Input>
        </FormItem>
        <!-- 招标人 -->
        <FormItem label="招标人:" prop="bidMan" class="bidMan">
          <Input
            v-model="formData.bidMan"
            placeholder="请输入招标人"
          ></Input>
        </FormItem>
        <!-- 招标类型 -->
        <FormItem
          label="招标类型:"
          class="biddingType"
          prop="biddingType"
        >
          <checkboxGroup
            v-model="formData.biddingType"
            class="forminpsel"
          >
            <Checkbox label="1">工程招标</Checkbox>
            <Checkbox label="2">货物招标</Checkbox>
            <Checkbox label="3">服务招标</Checkbox>
          </checkboxGroup>
        </FormItem>
        <!-- 所属行业 -->
        <FormItem label="所属行业" prop="industry" class="industry">
          <Input
            type="text"
            placeholder="请选择所属行业"
            icon="ios-arrow-down"
            readonly="readonly"
            v-model="formData.industryVal"
            @on-focus="industryBoxShow = true"
          ></Input>
          <div class="industryBox" v-show="industryBoxShow">
            <div class="inner">
              <div class="content">
                <CheckboxGroup
                  v-for="item in industryData"
                  :key="item.cid"
                  v-model="formData.industry"
                  @on-change="selecteIndustry"
                >
                  <Checkbox :label="item.cid">
                    <span>{{ item.cname }}</span>
                  </Checkbox>
                </CheckboxGroup>
              </div>
            </div>
            <div class="btnGroup">
              <span>注意最多支持三个行业</span>
              <Button class="reset" @click="reset">重置</Button>
              <Button class="enter" type="primary" @click="enter"
                >确定</Button
              >
            </div>
          </div>
          <div
            class="module"
            v-show="industryBoxShow"
            @click="industryBoxShow = false"
          ></div>
        </FormItem>
        <!-- 项目所属地区 -->
        <FormItem label="项目所属地区" prop="area" class="area">
          <Cascader
            :data="areaData"
            v-model="formData.area"
            class="forminpsel"
          ></Cascader>
        </FormItem>
        <!-- 开标时间 -->
        <FormItem label="开标时间" prop="bidopen">
          <Date-picker
            @on-change="selectBidopen"
            type="datetime"
            :editable="false"
            placeholder="选择日期"
            class="forminpsel"
            :value="formData.bidopen"
          ></Date-picker>
        </FormItem>
      </div>
      <div class="right">
        <!-- 中标文件证明 -->
        <FormItem
          label="中标文件证明:"
          prop="bidProve"
          class="bidProve"
        >
          <Upload
            ref="bidProve"
            :format="[
              'doc',
              'docx',
              'xls',
              'pdf',
              'rar',
              'zip',
              'jpg',
              'jpeg',
              'png',
            ]"
            :max-size="20480"
            :on-success="
              (response, file, fileList) => {
                bidDocSuccess(response, file, fileList, 2)
              }
            "
            :headers="accessToken"
            :on-format-error="bidDocError"
            :on-exceeded-size="handleMaxSize"
            :on-remove="
              (file, fileList) => {
                handleRemove(file, fileList,type)
              }
            "
            :data="{ fileType: 404 }"
            :default-file-list="formData.bidProve"
            :before-upload="bidProveHandleBeforeUpload"
            :action="uploadUrl"
          >
            <Button icon="ios-cloud-upload-outline" :iconsize="20"
              >选择标书文件</Button
            >
          </Upload>
          <p class="tips">
            只能上传doc docx pdf rar zip jpg png
            gif格式文件，单个文件不能超过20MB；
          </p>
        </FormItem>
        <!-- 中标公司 -->
        <FormItem
          label="中标公司"
          class="winBidCompany"
          prop="WinBidCompanyNameRules"
          :style="
            formData.winBidCompany.length > 1
              ? { marginBottom: '25px' }
              : ''
          "
          v-for="(item, index) in formData.winBidCompany"
          :key="index"
        >
          <span class="vliad">*</span>
          <div class="winBidCompanyList">
            <!-- 中标公司 -->
            <FormItem
              class="companyName"
              :rules="ruleValidate.WinBidCompanyNameRules.companyName"
              :prop="`winBidCompany[${index}].ftitle`"
            >
              <Input
                v-model="item.ftitle"
                placeholder="请输入中标公司全名"
                style="width: 300px"
                :disabled="$route.query.fid"
              />
            </FormItem>
            <!-- 中标金额 -->
            <FormItem class="count" label="中标金额">
              <Input
                type="number"
                v-model="item.famount"
                placeholder="如1000"
                style="width: 300px"
                onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))"
              />
            </FormItem>
            <!-- 单位 -->
            <FormItem class="units">
              <Select
                style="width: 120px"
                placeholder="万元"
                v-model="item.funit"
              >
                <Option
                  v-for="item in formData.unitData"
                  :value="item.value"
                  :key="item.value"
                  >{{ item.label }}</Option
                >
              </Select>
            </FormItem>
          </div>
        </FormItem>

        <!-- 联系人 -->
        <FormItem label="项目经理" prop="contract" class="Tooltip">
          <Tooltip
            content="项目经理为该项目的联系人，仅作为联系您的依据！"
            placement="right"
          >
            <Icon type="ios-alert-outline" size="18" />
          </Tooltip>
          <template>
            <Input
              v-model="formData.contract"
              placeholder="请输入项目经理姓名"
              class="contractinp"
              @on-focus="contractListHandleShow"
            ></Input>
            <div
              class="mask"
              v-show="contractListShow"
              @click="contractListShow = false"
            ></div>
            <ul class="contractList" v-show="contractListShow">
              <li
                class="item"
                v-for="(item, index) in mobileData.slice(0, 30)"
                :key="index"
                @click="
                  selectContract({
                    name: item.ccontact,
                    phone: item.mobile,
                  })
                "
              >
                {{ item.ccontact + item.mobile }}
              </li>
            </ul>
          </template>
        </FormItem>

        <!-- 手机号 -->
        <FormItem label="手机号" prop="phone" class="forminpsel">
          <Input
            v-model="formData.phone"
            placeholder="请输入您的联系方式"
            class="phonetel"
            type="number"
          ></Input>
        </FormItem>
        <!-- 验证码 -->
        <FormItem prop="code" class="formphone" v-if="codeShow">
          <Input
            v-model="formData.code"
            placeholder="请输入验证码"
            class="phonecode"
            type="number"
          ></Input>
          <div class="btnGrop">
            <Button
              v-show="!countDown"
              class="getcode"
              @click="getCode"
              >获取验证码</Button
            >
            <Button v-show="countDown" class="getcode countDown"
              >{{ socend }}秒后重新获取</Button
            >
          </div>
        </FormItem>
        <!-- 中标内容 -->
        <FormItem prop="bidContent" class="bidContent">
          <editor :content.sync="content" ref="editor" />
        </FormItem>
      </div>
    </Form>
    <!-- sub按钮 -->
    <div class="btnGroup">
      <Button type="ghost" @click="sureSubmit(-1)">保存预览</Button>
      <Button type="primary" @click="sureSubmit(0)">确认提交</Button>
    </div>
  </div>
</template>

<script>
import editor from '@/views/supplier/reissueTheBid/components/editor'
import moment from 'moment'

import {
  getArea,
  getDefaultInfo,
  getEchoInfo,
  uploadUrl_reissue,
  getMessage,
  getIndustry,
  delete_File,
  save,
} from '@/api/index.js'
export default {
  components: {
    editor,
  },
  data() {
    // 申请函验证规则
    const validateApplicationletter = (rule, value, callback) => {
      if (!this.$refs.letter.fileList.length) {
        callback(new Error('请上传申请函'))
      } else {
        callback()
      }
    }
    // 原公告时间验证规则
    const validateOldAnnouncementTime = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请选择原公告时间'))
      } else if (value.split(' ')[1]=='00:00:00') {
        callback(new Error('请选择具体时间'))
        
      } else {
        callback()
      }
    }

    // 开标时间验证规则
    const validateBidopen = (rule, value, callback) => {
      if (!value) {
        callback()
      } else if (value.split(' ')[1]=='00:00:00') {
        callback(new Error('请选择具体时间'))
      } else {
        callback()
      }
    }

    

    // 招标类型验证规则
    const validataBiddingType = (rule, value, callback) => {
      if (!this.formData.biddingType.length) {
        callback(new Error('请选择招标类型'))
      } else {
        callback()
      }
    }

    // 所属行业验证
    const validateIndustry = (rule, value, callback) => {
      if (!this.formData.industry.length) {
        callback(new Error('请选择所属行业'))
      } else {
        callback()
      }
    }

    //项目所属地区验证规则
    const validateArea = (rule, value, callback) => {
      if (!this.formData.area.length) {
        callback(new Error('请选择所属地区'))
      } else {
        callback()
      }
    }
    //中标证明文件规则
    const validateDidProve = (rule, value, callback) => {
      if (!this.$refs.bidProve.fileList.length) {
        callback(new Error('请上传中标文件证明'))
      } else {
        callback()
      }
    }
    //中标证明文件规则
    const validateDidContent = (rule, value, callback) => {
      if (!this.content) {
        callback(new Error('请输入中标内容'))
      } else {
        callback()
      }
    }

    // 手机号验证
    const validateFormphone = (rule, value, callback) => {
      let reg = /^1(3|4|5|6|7|8|9)\d{9}$/
      if (!this.formData.phone) {
        callback(new Error('请输入手机号'))
      } else if (this.formData.phone.length > 11) {
        callback(new Error('手机号长度只能为11位数字'))
      } else if (!reg.test(this.formData.phone)) {
        callback(new Error('手机号格式有误'))
      } else {
        if (
          this.mobileData
            .map(item => item.mobile)
            .indexOf(this.formData.phone) != -1
        ) {
          //验证手机号，历史手机号不需要验证码验证
          this.codeShow = false
          this.formData.code = ''
        } else {
          this.codeShow = true
        }
        callback()
      }
    }
    // 验证码验证
    const validateFormcode = (rule, value, callback) => {
      if (this.codeShow) {
        if (!this.formData.code) {
          callback(new Error('验证码不能为空'))
        } else if (this.code) {
          if (this.code == 513) {
            callback(new Error('验证码错误'))
          } else if (this.code == 501) {
            callback(new Error('请先获取验证码'))
          }
        } else {
          callback()
        }
      } else {
        callback()
      }
    }
    return {
      id: '',
      uploadUrl: uploadUrl_reissue,
      accessToken: {},
      timer: null,
      countDown: false, //60秒计时
      socend: '',
      content: '',
      purchaseInfoId:null, //修改操作时需要上传
      formData: {
        // attachIds:[],
        applicationletter: [
          // {
          //   fid:'11111111111',
          //   name: 'a42bdcc1178e62b4694c830f028db5c0',
          //   url: 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar',
          // },
          // {
          //   fid:'222222222',
          //   name: 'a42bdcc1178e62b4694c830f028db5c0',
          //   url: 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar',
          // },
        ], //申请函
        oldAnnouncementTime: '', //原公告时间
        zbdl: '', //招标代理
        bidTitle: '', //中标标题
        bidMan: '', //招标人
        biddingType: [], //招标类型
        area: [],
        industryVal: '', //行业选定的值
        industry: [], //行业
        bidopen: '', //开标时间
        bidProve: [
          // {
          //   name: 'a42bdcc1178e62b4694c830f028db5c0',
          //   url: 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar',
          // },
        ], //中标文件证明
        winBidCompany: [
          {
            ftitle: '',
            famount: '',
            funit: '',
            ftype: 2,
            forder: 1,
          },
        ],
        forder: 1, //中标公司排序
        unitData: [
          {
            value: '万元',
            label: '万元',
          },
          {
            value: '亿',
            label: '亿',
          },
          {
            value: '元',
            label: '元',
          },
          {
            value: '%',
            label: '%',
          },
        ],
        contract: '', //联系人
        phone: '',
        code: '',
      },
      industryBoxShow: false,
      areaData: [
        
      ], //地区数据
      industryData: [], //行业数据

      ruleValidate: {
        applicationletter: [
          {
            required: true,
            validator: validateApplicationletter,
            trigger: 'submit',
          },
        ],
        oldAnnouncementTime: [
          {
            required: true,
            validator: validateOldAnnouncementTime,
            trigger: 'change',
          },
        ],
        zbdl: [
          {
            required: true,
            message: '请输入招标代理',
            trigger: 'blur',
          },
        ],
        bidTitle: [
          {
            required: true,
            message: '请输入信息标题',
            trigger: 'blur',
          },
        ],
        bidMan: [
          {
            required: true,
            message: '请输入招标人',
            trigger: 'blur',
          },
        ],
        biddingType: [
          {
            required: true,
            validator: validataBiddingType,
            trigger: 'submit',
          },
        ],
        industry: [
          {
            required: true,
            validator: validateIndustry,
            trigger: 'change',
          },
        ],
        area: [
          {
            required: true,
            validator: validateArea,
            trigger: 'blur',
          },
        ],
        bidopen: [
          {
            required: false,
            validator: validateBidopen,
            trigger: 'change',
          },
        ],
        bidProve: [
          {
            required: true,
            validator: validateDidProve,
            trigger: 'change',
          },
        ],

        WinBidCompanyNameRules: {
          companyName: [
            {
              required: true,
              message: '请输入中标公司名称',
              trigger: 'blur',
            },
          ],
          unit: [
            {
              required: true,
              message: '请输入中标单位',
              trigger: 'blur',
            },
          ],
        },
        contract: [
          {
            required: true,
            message: '请输入项目经理',
            trigger: 'blur',
          },
        ],
        phone: [
          {
            required: true,
            validator: validateFormphone,
            trigger: 'blur',
          },
        ],
        code: [
          {
            required: true,
            validator: validateFormcode,
            trigger: 'blur',
          },
        ],
        bidContent: [
          {
            required: true,
            validator: validateDidContent,
            trigger: 'submit',
          },
        ],
      },

      mobileData: [
        // { name: '周鑫', phone: '13810114949' },
        // { name: '测试1', phone: '19999999655' },
      ], //历史手机号列表

      contractListShow: false, //手机号列表显示or隐藏

      codeShow: true, //验证码输入框显示or隐藏
    }
  },

  methods: {
    //选定项目经理和手机号
    selectContract(val) {
      this.formData.contract = val.name
      this.formData.phone = val.phone
      this.contractListShow = false
      this.$refs.form.validateField('contract')
      this.$refs.form.validateField('phone')
    },

    //项目经理列表显示
    contractListHandleShow() {
      if (this.mobileData.length) this.contractListShow = true
      else return
    },

    // 获取地区数据
    async getArea() {
      let res = await getArea()
     
      const _data = res.result[0]
      // _data.forEach(item => {
      //   item.value = item.fid
      //   item.label = item.fname
      //   if (item.children) {
      //     item.children.forEach(i => {
      //       i.value = i.fid
      //       i.label = i.fname
      //       if (i.children) {
      //         i.children.forEach(y => {
      //           y.value = y.fid
      //           y.label = y.fname
      //         })
      //       }
      //     })
      //   }
      // })
      this.areaData = _data.map(item => {
        return {
          value : item.fid,
          label: item.fname,
          children: item.children.map(i => {
            return {
              value : i.fid,
              label: i.fname,
              children: i.children.map(j => {
                return {
                  value : j.fid,
                  label: j.fname,
                }
              })
            }
          })
        }

      })
      // console.log(a,'aaa');
      // console.log(_data,'data');
      // this.areaData = _data

      
    },

    // 获取行业数据
    async getIndutry() {
      let res = await getIndustry()
      let arr = []
      let { result } = res
      for (let key in result) {
        arr.push({
          cid: key,
          cname: result[key],
        })
      }
      this.industryData = arr
    },

    // 获取联系人列表
    async getDefaultInfo() {
      let userId = JSON.parse(
        localStorage.getItem('userInfo')
      ).loginId
      let res = await getDefaultInfo({ loginid: userId })
      if (res.result && res.result.list.length) {
        this.mobileData = res.result.list
        this.formData.winBidCompany[0].ftitle = res.result.companyName
        this.formData.contract = res.result.list[0].ccontact
        this.formData.phone = res.result.list[0].mobile
        this.$refs.form.validateField('phone')
      }
     

      // console.log(res.result.list, '手机号')
    },

    async handleRemove(file, fileList, type) {
      let res = await delete_File({ id: file.response.result.id })
      if (res.code == 200) {
        this.$Message.success('删除文件成功')
        // if (type == 1) {
        //   this.$refs.letter.fileList.splice(
        //     this.$refs.letter.fileList(file),
        //     1
        //   )
        // } else {
        //   this.$refs.bidProve.fileList.splice(
        //     this.$refs.bidProve.fileList(file),
        //     1
        //   )
        // }
      }
      
    },

    // 申请函下载
    downloadApplicationletter() {
      var a = document.createElement('a') // 创建一个<a></a>标签
        a.href = '/static/中国采购与招标网中标业绩补发申请函.docx' 
        a.download = '补发申请函' // 设置下载文件文件名
        a.style.display = 'none' // 隐藏a标签
        document.body.appendChild(a) // 将a标签追加到文档对象中
        a.click() // 模拟点击了a标签，会触发a标签的href的读取，浏览器就会自动下载了
        a.remove() // 一次性的，用完就删除a标签
    },

    //申请函文件上传之前钩子
    HandleBeforeUpload() {
      const check = this.$refs.letter.fileList.length < 3
      if (!check) {
        this.$Message.warning('申请函最多不能超过3个')
      }
      return check
    },

    // 中标证明文件上传钩子
    bidProveHandleBeforeUpload() {
      const check = this.$refs.bidProve.fileList.length < 5
      if (!check) {
        this.$Message.warning('中标证明文件最多不超过5个')
      }
      return check

    },

    handleMaxSize(file) {
      this.$Message.warning(
        '单个文件不能超出30MB，您可以压缩上传或分开上传'
      )
    },

    bidDocError() {
      this.$Message.warning('不支持的文件格式')
    },

    //上传成功钩子
    bidDocSuccess(res, file, fileList, type) {
      console.log(res, 'res')
      if (res.code == 200) {
        this.$Message.success('上传成功')
        console.log(this.$refs.letter.fileList,'33333333');
        // if (type == 1) {
        //   this.formData.applicationletter.push(res.result)
        //   console.log(this.formData.applicationletter,'22222222');
        // } else {
        //   this.formData.bidProve.push(res.result)
        // }
        // this.formData.attachIds.push(res.result.fid)
      } else {
        this.$Message.warning(res.message)
      }
    },

    // 行业选择
    selecteIndustry(val) {
      if (val.length > 3) {
        this.formData.industry.pop()
      }
    },

    //行业重置
    reset() {
      this.formData.industry = []
      this.formData.industryVal = ''
    },

    //行业确定
    enter() {
      this.industryBoxShow = false
      let arr = this.formData.industry.map(item => {
        let name = ''
        this.industryData.forEach(i => {
          if (item == i.cid) {
            name = i.cname
          }
        })
        return {
          cid: item,
          cname: name,
        }
      })
      this.formData.industryVal = arr
        .map(item => {
          return item.cname
        })
        .join('/')
    },

    //选择开标时间
    selectBidopen(val) {
      this.formData.bidopen = val
    },

    // 选择原公告时间
    selectOldAnnouncementTime(val) {
      this.formData.oldAnnouncementTime = val
    },

    // 处理行业回显
    echoIndustry() {
      if (this.industryData.length) {
        let arr = this.formData.industry.map(item => {
          let name = ''
          this.industryData.forEach(i => {
            if (item == i.cid) {
              name = i.cname
            }
          })
          return {
            cid: item,
            cname: name,
          }
        })
        this.formData.industryVal = arr
          .map(item => {
            return item.cname
          })
          .join('/')
      }
    },

    // 提交信息
    sureSubmit(type) {
      // console.log(this.formData.oldAnnouncementTime);
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log(this.formData,);
          let form = {
            PublicityTime: new Date(this.formData.oldAnnouncementTime).getTime(),
            BiddingAgency: this.formData.zbdl,
            title: this.formData.bidTitle,
            bidder: this.formData.bidMan,
            biddingType: this.formData.biddingType.join(','),
            industry: this.formData.industry
            .map(item => {
              return item
            })
            .join(','),
            provice: this.formData.area[0],
            city: this.formData.area[1],
            county: this.formData.area[2],
            status: type,
            openBidTime:this.formData.bidopen ?new Date(this.formData.bidopen).getTime():'',
            companyName: this.formData.winBidCompany[0].ftitle,
            amount: this.formData.winBidCompany[0].famount,
            unit: this.formData.winBidCompany[0].funit,
            contact: this.formData.contract,
            mobile: this.formData.phone,
            code: this.formData.code,
            content: this.content,
          }
          console.log(form,'form');
          if (this.$route.query.fid) {
            form.id = this.$route.query.fid
            form.purchaseInfoId = this.purchaseInfoId
            form.attachIds=this.$refs.letter.fileList.concat(this.$refs.bidProve.fileList).map(item =>item.fid).join(',')
          } else {
            form.attachIds=this.$refs.letter.fileList.concat(this.$refs.bidProve.fileList).map(item =>  item.response.result.id).join(',')
          }
          console.log(form, 'form');
         this.save(form,type) 
        } else {
          console.log(11111)
        }
      })
    },

    // 调提交接口
    async save(form,type) {
      let res = await save(form)
      console.log(res,'res');
      if (res.code == 200) {
        if (type == -1) {
          this.$Message.success('提交成功')  
          window.open('https://www.chinabidding.cn/public/bidagency/index.html#/infoDetails?fid='+ res.result + '&type=1')   
        } else {
          this.$Message.success('提交成功')  
          this.$router.push('/supplier/infoManagement')
        } 
      } else {
      this.$Message.warning(res.message)  
      }
    },

    // 回显文件
    echoFIle(data) {
      // let newArr = data.map(item => {
      //   return {
      //     fid: item.id,
      //     name: item.fileName,
      //     url:item.filePath
      //   }  
      // })

      // console.log(newArr,'arr');

      data.forEach(item => {
        if (item.fileType == 403) {
          console.log(item,'403');
          this.formData.applicationletter.push({
            fid: item.id,
            name: item.fileName,
            url:item.filePath
          })
        } else {
          console.log(item,'404');

          this.formData.bidProve.push({
            fid: item.id,
            name: item.fileName,
            url:item.filePath
         })

        }
      })
    },

    // 回显信息
    echoInfo(data) {
      let { Attach, PurchaseInfo, info } = data
      this.formData.oldAnnouncementTime = moment(new Date(info.publicityTime).getTime()).format('YYYY-MM-DD HH:mm:ss')
      this.formData.zbdl = info.biddingAgency
      this.formData.bidTitle = info.title
      this.formData.bidMan = info.bidder
      this.formData.biddingType = info.biddingType.split(',')
      this.formData.industry = info.industry.split(',')
      this.echoIndustry()
      this.formData.area = [info.provice,info.city,info.county]
      this.purchaseInfoId = PurchaseInfo[0].id
      this.formData.bidopen = moment(new Date(info.openBidTime).getTime()).format('YYYY-MM-DD HH:mm:ss')
      this.formData.winBidCompany[0].ftitle = PurchaseInfo[0].title
      this.formData.winBidCompany[0].famount = PurchaseInfo[0].amount
      this.formData.winBidCompany[0].funit = PurchaseInfo[0].unit
      this.formData.contract = info.contact
      this.formData.phone = info.mobile
      this.content = info.content
      this.echoFIle(Attach)
    },

    // 修改时回显信息接口
    async getEchoInfo(id) {
      let res = await getEchoInfo({ id })
      if (res.code == 200) {
        this.echoInfo(res.result)
      }
    },
    // initVaptcha() {
    //   let that = this;
    //   vaptcha({
    //     //配置参数
    //     vid: vaptchaID, // 验证单元id
    //     type: "invisible", // 展现类型 隐藏式
    //     offline_server: "你的离线验证接口地址 可选但此处不能为空"
    //   }).then(function(vaptchaObj) {
    //     vaptchaObject = vaptchaObj;
    //     vaptchaObj.listen("pass", function() {
    //       that.form.token = vaptchaObj.getToken();
    //       // 验证成功 发送验证码
    //       that.getCode();
    //     });
    //   });
    // },

    // 获取验证码
    getCode() {
      this.$refs.form.validateField('phone', async valid => {
        if (!valid) {
          const res = await getMessage(this.formData.phone, {})
          console.log(res)
          if (res.code == 200) {
            this.$Message.success('验证码发送成功')
            this.socend = 60
            this.countDown = true
            this.timer = setInterval(() => {
              this.socend--
              if (this.socend == 0) {
                clearInterval(this.timer)
                this.countDown = false
                // this.code = 0
              }
            }, 1000)
          } else {
            Message.warning(res.data.msg)
          }
        }
      })
    },
  },
  created() {
    this.accessToken = {
      accessToken: this.getStore('accessToken'),
    }
  },

  mounted() {
    this.getArea()
    this.getIndutry()
    this.getDefaultInfo()
    if (this.$route.query.fid) this.getEchoInfo(this.$route.query.fid)
    
  },
}
</script>

<style lang="less" scoped>
.reissueTheBid {
  background-color: #fff;
  padding: 21px 24px 80px 24px;

  .title {
    font-size: 20px;
    padding-left: 11px;
    color: rgba(51, 51, 51, 1);
    position: relative;
    margin-bottom: 34px;
  }

  .title::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 0;
    width: 3px;
    height: 20px;
    background-color: #2d6eff;
    border-radius: 15px;
  }

  .form {
    display: flex;
    justify-content: space-between;
    // margin-bottom: 20px;
    /deep/ .ivu-form-item-content {
      margin-left: 138px !important;
    }

    /deep/ .ivu-input-wrapper {
      max-width: 420px;
    }

    /deep/ .ivu-form-item {
      margin-bottom: 20px;
    }

    /deep/ .ivu-form-item-error-tip {
      top: 96%;
      font-size: 12px;
    }

    /deep/ .ivu-form-item-label {
      font-size: 14px;
      color: #333;
      font-weight: 700;
      min-width: 114px;
    }

    /deep/ .ivu-form-item.count {
      .ivu-form-item-label {
        min-width: 70px;
      }
    }

    /deep/ .ivu-cascader {
      max-width: 420px;
    }

    /deep/ .ivu-date-picker {
      width: 100%;
    }

    /deep/ .ivu-input {
      max-width: 420px;
      height: 40px;
      border-radius: 2px;
      border: 1px solid #dcdee2;
    }
    .left {
      width: 50%;
      // margin-right: 78px;
      // 申请函
      /deep/ .ivu-form-item.applicationletter {
        .ivu-form-item-content {
          .inner {
            display: flex;

            .download {
              cursor: pointer;
              margin-right: 40px;
              img {
                vertical-align: middle;
                margin-right: 8px;
              }
              span {
                vertical-align: middle;
                font-size: 14px;
              }
            }
          }

          .tips {
            font-size: 12px;
            color: rgba(153, 153, 153, 1);
            line-height: 1;
            white-space: nowrap;
          }

          .ivu-btn {
            height: 40px;
            line-height: 40px;
            width: 180px;
          }

          .ivu-upload {
            width: 250px;
          }

          // .ivu-upload-list-file {
          //   display: flex;
          //   // justify-content: space-between;
          //   span {
          //     display: flex;
          //     align-items: center;
          //     width: 230px;
          //     overflow: hidden;
          //     text-overflow: ellipsis;
          //     white-space:normal i {
          //       margin-right: 10px;
          //     }
          //   }
          // }
        }
      }

      // 招标类型
      /deep/ .biddingType.ivu-form-item {
        /deep/ .ivu-checkbox-group-item {
          font-size: 14px;
          margin-right: 40px;
        }
        /deep/ .ivu-checkbox {
          margin-right: 14px;
        }
         .ivu-checkbox-wrapper{
          margin-right: 10%;
        }
        /deep/ .ivu-checkbox-wrapper-checked {
          color: #5489ff;
        }
      }

      // 地区
      /deep/ .area.ivu-form-item {
        .ivu-icon {
          // right: 20px;
          font-size: 16px;
        }
      }

      // 行业
      .industry.ivu-form-item {
        position: relative;

        // /deep/ .ivu-input {
        //   width: 420px !important;
        // }
        // /deep/ .ivu-input-wrapper {
        //   width: 420px !important;
        // }
        /deep/ .ivu-icon {
          line-height: 42px !important;
          color:#808695;
        }
        .industryBox {
          position: absolute;
          top: 42px;
          z-index: 99999;
          background-color: #fff;
          box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);
          // padding: 10px 30px;
          width: 420px;
          height: 250px;
          .inner {
            padding: 10px 0;
            overflow-y: scroll;
            .content {
              width: 390px;
              margin: 0 auto;
              height: 160px;
              display: flex;
              flex-wrap: wrap;
              border-radius: 2px;
              /deep/ .ivu-checkbox-group {
                height: 35px;
              }
              /deep/ .ivu-checkbox-wrapper {
                min-width: 122px !important;
              }
              span {
                font-size: 14px !important;
              }
            }
          }
          .inner::-webkit-scrollbar {
            /*滚动条整体样式*/
            width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
            height: 10px !important;
          }
          .inner::-webkit-scrollbar-thumb {
            /*滚动条里面小方块*/
            height: 20px !important;
            border-radius: 10px;
            background-color: #dce1e5;
          }
          .btnGroup {
            padding-left: 13px;
            padding-top: 20px;
            font-size: 14px;
            .ivu-btn {
              width: 55px;
              height: 32px;
              font-size: 14px;
            }
            span {
              margin-right: 93px;
              color: #999;
            }
            .reset {
              margin-right: 25px;
            }
            .reset:hover {
              margin-right: 25px;
            }
          }
        }
        .module {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 99998;
        }
      }
    }

    .right {
      width: 50%;

      // 中标证明文件
      /deep/ .ivu-form-item.bidProve {
        .ivu-form-item-content {
          .ivu-upload {
            display: flex;
            align-items: center;
          }

          .ivu-upload-list {
            margin-top: 0px;
          }
          .tips {
            font-size: 12px;
            color: rgba(153, 153, 153, 1);
            line-height: 1;
            margin-top: 8px;
          }

          .ivu-btn {
            height: 40px;
            line-height: 40px;
            width: 180px;
          }
        }
      }

      //中标公司
      .winBidCompany.ivu-form-item {
        position: relative;
        .winBidCompanyList {
          display: flex;
          position: relative;
          .mask {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 899;
          }
          .CompanyList {
            position: absolute;
            left: 0px;
            top: 40px;
            width: 420px;
            max-height: 210px;
            overflow: auto;
            margin: 5px 0;
            padding: 5px 0;
            background-color: #fff;
            box-sizing: border-box;
            padding: 10px 0px;
            font-size: 14px;
            border-radius: 4px;
            box-shadow: 0 2px 7px rgba(0, 0, 0, 0.2);
            z-index: 900;
            li {
              padding: 0px 20px;
              line-height: 40px;
              cursor: pointer;
            }
            li:hover {
              background-color: #f3f3f3;
              // color: #5489ff;
            }
          }
          /deep/ .ivu-form-item {
            width: 100px !important;
            margin-right: 40px;
            margin-bottom: 0px !important;
            .ivu-input {
              width: 100% !important;
            }
            .ivu-input-wrapper {
              width: 100% !important;
            }
          }
          /deep/ .ivu-form-item.companyName {
            width: 30% !important;
            .ivu-input {
              // width: 300px !important;
            }
            .ivu-input-wrapper {
              // width: 300px;
            }
          }
          /deep/ .ivu-form-item.count {
            display: flex;
            width: 30% !important;
            margin-right: 10px !important;
            .ivu-form-item-label {
              width: 60px !important;
              line-height: 24px;
            }
            .ivu-form-item-content {
              // width: 120px;
            }
            .ivu-input-wrapper {
              // width: 120px !important;
            }
            .ivu-input {
              // width: 120px !important;
            }
            .ivu-input-wrapper {
              // width: 200px;
            }
          }
          /deep/ .ivu-form-item.units {
            width: 10% !important;
            .ivu-select-selection {
              height: 40px;
            }

            .ivu-select-placeholder {
              height: 40px !important;
              line-height: 40px !important;
              font-size: 14px !important;
            }

            .ivu-form-item-error-tip {
              padding-top: 11px !important;
            }

            .ivu-select-selected-value {
              height: 40px !important;
              line-height: 40px !important;
              font-size: 14px !important;
            }
            .ivu-select-item {
              font-size: 14px !important;
            }
          }
          /deep/ .ivu-form-item-content {
            margin: 0px !important;
          }
          /deep/ .ivu-btn {
            height: 40px;
            font-size: 14px;
            cursor: pointer;
          }
        }
        .vliad {
          position: absolute;
          left: -103px;
          top: 4px;
          z-index: 99;
          color: red;
          font-size: 18px;
          font-weight: 700;
        }
      }

      .Tooltip.ivu-form-item {
        position: relative;
        /deep/ .ivu-tooltip {
          position: absolute;
          top: 2px;
          left: -32px;
        }
        /deep/ .ivu-tooltip-inner {
          max-width: none;
        }

        /deep/ .ivu-form-item-content {
          position: relative;
          .mask {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 899;
          }
          .contractList {
            position: absolute;
            left: 0px;
            top: 40px;
            width: 420px;
            max-height: 210px;
            overflow: auto;
            margin: 5px 0;
            padding: 5px 0;
            background-color: #fff;
            box-sizing: border-box;
            padding: 10px 0px;
            font-size: 14px;
            border-radius: 4px;
            box-shadow: 0 2px 7px rgba(0, 0, 0, 0.2);
            z-index: 900;
            li {
              padding: 0px 20px;
              line-height: 40px;
              cursor: pointer;
            }
            li:hover {
              background-color: #f3f3f3;
              // color: #5489ff;
            }
          }
          .contractList::-webkit-scrollbar {
            /*滚动条整体样式*/
            width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
            height: 10px !important;
          }
          .contractList::-webkit-scrollbar-thumb {
            /*滚动条里面小方块*/
            height: 20px !important;
            border-radius: 10px;
            background-color: #dce1e5;
          }
        }
      }

      .formphone.ivu-form-item {
        /deep/ .ivu-form-item-content {
          max-width: 420px;
          display: flex;
        }
        /deep/ .ivu-icon {
          width: 40px !important;
          height: 40px !important;
          line-height: 40px !important;
        }
        // .phonetel {
        // }
        .phonecode {
          width: 300px;
        }
        /deep/ .ivu-input {
          width: 100% !important;
        }

        /deep/ .btnGrop {
          // width: 112px;
          margin-left: 8px;
        }

        .getcode {
          width: 112px;
          height: 40px;
          line-height: 28px;
          color: #5489ff;
          font-size: 14px;
        }
        .countDown {
          width: 132px;
        }
      }

      // .forminpsel {
      //   width: 100%;
      //   /deep/ .ivu-input-wrapper {
      //     // width: 420px;
      //   }
      // }

      .bidContent.ivu-form-item {
        /deep/ .ivu-form-item-error-tip {
          top: 100%;
          font-size: 12px;
        }
      }
    }
  }

  .btnGroup {
    text-align: center;
    /deep/ .ivu-btn {
      width: 128px;
      height: 47px;
      font-size: 16px;
    }

    /deep/ .ivu-btn-ghost {
      margin-right: 34px;
      color: rgba(63, 110, 245, 1);
    }

    /deep/ .ivu-btn-primary {
      background: rgba(63, 110, 245, 1);
    }
  }
}
</style>
<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type='number'] {
  -moz-appearance: textfield;
}
</style>