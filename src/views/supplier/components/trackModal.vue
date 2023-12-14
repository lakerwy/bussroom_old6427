<template>
  <div class="trackModal">
    <Modal
      class="track"
      :transfer="false"
      title="跟进"
      v-model="modal"
      :width="600"
      :footer-hide="true"
      mask-closable
      @on-cancel="cancel"
    >
      <ul class="trackList">
        <li class="add" @click="add" v-show="trackList.length < 5">最新跟进</li>
        <li
          v-for="(item, index) in trackList"
          :key="item.id"
          @click="checkTrack(item)"
        >
          <span>跟进{{ index + 1 }}</span>
          <Icon type="md-close" @click.stop="deleteTrack(item.id, index)" />
        </li>
      </ul>
      <Form
        :model="formData"
        :label-width="80"
        ref="form"
        :rules="ruleValidate"
      >
        <!-- 跟进方式 -->
        <div class="trackMethod">
          <!-- 跟进方式 -->
          <FormItem class="trackType" label="跟进方式" prop="method">
            <Select
              style="width: 140px"
              placeholder="请选择跟进方式"
              v-model="formData.method.value"
            >
              <Option
                v-for="item in trackTypeData"
                :value="item.value"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
          <!-- 跟进日期 -->
          <FormItem class="trackDate" prop="callTime">
            <DatePicker
              type="date"
              :value="formData.callTime"
              :editable="false"
              placeholder="请选择日期"
              style="width: 220px"
              @on-change="selectTrackDate"
            ></DatePicker>
          </FormItem>
        </div>
        <!-- 跟进内容 -->
        <FormItem class="trackContent" label="跟进内容" prop="memo">
          <Input
            type="textarea"
            v-model="formData.memo"
            placeholder="请输入跟进内容 "
            :maxlength="300"
          ></Input>
          <p class="remainLength">
            <span>{{ formData.memo.length }}</span>
            <span>/</span>
            <span>300</span>
          </p>
        </FormItem>
        <!-- 单位名称 -->
        <FormItem class="companyName" label="单位名称" prop="company">
          <Input
            v-model="formData.company"
            placeholder="请输入单位名称 "
          ></Input>
        </FormItem>
        <!-- 跟进人员 -->
        <FormItem class="trackMan" label="跟进人员" prop="contact">
          <Input
            v-model="formData.contact"
            placeholder="请输入跟进人员 "
          ></Input>
        </FormItem>
        <!-- 按钮 -->
        <FormItem class="submit">
          <Button @click="close">取消</Button>
          <Button @click="submit" type="primary">保存</Button>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
import { saveTrackInfo, deteleTrackInfo } from "@/api/index"

