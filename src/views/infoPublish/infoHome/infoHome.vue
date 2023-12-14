<template>
  <div class="infoHome">
    <Row :gutter="16">
      <Col :span="18">
        <Card :style="{ margin: '16px 0' }">
          <Menu
            mode="horizontal"
            :theme="theme2"
            @on-select="addProject"
            
          >
            <MenuItem name="1" style="padding: 0 14px;">
              <Icon type="md-filing"></Icon>
              <span>新建项目</span></MenuItem
            >

            <MenuItem name="5" style="padding: 0 14px;">
              <Icon type="md-clipboard"></Icon>
              <span>发资格预审公告</span></MenuItem
            >

            <MenuItem name="2" style="padding: 0 14px;">
              <Icon type="md-albums"></Icon>
              <span>发招标公告</span></MenuItem
            >

            <MenuItem name="3" style="padding: 0 14px;">
              <Icon type="md-grid"></Icon>
              <span>发中标候选人公示</span></MenuItem
            >

            <MenuItem name="4" style="padding: 0 14px;">
              <Icon type="md-hammer"></Icon>
              <span>发中标结果公告</span></MenuItem
            >
          </Menu>
        </Card>
        <p style="margin-bottom: 10px">
          近30天发布统计
          <a
            style="float: right; color: #2d8cf0"
            href="javascript:;"
            @click="routerClick"
            >点击查看所有公告</a
          >
        </p>
        <Row class="flex-row" type="flex" justify="space-between" :gutter="16">
          <Col>
            <Card class="cardsty" @>
              <div @click="routerEnv('project')" class="flex-col ann-status">
                <p>项目</p>
                <strong>{{ count.total_project }}</strong>
                <p class="ann-info">
                  <Icon type="md-git-merge" style="color: #2db7f5" />
                  <span style="color: #1898db">{{
                    count.total_project_related
                  }}</span>
                  已关联
                </p>
              </div>
            </Card>
          </Col>
          <Col>
            <Card class="cardsty">
              <div
                @click="routerEnv('prequalification')"
                class="flex-col ann-status"
              >
                <p>资格预审公告</p>
                <strong>{{ count.total_precheck }}</strong>
                <p class="ann-info">
                  <Icon type="md-stats" style="color: #ed4014" />
                  <span style="color: #d9220e">{{
                    count.total_precheck_unpublished
                  }}</span
                  >未发布
                </p>
              </div>
            </Card>
          </Col>
          <Col>
            <Card class="cardsty">
              <div
                @click="routerEnv('tender')"
                class="flex-col ann-status"
              >
                <p>招标公告</p>
                <strong>{{ count.total_zhaobiao }}</strong>
                <p class="ann-info">
                  <Icon type="md-stats" style="color: #ed4014" />
                  <span style="color: #d9220e">{{
                    count.total_zhaobiao_unpublished
                  }}</span
                  >未发布
                </p>
              </div>
            </Card>
          </Col>
          <Col>
            <Card class="cardsty">
              <div @click="routerEnv('candidate')" class="flex-col ann-status">
                <p>中标候选人公示</p>
                <strong>{{ count.total_candidate }}</strong>
                <p class="ann-info">
                  <Icon type="md-stats" style="color: #ed4014" />
                  <span style="color: #d9220e">{{
                    count.total_candidate_unpublished
                  }}</span
                  >未发布
                </p>
              </div>
            </Card>
          </Col>
          <Col>
            <Card class="cardsty">
              <div @click="routerEnv('result')" class="flex-col ann-status">
                <p>中标结果公告</p>
                <strong>{{ count.total_bidresult }}</strong>
                <p class="ann-info">
                  <Icon type="md-stats" style="color: #ed4014" />
                  <span style="color: #d9220e">{{
                    count.total_bidresult_unpublished
                  }}</span
                  >未发布
                </p>
              </div>
            </Card>
          </Col>
        </Row>
        <!-- <p style="margin-top: 15px; margin-bottom: 10px" v-if="false">
          <a href="javascript:;">发布信息小窍门</a>
        </p>
        <Row class="flex-row" type="flex" justify="space-between" :gutter="20" v-if="false">
          <Col :span="8">
            <Card class="botsty">
              <div>
                <h3 style="font-weight: bold">项目</h3>
                <div
                  class="imgBox"
                  style="
                    margin-top: 20px;
                    text-align: center;
                    font-size: 0;
                    position: relative;
                  "
                >
                  <img
                    style="height: 135px; max-width: 100%"
                    src="../../../assets/infoPublish/u674.png"
                    alt=""
                  />
                  <img
                    style="
                      left: 50%;
                      top: 50%;
                      position: absolute;
                      transform: translate(-50%, -50%);
                    "
                    src="../../../assets/infoPublish/u679.png"
                    alt=""
                  />
                  <img
                    style="
                      left: 50%;
                      top: 50%;
                      position: absolute;
                      transform: translate(-50%, -50%);
                      width: 116px;
                    "
                    src="../../../assets/infoPublish/u677.png"
                    alt=""
                  />
                </div>
                <div
                  style="
                    margin-top: 20px;
                    margin-bottom: 5px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  "
                >
                  列表页<span style="color: red">复制项目</span>
                  基本信息一键搞定
                </div>
                <img
                  v-show="pfirst === 0"
                  style="width: 25px; cursor: pointer"
                  src="../../../assets/infoPublish/u702.png"
                  alt=""
                  @click="count(0, '项目')"
                />
                <img
                  v-show="pfirst === 1"
                  style="width: 25px; cursor: pointer"
                  src="../../../assets/infoPublish/u707.png"
                  alt=""
                  @click="count(1, '项目')"
                />
                <span style="margin-top: 5px; position: absolute">有用</span>
                <span
                  v-show="projectCount > 0"
                  style="margin-left: 30px; position: absolute"
                  >{{ projectCount }}</span
                >
              </div>
            </Card>
          </Col>
          <Col :span="8">
            <Card class="botsty">
              <div>
                <h3 style="font-weight: bold">招标公告</h3>
                <div
                  class="imgBox"
                  style="margin-top: 20px; text-align: center; font-size: 0"
                >
                  <img
                    src="../../../assets/infoPublish/u681.png"
                    alt=""
                    style="height: 135px; max-width: 100%"
                  />
                </div>
                <div
                  style="
                    margin-top: 20px;
                    margin-bottom: 5px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  "
                >
                  投标人可<span style="color: red">网上报名，网上下载</span>
                  招标文件
                </div>
                <img
                  v-show="afirst === 0"
                  style="width: 25px; cursor: pointer"
                  src="../../../assets/infoPublish/u702.png"
                  alt=""
                  @click="count(0, '公告')"
                />
                <img
                  v-show="afirst === 1"
                  style="width: 25px; cursor: pointer"
                  src="../../../assets/infoPublish/u707.png"
                  alt=""
                  @click="count(1, '公告')"
                />
                <span style="margin-top: 5px; position: absolute">有用</span>
                <span
                  v-show="announceCount > 0"
                  style="margin-left: 30px; position: absolute"
                  >{{ announceCount }}</span
                >
              </div>
            </Card>
          </Col>
          <Col :span="8">
            <Card class="botsty">
              <div>
                <h3 style="font-weight: bold">中标候选人公示</h3>
                <div
                  class="imgBox"
                  style="margin-top: 20px; text-align: center; font-size: 0"
                >
                  <img
                    style="height: 135px; max-width: 100%"
                    src="../../../assets/infoPublish/u689.png"
                    alt=""
                  />
                </div>
                <div
                  style="
                    margin-top: 20px;
                    margin-bottom: 5px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  "
                >
                  善用模板功能，让发布简单高效
                </div>
                <img
                  v-show="cfirst === 0"
                  style="width: 25px; cursor: pointer"
                  src="../../../assets/infoPublish/u702.png"
                  alt=""
                  @click="count(0, '公示')"
                />
                <img
                  v-show="cfirst === 1"
                  style="width: 25px; cursor: pointer"
                  src="../../../assets/infoPublish/u707.png"
                  alt=""
                  @click="count(1, '公示')"
                />
                <span style="margin-top: 5px; position: absolute">有用</span>
                <span
                  v-show="candidateCount > 0"
                  style="margin-left: 30px; position: absolute"
                  >{{ candidateCount }}</span
                >
              </div>
            </Card>
          </Col>
        </Row> -->
      </Col>
      <Col :span="6">
        <Card class="remind">
          <!-- <h1>提醒<span @click="clickAllLook"  v-if="false">全部已读</span></h1> -->
          <div>
            <ul >
              <li class="remind-list" @click="changeState(item)" v-for="(item, i) in remindList" :key="i">
                <span>
                  <span style="color:#ed4014">{{ item.type }} </span>
                  <span >{{ item.title }}</span>
                </span>
                <p v-show="!item.status" class="copy active">new</p>
              </li>
            </ul>
          </div>
          <a href="javascript:;" @click="messageRemind" class="remind-all"
            >查看全部提醒</a
          >
        </Card>
        <!-- <Card  v-if="false">
          <div style="display: inline-block">
            <img
              style="width: 120px"
              src="../../../assets/infoPublish/u46.png"
            />
          </div>
          <div
            style="display: inline-block; vertical-align: top; margin-top: 25px"
          >
            <div>扫码关注微信公众号</div>
            <br />
            <div>发布状态全程掌握</div>
          </div>
        </Card> -->
      </Col>
    </Row>
  </div>
