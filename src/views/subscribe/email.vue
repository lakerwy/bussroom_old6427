<template>
  <div id="subscribe-email">
    <!-- 分享弹窗 -->
    <Modal v-model="shareFlag" title="企业分享">
      <!-- 邮件订阅分享 -->
      <h4 style="height: 80px" v-text="shareData.title"></h4>
      <p>留言:</p>
      <Input
        v-model="shareData.message"
        maxlength="100"
        show-word-limit
        type="textarea"
        placeholder="说点什么..."
      />
      <p style="margin-top: 30px">
        使用人：
        <span style="color: #ed4014"
          >请前往【企业管理】创建其他使用人分账户。</span
        >
      </p>

      <Tree :data="treeData" show-checkbox @on-check-change="changeTree"></Tree>

      <div slot="footer">
        <Button type="text" @click="shareFlag = false">取消</Button>
        <Button type="primary" @click="goShare" :loading="submitLoading"
          >提交</Button
        >
      </div>
    </Modal>
    <!-- 邮件模板选择 -->
    <Modal
      v-model="mailModel"
      title="选择邮件订阅模板（选择后，邮件将按照模板发送）"
      @on-ok="mailModelOk"
      footer-hide="true"
    >
      <Radio-group v-model="mailType">
        <Radio label="0">商务版（含订阅数据概览和订阅公告）</Radio>
        <Radio label="1">简洁版（含订阅公告）</Radio>
        <br>
        <div
            style="
          background: #e8eaec;
          height: 1px;
          width: 520px;
          margin: 13px 0 16px -16px;
        "
        ></div>
        <Radio label="2" class="mailModelRadio">
          <div style="display: inline-block">
            <div style="display: flex; align-items: center">
              <p
                  style="color: #444;width: 337px;display: inline-block;font-size: 13px;"
              >
                旧模板（旧模版仅支持<span style="color: red">与关系</span
              >订阅规则，有可能会导致部<br>分公告信息无法及时获取。）
              </p>
              <Button type="text" @click="mailModel = false">取消</Button>
              <Button type="primary" @click="mailModelOk">确定</Button>
            </div>
          </div>
        </Radio>
      </Radio-group>
    </Modal>
    <Card>
      <h1 style="margin: 20px 0">{{ title }}</h1>
      <Row @keydown.enter.native="handleSearch(1)">
        <Form
          ref="searchForm"
          :model="searchForm"
          inline
          :label-width="90"
          :rules="formValidate"
        >
          <Form-item label="标题" prop="title">
            <Input
              type="text"
              v-model="searchForm.title"
              clearable
              placeholder="请输入标题"
              style="width: 200px"
            />
          </Form-item>
          <Form-item label="地区" prop="areas">
            <!-- <Input type="text" v-model="searchForm.areas" clearable placeholder="请选择地区" style="width: 200px" /> -->
            <area-select
              width="300"
              v-model="searchForm.areas"
              @on-confirm="handleSearch(1)"
            ></area-select>
          </Form-item>
          <Form-item label="推送时间" prop="startDate">
            <DatePicker
              @on-change="changeDate"
              :options="dateOptions"
              v-model="daterange"
              type="daterange"
              ref="date"
              format="yyyy-MM-dd"
              placeholder="请选择日期"
              style="width: 300px"
            ></DatePicker>
          </Form-item>
          <Form-item label="关键词" prop="keyword">
            <Select
              v-model="searchForm.keyword"
              style="width: 200px"
              @on-change="handleSearch(1)"
              clearable
            >
              <!-- <Option value="" >全部订阅</Option> -->
              <Option v-for="(item, i) in keywordList" :value="item" :key="i">{{
                item
              }}</Option>
            </Select>
          </Form-item>
          <Form-item label="类型" prop="infoType">
            <Select
              v-model="searchForm.infoType"
              style="width: 200px"
              @on-change="handleSearch(1)"
              clearable
            >
              <!-- <Option value="" >全部订阅</Option> -->
              <Option
                v-for="(item, i) in infoTypeList"
                :value="item.value"
                :key="i"
                >{{ item.label }}</Option
              >
            </Select>
          </Form-item>
          <Form-item style="margin-left: -35px" class="br">
            <Button @click="handleSearch(1)" type="primary" icon="ios-search"
              >搜索</Button
            >
            <Button @click="handleReset">重置</Button>
            <Button @click="mailModel = true" type="primary"
              >设置邮件订阅模板</Button
            >
          </Form-item>
        </Form>
      </Row>
      <Row style="margin: 20px 0">
        <!-- <Button icon="ios-trash" style="margin-left:15px;" type="error">删除</Button> -->
        <Button
          icon="ios-start"
          type="primary"
          :loading="collectLoading"
          @click="handleCollect"
          >批量收藏</Button
        >
        <Button
          icon="ios-refresh"
          style="margin-left: 20px"
          :loading="shareLoading"
          @click="handleSend"
          type="primary"
          >批量分配</Button
        >
      </Row>
      <Row>
        <Alert show-icon>
          已选择
          <span class="select-count">{{ selectList.length }}</span> 项
