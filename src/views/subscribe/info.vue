<template>
  <div id="info">
    <Modal v-model="addFlag" title="添加分组" @on-ok="addGroup" @on-cancel="cancel">
      <Input v-model="newGroup"></Input>
    </Modal>
    <Modal v-model="repeatFlag" title="Title" :loading="loading" @on-ok="fugai" @on-cancel="quxiao">
      <p>分组名重复，是否覆盖</p>
    </Modal>
    <Modal v-model="resetFlag" title="请注意：" :loading="loading" @on-ok="reset" @on-cancel="cancelReset">
      <p>是否重置</p>
    </Modal>
    <Modal v-model="bindFlag" title="请注意：">
      <p>
        您还未绑定您的
        <span style="color:#ed4014">{{bindArr[bindNum]}}</span>
      </p>
      <p>请您进入“个人中心”进行绑定</p>
      <div slot="footer">
        <Button type="text" @click="bindFlag = false">取消</Button>
        <Button type="primary" @click="goBind">立即前往</Button>
      </div>
    </Modal>

    <Modal v-model="largeFlag" title="请注意：">
      <p>
        您当前的搜索条件可搜索到
        <span style="color:#ed4014">{{realToal}}</span>
        条信息，平均每天超200条，建议重新订阅，或联系客服帮您优化设置。
      </p>
      <div slot="footer">
        <Button type="text" @click="continueSub">继续订阅</Button>
        <Button type="primary" @click="largeFlag = false">重新设置</Button>
      </div>
    </Modal>

    <Card class="center">
      <Row type="flex" justify="space-between">
        <Col span="5" v-if="expand">
        <div class="search_group">
          <!-- <h2 style="padding-bottom:20px;">分组</h2> -->
          <Row>
            <Col span="24">
            <Button long style="margin-bottom:50px;" type="primary" @click="pushTend">添加、修改订阅</Button>
            <Tooltip v-for="(item,index) in groupList" :key="item" class="groupTip" max-width="500"
              :disabled="item.name.length<=15" :content="item.name">
              <Button class="group_item" long size="small" @click="getSet(item,index)"
                :type="groupFlag == index?'primary':''">{{ item.name }}</Button>
            </Tooltip>
            </Col>
          </Row>
        </div>
        </Col>
        <div class="expand">
          <Icon :type="expandIcon" size="16" class="icon" @click="changeExpand" />
        </div>

        <Col :span="span">
        <div class="result">
          <div class="content">
            <div class="subscribe">
              <Button type="primary" @click="subscribe(0)" v-if="false" size="small" icon="ios-mail">添加邮件订阅</Button>
              <Button type="primary" @click="subscribe(1)" v-if="false" size="small" icon="ios-chatbubbles">添加微信订阅</Button>
              <Button type="primary" @click="subscribe(2)" size="small" icon="ios-send">添加短信订阅</Button>
              <Button type="primary" @click="subscribe(3)" size="small" icon="ios-appstore" v-show="false">添加App订阅</Button>
            </div>
            <p style="margin:0 0 10px;">搜索结果：{{ total }}条</p>
            <p style="margin:0 0 10px;" v-show="total == 3000">系统最大检索结果3000条，如需帮助请拨打400-006-6655热线咨询。</p>
            <div class="infoList">
              <Row>
                <Table :columns="columns1" :data="data1">
                  <template slot-scope="{row}" slot="type">
                    <strong>【{{ row.type }}】</strong>
                  </template>
                  <template slot="action" slot-scope="{row}">
                    <!-- <Icon size="24" class="actionBtn" type="ios-star-outline" />
                <Icon size="24" class="actionBtn" type="ios-link"  />
                <Icon size="24" class="actionBtn" type="ios-folder-outline" />
                <Icon size="24" class="actionBtn" type="ios-chatbubbles-outline" /> -->
                    <infoButtons :row="row" :isIcon="true" />
                    <!-- <Button
                  type="primary"
                  size="small"
                  style="margin-right: 5px"
                  @click="show(index)"
                >View</Button>
                      <Button type="error" size="small" @click="remove(index)">Delete</Button>-->
                  </template>
                  <template slot-scope="{row}" slot="area">
                    <strong class="area">{{ row.area }}</strong>
                  </template>
                  <template slot-scope="{row}" slot="title">
                    <a target="_blank"  :href= row.url class="infoTitle" v-html="row.title"></a>
                  </template>
                </Table>
              </Row>

              <Row style="margin-top:10px;">
                <Col span="24" push="6">
                <Page :total="total" :page-size="30" @on-change="changePage" :current.sync="currentPage" />
                </Col>
              </Row>
            </div>
          </div>
        </div>
        </Col>
        <Col span="18" v-show="false">
        <div class="search_main">
          <h2>搜索</h2>
          <Form style="padding:20px;">
            <FormItem>
              <Row :gutter="16">
                <Col span="4">
                <Button type="primary" @click="addKeyword">+添加关键词</Button>
                </Col>
                <Col span="5">
                <div>
                  <!-- :max-tag-placeholder="selectTest"areaList[searchData.area[0]-1] searchData.area.forEach(item => {
                       return areaList[item-1]
                      })-->
                  <Select max-tag-count="0" v-model="searchData.area" multiple placeholder="全部地区">
                    <Option value="1">北京</Option>
                    <Option value="2">上海</Option>
                    <Option value="3">天津</Option>
                    <Option value="4">重庆</Option>
                    <Option value="5">河北</Option>
                    <Option value="6">山西</Option>
                    <Option value="7">内蒙古</Option>
                    <Option value="8">辽宁</Option>
                    <Option value="9">吉林</Option>
                    <Option value="10">黑龙江</Option>
                    <Option value="11">江苏</Option>
                    <Option value="12">浙江</Option>
                    <Option value="13">安徽</Option>
                    <Option value="14">福建</Option>
                    <Option value="15">江西</Option>
                    <Option value="16">山东</Option>
                    <Option value="17">河南</Option>
                    <Option value="18">湖北</Option>
                    <Option value="19">湖南</Option>
                    <Option value="20">广东</Option>
                    <Option value="21">广西</Option>
                    <Option value="22">海南</Option>
                    <Option value="23">贵州</Option>
                    <Option value="24">云南</Option>
                    <Option value="25">西藏</Option>
                    <Option value="26">陕西</Option>
                    <Option value="27">四川</Option>
                    <Option value="28">甘肃</Option>
                    <Option value="29">青海</Option>
                    <Option value="30">新疆</Option>
                    <Option value="31">宁夏</Option>
                    <Option value="32">香港</Option>
                    <Option value="33">澳门</Option>
                    <Option value="34">台湾</Option>
                    <Option value="36">跨省</Option>
                  </Select>
                </div>
                </Col>
                <Col span="5">
                <div>
                  <Select max-tag-count="0" multiple v-model="searchData.table" placeholder="全部类型">
                    <Option value="1">工程招标</Option>
                    <Option value="2">货物招标</Option>
                    <Option value="3">服务招标</Option>
                    <Option value="4">中标公示</Option>
                    <Option value="5">招标预告</Option>
                    <Option value="6">政府采购</Option>
                    <Option value="7">企业采购</Option>
                  </Select>
                </div>
                </Col>
                <Col span="4">
                <div>
                  <Select max-tag-count="0" multiple v-model="searchData.category" placeholder="全部行业">
                    <Option value="1">交通运输</Option>
                    <Option value="2">网络通讯计算机</Option>
                    <Option value="3">市政房地产建筑</Option>
                    <Option value="4">水利桥梁</Option>
                    <Option value="5">机械电子电器</Option>
                    <Option value="6">环保</Option>
                    <Option value="8">医疗卫生</Option>
                    <Option value="9">科技文教旅游</Option>
                    <Option value="10">冶金矿产原材料</Option>
                    <Option value="11">出版印刷</Option>
                    <Option value="12">轻工纺织食品</Option>
                    <Option value="13">农林牧渔</Option>
                    <Option value="16">园林绿化</Option>
                    <Option value="17">能源</Option>
                    <Option value="18">化工</Option>
                    <Option value="14">商业服务</Option>
                    <Option value="15">其它</Option>
                  </Select>
                </div>
                </Col>
                <Col span="4">
                <div>
                  <Select v-model="searchData.searchRange">
                    <Option :value="0">内容</Option>
                    <Option :value="1">标题</Option>
                    <Option :value="3">招标编号</Option>
                  </Select>
                </div>
                </Col>
                <Col span="2">
                <Button type="primary" @click="resetFlag = true">重置</Button>
                </Col>
              </Row>
            </FormItem>
            <FormItem>
              <Row :gutter="5">
                <Col span="18">
                <RadioGroup v-model="searchData.range" @on-change="changeRange" class="term">
                  <span style="white-space: nowrap;">时间：</span>
                  <Radio :label="4">
                    <span>近一年</span>
                  </Radio>
                  <Radio :label="3">
                    <span>近三月</span>
                  </Radio>
                  <Radio :label="2">
                    <span>近一月</span>
                  </Radio>
                  <Radio :label="1">
                    <span>近两周</span>
                  </Radio>
                  <Radio :label="0">
                    <span>近一周</span>
                  </Radio>
                  <Radio :label="5">
                    <span>限定时间</span>
                  </Radio>
                </RadioGroup>
                </Col>
                <Col span="6">
                <DatePicker v-show="this.searchData.range == 5" type="daterange" :options="dateOption"
                  placement="bottom-end" placeholder="选择日期" @on-change="pickDate" v-model="dateArr"></DatePicker>
                <!-- v-model="date_range" -->
                </Col>
              </Row>
            </FormItem>
            <FormItem class="keyWordsItem" v-for="(item,index) in searchData.keyword" :key="index">
              <Row type="flex" justify="space-between">
                <Col span="3">
                <p class="subtitile">搜索词组{{ index + 1 }}：</p>
                </Col>
                <Col span="17">
                <Input type="text" v-model="searchData.keyword[index]" placeholder="输入关键词 多个词可用空格隔开！" />
                </Col>
                <Col span="3">
                <Button type="primary" v-show="index !== 0" @click="removeKeyword(index)">—</Button>
                </Col>
              </Row>
            </FormItem>
            <!-- <FormItem class="keyWordsItem">
                <Row type="flex" justify="space-between">
                  <Col span="3">
                    <p class="subtitile">搜索词组2：</p>
                  </Col>
                  <Col span="17">
                    <Input type="text" placeholder="输入关键词 多个词可用空格隔开！" />
                  </Col>
                  <Col span="3">
                    <Button type="primary">—</Button>
                  </Col>
                </Row>
              </FormItem>-->
            <FormItem style="margin-bottom: 0;">
              <Row>
                <Col span="4" push="4">
                <Button @click="saveSet" type="success">保存搜索设置</Button>
                </Col>
                <Col span="4" push="6">
                <Button type="primary" @click="search('a')">搜索</Button>
                </Col>
              </Row>
            </FormItem>
          </Form>
        </div>
        </Col>
      </Row>
    </Card>
  </div>
