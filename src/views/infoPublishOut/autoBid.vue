<template>
  <div id="autoBid">
    <Card>
      <Row>
        <Form
          ref="searchData"
          :model="searchData"
          inline
          label-position="right"
          :label-width="80"
        >
          <Form-item prop="title" label="标题：">
            <Input
              v-model="searchData.title"
              placeholder="请输入标题"
              style="width: 260px"
            />
          </Form-item>
          <Form-item prop="area" label="地区：">
            <div @click.capture.stop="showAreaModal">
              <Poptip
                width="260"
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
                  v-model="searchArea"
                  multiple
                  placeholder="全部地区"
                  label-in-value
                  @on-change="changeArea"
                  style="width: 260px"
                >
                  <Option value="北京">北京</Option>
                  <Option value="上海">上海</Option>
                  <Option value="天津">天津</Option>
                  <Option value="重庆">重庆</Option>
                  <Option value="河北">河北</Option>
                  <Option value="山西">山西</Option>
                  <Option value="内蒙古">内蒙古</Option>
                  <Option value="辽宁">辽宁</Option>
                  <Option value="吉林">吉林</Option>
                  <Option value="黑龙江">黑龙江</Option>
                  <Option value="江苏">江苏</Option>
                  <Option value="浙江">浙江</Option>
                  <Option value="安徽">安徽</Option>
                  <Option value="福建">福建</Option>
                  <Option value="江西">江西</Option>
                  <Option value="山东">山东</Option>
                  <Option value="河南">河南</Option>
                  <Option value="湖北">湖北</Option>
                  <Option value="湖南">湖南</Option>
                  <Option value="广东">广东</Option>
                  <Option value="广西">广西</Option>
                  <Option value="海南">海南</Option>
                  <Option value="贵州">贵州</Option>
                  <Option value="云南">云南</Option>
                  <Option value="西藏">西藏</Option>
                  <Option value="陕西">陕西</Option>
                  <Option value="四川">四川</Option>
                  <Option value="甘肃">甘肃</Option>
                  <Option value="青海">青海</Option>
                  <Option value="新疆">新疆</Option>
                  <Option value="宁夏">宁夏</Option>
                  <Option value="香港">香港</Option>
                  <Option value="澳门">澳门</Option>
                  <Option value="台湾">台湾</Option>
                </Select>
              </Poptip>
            </div>
          </Form-item>
          <Form-item label="时间：">
            <RadioGroup
              size="small"
              v-model="rangFlag"
              @on-change="changeRange"
              class="term"
            >
              <Radio :label="5">
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
            <DatePicker
              class="datePicker"
              v-show="rangFlag == -1"
              type="daterange"
              :options="dateOption"
              transfer
              placement="bottom-end"
              placeholder="选择日期"
              @on-change="pickDate"
              v-model="dateArr"
            ></DatePicker>
          </Form-item>
          <FormItem style="margin-bottom: 10px">
            <Button
              @click="handleSearch"
              type="primary"
              style="margin-right: 15px"
              icon="ios-search"
              >搜索</Button
            >
            <Button @click="handleReset">重置</Button>
          </FormItem>
        </Form>
      </Row>
      <Row>
        <Table
          ref="selection"
          :loading="loading"
          :columns="columns"
          :data="data"
          border
          class="table"
        >
        </Table>
      </Row>
      <Row type="flex" justify="end" style="margin-top: 10px">
        <Page
          transfer
          :current="searchData.page"
          :total="totalCount"
          :page-size="searchData.size"
          @on-change="changePage"
          @on-page-size-change="changesize"
          :page-size-opts="[10, 20, 50]"
          size="small"
          show-total
          show-elevator
          show-sizer
        ></Page>
      </Row>
    </Card>

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
  </div>
</template>

