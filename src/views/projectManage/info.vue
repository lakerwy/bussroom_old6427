<template>
  <div class="projectInfo">
    <Tabs value="name1" @on-click="clickTabs" :animated="false">
      <TabPane label="项目总览" name="name1" class="overview">
        <div class="content overview">
          <h2 class="title">{{ projectData.name }}</h2>
          <table>
            <tr class="first_tr">
              <td colspan="2">
                <span class="t_lable">项目简介</span>
                {{
                  projectData.description ? projectData.description : "未填写"
                }}
              </td>
            </tr>
            <tr>
              <td>
                <span class="t_lable">总投资</span>
                {{
                  projectData.investMoney
                    ? projectData.investMoney + "万元"
                    : "未填写"
                }}
              </td>

              <td>
                <span class="t_lable">进展阶段</span>
                {{ projectData.phase ? projectData.phase : "未填写" }}
              </td>
            </tr>
            <tr>
              <td>
                <span class="t_lable">项目开始时间</span>
                {{
                  projectData.startTime
                    ? projectData.startTime.split(" ")[0]
                    : "未填写"
                }}
              </td>
              <td>
                <span class="t_lable">项目所在地区</span>
                {{
                  projectData.areaId ? initArea(projectData.areaId) : "未填写"
                }}
              </td>
            </tr>
            <tr>
              <td>
                <span class="t_lable">项目截至时间</span>
                {{
                  projectData.endTime
                    ? projectData.endTime.split(" ")[0]
                    : "未填写"
                }}
              </td>
              <td>
                <span class="t_lable">项目具体地址</span>
                {{ projectData.area ? projectData.area : "未填写" }}
              </td>
            </tr>
          </table>
        </div>
        <div class="comment">
          <studio-comment :projectId="projectId"></studio-comment>
        </div>
      </TabPane>
      <TabPane label="相关公告" name="name2">
        <div class="content related">
          <Row>
            <div class="fl">
              <Button
                icon="ios-add"
                type="primary"
                @click="goTend"
                style="margin-right: 15px"
                >添加公告</Button
              >
              <Button icon="ios-trash" ghost type="primary" @click="delItems(1)"
                >删除</Button
              >
            </div>
            <div class="fr">
              <Input
                v-model="searchData.title"
                placeholder="请输入公告名称"
                style="width: 400px"
              >
                <Button
                  slot="append"
                  icon="ios-search"
                  type="primary"
                  @click="getNotice"
                  >搜索</Button
                >
              </Input>
            </div>
          </Row>
          <Row>
            <Alert show-icon style="margin: 10px 0">
              已选择
              <span class="select-count">{{ this.selectList.length }}</span> 项
              <!-- <a class="select-clear" @click="clearSelectAll">清空</a> -->
            </Alert>
          </Row>
          <Row>
            <Table
              ref="noticeTable"
              :columns="columns"
              :data="data"
              :loading="loadingFlag"
              @on-selection-change="showSelect"
            >
              <template slot-scope="{ row }" slot="type">
                <strong>【{{ row.type }}】</strong>
              </template>
              <template slot-scope="{ row }" slot="title">
                <a target="_blank" :href="row.url" class="infoTitle">{{
                  row.title
                }}</a>
              </template>
            </Table>
          </Row>
          <p style="text-align: center; margin: 20px 0">
            <Page
              :total="total"
              :page-size="15"
              show-total
              @on-change="getNotice(true)"
              :current.sync="searchData.pageNumber"
            />
          </p>
        </div>
      </TabPane>
      <TabPane label="联系人" name="name3">
        <div class="content related">
          <Form inline :label-width="70">
            <Row>
              <div class="fl">
                <Button
                  icon="ios-add"
                  type="primary"
                  style="margin-right: 15px"
                  @click="addFlag = true"
                  >添加联系人</Button
                >
                <Button
                  icon="ios-trash"
                  ghost
                  type="primary"
                  @click="delItems(2)"
                  >删除</Button
                >
              </div>
              <div class="fr">
                <FormItem label="公司名称">
                  <Input
                    v-model="contactData.company"
                    placeholder="请输入公司名称"
                    style="width: 210px"
                  >
                  </Input>
                </FormItem>
                <FormItem label="姓名">
                  <Input
                    v-model="contactData.name"
                    placeholder="请输入姓名"
                    style="width: 210px"
                  ></Input>
                </FormItem>
                <Button type="primary" @click="getContactList" icon="ios-search"
                  >搜索</Button
                >
                <!-- <Button slot="append" icon="ios-search" type="primary" @click="getContactList">搜索</Button> -->
              </div>
            </Row>
          </Form>

          <Row>
            <Alert show-icon style="margin: 10px 0">
              已选择
              <span class="select-count">{{ this.selectList.length }}</span> 项
              <!-- <a class="select-clear" @click="clearSelectAll">清空</a> -->
            </Alert>
          </Row>
          <Row>
            <Table
              ref="contactTable"
              :columns="contactColumns"
              :data="contactList"
              :loading="contactLoadingFlag"
              @on-selection-change="showSelect"
            >
              <!-- <template slot-scope="{row}" slot="type">
                                <strong>【{{ row.type }}】</strong>
                            </template>
                            <template slot-scope="{row}" slot="title">
                                <a target="_blank" :href="row.url" class="infoTitle">{{row.title}}</a>
                            </template> -->
            </Table>
          </Row>
          <p style="text-align: center; margin: 20px 0">
            <Page
              :total="contactTotal"
              :page-size="15"
              show-total
              @on-change="getContactList(true)"
              :current.sync="contactData.pageNumber"
            />
          </p>
          <add-contact
            v-model="addFlag"
            :projectId="projectId"
            @on-cancel="onCancel"
            @on-submit="onSubmit"
          >
          </add-contact>
        </div>
      </TabPane>
      <TabPane label="附件" name="name4">
        <div class="content related">
          <Row>
            <div class="fl">
              <Button
                icon="ios-cloud"
                type="primary"
                @click="uploadVisible = true"
                style="margin-right: 15px"
                >上传文件</Button
              >
              <Button icon="ios-trash" ghost type="primary" @click="delItems(3)"
                >删除</Button
              >
            </div>
          </Row>
          <Row>
            <Alert show-icon style="margin: 10px 0">
              已选择
              <span class="select-count">{{ this.selectList.length }}</span> 项
              <!-- <a class="select-clear" @click="clearSelectAll">清空</a> -->
            </Alert>
          </Row>
          <Row>
            <Table
              ref="noticeTable"
              :columns="fileColumns"
              :data="fileList"
              :loading="fileLoadingFlag"
              @on-selection-change="showSelect"
            >
              <template slot-scope="{ row }" slot="actions">
                <a @click="download(row)">下载</a>
              </template>
            </Table>
          </Row>
          <p style="text-align: center; margin: 20px 0">
            <Page
              :total="fileTotal"
              :page-size="15"
              show-total
              @on-change="getFileList"
              :current.sync="fileData.pageNumber"
            />
          </p>
        </div>
      </TabPane>
      <TabPane label="项目组成员" name="name5">
        <div class="content related">
          <Row>
            <Button
              icon="ios-add"
              type="primary"
              style="margin-right: 15px"
              @click="addMemberFlag = true"
              >添加</Button
            >
            <Button icon="ios-trash" ghost type="primary" @click="delItems(4)"
              >删除</Button
            >
          </Row>
          <Row>
            <Alert show-icon style="margin: 10px 0">
              已选择
              <span class="select-count">{{ this.selectList.length }}</span> 项
            </Alert>
          </Row>
          <Row>
            <Table
              ref="memberTable"
              :columns="memberColumns"
              :data="memberList"
              :loading="memberLoadingFlag"
              @on-selection-change="changeSelect"
            >
              <template slot-scope="{ row }" slot="type">
                <div
                  v-for="item in typeList"
                  :key="item.id"
                  v-show="item.id === row.type"
                >
                  {{ item.name }}
                </div>
              </template>
            </Table>
          </Row>
          <Row type="flex" justify="end" style="margin-top: 10px">
            <Page
              transfer
              :current="memberData.pageNumber"
              :total="memberTotal"
              :page-size="memberData.pageSize"
              @on-change="changePage"
              @on-page-size-change="changesize"
              :page-size-opts="[10, 20, 50]"
              size="small"
              show-total
              show-elevator
              show-sizer
            ></Page>
          </Row>
          <add-member
            :addMemberFlag.sync="addMemberFlag"
            :projectId="projectId"
            :companyId="companyId"
            @on-submit="onMemberSubmit"
          >
          </add-member>
        </div>
      </TabPane>
    </Tabs>
    <Drawer title="文件上传" closable v-model="uploadVisible" width="500">
      <Upload
        action="/studio/projectFile/upload"
        :headers="accessToken"
        :on-success="handleSuccess"
        accept="image/* video/*"
        :format="[
          'png',
          'jpg',
          'jpeg',
          'bmp',
          'gift',
          'docx',
          'doc',
          'xlsx',
          'csv',
          'xls',
          'html',
          'txt',
          'json',
          'pdf',
          'wmv',
          'asf',
          'asx',
          'rm',
          ' rmvb',
          'mpg',
          'mpeg',
          'mpe',
          'mp4',
          '3gp',
          'mov',
          'm4v',
          'avi',
          'dat',
          'mkv',
          'flv',
          'vob',
        ]"
        :on-format-error="formatError"
        :on-error="handleError"
        :max-size="5120"
        :on-exceeded-size="handleMaxSize"
        :before-upload="beforeUpload"
        :data="{ projectId: projectId }"
        multiple
        type="drag"
        ref="up"
      >
        <div style="padding: 20px 0">
          <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
          <p>点击这里或将文件拖拽到这里上传</p>
        </div>
      </Upload>
      <div class="drawer-footer">
        <Button @click="clearFiles">清空上传列表</Button>
      </div>
    </Drawer>
  </div>