</template>

<script>
  import {
    ztbSearch,
    saveSearch,
    getAllGroup,
    removeGroup,
    enable,
    disable
  } from "@/api/index";
  import infoButtons from "@/views/my-components/xboot/info-buttons";
  export default {
    components: {
      infoButtons
    },
    name: "info",
    data() {
      return {
        expand: true,
        expandIcon: "ios-arrow-back",
        span: 18,
        largeFlag: false,
        bindArr: ["邮件", "微信", "手机", "app"],
        bindFlag: false,
        bindNum: 0,
        // date_range:[new Date(),new Date()],
        realToal: 0,
        dateArr: ["2020-01-01", "2020-04-21"],
        groupFlag: -1,
        areaTip: "",
        currentPage: 1,
        resetFlag: false,
        dateOption: {
          disabledDate(date) {
            return date.valueOf() > Date.now();
          }
        },
        resFlag: false,
        tags: [],
        term: "4",
        groupList: [],
        newGroup: "",
        addFlag: false,
        mode19: "",
        count: ["标签1", "标签2", "标签3", "标签4", "标签5"],
        columns1: [{
            title: "类型",
            slot: "type",
            align: "center",
            width: 120
          },
          {
            title: "地区",
            slot: "area",
            align: "center",
            minWidth: 70
          },
          {
            title: "标题",
            slot: "title",
            align: "center",
            tooltip: true,
            minWidth: 350
          },
          {
            title: "操作",
            slot: "action",
            align: "center",
            minWidth: 140
          },
          {
            title: "发布时间",
            key: "date",
            minWidth: 100
          }
        ],
        data1: [],
        category: [
          "交通运输",
          "网络通讯计算机",
          "市政房地产建筑",
          "水利桥梁",
          "机械电子电器",
          "环保",
          "医疗卫生",
          "科技文教旅游",
          "冶金矿产原材料",
          "出版印刷",
          "轻工纺织食品",
          "农林牧渔",
          "园林绿化",
          "能源",
          "化工",
          "商业服务",
          "其它"
        ],
        searchData: {
          keyword: [
            "国网 物资",
            "中国移动 通信工程",
            "装饰 装修 车站",
            "钢材",
            "国信招标"
          ],
          table: [],
          area: [],
          category: [""],
          page: 1,
          rows: 30,
          searchRange: 0,
          range: 0
        },
        total: 0,
        areaList: [
          "北京",
          "上海",
          "天津",
          "重庆",
          "河北",
          "山西",
          "内蒙古",
          "辽宁",
          "吉林",
          "黑龙江",
          "江苏",
          "浙江",
          "安徽",
          "福建",
          "江西",
          "山东",
          "河南",
          "湖北",
          "湖南",
          "广东",
          "广西",
          "海南",
          "贵州",
          "云南",
          "西藏",
          "陕西",
          "四川",
          "甘肃",
          "青海",
          "新疆",
          "宁夏",
          "香港",
          "澳门",
          "台湾",
          "跨省"
        ],
        repeatFlag: false,
        getTime: 0
      };
    },
    methods: {
      pushTend() {
        this.$router.push({
          name: "tendering"
        });
      },
      changeExpand() {
        this.expand = !this.expand;
        if (this.expand) {
          this.expandIcon = "ios-arrow-back";
          this.span = 18;
        } else {
          this.expandIcon = "ios-arrow-forward";
          this.span = 23;
        }
      },
      goBind() {
        this.$router.push({
          name: "ownspace_index"
        });
        this.bindFlag = false;
      },
      continueSub() {
        var groupId = this.groupList[this.groupFlag].id;
        var total = this.realToal;
        var that = this;
        var type = this.bindNum;
        enable({
          total,
          groupId,
          type,
          update: true
        }).then(res => {
          if (res.success) {
            that.$Message.success("订阅成功");
            that.largeFlag = false;
          } else {
            that.$Message.warning(res.message);
            that.largeFlag = false;
          }
        });
      },
      subscribe(type) {
        var groupId = this.groupList[this.groupFlag].id;
        var total = this.realToal;
        var that = this;
        that.bindNum = type;

        enable({
          type,
          groupId,
          total,
          update: false
        }).then(res => {
          if (!res.success) {
            if (res.code == "201") {
              // 未绑定
              that.bindFlag = true;
            } else if (res.code == "202") {
              // 已订阅
              that.$Message.warning(res.message);
            }
          } else {
            var num = parseInt(res.message);

            if (num > 200) {
              this.largeFlag = true;
            } else {
              // 成功再update
              enable({
                type,
                groupId,
                total,
                update: true
              }).then(res2 => {
                that.$Message.success("订阅成功");
              });
            }
          }
        });
      },
      areaFuc() {},
      selectTest(num) {
        // return
        // var str = arr2[arr1[0]]
        return this.areaList[this.searchData.area[0] - 1] + "+" + num;
        // console.log(arr2[arr1[0]-1]);
      },
      getSet(item, index) {
        this.groupFlag = index;
        this.searchData.area = item.area;
        this.searchData.category = item.category;
        this.searchData.range = item.range;
        this.searchData.page = 1;
        this.currentPage = 1;
        if (this.searchData.range == 5) {
          this.searchData.startTime = this.formatDate(new Date(item.startTime));
          this.searchData.endTime = this.formatDate(new Date(item.endTime));
          this.dateArr = [item.startTime, item.endTime];
        }
        this.searchData.keyword = [];
        item.keyword.forEach(c => {
          this.searchData.keyword.push(c);
        });
        this.searchData.searchRange = item.searchRange;
        this.searchData.table = item.table;
        this.search();
      },
      fugai() {
        this.groupList.forEach((item, i) => {
          if (item.name == this.newGroup) {
            removeGroup(item.id, {}).then(res => {
              if (res.success) {
                this.groupList.splice(i, 1);
                this.addGroup();
              }
            });
          }
        });
      },
      quxiao() {},
      pickDate(a) {
        // console.log(this.formatDate(new Date("2020-02-02")));
        // console.log(this.dateArr,a);
        // console.log(new Date("2020/1/2"));

        this.searchData.startTime = this.formatDate(new Date(a[0]));
        this.searchData.endTime = this.formatDate(new Date(a[1]));
      },
      changeRange() {
        if (!this.searchData.range == "5") {
          delete this.searchData.startTime;
          delete this.searchData.endTime;
        }
      },
      handleTabRemove(index) {
        this.count.splice(index, 1);
      },
      changeTab(checked, name) {
        console.log(checked, name);
      },
      search(flag) {
        if (
          this.searchData.range == 5 &&
          !this.searchData.startTime &&
          !this.searchData.endTime
        ) {
          this.$Message.warning("请选择时间范围");
        } else if (this.searchData.keyword.some(item => item == "")) {
          this.$Message.warning("关键词不能为空");
        } else {
          // test
          if (flag == "a") {
            this.currentPage = 1;
            console.log(this.currentPage, "aaaaa");
          }

          if (!this.resFlag) {
            this.resFlag = true;
          }
          if (this.searchData.range != 5) {
            delete this.searchData.startTime;
            delete this.searchData.endTime;
          }
          var that = this;
          that.tags = that.searchData.keyword;
          var keywordList = [];
          that.searchData.keyword.forEach(item => {
            item.split(/[ ]+/).forEach(key => {
              keywordList.push(key);
            });
          });

          //搜索
          ztbSearch(this.searchData).then(res => {
            if (res.status == "OK") {
              this.data1 = [];
              console.log(res);
              that.realToal = res.result.total;
              res.result.items.forEach(item => {
              item.realTitle = item.title;
                var type;
                if (
                  item.table_name == "ZBXX" &&
                  item.table_name2 == "ZBGG" &&
                  item.classb_id.indexOf("001") > -1
                ) {
                  type = "工程招标";
                } else if (
                  item.table_name == "ZBXX" &&
                  item.table_name2 == "ZBGG" &&
                  item.classb_id.indexOf("002") > -1
                ) {
                  type = "货物招标";
                } else if (
                  item.table_name == "ZBXX" &&
                  item.table_name2 == "ZBGG" &&
                  item.classb_id.indexOf("003") > -1
                ) {
                  type = "服务招标";
                } else if (
                  item.table_name == "ZBXX" &&
                  item.table_name2 == "ZBGS"
                ) {
                  type = "中标公示";
                } else if (
                  item.table_name == "ZBXX" &&
                  item.table_name2 == "ZBYG"
                ) {
                  type = "招标预告";
                } else if (
                  item.table_name == "CGXX" &&
                  item.table_name2 == "ZFCG"
                ) {
                  type = "政府采购";
                } else if (
                  item.table_name == "CGXX" &&
                  item.table_name2 == "QYCG"
                ) {
                  type = "企业采购";
                } else if (item.table_name == "XMXX") {
                  type = "项目信息";
                } else {
                  type = "工程招标";
                }

                //
                //

                  
                keywordList.forEach(a => {
                  if (item.title.indexOf(a) > -1) {
                    item.title = item.title.replace(
                      a,
                      `<span style="color:red;">` + a + `</span>`
                    );
                  }
                });
                if (item.title.indexOf(`color:red`) == -1) {
                  var str = that.searchData.keyword.join(",");
                  item.title =
                    item.title +
                    `(<span style="color:red;">` +
                    str +
                    `</span>在正文中)`;
                }
                this.data1.push({
                  type: type,
                  area: item.area_id == 36 ?
                    that.areaList[34] :
                    that.areaList[item.area_id - 1],
                  title: item.title,
                  realTitle:item.realTitle,
                  date: that.formatDate(new Date(parseInt(item.publish_date))),
                  is_collected: item.is_collected ? item.is_collected : 0,
                  id: item.id,
                  url:item.url
                });
              });
              console.log(res);
              if (res.result.total > 3000) {
                that.total = 3000;
              } else {
                that.total = res.result.total;
              }
            }
          });
        }
      },
      saveSet() {
        this.newGroup = "分组" + (this.groupList.length + 1);
        //保存搜索设置
        if (this.groupList.length > 9) {
          this.$Message.warning("最多只能添加10个分组");
        } else if (this.searchData.keyword.some(item => item == "")) {
          this.$Message.warning("关键词不能为空");
        } else if (
          this.searchData.range == 5 &&
          !this.searchData.startTime &&
          !this.searchData.endTime
        ) {
          this.$Message.warning("请选择时间范围");
        } else {
          this.addFlag = true;
        }
      },
      addGroup() {
        var that = this;
        if (that.newGroup.length > 30) {
          this.$Message.warning("最多输入30个汉字");
        } else if (that.newGroup == "") {
          // this.addFlag = true;
          this.$Message.warning("组名不能为空");
        } else if (this.groupList.some(item => item.name == that.newGroup)) {
          //重复组名
          this.repeatFlag = true;
        } else {
          this.search();
          var saveData = {};
          saveData.name = this.newGroup;
          saveData.area = this.searchData.area.join(",");
          saveData.infoType = this.searchData.table.join(",");
          saveData.category = this.searchData.category.join(",");
          saveData.dateRange = this.searchData.range;
          saveData.total = this.realToal;
          if (saveData.dateRange == 5) {
            saveData.startTime = this.searchData.startTime;
            saveData.endTime = this.searchData.endTime;
          }
          saveData.searchRange = this.searchData.searchRange;
          for (let i = 0; i < 5; i++) {
            if (i < this.searchData.keyword.length) {
              saveData["keyword" + (i + 1)] = this.searchData.keyword[i];
            } else {
              saveData["keyword" + (i + 1)] = "";
            }
          }
          saveSearch(saveData).then(res => {
            this.addFlag = false;
            this.getGroup();
          });
        }
      },
      removeGroup(index, id) {
        removeGroup(id, {}).then(res => {
          if (res.success) {
            this.groupList.splice(index, 1);
            this.newGroup = "分组" + (this.groupList.length + 1);
          }
        });
      },
      cancel() {
        this.addFlag = false;
      },
      addKeyword() {
        //增加关键词
        if (this.searchData.keyword.length < 5) {
          this.searchData.keyword.push("");
        } else {
          this.$Message.warning("最多只能添加5条关键词组");
        }
      },
      removeKeyword(index) {
        this.searchData.keyword.splice(index, 1);
      },
      reset() {
        this.searchData = {
          keyword: [""],
          table: [],
          area: [],
          category: [],
          startTime: "",
          endTime: "",
          page: 1,
          rows: 30,
          searchRange: 0,
          range: 0
        };
        this.term = "4";
      },
      formatDate(date) {
        return (
          date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
        );
      },
      changePage(i) {
        this.searchData.page = i;
        this.search();
      },
      activate() {},
      getGroup() {
        var that = this;
        that.getTime++;
        getAllGroup({}).then(res => {
          if (res.success) {
            console.log(res);

            that.groupList = [];
            res.result.forEach(a => {
              var item = {};
              item.area = a.area.split(",");
              item.category = a.category.split(",");
              item.range = a.dateRange;
              item.keyword = [a.keyword1];
              for (let i = 1; i < 5; i++) {
                if (a["keyword" + (i + 1)]) {
                  item.keyword.push(a["keyword" + (i + 1)]);
                }
              }
              item.searchRange = a.searchRange ? a.searchRange : 0;
              item.table = a.infoType.split(",");
              item.name = a.name;
              item.startTime = a.startTime ? a.startTime : "";
              item.endTime = a.endTime ? a.endTime : "";
              item.id = a.id;
              that.groupList.push(item);
            });

            that.newGroup = "分组" + (this.groupList.length + 1);
            // && that.getTime == 1
            if (that.groupList.length > 0) {
              that.getSet(that.groupList[0]);
              // 新增分组变色
              that.groupFlag = 0;
              console.log(that.groupFlag, "success");
            }
          }
        });
      },
      getByArea(area) {
        this.areaList.forEach((item, i) => {
          if (item == area) {
            this.searchData.area = [];
            this.searchData.area.push(i + 1 + "");
            this.search();
            console.log(this.searchData);
          }
        });
        this.search();
      }
    },
    activated() {
      this.getGroup();
    },
    mounted() {}
  };
