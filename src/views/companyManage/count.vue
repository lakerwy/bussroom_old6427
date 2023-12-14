<style lang="less">
  @import "../../styles/table-common.less";
</style>
<template>

  <div class="search">
    <Card>

      <!-- 导入数据 -->
      <Menu mode="horizontal" theme="light" :active-name="activeMenu" @on-select="selectMenu"
        style="margin-bottom:30px;">
        <MenuItem :name="1">
        现有成员
        </MenuItem>
        <MenuItem :name="2">
        待审核({{ waitingNum }})
        </MenuItem>
        <!-- <MenuItem :name="3">
        删除记录
        </MenuItem> -->
      </Menu>
      <div class="contentItem" v-show="activeMenu === 1">
        <Row v-show="openSearch" @keydown.enter.native="handleSearch">
          <Form ref="searchForm" :model="searchForm" inline :label-width="70">
            <Form-item label="姓名" prop="nickname">
              <Input type="text" v-model="searchForm.nickname" clearable placeholder="请输入用户姓名" style="width: 200px" />
            </Form-item>
            <Form-item label="部门" prop="department">
              <Input v-model="searchForm.department" placeholder="请输入部门名称"></Input>
            </Form-item>
            <span v-if="drop">
              <Form-item label="手机号" prop="mobile">
                <Input type="text" v-model="searchForm.mobile" clearable placeholder="请输入手机号" style="width: 200px" />
              </Form-item>
              <Form-item label="邮箱" prop="email">
                <Input type="text" v-model="searchForm.email" clearable placeholder="请输入邮箱" style="width: 200px" />
              </Form-item>
              <Form-item label="性别" prop="sex">
                <Select v-model="searchForm.sex" placeholder="请选择" clearable style="width: 200px">
                  <Option v-for="(item, i) in dictSex" :key="i" :value="item.value">{{item.title}}</Option>
                </Select>
              </Form-item>
              <Form-item label="用户类型" prop="type">
                <Select v-model="searchForm.type" placeholder="请选择" clearable style="width: 200px">
                  <Option value="0">普通用户</Option>
                  <Option value="1">管理员</Option>
                </Select>
              </Form-item>
              <Form-item label="用户状态" prop="status">
                <Select v-model="searchForm.status" placeholder="请选择" clearable style="width: 200px">
                  <Option value="0">正常</Option>
                  <Option value="-1">禁用</Option>
                </Select>
              </Form-item>
              <Form-item label="创建时间">
                <DatePicker v-model="selectDate" type="daterange" format="yyyy-MM-dd" clearable
                  @on-change="selectDateRange" placeholder="选择起始时间" style="width: 200px"></DatePicker>
              </Form-item>
            </span>
            <Form-item style="margin-left:-35px;" class="br">
              <Button @click="handleSearch" type="primary" icon="ios-search">搜索</Button>
              <Button @click="handleReset">重置</Button>
            </Form-item>
          </Form>
        </Row>
        <Row class="operation">
          <Button @click="add" type="primary" icon="md-add">添加用户</Button>
          <Button @click="resetPass" icon="md-trash">重置用户密码</Button>
          <Button @click="importModalVisible = true" ghost type="primary" icon="md-arrow-round-up"
            style="float:right;">批量导入数据</Button>
        </Row>
        <Row v-show="openTip">
          <Alert show-icon>
            已选择
            <span class="select-count">{{selectCount}}</span> 项
            <!-- <a class="select-clear" @click="clearSelectAll">清空</a> -->
          </Alert>
        </Row>
        <Row>
          <Table :loading="loading" border :columns="columns" :data="data" sortable="custom"
            @on-sort-change="changeSort" @on-selection-change="showSelect" ref="table"></Table>
        </Row>

      </div>
      <div class="contentItem" v-show="activeMenu === 2">
        <Alert show-icon>共有 <span style="color:#2d8cf0;">{{ waitingNum }}</span> 人申请加入您企业账号</Alert>
        <Table :loading="loading" border :columns="columns2" :data="data" sortable="custom" @on-sort-change="changeSort"
          @on-selection-change="showSelect" ref="table"></Table>
      </div>
      <div class="contentItem" v-show="activeMenu === 3">
        <Table :loading="loading" border :columns="columns3" :data="data" sortable="custom" @on-sort-change="changeSort"
          @on-selection-change="showSelect" ref="table"></Table>
      </div>
      <Row type="flex" justify="end" class="page">


        <Page transfer style="display: inline-block;" :total="total" :page-size="searchForm.pageSize"
          :current.sync="searchForm.pageNumber" show-sizer @on-change="changePage" show-elevator show-total
          @on-page-size-change="changePageSize" :page-size-opts="[10,20,50]" size="small" />


        <Page v-show="false" transfer :current.sync="searchForm.pageNumber" :total="total" :page-size="searchForm.pageSize"
          @on-change.prevent="changePage" @on-page-size-change="changePageSize" :page-size-opts="[10,20,50]"
          size="small" show-total show-elevator show-sizer></Page>
      </Row>
    </Card>
    <Modal v-model="resultFlag" title="导入结果" style="text-align:center;" @on-ok="ok" @on-cancel="cancel">
      <p style=" text-align:center;">
        <Icon type="ios-document-outline" size="50" />
        <p v-html="resultMessage" style="margin:10px 0;"></p>
      </p>
      <Button type="error" @click="downError" v-show="downloadFlag">下载错误报告</Button>
    </Modal>
    <Modal v-model="codeFlag" title="生成二维码" style="text-align:center;" @on-ok="ok" @on-cancel="cancel">
      <p style=" text-align:center;">
        <Icon type="ios-contacts" size="30" />微信扫一扫，分享到朋友圈
      </p>
      <img :src="codeSrc" style="margin:0 auto;" alt />
    </Modal>

    <Modal v-model="setFlag" title="编辑用户" :mask-closable="false" :width="500" :styles="{top: '30px'}">
      <Form ref="form" :model="form" :label-width="70" :rules="formValidate">
        <Form-item label="部门" prop="department">
          <Input v-model="form.department" placeholder="请输入部门名"></Input>
        </Form-item>
        <FormItem label="用户类型" prop="type">
          <Select v-model="form.type" placeholder="请选择" :disabled="disableType">
            <Option :value="0">普通用户</Option>
            <Option :value="1">管理员</Option>
          </Select>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="text" @click="cancelSet">取消</Button>
        <Button type="primary" :loading="submitLoading" @click="newSubmitUser">提交修改</Button>
      </div>
    </Modal>
    <Modal :title="modalTitle" v-model="userModalVisible" :mask-closable="false" :width="500" :styles="{top: '30px'}"
      footer-hide>
      <Tabs type="card" v-model="tabsFlag">
        <TabPane label="手动添加" name="1">
          <Form ref="form" :model="form" :label-width="70" :rules="formValidate">
            <FormItem label="姓名" prop="nickname">
              <Input v-model="form.nickname" />
            </FormItem>
            <FormItem label="部门" prop="department">
              <Input v-model="form.department" />
            </FormItem>

            <FormItem label="性别" prop="sex">
              <RadioGroup v-model="form.sex">
                <Radio v-for="(item, i) in dictSex" :key="i" :label="item.value">{{item.title}}</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem label="手机号" prop="mobile">
              <Input v-model="form.mobile" />
            </FormItem>
            <FormItem label="随机密码" prop="password">
              <Input type="text" v-model="password" disabled autocomplete="off" />
            </FormItem>
            <!-- <FormItem  label="邮箱" prop="email">
          <Input v-model="form.email" />
            </FormItem>-->
            <!-- <Form-item label="头像" prop="avatar">
          <upload-pic-input v-model="form.avatar"></upload-pic-input>
        </Form-item>
        <Form-item label="所属部门">
          <department-tree-choose @on-change="handleSelectDepTree" ref="depTree"></department-tree-choose>
        </Form-item>
        <FormItem label="用户类型" prop="type">
          <Select v-model="form.type" placeholder="请选择">
            <Option :value="0">普通用户</Option>
            <Option :value="1">管理员</Option>
          </Select>
        </FormItem>
        <FormItem label="角色分配" prop="roles">
          <Select v-model="form.roles" multiple>
            <Option v-for="item in roleList" :value="item.id" :key="item.id" :label="item.nickname">
              <span style="margin-right:10px;">{{ item.nickname }}</span>
              <span style="color:#ccc;">{{ item.description }}</span>
            </Option>
          </Select>
            </FormItem>-->
            <FormItem>
              <Button type="cancel" @click="cancelUser" long>取消</Button>
              <Button long type="primary" :loading="submitLoading" @click="tijiao">提交</Button>
            </FormItem>
          </Form>
        </TabPane>
        <TabPane label="微信邀请" name="2">
          <p>
            您还未生成名片：
            <Button type="primary" :disabled="timeoutFlag" @click="getCard">
              生成名片
              <span v-show="timeoutFlag">({{ timeout }}S)</span>
            </Button>
          </p>
        </TabPane>
      </Tabs>
    </Modal>
    <!-- 自定义导出数据 -->
    <Modal v-model="exportModalVisible" :title="exportTitle" :loading="loadingExport" @on-ok="exportCustomData">
      <Form ref="exportForm" :label-width="100">
        <FormItem label="导出文件名">
          <Input v-model="filename" />
        </FormItem>
        <FormItem label="自定义导出列">
          <CheckboxGroup v-model="chooseColumns">
            <Checkbox v-for="(item, i) in exportColumns" :label="item.title" :key="i" :value="item.checked"
              :disabled="item.disabled"></Checkbox>
          </CheckboxGroup>
        </FormItem>
      </Form>
    </Modal>
    <Drawer title="导入数据" closable v-model="importModalVisible" width="1000">
      <div style="display:flex;justify-content: space-between;align-items: center;">
        <Upload action :before-upload="beforeUploadImport" accept=".xls, .xlsx">
          <Button :loading="reading" type="primary" icon="ios-cloud-upload-outline"
            style="margin-right:10px">上传Excel文件</Button>
          <span v-if="uploadfile.name">当前选择文件：{{ uploadfile.name }}</span>
        </Upload>
        <Button @click="clearImportData" icon="md-trash">清空数据</Button>
      </div>
      <Alert type="warning" show-icon>第一步：下载模板；第二步，编写内容；第三步，批量导入</Alert>
      <Table :columns="importColumns" border :height="height" :data="importTableData" ref="importTable"></Table>
      <div class="drawer-footer">
        <Button @click="downloadTemple" type="info">下载导入模板</Button>
        <div style="position:absolute;right:15px;display: inline-block">
          <Button @click="importModalVisible=false">关闭</Button>
          <Button :loading="importLoading" :disabled="importTableData.length<=0" @click="importData"
            style="margin-left:8px" type="primary">
            确认导入
            <span v-if="importTableData.length>0">{{importTableData.length}} 条数据</span>
          </Button>
        </div>
      </div>
    </Drawer>

    <check-password ref="checkPass" @on-success="resetPass" />
  </div>
