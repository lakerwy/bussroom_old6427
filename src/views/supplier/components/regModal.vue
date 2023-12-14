<template>
  <div class="bidFormeModal">
    <Modal
      class="regOnline"
      :transfer="false"
      title="在线报名"
      v-model="modal"
      :width="600"
      :footer-hide="true"
      mask-closable
      @on-cancel="close"
    >
      <span class="hearderTip">报名须知：报名信息务必真实，以便及时联系</span>
      <Form
        :model="formData"
        :label-width="80"
        ref="formData"
        :rules="ruleValidate"
      >
        <div class="setup1" v-show="!setup">
          <!-- 公司名称 -->
          <FormItem
            v-if="enterData.indexOf('1') != -1"
            class="companyName"
            label="公司名称"
            prop="companyName"
          >
            <Input
              v-model="formData.companyName"
              :disabled="disabled"
              placeholder="请输入公司名称"
            ></Input>
          </FormItem>
          <!-- 公司所在地 -->
          <FormItem
            v-if="enterData.indexOf('2') != -1"
            class="companyAddress"
            label="公司所在地"
            prop="companyAddress"
          >
            <Cascader
              :data="areaData"
              :disabled="disabled"
              v-model="formData.companyAddress"
            ></Cascader>
          </FormItem>
          <!-- 所属行业 -->
          <FormItem
            class="Industry"
            label="所属行业"
            prop="Industry"
            v-if="enterData.indexOf('3') != -1"
          >
            <Cascader
              :data="IndustryData"
              :disabled="disabled"
              v-model="formData.Industry"
            ></Cascader>
          </FormItem>
          <!-- 主营业务 -->
          <FormItem
            class="mainBusiness"
            label="主营业务"
            prop="mainBusiness"
            v-if="enterData.indexOf('10') != -1"
          >
            <ul>
              <li
                v-for="(item, index) in mainBusinessList"
                :key="index"
                @mouseenter="item.mouse = true"
                @mouseleave="item.mouse = false"
                :style="
                  mainBusinessList.length > 2 ? { marginBottom: '15px' } : ''
                "
              >
                <div v-if="item.edit">
                  <span @click="editCurrent(index, item.name)">{{
                    item.name
                  }}</span>
                  <Icon
                    type="md-close"
                    size="16"
                    v-show="item.mouse"
                    @click="deleteMainBusiness(index, item.name)"
                  />
                  <span></span>
                </div>
                <Input
                  v-else
                  ref="input"
                  type="text"
                  :maxlength="10"
                  v-model="item.name"
                  @on-blur="editFinished(index)"
                />
              </li>
              <div
                v-show="mainBusinessList.length <= 14"
                class="add"
                @click="addMainBusiness"
              >
                <Icon type="md-add" :size="18" />
              </div>
            </ul>
          </FormItem>
          <!-- 注册资金 -->
          <FormItem
            class="registeredFund"
            label="注册资金"
            prop="registeredFund"
            v-if="enterData.indexOf('4') != -1"
          >
            <Input
              type="number"
              v-model="formData.registeredFund"
              placeholder="请输入注册资金，如1000"
            ></Input>
          </FormItem>
          <!-- 成立时间 -->
          <FormItem
            class="publicTime"
            label="成立时间"
            prop="publicTime"
            v-if="enterData.indexOf('5') != -1"
          >
            <template>
              <DatePicker
                type="date"
                :value="formData.publicTime"
                placeholder="请选择成立时间"
                :options="publicTimeOption"
                style="width: 352px"
                @on-change="changePublicDate"
              ></DatePicker>
            </template>
          </FormItem>
          <!-- 公司规模 -->
          <FormItem
            class="companyScale"
            label="公司规模"
            prop="companyScale"
            v-if="enterData.indexOf('6') != -1"
          >
            <Select
              style="width: 200px"
              placeholder="请选择公司规模"
              v-model="formData.companyScale.value"
            >
              <Option
                v-for="item in companyScale"
                :value="item.value"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
          <!-- 经营模式 -->
          <FormItem
            class="companyScale"
            label="经营模式"
            prop="businessModel"
            v-if="enterData.indexOf('7') != -1"
          >
            <Select
              style="width: 200px"
              v-model="formData.businessModel.value"
              placeholder="请选择公司经营模式"
            >
              <Option
                v-for="item in businessModelList"
                :value="item.value"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
          <!-- 公司法人 -->
          <FormItem
            class="registeredFund"
            label="公司法人"
            prop="legalPerson"
            v-if="enterData.indexOf('8') != -1"
          >
            <Input
              v-model="formData.legalPerson"
              placeholder="请输入公司法人姓名 "
            ></Input>
          </FormItem>

          <!-- 营业执照 -->
          <FormItem
            class="businessLicense"
            label="营业执照"
            prop="businessLicense"
            v-if="enterData.indexOf('11') != -1"
          >
            <div class="uploadList">
              <Upload
                ref="businessLicenseUpload"
                :show-upload-list="false"
                :on-success="businessLicensehandleSuccess"
                :format="['jpg', 'jpeg', 'png']"
                :max-size="5120"
                :on-format-error="handleFormatError"
                :on-exceeded-size="handleMaxSize"
                multiple
                type="drag"
                :action="this.uploadUrl"
                style="display: inline-block; width: 58px"
              >
                <div style="width: 58px; height: 58px; line-height: 58px">
                  <Icon type="md-add" size="47" style="color: #d2d2d2"></Icon>
                  <span>上传</span>
                </div>
              </Upload>
              <div
                class="demo-upload-list"
                v-for="(item, index) in businessLicenseUploadList"
                :key="index"
              >
                <template>
                  <div class="imgbox">
                    <img :src="item.url" />
                  </div>
                  <div class="demo-upload-list-cover">
                    <Icon
                      type="ios-eye-outline"
                      @click="handleView(item.url)"
                    ></Icon>
                  </div>
                  <Icon
                    type="ios-close-circle"
                    style="color: #a4a3a3"
                    size="15"
                    @click="businessLicensehandleRemove(item)"
                  ></Icon>
                </template>
              </div>
            </div>
            <p class="tips">
              支持<span class="red">JPG、JPEG、PNG</span>格式大小不超过<span
                class="red"
                >5M</span
              >
            </p>
          </FormItem>
          <!-- 其他资质证书或特许经营许可证 -->
          <FormItem
            class="businessLicense otherCertificates"
            label="其他资质证书或特许经营许可证"
            v-if="enterData.indexOf('12') != -1"
            prop="otherCertificates"
          >
            <div class="uploadList">
              <Upload
                ref="otherCertificatesUpload"
                :show-upload-list="false"
                :on-success="otherCertificateshandleSuccess"
                :format="['jpg', 'jpeg', 'png']"
                :max-size="5120"
                :before-upload="otherCertificatesHandleBeforeUpload"
                :on-format-error="handleFormatError"
                :on-exceeded-size="handleMaxSize"
                multiple
                type="drag"
                :action="this.uploadUrl"
                style="display: inline-block; width: 58px"
              >
                <div style="width: 58px; height: 58px; line-height: 58px">
                  <Icon type="md-add" size="47" style="color: #d2d2d2"></Icon>
                  <span>上传</span>
                </div>
              </Upload>
              <div
                class="demo-upload-list"
                :style="
                  otherCertificatesList.length > 3
                    ? { marginBottom: '10px' }
                    : ''
                "
                v-for="(item, index) in otherCertificatesList"
                :key="index"
              >
                <template>
                  <div class="imgbox"><img :src="item.url" /></div>
                  <div class="demo-upload-list-cover">
                    <Icon
                      type="ios-eye-outline"
                      @click="handleView(item.url)"
                    ></Icon>
                  </div>
                  <Icon
                    type="ios-close-circle"
                    style="color: #a4a3a3"
                    size="15"
                    @click="otherCertificateshandleRemove(item)"
                  ></Icon>
                </template>
              </div>
            </div>
            <p class="tips">
              支持<span class="red">JPG、JPEG、PNG</span>格式大小不超过<span
                class="red"
                >5M</span
              >
            </p>
          </FormItem>

          <!-- 公司介绍 -->
          <FormItem
            class="companyDesc"
            label="公司介绍"
            prop="desc"
            v-if="enterData.indexOf('9') != -1"
          >
            <Input
              v-model="formData.desc"
              type="textarea"
              placeholder="请输入公司介绍"
              :maxlength="300"
            ></Input>
            <p class="remainLength">
              <span>{{ formData.desc.length }}</span>
              <span>/</span>
              <span>300</span>
            </p>
          </FormItem>
          <FormItem class="submit">
            <Button type="primary" @click="setup = true">下一步1/2</Button>
          </FormItem>
        </div>

        <div class="setup2" v-show="setup">
          <!-- 联系人 -->
          <FormItem class="companyName" label="联系人" prop="contacts">
            <Input
              v-model="formData.contacts"
              placeholder="请输入联系人"
            ></Input>
          </FormItem>
          <!-- 职位 -->
          <FormItem class="companyName" label="职位" prop="job">
            <Input v-model="formData.job" placeholder="请输入您的职位"></Input>
          </FormItem>
          <!-- 手机号 -->
          <FormItem class="companyName" label="手机号" prop="call">
            <Input
              type="number"
              v-model="formData.call"
              placeholder="请输入您的手机号"
            ></Input>
          </FormItem>

          <!-- 邮箱 -->
          <FormItem class="companyName" label="邮箱" prop="email">
            <Input
              type="email"
              v-model="formData.email"
              placeholder="请输入您的邮箱"
            ></Input>
          </FormItem>
          <!-- 提交按钮 -->
          <FormItem class="submit">
            <Button type="primary" class="prv" @click="setup = false"
              >上一步</Button
            >
            <Button type="primary" @click="handleSubmit('formData')"
              >确认提交</Button
            >
          </FormItem>
        </div>
      </Form>
    </Modal>
  </div>