</template>

<script>
import { getPublishCount, getMessages } from "@/api/publishApi";
export default {
  name: "homes",
  data() {
    return {
      index: 1,
      allLook: false,
      projectCount: 1,
      pfirst: 0, // 点赞
      announceCount: 0,
      afirst: 0, // 点赞
      candidateCount: 0,
      cfirst: 0, // 点赞
      data: [],
      remindList: [],
      count: {},
    };
  },
  activated() {
    this.getCount();
  },
  created() {
    this.getCount();
    this.getMessage();
  },
  methods: {
    // 近30天发布统计
    getCount() {
      getPublishCount().then((res) => {
        if (res.success) {
          this.count = res.result;
        }
      });
    },
    // 提醒
    getMessage() {
      getMessages().then((res) => {
        if (res.success) {
          this.remindList = res.result;
        }
      });
    },
    routerEnv(name) {
      this.$router.push({
        name: name
      })
    },
    messageRemind() {
      this.$router.push({
        name: "message_index",
      });
    },
    routerClick() {
      this.$router.push({
        name: "stateList",
      });
    },
    changeState(v) {
      this.$router.push({
        name: "message_index",
      });
      let messageData = {
        id: v.id,
        status: v.status,
      };
      this.setStore("messageData", JSON.stringify(messageData));
    },
    clickAllLook() {},
    count(num, kind) {},
    addProject(name) {
      if (name == 1) {
        if (
          this.$store.state.app.pageOpenedList.some(
            (item) => item.name === "addProject"
          )
        ) {
          console.log(this.$store.state.app.pageOpenedList);
          this.$Modal.confirm({
            title: "温馨提示",
            content:
              "当前已有项目正在创建，重新创建已填写的数据会丢失！确认创建新项目？",
            onOk: () => {
              this.removeStore("projectId");
              this.removeStore("oldProjectId");
              this.removeStore("projectStep");
              this.setStore("addProject", true);
              this.$router.push({
                name: "addProject",
              });
            },
          });
        } else {
          this.removeStore("projectId");
          this.removeStore("oldProjectId");
          this.removeStore("projectStep");
          this.setStore("addProject", true);
          this.$router.push({
            name: "addProject",
          });
        }
      } else if (name == 5) {
        // 新建资格预审公告
        if (
          this.$store.state.app.pageOpenedList.some(
            (item) => item.name === "addPrequalification"
          )
        ) {
          this.$Modal.confirm({
            title: "提示",
            content: "当前已有公告正在创建，确认重新创建新公告？",
            onOk: () => {
              this.setStore('addPreClickFlag', true)
              this.removeStore("projectToPre");
              this.removeStore("addPreId");
              this.setStore("preAdd", true);
              this.$router.push({
                name: "addPrequalification",
              });
            },
          });
        } else {
          this.setStore('addPreClickFlag', true)
          this.removeStore("projectToPre");
          this.removeStore("addPreId");
          this.setStore("preAdd", true);
          this.$router.push({
            name: "addPrequalification",
          });
        }
      } else if (name == 3) {
        if (
          this.$store.state.app.pageOpenedList.some(
            (item) => item.name === "addCandidate"
          )
        ) {
          this.$Modal.confirm({
            title: "提示",
            content: "当前已有公示正在创建，确认重新创建新公示？",
            onOk: () => {
              this.setStore('addCanClickFlag', true);
              this.removeStore('tenderToCan')
              this.removeStore("candidateId");
              this.setStore("candidateAdd", true);
              this.$router.push({
                name: "addCandidate",
              });
            },
          });
        } else {
          this.setStore('addCanClickFlag', true);
          this.removeStore('tenderToCan')
          this.removeStore("candidateId");
          this.setStore("candidateAdd", true);
          this.$router.push({
            name: "addCandidate",
          });
        }
      } else if (name == 2) {
        if (
          this.$store.state.app.pageOpenedList.some(
            (item) => item.name === "addTender"
          )
        ) {
          this.$Modal.confirm({
            title: "提示",
            content: "当前已有公告正在创建，确认重新创建新公告？",
            onOk: () => {
              this.setStore('addTenderClickFlag', true)
              this.removeStore("projectToTender");
              this.removeStore("tenderId");
              this.setStore("tenderAdd", true);
              this.$router.push({
                name: "addTender",
              });
            },
          });
        } else {
          this.setStore('addTenderClickFlag', true)
          this.removeStore("projectToTender");
          this.removeStore("tenderId");
          this.setStore("tenderAdd", true);
          this.$router.push({
            name: "addTender",
          });
        }
      } else if (name == 4) {
        if (
          this.$store.state.app.pageOpenedList.some(
            (item) => item.name === "addResult"
          )
        ) {
          this.$Modal.confirm({
            title: "提示",
            content: "当前已有公示正在创建，确认重新创建新公示？",
            onOk: () => {
              this.setStore('addResultClickFlag', true)
              this.removeStore("tenderToResult")
              this.removeStore("resultId");
              this.setStore("resultAdd", true);
              this.$router.push({
                name: "addResult",
              });
            },
          });
        } else {
          this.setStore('addResultClickFlag', true)
          this.removeStore("tenderToResult")
          this.removeStore("resultId");
          this.setStore("resultAdd", true);
          this.$router.push({
            name: "addResult",
          });
        }
      }
    },
  },
};
</script>

