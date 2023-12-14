<template>
  <div class="bidderDetails">
    <div>
      <Row :gutter="16">
        <Col span="8">
          <Card>
            <div class="card">
              <p class="title">宁夏英力特化工股英力特化工份有限公司</p>
              <ul class="info-details">
                <li>
                  <p class="info-title">加入渠道</p>
                  <p class="info-directory">网站报名</p>
                </li>
                <li>
                  <p class="info-title">加入时间</p>
                  <p class="info-directory">2019-01-06</p>
                </li>
                <li>
                  <p class="info-title">投标次数</p>
                  <p class="info-directory">3</p>
                </li>
                <li>
                  <p class="info-title">中标次数</p>
                  <p class="info-directory">0</p>
                </li>
              </ul>
            </div>
            <div class="card-div">
              <p class="info-title">备注</p>
              <span v-show="add !== 1 && add !== 3">{{ note }}</span>
              <a
                v-show="note === '' && add === 0"
                @click="addNote"
                class="info-directory"
                >添加备注</a
              >
              <a
                style="margin-left: 10px"
                v-show="add === 2"
                @click="edit"
                class="info-directory"
                >修改</a
              >
              <Input
                style="width: 300px"
                v-show="add === 1 || add === 3"
                v-model="note"
              />
              <Button
                style="margin-left: 10px"
                v-show="add === 1 || add === 3"
                type="info"
                @click="save"
                >保存</Button
              >
              <Button
                style="margin-left: 10px"
                v-show="add === 1 || add === 3"
                type="info"
                @click="cancel"
                >取消</Button
              >
            </div>
            <div class="card-div">
              <p class="info-title">参与项目</p>
              <ul>
                <li>网上报名</li>
                <li>中标候选人</li>
                <li>中标结果</li>
              </ul>
            </div>
            <div class="card-div">
              <p class="info-title">相关人员</p>
              <ul>
                <li>项目负责人</li>
                <li>投标联系人</li>
              </ul>
            </div>
          </Card>
        </Col>
        <Col span="16">
          <Card class="list-details">
            <h1>网上报名</h1>
            <Table ref="selection" :columns="columns1" :data="data1" border>
              <template slot-scope="{ row }" slot="name">
                <a
                  href="javascript:;"
                  @click="routerEnv('tenderDetail')"
                  class="project-name"
                >
                  {{ row.name }}
                </a>
              </template>
              <template slot-scope="{ row }" slot="action">
                <div class="action-div">
                  <Dropdown placement="bottom-start">
                    <a href="javascript:void(0)"> 投标标段 </a>
                    <DropdownMenu slot="list">
                      <DropdownItem v-for="item in row.periodList" :key="item"
                        >{{ item }}
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <div class="action-div-table">
                  <Icon size="16" type="md-paper" />
                  报名表
                </div>
              </template>
            </Table>
          </Card>
          <Card class="list-details">
            <h1>中标候选人</h1>
            <Table border ref="selection" :columns="columns2" :data="data2">
              <template slot-scope="{ row }" slot="name">
                <a
                  href="javascript:;"
                  @click="routerEnv('tenderDetail')"
                  class="project-name"
                >
                  {{ row.name }}
                </a>
              </template>
              <template slot-scope="{ row }" slot="action">
                <div class="action-div">
                  <Dropdown placement="bottom-start">
                    <a href="javascript:void(0)"> 投标标段 </a>
                    <DropdownMenu slot="list">
                      <DropdownItem v-for="item in row.periodList" :key="item"
                        >{{ item }}
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <div class="action-div-info">排名：<span>3</span></div>
                <div class="action-div-info">
                  项目负责人：<span>李某某</span>
                </div>
              </template>
            </Table>
          </Card>
          <Card class="list-details">
            <h1>中标结果</h1>
            <Table border ref="selection" :columns="columns3" :data="data3">
              <template slot-scope="{ row }" slot="name">
                <a
                  href="javascript:;"
                  @click="routerEnv('tenderDetail')"
                  class="project-name"
                >
                  {{ row.name }}
                </a>
              </template>
              <template slot-scope="{ row }" slot="action">
                <div class="action-div">
                  <Dropdown placement="bottom-start">
                    <a href="javascript:void(0)"> 投标标段 </a>
                    <DropdownMenu slot="list">
                      <DropdownItem v-for="item in row.periodList" :key="item"
                        >{{ item }}
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <div class="action-div-info">
                  投标报价：<span>23457万</span>
                </div>
              </template>
            </Table>
          </Card>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  name: "bidderDetail",
  data() {
    return {
      note: "",
      add: 0,
      index: 7,
      columns1: [
        {
          title: "参与项目",
          slot: "name",
        },
        {
          title: "公告类型",
          key: "state",
          width: 90,
          align: "center",
        },
        {
          title: "公告发布时间",
          key: "time",
          width: 150,
          align: "center",
        },
        {
          title: " ",
          slot: "action",
          width: 200,
          align: "center",
        },
      ],
      data1: [
        {
          name: "中国电信股份有限公司喀什分公司校园公司喀什分公司校园",
          state: "招标公告",
          time: "2018-10-23 15:34:12",
          periodList: [
            "标段（包）001：风机安装Ⅱ标段",
            "标段（包）002：风机安装Ⅱ标段",
            "标段（包）003：风机安装Ⅱ标段",
            "标段（包）004：风机安装Ⅱ标段",
          ],
        },
      ],
      columns2: [
        {
          title: "参与项目",
          slot: "name",
        },
        {
          title: "公告类型",
          key: "state",
          width: 90,
          align: "center",
        },
        {
          title: "公告发布时间",
          key: "time",
          width: 150,
          align: "center",
        },
        {
          title: " ",
          slot: "action",
          width: 300,
          align: "center",
        },
      ],
      data2: [
        {
          name: "中国电信股份有限公司喀什分公司校园公司喀什分公司校园",
          state: "招标公告",
          time: "2018-10-23 15:34:12",
          periodList: [
            "标段（包）001：风机安装Ⅱ标段",
            "标段（包）002：风机安装Ⅱ标段",
            "标段（包）003：风机安装Ⅱ标段",
            "标段（包）004：风机安装Ⅱ标段",
          ],
        },
      ],
      columns3: [
        {
          title: "参与项目",
          slot: "name",
        },
        {
          title: "公告类型",
          key: "state",
          width: 90,
          align: "center",
        },
        {
          title: "公告发布时间",
          key: "time",
          width: 150,
          align: "center",
        },
        {
          title: " ",
          width: 220,
          slot: "action",
          align: "center",
        },
      ],
      data3: [
        {
          name: "中国电信股份有限公司喀什分公司校园公司喀什分公司校园",
          state: "招标公告",
          time: "2018-10-23 15:34:12",
          periodList: [
            "标段（包）001：风机安装Ⅱ标段",
            "标段（包）002：风机安装Ⅱ标段",
            "标段（包）003：风机安装Ⅱ标段",
            "标段（包）004：风机安装Ⅱ标段",
          ],
        },
      ],
    };
  },
  computed: {
    getData() {
      // 获取详情数据
      return this.$store.state.bidder.detail;
    },
  },
  created() {
    // this.$store.dispatch('getDetail');
  },
  methods: {
    routerEnv(name) {
      this.$router.push({
        name
      });
    },
    addNote() {
      this.add = 1;
    },
    save() {
      if (this.note === "") {
        this.add = 0;
      } else {
        this.add = 2;
      }
    },
    cancel() {
      this.add = 0;
    },
    edit() {
      this.add = 3;
    },
  },
};
</script>

