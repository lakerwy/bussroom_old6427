<template>
  <div id="tendering">
    <BindWechatModal v-if="wechatFlag" @closeWechat="closeWechat"></BindWechatModal>
    <Modal v-model="codeFlag" title="微信扫一扫分享">
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
    <Card class="center">
      <Row :gutter="5">
        <Col span="6">
          <div class="search_group">
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
                size="16"
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
          <div class="search_main">
            <Form :model="searchData" :rules="ruleValidate" ref="tending">
              <h3>招标与采购</h3>
              <FormItem>
                <Row :gutter="16">
                  <Col span="4">
                    <Button type="primary" @click="addKeyword" v-if="false"
                      >+ 添加关键词</Button
                    >
                  </Col>
                  <Col span="5">
                    <div>
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
                          placeholder="全部类型"
                          label-in-value
                          @on-change="changeTable"
                        >
                          <Option value="1">工程招标</Option>
                          <Option value="2">货物招标</Option>
                          <Option value="3">服务招标</Option>
                          <Option value="4">中标公示</Option>
                          <Option value="5">招标预告</Option>
                          <Option value="6">政府采购</Option>
                          <Option value="7">企业采购</Option>
                        </Select>
                      </Poptip>
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

                  <Col span="5">
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
                          max-tag-count="0"
                          class="areaSelect"
                          v-model="searchData.area"
                          multiple
                          placeholder="全部地区"
                          label-in-value
                          @on-change="changeArea"
                        >
                          <Option :value="1">北京</Option>
                          <Option :value="2">上海</Option>
                          <Option :value="3">天津</Option>
                          <Option :value="4">重庆</Option>
                          <Option :value="5">河北</Option>
                          <Option :value="6">山西</Option>
                          <Option :value="7">内蒙古</Option>
                          <Option :value="8">辽宁</Option>
                          <Option :value="9">吉林</Option>
                          <Option :value="10">黑龙江</Option>
                          <Option :value="11">江苏</Option>
                          <Option :value="12">浙江</Option>
                          <Option :value="13">安徽</Option>
                          <Option :value="14">福建</Option>
                          <Option :value="15">江西</Option>
                          <Option :value="16">山东</Option>
                          <Option :value="17">河南</Option>
                          <Option :value="18">湖北</Option>
                          <Option :value="19">湖南</Option>
                          <Option :value="20">广东</Option>
                          <Option :value="21">广西</Option>
                          <Option :value="22">海南</Option>
                          <Option :value="23">贵州</Option>
                          <Option :value="24">云南</Option>
                          <Option :value="25">西藏</Option>
                          <Option :value="26">陕西</Option>
                          <Option :value="27">四川</Option>
                          <Option :value="28">甘肃</Option>
                          <Option :value="29">青海</Option>
                          <Option :value="30">新疆</Option>
                          <Option :value="31">宁夏</Option>
                          <Option :value="32">香港</Option>
                          <Option :value="33">澳门</Option>
                          <Option :value="34">台湾</Option>
                          <Option :value="36">跨省</Option>
                        </Select>
                      </Poptip>
                    </div>
                  </Col>
                  <Col span="3" style="width: 120px">
                    <div>
                      <Select v-model="searchData.keywordLogic">
                        <Option :value="1">与查询</Option>
                        <Option :value="0">或查询</Option>
                      </Select>
                    </div>
                  </Col>
                  <Col span="1">
                    <Tooltip
                      max-width="200"
                      placement="top"
                      transfer="true"
                      content="与关系：筛选同时满足所有订阅词的信息。例如：绿植 租摆 养护，筛选结果为公告信息中同时包含绿植、租摆、养护的公告