</script>

<style lang="less">
  @import "../../styles/tree&table-common.less";

  #info {
    .groupName {
      text-overflow: ellipsis;
      width: 100%;
    }

    .groupTip {
      width: 100%;
    }

    .center {
      position: relative;
      margin: 10px auto;
      // width: 1100px;
      background-color: #fff;
      border-radius: 5px;

      .ivu-select-dropdown {
        // position: relative!important;
        top: 34px !important;
      }

      div {
        box-sizing: border-box;
      }

      .search_group,
      .search_main {
        // border: 1px solid #888;
        border-radius: 5px;
        background-color: #fff;
        padding: 10px;
        // height: 500px;
      }

      .search_group {
        // margin: 20px 0 0;
        height: 100%;

        // border: 1px solid #eee;
        .search_item {
          margin-bottom: 10px;
        }
      }

      .search_main {
        .term {
          display: flex;
          justify-content: space-between;
          font-size: 12px;

          span {
            font-size: 12px;
          }

          label {
            margin-right: 2px;
          }
        }

        .keyWordsItem {
          .subtitile {
            white-space: nowrap;
          }
        }
      }

      .group_item {
        // height: 20px;
        // font-size: 10px;
        text-align: center;

        span {
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }

        margin-bottom: 7px;

        .group_btn {
          padding: 0;
          width: 100%;
        }
      }

      .search_btn {
        margin-bottom: -10px;
      }
    }

    .result {
      border-radius: 5px;
      // width: 1050px;
      margin: 0 auto;
      background-color: #fff;
      padding: 10px;

      .content {
        width: 100%;
        // padding: 20px;
        margin: 0;

        .tabs {
          width: 100%;
          margin-bottom: 10px;
          // .my_tag {
          //   width: 100px;
          //   white-space: nowrap;
          //   overflow: hidden;
          //   text-overflow: ellipsis;
          //   text-align: left;
          // }
        }

        .subscribe {
          button {
            margin-right: 5px;
            margin-bottom: 15px;
          }
        }
      }

      .infoTitle {
        display: block;
        // height: 100px;
        width: 100%;
        text-align: left;
      }
    }

    .actionBtn {
      cursor: pointer;
    }

    // .area {
    //   cursor: pointer;
    //   &:hover {
    //     color: red;
    //   }
    // }
    .expand {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      .icon {
        cursor: pointer;
        transform: translateY(200px);
      }

      :hover {
        color: #1890ff !important;
      }
    }
  }
</style>