<script>
import { getAllByCriteria } from "@/api/publishApi";
export default {
  name: "autoBid",
  data() {
    return {
      searchArea: [],
      areaFlag: false,
      loading: false,
      rangFlag: "",
      searchData: {
        title: "",
        size: 10,
        page: 1,
        area: "",
        statusTimeStart: "",
        statusTimeEnd: "",
      },
      dateOption: {
        disabledDate(date) {
          return date.valueOf() > Date.now();
        },
      },
      columns: [
        {
          title: "公告名称",
          minWidth: 200,
          key: "projectTitle",
          render: (h, params) => {
            return h(
              "div",
              {
                style: {
                  overflow: "hidden",
                  "text-overflow": "ellipsis",
                  display: " -webkit-box",
                  "-webkit-line-clamp": 2,
                  "-webkit-box-orient": "vertical",
                  cursor: "pointer",
                  color: "#2d8cf0",
                },
                domProps: {
                  title: params.row.title,
                },
                on: {
                  click: () => {
                    this.toDetail(params.row);
                  },
                },
              },
              params.row.title
            );
          },
        },
        {
          title: "发布时间",
          width: 180,
          key: "statusTime",
          align: "center",
        },
        {
          title: "地区",
          minWidth: 150,
          key: "area",
          align: "center",
        },
      ],
      data: [],
      totalCount: 0,
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
                  value: "北京",
                },
                {
                  title: "天津",
                  value: "天津",
                },
                {
                  title: "河北",
                  value: "河北",
                },
                {
                  title: "山西",
                  value: "山西",
                },
                {
                  title: "内蒙古",
                  value: "内蒙古",
                },
              ],
            },
            {
              title: "华东",
              expand: true,
              children: [
                {
                  title: "上海",
                  value: "上海",
                },
                {
                  title: "山东",
                  value: "山东",
                },
                {
                  title: "江苏",
                  value: "江苏",
                },
                {
                  title: "安徽",
                  value: "安徽",
                },
                {
                  title: "江西",
                  value: "江西",
                },
                {
                  title: "浙江",
                  value: "浙江",
                },
                {
                  title: "福建",
                  value: "福建",
                },
              ],
            },
            {
              title: "华中",
              expand: true,
              children: [
                {
                  title: "湖北",
                  value: "湖北",
                },
                {
                  title: "湖南",
                  value: "湖南",
                },
                {
                  title: "河南",
                  value: "河南",
                },
              ],
            },
            {
              title: "华南",
              expand: true,
              children: [
                {
                  title: "广东",
                  value: "广东",
                },
                {
                  title: "广西",
                  value: "广西",
                },
                {
                  title: "海南",
                  value: "海南",
                },
              ],
            },
            {
              title: "东北",
              expand: true,
              children: [
                {
                  title: "辽宁",
                  value: "辽宁",
                },
                {
                  title: "吉林",
                  value: "吉林",
                },
                {
                  title: "黑龙江",
                  value: "黑龙江",
                },
              ],
            },
            {
              title: "西北",
              expand: true,
              children: [
                {
                  title: "陕西",
                  value: "陕西",
                },
                {
                  title: "甘肃",
                  value: "甘肃",
                },
                {
                  title: "宁夏",
                  value: "宁夏",
                },
                {
                  title: "新疆",
                  value: "新疆",
                },
                {
                  title: "青海",
                  value: "青海",
                },
              ],
            },
            {
              title: "西南",
              expand: true,
              children: [
                {
                  title: "重庆",
                  value: "重庆",
                },
                {
                  title: "四川",
                  value: "四川",
                },
                {
                  title: "贵州",
                  value: "贵州",
                },
                {
                  title: "云南",
                  value: "云南",
                },
                {
                  title: "西藏",
                  value: "西藏",
                },
              ],
            },
            {
              title: "其他",
              expand: true,
              children: [
                {
                  title: "香港",
                  value: "香港",
                },
                {
                  title: "澳门",
                  value: "澳门",
                },
                {
                  title: "台湾",
                  value: "台湾",
                },
              ],
            },
          ],
        },
      ],
      groupFlag: -1,
      areaTip: "全部地区",
      dateArr: [],
    };
  },
  created() {
    this.getDataList();
  },
  methods: {
    getDataList() {
      this.loading = true;
      getAllByCriteria(this.searchData).then((res) => {
        if (res.success) {
          this.data = res.result.content;
          this.totalCount = res.result.totalElements;
        }
        this.loading = false;
      });
    },
    changesize(v) {
      this.searchData.size = v;
      this.getDataList();
    },
    changePage(v) {
      this.searchData.page = v;
      this.getDataList();
    },
    changeRange(v) {
      if(v == -1) {
        this.searchData.statusTimeStart = '';
        this.searchData.statusTimeEnd = ''
      }
      if (v == 1) {
        this.searchData.statusTimeStart = this.format(
          new Date(new Date() - 7 * 24 * 3600 * 1000),
          "yyyy-MM-dd"
        );
      } else if (v == 2) {
        this.searchData.statusTimeStart = this.format(
          new Date(new Date() - 14 * 24 * 3600 * 1000),
          "yyyy-MM-dd"
        );
      } else if (v == 3) {
        this.searchData.statusTimeStart = this.format(
          new Date(new Date() - 30 * 24 * 3600 * 1000),
          "yyyy-MM-dd"
        );
      } else if (v == 4) {
        this.searchData.statusTimeStart = this.format(
          new Date(new Date() - 90 * 24 * 3600 * 1000),
          "yyyy-MM-dd"
        );
      } else if (v == 5) {
        this.searchData.statusTimeStart = this.format(
          new Date(new Date() - 365 * 24 * 3600 * 1000),
          "yyyy-MM-dd"
        );
      }
      this.searchData.statusTimeEnd = this.format(new Date(), "yyyy-MM-dd");
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
      this.searchArea = a;
      this.searchData.area = a.join(",");
    },
    pickDate(a) {
      this.searchData.statusTimeStart = a[0];
      this.searchData.statusTimeEnd = a[1];
      this.groupFlag = -1;
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
    showAreaModal() {
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
    // 前往详情页面
    toDetail(v) {
      let data = this.getStore("outDetailsTabs") || [];
      if (data.length !== 0) {
        data = JSON.parse(data);
      }
      if (!data.some((item) => item.id == v.id)) {
        data.push({
          id: v.id + "",
          hash: v.id + "",
          title: v.title,
        });
      }
      this.setStore("outDetailsTabs", JSON.stringify(data));
      this.setStore("currentOutDetailId", v.id + "");
      this.$router.push("/infoPublishOut/autoDetail#" + v.id);
    },
    // 查询
    handleSearch() {
      console.log(this.searchData);
      this.getDataList()
    },
    // 重置
    handleReset() {
      this.searchData.page = 1;
      this.searchData.size = 10;
      this.searchData.title = '';
      this.searchData.area = '';
      this.searchData.statusTimeStart = '';
      this.searchData.statusTimeEnd = '';

      this.searchArea = [];
      this.rangFlag = '';
      this.getDataList()
    }
  },
};
</script>
<style lang="less">
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
</style>