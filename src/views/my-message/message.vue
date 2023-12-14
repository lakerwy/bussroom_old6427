<style lang="less">
@import "./message.less";
</style>

<template>
  <div class="message-main-con">
    <Modal v-model="codeFlag" title="微信扫一扫分享">
      <!-- <img :src="codeSrc" /> -->
      <img src="@/assets/info.png" style="margin: 0 auto; display: block" />
      <!-- <div slot="footer">
        <Button type="text" @click="codeFlag = false">取消</Button>
        <Button type="primary" @click="goShare">提交</Button>
      </div>-->
    </Modal>
    <Modal v-model="bindFlag" title="请注意：">
      <p>
        您还未绑定您的
        <span style="color: #ed4014">{{ bindArr[bindNum] }}</span>
      </p>
      <p>请您进入“个人中心”进行绑定</p>
      <div slot="footer">
        <Button type="text" @click="bindFlag = false">取消</Button>
        <Button type="primary" @click="goBind">立即前往</Button>
      </div>
    </Modal>

    <div class="message-mainlist-con">
      <div>
        <Button
          @click="setCurrentMesType('unread')"
          size="large"
          long
          type="text"
        >
          <div class="mes-wrap">
            <transition name="mes-current-type-btn">
              <Icon
                v-show="currentMessageType == 'unread'"
                type="md-checkmark"
              ></Icon>
            </transition>
            <span class="mes-type-btn-text">未读消息</span>
            <Badge
              class="message-count-badge-outer"
              class-name="message-count-badge-red"
              :count="unreadCount"
            ></Badge>
          </div>
        </Button>
      </div>
      <div>
        <Button
          @click="setCurrentMesType('hasread')"
          size="large"
          long
          type="text"
        >
          <div class="mes-wrap">
            <transition name="mes-current-type-btn">
              <Icon
                v-show="currentMessageType == 'hasread'"
                type="md-checkmark"
              ></Icon>
            </transition>
            <span class="mes-type-btn-text">已读消息</span>
            <Badge
              class="message-count-badge-outer"
              class-name="message-count-badge"
              :count="hasreadCount"
            ></Badge>
          </div>
        </Button>
      </div>
      <div>
        <Button
          @click="setCurrentMesType('recyclebin')"
          size="large"
          long
          type="text"
        >
          <div class="mes-wrap">
            <transition name="mes-current-type-btn">
              <Icon
                v-show="currentMessageType == 'recyclebin'"
                type="md-checkmark"
              ></Icon>
            </transition>
            <span class="mes-type-btn-text">回收站</span>
            <Badge
              class="message-count-badge-outer"
              class-name="message-count-badge"
              :count="recyclebinCount"
            ></Badge>
          </div>
        </Button>
      </div>
    </div>
    <div class="message-content-con">
      <transition name="view-message">
        <div v-if="showMesTitleList" class="message-title-list-con">
          <Table
            ref="messageList"
            :loading="loading"
            :columns="mesTitleColumns"
            :data="currentMesList"
            :no-data-text="noDataText"
          ></Table>
          <Page
            :current="params.pageNumber"
            :total="total"
            :page-size="params.pageSize"
            @on-change="changePage"
            @on-page-size-change="changePageSize"
            :page-size-opts="[5, 10]"
            size="small"
            show-total
            show-elevator
            show-sizer
            class="page-fix"
          ></Page>
        </div>
      </transition>
      <transition name="back-message-list">
        <div v-if="!showMesTitleList" class="message-view-content-con">
          <div class="message-content-top-bar">
            <span class="mes-back-btn-con">
              <Button type="text" @click="backMesTitleList">
                <Icon type="ios-arrow-back"></Icon>&nbsp;&nbsp;返回
              </Button>
            </span>
            <h3 class="mes-title">{{ mes.title }}</h3>
          </div>
          <!-- <p class="mes-time-con">
            <Icon type="android-time"></Icon>
            &nbsp;&nbsp;{{ mes.time }}
          </p>
          <div class="message-content-body">
            <p style="text-align:center;" class="message-content" v-html="mes.content">{{ mes.content }}</p>
          </div>-->
          <div
            style="margin-top: 60px"
            v-if="mes.type == '自主招标'"
          >
            <p style="margin-left:28px;">您发布的</p><br>
            <p style="margin-left:80px;color:#2d8cf0;cursor: pointer;" @click="toDetail(mes.content)">{{mes.content.title}}</p><br>
            <p style="margin-left:28px;">{{mes.content.status == 4 ? '已成功发布！' : '未通过审核，请核实内容后重新发布。如果疑问请咨询您的专属客服！'}}</p>
          </div>
          <div class="mes-content" v-else>
            <p>分享人：{{ !mes.username ? "系统提醒" : mes.username }}</p>
            <p>分享时间：{{ mes.createTime }}</p>
            <p>【对方留言】</p>
            <p
              style="color: #b7b7b5; height: 100px"
              v-if="mes.type == '订阅方案' || mes.type == '信息分享'"
            >
              {{
                mes.content.message == ""
                  ? "对方什么也没留下"
                  : mes.content.message
              }}
            </p>
            <p style="color: #b7b7b5; height: 100px" v-else>
              {{ mes.content == "" ? "对方什么也没留下" : mes.content }}
            </p>
            <div v-if="mes.type == '订阅方案'">
              <p>【{{ mes.title }}】</p>
              <p class="info">
                <span>关键词：</span>
                {{ mes.content.searchData.keyword }}
              </p>
              <p class="info">
                <span>地区：</span>
                {{ areaTip ? areaTip : "全部地区" }}
              </p>
              <p class="info">
                <span>类型：</span>
                {{ tableTip ? tableTip : "全部类型" }}
              </p>
              <p class="info">
                <span>范围：</span>
                {{ mes.content.searchData.searchRange === 3?searchRange[2].name:searchRange[mes.content.searchData.searchRange].name }}
              </p>
              <p class="info">
                <span>行业：</span>
                {{ cateTip ? cateTip : "全部行业" }}
              </p>
              <Button
                type="primary"
                style="margin: 0 auto"
                @click="goTend(mes.content)"
                >立即查看搜索/订阅方案</Button
              >
            </div>
            <div v-if="mes.type == '信息分享'">
              <a target="_blank" :href="mes.content.url"
                >{{ mes.title }}</a
              >

              <p v-if="false">
                <Button
                  type="primary"
                  icon="ios-chatbubbles"
                  style="margin: 0 auto"
                  @click="bindWechat(row)"
                  >微信打开公告</Button
                >
              </p>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import {
  getMessageSendData,
  editMessageSend,
  deleteMessageSend,
  shareWechat,
} from "@/api/index";
export default {
  name: "my-message",
  data() {
    const markAsreadBtn = (h, params) => {
      return h(
        "Button",
        {
          props: {
            icon: "md-eye-off",
            size: "small",
          },
          on: {
            click: () => {
              // 标记已读
              let v = params.row;
              // 转换null为""
              for (let attr in v) {
                if (v[attr] == null) {
                  v[attr] = "";
                }
              }
              let str = JSON.stringify(v);
              let data = JSON.parse(str);
              data.status = 1;
              this.loading = true;
              editMessageSend(data).then((res) => {
                this.loading = false;
                if (res.success) {
                  this.$Message.success("操作成功");
                  if (this.unreadCount >= 1) {
                    this.unreadCount -= 1;
                    this.hasreadCount += 1;
                  }
                  this.$store.commit("setMessageCount", this.unreadCount);
                  this.refreshMessage();
                }
              });
            },
          },
        },
        "标为已读"
      );
    };
    const deleteMesBtn = (h, params) => {
      return h(
        "Button",
        {
          props: {
            icon: "md-trash",
            size: "small",
            type: "error",
          },
          on: {
            click: () => {
              // 移除
              let v = params.row;
              // 转换null为""
              for (let attr in v) {
                if (v[attr] == null) {
                  v[attr] = "";
                }
              }
              let str = JSON.stringify(v);
              let data = JSON.parse(str);
              data.status = 2;
              this.loading = true;
              editMessageSend(data).then((res) => {
                this.loading = false;
                if (res.success) {
                  this.$Message.success("操作成功");
                  if (this.hasreadCount >= 1) {
                    this.hasreadCount -= 1;
                    this.recyclebinCount += 1;
                  }
                  this.refreshMessage();
                }
              });
            },
          },
        },
        "删除"
      );
    };
    const restoreBtn = (h, params) => {
      return h(
        "Button",
        {
          props: {
            icon: "md-redo",
            size: "small",
          },
          style: {
            margin: "0 5px 0 0",
          },
          on: {
            click: () => {
              // 还原
              let v = params.row;
              // 转换null为""
              for (let attr in v) {
                if (v[attr] == null) {
                  v[attr] = "";
                }
              }
              let str = JSON.stringify(v);
              let data = JSON.parse(str);
              data.status = 1;
              this.loading = true;
              editMessageSend(data).then((res) => {
                this.loading = false;
                if (res.success) {
                  this.$Message.success("操作成功");
                  if (this.recyclebinCount >= 1) {
                    this.recyclebinCount -= 1;
                    this.hasreadCount += 1;
                  }
                  this.refreshMessage();
                }
              });
            },
          },
        },
        "还原"
      );
    };
    const deleteRealBtn = (h, params) => {
      return h(
        "Button",
        {
          props: {
            icon: "md-trash",
            size: "small",
            type: "error",
          },
          on: {
            click: () => {
              // 彻底删除
              let v = params.row;
              this.loading = true;
              deleteMessageSend({
                ids: v.id,
              }).then((res) => {
                this.loading = false;
                if (res.success) {
                  this.$Message.success("操作成功");
                  this.recyclebinCount -= 1;
                  this.refreshMessage();
                }
              });
            },
          },
        },
        "彻底删除"
      );
    };
    return {
      optionList: {
        table: [
          {
            name: "VIP项目",
            value: "3030",
          },
          {
            name: "项目备案核准",
            value: "3020",
          },
          {
            name: "项目动态",
            value: "3050",
          },
          {
            name: "项目跟踪",
            value: "3070",
          },
          {
            name: "重点招商项目",
            value: "3080",
          },
          {
            name: "国外商机",
            value: "3090",
          },
        ],
        type: [{
              value: 0,
              name: "内容"
            },
            {
              value: 1,
              name: "标题"
            },
            {
              value: 3,
              name: "招标编号"
            }],
        newArea: [
          {
            name: "北京",
            value: 1,
          },
          {
            name: "天津",
            value: 3,
          },
          {
            name: "河北",
            value: 5,
          },
          {
            name: "山西",
            value: 6,
          },
          {
            name: "内蒙古",
            value: 7,
          },
          {
            name: "上海",
            value: 2,
          },
          {
            name: "山东",
            value: 16,
          },
          {
            name: "江苏",
            value: 11,
          },
          {
            name: "安徽",
            value: 13,
          },
          {
            name: "江西",
            value: 15,
          },
          {
            name: "浙江",
            value: 12,
          },
          {
            name: "福建",
            value: 14,
          },
          {
            name: "湖北",
            value: 18,
          },
          {
            name: "湖南",
            value: 19,
          },
          {
            name: "河南",
            value: 17,
          },
          {
            name: "广东",
            value: 20,
          },
          {
            name: "广西",
            value: 21,
          },
          {
            name: "海南",
            value: 22,
          },
          {
            name: "辽宁",
            value: 8,
          },
          {
            name: "吉林",
            value: 9,
          },
          {
            name: "黑龙江",
            value: 10,
          },
          {
            name: "陕西",
            value: 26,
          },
          {
            name: "甘肃",
            value: 28,
          },
          {
            name: "宁夏",
            value: 31,
          },
          {
            name: "新疆",
            value: 30,
          },
          {
            name: "青海",
            value: 29,
          },
          {
            name: "重庆",
            value: 4,
          },
          {
            name: "四川",
            value: 27,
          },
          {
            name: "贵州",
            value: 23,
          },
          {
            name: "云南",
            value: 24,
          },
          {
            name: "西藏",
            value: 25,
          },
          {
            name: "跨省",
            value: 36,
          },
          {
            name: "香港",
            value: 32,
          },
          {
            name: "澳门",
            value: 33,
          },
          {
            name: "台湾",
            value: 34,
          },
        ],
        category1: [
          {
            name: "交通运输",
            value: "1",
          },
          {
            name: "能源化工--电力",
            value: "2",
          },
          {
            name: "能源化工--化工",
            value: "3",
          },
          {
            name: "冶金矿产",
            value: "4",
          },
          {
            name: "机械电子",
            value: "5",
          },
          {
            name: "网络通讯计算机",
            value: "6",
          },
          {
            name: "市政房地产建筑",
            value: "7",
          },
          {
            name: "水利",
            value: "8",
          },
          {
            name: "环保",
            value: "9",
          },
          {
            name: "医疗卫生",
            value: "10",
          },
          {
            name: "科技文教旅游",
            value: "11",
          },
          {
            name: "出版印刷",
            value: "12",
          },
          {
            name: "轻工纺织食品",
            value: "13",
          },
          {
            name: "农林牧渔",
            value: "14",
          },
          {
            name: "商业服务",
            value: "15",
          },
          {
            name: "园林绿化",
            value: "16",
          },
        ],
        category2: [
          [
            {
              name: "高速公路、道路",
              value: "101",
            },
            {
              name: "桥梁、立交桥",
              value: "102",
            },
            {
              name: "机场",
              value: "103",
            },
            {
              name: "铁路、轨道交通",
              value: "104",
            },
            {
              name: "航道、水利枢纽",
              value: "105",
            },
            {
              name: "港口、码头、泊位、渔港",
              value: "106",
            },
            {
              name: "客运站、交通枢纽",
              value: "107",
            },
            {
              name: "隧道",
              value: "108",
            },
            {
              name: "物流",
              value: "109",
            },
          ],
          [
            {
              name: "火电",
              value: "201",
            },
            {
              name: "核电",
              value: "202",
            },
            {
              name: "水电",
              value: "203",
            },
            {
              name: "风电",
              value: "204",
            },
            {
              name: "电网建设",
              value: "205",
            },
            {
              name: "太阳能、光伏发电",
              value: "206",
            },
            {
              name: "垃圾焚烧发电及其他新能源发电",
              value: "207",
            },
            {
              name: "水泥余热发电",
              value: "208",
            },
          ],
          [
            {
              name: "天然气、输气管道",
              value: "301",
            },
            {
              name: "石油、石化",
              value: "302",
            },
            {
              name: "有机化学",
              value: "303",
            },
            {
              name: "无机化学",
              value: "304",
            },
            {
              name: "煤化工",
              value: "305",
            },
          ],
          [
            {
              name: "选煤厂、煤矿、尾矿",
              value: "401",
            },
            {
              name: "矿山、矿产、矿石",
              value: "402",
            },
            {
              name: "水泥生产线、混凝土",
              value: "403",
            },
            {
              name: "金属冶炼",
              value: "404",
            },
            {
              name: "钢厂、钢结构",
              value: "405",
            },
            {
              name: "玻璃及其他",
              value: "406",
            },
          ],
          [
            {
              name: "机械产品、厂房、生产车间",
              value: "501",
            },
            {
              name: "医疗器械、电子产品、电器产品",
              value: "502",
            },
            {
              name: "造船、造车",
              value: "503",
            },
          ],
          [
            {
              name: "网络通讯计算机",
              value: "601",
            },
          ],
          [
            {
              name: "房地产建筑",
              value: "701",
            },
            {
              name: "供热",
              value: "702",
            },
            {
              name: "排水",
              value: "704",
            },
            {
              name: "土地治理",
              value: "705",
            },
          ],
          [
            {
              name: "水厂、供水",
              value: "801",
            },
            {
              name: "灌溉",
              value: "802",
            },
            {
              name: "围海造地",
              value: "803",
            },
            {
              name: "水库、引水",
              value: "804",
            },
            {
              name: "防护堤、防洪堤",
              value: "805",
            },
          ],
          [
            {
              name: "垃圾",
              value: "901",
            },
            {
              name: "水处理",
              value: "902",
            },
            {
              name: "废弃物处理",
              value: "903",
            },
            {
              name: "脱硫脱硝、除尘除渣",
              value: "904",
            },
            {
              name: "污泥治理",
              value: "905",
            },
          ],
          [
            {
              name: "医院",
              value: "1001",
            },
            {
              name: "制药制剂",
              value: "1002",
            },
          ],
          [
            {
              name: "科技文教旅游",
              value: "1105",
            },
          ],
          [
            {
              name: "出版印刷",
              value: "1205",
            },
          ],
          [
            {
              name: "纺织",
              value: "1301",
            },
            {
              name: "食品生产",
              value: "1302",
            },
            {
              name: "肉类加工、屠宰",
              value: "1303",
            },
            {
              name: "造纸",
              value: "1304",
            },
            {
              name: "粮食储备",
              value: "1305",
            },
            {
              name: "卷烟物流",
              value: "1306",
            },
            {
              name: "其他",
              value: "1307",
            },
          ],
          [
            {
              name: "农林牧渔",
              value: "1405",
            },
          ],
          [
            {
              name: "商业服务",
              value: "1505",
            },
          ],
          [
            {
              name: "园林绿化",
              value: "1605",
            },
          ],
        ],
        stage: [
          {
            value: "0",
            name: "项目进展阶段",
          },
          {
            value: "2",
            name: "项目建议书阶段",
          },
          {
            value: "3",
            name: "可行性研究报告阶段",
          },
          {
            value: "4",
            name: "项目审批核查",
          },
          {
            value: "6",
            name: "工程设计",
          },
          {
            value: "10",
            name: "施工准备",
          },
          {
            value: "11",
            name: "在建阶段",
          },
        ],
        time: [
          "近一天",
          "近一周",
          "近两周",
          "近一月",
          "近三月",
          "近半年",
          "近一年",
        ],
      },

      bindArr: ["邮件", "微信", "手机", "app"],
      bindFlag: false,
      bindNum: 0,

      codeSrc: "",
      codeFlag: false,
      shareData: {
        title: "",
        content: "",
        type: "",
        range: 1,
        userIds: [],
        createSend: true,
      },
      areaTip: "",
      areaList: [
        {
          value: "1",
          label: "北京",
        },
        {
          value: "2",
          label: "上海",
        },
        {
          value: "3",
          label: "天津",
        },
        {
          value: "4",
          label: "重庆",
        },
        {
          value: "5",
          label: "河北",
        },
        {
          value: "6",
          label: "山西",
        },
        {
          value: "7",
          label: "内蒙",
        },
        {
          value: "8",
          label: "辽宁",
        },
        {
          value: "9",
          label: "吉林",
        },
        {
          value: "10",
          label: "黑龙",
        },
        {
          value: "11",
          label: "江苏",
        },
        {
          value: "12",
          label: "浙江",
        },
        {
          value: "13",
          label: "安徽",
        },
        {
          value: "14",
          label: "福建",
        },
        {
          value: "15",
          label: "江西",
        },
        {
          value: "16",
          label: "山东",
        },
        {
          value: "17",
          label: "河南",
        },
        {
          value: "18",
          label: "湖北",
        },
        {
          value: "19",
          label: "湖南",
        },
        {
          value: "20",
          label: "广东",
        },
        {
          value: "21",
          label: "广西",
        },
        {
          value: "22",
          label: "海南",
        },
        {
          value: "23",
          label: "贵州",
        },
        {
          value: "24",
          label: "云南",
        },
        {
          value: "25",
          label: "西藏",
        },
        {
          value: "26",
          label: "陕西",
        },
        {
          value: "27",
          label: "四川",
        },
        {
          value: "28",
          label: "甘肃",
        },
        {
          value: "29",
          label: "青海",
        },
        {
          value: "30",
          label: "新疆",
        },
        {
          value: "31",
          label: "宁夏",
        },
        {
          value: "32",
          label: "香港",
        },
        {
          value: "33",
          label: "澳门",
        },
        {
          value: "34",
          label: "台湾",
        },
        {
          value: "36",
          label: "跨省",
        },
      ],
      cateTip: "",
      cateList: [
        {
          value: "1",
          label: "交通运输",
        },
        {
          value: "2",
          label: "网络通讯计算机",
        },
        {
          value: "3",
          label: "市政房地产建筑",
        },
        {
          value: "4",
          label: "水利桥梁",
        },
        {
          value: "5",
          label: "机械电子电器",
        },
        {
          value: "6",
          label: "环保",
        },
        {
          value: "8",
          label: "医疗卫生",
        },
        {
          value: "9",
          label: "科技文教旅游",
        },
        {
          value: "10",
          label: "冶金矿产原材料",
        },
        {
          value: "11",
          label: "出版印刷",
        },
        {
          value: "12",
          label: "轻工纺织食品",
        },
        {
          value: "13",
          label: "农林牧渔",
        },
        {
          value: "16",
          label: "园林绿化",
        },
        {
          value: "17",
          label: "能源",
        },
        {
          value: "18",
          label: "化工",
        },
        {
          value: "14",
          label: "商业服务",
        },
        {
          value: "15",
          label: "其它",
        },
      ],
      tableTip: "",
      tableList: [
        {
          name: "工程招标",
          value: 1,
        },
        {
          name: "货物招标",
          value: 2,
        },
        {
          name: "服务招标",
          value: 3,
        },
        {
          name: "中标公示",
          value: 4,
        },
        {
          name: "招标预告",
          value: 5,
        },
        {
          name: "政府采购",
          value: 6,
        },
        {
          name: "企业采购",
          value: 7,
        },
      ],
      searchRange: [{
              value: 0,
              name: "内容"
            },
            {
              value: 1,
              name: "标题"
            },
            {
              value: 3,
              name: "招标编号"
            }],
      contentData: {},
      loading: true,
      params: {
        userId: JSON.parse(Cookies.get("userInfo")).id,
        status: 0,
        pageNumber: 1, // 当前页数
        pageSize: 10, // 页面大小
        sort: "createTime", // 默认排序字段
        order: "desc", // 默认排序方式
      },
      total: 0,
      totalUnread: 0,
      totalRead: 0,
      totalRemove: 0,
      currentMesList: [],
      unreadMesList: [],
      hasreadMesList: [],
      recyclebinList: [],
      currentMessageType: "unread",
      showMesTitleList: true,
      unreadCount: 0,
      hasreadCount: 0,
      recyclebinCount: 0,
      noDataText: "暂无未读消息",
      mes: {
        title: "",
        time: "",
        content: "",
      },
      dictMessageType: this.$store.state.dict.messageType,
      mesTitleColumns: [
        {
          type: "index",
          width: 80,
          align: "center",
          title: "序号",
        },
        {
          title: " ",
          key: "title",
          align: "left",
          ellipsis: true,
          render: (h, params) => {
            return h(
              "Poptip",
              {
                props: {
                  content: params.row.title,
                  disabled: params.row.title.length < 15,
                  transfer: true,
                  width: 300,
                  trigger: "hover",
                  "word-wrap": true,
                  placement: "top-start",
                },
              },
              [
                h(
                  "a",
                  {
                    style: {
                      margin: "0 30px 0 0",
                      cursor: "pointer",
                      color: "#2d8cf0",
                    },

                    on: {
                      click: () => {
                        this.showMesTitleList = false;
                        console.log("this.mes", this.mes);
                        this.mes.title = params.row.title;
                        this.mes.time = params.row.createTime;
                        this.getContent(params.row);
                        if (this.currentMessageType == "unread") {
                          // 标记已读
                          let v = params.row;
                          // 转换null为""
                          for (let attr in v) {
                            if (v[attr] == null) {
                              v[attr] = "";
                            }
                          }
                          let str = JSON.stringify(v);
                          let data = JSON.parse(str);
                          data.status = 1;
                          this.loading = true;
                          editMessageSend(data).then((res) => {
                            this.loading = false;
                            if (res.success) {
                              // this.$Message.success("操作成功");
                              if (this.unreadCount >= 1) {
                                this.unreadCount -= 1;
                                this.hasreadCount += 1;
                              }
                              this.$store.commit(
                                "setMessageCount",
                                this.unreadCount
                              );
                              this.refreshMessage();
                            }
                          });
                        }
                      },
                    },
                  },
                  "【" + params.row.type + "】 " + params.row.title
                ),
              ]
            );
          },
        },
        {
          title: " ",
          key: "time",
          align: "center",
          width: 190,
          render: (h, params) => {
            return h("span", [
              h("Icon", {
                props: {
                  type: "md-time",
                  size: 16,
                },
                style: {
                  margin: "0 5px 3px 0",
                },
              }),
              h("span", params.row.createTime),
            ]);
          },
        },
        {
          title: " ",
          key: "asread",
          align: "center",
          width: 210,
          render: (h, params) => {
            if (this.currentMessageType == "unread") {
              return h("div", [markAsreadBtn(h, params)]);
            } else if (this.currentMessageType == "hasread") {
              return h("div", [deleteMesBtn(h, params)]);
            } else {
              return h("div", [
                restoreBtn(h, params),
                deleteRealBtn(h, params),
              ]);
            }
          },
        },
      ],
    };
  },
  methods: {
    goBind() {
      this.$router.push({
        name: "ownspace_index",
      });
      this.bindFlag = false;
    },

    bindWechat() {
      var that = this;
      this.shareData.title = "【" + this.mes.type + "】" + this.mes.title;
      this.shareData.type = "信息分享";
      shareWechat(this.shareData).then((res) => {
        if (res.success) {
          var ticket = res.result.split(`"`)[3];
          that.codeSrc =
            "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=" + ticket;
          that.codeFlag = true;
        } else if (res.code == 201) {
          that.bindNum = 1;
          that.bindFlag = true;
        }
      });
    },
    goTend(data) {
      this.$router.push({
        name: data.type === 0 ? "tendering" : "building",
        params: {
          data: data.searchData,
        },
      });
    },
    changePage(v) {
      this.params.pageNumber = v;
      this.refreshMessage();
    },
    changePageSize(v) {
      this.params.pageSize = v;
      this.refreshMessage();
    },
    refreshMessage() {
      let status = 0;
      let type = this.currentMessageType;
      if (type == "unread") {
        status = 0;
      } else if (type == "hasread") {
        status = 1;
      } else {
        status = 2;
      }
      this.params.status = status;
      this.loading = true;
      getMessageSendData(this.params).then((res) => {
        this.loading = false;
        if (res.success) {
          this.currentMesList = res.result.content;
          this.total = res.result.totalElements;
          // ###S
          if (this.getStore("messageData")) {
            let message = JSON.parse(this.getStore("messageData"));
            if (this.getStore("messageData")) {
              this.params.status = message.status;
              if (message.status == 0) {
                this.setCurrentMesType("unread");
                this.currentMessageType = "unread";
              } else if (message.status == 1) {
                this.setCurrentMesType("hasread");
                this.currentMessageType = "hasread";
              } else {
                this.setCurrentMesType("recyclebin");
                this.currentMessageType = "recyclebin";
              }
            }
            let data = this.currentMesList.find(
              (item) => item.messageId === message.id
            );
            this.showMesTitleList = false;
            this.params.status = status;
            if (data) {
              this.getContent(data);
              this.removeStore("messageData");
              if (this.currentMessageType == "unread") {
                let v = data;
                for (let attr in v) {
                  if (v[attr] == null) {
                    v[attr] = "";
                  }
                }
                let str = JSON.stringify(v);
                let data1 = JSON.parse(str);
                data1.status = 1;
                this.loading = true;
                editMessageSend(data1).then((res) => {
                  this.loading = false;
                  if (res.success) {
                    if (this.unreadCount >= 1) {
                      this.unreadCount -= 1;
                      this.hasreadCount += 1;
                    }
                    this.$store.commit("setMessageCount", this.unreadCount);
                    this.refreshMessage();
                  }
                });
              }
              return;
            }
          }
          // ###E
        }
      });
    },
    initMessage() {
      this.params.status = 0;
      getMessageSendData(this.params).then((res) => {
        console.log(res, "message");
        if (res.success) {
          this.unreadCount = res.result.totalElements;
          this.initReadMessage();
        }
      });
    },
    initReadMessage() {
      this.params.status = 1;
      getMessageSendData(this.params).then((res) => {
        if (res.success) {
          this.hasreadCount = res.result.totalElements;
          this.initRemoveMessage();
        }
      });
    },
    initRemoveMessage() {
      this.params.status = 2;
      getMessageSendData(this.params).then((res) => {
        if (res.success) {
          this.recyclebinCount = res.result.totalElements;
          this.setCurrentMesType("unread");
        }
      });
    },
    editMessage(status) {
      editMessageSend().then((res) => {
        if (res.success) {
          this.$Message.success("操作成功");
        }
      });
    },
    deleteMessage(id) {
      deleteMessageSend(id).then((res) => {
        if (res.success) {
          this.$Message.success("删除成功");
        }
      });
    },
    backMesTitleList() {
      this.showMesTitleList = true;
    },
    setCurrentMesType(type) {
      if (this.currentMessageType !== type) {
        this.showMesTitleList = true;
      }
      this.currentMessageType = type;
      if (type == "unread") {
        this.noDataText = "暂无未读消息";
      } else if (type == "hasread") {
        this.noDataText = "暂无已读消息";
      } else {
        this.noDataText = "回收站无消息";
      }
      this.params.pageNumber = 1;
      this.refreshMessage();
    },
    getContent(v) {
      this.mes = v;
      if (v.type == "自主招标") {
        this.mes = v;
        let noticeIndex = this.mes.content.indexOf(', noticeId=');
        let statusIndex = this.mes.content.indexOf(', status=');

        let title = this.mes.content.slice(7,noticeIndex);
        let noticeId = this.mes.content.slice(noticeIndex +11,statusIndex);
        let status =  this.mes.content.slice(statusIndex +9, -1);

        this.mes.content = {
          title,noticeId,status
        }
        console.log(this.mes)
      }
      if (v.type == "订阅方案" || v.type == "信息分享") {
        this.mes.content = JSON.parse(v.content);
      } else {
        this.mes.content = v.content;
      }
      if (this.mes.type == "订阅方案" && this.mes.content.type == 0) {
        this.areaTip = this.initTip(
          this.mes.content.searchData.area,
          this.optionList.newArea
        );
        // this.cateTip = "";
        // this.mes.content.searchData.category.forEach(a => {
        //   this.cateList.forEach(b => {
        //     if (a == b.value) {
        //       this.cateTip += b.label + "，";
        //     }
        //   });
        // });
        // if (this.mes.content.searchData.category[0] == "") {
        //   this.cateTip = "全部行业";
        // } else {
        //   this.cateTip = this.cateTip.substring(0, this.cateTip.length - 1)
        // }
        this.tableTip = this.initTip(
          this.mes.content.searchData.table,
          this.tableList
        );
      } else if (this.mes.type == "订阅方案" && this.mes.content.type == 1) {
        //
        this.areaTip = this.initTip(
          this.mes.content.searchData.area,
          this.optionList.newArea
        );
        this.cateTip = this.initTip(
          this.mes.content.searchData.category1,
          this.optionList.category1
        );
        this.tableTip = this.initTip(
          this.mes.content.searchData.table,
          this.optionList.table
        );
      }
    },
    initTip(prop, arr) {
      let tip = [];
      arr.forEach((item) => {
        prop.forEach((el) => {
          if (el == item.value) {
            tip.push(item.name);
          }
        });
      });
      tip = tip.length === 0 ? "" : tip.join(",");
      return tip;
    },
    toDetail(v){
      let data = this.getStore("tenderDetailsTabs") || [];
      if (data.length !== 0) {
        data = JSON.parse(data);
      }
      if (!data.some((item) => item.id == v.noticeId)) {
        data.push({
          id: v.noticeId + "",
          hash: v.noticeId + "",
          title: v.title,
          type:3
        });
      }
      this.setStore("tenderDetailsTabs", JSON.stringify(data));
      this.setStore("currentDetailId", v.noticeId + "");
      this.$router.push("/infoPublish/noticeDetail#" + v.noticeId);
    }
  },
  mounted() {
    this.initMessage();
  },
  watch: {
    // 监听路由变化通过id获取数据
    $route(to, from) {
      if (to.name == "message_index") {
        this.initMessage();
      }
    },
  },
};
</script>