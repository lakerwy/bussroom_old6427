<template>
  <div class="correctStep2">
    <Card>
      <div class="flex-row step-head">
        <strong>上传附件</strong
        ><span class="mes">没有附件，可直接点下一步</span>
      </div>
    </Card>
    <Card>
      <!-- <p style="color: red">注意：不建议上传招标文件！！！下一步有单独上传招标文件的选项！！上传的附件，看信息的用户随时可下载！！</p> -->
      <p>附件最多可上传10个，每个不超过10M。</p>
      <p>支持jpg、jpeg、gif、png、doc、docx、xls、xlsx、pdf、dwg、rar格式</p>
      <div class="upload-div" style="margin-top: 20px">
        <Upload
          type="drag"
          :disabled="buttonFlag"
          :action="actionHost"
          :data="uploadData"
          :max-size="10240"
          :default-file-list="dfList"
          :on-remove="removeFile"
          :headers="accessToken"
          :on-exceeded-size="handleMaxSize"
          :on-format-error="handleFormatError"
          :before-upload="handleBeforeUpload"
          :on-success="handleSuccess"
          :format="[
            'jpg',
            'jpeg',
            'png',
            'doc',
            'xls',
            'xlsx',
            'docx',
            'pdf',
            'dwg',
            'rar',
          ]"
          ref="upload"
        >
          <div style="padding: 20px 0">
            <Icon
              :disabled="buttonFlag"
              type="ios-cloud-upload"
              size="52"
              :style="{ color: buttonFlag ? '#ccc' : '#3399ff' }"
            ></Icon>
            <p>添加附件</p>
          </div>
        </Upload>
      </div>
      <div class="center">
        <Button size="large" @click="pre" :disabled="buttonFlag">上一步</Button>
        <Button
          size="large"
          type="primary"
          @click="next"
          :disabled="buttonFlag"
          :loading="subLoading"
          >保存，下一步</Button
        >
      </div>
    </Card>
  </div>
</template>

<script>
import {
  uploadFile,
  viewFiles,
  removeFileById,
  uploadUrl
} from "@/api/publishApi";
export default {
  name: "correctStep2",
  props: {
    currentStep: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      Lists: [],
      dfList: [],
      uploadFileList: [], // 本地保存的文件
      viewFilesList: [], // 回显文件
      subLoading: false,
      accessToken: {},
      uploadData: {
        noticeId: "",
      },
      buttonFlag: false,
      actionHost: uploadUrl,
    };
  },
  created() {
    this.getViewFiles();
    this.accessToken = {
      accessToken: this.getStore("accessToken"),
    };
    this.uploadData.noticeId = this.$route.query.id
  },
  activated() {
    if(this.getStore('editCorrectResult')){
      this.removeStore('editCorrectResult');
      this.$emit("update:currentStep", 0);
    }
  },
  methods: {
    // 上传成功的回调函数
    handleSuccess(res, file, filelist) {
      if (res.success) {
        
        this.dfList.push({
          name: file.name,
          id: file.response.result,
        });
      }
      this.buttonFlag = false;
    },
    pre() {
      this.$emit("update:currentStep", 0);
    },
    next() {
      this.$emit("update:currentStep", 2);
    },
    // 回显文件
    getViewFiles() {
      viewFiles({
        noticeId: this.$route.query.id,
      }).then((res) => {
        if (res.success) {
          if (res.result) {
            this.dfList = res.result.map((item) => {
              return {
                name: item.fileName,
                id: item.id,
                url: item.url,
              };
            });
          }else {
            this.dfList = []
          }
        }
      });
    },
    // 删除文件
    removeFile(file, fileList) {
      removeFileById({ id: file.id }).then((res) => {
        if (res.success) {
          this.$Message.success("删除成功！");
          this.getViewFiles();
        }
      });
    },
    handleFormatError(file, fileList) {
      this.$Notice.warning({
        title: "提示",
        desc: `文件${file.name} 格式错误`,
      });
      this.buttonFlag = false;
    },
    handleBeforeUpload(v) {
      this.Lists = this.$refs.upload.fileList;
      const check = this.Lists.length < 10;
      if (!check) {
        this.$Notice.warning({
          title: "提示",
          desc: "最多可以上传10个文件",
        });
      } else {
        this.buttonFlag = true;
      }
      return check;
    },
    handleMaxSize(file) {
      this.$Notice.warning({
        title: "提示",
        desc: `文件${file.name}超过10M`,
      });
      this.buttonFlag = false;
    },
  },
};
</script>

<style lang="less" scoped>
.correctStep2 {
  .ivu-card {
    margin-bottom: 10px;
  }
  .flex-row {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    strong {
      width: fit-content;
      word-break: keep-all;
    }
    button {
      margin-left: 10px;
      word-break: keep-all;
    }
    > span {
      word-break: keep-all;
      padding: 0 8px;
      white-space: nowrap;
      flex-shrink: 0;
      min-width: 6em;
    }
    input {
      padding-left: 8px;
    }
    a {
      word-break: keep-all;
      margin-left: 10px;
    }
  }
  .step-head {
    margin-bottom: 10px;
    button {
      margin-left: 10px;
    }
  }
  .step-center {
    section {
      margin-bottom: 20px;
    }
    .ivu-divider {
      margin-bottom: 10px;
    }
    .ivu-divider-inner-text {
      color: #2d8cf0;
    }
    .ivu-divider-horizontal.ivu-divider-with-text-left:before {
      width: 0;
    }
  }
  .mb10 {
    margin-bottom: 10px;
  }
  .center {
    text-align: center;
    margin-top: 80px;
    button {
      margin-left: 20px;
    }
  }
  .upload-div {
    position: relative;
    .ivu-upload {
      width: 100%;
      display: inline-block;
      .ivu-upload-drag {
        width: 49%;
        float: left;
      }
      .ivu-upload-list {
        width: 50%;
        float: right;
      }
    }
    .text {
      position: absolute;
      width: 49%;
      top: 130px;
    }
    margin-bottom: 50px;
  }
  .mes {
    float: left;
    position: absolute;
    color: #b1acac;
    margin-left: 65px;
  }
  .textCol {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
