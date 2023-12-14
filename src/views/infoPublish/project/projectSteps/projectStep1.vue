<template>
  <div class="projectStep1">
    <Card class="step-head"><b style="font-size: 16px">项目基本信息</b></Card>
    <Card class="step-center">
      <Form
        ref="formItem"
        :model="formItem"
        :rules="ruleValidate"
        :label-width="150"
      >
        <Row>
          <Col :span="12">
            <FormItem prop="projectNumber" label="项目编号">
              <Input disabled v-model="formItem.projectNumber" />
            </FormItem>
          </Col>
          <Col :span="12">
            <FormItem prop="projectCode" label="投资项目统一代码">
              <Input v-model="formItem.projectCode" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <FormItem prop="projectTitle" label="项目名称">
            <Input v-model="formItem.projectTitle" type="text" />
          </FormItem>
        </Row>
        <Row>
          <Col :span="12">
            <FormItem prop="categoryId" label="所属行业分类">
              <Select v-model="formItem.categoryId" multiple filterable>
                <Option
                  v-for="item in this.SEL.industryClass"
                  :value="item.value"
                  :key="item.value"
                  >{{ item.label }}
                </Option>
              </Select>
            </FormItem>
          </Col>
          <Col :span="12">
            <Row>
              <FormItem label="所在行政区域" prop="area" class="area">
                <i-region
                  v-model="formItem.area"
                  data-type="name"
                  type="city"
                  @on-change="areaChange"
                />
              </FormItem>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col :span="12">
            <FormItem prop="bidType" label="招标方式">
              <Select v-model="formItem.bidType">
                <Option
                  v-for="item in this.SEL.bidMethod"
                  :value="item.value"
                  :key="item.value"
                  >{{ item.label }}
                </Option>
              </Select>
            </FormItem>
          </Col>
          <Col :span="12">
            <FormItem prop="bidOrgnize" label="招标组织形式">
              <Select v-model="formItem.bidOrgnize">
                <Option
                  v-for="item in this.SEL.bidForm"
                  :value="item.value"
                  :key="item.value"
                  >{{ item.label }}</Option
                >
              </Select>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <FormItem prop="description" label="项目规模及概况">
            <Input
              type="textarea"
              v-model="formItem.description"
              :maxlength="10000"
              show-word-limit
            />
          </FormItem>
        </Row>
        <Row>
          <FormItem prop="descContentScope" label="招标范围">
            <Input
              type="textarea"
              v-model="formItem.descContentScope"
              :maxlength="10000"
              show-word-limit
            />
          </FormItem>
        </Row>
        <Row>
          <Col :span="12">
            <FormItem prop="jdbmName" label="监督部门名称">
              <Input v-model="formItem.jdbmName" type="text" />
            </FormItem>
          </Col>
          <Col :span="12">
            <FormItem prop="jdbmCode" label="监督部门代码">
              <Input v-model="formItem.jdbmCode" type="text" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <div class="center">
            <Button
              size="large"
              type="primary"
              :loading="loading"
              @click="next('formItem')"
              >保存，下一步</Button
            >
          </div>
        </Row>
      </Form>
    </Card>
  </div>