</template>

<script>
import {
  addComment,
  delComment,
  getCommentByCondition,
  getProjectById,
  getNoticeByCondition,
  delNotice,
  getProjectContact,
  addProjectContact,
  delProjectContact,
  saveProjectFile,
  delProjectFile,
  getProjectFile,
  getManageList,
  removeProjectUser,
} from "@/api/index";
import studioComment from "@/views/my-components/xboot/studio-comment";
import addContact from "./addContact";
import addMember from "./addMember";
export default {
  components: {
    studioComment,
    addContact,
    addMember,
  },
  name: "projectInfo",
  data() {
    return {
      addFlag: false,
      projectData: {
        startTime: "",
        endTime: "",
      },
      areaList: [
        {
          title: "全部地区",
          value: -1,
        },
        {
          title: "北京",
          value: 1,
        },
        {
          title: "天津",
          value: 3,
        },
        {
          title: "河北",
          value: 5,
        },
        {
          title: "山西",
          value: 6,
        },
        {
          title: "内蒙古",
          value: 7,
        },
        {
          title: "上海",
          value: 2,
        },
        {
          title: "山东",
          value: 16,
        },
        {
          title: "江苏",
          value: 11,
        },
        {
          title: "安徽",
          value: 13,
        },
        {
          title: "江西",
          value: 15,
        },
        {
          title: "浙江",
          value: 12,
        },
        {
          title: "福建",
          value: 14,
        },
        {
          title: "湖北",
          value: 18,
        },
        {
          title: "湖南",
          value: 19,
        },
        {
          title: "河南",
          value: 17,
        },
        {
          title: "广东",
          value: 20,
        },
        {
          title: "广西",
          value: 21,
        },
        {
          title: "海南",
          value: 22,
        },
        {
          title: "辽宁",
          value: 8,
        },
        {
          title: "吉林",
          value: 9,
        },
        {
          title: "黑龙江",
          value: 10,
        },
        {
          title: "陕西",
          value: 26,
        },
        {
          title: "甘肃",
          value: 28,
        },
        {
          title: "宁夏",
          value: 31,
        },
        {
          title: "新疆",
          value: 30,
        },
        {
          title: "青海",
          value: 29,
        },
        {
          title: "重庆",
          value: 4,
        },
        {
          title: "四川",
          value: 27,
        },
        {
          title: "贵州",
          value: 23,
        },
        {
          title: "云南",
          value: 24,
        },
        {
          title: "西藏",
          value: 25,
        },
        {
          title: "跨省",
          value: 36,
        },
        {
          title: "香港",
          value: 32,
        },
        {
          title: "澳门",
          value: 33,
        },
        {
          title: "台湾",
          value: 34,
        },
      ],
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center",
        },
        {
          title: "序号",
          type: "index",
          width: 60,
          align: "center",
        },
        {
          title: "类型",
          slot: "type",
          align: "center",
          minWidth: 120,
        },
        {
          title: "地区",
          key: "area",
          align: "center",
          minWidth: 90,
        },
        {
          title: "标题",
          slot: "title",
          align: "center",
          tooltip: true,
          minWidth: 440,
        },
        {
          title: "发布日期",
          key: "date",
          align: "center",
          minWidth: 100,
        },
      ],
      contactColumns: [
        {
          type: "selection",
          width: 60,
          align: "center",
        },
        {
          title: "序号",
          type: "index",
          width: 70,
          align: "center",
        },
        {
          title: "姓名",
          key: "name",
          align: "center",
          minWidth: 120,
        },
        {
          title: "性别",
          key: "sex",
          align: "center",
          width: 70,
        },
        {
          title: "公司",
          key: "company",
          align: "center",
          minWidth: 140,
        },
        {
          title: "部门",
          key: "department",
          align: "center",
          minWidth: 140,
        },
        {
          title: "座机",
          key: "telNumber",
          align: "center",
          minWidth: 100,
        },
        {
          title: "手机",
          key: "mobile",
          align: "center",
          minWidth: 100,
        },
        {
          title: "邮箱",
          key: "email",
          align: "center",
          minWidth: 100,
        },
      ],
      fileColumns: [
        {
          type: "selection",
          width: 60,
          align: "center",
        },
        {
          title: "序号",
          type: "index",
          width: 60,
          align: "center",
        },
        {
          title: "附件名称",
          key: "name",
          align: "center",
          minWidth: 120,
        },
        {
          title: "格式",
          key: "type",
          align: "center",
          minWidth: 90,
        },
        {
          title: "上传时间",
          key: "createTime",
          align: "center",
          minWidth: 140,
        },
        {
          title: "上传人",
          key: "nickname",
          align: "center",
          minWidth: 120,
        },
        {
          title: "操作",
          slot: "actions",
          align: "center",
          minWidth: 120,
        },
      ],
      data: [],
      contactList: [],
      loadingFlag: false,
      contactLoadingFlag: false,
      fileLoadingFlag: false,
      total: 0,
      contactTotal: 0,
      fileTotal: 0,
      searchData: {
        pageNumber: 1,
        pageSize: 15,
        title: "",
        projectId: "",
        sort: "publishDate",
        order: "desc",
      },
      contactData: {
        pageNumber: 1,
        pageSize: 15,
        company: "",
        name: "",
        projectId: "",
        sort: "createTime",
        order: "desc",
      },
      uploadData: {
        projectId: "",
        size: "",
        url: "",
        name: "",
      },
      fileData: {
        pageNumber: 1,
        pageSize: 15,
        projectId: "",
        sort: "createTime",
        order: "desc",
      },
      selectList: [],
      selectCount: 0,
      uploadVisible: false,
      fileList: [],
      // 项目组成员
      addMemberFlag: false,
      memberLoadingFlag: true,
      memberData: {
        pageNumber: 1,
        pageSize: 10,
        sort: "createTime",
        order: "desc",
      },
      memberList: [],
      memberTotal: 0,
      memberColumns: [
        {
          type: "selection",
          width: 60,
          align: "center",
        },
        {
          title: "序号",
          type: "index",
          width: 70,
          align: "center",
        },
        {
          title: "姓名",
          key: "userName",
          align: "center",
          minWidth: 120,
        },
        {
          title: "性别",
          key: "sex",
          align: "center",
          width: 70,
        },
        {
          title: "部门",
          key: "department",
          align: "center",
          minWidth: 140,
        },
        {
          title: "身份",
          slot: "type",
          align: "center",
          minWidth: 100,
        },
      ],
      companyId: "",
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
    };
  },
  methods: {
    formatError(file, fileList) {
      console.log(file, "format");
      this.$Message.warning("只支持图片、视频、word、pdf等格式文件");
    },
    onSubmit() {
      // this.addFlag = false;
      this.getContactList();
    },
    onCancel() {
      this.addFlag = false;
    },
    goTend() {
      this.$router.push({
        name: "tendering",
      });
    },
    delItems(flag) {
      let type;

      switch (flag) {
        case 1:
          type = "公告";
          break;
        case 2:
          type = "联系人";
          break;
        case 3:
          type = "附件";
          break;
        case 4:
          type = "成员";
          break;
        default:
          type = "公告";
          break;
      }
      if (this.selectList.length === 0) {
        this.$Message.warning(`请先选择${type}`);
        return false;
      }
      this.$Modal.confirm({
        title: "确认删除",
        content: `您确认要删除所选的${this.selectList.length}条${type}?`,
        loading: true,
        onOk: () => {
          if (flag === 1) {
            delNotice({
              ids: this.selectList,
            }).then((res) => {
              if (res.success) {
                if (
                  this.selectList.length >= this.data.length &&
                  this.searchData.pageNumber > 1
                ) {
                  this.searchData.pageNumber--;
                }
                this.$Modal.remove();
                this.selectList = [];
                this.$Message.success("删除成功");
                this.getNotice(true);
              }
            });
          } else if (flag === 2) {
            delProjectContact({
              ids: this.selectList,
            }).then((res) => {
              if (res.success) {
                if (
                  this.selectList.length >= this.contactList.length &&
                  this.contactData.pageNumber > 1
                ) {
                  this.contactData.pageNumber--;
                }
                this.$Modal.remove();
                this.selectList = [];
                this.$Message.success("删除成功");
                this.getContactList(true);
              }
            });
          } else if (flag === 3) {
            delProjectFile({
              ids: this.selectList,
            }).then((res) => {
              if (res.success) {
                if (
                  this.selectList.length >= this.fileList.length &&
                  this.fileData.pageNumber > 1
                ) {
                  this.fileData.pageNumber--;
                }
                this.$Modal.remove();
                this.selectList = [];
                this.$Message.success("删除成功");
                this.getFileList();
              }
            });
          } else if (flag === 4) {
            removeProjectUser({ ids: this.selectList }).then((res) => {
              if (res.success) {
                this.$Modal.remove();
                this.$Message.success("删除成功");
                this.getMemberList();
              }
            });
          }
        },
      });
    },
    showSelect(e) {
      this.selectList = [];
      e.forEach((item) => {
        this.selectList.push(item.id);
      });
    },
    getProjectInfo() {
      getProjectById(this.projectId).then((res) => {
        if (res.success) {
          this.projectData = res.result;
        }
      });
    },
    initArea(id) {
      let area = "";
      this.areaList.some((item) => {
        if (item.value == id) {
          area = item.title;
        }
      });
      return area;
    },
    getNotice(flag) {
      this.loadingFlag = true;
      // flag：false重置分页为1，true则不重置；
      if (!flag) {
        this.searchData.pageNumber = 1;
      }
      this.data = [];
      getNoticeByCondition(this.searchData).then((res) => {
        if (res.success) {
          res.result.content.forEach((item, i) => {
            res.result.content[i].date = item.publishDate.split(" ")[0];
            res.result.content[i].index = i + 1;
          });
          this.total = res.result.totalElements;
          this.data = res.result.content;
        }
        this.loadingFlag = false;
      });
    },
    getContactList(flag) {
      this.contactLoadingFlag = true;
      // flag：false重置分页为1，true则不重置；
      if (!flag) {
        this.searchData.pageNumber = 1;
      }
      this.contactList = [];
      getProjectContact(this.contactData).then((res) => {
        if (res.success) {
          res.result.content.forEach((item, i) => {
            res.result.content[i].index = i + 1;
            for (let key in res.result.content[i]) {
              res.result.content[i][key] = res.result.content[i][key]
                ? res.result.content[i][key]
                : "(未填写)";
            }
            res.result.content[i];
            // res.result.content[i].date = item.publishDate.split(" ")[0];
          });
          this.contactTotal = res.result.totalElements;
          this.contactList = res.result.content;
        }
        this.contactLoadingFlag = false;
      });
    },
    clickTabs(name) {
      this.$refs.noticeTable.selectAll(false);
      this.$refs.contactTable.selectAll(false);
      this.clearMemberSelectAll();
      this.selectList = [];
      if (name === "name1") {
        this.getProjectInfo();
      } else if (name === "name2") {
        this.getNotice();
      } else if (name === "name3") {
        this.getContactList();
      } else if (name === "name4") {
        this.getFileList();
      } else if (name === "name5") {
        this.getMemberList();
      }
    },
    init() {
      this.searchData.projectId = this.projectId;
      this.fileData.projectId = this.projectId;
      this.uploadData.projectId = this.projectId;
      this.contactData.projectId = this.projectId;
      this.accessToken = {
        accessToken: this.getStore("accessToken"),
      };
      console.log(this.accessToken, "accessTije==");
    },
    // 文件上传代码
    handleSuccess(res, file) {
      if (res.success) {
        // this.uploadData.url = res.result;
        // this.uploadData.size = file.size;
        // this.uploadData.name = file.name;
        // this.uploadData.type = file.name.split(".").reverse()[0];
        // saveProjectFile(this.uploadData).then(res => {
        //     if (res.success) {
        //         this.$Message.success("上传文件 " + file.name + " 成功");
        //         this.getFileList();
        //     }
        // })
        this.$Message.success("上传文件 " + file.name + " 成功");
        this.getFileList();
      } else {
        this.$Message.error(res.message);
      }
    },
    getFileList() {
      this.fileLoadingFlag = true;
      this.fileList = [];
      getProjectFile(this.fileData).then((res) => {
        if (res.success) {
          res.result.content.forEach((item, i) => {
            res.result.content[i].createTime = item.createTime.split(" ")[0];
            // res.result.content[i].index = i + 1;
          });
          this.fileTotal = res.result.totalElements;
          this.fileList = res.result.content;
        }
        this.fileLoadingFlag = false;
      });
    },
    handleError(error, file, fileList) {
      this.$Message.error(error.toString());
    },
    handleMaxSize(file) {
      this.$Message.warning(
        "所选文件‘ " + file.name + " ’大小过大, 不得超过 5M."
      );
    },
    beforeUpload() {
      if (
        this.$route.meta.permTypes &&
        !this.$route.meta.permTypes.includes("upload")
      ) {
        this.$Message.error("此处您没有上传权限(为演示功能，该按钮未配置隐藏)");
        return false;
      }
      return true;
    },
    clearFiles() {
      this.$refs.up.clearFiles();
    },
    download(v) {
      window.open(
        v.url +
          "?attname=&response-content-type=application/octet-stream&filename=" +
          v.name
      );
    },
    // 项目组成员
    getMemberList() {
      this.memberLoadingFlag = true;
      getManageList({
        projectId: this.projectId,
        ...this.memberData,
      }).then((res) => {
        if (res.result.content.length !== 0) {
          this.memberList = res.result.content;
        } else {
          if (this.memberData.pageNumber !== 1) {
            this.memberData.pageNumber -= 1;
            this.getMemberList();
          } else {
            this.memberList = res.result.content;
          }
        }
        this.memberTotal = res.result.totalElements;
        this.clearMemberSelectAll();
        this.memberLoadingFlag = false;
      });
    },
    changeSelect(e) {
      this.selectList = e.map((item) => item.id);
    },
    changePage(v) {
      this.memberData.pageNumber = v;
      this.getMemberList();
    },
    changesize(v) {
      this.memberData.pageSize = v;
      this.getMemberList();
    },
    clearMemberSelectAll() {
      this.$refs.memberTable.selectAll(false);
    },
    onMemberSubmit() {
      this.getMemberList();
    },
  },
  computed: {
    projectId() {
      return this.$route.query.projectId;
    },
  },
  activated() {
    this.companyId = JSON.parse(this.getStore("userInfo")).companyId;
    this.init();
    this.getProjectInfo();
  },
};
</script>

