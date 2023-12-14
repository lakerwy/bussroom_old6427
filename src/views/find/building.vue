<template>
  <div id="building">
    <BindWechatModal v-if="wechatFlag" @closeWechat="closeWechat"></BindWechatModal>

    <Modal v-model="codeFlag" title="微信扫一扫分享">
      <!-- <img :src="codeSrc" /> -->
      <img src="@/assets/info.png" style="display: block; margin: 0 auto" />
    </Modal>
    <Modal v-model="shareFlag" title="企业分享">
      <h4 style="height: 80px" v-text="shareData.title"></h4>
      <p>留言:</p>
      <Input
        v-model="content.message"
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
        <Button type="primary" @click="goShare">提交</Button>
      </div>
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

    <Modal v-model="largeFlag" title="请注意：">
      <p>
        您当前的搜索条件可搜索到
        <span style="color: #ed4014">{{ realToal }}</span>
        条信息，平均每天超200条，建议重新订阅，或联系客服帮您优化设置。
      </p>
      <div slot="footer">
        <Button type="text" @click="continueSub">继续订阅</Button>
        <Button type="primary" @click="largeFlag = false">重新设置</Button>
      </div>
    </Modal>
    <!-- 地区选择框 -->
    <Modal
      v-model="areaFlag"
      title="请选择地区"
      @on-ok="selectArea"
      @on-cancel="areaFlag = false"
    >
      <Tree
        class="areaSelect"
        :data="data2"
        show-checkbox
        check-directly
      ></Tree>
    </Modal>
    <Card class="content">
      <Row :gutter="5">
        <Col span="6">
          <div class="group_bar">
            <h3>
              我的订阅
              <a
                @click="editGroup(groupFlag)"
                class="set_icon"
                v-show="!editFlag"
                >编辑</a
              >
              <Icon
                type="ios-create-outline"
                color="#2d8cf0"
                size="20"
                @click="editGroup(groupFlag)"
                class="set_icon"
                v-show="!editFlag"
                title="修改订阅"
              />
            </h3>
            <div v-show="!editFlag">
              <Row
                class="group_item"
                v-for="(item, index) in groupList"
                :key="item"
              >
                <Col span="19">
                  <Tooltip
                    class="groupTip"
                    transfer
                    placement="left-end"
                    max-width="200"
                    :disabled="item.name.length <= 15"
                    :content="item.name"
                  >
                    <Button
                      long
                      @click="getSet(item, index)"
                      :type="groupFlag == item.id ? 'primary' : ''"
                      class="groupName"
                      >{{ item.name }}</Button
                    >
                  </Tooltip>
                </Col>
                <Col span="4" push="1">
                  <Button
                    type="primary"
                    :loading="item.id === removeFlag"
                    @click="removeGroup(index, item)"
                    class="group_btn"
                    >—</Button
                  >
                </Col>
              </Row>
              <Row class="bottom">
                <Page
                  :total="groupTotal"
                  :current.sync="groupData.pageNumber"
                  size="small"
                  simple
                  :page-size="5"
                />
              </Row>
            </div>

            <div v-show="editFlag" class="editGroup">
              <Button
                type="primary"
                long
                style="margin: 20px 0"
                @click="saveEdit"
                >修改并保存</Button
              >
              <Button type="default" long @click="cancelEdit">取消</Button>
            </div>
          </div>
        </Col>
        <Col span="18">
          <div class="search_bar">
            <Form :model="searchData" :rules="ruleValidate" ref="building">
              <h3 style="padding-bottom: 10px; margin-top: -10px">
                前期拟在建
              </h3>
              <Row>
                <Col span="24">
                  <Row type="flex" justify="space-between">
                    <Col span="2.5">
                      <Poptip
                        width="300"
                        trigger="hover"
                        word-wrap
                        placement="top"
                        transfer
                        style="width: 100%"
                        :content="tableTip"
                      >
                        <Select
                          max-tag-count="0"
                          multiple
                          v-model="searchData.table"
                          placeholder="全部栏目"
                          label-in-value
                          @on-change="changeTable"
                          transfer
                        >
                          <!-- <Option value="-1">全部栏目</Option> -->
                          <Option value="3030">VIP项目</Option>
                          <Option value="3020">项目核准批复</Option>
                          <Option value="3110">项目公示</Option>
                          <Option value="3120">项目预告</Option>
                          <Option value="3050">项目动态</Option>