</template>

<script>
  import {
    downloadError,
    getUserListData,
    getAllRoleList,
    addUser,
    editUser,
    enableUser,
    disableUser,
    deleteUser,
    detachUser,
    getAllUserData,
    uploadUserInfo,
    resetUserPass,
    create,
    userInfo,
    getOtherSet,
    getInviteCode
  } from "@/api/index";
  import expandRow from "./expand.vue";
  import {
    validateMobile,
    validatePassword,
    checkEmpty
  } from "@/libs/validate";
  import departmentChoose from "@/views/my-components/xboot/department-choose";
  import departmentTreeChoose from "@/views/my-components/xboot/department-tree-choose";
  import uploadPicInput from "@/views/my-components/xboot/upload-pic-input";
  import checkPassword from "@/views/my-components/xboot/check-password";
  // 模版导入文件表数据
  import {
    userColumns,
    userData
  } from "@/libs/importTemplate";
  // 指定导出列数据
  import {
    exportColumn
  } from "./exportColumn";
  import excel from "@/libs/excel";
  import Cookies from "js-cookie";
  export default {
    name: "count",
    components: {
      expandRow,
      departmentChoose,
      departmentTreeChoose,
      uploadPicInput,
      checkPassword,
      userInfo
    },
    data() {
      return {
        activeMenu: 1,
        disableType: false,
        v: {},
        downloadFlag: true,
        resultMessage: true,
        resultFlag: false,
        resultMessage: "",
        companyId: 1,
        timeout: 15,
        timeoutFlag: false,
        codeSrc: "",
        codeFlag: false,
        infoFlag: false,
        companyFlag: false,
        personnelFlag: true,
        tabsFlag: "1",
        setFlag: false,
        height: 510,
        openSearch: true,
        openTip: true,
        loading: true,
        reading: false,
        importLoading: false,
        loadingExport: true,
        exportModalVisible: false,
        importModalVisible: false,
        drop: false,
        dropDownContent: "展开",
        dropDownIcon: "ios-arrow-down",
        selectCount: 0,
        selectList: [],
        searchForm: {
          id: "",
          username: "",
          departmentId: "",
          mobile: "",
          email: "",
          sex: "",
          type: "",
          status: "",
          pageNumber: 1,
          pageSize: 10,
          sort: "createTime",
          order: "desc",
          startDate: "",
          endDate: "",
          department: "",
          nickname: "",
          status: " "
        },
        selectDate: null,
        modalType: 0,
        userModalVisible: false,
        modalTitle: "",
        form: {
          username: "",
          mobile: "",
          sex: "",
          type: 0,
          roles: [],
          departmentId: "",
          departmentTitle: "",
          nickname: "",
          password: "",
          department: ""
        },
        userRoles: [],
        roleList: [],
        errorPass: "",
        formValidate: {
          nickname: [{
              required: true,
              message: "姓名不能为空",
              trigger: "blur"
            },
            {
              validator: checkEmpty,
              trigger: "blur"
            }
          ],
          mobile: [{
              required: true,
              message: "手机号不能为空",
              trigger: "blur"
            },
            {
              validator: validateMobile,
              trigger: "blur"
            }
          ],
          sex: [{
            required: true,
            message: "性别不能为空",
            trigger: "blur"
          }],
          department: [{
              required: true,
              message: "部门不能为空",
              trigger: "blur"
            },
            {
              validator: checkEmpty,
              trigger: "blur"
            }
          ]
        },
        editValidate: {
          department: [{
              required: true,
              message: "部门不能为空",
              trigger: "blur"
            },
            {
              validator: checkEmpty,
              trigger: "blur"
            }
          ]
        },
        submitLoading: false,
        columns: [{
            type: "selection",
            width: 60,
            align: "center",
            fixed: "left"
          },

          {
            type: "index",
            width: 70,
            align: "center",
            title: "序号",
            fixed: "left"
          },
          // {
          //   title: "用户名",
          //   key: "username",
          //   minWidth: 145,
          //   sortable: true,
          //   fixed: "left"
          // },
          {
            title: "头像",
            key: "avatar",
            minWidth: 80,
            align: "center",
            render: (h, params) => {
              return h("Avatar", {
                props: {
                  src: params.row.avatar
                }
              });
            }
          },
          {
            title: "姓名",
            key: "nickname",
            minWidth: 145
          },
          {
            title: "部门",
            key: "department",
            minWidth: 110
          },
          {
            title: "手机",
            key: "mobile",
            minWidth: 88,
            sortable: true,
            render: (h, params) => {
              if (params.row.mobile) {
                return h("span", "已绑定");
              } else {
                return h("span", "未绑定");
              }
            }
          },
          {
            title: "邮箱",
            key: "email",
            minWidth: 88,
            sortable: true,
            render: (h, params) => {
              // if (this.getStore("roles").includes("ROLE_ADMIN")) {
              //   return h("span", params.row.mobile);
              // } else {
              //   return h("span", "您无权查看该数据");
              // }
              if (params.row.email) {
                return h("span", "已绑定");
              } else {
                return h("span", "未绑定");
              }
            }
          },
          {
            title: "微信",
            key: "wechat",
            minWidth: 88,
            sortable: true,
            render: (h, params) => {
              if (params.row.wechat) {
                return h("span", "已绑定");
              } else {
                return h("span", "未绑定");
              }
            }
          },
          {
            title: "APP",
            key: "app",
            minWidth: 88,
            sortable: true,
            render: (h, params) => {
              if (params.row.app) {
                return h("span", "已绑定");
              } else {
                return h("span", "未绑定");
              }
            }
          },
          {
            title: "用户类型",
            key: "type",
            align: "center",
            minWidth: 100,
            render: (h, params) => {
              let re = "";
              if (params.row.type == 1) {
                re = "管理员";
              } else if (params.row.type == 0) {
                re = "普通用户";
              }
              return h("div", re);
            }
          },
          {
            title: "状态",
            key: "status",
            align: "center",
            minWidth: 110,
            render: (h, params) => {
              if (params.row.status == 0) {
                return h("div", [
                  h("Badge", {
                    props: {
                      status: "success",
                      text: "正常启用"
                    }
                  })
                ]);
              } else if (params.row.status == -1) {
                return h("div", [
                  h("Badge", {
                    props: {
                      status: "error",
                      text: "禁用"
                    }
                  })
                ]);
              }
            },
            filters: [{
                label: "正常启用",
                value: 0
              },
              {
                label: "禁用",
                value: -1
              }
            ],
            filterMultiple: false,
            filterMethod(value, row) {
              if (value == 0) {
                return row.status == 0;
              } else if (value == -1) {
                return row.status == -1;
              }
            }
          },
          {
            title: "操作",
            key: "action",
            minWidth: 200,
            align: "center",
            fixed: "right",
            render: (h, params) => {
              let enableOrDisable = "";
              if (params.row.status == 0) {
                enableOrDisable = h(
                  "Button", {
                    props: {
                      size: "small",
                      disabled: this.v.id === params.row.id,
                      type: "warning"
                    },
                    style: {
                      marginRight: "5px"
                    },
                    on: {
                      click: () => {
                        this.disable(params.row);
                      }
                    }
                  },
                  "禁用"
                );
              } else {
                enableOrDisable = h(
                  "Button", {
                    props: {
                      type: "success",
                      size: "small"
                    },
                    style: {
                      marginRight: "5px"
                    },
                    on: {
                      click: () => {
                        this.enable(params.row);
                      }
                    }
                  },
                  "启用"
                );
              }
              return h("div", [
                h(
                  "Button", {
                    props: {
                      type: "primary",
                      size: "small"
                    },
                    style: {
                      marginRight: "5px"
                    },
                    on: {
                      click: () => {
                        this.disableType = this.v.id === params.row.id ? true : false;
                        this.edit(params.row);
                      }
                    }
                  },
                  "编辑"
                ),
                enableOrDisable,
                h(
                  "Button", {
                    props: {
                      type: "error",
                      size: "small",
                      disabled: this.v.id === params.row.id
                    },
                    on: {
                      click: () => {
                        this.remove(params.row)
                      }
                    }
                  },
                  "删除"
                )
              ]);
            }
          }
        ],
        columns2: [{
            type: "index",
            width: 70,
            align: "center",
            title: "序号"
          },

          {
            title: "头像",
            key: "avatar",
            width: 80,
            align: "center",
            render: (h, params) => {
              return h("Avatar", {
                props: {
                  src: params.row.avatar
                }
              });
            }
          },
          // {
          //   title: "用户名",
          //   key: "username",
          //   minWidth: 145,
          //   sortable: true,
          // },
          {
            title: "申请人姓名",
            key: "nickname",
            align: "center",
            minWidth: 120
          },
          {
            title: "申请时间",
            key: "createTime",
            align: "center",
            minWidth: 120
          },
          {
            title: "申请方式",
            key: "type",
            align: "center",
            minWidth: 120,
            render: (h, params) => {
              let re = "";
              if (params.row.registerType === 0) {
                re = "正常注册";
              } else if (params.row.registerType === 1) {
                re = "手动创建";
              } else if (params.row.registerType === 2) {
                re = "微信邀请";
              } else if (params.row.registerType === 3) {
                re = "批量导入";
              }
              return h("div", re);
            }
          },
          {
            title: "邀请人",
            key: "creator",
            align: "center",
            minWidth: 120
          },
          {
            title: "操作",
            key: "action",
            width: 200,
            align: "center",
            render: (h, params) => {

              return h("div", [
                h(
                  "Button", {
                    props: {
                      type: "primary",
                      size: "small"
                    },
                    style: {
                      marginRight: "5px"
                    },
                    on: {
                      click: () => {
                        this.enable(params.row);
                      }
                    }
                  },
                  "同意加入"
                ),
                h(
                  "Button", {
                    props: {
                      type: "error",
                      size: "small",
                      disabled: this.v.id === params.row.id
                    },
                    on: {
                      click: () => {
                        this.remove(params.row);
                      }
                    }
                  },
                  "删除"
                )
              ]);
            }
          }
        ],
        columns3: [{
            type: "index",
            minWidth: 80,
            align: "center",
            title: "序号"
          },
          // {
          //   title: "用户名",
          //   key: "username",
          //   minWidth: 145,
          //   sortable: true,
          // },
          {
            title: "头像",
            key: "avatar",
            minWidth: 80,
            align: "center",
            render: (h, params) => {
              return h("Avatar", {
                props: {
                  src: params.row.avatar
                }
              });
            }
          },
          {
            title: "姓名",
            key: "nickname",
            minWidth: 100
          },

          {
            title: "部门",
            key: "department",
            minWidth: 100
          },
          {
            title: "申请方式",
            key: "type",
            align: "center",
            minWidth: 100,
            render: (h, params) => {
              let re = "";
              if (params.row.registerType === 0) {
                re = "正常注册";
              } else if (params.row.registerType === 1) {
                re = "手动创建";
              } else if (params.row.registerType === 2) {
                re = "微信邀请";
              } else if (params.row.registerType === 3) {
                re = "批量导入";
              }
              return h("div", re);
            }
          },
          {
            title: "邀请人",
            key: "creator",
            align: "center",
            minWidth: 110
          },
          {
            title: "删除时间",
            key: "updateTime",
            minWidth: 120
          },
          // {
          //   title: "操作",
          //   key: "action",
          //   minWidth: 100,
          //   align: "center",
          //   render: (h, params) => {

          //     return h("div", [

          //       h(
          //         "Button", {
          //           props: {
          //             type: "error",
          //             size: "small",
          //             disabled: this.v.id === params.row.id
          //           },
          //           on: {
          //             click: () => {
          //               this.remove(params.row);
          //             }
          //           }
          //         },
          //         "删除记录"
          //       )
          //     ]);
          //   }
          // }
        ],
        exportColumns: exportColumn,
        chooseColumns: [],
        filename: "用户数据",
        exportTitle: "确认导出",
        exportType: "",
        importTableData: [],
        importColumns: [],
        uploadfile: {
          name: ""
        },
        tempColumns: userColumns,
        tempData: userData,
        data: [],
        exportData: [],
        total: 0,
        dictSex: this.$store.state.dict.sex,
        password: "123456",
        roleNow: {},
        waitingNum: 0
      };
    },
    methods: {
      selectMenu(name) {
        this.activeMenu = name;
        switch (name) {
          case 1: //现有成员
            this.searchForm.delFlag = 0;
            delete this.searchForm.status;
            break;
          case 2: //待审核列表
            this.searchForm.status = 1;
            delete this.searchForm.delFlag;
            break;
          case 3: //删除记录
            this.searchForm.delFlag = 1;
            delete this.searchForm.status;
            break;
          default:
            break;
        }
        this.handleReset()
      },
      cancelSet() {
        this.setFlag = false;
      },
      tijiao() {
        var that = this;
        this.formValidate.nickname = [{
            required: true,
            message: "姓名不能为空",
            trigger: "blur"
          },
          {
            validator: checkEmpty,
            trigger: "blur"
          }
        ];
        this.formValidate.mobile = [{
            required: true,
            message: "手机号不能为空",
            trigger: "blur"
          },
          {
            validator: validateMobile,
            trigger: "blur"
          }
        ];
        this.formValidate.sex = [{
          required: true,
          message: "性别不能为空",
          trigger: "blur"
        }];
        this.$refs.form.validate(valid => {
          if (valid) {
            var data = {};
            data.username = that.form.mobile;
            data.nickname = that.form.nickname;
            data.mobile = that.form.mobile;
            data.sex = that.form.sex;
            data.password = that.password;
            data.department = that.form.department;
            //管理员权限 data.roles = "1289042242639630336";
            data.roleIds = "1267725543390973952";
            // data.email = "14453@qq.com";
            addUser(data).then(res => {
              if (res.success) {
                this.$Message.success(res.message);
                this.getUserList();
                this.getWatingNum();
                this.userModalVisible = false;
              }
            });
          }
        });
      },
      getCard() {
        this.$Modal.success({
          title: "企业名片",
          content: "通过【企业名片】您可以邀请您的同事加入到您的企业的会员账号中，一起开启高效的办公体验。",
          onOk: () => {
            this.timeout = 15;
            var timeId = setInterval(() => {
              this.timeout -= 1;
            }, 1000);
            setTimeout(() => {
              this.timeoutFlag = false;
              this.timeout = 15;
              clearInterval(timeId);
            }, 15000);

            var that = this;
            create(parseInt(Math.random() * 10000)).then(res => {
              if (res.success) {
                let v = JSON.parse(Cookies.get("userInfo"));
                var inviterId = v.id
                getInviteCode().then(response => { //这里的第一次处理后台返回来的二进制留数据 转化为base64
                  //这里的data数据是后台返回来的，这里的key是params中的键值（byte）
                  return 'data:image/png;base64,' + btoa(
                    new Uint8Array(response).reduce((data, key) => data + String.fromCharCode(key),
                      '')
                  )
                }).then(data => { //这一次箭头函数是依赖于第一次.then函数处理的data值
                  this.codeSrc = data
                })
                that.codeFlag = true;
                // that.getLinkFlag()
              } else if (res.code == 500 && res.message == "请先完善企业信息") {
                this.tabsFlag = "1";
                this.$Message.warning(res.message);
              } else if (res.code == 500 && res.message == "请先完善个人信息") {
                this.infoFlag = true;
              }
            });
          }
        });

      },
      getWatingNum() {
        getUserListData({
          id: "",
          username: "",
          departmentId: "",
          mobile: "",
          email: "",
          sex: "",
          type: "",
          status: "",
          pageNumber: 1,
          pageSize: 10,
          sort: "createTime",
          order: "desc",
          startDate: "",
          endDate: "",
          department: "",
          nickname: "",
          status: 1
        }).then(res => {
          this.loading = false;
          if (res.success) {
            this.waitingNum = res.result.totalElements;
          }
        });
      },
      init() {
        this.getUserList();
        // 初始化导出列数据
        this.getWatingNum();
        let array = [];
        this.exportColumns.forEach(e => {
          // 指定列限制权限
          if (
            !this.getStore("roles").includes("ROLE_ADMIN") &&
            e.key == "mobile"
          ) {
            e.title = "[无权导出] " + e.title;
            e.disabled = true;
          } else {
            e.disabled = false;
          }
          array.push(e.title);
        });
        this.chooseColumns = array;
      },
      handleSelectDepTree(v) {
        this.form.departmentId = v;
      },
      handleSelectDep(v) {
        this.searchForm.departmentId = v;
      },
      changePage(v) {
        this.searchForm.pageNumber = v;
        this.getUserList();
        this.clearSelectAll();
      },
      changePageSize(v) {
        this.searchForm.pageSize = v;
        this.getUserList();
      },
      selectDateRange(v) {
        if (v) {
          this.searchForm.startDate = v[0];
          this.searchForm.endDate = v[1];
        }
      },
      getUserList() {
        // 多条件搜索用户列表
        this.loading = true;
        // 避免后端默认值
        if (!this.searchForm.type) {
          this.searchForm.type = " ";
        }
        if (!this.searchForm.status) {
          this.searchForm.status = " ";
        }
        this.data = []
        getUserListData(this.searchForm).then(res => {
          console.log('---------------------',this.searchForm,res.result.content)
          this.loading = false;
          if (res.success) {
            this.data = res.result.content;
            this.data.forEach(item => {
              item.creator = item.creator ? item.creator : "无";
              item.createTime = item.createTime ? item.createTime.split(" ")[0] : "";
              item.updateTime = item.updateTime ? item.updateTime.split(" ")[0] : "";
            })
            this.total = res.result.totalElements;
            if (this.searchForm.status == 1) {
              this.waitingNum = res.result.totalElements;
            }
          }
        });
      },
      handleSearch() {
        this.searchForm.pageNumber = 1;
        this.searchForm.pageSize = 10;
        this.getUserList();
      },
      handleReset() {
        this.$refs.searchForm.resetFields();
        this.searchForm.pageNumber = 1;
        this.searchForm.pageSize = 10;
        this.selectDate = null;
        this.searchForm.startDate = "";
        this.searchForm.endDate = "";
        this.searchForm.departmentId = "";
        // 重新加载数据
        this.getUserList();
      },
      changeSort(e) {
        this.searchForm.sort = e.key;
        this.searchForm.order = e.order;
        if (e.order == "normal") {
          this.searchForm.order = "";
        }
        this.getUserList();
      },
      getRoleList() {
        getAllRoleList().then(res => {
          if (res.success) {
            this.roleList = res.result;
          }
        });
      },
      handleDropdown(name) {
        if (name == "refresh") {
          this.getUserList();
        } else if (name == "reset") {
          if (this.selectCount <= 0) {
            this.$Message.warning("您还未选择要重置密码的用户");
            return;
          }
          this.$refs.checkPass.show();
        } else if (name == "exportData") {
          if (this.selectCount <= 0) {
            this.$Message.warning("您还未选择要导出的数据");
            return;
          }
          this.exportType = "part";
          this.exportModalVisible = true;
          this.exportTitle = "确认导出 " + this.selectCount + " 条数据(付费)";
        } else if (name == "exportAll") {
          this.exportType = "all";
          this.exportModalVisible = true;
          this.exportTitle = "确认导出全部 " + this.total + " 条数据(付费)";
          getAllUserData().then(res => {
            if (res.success) {
              this.exportData = res.result;
            }
          });
        } else if (name == "importData") {
          this.importModalVisible = true;
        }
      },
      resetPass() {
        if (this.selectList.length > 0) {
          this.$Modal.confirm({
            title: "确认重置",
            content: "您确认要重置所选的 " +
              this.selectCount +
              " 条用户数据密码为【123456】?",
            loading: true,
            onOk: () => {
              let ids = "";
              this.selectList.forEach(function (e) {
                ids += e.id + ",";
              });
              ids = ids.substring(0, ids.length - 1);
              resetUserPass({
                ids: ids
              }).then(res => {
                this.$Modal.remove();
                if (res.success) {
                  this.$Message.success("操作成功");
                  this.clearSelectAll();
                  this.getUserList();
                }
              });
            }
          });
        } else {
          this.$Modal.warning({
            title: "提醒",
            content: "请先选择需要重置密码的用户"
          })
        }

      },
      exportCustomData() {
        if (this.filename == "") {
          this.filename = "用户数据";
        }
        // 判断勾选导出列
        let array = [];
        this.exportColumns.forEach(e => {
          this.chooseColumns.forEach(c => {
            if (e.title == c && !e.disabled) {
              array.push(e);
            }
          });
        });
        this.exportColumns = array;
        this.exportModalVisible = false;
        let title = [];
        let key = [];
        this.exportColumns.forEach(e => {
          title.push(e.title);
          key.push(e.key);
        });
        const params = {
          title: title,
          key: key,
          data: this.exportData,
          autoWidth: true,
          filename: this.filename
        };
        excel.export_array_to_excel(params);
      },
      beforeUploadImport(file) {

        this.uploadfile = file;
        const fileExt = file.name
          .split(".")
          .pop()
          .toLocaleLowerCase();
        if (fileExt == "xlsx" || fileExt == "xls") {
          this.readFile(file);
          this.file = file;
        } else {
          this.$Notice.warning({
            title: "文件类型错误",
            desc: "所选文件‘ " +
              file.nickname +
              " ’不是EXCEL文件，请选择后缀为.xlsx或者.xls的EXCEL文件。"
          });
        }
        return false;
      },
      // 读取文件
      readFile(file) {
        this.reading = true;
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onerror = e => {
          this.reading = false;
          this.$Message.error("文件读取出错");
        };
        reader.onload = e => {
          const data = e.target.result;
          let {
            header,
            results
          } = excel.read(data, "array");

          header = [{
              title: "手机号",
              key: "手机号"
            },
            {
              title: "姓名",
              key: "姓名"
            },
            {
              title: "部门",
              key: "部门"
            }
          ]
          const tableTitle = header.map(item => {
            return {
              title: item.title,
              key: item.key,
              minWidth: 100,
              align: "center"
            };
          });
          this.importTableData = results;
          this.importColumns = tableTitle;
          this.reading = false;
          this.$Message.success("读取数据成功");
        };
      },
      clearImportData() {
        this.importTableData = [];
        this.importColumns = [];
        this.uploadfile = {};
      },
      downloadTemple() {
        let title = [];
        let key = [];
        userColumns.forEach(e => {
          title.push(e.title);
          key.push(e.key);
        });
        const params = {
          title: title,
          key: key,
          data: userData,
          autoWidth: true,
          filename: "导入用户数据模版"
        };
        excel.export_array_to_excel(params);
      },
      importData() {

        this.importLoading = true;
        let arr = []
        this.importTableData.forEach(a => {
          let obj = {}
          obj.mobile = a.手机号
          obj.nickname = a.姓名
          obj.department = a.部门
          arr.push(obj)
        })
        uploadUserInfo(arr).then(res => {
          this.importLoading = false;
          if (res.success) {
            this.importModalVisible = false;

            if (res.message.indexOf("失败") === -1) {
              this.resultMessage = "导入成功";
              this.downloadFlag = false;
              this.getWatingNum();
            } else {
              this.downloadFlag = true;
              this.resultMessage = "导入失败";
            }
            this.getUserList();
            // this.$Modal.info({
            //   title: "导入结果",
            //   content: res.message
            // });
            this.resultFlag = true;
            // this.importTableData = [];
          }
        });
      },
      downError() {
        let arr = []
        this.importTableData.forEach(a => {
          let obj = {}
          obj.mobile = a.手机号
          obj.nickname = a.姓名
          obj.department = a.部门
          arr.push(obj)
        })
        downloadError(arr).then(res => {
          const blob = new Blob([res], {
            type: "application/vnd.ms-excel;charset=utf-8"
          }); //,{type: 'application/vnd.ms-excel;charset=utf-8'}

          let fileName = '错误报告.xlsx';
          const elink = document.createElement('a');
          elink.download = fileName;
          elink.style.display = 'none';
          elink.href = URL.createObjectURL(blob);
          document.body.appendChild(elink);
          elink.click();
          URL.revokeObjectURL(elink.href); // 释放URL 对象
          document.body.removeChild(elink);
          this.resultFlag = false;

        });
      },
      download(blobUrl) {
        const a = document.createElement('a');
        a.style.display = 'none';
        a.download = '<文件名>';
        a.href = blobUrl;
        a.click();
        document.body.removeChild(a);
      },
      cancelUser() {
        this.userModalVisible = false;
      },
      newSubmitUser(a) {
        delete this.formValidate.nickname;
        delete this.formValidate.mobile;
        delete this.formValidate.sex;
        this.$refs.form.validate(valid => {
          if (valid) {
            this.submitLoading = true;
            this.form.department = this.form.department;
            delete this.form.avatar;
            delete this.form.email;
            delete this.form.roles;
            delete this.form.permissions;
            delete this.form.createTime;
            delete this.form.updateTime;
            delete this.form.companyId;
            delete this.form.marketSourceVo;

            if (this.form.type == 1 && this.form.id != this.v.id) {
              this.$Modal.confirm({
                title: '提醒',
                content: '设置其他成员为管理员后，您将失去管理员权限并退出登录！',
                onOk: () => {
                  editUser(this.form).then(res => {
                    if (res.success) {
                      this.$Message.success("操作成功");
                      this.getUserList();
                      this.setFlag = false;
                      // 退出登录
                      this.$store.commit("setLoading", true);
                      getOtherSet().then(res => {
                        this.$store.commit("setLoading", false);
                        if (res.result) {
                          let domain = res.result.ssoDomain;
                          Cookies.set("accessToken", "", {
                            domain: domain,
                            expires: 7
                          });
                        }
                        this.$store.commit("logout", this);
                        this.$store.commit("clearOpenedSubmenu");
                        this.setStore("accessToken", "");
                        // 强制刷新页面 重新加载router
                        location.reload();
                      });
                    }
                    this.submitLoading = false;
                  });

                },
                onCancel: () => {
                  this.submitLoading = false;

                }

              });

            } else {
              // 123
              editUser(this.form).then(res => {
                if (res.success) {
                  this.$Message.success("操作成功");
                  this.getUserList();
                  this.setFlag = false;

                }
                this.submitLoading = false;
              });
            }

          }
        });
      },
      submitUser() {
        this.$refs.form.validate(valid => {
          if (valid) {
            if (this.modalType == 0) {
              // 添加用户 避免编辑后传入id
              delete this.form.id;
              delete this.form.status;
              if (this.form.password == "" || this.form.password == undefined) {
                this.errorPass = "密码不能为空";
                return;
              }
              if (this.form.password.length < 6) {
                this.errorPass = "密码长度不得少于6位";
                return;
              }
              this.submitLoading = true;
              addUser(this.form).then(res => {
                this.submitLoading = false;
                if (res.success) {
                  this.$Message.success("操作成功");
                  this.getUserList();
                  this.userModalVisible = false;
                }
              });
            } else {
              // 编辑
              this.submitLoading = true;
              editUser(this.form).then(res => {
                this.submitLoading = false;
                if (res.success) {
                  this.$Message.success("操作成功");
                  this.getUserList();
                  this.userModalVisible = false;
                }
              });
            }
          }
        });
      },
      add() {
        var str = "";
        for (let i = 0; i < 6; i++) {
          str += parseInt(Math.random() * 10);
        }
        this.password = str;
        this.modalType = 0;
        this.modalTitle = "添加用户";
        this.$refs.form.resetFields();
        // this.$refs.depTree.setData("", "");
        this.userModalVisible = true;
      },
      editInfo(v) {
        this.setFlag = true;
        this.roleNow = v;
      },
      edit(v) {
        this.setFlag = true;
        this.$refs.form.resetFields();
        // 转换null为""
        for (let attr in v) {
          if (v[attr] == null) {
            v[attr] = "";
          }
        }
        let str = JSON.stringify(v);
        let data = JSON.parse(str);
        this.form = data;
        // this.$refs.depTree.setData(data.departmentId, data.departmentTitle);
        let selectRolesId = [];
        this.form.roles.forEach(function (e) {
          selectRolesId.push(e.id);
        });
        this.form.roles = selectRolesId;
      },
      enable(v) {
        this.$Modal.confirm({
          title: "确认启用",
          content: "您确认要启用" + v.nickname + " ?",
          loading: true,
          onOk: () => {
            enableUser(v.id).then(res => {
              this.$Modal.remove();
              if (res.success) {
                this.$Message.success("操作成功");
                this.getUserList();
              }
            });
          }
        });
      },
      disable(v) {
        this.$Modal.confirm({
          title: "确认禁用",
          content: "您确认要禁用" + v.nickname + " ?",
          loading: true,
          onOk: () => {
            disableUser(v.id).then(res => {
              this.$Modal.remove();
              if (res.success) {
                this.$Message.success("操作成功");
                this.getUserList();
              }
            });
          }
        });
      },
      detach(v) {
                console.log(v,"v.nickname")

        let flag = false;
        if (this.data.length <= 1 && this.searchForm.pageNumber >= 1) {
          flag = true;
        }
        this.$Modal.confirm({
          title: "确认删除",
          content: "您确认要删除" + v.nickname + " ?",
          loading: true,
          onOk: () => {
            detachUser({
              userId: v.id
            }).then(res => {
              this.$Modal.remove();
              if (res.success) {
                this.$Message.success("删除成功");
                if (flag) this.searchForm.pageNumber--;
                this.getUserList();
              }
            });
          }
        });
      },
      remove(v) {
        let flag = false;
        if (this.data.length <= 1 && this.searchForm.pageNumber >= 1) {
          flag = true;
        }
        this.$Modal.confirm({
          title: "确认删除",
          content: "您确认要删除" + v.nickname + "吗 ?",
          loading: true,
          onOk: () => {
            deleteUser({
              ids: v.id
            }).then(res => {
              this.$Modal.remove();
              if (res.success) {
                if (flag) this.searchForm.pageNumber--;
                this.$Message.success("删除成功");
                this.getUserList();
              }
            });
          }
        });
      },
      dropDown() {
        if (this.drop) {
          this.dropDownContent = "展开";
          this.dropDownIcon = "ios-arrow-down";
        } else {
          this.dropDownContent = "收起";
          this.dropDownIcon = "ios-arrow-up";
        }
        this.drop = !this.drop;
      },
      showSelect(e) {
        this.exportData = e;
        this.selectList = e;
        this.selectCount = e.length;
      },
      clearSelectAll() {
        this.$refs.table.selectAll(false);
      },
      delAll() {
        if (this.selectCount <= 0) {
          this.$Message.warning("您还未选择要删除的数据");
          return;
        }
        this.$Modal.confirm({
          title: "确认删除",
          content: "您确认要删除所选的 " + this.selectCount + " 条数据?",
          loading: true,
          onOk: () => {
            let ids = "";
            this.selectList.forEach(function (e) {
              ids += e.id + ",";
            });
            ids = ids.substring(0, ids.length - 1);
            deleteUser(ids).then(res => {
              this.$Modal.remove();
              if (res.success) {
                this.$Message.success("删除成功");
                this.clearSelectAll();
                this.getUserList();
              }
            });
          }
        });
      },
      beforeEnter() {
        if (this.$route.params.flag) {
          if (this.$route.params.flag === 1) {
            this.selectMenu(1)
          } else if (this.$route.params.flag === 2) {
            this.selectMenu(2)
            // test
          }
        }

      }
    },
    activated() {
      this.beforeEnter()
      let v = JSON.parse(Cookies.get("userInfo"));
      // 转换null为""
      for (let attr in v) {
        if (v[attr] == null) {
          v[attr] = "";
        }
      }
      let str = JSON.stringify(v);
      this.v = JSON.parse(str);
      console.log(this.v);
      // 计算高度
      this.height = Number(document.documentElement.clientHeight - 230);
      var that = this;
      userInfo().then(res => {
        that.searchForm.companyId = res.result.companyId;
        that.init();
        that.getRoleList();
      });
    }
  };
</script>