或关系：筛选只要满足其中一个订阅词的信息。例如：消防 机场  认证，筛选结果为公告信息中包含消防或机场或认证，任意一个订阅词的公告"
                    >
                      <Icon
                        style="margin-left: -12px"
                        type="ios-help-circle-outline"
                      />
                    </Tooltip>
                  </Col>
                  <Col span="2">
                    <Button
                      style="margin-left: -21px"
                      :loading="resetFlag"
                      @click="reset"
                      >重置</Button
                    >
                  </Col>
                </Row>
              </FormItem>
              <FormItem>
                <Row :gutter="5">
                  <Col span="18">
                    <RadioGroup
                      size="small"
                      v-model="searchData.range"
                      @on-change="changeRange"
                      class="term"
                    >
                      <span style="white-space: nowrap">时间：</span>
                      <Radio :label="6">
                        <span>近一年</span>
                      </Radio>
                      <Radio :label="4">
                        <span>近三月</span>
                      </Radio>
                      <Radio :label="3">
                        <span>近一月</span>
                      </Radio>
                      <Radio :label="2">
                        <span>近两周</span>
                      </Radio>
                      <Radio :label="1">
                        <span>近一周</span>
                      </Radio>
                      <Radio :label="-1">
                        <span>限定时间</span>
                      </Radio>
                    </RadioGroup>
                  </Col>
                  <Col span="6">
                    <DatePicker
                      class="datePicker"
                      v-show="this.searchData.range == -1"
                      type="daterange"
                      :options="dateOption"
                      transfer
                      placement="bottom-end"
                      placeholder="选择日期"
                      @on-change="pickDate"
                      v-model="dateArr"
                    ></DatePicker>
                  </Col>
                </Row>
              </FormItem>

              <FormItem class="keyWordsItem">
                <Row>
                  <Col span="1" style="width: 40px">
                    <p class="subtitile">搜索：</p>
                  </Col>
                  <Col span="17">
                    <Input
                      type="text"
                      @input="notallow"
                      v-model="searchData.keyword"
                      placeholder="请输入产品词，多个产品词可用空格隔开。"
                      @on-keyup.enter="search('a')"
                    />
                  </Col>

                  <!-- <Col span="3"> -->
                  <!-- <Button type="primary" v-show="index !== 0" @click="removeKeyword(index)">—</Button> -->
                  <!-- </Col> -->
                </Row>
                <Row v-show="tipappeal">
                  <p
                    style="
                      color: red;
                      margin-left: 40px;
                      font-size: 12px;
                      position: absolute;
                    "
                  >
                    您搜索的关键词包含“数字、字母或字符”，搜索结果可能有偏差！如果信息没有搜索到，请换成“文字”关键词再次搜索。
                  </p>
                </Row>
              </FormItem>
              <FormItem :style="style">
                <Row>
                  <Col span="4" offset="5">
                    <Button type="primary" @click="search(1, 'a')">搜索</Button>
                  </Col>
                  <Col span="10">
                    <Button
                      @click="saveSet"
                      type="success"
                      style="margin-right: 10px"
                      :loading="addFlag"
                      :disabled="editFlag"
                      >添加我的订阅</Button
                    >
                  </Col>
                </Row>
              </FormItem>
            </Form>
          </div>
        </Col>
      </Row>
    </Card>
    <Card class="result" v-show="resFlag">
      <h2>搜索结果</h2>
      <div class="tendContent">
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
        <p style="margin: 0 0 16px">
          搜索结果：{{ total }}条
          <span style="padding-left: 30px; color: #999" v-show="total == 3000"
            >系统最大检索结果3000条，如需帮助请拨打400-006-6655热线咨询。</span
          >
        </p>
        <p></p>
        <div class="infoList">
          <Row>
            <Table :columns="columns1" :data="data1" :loading="loadingFlag">
              <template slot-scope="{ row }" slot="type">
                <strong>【{{ row.type }}】</strong>
              </template>
              <template slot="action" slot-scope="{ row }">
                <infoButtons :row="row" :isIcon="true" />
              </template>
              <template slot-scope="{ row }" slot="area">
                <strong class="area" @click="getByArea(row.area)">{{
                  row.area
                }}</strong>
              </template>
              <template slot-scope="{ row }" slot="title">
                <a
                  target="_blank"
                  :href="row.url"
                  class="infoTitle"
                  v-html="row.title"
                ></a>
              </template>
            </Table>
          </Row>
          <p style="text-align: center; margin: 20px 0">
            <Page
              style="display: inline-block"
              :total="total"
              :page-size="30"
              @on-change="changePage"
              show-elevator
              :current.sync="currentPage"
            />
          </p>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import {
  ztbSearch,
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
import Cookies from "js-cookie";
import { validateSpecial } from "@/libs/validate";
import BindWechatModal from "@/views/my-components/xboot/bindWechatModal.vue"

export default {
  components: {
    infoButtons,
    BindWechatModal
  },
  name: "tendering",
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

      optionList: {
        searchRange: [
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
        range: [
          {
            value: 6,
            name: "近一年",
          },
          {
            value: 4,
            name: "近三月",
          },
          {
            value: 3,
            name: "近一月",
          },
          {
            value: 2,
            name: "近两周",
          },
          {
            value: 1,
            name: "近一周",
          },
          {
            value: -1,
            name: "限定时间",
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
      },
      addFlag: false,
      editFlag: false,
      editId: "",
      observerFlag: true,
      allGroupList: [],
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
      areaFlag: false,
      loadingFlag: false,
      content: {
        message: "",
        searchData: {},
        type: 0,
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
      largeFlag: false,
      bindArr: ["邮件", "微信", "手机", "app"],
      bindFlag: false,
      bindNum: 0,
      realToal: 0,
      dateArr: ["", ""],
      groupFlag: -1,
      areaTip: "全部地区",
      currentPage: 1,
      resetFlag: false,
      dateOption: {
        disabledDate(date) {
          return date.valueOf() > Date.now();
        },
      },
      resFlag: false,
      tags: [],
      term: "4",
      newGroup: "",
      mode19: "",
      columns1: [
        {
          title: "类型",
          slot: "type",
          align: "center",
          minWidth: 120,
        },
        {
          title: "地区",
          slot: "area",
          align: "center",
          minWidth: 90,
        },
        {
          title: "标题",
          slot: "title",
          align: "center",
          tooltip: true,
          minWidth: 540,
        },
        {
          title: "操作",
          slot: "action",
          align: "center",
          minWidth: 120,
        },
        {
          title: "发布时间",
          key: "date",
          align: "center",
          minWidth: 90,
        },
      ],
      style: { "margin-bottom": 0 },
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
        "其它",
      ],
      searchData: {
        keyword: "",
        table: [""],
        area: [""],
        // category: [""],
        page: 1,
        rows: 30,
        searchRange: 0,
        range: 1,
        keywordLogic: 1,
      },
      total: 0,
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
      cateTip: "全部行业",
      removeFlag: false,
      groupData: {
        pageSize: 5,
        sort: "createTime",
        order: "desc",
        pageNumber: 1,
        type: 0,
        userId: "",
      },
      userInfo: {},
      rules: false,
    };
  },
  methods: {
    // 不合法关键字提示
    notallow(e) {
      var re =
        /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/im;
      // console.log(e.value);
      // this.$Message.destroy();
      // if (e.length == "0" ) {
      //   this.$Message.warning("关键词不能为空");
      // }
      // if (e.length == "250") {
      //   this.$Message.warning(
      //     "输入关键词（包含空格）超过250个字符，请酌情删减"
      //   );
      // }
      // if (re.test(e)) {
      //   this.$Message.warning("输入关键词包含特殊符号，删除后可查询");
      // }
    },
    editGroup(id) {
      if (this.subFlag) {
        this.$Message.warning("请先选中分组");
      } else {
        this.editFlag = true;
        this.editId = id;
      }
    },
    //编辑
    saveEdit() {
      var re = /[`!@$%^?:{}\\|;＠……＝＋｛｝｜，？：｀]+/;

      if (
        this.searchData.range == -1 &&
        !this.searchData.startTime &&
        !this.searchData.endTime
      ) {
        this.$Message.warning("请选择时间范围");
        return false;
      } else if (
        (this.searchData.startTime == "NaN/NaN/NaN" ||
          this.searchData.endTime == "NaN/NaN/NaN") &&
        this.searchData.range == -1
      ) {
        this.$Message.warning("请选择时间范围");
        return false;
      } else if (
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
          "订阅词不能包含符号，如涉及多个词，您可通过空格隔开。"
        );
      }
      // this.$refs.tending.validate((valite) => {
      // if (!valite) {
      //   this.$Message.warning(
      //     "支持最多输入100个字（包含空格），不能包含特殊符号且不为空。"
      //   );
      // }
      else {
        var saveData = {};
        let areaList = [];
        this.newArea.forEach((item) => {
          if (this.searchData.area.indexOf(item.value) > -1) {
            areaList.push(item.title);
          }
        });
        areaList = areaList.length === 0 ? "全部地区" : areaList.join("+");
        saveData.name = "";
        {
          let table,
            searchRange = "内容",
            area,
            range,
            keyword,
            keywordLogic = "与查询";
          keyword = this.searchData.keyword;
          table = this.tableTip.split(",").join(" ");
          // console.log(table, "table");
          this.optionList.searchRange.forEach((item) => {
            if (item.value === this.searchData.searchRange) {
              searchRange = item.name;
            }
          });
          this.optionList.keywordLogic.forEach((item) => {
            if (item.value === this.searchData.keywordLogic) {
              keywordLogic = item.name;
            }
          });
          area = this.areaTip.split(",").join(" ");
          // console.log(area,'area');
          this.optionList.range.forEach((item) => {
            if (item.value === this.searchData.range) {
              range = item.name;
            }
          });
          range = range ? range : "近一周";
          saveData.name =
            keyword +
            " + " +
            table +
            " + " +
            searchRange +
            " + " +
            keywordLogic +
            " + " +
            area +
            " + " +
            range;
        }
        saveData.area = this.searchData.area.join(",");
        saveData.infoType = this.searchData.table.join(",");
        saveData.dateRange = this.searchData.range;
        if (saveData.dateRange == -1) {
          saveData.startTime = this.searchData.startTime;
          saveData.endTime = this.searchData.endTime;
        }
        saveData.searchRange = this.searchData.searchRange;
        saveData.keywordLogic = this.searchData.keywordLogic;
        saveData.keyword = this.searchData.keyword;
        console.log(saveData, "214");
        // 采购与招标默认为零
        saveData.type = 0;
        saveData.id = this.editId;
        putGroup(saveData).then((res) => {
          if (res.success) {
            // console.log(res, "success");
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
    selectArea() {
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
    getSet(item, index) {
      console.log(item,'item');
      this.groupFlag = item.id;
      this.searchData.area = item.area;
      this.searchData.range = item.range;
      if (this.searchData.range == -1) {
        this.searchData.startTime = this.formatDate(new Date(item.startTime));
        this.searchData.endTime = this.formatDate(new Date(item.endTime));
        this.dateArr = [item.startTime, item.endTime];
      }
      this.searchData.keyword = item.keyword;
      this.searchData.table = item.table;
      this.searchData.page = 1;
      this.currentPage = 1;
      this.searchData.searchRange = item.searchRange;
      this.searchData.keywordLogic = item.keywordLogic;
      // console.log(this.searchData,"getsert");
      this.search(0, "2");
    },
    quxiao() {},
    pickDate(a) {
      this.searchData.startTime = this.formatDate(new Date(a[0]));
      this.searchData.endTime = this.formatDate(new Date(a[1]));
      this.groupFlag = -1;
    },
    changeRange() {
      delete this.searchData.startTime;
      delete this.searchData.endTime;
      this.dateArr = ["", ""];
    },
    search(isMessage, flag) {
      console.log(isMessage);
      var re = /[`A-Za-z0-9!@$%^?:{}\\|;＠……＝＋｛｝｜，？：｀]+/;
      // console.log(this.searchData.keyword.trim().length);
      this.observerFlag = false;
      if (
        this.searchData.range == -1 &&
        !this.searchData.startTime &&
        !this.searchData.endTime
      ) {
        this.$Message.warning("请选择时间范围");
      } else if (
        (this.searchData.startTime == "NaN/NaN/NaN" ||
          this.searchData.endTime == "NaN/NaN/NaN") &&
        this.searchData.range == -1
      ) {
        this.$Message.warning("请选择时间范围");
      }
      // this.$refs.tending.validate((valite) => {
      // if (!valite) {
      //   this.$Message.warning(
      //     "支持最多输入100个字（包含空格），不能包含特殊符号且不为空。"
      //   );
      // }

      //  else if (
      //   this.searchData.keyword == "" ||
      //   this.searchData.keyword.trim().length == 0
      // ) {
      //   this.$Message.warning("关键词不能为空");
      // } else if (this.searchData.keyword.length > "250") {
      //   this.$Message.warning(
      //     "输入关键词（包含空格）超过250个字符，请酌情删减"
      //   );
      // }
      else {
        if (flag == "a") {
          this.currentPage = 1;
          this.searchData.page = 1;
        }

        if (!this.resFlag) {
          this.resFlag = true;
        }
        if (re.test(this.searchData.keyword) && isMessage) {
          this.tipappeal = true;
          // this.style = { "margin-bottom": 0, "margin-top": "-27px" };
          let timer = null;
          clearInterval(timer);
          if (!timer) {
            timer = setTimeout(() => {
              this.tipappeal = false;
              clearInterval(timer);
            }, 5000);
          }



          // this.$Message.warning(
          //   "您搜索的关键词包含“数字、字母或字符”，搜索结果可能有偏差！如果信息没有搜索到，请换成“文字”关键词再次搜索。"
          // );
          // this.$Message.warning({
          //   render: (h) => {
          //     return h("span", [
          //       "您搜索的关键词包含“数字、字母或字符”，搜索结果可能有偏差！",
          //       h("br"),
          //       "如果信息没有搜索到，请换成“文字”关键词再次搜索。",
          //     ]);
          //   },
          // });
        }

        if (this.searchData.range != -1) {
          delete this.searchData.startTime;
          delete this.searchData.endTime;
        }
        this.loadingFlag = true;
        console.log(this.searchData, "searchedd");
        //搜索
        this.data1 = [];
        ztbSearch(this.searchData).then((res) => {
          this.observerFlag = true;
          if (res.code == 502) {
            if ("keyword".indexOf(res.message)) {
              this.$Message.error("关键词不能包含特殊符号");
            }
          } else if (res.status == "OK") {
            this.data1 = [];
            this.realToal = res.result.total;
            res.result.items.forEach((item) => {
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
              item.realTitle = item.title;
              if (item.title.indexOf(this.searchData.keyword) > -1) {
                item.title = item.title.replace(
                  this.searchData.keyword,
                  `<span style="color:red;">` +
                    this.searchData.keyword +
                    `</span>`
                );
              }
              if (item.title.indexOf(`color:red`) == -1) {
                var str = this.searchData.keyword;
                item.title =
                  item.title +
                  `(<span style="color:red;">` +
                  str +
                  `</span>在正文中)`;
              }
              let nowArea = "";
              this.newArea.forEach((areaItem) => {
                if (areaItem.value == item.area_id) {
                  nowArea = areaItem.title;
                }
              });
              this.data1.push({
                type: type,
                area: nowArea ? nowArea : "其他",
                title: item.title,
                date: this.formatDate(new Date(parseInt(item.publish_date))),
                realTitle: item.realTitle,
                is_collected: item.is_collected,
                id: item.id,
                url: item.url,
              });
            });

            if (res.result.total > 3000) {
              this.total = 3000;
            } else {
              this.total = res.result.total;
            }
          } else if (res.status == "FAIL") {
            this.data1 = [];
            this.total = 0;
            this.currentPage = 1;
            this.searchData.page = 1;
          }
          this.loadingFlag = false;
        });
      }
      // });
    },
    saveSet() {
      //  console.log(this.searchData.keywordLogic);
      var re = /[`!@$%^?:{}\\|;＠……＝＋｛｝｜，？：｀]+/;

      if (this.groupTotal >= 10) {
        this.$Message.warning("最多只能添加10个分组");
      } else if (
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
          "订阅词不能包含符号，如涉及多个词，您可通过空格隔开。"
        );
      } else if (
        this.searchData.range == -1 &&
        !this.searchData.startTime &&
        !this.searchData.endTime
      ) {
        this.$Message.warning("请选择时间范围");
      } else if (
        this.searchData.range == -1 &&
        (this.searchData.startTime == "NaN/NaN/NaN" ||
          this.searchData.endTime == "NaN/NaN/NaN")
      ) {
        this.$Message.warning("请选择时间范围");
      } else {
        // this.$refs.tending.validate((valite) => {
        // console.log(valite, "saveset");
        // if (valite) {
        this.addFlag = true;
        this.addGroup();
        // } else {
        //   this.$Message.warning(
        //     "支持最多输入100个字（包含空格），不能包含特殊符号且不为空。"
        //   );
        // }
        // });
      }
    },
    addGroup() {
      var saveData = {};
      let areaList = [];
      this.newArea.forEach((item) => {
        if (this.searchData.area.indexOf(item.value) > -1) {
          areaList.push(item.title);
        }
      });
      areaList = areaList.length === 0 ? "全部地区" : areaList.join("+");
      saveData.name = "";
      {
        let table,
          searchRange = "内容",
          area,
          range,
          keyword,
          keywordLogic = "与查询";
        keyword = this.searchData.keyword;
        table = this.tableTip.split(",").join(" ");
        this.optionList.searchRange.forEach((item) => {
          if (item.value === this.searchData.searchRange) {
            searchRange = item.name;
          }
        });
        this.optionList.keywordLogic.forEach((item) => {
          if (item.value === this.searchData.keywordLogic) {
            keywordLogic = item.name;
          }
        });
        // console.log( this.searchData,"edit");
        area = this.areaTip.split(",").join(" ");
       
        this.optionList.range.forEach((item) => {
          if (item.value === this.searchData.range) {
            range = item.name;
          }
        });
        range = range ? range : "近一周";
        saveData.name =
          keyword +
          " + " +
          table +
          " + " +
          keywordLogic +
          " + " +
          searchRange +
          " + " +
          area +
          " + " +
          range;
      }
      saveData.area = this.searchData.area.join(",");
      saveData.infoType = this.searchData.table.join(",");
      saveData.dateRange = this.searchData.range;
      saveData.total = this.realToal;
      if (saveData.dateRange == -1) {
        saveData.startTime = this.searchData.startTime;
        saveData.endTime = this.searchData.endTime;
      }
      saveData.keywordLogic = this.searchData.keywordLogic;
      // console.log(saveData.keywordLogic, this.searchData.keywordLogic);
      saveData.searchRange = this.searchData.searchRange;
      saveData.keyword = this.searchData.keyword;
      // 采购与招标默认为零
      saveData.type = 0;
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
              if (
                this.groupList.length === 1 &&
                this.groupData.pageNumber !== 1
              ) {
                this.groupData.pageNumber--;
              }
              this.groupList.splice(index, 1);
              this.getGroup(3);
            }
            this.removeFlag = false;
          });
        },
        onCancel: () => {},
      });
    },
    addKeyword() {
      //增加关键词
      if (this.searchData.keyword.length < 5) {
        this.searchData.keyword.push("");
      } else {
        this.$Message.warning("最多只能添加5条关键词组");
      }
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
            startTime: "",
            endTime: "",
            page: 1,
            rows: 30,
            searchRange: 0,
            range: 1,
            keywordLogic: 1,
          };
          this.dateArr = ["", ""];
          this.term = "4";
        },
        onCancel: () => {
          this.resetFlag = false;
        },
      });
    },
    formatDate(date) {
      return (
        date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
      );
    },
    changePage(i) {
      this.observerFlag = false;
      this.searchData.page = i;
      this.search(0);
    },
    getGroup(flag) {
      getAllGroup(this.groupData).then((res) => {
        //fake
        if (res.success) {
          this.allGroupList = [];
          res.result = res.result.filter((item) => item.type === 0);
          res.result.forEach((a) => {
            // console.log(a.keywordLogic, "data");
            //fake
            console.log(a,"data");
            var item = {};
            item.area = [];
            a.area.split(",").forEach((a) => {
              if (a) {
                item.area.push(parseInt(a));
              }
            });
            if(a.dateRange == 0) a.dateRange = 1;
            item.range = a.dateRange;
            
            item.keyword = a.keyword;
            if(a.searchRange == 0 ||a.searchRange ==  1 || a.searchRange == 3){
              
            }else{
              a.searchRange = 0
            }
            item.searchRange = a.searchRange ? a.searchRange : 0;
            // console.log(a.searchRange ? a.searchRange : 0);
            // item.keywordLogic = a.keywordLogic ? a.keywordLogic : 1;
            if (a.keywordLogic == 0) {
              item.keywordLogic = 0;
            } else {
              item.keywordLogic = 1;
            }
            // console.log(a.keywordLogic);
            item.table = a.infoType.split(",");
            item.name = a.name;
            item.startTime = a.startTime ? a.startTime : "";
            item.endTime = a.endTime ? a.endTime : "";
            item.id = a.id;
            for (let key in item) {
              item[key] = item[key] === null ? "" : item[key];
            }
            this.allGroupList.push(item);
          });
          this.addFlag = false;
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
            if (this.searchData.range == -1) {
              this.dateArr = [
                new Date(this.searchData.startTime),
                new Date(this.searchData.endTime),
              ];
            }
            this.search(0);
          } else if (this.groupList.length > 0 && flag !== 3) {
            // 新增分组
            this.groupData.pageNumber = 1;
            this.getSet(this.groupList[0]);
            this.groupFlag = this.groupList[0].id;
          }
        }
      });
    },
    getByArea(area) {
      this.searchData.page = 1;
      this.currentPage = 1;
      this.groupFlag = -1;
      this.newArea.forEach((item, i) => {
        if (item.title == area) {
          this.searchData.area = [item.value];
        }
      });

      this.search(0);
    },
    init() {
      let v = JSON.parse(window.localStorage.getItem('userInfo'));
      // 转换null为""
      for (let attr in v) {
        if (v[attr] == null) {
          v[attr] = "";
        }
      }
      let str = JSON.stringify(v);
      this.userInfo = JSON.parse(str);
      this.groupData.userId = this.userInfo.id;
    },
    hoverTip() {
      // console.log(123);
    },
    closeWechat(){
      this.wechatFlag = false;
    },
  },
  watch: {
    searchData: {
      handler(n, o) {
        if (this.observerFlag && !this.editFlag) {
          this.groupFlag = -1;
        }
      },
      deep: true,
    },
  },
  activated() {
    this.init();
    this.getGroup(1);
    this.getTreeData();
  },
  mounted() {
    this.$Message.destroy();
  },
  computed: {
    subFlag() {
      return !this.allGroupList.some((item) => this.groupFlag === item.id);
    },
    groupList: {
      get: function () {
        return this.allGroupList.slice(
          (this.groupData.pageNumber - 1) * 5,
          this.groupData.pageNumber * 5
        );
      },
    },
    groupTotal() {
      return this.allGroupList.length;
    },
  },
};
</script>

<style lang="less" >
.areaSelect .ivu-select-dropdown {
  display: none !important;
}

.areaSelect.ivu-tree ul ul {
  overflow: hidden;
}

.areaSelect.ivu-tree ul ul ul {
  margin-top: 15px;
  margin-right: -8px;
  padding: 0;
}

.areaSelect.ivu-tree ul ul > li > * {
  float: left;
}

.areaSelect.ivu-tree ul ul .ivu-tree-title {
  margin: 0;
  padding: 0;
}

.ivu-table-cell {
  padding-left: 8px;
  padding-right: 8px;
}

.ivu-poptip-body-content-inner {
  text-align: center;
}

#tendering {
  .cateSelect {
    .ivu-select-item {
      padding: 7px 30px 7px 10px;
    }
  }

  .datePicker {
    input {
      font-size: 12px;
    }
  }

  .groupName {
    text-overflow: ellipsis;
    width: 100%;
  }

  .groupTip {
    width: 100%;
  }

  .center {
    position: relative;
    background-color: #fff;
    border-radius: 5px;

    .ivu-select-dropdown {
      top: 34px !important;
    }

    div {
      box-sizing: border-box;
    }

    .search_group,
    .search_main {
      border: 1px solid #ddd;
      border-radius: 5px;
      background-color: #fff;
      padding: 10px 20px;
      height: 290px;

      h3 {
        padding-bottom: 10px;
      }
    }

    .search_group {
      margin: 0;
      height: 290px;
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
      button {
        height: 30px;
        font-size: 10px;
        text-align: left;
        overflow: hidden;
      }

      margin-bottom: 5px;

      .group_btn {
        text-align: center;
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
    margin: 0 auto;
    background-color: #fff;
    padding: 10px;

    .tendContent {
      width: 100%;
      padding: 20px 0;
      margin: 0;

      .tabs {
        width: 100%;
        margin-bottom: 10px;
      }

      .subscribe {
        button {
          margin-right: 5px;
          margin-bottom: 15px;
        }
      }
    }
  }

  .actionBtn {
    cursor: pointer;
  }

  .area {
    cursor: pointer;

    &:hover {
      color: red;
    }
  }

  .ivu-poptip-rel {
    width: 100%;
  }
  // .ivu-col{
  //   margin-right: 8px;
  // }
  .ivu-form-item-error-tip {
    left: 38px;
  }
}
</style>