</template>
<script>
import { validateSpecial } from "@/libs/validate";
import { getProjectNum, saveProject, projectView } from "@/api/publishApi";
export default {
  name: "projectStep1",
  props: {
    currentStep: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      loading: false,
      formItem: {
        projectNumber: "", // 招标项目编号
        projectCode: "", // 投资项目统一代码
        projectTitle: "", // 项目名称
        categoryId: [], // 行业分类
        area: [], // 行政区域码
        bidType: "", // 招标方式
        bidOrgnize: "", // 招标组织形式
        descContentScope: "", // 招标内容和范围
        description: "", // 招标项目规模及概况
        jdbmName: "", // 监督部门名称
        jdbmCode: "", // 监督部门代码
      },
      ruleValidate: {
        projectCode: [
          { max: 100, message: "代码长度不能超过100个字符！", trigger: "blur" },
        ],
        projectTitle: [
          { required: true, message: "项目名称不能为空！", trigger: "blur" },
          { validator: validateSpecial, trigger: "blur" },
          {
            max: 300,
            message: "项目名称长度不能超过300个字符！",
            trigger: "blur",
          },
        ],
        categoryId: [
          {
            required: true,
            message: "请选择行业分类！",
            trigger: "change",
            type: "array",
          },
        ],
        bidType: [
          {
            required: true,
            message: "请选择招标方式！",
            trigger: "change",
          },
        ],
        bidOrgnize: [
          {
            required: true,
            message: "请选择招标组织形式！",
            trigger: "change",
          },
        ],
        descContentScope: [
          {
            required: true,
            message: "请输入招标内容和范围！",
            trigger: "blur",
          },
        ],
        description: [
          {
            required: true,
            message: "请输入招标项目规模及概况！",
            trigger: "blur",
          },
        ],
        jdbmName: [
          { required: true, message: "部门名称不能为空！", trigger: "blur" },
          { validator: validateSpecial, trigger: "blur" },
          { max: 50, message: "部门名称长度不能超过50个字符", trigger: "blur" },
        ],
        area: [
          {
            required: true,
            message: "请选择所在行政区域！",
            trigger: "change",
            type: "array",
          },
        ],
      },
    };
  },
  mounted() {
    // 如果是新建项目，则直接请求项目编号
    if (!this.getStore("projectId") && !this.getStore("oldProjectId")) {
      this.getNumber();
    }
    // 如果存在projectId
    if (this.getStore("projectId")) {
      this.getCurrentDetail(this.getStore("projectId"));
    }
    if (this.getStore("oldProjectId") && !this.getStore("projectId")) {
      this.getCurrentDetail(this.getStore("oldProjectId"));
    }
    if (this.getStore("addProject")) {
      this.removeStore("addProject");
    }
  },
  activated() {
    // 如果是新建项目，则直接请求项目编号
    if (!this.getStore("projectId") && !this.getStore("oldProjectId")) {
      this.getNumber();
    }
    // 如果存在projectId
    if (this.getStore("projectId")) {
      this.getCurrentDetail(this.getStore("projectId"));
    }
    if (this.getStore("oldProjectId") && !this.getStore("projectId")) {
      this.getCurrentDetail(this.getStore("oldProjectId"));
    }
    if (this.getStore("addProject")) {
      this.removeStore("addProject");
    }
  },
  methods: {
    // 下一步
    next(name) {
      let data = {
        ...this.formItem,
        categoryId: this.formItem.categoryId.join(","),
        area: this.formItem.area.join(""),
        id: this.getStore("projectId") ? this.getStore("projectId") : "",
      };
      if (!this.getStore("projectStep") && this.getStore("oldProjectId")) {
        data.oldProjectId = this.getStore("oldProjectId");
      }
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.loading = true;
          saveProject(data).then((res) => {
            this.loading = false;
            if (res.success) {
              this.setStore("projectId", res.result.projectId);
              if (
                this.getStore("oldProjectId") &&
                this.getStore("projectStep") <= this.currentStep + 1
              ) {
                this.setStore("projectStep", 1);
              }
              this.$emit("update:currentStep", 1);
            } else {
              this.$Message.error(data.message);
            }
          });
        }
      });
    },
    // 如果存在项目id，则获取该步骤的详情
    getCurrentDetail(id) {
      this.$refs.formItem.resetFields();
      projectView({
        projectId: id,
      }).then((res) => {
        if (res.success) {
          this.formItem.projectNumber = res.result.projectNumber;
          this.formItem.projectCode = res.result.projectCode;

          if (!this.getStore("projectStep") && this.getStore("oldProjectId")) {
            this.formItem.projectTitle = res.result.projectTitle + "副本";
          } else {
            this.formItem.projectTitle = res.result.projectTitle;
          }
          // this.formItem.projectTitle = res.result.projectTitle;
          this.formItem.categoryId = res.result.categoryId.split(",");
          this.formItem.bidType = res.result.bidType;
          this.formItem.bidOrgnize = res.result.bidOrgnize;
          this.formItem.descContentScope = res.result.descContentScope;
          this.formItem.description = res.result.description;
          this.formItem.jdbmName = res.result.jdbmName;
          this.formItem.jdbmCode = res.result.jdbmCode;

          let area = res.result.area;
          let index;
          let arr;
          if (area.includes("省")) {
            index = area.indexOf("省") + 1;
          } else if (area.includes("自治区")) {
            index = area.indexOf("自治区") + 3;
          } else if (area.includes("港澳")) {
            index = area.indexOf("港澳") + 2;
          } else {
            index = area.indexOf("市") + 1;
          }
          arr = [area.slice(0, index), area.slice(index)];
          this.formItem.area = arr;
          if (!this.getStore("projectId")) {
            this.getNumber();
          }
        }
      });
    },
    // 获取项目编号
    getNumber() {
      getProjectNum().then((res) => {
        if (!this.getStore("projectId") && !this.getStore("oldProjectId")) {
          this.$refs.formItem.resetFields();
        }
        if (res.success) {
          this.formItem.projectNumber = res.result;
        }
      });
    },
  },
};
</script>
<style lang="less">
@import "../../../../components/region/region.css";
.projectStep1 {
  min-height: calc(100vh - 132px);
  width: 100%;
  .step-head {
    margin-bottom: 10px;
  }

  .center {
    text-align: center;
    margin-top: 40px;

    button {
      margin-left: 20px;
    }
  }
  .ivu-dropdown .ivu-select-dropdown {
    width: 100% !important;
    left: 0 !important;
  }
}
</style>