<!--                          <Option value="3070">项目跟踪</Option>-->
                          <!-- <Option value="3080">重点招商项目</Option>
                      <Option value="3090">国外商机</Option> -->
                        </Select>
                      </Poptip>
                    </Col>
                    <Col span="2">
                      <Select
                        transfer
                        v-model="searchData.type"
                        placeholder="内容"
                      >
                        <!-- <Option v-for="(item,index) in optionList.type" :value="index" :key="item">{{ item }}</Option> -->
                        <Option :value="0">内容</Option>
                        <Option :value="1">标题</Option>
                        <!-- <Option :value="3">招标编号</Option> -->
                      </Select>
                    </Col>
                    <Col span="2.5">
                      <div @click.capture.stop="showAreaModal">
                        <Poptip
                          width="300"
                          trigger="hover"
                          word-wrap
                          placement="top"
                          transfer
                          style="width: 100%"
                          :content="areaTip"
                        >
                          <Select
                            transfer
                            max-tag-count="0"
                            v-model="searchData.area"
                            placeholder="全部地区"
                            multiple
                            label-in-value
                            @on-change="changeArea"
                          >
                            <Option
                              v-for="(item, i) in optionList.newArea"
                              :value="item.value"
                              :key="i"
                              >{{ item.title }}</Option
                            >
                          </Select>
                        </Poptip>
                      </div>
                    </Col>
                    <Col span="2">
                      <Select
                        transfer
                        v-model="searchData.stage[0]"
                        max-tag-count="0"
                        placeholder="请选择项目进展阶段"
                      >
                        <Option value="0">全部阶段</Option>
                        <Option value="2">项目建议书阶段</Option>
                        <Option value="3">可行性研究报告阶段</Option>
                        <Option value="4">项目审批核查</Option>
                        <Option value="6">工程设计</Option>
                        <Option value="10">施工准备</Option>
                        <Option value="11">在建阶段</Option>
                      </Select>
                    </Col>
                    <Col span="3">
                      <Select
                        v-model="searchData.category1[0]"
                        placeholder="一级行业"
                        @on-change="changeCate"
                        transfer
                      >
                        <Option value="-1">全部行业</Option>
                        <Option
                          v-for="(item, i) in optionList.category1"
                          :value="item.value"
                          :key="i"
                          >{{ item.name }}</Option
                        >
                      </Select>
                    </Col>
                    <Col span="3">
                      <Select
                        transfer
                        v-model="searchData.category2[0]"
                        max-tag-count="0"
                        placeholder="二级行业"
                      >
                        <Option value="-1">全部行业</Option>
                        <Option
                          v-for="item in optionList.category2[
                            searchData.category1[0] - 1
                          ]"
                          :value="item.value"
                          :key="item"
                        >
                          {{ item.name }}</Option
                        >
                      </Select>
                    </Col>
                    <Col span="2">
                      <Select
                        transfer
                        v-model="searchData.range"
                        placeholder="选择时间"
                      >
                        <Option
                          v-for="(item, i) in optionList.time"
                          :value="i"
                          :key="item"
                          >{{ item }}</Option
                        >
                      </Select>
                    </Col>
                    <Col span="2">
                      <div>
                        <Select v-model="searchData.keywordLogic">
                          <Option :value="1">与查询</Option>
                          <Option :value="0">或查询</Option>
                        </Select>
                      </div>
                    </Col>
                    <Col span="1">
                      <Tooltip
                        content="与关系：筛选同时满足所有订阅词的信息。例如：绿植 租摆 养护，筛选结果为公告信息中同时包含绿植、租摆、养护的公告
或关系：筛选只要满足其中一个订阅词的信息。例如：消防 机场  认证，筛选结果为公告信息中包含消防或机场或认证，任意一个订阅词的公告"
                        max-width="200"
                        placement="top"
                        transfer="true"
                      >
                        <Icon
                          style="line-height: 33px"
                          type="ios-help-circle-outline"
                        />
                      </Tooltip>
                    </Col>
                  </Row>

                  <Row style="margin: 20px 0 0 0">
                    <FormItem>
                      <Col span="12">
                        <Input
                          search
                          enter-button="搜索"
                          @on-search="search(1, 'a')"
                          v-model="searchData.keyword"
                          placeholder="请输入产品词，多个产品词可用空格隔开。"
                          type="text"
                        />
                      </Col>
                      <Col span="3" push="1">
                        <Button @click="reset" :loading="resetFlag"
                          >重置</Button
                        >
                      </Col>

                      <Col span="6" push="1">
                        <Button
                          @click="saveSet"
                          type="success"
                          :loading="addFlag"
                          :disabled="editFlag"
                          style="margin-right: 10px"
                          >添加我的订阅</Button
                        >
                      </Col>
                      <Row v-show="tipappeal">
                        <p
                          style="
                            color: red;
                            margin-left: 40px;
                            font-size: 12px;
                            position: absolute;
                            top: 28px;
                            left: -36px;
                          "
                        >
                          您搜索的关键词包含“数字、字母或字符”，搜索结果可能有偏差！如果信息没有搜索到，请换成“文字”关键词再次搜索。
                        </p>
                      </Row>
                    </FormItem>
                  </Row>
                  <Row class="keywords">
                    <div class="hotwords">
                      <div class="title">搜索指数：</div>
                      <p class="zb_tj_n zb_rszs">
                        <span
                          v-for="item in hotwords"
                          @click="getCateInfo(item)"
                          :key="item"
                          >{{ item }}</span
                        >
                      </p>
                    </div>
                  </Row>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </Card>
    <Card class="result" v-show="resFlag">
      <h2>搜索结果</h2>
      <div class="result_content">
        <p v-show="subFlag" style="color: #ed4014; margin-bottom: 10px">
          请先保存当前搜索条件，才能完成订阅。
        </p>
        <div class="subscribe" style="overflow: hidden">
          <Button
            type="primary"
            :disabled="subFlag || editFlag"
            @click="subscribe(0)"
            size="small"
            icon="ios-mail"
            >添加邮件订阅</Button
          >
          <Button
            type="primary"
            :disabled="subFlag || editFlag"
            @click="subscribe(1)"
            size="small"
            icon="ios-chatbubbles"
            >添加微信订阅</Button
          >
          <Button
            type="primary"
            :disabled="subFlag || editFlag"
            @click="subscribe(2)"
            size="small"
            icon="ios-send"
            >添加短信订阅</Button
          >
          <Button
            type="primary"
            :disabled="subFlag || editFlag"
            @click="subscribe(3)"
            size="small"
            icon="ios-appstore"
            >添加App订阅</Button
          >
          <Button
            type="primary"
            :disabled="subFlag || editFlag"
            icon="ios-share-outline"
            size="small"
            style="float: right"
            @click="share(0)"
            >搜索/订阅方案分享</Button
          >
        </div>
        <p style="margin: 0 0 20px">搜索结果：{{ total }}条</p>
        <div class="infoList">
          <Row>
            <Table
              :columns="columns1"
              :data="data1"
              class="table"
              :loading="loadingFlag"
            >
              <template slot-scope="{ row }" slot="index">
                <strong>{{ row.index }}</strong>
              </template>
              <template slot-scope="{ row }" slot="action">
                <infoButtons :row="row" :isIcon="true" />
              </template>
              <template slot-scope="{ row }" slot="area">
                <a class="areaItem" @click="getByArea(row.area)">{{
                  row.area
                }}</a>
              </template>
              <template slot-scope="{ row }" slot="title">
                <a target="_blank" :href="row.url" class="infoTitle" style="width: calc(100% - 40px)">
                  <span style="position: relative; display: inline-block">
                    {{row.title.indexOf("【甄选】") !== -1 ? row.title.replace('【甄选】', '') : row.title }}
                    <div v-if="row.title.indexOf('【甄选】') !== -1" style="font-size: 12px; position: absolute;top: 1px;right: -41px;width: 40px; padding-left:10px; height: 16px;background: url(img/search_zx.png);line-height: 16px; color: #fff;">
                      甄选
                    </div>
                  </span>
                </a>
              </template>
              <template slot-scope="{ row }" slot="category">
                <span href="#">{{ row.category }}</span>
              </template>
              <template slot-scope="{ row }" slot="stage">
                <span href="#">{{ row.stage }}</span>
              </template>
              <template slot-scope="{ row }" slot="date">
                <span href="#">{{ row.date }}</span>
              </template>
            </Table>
          </Row>

          <p style="text-align: center; margin: 20px 0">
            <Page
              style="display: inline-block"
              :total="total"
              :page-size="30"
              :current.sync="currentPage"
              @on-change="changePage"
              show-elevator
            />
          </p>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import {
  nzjSearch,
  saveSearch,
  getGroupByCondition,
  removeGroup,
  enable,
  disable,
  userInfo,
  getAllRoleList,
  getAllUserData,
  addMessage,
  shareWechat,
  findAllUserData,
  getAllGroup,
  putGroup,
} from "@/api/index";