</template>

<script>
import testImportJson from '../static/area.json'
import { uploadUrl, getEnterInfo, saveEnterInfo } from '@/api/index.js'

export default {
  props: {
    currentindex: {
      Object: Number,
    }
  },
  data() {
    const validateCompanyName = async (rule, value, callback) => {
      var reg = new RegExp('^[\u4E00-\u9FFF]+$')
      if (value === '') {
        callback(new Error('请输入公司名称'));
      } else if (value.length > 30 || value.length < 2) {
        callback(new Error('公司名称不少于2个字符，不多于30个字符'));
      }
      else if (!reg.test(value)) {
        callback(new Error('公司名称只能为汉字'));
      } else {
        callback()
      }
    }

    //公司所在地验证规则
    const validateCompanyAddress = (rule, value, callback) => {
      if (!this.formData.companyAddress.length) {
        callback(new Error('请选择公司所在地'));
      } else {
        callback();
      }
    }

    // 发布时间验证规则
    const validatepublicTime = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请选择成立时间'));
      } else {
        callback();
      }
    }
    // 公司规模验证规则
    const validateCompanyScale = (rule, value, callback) => {
      if (!this.formData.companyScale.value) {
        callback(new Error('请选择公司规模'));
      } else {
        callback();
      }
    }
    // 经营模式验证规则
    const validateBusinessModel = (rule, value, callback) => {
      if (!this.formData.businessModel.value) {
        callback(new Error('请选择经营模式'));
      } else {
        callback();
      }
    }
    // 所属行业验证规则
    const validateIndustry = (rule, value, callback) => {
      console.log(value, 'vbalue');
      if (this.formData.Industry.length == 0) {
        callback(new Error('请选择所属行业'));
      } else {
        callback();
      }
    }
    // 免责声明验证规则
    const validateAgree = (rule, value, callback) => {
      if (!this.formData.agree) {
        callback(new Error('请勾选免责声明'));
      } else {
        callback();
      }
    }

    // // 营业制造验证规则
    const validateBusinessLicense = (rule, value, callback) => {
      console.log(this.businessLicenseUploadList, 'value营业执照');
      if (this.businessLicenseUploadList.length == 0) {
        callback(new Error('请上传营业执照'));
      } else {
        callback();
      }
    }

    // // 其他证书验证规则
    const validateOtherCertificates = (rule, value, callback) => {
      // console.log(this.otherCertificates);
      if (this.otherCertificatesList.length == 0) {
        callback(new Error('请上传其他证书'));
      } else {
        callback();
      }
    }


    // 主营业务验证规则
    const validateMainBusiness = (rule, value, callback) => {
      if (!this.formData.mainBusiness.length) {
        callback(new Error('请添加主营业务'));
      } else {
        callback();
      }
    }
    // 注册资金验证规则
    const validateRegisteredFund = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入注册资金'));
      } else {
        callback();
      }
    }
    // 公司法人验证规则
    const validatelegalPerson = (rule, value, callback) => {
      let reg = /[\u4e00-\u9fa5a-zA-Z]/
      if (!value) {
        callback();
      }
      else if (!reg.test(value)) {
        callback(new Error('公司法人只能为中英文字符，不包含特殊字符'));
      } else if (value.length > 15 || value.length < 2) {
        callback(new Error('公司法人不少于2个字符，不多于15个字符'));
      } else {
        callback();
      }
    }
    // 职位规则验证
    const validateJob = (rule, value, callback) => {
      let reg = /[\u4e00-\u9fa5a-zA-Z]/
      if (!value) {
        callback(new Error('请输入职位'));

      } else if (!reg.test(value)) {
        callback(new Error('职位只能为中英文字符，不包含特殊字符'));
      } else if (value.length > 15 || value.length < 2) {
        callback(new Error('职位不少于2个字符，不多于15个字符'));
      }
      else {
        callback();
      }
    }

    // 邮箱验证规则
    const validateEmail = (rule, value, callback) => {
      let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if (!value) {
        callback(new Error('请输入您的邮箱'));

      } else if (!reg.test(value)) {
        callback(new Error('邮箱格式有误'));
      } else {
        callback();

      }
    }

    // 手机号验证规则
    const validateCall = (rule, value, callback) => {
      let reg = /^1(3|4|5|7|8)\d{9}$/
      if (!value) {
        callback(new Error('请输入手机号'));
      } else if (value.length > 11) {
        callback(new Error('手机号长度只能为11位数字'));
      } else if (!reg.test(value)) {
        callback(new Error('手机号格式有误'));
      }
      else {
        callback();
      }
    }


    return {
      modal: false,
      infoId: 0,       //当前信息的id
      // currentindex: 0,   //当前信息在父组件信息列表的索引
      //成立时间禁用超过当前日期的时间规则
      publicTimeOption: {
        disabledDate(date) {
          return date && date.valueOf() > Date.now();
        }
      },

      formData: {
        logo: '',               //logo
        companyName: '',        //公司名称
        companyAddress: [],     //公司所在地
        Industry: [],   //所属行业
        registeredAddress: '',  //注册地址
        registeredFund: '',      //注册资金
        publicTime: '',         //成立时间
        companyScale: {         //公司规模
          value: 0,
          label: ''
        },
        businessModel: {     //经营模式
          value: 0,
          label: ''
        },
        legalPerson: '',          //公司法人
        businessLicense: '',    //营业执照
        otherCertificates: '',   //其他证书
        // corporateEnvironment: '', //公司环境
        desc: '',      //公司介绍
        mainBusiness: [], //主营业务
        contacts: '',  //联系人
        job: '',       //职位
        call: '',      //手机号
        callcode: '',  //验证码
        email: '',     //邮箱
        agree: false,   //勾选协议
      },

      enterData: '1,2,3,4,5,6,7,8,9,10,11,12',

      setup: false,   //下一步

      uploadUrl, //上传图片的地址

      // 省份
      //地区数据
      areaData: [],

      inputVal: '',   //主营业务输入文字缓存
      // 公司规模数据
      companyScale: [
        {
          value: 101,
          label: '0-20人'
        },
        {
          value: 102,
          label: '20-99人'
        },
        {
          value: 103,
          label: '100-499人'
        },
        {
          value: 104,
          label: '500-999人'
        },
        {
          value: 105,
          label: '1000-9999人'
        },
        {
          value: 106,
          label: '10000人以上'
        },
      ],

      // 所属行业级联选择数据
      IndustryData: [
        {
          value: "化工",
          label: "化工",
          children: [
            {
              value: "化工废料",
              label: "化工废料",
              children: [
                {
                  value: "废塑料",
                  label: "废塑料"
                },
                {
                  value: "电石渣",
                  label: "电石渣"
                }
              ]
            },
            {
              value: "化工机械",
              label: "化工机械",
              children: [
                {
                  value: "废机械",
                  label: "废机械"
                },
                {
                  value: "废铁皮",
                  label: "废铁皮"
                }
              ]
            }
          ]
        },
        {
          value: "建筑建材",
          label: "建筑建材",
          children: [
            {
              value: "工程建筑",
              label: "工程建筑",
              children: [
                {
                  value: "公寓",
                  label: "公寓",
                },
                {
                  value: "写字楼",
                  label: "写字楼",
                }
              ]
            },
            {
              value: "建材",
              label: "建材",
              children: [
                {
                  value: "商砼",
                  label: "商砼",
                },
                {
                  value: "水泥",
                  label: "水泥",
                }
              ]
            }
          ]
        }
      ],

      //经营模式下拉选择数据
      businessModelList: [
        {
          value: 201,
          label: '生产型'
        },
        {
          value: 202,
          label: '贸易型'
        },
        {
          value: 203,
          label: '服务型'
        },
        {
          value: 204,
          label: '经销批发'
        },
        {
          value: 205,
          label: '招商代理'
        },
        {
          value: 206,
          label: '政府机构'
        },
        {
          value: 207,
          label: '其他'
        },
      ],

      // 营业执照
      businessLicenseUploadList: [

      ],


      // 其他证书
      otherCertificatesList: [

      ],
      // 公司环境
      corporateEnvironmentList: [

      ],
      isShow: false,
      // 主营业务
      mainBusinessList: [
        {
          name: '如面包机', edit: true, mouse: false
        },
        {
          name: '如包子机', edit: true, mouse: false
        },
        {
          name: '如月饼机', edit: true, mouse: false
        },
      ],

      defaultMainBusinessList: [
        {
          name: '如面包机', edit: true, mouse: false
        },
        {
          name: '如包子机', edit: true, mouse: false
        },
        {
          name: '如月饼机', edit: true, mouse: false
        },
      ],

      ruleValidate: {
        companyName: [
          { required: true, validator: validateCompanyName, trigger: 'blur' }
        ],
        companyAddress: [
          { required: true, validator: validateCompanyAddress, trigger: 'change' }
        ],
        Industry: [
          { required: true, validator: validateIndustry, trigger: 'change' }
        ],
        detailedAddress: [
          { required: true, message: '请输入注册地址', trigger: 'blur' }
        ],
        registeredFund: [
          { required: true, validator: validateRegisteredFund, trigger: 'blur' }
        ],
        publicTime: [
          { required: true, validator: validatepublicTime, trigger: 'blur' }
        ],
        companyScale: [
          { required: true, validator: validateCompanyScale, trigger: 'change' }
        ],
        businessModel: [
          { required: true, validator: validateBusinessModel, trigger: 'change' }
        ],
        businessLicense: [
          { required: true, validator: validateBusinessLicense, trigger: 'blur' }
        ],
        otherCertificates: [
          { required: true, validator: validateOtherCertificates, trigger: 'blur' }
        ],
        legalPerson: [
          { required: true, validator: validatelegalPerson, trigger: 'blur' }
        ],
        mainBusiness: [
          { required: true, validator: validateMainBusiness, trigger: 'blur' }
        ],

        desc: [
          { required: true, message: '请输入公司简介', trigger: 'blur' }
        ],
        call: [
          { required: true, validator: validateCall, trigger: 'blur' }
        ],
        contacts: [
          { required: true, message: '请输入联系人', trigger: 'blur' }
        ],
        job: [
          { required: true, validator: validateJob, trigger: 'blur' }
        ],
        email: [
          { required: true, validator: validateEmail, trigger: 'blur' }
        ],
      }

    }
  },

  methods: {
    close() {
      this.setup = false
      this.modal = false
    },


    // 选择成立时间
    changePublicDate(val) {
      this.formData.publicTime = val
    },

    handleView(name) {
      this.viewImgUrl = name
      this.visible = true
    },

    // 营业执照上传成功钩子
    businessLicensehandleSuccess(res, file, filelist) {
      if (res.code == 200) {
        this.businessLicenseUploadList = [{
          url: res.result
        }];
      } else {
        Message.warning(res.message)
      }
    },
    // 其他资质证书上传成功钩子
    otherCertificateshandleSuccess(res, file, filelist) {
      if (res.code == 200) {
        this.otherCertificatesList.push({
          url: res.result
        });
      } else {
        Message.warning(res.message)
      }
    },
    // 公司环境上传成功钩子
    environmenthandleSuccess(res, file, filelist) {
      if (res.isSuccess) {
        if (this.corporateEnvironmentList.length > 9) {
          Message.warning('公司环境最多上传10张图片')
        } else {
          this.corporateEnvironmentList.push(file)
        }
      } else {
        Message.error(res.msg);
      }
    },

    // 删除营业执照
    businessLicensehandleRemove(file) {
      // 从 upload 实例删除数据
      const fileList = this.$refs.businessLicenseUpload.fileList;
      this.$refs.businessLicenseUpload.fileList.splice(fileList.indexOf(file), 1);
      this.businessLicenseUploadList = []
    },

    // 删除其他证书
    otherCertificateshandleRemove(file) {
      // 从 upload 实例删除数据
      const fileList = this.$refs.otherCertificatesUpload.fileList;
      this.$refs.otherCertificatesUpload.fileList.splice(fileList.indexOf(file), 1);
      this.otherCertificatesList.splice(fileList.indexOf(file), 1)
    },

    //其他证书上传前钩子
    otherCertificatesHandleBeforeUpload(file) {
      const check = this.otherCertificatesList.length < 5;
      if (!check) {
        Message.warning('营业执照最多上传5张')
      }
      return check;
    },

    handleFormatError(file) {
      Message.warning('不支持的文件格式');
    },
    // 上传文件大小判断
    handleMaxSize(file) {
      Message.warning('上传文件大小不能大于5M');
    },

    // 添加主营业务
    addMainBusiness() {
      if (this.mainBusinessList.length <= 14) {
        this.mainBusinessList.push({ name: '', edit: false, mouse: false })
        this.$nextTick(() => {
          this.$refs.input[0].focus()
        })
      }

    },

    // 编辑当前主营业务
    editCurrent(index, name) {
      this.inputVal = name
      this.mainBusinessList[index].edit = false
      this.mainBusinessList[index].name = ''


      this.$nextTick(() => {
        this.$refs.input[0].focus()
      })

    },

    deleteMainBusiness(index, name) {
      // if (this.formData.mainBusiness.indexOf(name) != -1) {
      //   this.formData.mainBusiness.splice(this.mainBusiness.findIndex(name), 1)
      // }
      this.formData.mainBusiness.splice(index, 1)
      this.mainBusinessList.splice(index, 1)

    },

    // 编辑完成
    editFinished(index) {
      this.mainBusinessList[index].edit = true
      // if (this.mainBusinessList[index].name) {
      //   this.mainBusinessList[index].edit = true
      //   this.isShow = false
      // }
      // else {
      //   this.mainBusinessList.splice(index, 1)
      //   this.isShow = false
      // }
      if (this.mainBusinessList[index].name) {
        if (this.inputVal !== this.mainBusinessList[index].name) {
          this.formData.mainBusiness[index] = this.mainBusinessList[index]
        }
      } else {
        if (index > 2) {
          this.mainBusinessList.splice(index, 1)
        } else {
          this.mainBusinessList[index].name = this.inputVal
        }

      }

    },

    // 过滤公司规模
    filterCompanyScale(val) {
      switch (val) {
        case 101:
          return { value: val, label: '0-20人' };
          break;

        case 102:
          return { value: val, label: '20-99人' };
          break;

        case 103:
          return { value: val, label: '100-499人' };
          break;

        case 104:
          return { value: val, label: '500-999人' };
          break;

        case 105:
          return { value: val, label: '1000-9999人' };
          break;

        case 106:
          return { value: val, label: '10000人以上' };
          break;

        default:
          return {
            value: '', label: ''
          }

      }
    },
    // 过滤经营模式
    filterBusinessModel(val) {
      switch (val) {
        case 201:
          return { value: val, label: '生产型' };
          break;

        case 202:
          return { value: val, label: '贸易型' };
          break;

        case 203:
          return { value: val, label: '服务型' };
          break;

        case 204:
          return { value: val, label: '经销批发' };
          break;

        case 205:
          return { value: val, label: '招商代理' };
          break;

        case 206:
          return { value: val, label: '政府机构' };
          break;
        case 207:
          return { value: val, label: '其他' };
          break;
        default:
          return {
            value: '', label: ''
          }

      }
    },

    // 删除图片
    removeImage(fid) {
      removeImage({ fid })
    },


    //回显报名信息
    async getEnterInfo() {
      const res = await getEnterInfo({ id: this.infoId })


      if (res.code == 200) {
        this.formData.companyName = res.result.message.companyName
        this.formData.companyAddress = [res.result.message.provice ? res.result.message.provice.toString() : '', res.result.message.city ? res.result.message.city.toString() : '', res.result.message.county ? res.result.message.county.toString() : '']
        this.formData.Industry = res.result.message.industry ? [res.result.message.industry.split('>')[0], res.result.message.industry.split('>')[1], res.result.message.industry.split('>')[2]] : []
        this.formData.mainBusiness = res.result.message.mainBusiness ? res.result.message.mainBusiness.split(',').map(item => {
          return {
            name: item,
            edit: true,
            mouse: false
          }
        }) : []
        this.mainBusinessList = res.result.message.mainBusiness ? res.result.message.mainBusiness.split(',').map(item => {
          return {
            name: item,
            edit: true,
            mouse: false
          }
        }) : []
        this.formData.registeredFund = res.result.message.amount
        this.formData.publicTime = res.result.message.establishTime
        this.formData.companyScale = this.filterCompanyScale(res.result.message.scaleCompany)
        this.formData.businessModel = this.filterBusinessModel(res.result.message.managermentPattern)
        this.formData.legalPerson = res.result.message.corporation
        this.businessLicenseUploadList = res.result.message.businessList
        this.otherCertificatesList = res.result.message.qualificationList
        this.formData.desc = res.result.message.companyProfile
        this.formData.contacts = res.result.message.contact
        this.formData.job = res.result.message.position
        this.formData.call = res.result.message.mobile
        this.formData.email = res.result.message.email

        this.enterData = res.result.custom

      }
    },




    //提交方法
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {

          let form = {}
          form.infoId = this.infoId
          // form.infoId = 1516436223799296
          form.contact = this.formData.contacts


          form.position = this.formData.job
          form.email = this.formData.email
          form.mobile = this.formData.call



          form.companyName = this.formData.companyName ? this.formData.companyName : ''
          form.provice = this.formData.companyAddress[0] ? this.formData.companyAddress[0] : ''
          form.city = this.formData.companyAddress[1] ? this.formData.companyAddress[1] : ''
          form.county = this.formData.companyAddress[2] ? this.formData.companyAddress[2] : ''



          form.CategoryBig = this.formData.Industry[0] ? this.formData.Industry[0] : ''
          form.CategoryMiddle = this.formData.Industry[1] ? this.formData.Industry[1] : ''
          form.CategorySmall = this.formData.Industry[2] ? this.formData.Industry[2] : ''



          form.establishTime = this.formData.publicTime ? this.formData.publicTime : ''
          form.managermentPattern = this.formData.businessModel.value ? this.formData.businessModel.value : ''
          form.amount = this.formData.registeredFund ? this.formData.registeredFund : ''



          form.corporation = this.formData.legalPerson ? this.formData.legalPerson : ''
          form.companyProfile = this.formData.desc ? this.formData.desc : ''
          form.MainBusiness = this.formData.mainBusiness.filter((item) => {
            if (item && item.name) return item
          }).map(item => {
            return item.name
          }).join(',')



          form.scaleCompany = this.formData.companyScale.value ? this.formData.companyScale.value : ''

          form.businessLicense = this.businessLicenseUploadList ? businessLicenseUploadList.map(item => { return item.url }).join(',') : ''
          form.qualification = this.otherCertificatesList ? this.otherCertificatesList.map(item => { return item.url }).join(',') : ''



          this.saveEnterInfo(form)
        } else {

        }
      })
    },

    async saveEnterInfo(form) {
      const res = await saveEnterInfo(form)
      if (res.code == 200) {
        this.$Message.success('报名成功')
        this.setup = false
        this.modal = false
        this.$parent.formSearch()
        // this.$set(this.$parent.clueData[this.currentindex], this.$parent.clueData[this.currentindex].edited, true)
      } else {
        this.$Message.warning(res.message)
      }
    }

  },

  mounted() {
    let _data = testImportJson
    _data.forEach(item => {
      item.value = item.fid
      item.label = item.fname
      if (item.children) {
        item.children.forEach(i => {
          i.value = i.fid
          i.label = i.fname
          if (i.children) {
            i.children.forEach(y => {
              y.value = y.fid
              y.label = y.fname
            })
          }
        })
      }
    })
    this.areaData = _data

  }
}
</script>