<style lang="less" scoped>
.bidderDetails{
  .card{
    border-bottom: #f5f7f9 1px solid;
    padding-bottom: 20px;
    .title{
      font-size: 14px;
      font-weight: bold;
      text-align: center;
    }
    .time{
      margin: 10px 0;
      font-size: 14px;
      text-align: center;
      span{
        margin-left:10px;
        cursor: pointer;
        color: #1d9ed5;
      }
      span.state4{
        font-size: 12px;
        margin-left:0;
        margin-right: 10px;
        color: #19be6b;
      }
      span.state5{
        font-size: 12px;
        margin-left:0;
        margin-right: 10px;
        color: #2db7f5;
      }
      span.state6{
        font-size: 12px;
        margin-left:0;
        margin-right: 10px;
        color: #ed4014;
      }
      span.state7{
        font-size: 12px;
        margin-left:0;
        margin-right: 10px;
        color: #9900FF;
      }
      span.state8{
        font-size: 12px;
        margin-left:0;
        margin-right: 10px;
        color: #ff9900;
      }
    }
    .info-details{
      display: inline-flex;
      flex-wrap: wrap;
      width: 100%;
      li{
        display: inline-flex;
        flex-wrap: wrap;
        width: 50%;
        justify-content: center;
        margin-top: 10px;
        p{
          width:100%;
          text-align: center;
        }
        .info-title{
          font-weight: bold;
        }
        .info-directory{
          color: #1d9ed5;
        }
      }
    }
  }
  .card-div{
    border-bottom: #f5f7f9 1px solid;
    padding: 20px 0;
    .info-title{
      font-weight: bold;
      padding-bottom: 10px;
    }
    .info-directory{
      color: #1d9ed5;
      cursor: pointer;
    }
    ul{
      li{
        width: 50%;
        display: inline-block;
        text-align: center;
        margin-bottom: 10px;
      }
    }
  }
  .operation{
    .icon-color{
      color: #2d8cf0;
      line-height: 24px;
      margin-right: 5px;
    }
    ul{
      display: inline-flex;
      flex-wrap: wrap;
      width: 100%;
      margin: 10px 0;
      li{
        line-height: 24px;
        cursor: pointer;
        padding-left: 20px;
        display: inline-flex;
        flex-wrap: wrap;
        width: 50%;
        margin-top: 10px;
      }
    }
  }
  .associated{
    border-top: #f5f7f9 1px solid;
    margin-bottom: 15px;
    h1{
      font-size :14px;
      position :relative;
      padding-left: 5px;
      margin: 15px 0 5px 0;
      span{
        color: #666;
        position :absolute;
        right: 0;
        bottom: 0;
        font-size :14px;
        cursor: pointer;
      }
    }
    h1:before {
      content :"";
      display :block;
      position :absolute;
      left: 0;
      bottom: 3px;
      top: 3px;
      width: 3px;
      height:auto;
      background-color :#1d9ed5;
    }
  }
  .list-details{
    margin-bottom: 20px;
    h1{
      font-size :20px;
      position :relative;
      padding-left: 15px;
      margin-bottom: 20px;
      span{
        color: #666;
        position :absolute;
        right: 0;
        bottom: 0;
        font-size :14px;
        cursor: pointer;
      }
    }
    h1:before {
      content :"";
      display :block;
      position :absolute;
      left: 0;
      bottom: 4px;
      top: 4px;
      width: 4px;
      height:auto;
      background-color: #1d9ed5;
    }
  }
  .ivu-table-wrapper {
    margin-top: 40px;
    overflow: inherit;
  }
  .action-div{
    cursor :pointer;
    display :inline-block;
    color: #1d9ed5;
  }
  .action-div-table{
    cursor: pointer;
    display: inline-block;
    color :#1d9ed5;
    margin-left: 30px;
  }
  .action-div-info{
    cursor: pointer;
    display: inline-block;
    margin-left: 20px;
    span{
      color :#1d9ed5;
    }
  }
  .project-name{
    width: 100%;
    display :inline-block;
    overflow :hidden;
    text-overflow:ellipsis;
  }
  .menu-div{
    text-align: center;
  }
  .ivu-layout-sider-trigger{
    display :none;
  }
  .ivu-menu-vertical .ivu-menu-item{
    padding-left :10px;
    padding-right :10px;
  }
}
</style>