<!--          <a class="select-clear" @click="clearSelectAll">清空</a>-->
        </Alert>
      </Row>
      <Row>
        <Table
          :loading="loading"
          border
          :columns="columns"
          :data="data"
          sortable="custom"
          @on-selection-change="showSelect"
          ref="table"
        >
          <template slot-scope="{ row }" slot="description">
            <a :href="row.url" target="_blank">
              <h1
                class="e_title"
                v-html="emphasize(row.title, row.keyword)"
              ></h1>
            </a>
            <p
              class="e_content"
              v-html="emphasize(row.content, row.keyword)"
            ></p>
          </template>
        </Table>
      </Row>
      <Row style="margin-top: 20px; text-align: center">
        <Page
          style="display: inline-block"
          :total="total"
          show-total
          :current.sync="searchForm.pageNumber"
          show-elevator
          @on-change="handleSearch(0)"
          @on-page-size-change="changePageSize"
          show-sizer
          :page-size-opts="[50, 100, 200]"
          :page-size="searchForm.pageSize"
        />
      </Row>
    </Card>
  </div>
</template>

<script>
import {
  getMailSub,
  shareMailSub,
  collectMailSub,
  findAllUserData,
  getAllGroup,
  getMailSubType,
  userInfo,
  removeCollection,
  saveCollection,
} from "@/api/index.js";
import qs from "qs";
import axios from "axios";
import areaSelect from "@/views/main-components/area-select";
export default {
  components: {
    areaSelect,
  },
  name: "subscribe-email",
  data() {
    return {
      isOld: "0", //默认不勾选
      mailModel: false, //邮件模板的弹框
      mailType: "0", //邮件的类型
      that: this,
      daterange: "",
      selectList: [],
      collectionList: [],
      loading: false,
      collectLoading: false,
      shareLoading: false,
      submitLoading: false,
      shareFlag: false,
      keywordList: ["口罩", "防护服", "消毒液", "手套"],
      infoTypeList: [
        {
          label: "招标公告",
          value: "1",
        },
        {
          label: "vip项目",
          value: "2",
        },
        {
          label: "中标",
          value: "3",
        },
        // {
        //   label: "项目核准批复",
        //   value: "4",
        // },
        // {
        //   label: "项目公示",
        //   value: "5",
        // },
        // {
        //   label: "项目预告",
        //   value: "6",
        // },
        // {
        //   label: "项目动态",
        //   value: "7",
        // },
      ],
      dateOptions: {
        disabledDate(date) {
          return (
            (date && date.valueOf() < Date.now() - 8 * 24 * 60 * 60 * 1000) ||
            date.valueOf() > Date.now() - 1 * 24 * 60 * 60 * 1000
          );
        },
        shortcuts: [
          {
            text: "近一天",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 1);
              end.setTime(end.getTime() - 3600 * 1000 * 24 * 1);
              return [start, end];
            },
          },
          {
            text: "近三天",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 3);
              end.setTime(end.getTime() - 3600 * 1000 * 24 * 1);
              return [start, end];
            },
          },
          {
            text: "近一周",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              end.setTime(end.getTime() - 3600 * 1000 * 24 * 1);
              return [start, end];
            },
          },
        ],
      },
      treeData: [
        {
          title: "全选",
          expand: true,
          checked: false,
          children: [],
        },
      ],
      shareData: {
        message: "",
        title: "",
        userIds: [],
      },
      searchForm: {
        title: "",
        areas: [],
        // publishDate: "",
        startDate: this.format(
          new Date().getTime() - 1 * 24 * 60 * 60 * 1000,
          "yyyy-MM-dd"
        ),
        // startDate: "",
        // endDate: "",
        keyword: "",
        infoType: "",
        endDate: this.format(
          new Date().getTime() - 1 * 24 * 60 * 60 * 1000,
          "yyyy-MM-dd"
        ),
        pageSize: 50,
        pageNumber: 1,
      },
      formValidate: {
        startDate: [
          {
            required: true,
            message: "发布日期不能为空",
            trigger: "change",
          },
        ],
      },
      pageForm: {
        title: "",
        areas: [],
        // publishDate: "",
        infoType: "",
        keyword: "",
        startDate: "",
        endDate: "",
        pageSize: 50,
        pageNumber: 1,
      },
      optionList: {
        newArea: [
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
        typeArr: [
          "工程招标",
          "货物招标",
          "服务招标",
          "中标公示",
          "招标预告",
          "政府采购",
          "企业采购",
        ],
      },
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center",
        },
        {
          key: "type",
          title: "类型",
          width: 120,
          align: "center",
        },
        {
          key: "area",
          title: "地区",
          width: 120,
          align: "center",
          render: (createElement, parmas) => {
            let area = "";
            this.optionList.newArea.some((e) => {
              if (e.value == parmas.row.areaId) {
                area = e.title;
              }
            });
            return createElement({
              template: "<div>" + area + "</div>",
            });
          },
        },
        {
          title: "公告",
          slot: "description",
          minWidth: 200,
          className: "description",
          align: "left",
        },
        {
          key: "isCollect",
          title: "收藏",
          width: 90,
          align: "center",
          render: (h,params)=>{
            let type = "ios-star-outline";
            let color = "";
            if (params.row.isCollected) {
              type =
                  params.row.isCollected === "0"
                      ? "ios-star-outline"
                      : "ios-star";
              color = params.row.isCollected === "0" ? "" : "#2d8cf0";
            }
            return (
                <Icon style="cursor: pointer;" size="24" title="收藏" class="actionBtn" color={color} type={type} onClick={()=>this.collect(params)} />
            )
          },
        },
        {
          key: "publishDate",
          title: "推送时间",
          width: 125,
          align: "center",
          render: (h, parmas) => {
            return h({
              template:
                "<p>" +
                this.format(new Date(parmas.row.publishDate), "yyyy-MM-dd") +
                "</p>",
            });
          },
        },
      ],
      data: [],
      selectIdList: [],
    };
  },
  methods: {
    handleSearch(flag) {
      let val = false; //检验搜索时是否通过校验
      this.$refs["searchForm"].validate((valid) => {
        if (!valid) {
          val = true;
        }
      });
      if (flag === 1 || flag === 2) {
        if (val && flag !== 2) return;
        this.searchForm.pageNumber = 1;
        // this.pageForm = {
        //   ...this.searchForm
        // };
      }
      this.data = [];
      this.loading = true;
      // this.pageForm.areas = "1,2,3";
      // this.pageForm = {"status":"OK","request_id":"162069578116780262550087","result":{"searchtime":0.050106,"total":5416,"num":10,"viewtotal":5000,"compute_cost":[{"index_name":"op2020youke","value":2.269}],"items":[{"area_name":"","blocks_id":"600140\t600111","category":"","category_id":"14","classb_id":"null","ok_status":"Y","table_name":"CGXX","table_name2":"QYCG","title":"邢台铁塔2021年综治乡镇本地化建设一期项目（二次）采购公告","area_id":"5","create_date":"1620653556000","id":"2105673024","is_deleted":"0","publish_date":"1620647415000","index_name":"op2020youke"},{"area_name":"","blocks_id":"600140\t600111","category":"","category_id":"14","classb_id":"null","ok_status":"Y","table_name":"CGXX","table_name2":"QYCG","title":"邢台铁塔2021年综治乡镇本地化建设一期项目（二次）采购公告","area_id":"5","create_date":"1620653556000","id":"2105673024","is_deleted":"0","publish_date":"1620647415000","index_name":"op2020youke"}],"errors":[],"tracer":"","ops_request_misc":"%7B%22request%5Fid%22%3A%22162069578116780262550087%22%2C%22scm%22%3A%2220140713.130131565..%22%7D"}};
      // this.searchTest(this.pageForm).then(res => {
      for (let key in this.searchForm) {
        if (this.searchForm[key]) {
          this.pageForm[key] = this.searchForm[key];
        } else {
          this.pageForm[key] = "";
        }
      }
     
      console.log(this.searchForm,this.pageForm,1412412);

      getMailSub(this.pageForm).then((res) => {
        if (res.success) {
          this.data = res.result.items;
          this.total = res.result.total;
        }
        this.loading = false;
      });
    },
    changeDate(date) {
      console.log(date);
      this.handleSearch(1);
      // this.searchForm.startDate = date[0];
      // this.searchForm.endDate = date[1];
    },
    handleReset() {
      this.$Modal.confirm({
        title: "提醒",
        content: "是否确认重置搜索条件?",
        onCancel: () => {},
        onOk: () => {
          this.daterange = [
            new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
            new Date(new Date().getTime() - 1 * 24 * 60 * 60 * 1000),
          ];
          this.searchForm = {
            title: "",
            areas: [],
            keyword: "",
            infoType: "",
            startDate: this.format(this.daterange[0], "yyyy-MM-dd"),
            endDate: this.format(this.daterange[1], "yyyy-MM-dd"),
            pageSize: this.searchForm.pageSize,
            pageNumber: 1,
          };
        },
      });
    },
    handleCollect() {
      if (this.selectList.length === 0) {
        this.$Message.warning("未选择需要收藏的公告信息");
      } else {
        this.collectLoading = true;
        collectMailSub(this.collectionList)
          // this.collectTest(this.collectionList)
          .then((res) => {
            if (res.success) {
              this.$Message.success("收藏成功");
              let idList = this.collectionList.map((item) => {
                return item.infoId;
              });
              this.data = this.data.map((item) => {
                if (idList.indexOf(item.id) != -1) {
                  item.isCollected = item.id;
                }
                return item;
              });
              this.selectList = [];
              this.handleSearch(0);
            }
            this.collectLoading = false;
          });
      }
    },
    handleSend() {
      if (this.selectList.length === 0) {
        this.$Message.warning("未选择需要分配的公告信息");
      } else {
        this.treeData = [
          {
            title: "全选",
            expand: true,
            checked: false,
            children: [],
          },
        ];
        this.getTreeData();
        this.shareData.message = "";
        this.shareData.title =
          this.selectList.length === 1
            ? this.selectList[0].title
            : "邮件订阅分享";
        this.shareFlag = true;
      }
    },
    goShare() {
      // 提交分享
      if (this.shareData.userIds.length == 0) {
        this.$Message.warning("请先选择分享人");
      } else {
        this.submitLoading = true;
        let formList = this.selectList.map((item) => {
          let obj = {};
          let content = {};
          obj.title = item.title;
          content.message = this.shareData.message;
          content.searchData = {};
          content.url = item.url;
          obj.content = JSON.stringify(content);
          obj.type = "信息分享";
          obj.range = 1;
          obj.userIds = this.shareData.userIds;
          obj.createSend = false;
          // obj = JSON.stringify(obj);
          return obj;
        });
        // this.shareData.content = JSON.stringify(this.content);
        // shareMailSub({
        shareMailSub(formList).then((res) => {
          // this.sendTest(formList).then(res => {
          if (res.success) {
            this.shareFlag = false;
            this.$Message.success("分享成功");
            this.getTreeData();
          }
          this.submitLoading = false;
        });
      }
    },
    getTreeData() {
      //获取分享人列表
      findAllUserData().then((res) => {
        if (res.success) {
          this.treeData[0].children = [];
          res.result.forEach((item) => {
            if (item.delFlag === 0 && item.status === 0) {
              var obj = {};
              obj.title = item.nickname;
              obj.id = item.id;
              obj.checked = false;
              this.treeData[0].children.push(obj);
              // this.initTree[0].children.push(obj);
            }
          });
        }
      });
    },
    clearSelectAll() {
      this.$refs.table.selectAll(false);
    },
    getKeywordList() {
      getAllGroup().then((res) => {
        if (res.success) {
          let keywords = res.result
            .map((item) => {
              return item.keyword;
            })
            .filter((item) => item);
          console.log(keywords);
          console.log(new Set(keywords));
          console.log([...new Set(keywords)]);
          this.keywordList = [...new Set(keywords)];
        }
      });
    },
    changeTree(a, b) {
      // 分享人选择事件
      this.shareData.userIds = [];
      a.forEach((item) => {
        if (item.title != "全选") {
          this.shareData.userIds.push(item.id);
        }
      });
    },
    showSelect(e) {
      this.selectList = e;
      this.selectIdList = e.map((item) => {
        return item.id;
      });
      this.collectionList = e.map((item) => {
        let typeValue = this.optionList.typeArr.indexOf(item.type) + 1;
        if (typeValue === 0) {
          typeValue = 8;
        }
        let collection = {
          type: typeValue,
          infoId: item.id,
          name: item.title,
          url: item.url,
        };
        return collection;
      });
    },
    changePageSize(size) {
      this.searchForm.pageSize = size;
      this.pageForm.pageSize = size;
      this.handleSearch(0);
    },
    init() {
      console.log("init");
      this.getKeywordList();
      this.daterange = [
        new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
        new Date(new Date().getTime() - 1 * 24 * 60 * 60 * 1000),
      ];
      this.handleSearch(2);

      // 获取邮件订阅模板信息
      userInfo().then((res) => {
        if (res.code === 200) {
          if (res.result.mailTemplate == 2 || res.result.mailTemplate == 3) {
            this.mailType = "2"
          //   this.isOld = "1";
          //   if (res.result.mailTemplate == 2) this.mailType = "0";
          //   if (res.result.mailTemplate == 3) this.mailType = "1";
          //   console.log(this.isOld, this.mailType);
          // } else {
          //   this.isOld = "0";
          //   this.mailType = String(res.result.mailTemplate);
          } else if (res.result.mailTemplate == 1){
            this.mailType = "1";
          }
        }
      });
    },
    searchTest(params) {
      console.log(params);
      return axios({
        method: "post",
        url: `http://192.168.110.1:12345/studio/mailSub/search`,
        data: params,
        transformRequest: [
          function (data) {
            let ret = "";
            for (let it in data) {
              ret +=
                encodeURIComponent(it) +
                "=" +
                encodeURIComponent(data[it]) +
                "&";
            }
            ret = ret.substring(0, ret.length - 1);
            return ret;
          },
        ],
      });
    },
    sendTest(params) {
      return axios({
        method: "post",
        url: `http://192.168.110.1:12345/studio/mailSub/share`,
        // headers: {
        //   'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        // },
        data: params,
        // params: params,
        //   transformRequest: [function (data) {
        //     let ret = '';
        //     for (let it in data) {
        //         ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
        //     }
        //     ret = ret.substring(0, ret.length - 1);
        //     return ret;
        // }],
      });
    },
    collectTest(params) {
      return axios({
        method: "post",
        url: `http://192.168.110.1:12345/studio/mailSub/collection`,
        data: params,
        transformRequest: [
          function (data) {
            let ret = "";
            for (let it in data) {
              ret +=
                encodeURIComponent(it) +
                "=" +
                encodeURIComponent(data[it]) +
                "&";
            }
            ret = ret.substring(0, ret.length - 1);
            return ret;
          },
        ],
      });
    },
    emphasize(value, keyword) {
      if (!value) return "";
      // var regex = /(<([^>]+)>)/ig
      // value = value.replace(regex, "");
      if (keyword) {
        let reg = new RegExp(keyword, "ig");
        value = value.replace(reg, '<span class="red">' + keyword + "</span>");
      }
      return value;
    },

    mailModelOk() {
      // if (this.isOld == 1 && this.mailType == 0) {
      //   this.mailType = 2;
      // }
      // if (this.isOld == 1 && this.mailType == 1) {
      //   this.mailType = 3;
      // }

      getMailSubType({ mailTemplate: this.mailType }).then((res) => {
        if (res.code === 200) {
          this.$Message.success("邮件订阅模板修改成功");
        } else {
          this.$Message.warning("邮件订阅模板修改失败");
        }
        // if (this.mailType == 3) {
        //   this.mailType = "1";
        // }
        // if (this.mailType == 2) {
        //   this.mailType = "0";
        // }
        this.mailModel = false;
      });
    },
    mailModeCancel() {},
    //收藏与取消收藏
    collect(params) {
      let type = 8;
      if (type == "中标公示") type = 4;
      // 收藏
      if (!params.row.isCollected || params.row.isCollected=="0") {
        saveCollection({
          infoId: params.row.id,
          name: params.row.title,
          url: params.row.url,
          type: type,
        }).then(res => {
          if (res.success) {
            this.$set(this.data[params.index], 'isCollected', res.result.id)
            this.$Message.success("收藏成功")
          }
        })
      } else {
        removeCollection({
          // id: params.row.id,
          id: params.row.isCollected
        }).then(res => {
          if (res.success) {
            this.data[params.index].isCollected = 0;
            this.$Message.success("取消收藏成功")
          }
        })
      }

    },
  },
   mounted() {
    this.init();
  },
  activated() {
    this.init();
  },
 
  
  watch: {
    daterange(n, o) {
      //监控单个变量
      this.searchForm.startDate = n[0] ? this.format(n[0], "yyyy-MM-dd") : "";
      this.searchForm.endDate = n[1] ? this.format(n[1], "yyyy-MM-dd") : "";
    },
  },
  filters: {},
};
</script>

<style lang="less" scoped>
#subscribe-email {
  height: calc(100vh - 140px);

  /deep/ .description a:visited h1.e_title {
    color: purple;
  }

  /deep/ .description h1.e_title {
    color: #2d8cf0;
    font-weight: normal;
    // text-decoration: underline;
    font-size: 15px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  /deep/ .description p.e_content {
    font-size: 14px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 50px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  /deep/ .description .red {
    color: red;
  }
}
.ivu-checkbox {
  margin-top: -17px !important;
}
.mailModelRadio {
  /deep/ .ivu-radio{
    position: relative;
    top: 9px;
  }
}
</style>