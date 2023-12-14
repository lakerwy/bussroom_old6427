<template>
  <div>
    <Drawer
      title="添加项目组成员"
      v-model="addMemberFlag"
      width="600"
      :styles="styles"
      @on-visible-change="cancel"
    >
      <Form
        ref="formData"
        :model="formData"
        :rules="formValidate"
        :label-width="80"
      >
        <FormItem label="成员" prop="userId">
          <Select
            v-model="formData.userId"
            placeholder="请选择成员"
            @on-change="userChange"
          >
            <Option
              v-for="item in memberList"
              :value="item.id"
              :key="item.id"
              >{{ item.nickname }}</Option
            >
          </Select>
        </FormItem>
        <FormItem label="身份" prop="type">
          <Select v-model="formData.type" placeholder="请选择身份">
            <Option v-for="item in typeList" :value="item.id" :key="item.id">{{
              item.name
            }}</Option>
          </Select>
        </FormItem>
        <FormItem label="性别" prop="sex">
          <Input v-model="formData.sex" readonly />
        </FormItem>
        <FormItem label="部门" prop="department">
          <Input v-model="formData.department" readonly />
        </FormItem>
      </Form>
      <div class="demo-drawer-footer">
        <Button type="primary" :loading="submitLoading" @click="submit"
          >提交</Button
        >
        <Button
          style="margin-left: 8px"
          @click="$emit('update:addMemberFlag', false)"
          >取消</Button
        >
      </div>
    </Drawer>
  </div>
</template>

<script>
import { getUserListData,addProjectUser } from "@/api/index";

export default {
  name: "addMember",
  props: {
    addMemberFlag: {
      type: Boolean,
      default: false,
    },
    projectId: {
      type: String,
      default: "",
    },
    companyId: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      memberList: [],
      typeList: [
        {
          name: "身份0",
          id: 0,
        },
        {
          name: "身份1",
          id: 1,
        },
        {
          name: "身份2",
          id: 2,
        },
        {
          name: "身份3",
          id: 3,
        },
      ],
      submitLoading: false,
      styles: {
        height: "calc(100% - 55px)",
        overflow: "auto",
        paddingBottom: "53px",
        position: "static",
      },
      formData: {
        userId: "",
        sex: "",
        department: "",
        type: "",
        projectId: this.projectId,
      },
      formValidate: {
        userId: [
          {
            required: true,
            message: "请选择成员",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "number",
            required: true,
            message: "请选择身份",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    submit() {
      this.$refs.formData.validate((valid) => {
        if (valid) {
          addProjectUser({
            userId: this.formData.userId,
            type: this.formData.type,
            projectId: this.formData.projectId,
          }).then((res) => {
            if (res.success) {
              this.$Message.success("添加成功！");
              this.$emit("on-submit");
              this.$emit("update:addMemberFlag", false);
            }
          });
        }
      });
    },
    cancel(v) {
      if (!v) {
        this.$refs.formData.resetFields();
        this.$emit("update:addMemberFlag", false);
      } else {
        this.getMemberList();
      }
    },
    getMemberList() {
      getUserListData({
        companyId: this.companyId,
        department: "",
        departmentId: "",
        email: "",
        endDate: "",
        id: "",
        mobile: "",
        nickname: "",
        order: "desc",
        pageNumber: 1,
        pageSize: 10000,
        sex: "",
        sort: "createTime",
        startDate: "",
        status: "",
        type: "",
        username: "",
      }).then((res) => {
        if (res.success) {
          this.memberList = res.result.content;
        }
      });
    },
    getIdList() {},
    userChange(v) {
      let item = this.memberList.find((item) => item.id === v);
      this.formData.department = item.department;
      this.formData.sex = item.sex;
    },
  },
};
</script>
<style>
.demo-drawer-footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: 1px solid #e8e8e8;
  padding: 10px 16px;
  text-align: left;
  background: #fff;
}
</style>