<style lang="less">
.projectInfo {
  .content {
    background-color: #fff;
    border-radius: 0 0 15px 15px;
    padding: 0 30px 30px;
  }

  .ivu-tabs-bar {
    background-color: #fff;
    margin-bottom: 1px;
    padding: 0 20px;
    border-radius: 15px 15px 0 0;

    .ivu-tabs-nav {
      padding: 10px 0;
    }
  }

  .overview {
    .comment {
      margin-top: 20px;
    }

    .title {
      font-size: 22px;
      text-align: center;
      line-height: 78px;
    }

    table {
      width: 100%;
      border: 1px solid #e8e7e7;
      border-width: 1px 0 0 1px;
      border-spacing: 0;
      table-layout: fixed;

      .first_tr td {
        height: 240px;
      }

      .first_tr .t_lable {
        line-height: 240px;
      }

      td {
        border: 1px solid #e8e7e7;
        border-width: 0px 1px 1px 0px;
        padding-left: 139px;
        padding-right: 20px;
        position: relative;
        line-height: 40px;
        word-wrap: break-word;
        // white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .t_lable {
        text-indent: 0;
        position: absolute;
        left: 0;
        top: 0;
        width: 120px;
        text-align: center;
        background-color: #f5f5f5;
        font-size: 14px;
        color: #999;
        height: 100%;
      }
    }
  }

  .related {
    padding-top: 20px;
  }
}
</style>