export default {
  data() {
    //跟进方式验证规则
    const validMethod = (rule, value, callback) => {
      if (!this.formData.method.value) {
        callback('请选择跟进方式');
      } else {
        callback();
      }
    };

    // // 跟进时间验证规则
    // const validCallTime = (rule, value, callback) => {
    //   if (!this.formItem.industry || !this.formItem.industry.legnth) {
    //     callback();

    //   } else {
    //     if (this.formItem.industry[0] && !this.formItem.industry[1]) {
    //       callback('请选择');

    //     }
    //   }
    // };
    return {
      // activeIndex:0,
      modal: false,
      trackList: [
        { method: 1, sign: 1, callTime: '2022-7-15', memo: '跟进1', company: '中国电信', contact: '张三儿' },
        { method: 2, sign: 2, callTime: '2022-8-15', memo: '跟进2', company: '中国移动', contact: '李四' },

      ],
      // disabled: false,

      claimId: 0,    //线索id

      id: 0,       //当前跟进的id
      sign: 0,      //当前跟进跟进序号， 主要在修改跟进时取到sign然后保存修改是提交它原本的sign
      formData: {
        method: {},
        callTime: '',     //跟进时间
        sign: 0,         //跟进排序
        memo: '',   //跟进内容
        company: '',   //单位名称
        contact: '',   //跟进人
      },
      trackTypeData: [
        {
          label: '到访',
          value: 301
        },
        {
          label: '电话',
          value: 302
        },
        {
          label: '微信',
          value: 303
        },
        {
          label: '短信',
          value: 304
        },
        {
          label: '邮件',
          value: 305
        },
      ],

      flag: 1,     //1为新增跟进，2为报名跟进

      ruleValidate: {
        callTime: [
          { required: true, message: '请输入时间', trigger: 'change' }
        ],
        memo: [
          { required: true, message: '请输入跟进内容', trigger: 'blur' }
        ],
        company: [
          { required: false, message: '请输入跟进单位', trigger: 'blur' }
        ],
        contact: [
          { required: true, message: '请输入联系人', trigger: 'blur' }
        ],
        // method: [
        //   { required: true, message: '请选择跟进方式', trigger: 'blur' }
        // ],
        method: [
          { required: true, validator: validMethod, trigger: 'change' }
        ],

      }
    }
  },

  methods: {
    // 弹框取消
    cancel() {
      this.modal = false
      // this.disabled = false
      this.$refs.form.resetFields();
    },
    selectTrackDate(val) {
      this.formData.callTime = val
    },

    // 添加跟进
    add() {
      this.$refs.form.resetFields();
      this.flag = 1
      // this.disabled = false
    },

    //查看跟踪
    checkTrack(data) {
      // this.disabled = true
      this.flag = 2
      this.id = data.id
      this.sign = data.sign
      let form = {}
      for (let key in data) {
        if (key != 'id') form[key] = data[key]

      }
      form.method = this.filterTrackType(parseInt(form.method))

      this.formData = form
      console.log(this.formData, '3333333333');
    },

    resetFields() {
      this.$refs.form.resetFields()
    },

    close() {
      this.modal = false
    },

    // 提交保存
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log('验证通过');
          this.saveTrack()
        } else {
        }
      })
    },


    // 保存跟进
    async saveTrack() {
      let form = {}
      for (let key in this.formData) {
        form[key] = this.formData[key]
      }
      form.claimId = this.claimId
      form.method = form.method.value
      form.sign = this.trackList.length + 1
      if (this.flag == 2) {
        form.id = this.id
      }
      const res = await saveTrackInfo(form)
      if (res.code == 200) {
        this.$Message.success('保存成功')
        this.formData.method.value = ''
        this.modal = false
        this.$parent.formSearch()
      } else {
        this.$Message.success(res.message)
      }
    },

    //删除跟进
    async deleteTrack(id, index) {
      const res = await deteleTrackInfo({ id })
      if (res.code == 200) {
        this.trackList.splice(index, 1)
        this.$refs.form.resetFields()
        if (!this.trackList.length) {
          this.$parent.formSearch()
        }

        this.$Message.success(res.message)
      } else {
        this.$Message.warning(res.message)

      }

    },



    // 过滤跟踪方式
    filterTrackType(val) {
      console.log(val, 'val');
      switch (val) {
        case 301:
          return {
            value: val,
            label: "到访"
          };
          break;
        case 302:
          return {
            value: val,
            label: "电话"
          };
          break;
        case 303:
          return {
            value: val,
            label: "微信"
          };
          break;
        case 304:
          return {
            value: val,
            label: "短信"
          };
          break;
        case 305:
          return {
            value: val,
            label: "邮件"
          };
          break;

      }
    },
    // fn(val) {
    //   console.log(val, 'val');
    // }
  }
}
</script>

<style lang="less" scoped>
.trackModal {
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
  }

  .trackList {
    display: flex;
    list-style: none;
    margin-bottom: 20px;
    li {
      padding: 5px 20px;
      border-radius: 4px;
      border: 1px solid #dcdee2;
      margin-right: 10px;
      position: relative;
      cursor: pointer;
      .ivu-icon {
        position: absolute;
        top: 1px;
        right: 2px;
      }
    }
    .add {
      background-color: #3f6ef5;
      color: #fff;
    }
  }
  .trackMethod {
    display: flex;
    .trackDate.ivu-form-item {
      /deep/ .ivu-form-item-content {
        margin-left: 20px !important;
      }
    }
  }

  .trackContent.ivu-form-item {
    position: relative;
    .remainLength {
      position: absolute;
      bottom: 12px;
      right: 12px;
      color: #999;
      line-height: 7px;
    }
    /deep/ .ivu-input {
      height: 203px;
    }
  }

  .submit.ivu-form-item {
    padding-top: 20px;
    /deep/ .ivu-btn:nth-child(1) {
      margin-right: 20px;
    }
    /deep/ .ivu-btn {
      width: 127px;
      height: 40px;
      font-size: 16px;
    }

    /deep/ .ivu-form-item-content {
      margin-left: 0px !important;
      text-align: center;
    }
  }
}
</style>