import infoButtons from "@/views/my-components/xboot/info-buttons";
import { validateSpecial } from "@/libs/validate";
import BindWechatModal from "@/views/my-components/xboot/bindWechatModal.vue";

export default {
  components: {
    infoButtons,
    BindWechatModal
  },
  name: "building",
  data() {
    return {
      wechatFlag: false,
      tipappeal: false,
      ruleValidate: {
        keyword: [
          { required: true, message: "关键字不能为空！", trigger: "blur" },
          { validator: validateSpecial, trigger: "change" },
          { validator: validateSpecial, trigger: "blur" },
          {
            max: 100,
            message: "输入关键词（包含空格）超过100个字符，请酌情删减",
            trigger: "change",
          },
          {
            max: 100,
            message: "输入关键词（包含空格）超过100个字符，请酌情删减",
            trigger: "blur",
          },
        ],
      },
      areaFlag: false,
      resetFlag: false,
      groupFlag: -1,
      addFlag: false,
      editFlag: false,
      editId: "",
      observerFlag: true,
      allGroupList: [],
      loadingFlag: false,
      currentPage: 1,
      optionList: {
        tableList: [
          {
            value: "-1",
            name: "全部栏目",
          },
          {
            value: "3030",
            name: "VIP项目",
          },
          {
            value: "3020",
            name: "项目核准批复",
          },
          {
            value: "3110",
            name: "项目公示",
          },
          {
            value: "3120",
            name: "项目预告",
          },
          {
            value: "3050",
            name: "项目动态",
          },
          // {
          //   value: "3070",
          //   name: "项目跟踪",
          // },
          // {
          //   value: "3080",
          //   name: "重点招商项目",
          // },
          // {
          //   value: "3090",
          //   name: "国外商机",
          // },
        ],
        table: [
          "VIP项目",
          "项目核准批复",
          "项目公示",
          "项目预告",
          "项目动态"
          // "项目跟踪",
          // "重点招商项目",
          // "国外商机",
        ],
        type: [
          {
            value: 0,
            name: "内容",
          },
          {
            value: 1,
            name: "标题",
          },
          {
            value: 3,
            name: "招标编号",
          },
        ],
        newArea: [
          // {
          //   title: "全部地区",
          //   value: -1,
          // },
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
        keywordLogic: [
          {
            value: 1,
            name: "与查询",
          },
          {
            value: 0,
            name: "或查询",
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
            name: "全部阶段",
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
      columns1: [
        {
          title: "序号",
          slot: "index",
          align: "center",
          minWidth: 50,
        },
        {
          title: "标题",
          slot: "title",
          align: "center",
          minWidth: 320,
        },
        {
          title: "所属行业",
          slot: "category",
          align: "center",
          minWidth: 140,
        },
        {
          title: "进展阶段",
          slot: "stage",
          align: "center",
          minWidth: 90,
        },
        {
          title: "地区",
          slot: "area",
          align: "center",
          minWidth: 90,
        },
        {
          title: "操作",
          slot: "action",
          align: "center",
          minWidth: 130,
        },
        {
          title: "发布时间",
          key: "date",
          minWidth: 90,
        },
      ],
      data1: [],
      searchData: {
        keyword: "",
        table: [""],
        area: [""],
        category1: ["-1"],
        category2: ["-1"],
        stage: ["0"],
        page: 1,
        rows: 30,
        type: 0,
        range: 4,
        keywordLogic: 1,
      },
      time: 1,
      total: 0,
      hotwords: [
        "火电",
        "风电",
        "电网建设",
        "太阳能",
        "水电",
        "天然气",
        "石油",
        "高速公路",
        "机场",
        "铁路",
        "垃圾",
        "脱硫脱硝",
        "选煤厂",
        "水处理",
        "钢结构",
        "供水",
      ],
      classFlag: 9,
      resFlag: false,
      removeFlag: false,
      areaTip: "全部地区",
      groupData: {
        pageSize: 5,
        sort: "createTime",
        order: "desc",
        pageNumber: 1,
        type: 0,
        userId: "",
      },
      userInfo: {},
      realToal: 0,
      largeFlag: false,
      bindArr: ["邮件", "微信", "手机", "app"],
      bindFlag: false,
      bindNum: 0,
      content: {
        message: "",
        searchData: {},
        type: 1,
      },
      codeSrc: "",
      codeFlag: false,
      shareData: {
        title: "",
        content: "",
        type: "",
        range: 1,
        userIds: [],
        createSend: false,
      },
      treeData: [
        {
          title: "全选",
          expand: true,
          checked: false,
          children: [],
        },
      ],
      initTree: [
        {
          title: "全选",
          expand: true,
          checked: false,
          children: [],
        },
      ],
      shareFlag: false,
      tableTip: "全部类型",
      data2: [
        {
          title: "全选",
          expand: true,
          children: [
            {
              title: "华北",
              expand: true,
              children: [
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
              ],
            },
            {
              title: "华东",
              expand: true,
              children: [
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
              ],
            },
            {
              title: "华中",
              expand: true,
              children: [
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
              ],
            },
            {
              title: "华南",
              expand: true,
              children: [
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
              ],
            },
            {
              title: "东北",
              expand: true,
              children: [
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
              ],
            },
            {
              title: "西北",
              expand: true,
              children: [
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
              ],
            },
            {
              title: "西南",
              expand: true,
              children: [
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
              ],
            },
            {
              title: "其他",
              expand: true,
              children: [
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
            },
          ],
        },
      ],
    };
  },
  methods: {
    changeArea(a) {
      var str = "";
      a.forEach((item, i) => {
        if (i == 0) {
          str = str + item.label;
        } else {
          str = str + "," + item.label;
        }
      });
      if (str == "") {
        str = "全部地区";
      }
      this.areaTip = str;
    },
    selectArea() {
      // 选择地区
      let a = [];
      this.data2[0].children.forEach((item) => {
        item.children.forEach((child) => {
          if (child.checked) {
            a.push(child.value);
          }
        });
      });
      this.searchData.area = a;
    },
    // 地区modal显示
    showAreaModal() {
      // delete this.data2[0].checked
      // delete this.data2[0].indeterminate
      this.data2[0].children.forEach((a) => {
        a.children.forEach((b, i) => {
          delete a.checked;
          delete a.indeterminate;
          if (this.searchData.area.indexOf(b.value) > -1) {
            a.children.splice(i, 1, {
              ...b,
              checked: true,
            });
          } else {
            a.children.splice(i, 1, {
              ...b,
              checked: false,
            });
          }
        });
      });
      this.areaFlag = true;
    },
    reset() {
      this.resetFlag = true;
      this.$Modal.confirm({
        title: "请注意：",
        content: "确认重置所有搜索条件？",
        onOk: () => {
          this.resetFlag = false;
          this.searchData = {
            keyword: "",
            table: [],
            area: [],
            category1: ["-1"],
            category2: ["-1"],
            stage: ["0"],
            page: 1,
            rows: 30,
            type: 0,
            range: 4,
            keywordLogic: 1,
          };
        },
        onCancel: () => {
          this.resetFlag = false;
        },
      });
    },
    getByArea(area) {
      this.searchData.page = 1;
      this.currentPage = 1;
      this.optionList.newArea.forEach((item, i) => {
        if (item.title == area) {
          this.searchData.area = [item.value];
        }
      });
      this.search(0);
    },
    editGroup(id) {
      if (this.subFlag) {
        this.$Message.warning("请先选中分组");
      } else {
        this.editFlag = true;
        this.editId = id;
      }
    },
    saveEdit() {
      var re = /[`!@$%^?:{}\\|;＠……＝＋｛｝｜，？：｀]+/;

      if (
        this.searchData.keyword == "" ||
        this.searchData.keyword.trim().length == 0
      ) {
        this.$Message.warning("订阅词不能为空，请您输入产品词进行订阅。");
      } else if (this.searchData.keyword.length > "100") {
        this.$Message.warning(
          "输入订阅词（包含空格）过多，导致查询结果偏差过大，请酌情删减。"
        );
      } else if (re.test(this.searchData.keyword)) {
        this.$Message.warning(
          "订阅词不能包含符号，如涉及多个词，您可通过空格隔开"
        );
      }
      // this.$refs.building.validate((valite) => {
      // console.log(valite);
      // if (!valite) {
      //   this.$Message.warning(
      //     "支持最多输入100个字（包含空格），不能包含特殊符号且不为空。"
      //   );
      // }
      else {
        var saveData = {};
        // let newArea = "全部地区";
        let areaList = [];
        this.optionList.newArea.forEach((item) => {
          // if (item.value === this.searchData.area[0]) {
          //   newArea = item.title;
          // }
          if (this.searchData.area.indexOf(item.value) > -1) {
            areaList.push(item.title);
          }
        });
        areaList = areaList.length === 0 ? "全部地区" : areaList.join("+");
        saveData.name = "";
        {
          let table,
            type = "内容",
            area,
            stage,
            category1,
            category2,
            time,
            keyword,
            keywordLogic = "与查询";
          keyword = this.searchData.keyword ? this.searchData.keyword : "【 】";
          table = this.tableTip.split(",").join(" ");
          // console.log(table, "table");
          // (table = "全部栏目"),
          //   this.optionList.tableList.forEach((item) => {
          //     if (item.value === this.searchData.table[0]) {
          //       table = item.name;
          //     }
          //   });
          //  this.optionList.type[this.searchData.type];
          this.optionList.type.forEach((item) => {
            if (item.value === this.searchData.type) {
              type = item.name;
            }
          });
          this.optionList.keywordLogic.forEach((item) => {
            if (item.value === this.searchData.keywordLogic) {
              keywordLogic = item.name;
            }
          });
          // area = "全部地区";
          // this.optionList.newArea.forEach((item) => {
          //   if (item.value == this.searchData.area[0]) {
          //     area = item.title;
          //   }
          // });
          area = this.areaTip.split(",").join(" ");
          // console.log(area, "area");
          stage = "全部阶段";
          this.optionList.stage.forEach((item) => {
            if (item.value == this.searchData.stage[0]) {
              stage = item.name;
            }
          });
          category1 = "全部一级行业";
          category2 = "全部二级行业";
          this.optionList.category1.forEach((item) => {
            if (item.value == this.searchData.category1[0]) {
              category1 = item.name;
            }
          });
          this.optionList.category2.forEach((item) => {
            item.forEach((el) => {
              if (el.value == this.searchData.category2[0]) {
                category2 = el.name;
              }
            });
          });
          time = this.optionList.time
            ? this.optionList.time[this.searchData.range]
            : "近三月";
          saveData.name =
            keyword +
            " + " +
            table +
            " + " +
            type +
            " + " +
            area +
            " + " +
            stage +
            " + " +
            category1 +
            " + " +
            category2 +
            " + " +
            keywordLogic +
            " + " +
            time;
        }
        // console.log(this.searchData.area[0], "aaaaee");
        saveData.area =
          this.searchData.area[0] === "-1"
            ? ""
            : this.searchData.area.join(",");
        saveData.infoType = this.searchData.table.join(",");
        saveData.primaryIndustry = this.searchData.category1.join(",");
        saveData.secondaryIndustry = this.searchData.category2.join(",");
        saveData.stage = this.searchData.stage.join(",");
        saveData.dateRange = this.searchData.range;
        saveData.keywordLogic = this.searchData.keywordLogic;
        saveData.keyword = this.searchData.keyword;
        saveData.searchRange = this.searchData.type;
        // 拟在建为1
        saveData.type = 1;
        saveData.id = this.editId;
        putGroup(saveData).then((res) => {
          if (res.success) {
            this.$Message.success("修改成功");
            this.editFlag = false;
            this.getGroup(3);
            this.search(0);
          }
        });
      }
      // });
    },
    cancelEdit() {
      this.editFlag = false;
      this.groupFlag = -1;
    },
    changeTable(a) {
      // console.log(a, "1111");
      var str = "";
      a.forEach((item, i) => {
        if (i == 0) {
          str = str + item.label;
        } else {
          str = str + "," + item.label;
        }
      });
      if (str == "") {
        str = "全部类型";
      }

      this.tableTip = str;
    },
    getTreeData() {
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
              this.initTree[0].children.push(obj);
            }
          });
        }
      });
    },
    goShare() {
      if (this.shareData.userIds.length == 0) {
        this.$Message.warning("请先选择分享人");
      } else {
        this.searchData.page = 1;
        this.content.searchData = this.searchData;
        // xixi
        this.shareData.content = JSON.stringify(this.content);
        addMessage(this.shareData).then((res) => {
          if (res.success) {
            this.shareFlag = false;
            this.$Message.success("分享成功");
            this.getTreeData();
          }
        });
      }
    },
    share(flag, info) {
      this.treeData = [
        {
          title: "全选",
          expand: true,
          checked: false,
          children: [],
        },
      ];
      this.getTreeData();
      this.shareData.userIds = [];
      this.content.message = "";
      if (flag == 0) {
        this.shareData.title = "搜索/订阅方案分享";
        this.shareData.type = "订阅方案";
      } else if (flag == 1) {
        this.shareData.title = "【" + info.type + "】" + info.realTitle;
        this.shareData.type = "信息分享";
      }

      this.shareFlag = true;
    },
    changeTree(a, b) {
      this.shareData.userIds = [];
      a.forEach((item) => {
        if (item.title != "全选") {
          this.shareData.userIds.push(item.id);
        }
      });
    },
    goBind() {
      this.$router.push({
        name: "ownspace_index",
      });
      this.bindFlag = false;
    },
    continueSub() {
      var groupId = this.groupFlag;
      var total = this.realToal;
      var type = this.bindNum;
      enable({
        total,
        groupId,
        type,
        update: true,
      }).then((res) => {
        if (res.success) {
          this.$Message.success("订阅成功");
          this.largeFlag = false;
        } else {
          this.$Message.warning(res.message);
          this.largeFlag = false;
        }
      });
    },
    subscribe(type) {
      var groupId = this.groupFlag;
      var total = this.realToal;
      this.bindNum = type;
      enable({
        type,
        groupId,
        total,
        update: false,
      }).then((res) => {
        if (!res.success) {
          if (res.code == "201") {
            // 未绑定
            // this.bindFlag = true;
            this.wechatFlag = true;
          } else if (res.code == "202") {
            // 已订阅
            this.$Message.warning(res.message);
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
              update: true,
            }).then((res2) => {
              this.$Message.success("订阅成功");
            });
          }
        }
      });
    },
    removeGroup(index, item) {
      this.$Modal.confirm({
        title: "提醒",
        content:
          "将删除包括该订阅条件的微信、短信、邮件订阅服务，请确认是否删除？",
        onOk: () => {
          this.removeFlag = item.id;
          removeGroup({
            ids: [item.id],
          }).then((res) => {
            if (res.success) {
              this.groupList.splice(index, 1);
              this.getGroup(3);
            }
            this.removeFlag = false;
          });
        },
        onCancel: () => {},
      });
    },
    getSet(item, index) {
      this.observerFlag = false;
      this.groupFlag = item.id;
      this.searchData.area = item.area.length ? item.area : [-1];
      this.searchData.range = item.range;
      this.searchData.keyword = item.keyword;
      // console.log(item, "iiitteemm");
      this.searchData.table =
        item.table && item.table.length > 0 && item.table[0]
          ? item.table
          : ["-1"];
      this.searchData.category1 = item.category1;
      this.searchData.category2 = item.category2;
      this.searchData.stage = item.stage;
      this.searchData.page = 1;
      this.searchData.searchRange = item.searchRange;
      this.searchData.keywordLogic = item.keywordLogic;
      this.currentPage = 1;
      this.search(0, "2");
    },
    saveSet() {
      // this.newGroup = "分组" + (this.groupList.length + 1);
      //保存搜索设置
      // var re =
      //   /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/im;
      var re = /[`!@$%^?:{}\\|;＠……＝＋｛｝｜，？：｀]+/;

      this.addFlag = true;
      if (this.groupTotal >= 5) {
        this.$Message.warning("最多只能添加5个分组");
        this.addFlag = false;
      } else if (
        this.searchData.keyword == "" ||
        this.searchData.keyword.trim().length == 0
      ) {
        this.$Message.warning("订阅词不能为空，请您输入产品词进行订阅。");
        this.addFlag = false;
      } else if (this.searchData.keyword.length > "100") {
        this.$Message.warning(
          "输入订阅词（包含空格）过多，导致查询结果偏差过大，请酌情删减。"
        );
        this.addFlag = false;
      } else if (re.test(this.searchData.keyword)) {
        this.$Message.warning(
          "订阅词不能包含符号，如涉及多个词，您可通过空格隔开。"
        );
        this.addFlag = false;
      } else {
        // this.$refs.building.validate((valite) => {
        // console.log(valite, "saveset");
        // if (valite) {
        this.addFlag = true;
        this.addGroup();
        // } else {
        //   this.addFlag = false;
        //   this.$Message.warning(
        //     "支持最多输入100个字（包含空格），不能包含特殊符号且不为空。"
        //   );
        // }
        // });
      }
    },
    addGroup() {
      var saveData = {};
      let newArea = "";
      this.optionList.newArea.forEach((item) => {
        if (item.value === this.searchData.area[0]) {
          newArea = item.title;
        }
      });
      newArea = newArea ? newArea : "全部地区";
      saveData.name = "";
      {
        let table,
          type = "内容",
          area,
          stage,
          category1,
          category2,
          time,
          keyword,
          keywordLogic = "与查询";
        keyword = this.searchData.keyword ? this.searchData.keyword : "【 】";
        table = "全部栏目";
        this.optionList.tableList.forEach((item) => {
          if (item.value === this.searchData.table[0]) {
            table = item.name;
          }
        });
        this.optionList.type.forEach((item) => {
          if (item.value === this.searchData.type) {
            type = item.name;
          }
        });
        this.optionList.keywordLogic.forEach((item) => {
          if (item.value === this.searchData.keywordLogic) {
            keywordLogic = item.name;
          }
        });
        area = "全部地区";
        this.optionList.newArea.forEach((item) => {
          if (item.value == this.searchData.area[0]) {
            area = item.title;
          }
        });
        stage = "全部阶段";
        this.optionList.stage.forEach((item) => {
          if (item.value == this.searchData.stage[0]) {
            stage = item.name;
          }
        });
        category1 = "全部一级行业";
        category2 = "全部二级行业";
        this.optionList.category1.forEach((item) => {
          if (item.value == this.searchData.category1[0]) {
            category1 = item.name;
          }
        });
        this.optionList.category2.forEach((item) => {
          item.forEach((el) => {
            if (el.value == this.searchData.category2[0]) {
              category2 = el.name;
            }
          });
        });
        time = this.optionList.time
          ? this.optionList.time[this.searchData.range]
          : "近三月";
        saveData.name =
          keyword +
          " + " +
          table +
          " + " +
          type +
          " + " +
          area +
          " + " +
          stage +
          " + " +
          category1 +
          " + " +
          category2 +
          " + " +
          keywordLogic +
          " + " +
          time;
      }
      saveData.area =
        this.searchData.area &&
        this.searchData.area.length > 0 &&
        this.searchData.area[0] !== -1
          ? this.searchData.area.join(",")
          : "";
      // console.log("before", this.searchData.table);
      saveData.infoType =
        this.searchData.table &&
        this.searchData.table.length > 0 &&
        this.searchData.table[0] !== "-1"
          ? this.searchData.table.join(",")
          : "";
      // console.log("after", this.searchData.table);
      // saveData.infoType = this.searchData.table.join(",");
      // saveData.infoType = saveData.infoType == "-1"?"":saveData.infoType;
      saveData.primaryIndustry = this.searchData.category1.join(",");
      saveData.secondaryIndustry = this.searchData.category2.join(",");
      saveData.stage = this.searchData.stage.join(",");
      saveData.dateRange = this.searchData.range;
      saveData.keywordLogic = this.searchData.keywordLogic;
      saveData.keyword = this.searchData.keyword;
      saveData.searchRange = this.searchData.type;
      saveData.total = this.realToal;
      // 拟在建为1
      saveData.type = 1;
      saveSearch(saveData).then((res) => {
        if (res.success) {
          this.search(0);
          this.getGroup();
        } else if (res.code == 502) {
          let arr = res.message.split("；");
          arr.sort((a, b) => {
            return parseInt(a[7]) - parseInt(b[7]);
          });
          this.$Message.error(arr.join("；"));
        }
        // this.addFlag = false;
      });
    },
    getGroup(flag) {
      getAllGroup(this.groupData).then((res) => {
        //fake
        if (res.success) {
          res.result = res.result.filter((item) => item.type === 1);
          this.groupTotal = res.result.length; //fake
          this.allGroupList = [];
          res.result.forEach((a) => {
            console.log(a, "aaaa");
            //fake
            var item = {};
            item.area = [];
            a.area.split(",").forEach((b) => {
              if (b) {
                item.area.push(parseInt(b));
              }
            });
            item.range = a.dateRange;
            item.keyword = a.keyword;
            if(a.searchRange == 0 ||a.searchRange ==  1 ){
              
            }else{
              a.searchRange = 0
            }
            item.searchRange = a.searchRange;
            item.name = a.name;
            item.id = a.id;
            item.table = a.infoType.split(",");
            // console.log(item.table, a.infoType, "iit");
            item.category1 = a.primaryIndustry.split(",");
            // item.keywordLogic = a.keywordLogic ? 1 : a.keywordLogic;
            if (a.keywordLogic == 0) {
              item.keywordLogic = 0;
            } else {
              item.keywordLogic = 1;
            }
            item.category2 = a.secondaryIndustry.split(",");
            item.stage = a.stage.split(",");
            // console.log(item,"item54124");
            for (let key in item) {
              item[key] = item[key] === null ? "" : item[key];
            }
            this.allGroupList.push(item);
          });
          if (
            this.$route.params.id &&
            flag === 1 &&
            this.groupList.length > 0
          ) {
            this.groupData.pageNumber = this.$route.params.pageNumber;
            this.groupList.forEach((c, j) => {
              if (this.$route.params.id == c.id) {
                this.getSet(this.groupList[j]);
                this.groupFlag = this.groupList[j].id;
              }
            });
          } else if (this.$route.params.data && flag === 1) {
            this.searchData = this.$route.params.data;
            this.search(0);
          } else if (this.groupList.length > 0 && flag !== 3) {
            // 新增分组
            this.groupData.pageNumber = 1;
            this.getSet(this.groupList[0]);
            this.groupFlag = this.groupList[0].id;
          }
        }
        this.addFlag = false;
      });
    },
    changeCate(value) {
      if (value == -1) {
        this.searchData.category2[0] = "-1";
      }
    },
    formatDate(date) {
      return (
        date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
      );
    },
    getCateInfo(item) {
      var c1, c2;
      this.optionList.category2.forEach((a, i) => {
        a.forEach((b, j) => {
          if (b.name.indexOf(item) > -1) {
            c1 = i;
            c2 = j;
          }
        });
      });
      this.searchData.category1 = [];
      this.searchData.category2 = [];
      this.searchData.category1[0] = this.optionList.category1[c1].value;
      this.searchData.category2[0] = this.optionList.category2[c1][c2].value;
      this.searchData.keyword = "";
      this.searchData.range = 4;
      this.searchData.page = 1;
      this.currentPage = 1;
      this.search(0);
    },
    getColomnInfo(i) {
      this.classFlag = i;
      if (i == 0) {
        this.searchData.table = [];
        this.searchData.table[0] = "3030";
      } else if (i == 1) {
        this.searchData.table = [];
        this.searchData.table[0] = "3020";
      } else if (i == 2) {
        this.searchData.table = [];
        this.searchData.table[0] = "3070";
      } else if (i == 3) {
        this.searchData.table = [];
        this.searchData.table[0] = "3080";
      } else if (i == 4) {
        this.searchData.table = [];
        this.searchData.table[0] = "3050";
      }
      this.search(0);
    },
    search(isMessage, flag) {
      var re = /[`A-Za-z0-9!@$%^?:{}\\|;＠……＝＋｛｝｜，？：｀]+/;

      // if (
      //   this.searchData.keyword == "" ||
      //   this.searchData.keyword.trim().length == 0
      // ) {
      //   this.$Message.warning("关键词不能为空");
      // } else if (this.searchData.keyword.length > "250") {
      //   this.$Message.warning(
      //     "输入关键词（包含空格）超过250个字符，请酌情删减"
      //   );
      // } else if (re.test(this.searchData.keyword)) {
      //   this.$Message.warning("输入关键词包含特殊符号，删除后可查询");
      // }
      // this.$refs.building.validate((valite) => {
      // if (!valite) {
      //   this.$Message.warning(
      //     "支持最多输入100个字（包含空格），不能包含特殊符号且不为空。"
      //   );
      // }
      // else {
      if (flag == "a") {
        this.currentPage = 1;
        this.searchData.page = 1;
      }
      if (!this.resFlag) {
        this.resFlag = true;
      }
      if (re.test(this.searchData.keyword) && isMessage) {
        // this.$Message.warning(
        //   "您搜索的关键词包含“数字、字母或字符”，搜索结果可能有偏差！如果信息没有搜索到，请换成“文字”关键词再次搜索。"
        // );
        this.tipappeal = true;
        let timer = null;
        clearInterval(timer);
        if (!timer) {
          timer = setTimeout(() => {
            this.tipappeal = false;
            clearInterval(timer);
          }, 5000);
        }
      }

      this.data1 = [];
      this.loadingFlag = true;
      console.log(this.searchData, "searchedd");
      nzjSearch(this.searchData).then((res) => {
        this.observerFlag = true;
        if (res.status == "OK") {
          this.realToal = res.result.total;
          var stage;
          res.result.items.forEach((item, i) => {
            this.optionList.stage.forEach((a) => {
              if (a.value == item.classb_id) {
                stage = a.name;
              }
            });
            let type;
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
            let newArea = "";
            this.optionList.newArea.forEach((el) => {
              if (el.value == item.area_id) {
                newArea = el.title;
              }
            });
            this.data1.push({
              area: item.area_id > 36 ? "其他" : newArea,
              title: item.title,
              realTitle: item.title,
              index: i + 1,
              category:
                parseInt(item.numa) < 1 || parseInt(item.numa) > 18
                  ? "未知"
                  : this.optionList.category1[parseInt(item.numa) - 1].name,
              stage: stage ? stage : "未知",
              date: this.formatDate(new Date(parseInt(item.publish_date))),
              is_collected: item.is_collected ? item.is_collected : 0,
              id: item.id,
              type,
              url: item.url,
            });
          });
          this.total = res.result.total;
        }
        this.loadingFlag = false;
      });
      // }
      // });
    },
    changePage(i) {
      this.observerFlag = false;
      this.searchData.page = i;
      this.search(0);
    },
    closeWechat(){
      // debugger
      this.wechatFlag = false;
    },
  },
  mounted() {},
  computed: {
    subFlag() {
      return !this.allGroupList.some((item) => this.groupFlag === item.id);
    },
    groupList() {
      return this.allGroupList.slice(
        (this.groupData.pageNumber - 1) * 5,
        this.groupData.pageNumber * 5
      );
    },
    groupTotal() {
      return this.allGroupList.length;
    },
  },
  activated() {
    this.getGroup(1);
  },
  watch: {
    searchData: {
      handler(n, o) {
        if (!this.editFlag && this.observerFlag) {
          this.groupFlag = -1;
        }
      },
      deep: true,
    },
  },
};
</script>

<style lang="less">
#building {
  .areaItem {
    color: #333;

    &:hover {
      color: #f00;
    }
  }

  .group_bar,
  .search_bar {
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #fff;
    padding: 25px 20px;
    height: 260px;

    & > h3 {
      padding-bottom: 10px;
      margin-top: -10px;
    }
  }

  .group_bar {
    position: relative;

    .set_icon {
      float: right;
      font-weight: normal;
      font-size: 14px;
      line-height: 24px;
    }

    .bottom {
      position: absolute;
      width: 160px;
      bottom: 10px;
      left: 50%;
      transform: translate(-50%);
    }

    .group_item {
      margin-bottom: 5px;

      button {
        height: 30px;
        font-size: 10px;
        text-align: left;
        overflow: hidden;
      }

      .groupTip {
        width: 100%;
      }

      .group_btn {
        text-align: center;
        padding: 0;
        width: 100%;
      }

      .groupName {
        text-overflow: ellipsis;
      }
    }
  }

  .ivu-table-cell {
    padding-left: 8px;
    padding-right: 8px;
  }

  .content {
    .ivu-select-dropdown {
      top: 33px !important;
    }

    background: #fff;
    padding: 0 10px;
    // width: 1050px;
    margin: 0 auto;
    position: relative;
    height: 290px;

    .condition {
      border: 1px solid #eee;
      border-radius: 5px;

      li {
        list-style: none;
        text-align: center;
        width: 100%;
        height: 50px;
        line-height: 50px;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        cursor: pointer;

        &:hover {
          background-color: #2d8cf0;
          color: #fff;
        }

        &.active {
          background-color: #2d8cf0;
          color: #fff;
        }

        &:last-child {
          border: none;
        }
      }
    }

    .keywords {
      background-color: #eee;
      padding: 15px 15px 0;
      position: absolute;
      height: 80px;
      right: 0;
      width: 100%;

      .hotwords,
      .area {
        display: flex;
        margin-bottom: 15px;

        .title {
          width: 150px;
          flex: 1;
        }

        p {
          flex: 7;

          span,
          a {
            text-align: center;
            padding: 0 10px 10px;
            display: inline-block;
            cursor: pointer;

            &:hover {
              color: #2d8cf0;
            }
          }
        }
      }
    }
  }

  .result {
    // width: 1050px;
    margin: 10px auto;
    background-color: #fff;
    padding: 5px;

    .result_content {
      padding: 20px 0;

      .tabs {
        margin-bottom: 10px;
      }

      .subscribe {
        button {
          margin-right: 5px;
          margin-bottom: 15px;
        }
      }
    }

    .infoTitle {
      width: 100%;
      text-align: left;
      display: block;

      &:visited {
        color: #800080;
      }
    }

    table {
      width: 100%;
    }
  }
  .ivu-form-item-error-tip {
    top: 30px;
  }
}
</style>