<style lang="less" scoped>
.bidFormeModal {
  .regOnline {
    position: relative;

    .hearderTip {
      position: absolute;
      top: 26px;
      left: 113px;
      color: #999999;
      font-size: 14px;
    }
    /deep/ .ivu-modal-header {
      border: none !important;
      padding: 26px 24px;
      padding-bottom: 20px;
    }

    /deep/ .ivu-modal-header-inner {
      font-size: 20px !important;
      font-weight: 400 !important;
      padding-bottom: 13px;
      height: 35px !important;
      border-bottom: 1px solid #dcdee2;
    }
    /deep/ .ivu-modal-body {
      padding: 20px 40px;
      height: 650px;
      overflow-y: auto;
    }

    .ivu-form {
      .notRequired.ivu-form-item {
        /deep/ .ivu-form-item-label {
          padding-left: 10px;
        }
      }
      .ivu-form-item {
        margin-bottom: 23px !important;
        /deep/ .ivu-form-item-label {
          text-align: left;
          font-size: 14px;
          width: 104px !important;
          color: #333;
        }
        /deep/ .ivu-form-item-content {
          margin-left: 104px !important;
        }
        /deep/ .ivu-input {
          width: 420px !important;
          height: 40px !important;
          padding-left: 12px !important;
        }

        /deep/ .ivu-input::-webkit-outer-spin-button {
          -webkit-appearance: none;
        }
        /deep/ .ivu-input::-webkit-inner-spin-button {
          -webkit-appearance: none;
        }
        /deep/ .ivu-input::-webkit-input-placeholder {
          color: #999;
        }
        /deep/ .ivu-select-item {
          color: #333 !important;
        }
        /deep/ .ivu-form-item-error-tip {
          padding-bottom: 2px;
        }
      }
      .notRequired.ivu-form-item {
        /deep/ .ivu-form-item-label {
          padding-left: 10px;
        }
      }

      // logo
      .logo.ivu-form-item {
        display: flex;
        align-items: center;
        /deep/ .ivu-form-item-content {
          display: flex;
        }
        /deep/ .ivu-icon {
          line-height: 47px !important;
          padding-right: 2px;
        }
        .demo-upload-list {
          display: inline-block;
          width: 48px;
          height: 48px;
          text-align: center;
          line-height: 60px;
          border: 1px solid transparent;
          border-radius: 50%;
          overflow: hidden;
          background: #fff;
          position: relative;
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
          margin-right: 4px;

          /deep/ .ivu-icon {
            line-height: 48px !important;
            vertical-align: 0px !important;
          }
        }
        .demo-upload-list img {
          width: 48px;
          height: 48px;
        }
        .demo-upload-list-cover {
          display: none;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.6);
        }
        .demo-upload-list:hover .demo-upload-list-cover {
          display: block;
        }
        .demo-upload-list-cover i {
          color: #fff;
          font-size: 20px;
          cursor: pointer;
          margin: 0 2px;
        }
        /deep/ .ivu-upload {
          width: 48px !important;
          border-radius: 50%;
          margin-left: 12px;
          div {
            width: 48px !important;
            height: 48px !important;
            line-height: 48px !important;
            background-color: #f0f0f0;
          }
        }
        /deep/ .ivu-form-item-content {
          line-height: 9px;
          margin-left: 21px !important;
        }
      }

      // 公司所在地
      .companyAddress.ivu-form-item {
        /deep/ .ivu-input {
          height: 40px !important;
          font-size: 14px !important;
          color: #333 !important;
        }

        /deep/ .ivu-cascader-menu-item {
          width: 168px;
          height: 32px;
          font-size: 14px !important;
          color: #333;
          padding-left: 12px !important;
        }
        /deep/ .ivu-cascader-menu::-webkit-scrollbar {
          /*滚动条整体样式*/
          width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
          height: 10px !important;
        }
        /deep/ .ivu-cascader-menu::-webkit-scrollbar-thumb {
          /*滚动条里面小方块*/
          height: 20px !important;
          border-radius: 10px;
          background-color: #dce1e5;
        }
        /deep/ .ivu-cascader-menu {
          height: 192px !important;
        }
        /deep/ .ivu-input {
          font-size: 14px !important;
        }
      }

      // 公司名称
      .companyName.ivu-form-item {
        /deep/ .ivu-input {
          width: 420px !important;
          height: 40px !important;
          line-height: normal !important;
          border-radius: 2px !important;
          font-size: 14px;
          color: #333;
        }
        /deep/ .ivu-icon {
          width: 40px !important;
          height: 40px !important;
          line-height: 40px !important;
        }
      }
      // 注册地址
      .registeredAddress.ivu-form-item {
        /deep/ .ivu-input {
          width: 420px !important;
          height: 40px !important;
          line-height: 40px !important;
          border-radius: 2px !important;
          font-size: 14px;
          color: #333;
        }
      }
      .legalPerson.ivu-form-item {
        /deep/ .ivu-form-item-label {
          padding-left: 10px;
        }
        /deep/ .ivu-icon {
          width: 40px !important;
          height: 40px !important;
          line-height: 40px !important;
        }
      }

      //注册资本
      .registeredFund.ivu-form-item {
        /deep/ .ivu-input {
          width: 420px !important;
          height: 40px !important;
          line-height: 7px !important;
          border-radius: 2px !important;
          font-size: 14px;
          color: #333;
        }
        /deep/ input::-webkit-outer-spin-button {
          -webkit-appearance: none !important;
          appearance: none;
          margin: 0;
        }
        /deep/ input::-webkit-inner-spin-button {
          -webkit-appearance: none !important;
          appearance: none;
          margin: 0;
        }
        /deep/ .ivu-form-item-content {
          display: flex;
          align-items: center;
        }

        .unit {
          width: 50px;
          color: #999;
          font-size: 14px;
          margin-left: 3px;
        }
      }

      // 成立时间
      .publicTime.ivu-form-item {
        /deep/ .ivu-input {
          width: 420px !important;
          height: 40px !important;
          line-height: 40px !important;
          border-radius: 2px !important;
          font-size: 14px;
          color: #333;
        }

        /deep/ .ivu-input-suffix {
          right: -67px;
          line-height: 40px;
        }
        /deep/ .ivu-icon {
          line-height: 11px !important;
        }
      }
      //   所属行业
      .Industry.ivu-form-item {
        /deep/ .ivu-input {
          color: #333;
        }
        /deep/ .ivu-cascader-menu-item {
          width: 168px;
          height: 32px;
          font-size: 14px !important;
          color: #999;
          padding-left: 12px !important;
        }
        /deep/ .ivu-cascader-menu::-webkit-scrollbar {
          /*滚动条整体样式*/
          width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
          height: 9px !important;
        }
        /deep/ .ivu-cascader-menu::-webkit-scrollbar-thumb {
          /*滚动条里面小方块*/
          height: 20px !important;
          border-radius: 10px;
          background-color: #dce1e5;
        }
        /deep/ .ivu-cascader-menu {
          height: 192px !important;
        }
        /deep/ .ivu-input {
          font-size: 14px !important;
        }
      }

      // 公司规模
      .companyScale.ivu-form-item {
        /deep/ .ivu-select {
          width: 420px !important;
          margin-right: 8px;
        }

        /deep/ .ivu-select-selection {
          height: 40px !important;
          border-radius: 2px !important;
        }

        /deep/ .ivu-select-placeholder {
          height: 40px !important;
          line-height: 40px !important;
          font-size: 14px !important;
          color: #333;
        }

        /deep/ .ivu-select-item {
          font-size: 14px !important;
          color: #333;
        }
        /deep/ .ivu-select-selected-value {
          height: 40px !important;
          line-height: 40px !important;
          font-size: 14px;
          color: #333;
        }
        /deep/ .ivu-select-dropdown {
          max-height: none;
        }
      }

      // 营业执照
      .businessLicense.ivu-form-item {
        margin-bottom: 40px !important;
        .uploadList {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 10px;
        }
        .demo-upload-list {
          display: inline-block;
          width: 80px;
          height: 80px;
          text-align: center;
          line-height: 60px;
          border: 1px solid #d2d2d2;
          border-radius: 4px;
          overflow: hidden;
          background: #fff;
          position: relative;
          margin-right: 55px;
          margin-right: 15px;
          // padding-top: 28px;
          .ivu-icon {
            position: absolute;
            top: 3px;
            right: 2px;
            cursor: pointer;
          }
          /deep/ .ivu-icon.ivu-icon-ios-eye-outline {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          /deep/ .ivu-progress-inner {
            vertical-align: -40px !important;
          }
        }
        .demo-upload-list .imgbox {
          text-align: center;
          display: -webkit-flex;
          width: 100%;
          height: 100%;
          display: -moz-flex;
          display: -ms-flex;
          display: -o-flex;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .demo-upload-list img {
          max-width: 100%;
          max-height: 100%;
        }
        .demo-upload-list-cover {
          display: none;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.6);
        }
        .demo-upload-list:hover .demo-upload-list-cover {
          display: block;
        }
        .demo-upload-list-cover i {
          color: #fff;
          font-size: 20px;
          cursor: pointer;
          margin: 0 2px;
        }
        /deep/ .ivu-upload {
          width: 80px !important;
          border-radius: 4px;
          margin-right: 15px;
          div {
            width: 80px !important;
            height: 80px !important;
            // line-height: 148px !important;
            background-color: #f0f0f0;
            div {
              display: flex;
              flex-direction: column;
              justify-content: center;
              span {
                line-height: 20px;
                color: #c3c3c3;
              }
            }
          }
        }
        /deep/ .ivu-form-item-content {
          line-height: 9px;
        }

        /deep/ .ivu-form-item-label {
          line-height: 1.4 !important;
        }

        /deep/ .ivu-form-item-error-tip {
          top: 104%;
        }

        // .tips {
        //   position: absolute;
        //   top: 89px;
        //   left: 0px;
        //   color: #999999;
        //   font-size: 12px;
        // }
      }

      //其他证书
      .otherCertificates.ivu-form-item {
        // /deep/ .ivu-form-item-label {
        //   padding-left: 10px !important;
        // }
      }

      // 公司介绍
      .companyDesc.ivu-form-item {
        position: relative;
        /deep/ .ivu-input {
          width: 896px !important;
          height: 203px !important;
        }
        .remainLength {
          position: absolute;
          bottom: 12px;
          right: 12px;
          color: #999;
          line-height: 7px;
        }
      }

      //   主营业务
      .mainBusiness.ivu-form-item {
        /deep/ .ivu-form-item-content {
          align-items: center;
          position: relative;
          z-index: 0;
        }
        /deep/ .ivu-input-wrapper {
          position: absolute !important;
          left: 0px;
          top: 3px;
          text-align: right !important;
          width: 130px;
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          width: 420px;
          position: relative;
          list-style: none;
          li {
            position: relative;
            width: 159px;
            height: 40px;
            line-height: 40px;
            border-radius: 2px;
            padding-left: 9px;
            opacity: 1;
            border: 1px solid #dcdee2;
            background-color: #fff;
            margin-right: 8px;
            font-size: 14px;
            z-index: 1;
            color: #333;
            .ivu-icon {
              position: absolute;
              top: -1px;
              right: -2px;
              font-size: 12px;
              cursor: pointer;
            }
          }
          /deep/ .ivu-input {
            width: 130px !important;
            height: 35px !important;
            font-size: 14px;
            border: none;
            outline: none;
            color: #666;
            padding-left: 9px !important;
          }
          /deep/ .ivu-input:focus {
            border: none;
            box-shadow: none;
          }
        }
        .add {
          position: relative;
          // right: -146px;
          width: 40px;
          height: 40px;
          line-height: 41px;
          text-align: center;
          border-radius: 2px 2px 2px 2px;
          border: 1px solid #dcdee2;
          padding-left: 0px;
          cursor: pointer;
        }
      }
      // 验证码
      .callCode.ivu-form-item {
        /deep/ .ivu-input {
          width: 276px !important;
          height: 40px !important;
          line-height: 40px !important;
          border-radius: 2px !important;
          font-size: 14px;
        }
        /deep/ .ivu-form-item-content {
          display: flex;
        }

        button {
          width: 114px;
          height: 40px;
          line-height: 40px;
          border-radius: 2px 2px 2px 2px;
          background-color: #fff;
          border: 1px solid #dcdee2;
          color: #5489ff;
          font-size: 14px;
          cursor: pointer;
        }

        /deep/ .ivu-input-wrapper {
          width: 276px;
          margin-right: 10px;
        }

        /deep/ .ivu-form-item-content {
          margin-left: 113px !important;
        }
      }

      // 提示
      .caution.ivu-form-item {
        p {
          margin-left: 92px !important;
          font-size: 12px;
          color: #999;
          line-height: 12px;
          .highlight {
            color: #5489ff;
          }
        }
      }
      .agree.ivu-form-item {
        /deep/ .ivu-form-item-content {
          margin-left: 140px !important;
        }
        /deep/ .ivu-form-item-error-tip {
          width: 300px !important;
        }
        span {
          cursor: pointer;
        }
      }

      .submit.ivu-form-item {
        width: 100%;
        display: block;
        text-align: center;
        /deep/ .ivu-btn {
          width: 127px;
          height: 48px;
          line-height: 38px;
          background: #5489ff;
          border-radius: 2px;
          font-size: 16px;
          letter-spacing: 0.5px;
        }

        /deep/ .ivu-form-item-content {
          margin-left: 0 !important;
        }

        /deep/ .ivu-btn.prv {
          margin-right: 15px;
        }
      }
    }
  }
}
</style>