<style lang="less">
.infoHome {
  li {
    list-style: none;
  }
  .layout-con {
    height: 100%;
    width: 100%;
  }

  .cardsty {
    // width: 30px;
    width: 100%;
    margin-right: 10px;
    height: 118px;
  }

  .botsty {
    margin-right: 50px;
    width: 100%;
  }

  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 100px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width 0.2s ease 0.2s;
  }

  .menu-item i {
    transform: translateX(0px);
    transition: font-size 0.2s ease, transform 0.2s ease;
    vertical-align: middle;
    font-size: 16px;
  }

  .collapsed-menu span {
    width: 0;
    transition: width 0.2s ease;
  }

  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
    vertical-align: middle;
    font-size: 22px;
  }

  .ivu-menu-horizontal {
    height: 32px;
    line-height: 32px;
  }

  .ivu-menu-horizontal.ivu-menu-light:after {
    background: #fff;
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

.flex-row {
  display: flex;
  flex-wrap: nowrap;
}

.flex-row > * {
  flex-grow: 1;
}

.flex-col {
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.flex-col > * {
  justify-content: center;
  align-items: center;
  text-align: center;
}

.ann-status {
  strong {
    font-size: 28px;
    color: #000;
  }

  .ann-info {
    img {
      width: 0.8em;
      margin-right: 0.2em;
    }
  }
}

.remind {
  margin: 16px 0;

  h1 {
    font-size: 20px;
    position: relative;
    padding-left: 15px;

    span {
      color: #666;
      position: absolute;
      right: 0;
      bottom: 0;
      font-size: 12px;
      cursor: pointer;
    }
  }

  h1:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 4px;
    top: 4px;
    width: 4px;
    height: auto;
    background-color: #1d9ed5;
  }

  .remind-list {
    cursor: pointer;
    font-size: 12px;
    padding: 15px 10px;
    /* border-bottom 1px solid #ccc */
    position: relative;
    color: #333;

    .remind-info {
      color: #1d9ed5;
    }

    .copy {
      /* position: absolute;
      right: 15px;
      bottom: 16px;
      color: #999; */
      text-align: right;
    }

    .active {
      color: #ed4014;
    }

    border-bottom: 1px solid #e8eaec;
  }

  .remind-all {
    display: block;
    background-color: #e4e4e4;
    text-align: center;
    font-size: 12px;
    padding: 5px 0;
    margin: 20px -16px -16px -16px;
    color: #333;
  }

  .ivu-btn-primary {
    color: #515a6e;
    background-color: transparent;
    border-color: transparent;
  }

  .ivu-btn-text {
    color: #fff;
    background-color: #2d8cf0;
    border-color: #2d8cf0;
  }
}
</style>
