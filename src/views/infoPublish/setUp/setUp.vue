<template>
  <div class="setUp">
    <!-- <h1 style="margin: 15px 0; font-weight: bold">人员设置</h1> -->
    <Row :gutter="16">
      <Col span="10">
        <Card>
          <p class="header">
            <span>机构管理员信息</span>
          </p>
          <Row style="margin-top:20px;">
            <Form ref="form" :model="form" :label-width="150">
              <Col :span="24"
                ><FormItem label="姓名">
                  <div>{{ form.username }}</div>
                </FormItem></Col
              >
              <Col :span="24"
                ><FormItem label="身份证号码">
                  <div>{{ form.userId }}</div>
                </FormItem></Col
              >
              <Col :span="24"
                ><FormItem label="常用邮箱">
                  <div>{{ form.email }}</div>
                </FormItem></Col
              >
              <Col :span="24"
                ><FormItem label="手机">
                  <div>{{ form.phone }}</div>
                </FormItem></Col
              >
            </Form>
          </Row>
        </Card>
      </Col>
      <Col span="14">
        <Card>
          <p class="header">
            <span>操作员管理</span>
            <Button
              type="primary"
              size="large"
              @click="binding"
              style="float: right; margin-top: 7px"
              >绑定操作员账号</Button
            >
          </p>
          <Table :columns="columns" :data="data">
            <template slot-scope="{ row }" slot="action">
              <a href="javascript:;" @click="removeClick(row.id)">解除绑定</a>
            </template>
          </Table>
        </Card>
      </Col>
    </Row>
    <Modal v-model="modal1" width="300">
      <p style="margin-top: 20px; text-align: center; font-size: 14px">
        解绑之后，该用户将无法登录网站。
      </p>
      <div slot="footer" style="text-align: center">
        <Button type="primary" @click="rescind()">确定解绑</Button>
        <Button @click="close">再想想</Button>
      </div>
    </Modal>
    <Modal v-model="modal2" :mask-closable="false" width="50%">
      <p slot="header" style="text-align: center; font-size: 18px">
        绑定操作员
      </p>
      <Form ref="formItem" :model="formItem" :rules="ruleValidate">
        <div style="font-size: 14px; text-align: center; margin-bottom: 20px">
          <span> 姓名：</span>
          <FormItem prop="username">
            <Input
              placeholder="请填写真实姓名"
              style="width: 300px"
              v-model="formItem.username"
            />
          </FormItem>
        </div>
        <div style="font-size: 14px; text-align: center">
          <span> 手机：</span>
          <FormItem prop="phone">
            <Input
              placeholder="用于账号登录、信息发布等"
              style="width: 300px"
              v-model="formItem.phone"
            />
          </FormItem>
          <div v-show="phonecode === -31 || phonecode === -32">
            该号码已注册，请更换手机号
          </div>
        </div>
      </Form>
      <div slot="footer" style="text-align: center">
        <Button type="primary" @click="bind('formItem')">绑定</Button>
        <Button @click="close">取消</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: "setUp",
  components: {},
  data() {
    const judgeName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入姓名！"));
      } else if (value.length > 32) {
        callback(new Error("内容过长！"));
      } else if (
        value.match(this.REG.reg.chinese) == null &&
        value.match(this.REG.reg.english) == null
      ) {
        callback(new Error("名称含有特殊字符，请去除！"));
      } else {
        callback();
      }
    };
    const judgePhone = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号！"));
      } else if (value.match(this.REG.reg.telphone) == null) {
        callback(new Error("请输入11位手机号！"));
      } else {
        callback();
      }
    };
    return {
      form: {
        username: "王**",
        userId: "1234*******************6666",
        email: "1234567@qq.com",
        phone: "123****3456",
      },
      index: 1,
      modal1: false,
      modal2: false,
      columns: [
        {
          title: "姓名",
          key: "name",
          width: 80,
          align: "center",
        },
        {
          title: "手机号",
          key: "phone",
          align: "center",
        },
        {
          title: "绑定时间",
          key: "time",
          align: "center",
        },
        {
          title: "操作",
          slot: "action",
          align: "center",
        },
      ],
      data: [
        {
          name: "李某某",
          phone: "138****2345",
          time: "2019-07-03 09:08",
          id: 1,
        },
        {
          name: "李某某",
          phone: "138****2345",
          time: "2019-07-03 09:08",
          id: 2,
        },
        {
          name: "李某某",
          phone: "138****2345",
          time: "2019-07-03 09:08",
          id: 3,
        },
        {
          name: "李某某",
          phone: "138****2345",
          time: "2019-07-03 09:08",
          id: 4,
        },
      ],
      phone: "",
      formItem: {
        username: "",
        phone: "",
      },
      recindID: "",
      phonecode: 0,
      ruleValidate: {
        username: [{ validator: judgeName, trigger: "blur" }],
        phone: [{ validator: judgePhone, trigger: "blur" }],
      },
    };
  },
  created() {
   
  },
  watch: {
    
  },
  computed: {
    
  },
  methods: {
    removeClick(id) {
      // 解除绑定触发
      this.recindID = id;
      this.modal1 = true;
    },
    binding() {
      this.modal2 = true;
    },
    rescind() {
      // 解除绑定发送请求
      if (this.modal1) {
        this.modal1 = false;
        this.$store.dispatch("rescind", this.recindID);
        this.$Message.success("解除绑定成功");
      }
    },
    bind(name) {
      // 绑定账号
      this.$refs[name].validate((valid) => {
        if (valid) {
          const login = sessionStorage.getItem("loginsession");
          if (login !== null && login.length === 64) {
            const info = {
              phone: this.formItem.phone,
              name: this.formItem.username,
              sessionvalue: login,
            };
            this.$store.dispatch("bindUser", info);
          }
        }
      });
    },
    close() {
      this.modal1 = false;
      this.modal2 = false;
    },
    isfirst() {
      return true;
    },
  },
};
</script>

<style lang="less" scoped>
.setUp {
  .header {
    border-bottom: 1px solid #dcdee2;
    line-height: 50px;
  }
  .ivu-form-item {
    display: inline-block;
    margin-top: -6px;
  }
  .info {
    margin-bottom: 20px;
    li {
      margin-top: 20px;
      span {
        display: inline-block;
      }
      span:nth-of-type(1) {
        width: 20%;
        text-align: right;
        margin-right: 10%;
        color: #808695;
      }
      span:nth-of-type(2) {
        width: 70%;
      }
    }
  }
  .menu-div {
    text-align: center;
  }
  .ivu-layout-sider-trigger {
    display: none;
  }
  .ivu-menu-vertical .ivu-menu-item {
    padding-left: 10px;
    padding-right: 10px;
  }
}
.ivu-form-item {
  display: inline-block;
  margin-bottom: 15px;
  margin-top: -5px;
}
</style>