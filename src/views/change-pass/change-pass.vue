<style lang="less">
@import "./change-pass.less";
</style>

<template>
  <div>
    <Card class="change-pass">
      <Tabs v-model="tabValue">
        <TabPane label="密码设置" name="name1"
          >请与账号管理员联系或联系专属客服为您服务。</TabPane
        >
        <TabPane label="修改密码" name="name2">
          <div>
            <Form
              ref="editPasswordForm"
              :model="editPasswordForm"
              :label-width="100"
              label-position="right"
              :rules="passwordValidate"
              style="width: 450px"
            >
              <FormItem label="原密码" prop="oldPass" >
                <Input
                  type="password"
                  v-model="editPasswordForm.oldPass"
                  autocomplete="new-password"
                  placeholder="请输入现在使用的密码"
                ></Input>
              </FormItem>
              <FormItem label="新密码" prop="newPass">
                <SetPassword
                  v-model="editPasswordForm.newPass"
                  @on-change="changeInputPass"
                />
              </FormItem>
              <FormItem label="确认新密码" prop="rePass">
                <Input
                  type="password"
                  v-model="editPasswordForm.rePass"
                  placeholder="请再次输入新密码"
                ></Input>
              </FormItem>
              <FormItem>
                <Button
                  type="primary"
                  style="width: 100px; margin-right: 5px"
                  :loading="savePassLoading"
                  @click="saveEditPass"
                  >保存</Button
                >
                <Button @click="cancelEditPass">取消</Button>
              </FormItem>
            </Form>
          </div>
        </TabPane>
        <TabPane label="忘记密码" name="name3"
          >请与账号管理员联系或联系专属客服为您服务。</TabPane
        >
      </Tabs>
    </Card>
  </div>
</template>

<script>
import SetPassword from "@/views/my-components/xboot/set-password";
import { changePass, getOtherSet, ticketLogout } from "@/api/index";
export default {
  name: "change_pass",
  components: {
    SetPassword,
  },
  data() {
    const valideRePassword = (rule, value, callback) => {
      if (value !== this.editPasswordForm.newPass) {
        callback(new Error("两次输入密码不一致"));
      } else {
        callback();
      }
    };
    return {
      savePassLoading: false,
      editPasswordForm: {
        oldPass: "",
        newPass: "",
        rePass: "",
      },
      strength: "",
      passwordValidate: {
        oldPass: [
          {
            required: true,
            message: "请输入原密码",
            trigger: "blur",
          },
        ],
        newPass: [
          {
            required: true,
            message: "请输入新密码",
            trigger: "blur",
          },
          {
            min: 6,
            message: "请至少输入6个字符",
            trigger: "blur",
          },
          {
            max: 32,
            message: "最多输入32个字符",
            trigger: "blur",
          },
        ],
        rePass: [
          {
            required: true,
            message: "请再次输入新密码",
            trigger: "blur",
          },
          {
            validator: valideRePassword,
            trigger: "blur",
          },
        ],
      },
      tabValue: 'name1'
    };
  },
  methods: {
    changeInputPass(v, grade, strength) {
      this.strength = strength;
    },
    saveEditPass() {
      let params = {
        password: this.editPasswordForm.oldPass,
        newPass: this.editPasswordForm.newPass,
        passStrength: this.strength,
      };
      this.$refs["editPasswordForm"].validate((valid) => {
        if (valid) {
          this.savePassLoading = true;
          changePass(params).then((res) => {
            this.savePassLoading = false;
            if (res.success) {
              this.$Modal.success({
                title: "修改密码成功",
                content: "修改密码成功，需重新登录",
                onOk: () => {
                  // this.$store.commit("logout", this);
                  // this.$store.commit("clearOpenedSubmenu");
                  // this.$router.push({
                  //   name: "login"
                  // });
                  // 退出登录
                  this.$store.commit("setLoading", true);
                  let sessionId = localStorage.getItem("sessionId");
                  ticketLogout({ sessionId }).then((res) => {
                    if (res.success) {
                      getOtherSet().then((res) => {
                        this.$store.commit("setLoading", false);
                        if (res.result) {
                          let domain = res.result.ssoDomain;
                          Cookies.set("accessToken", "", {
                            domain: domain,
                            expires: 7,
                          });
                        }
                        this.$store.commit("logout", this);
                        this.$store.commit("clearOpenedSubmenu");
                        this.setStore("accessToken", "");
                        // 强制刷新页面 重新加载router
                        location.reload();
                      });
                    }
                  });
                },
              });
            }
          });
        }
      });
    },
    cancelEditPass() {
      this.$store.commit("removeTag", "change_pass");
      localStorage.pageOpenedList = JSON.stringify(
        this.$store.state.app.pageOpenedList
      );
      let lastPageName = "";
      let length = this.$store.state.app.pageOpenedList.length;
      if (length > 1) {
        lastPageName = this.$store.state.app.pageOpenedList[length - 1].name;
      } else {
        lastPageName = this.$store.state.app.pageOpenedList[0].name;
      }
      this.$router.push({
        name: lastPageName,
      });
    },
  },
  mounted() {},
  activated() {
    let paramsType = this.$route.params.type;
    if (paramsType == "edit") {
        this.tabValue = 'name2'
    }
    this.init();
  },
};
</script>