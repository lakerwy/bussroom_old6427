<template>
  <div class="institutionsDetails">
    <!-- <h1 style="margin: 15px 0; font-weight: bold">机构详情</h1> -->
    <Row :gutter="16">
      <Col span="16">
        <Card style="margin-bottom: 15px">
          <div>
            <div>
              <span style="font-size: 16px; color: #2d8cf0">机构整体情况</span>
              <p class="choose-p">
                <span
                  :class="{ active: allcode === 0 }"
                  @click="change('all', 0)"
                  >近7天</span
                >
                <span
                  :class="{ active: allcode === 1 }"
                  @click="change('all', 1)"
                  >近30天</span
                >
              </p>
            </div>
            <div class="info-details">
              <ul>
                <li>
                  <p>绑定账号</p>
                  <strong>8</strong>
                </li>
                <li>
                  <p>招标公告发布</p>
                  <strong>189</strong>
                </li>
                <li>
                  <p>中标候选人公示发布</p>
                  <strong>49</strong>
                </li>
                <li>
                  <p>中标结果公告发布</p>
                  <strong>80</strong>
                </li>
                <li>
                  <p>资格预审公告发布</p>
                  <strong>13</strong>
                </li>
              </ul>
            </div>
          </div>
        </Card>
        <Card>
          <div>
            <div style="margin-bottom: 15px">
              <span style="font-size: 16px; color: #2d8cf0">绑定账号情况</span>
              <p class="choose-p">
                <span
                  :class="{ active: bindcode === 0 }"
                  @click="change('bind', 0)"
                  >近7天</span
                >
                <span
                  :class="{ active: bindcode === 1 }"
                  @click="change('bind', 1)"
                  >近30天</span
                >
              </p>
            </div>
            <div>
              <Table :columns="columns" :data="data" border>
                <template slot-scope="{ row, index }" slot="name">
                  <div style="padding: 2px 0">
                    <span>{{ row.name }}</span>
                    <span class="label" v-show="index === 0">管理员</span>
                  </div>
                </template>
              </Table>
            </div>
          </div>
        </Card>
      </Col>
      <Col span="8">
        <Card>
          <div>
            <div style="margin-bottom: 15px">
              <span style="font-size: 16px; color: #2d8cf0">绑定账号情况</span>
              <p style="margin: 10px 0; color: #808695">机构名称</p>
              <p
                style="
                  color: #17233d;
                  border-bottom: 1px solid #dcdee2;
                  padding-bottom: 5px;
                "
              >
                北京某某建筑设计咨询有限公司
              </p>
              <p style="margin: 10px 0; color: #808695">统一社会信用代码</p>
              <p
                style="
                  color: #17233d;
                  border-bottom: 1px solid #dcdee2;
                  padding-bottom: 5px;
                "
              >
                1234*******************6666
              </p>
              <p style="margin: 10px 0; color: #808695">所在行政区域</p>
              <p
                style="
                  color: #17233d;
                  border-bottom: 1px solid #dcdee2;
                  padding-bottom: 5px;
                "
              >
                北京市
              </p>
              <p style="margin: 10px 0; color: #808695">法定代表人授权书</p>
              <a href="javascript:;" @click="download">
                法定代表人授权书.pdf
              </a>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: "organization",
  components: {},
  data() {
    return {
      index: 1,
      columns: [
        {
          title: "姓名",
          slot: "name",
          align: "center",
        },
        {
          title: "手机号",
          key: "phone",
          align: "center",
        },
        {
          title: "招标公告发布",
          key: "tender",
          align: "center",
        },
        {
          title: "中标候选人发布",
          key: "bidding",
          align: "center",
        },
        {
          title: "中标结果发布",
          key: "results",
          align: "center",
        },
        {
          title: "资格预审发布",
          key: "qualification",
          align: "center",
        },
      ],
      data: [
        {
          name: "李某某",
          phone: "138****2345",
          tender: 16,
          bidding: 16,
          results: 16,
          qualification: 16,
        },
        {
          name: "李某某",
          phone: "138****2345",
          tender: 16,
          bidding: 16,
          results: 16,
          qualification: 16,
        },
        {
          name: "李某某",
          phone: "138****2345",
          tender: 16,
          bidding: 16,
          results: 16,
          qualification: 16,
        },
        {
          name: "李某某",
          phone: "138****2345",
          tender: 16,
          bidding: 16,
          results: 16,
          qualification: 16,
        },
      ],
      allcode: 0,
      bindcode: 0,
    };
  },
  created() {
    // 获取显示数据
  },
  watch: {
    
  },
  computed: {
  },
  methods: {
    change(name, num) {
      switch (name) {
        case "all":
          if (num === 0) {
            this.allcode = 0;
            this.$store.dispatch("getFilterData", 7);
          } else {
            this.allcode = 1;
            this.$store.dispatch("getFilterData", 30);
          }
          break;
        case "bind":
          if (num === 0) {
            this.bindcode = 0;
            this.$store.dispatch("getFilterData", 7);
          } else {
            this.bindcode = 1;
            this.$store.dispatch("getFilterData", 30);
          }
          break;
        default:
          break;
      }
    },
    download() {
      // 下载pdf
      const name = "招标项目书";
      this.$store.dispatch("download", name);
    },
  },
};
</script>

<style lang="less" scoped>
.institutionsDetails {
  .label {
    margin-left: 5px;
    border: 1px solid #ff9900;
    color: #ff9900;
    padding: 2px;
    border-radius: 3px;
  }
  .choose-p {
    float: right;
    line-height: 24px;
    span {
      margin-left: 15px;
      cursor: pointer;
      color: #515a6e;
    }
    span.active {
      color: #2d8cf0;
    }
  }
  .info-details {
    margin-top: 20px;
    li {
      display: inline-block;
      width: 20%;
      text-align: center;
      strong {
        font-size: 28px;
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
</style>
