<template>
  <div class="InformationManagement">
    <h3 class="title">
      <div class="left">
          <span>信息管理</span>
        </div>
        <div class="searchBox">
          <div class="search">
            <input
              type="text"
              placeholder="请输入你想找的关键词"
              v-model="infoForm.title"
              @keyup.enter="search"
            />
            <button class="searchBtn btn" type="button" @click="search">搜 索</button>
          </div>
          <!-- <div class="btn reset" @click="reset">
            重置
          </div> -->
        </div>
    </h3>
    <div class="table">
      <template>
        <Table
          :columns="columnsInfo"
          :data="dataInfo"
          @on-filter-change="filterChange"
          @on-sort-change="sortChange"
        ></Table>
        <div class="page">
          <Page
            :total="total"
            show-total
            :current="infoForm.pageNumber"
            :page-size="infoForm.pageSize"
            show-elevator
            @on-change="changePage"
          />
        </div>
      </template>
    </div>

    <!-- 右侧浮窗 -->
    <!-- <div class="service-common">
      <div class="online">
        <router-link to="/">
          <span class="iconfont icon-7"></span>
          <p class="firstP">招标</p>
          <p>首页</p></router-link
        >
      </div>
      <div class="promotion">
        <a href="javascript:void(0)" @click="qimoChatClick">
          <span class="iconfont icon-xiangmutuijin"></span>
          <p class="firstP">信息</p>
          <p>推广</p>
        </a>
      </div>
      <div class="bid">
        <a href="javascript:void(0)" @click="qimoChatClick">
          <span class="iconfont icon-tianxie"></span>
          <p class="firstP">标书</p>
          <p>代写</p>
        </a>
      </div>
      <div class="service">
        <a href="javascript:void(0)" @click="qimoChatClick">
          <span class="iconfont icon-zaixianzixun"></span>
          <p class="firstP">在线</p>
          <p>咨询</p>
        </a>
      </div>
    </div> -->

    <!-- 删除提示 -->
    <Modal
      v-model="delModal"
      title="提示"
      @on-ok="delOk"
      @on-cancel="delCancel"
    >
      <p>确定要删除这条信息吗？</p>
    </Modal>
    <!-- 驳回理由 -->
    <Modal
      v-model="rejectModal"
      title="驳回"
      @on-ok="rejectOk"
      @on-cancel="rejectCancel"
      ok-text="修改"
    >
      <p>{{ rejectReason }}</p>
    </Modal>
  </div>
</template>

<script>
import {
  getManagerInfo,
  delManagerInfo,
  sendManagerInfo
} from "@/api/index.js";
import moment from 'moment'
export default {

  data() {
    //401 招标公告 402 招标预告 403 招标变更 404 中标公告 405 采购信息   -1草稿 0待发布 1已发布 2已取消 3驳回
    return {
      ModalForm: {
        fid: "",
        type: null
      },
      delModal: false,
      rejectModal: false,
      rejectReason: "驳回理由",
      infoForm: {
        title: "",
        status: '',
        sort: "flastupdatetime",
        order: "desc",
        pageNumber: 1,
        pageSize: 10
      },
      total: 0,
      isShowOld: 0, //是否显示历史信息入口
      columnsInfo: [
        {
          title: "id",
          key: "fid",
          align: "center",
          width: 180
        },
        {
          title: "信息类型",
          key: "finfotype",
          width: 120,
          align: "center",
          // filters: [
          //   {
          //     label: "招标公告",
          //     value: 401
          //   },
          //   {
          //     label: "招标预告",
          //     value: 402
          //   },
          //   // {
          //   //   label: "招标变更",
          //   //   value: 403
          //   // },
          //   {
          //     label: "中标公告",
          //     value: 404
          //   },
          //   {
          //     label: "采购信息",
          //     value: 405
          //   }
          // ],
          // filterMultiple: false,
          // filterMethod(value, row) {
          //   return row.finfotype == value;
          // },
          render: (h, params) => {
            let txt = "";
            switch (params.row.finfotype) {
              case 401:
                txt = "招标公告";
                break;
              case 402:
                txt = "招标预告";
                break;
              // case 403:
              //   txt = "招标变更";
              //   break;
              case 404:
                txt = "中标公告";
                break;
              case 405:
                txt = "采购信息";
                break;
              default:
                break;
            }
            return h(
              "p",
              {
                style: {
                  textAlign: "center",
                  // paddingLeft: "5px"
                }
              },
              '中标公告'
            );
          }
        },
        {
          title: "信息标题",
          key: "ftitle",
          minWidth: 300,
          align: "left",
          render: (h, params) => {
            return h(
              "p",
              {
                domProps: {
                  title: params.row.ftitle
                },
                class: "ellipsis",
                on: {
                  click: function() {}
                }
              },
              params.row.ftitle
            );
          }
        },
        {
          title: "发布状态",
          key: "fstatus",
          minWidth: 120,
          align: "center",
          filters: [
            {
              label: "已发布",
              value: 1
            },
            {
              label: "待发布",
              value: 0
            },
            {
              label: "草稿",
              value: -1
            },
            {
              label: "驳回",
              value: 3
            },
            {
              label: "已取消",
              value: 2
            }
          ],
          filterMultiple: false,
          filterMethod(value, row) {
            return row.fstatus == value;
          },
          render: (h, params) => {
            let txt = "";
            switch (params.row.fstatus) {
              case -1:
                txt = "草稿";
                break;
              case 0:
                txt = "待发布";
                break;
              case 1:
                txt = "已发布";
                break;
              case 2:
                txt = "已取消";
                break;
              case 3:
                txt = "驳回";
                break;
              default:
                break;
            }

            return h(
              "p",
              {
                style: {
                  marginRight: "15px"
                }
              },
              txt
            );
          }
        },
        {
          title: "浏览量",
          key: "fviews",
          width: 100,
          align: "center",
          sortable: "custom",
          render: (h, params) => {
            return h(
              "p",
              {
                style: {
                  marginRight: "15px"
                }
              },
              params.row.fviews
            );
          }
        },
        {
          title: "提交时间",
          key: "flastupdatetime",
          width: 200,
          align: "center",
          sortable: "custom",
          render: (h, params) => {
            return h(
              "p",
              {
                style: {
                  marginRight: "5px"
                }
              },
              moment(params.row.flastupdatetime).format('YYYY-MM-DD HH:mm:ss')
            );
          }
        },
        {
          title: "操作",
          // fixed: 'right',
          align: "center",
          width: 300,
          render: (h, params) => {
            if (params.row.fstatus == -1) {
              //草稿
              return h("div", [
                h(
                  "span",
                  {
                    class: "btn",
                    on: {
                      click: () => {
                        this.delModal = true;
                        this.ModalForm.fid = params.row.fid;
                      }
                    }
                  },
                  "删除"
                ),
                h(
                  "span",
                  {
                    class: "btn",
                    on: {
                      click: () => {
                        this.$router.push({
                          path: "/supplier/reissueTheBid",
                          query: {
                            fid: params.row.fid,
                          }
                        });
                      }
                    }
                  },
                  "修改"
                ),
                h(
                  "span",
                  {
                    class: "btn",
                    on: {
                      click: () => {
                        sendManagerInfo({
                          id: params.row.fid
                        }).then(res => {
                          if (res.code == 200) {
                            this.$Message.success("提交信息成功");
                            this.getManagerInfo();
                          } else {
                            this.$Message.warning(res.message);
                          }
                        });
                      }
                    }
                  },
                  "提交信息"
                )
              ]);
            } else if (params.row.fstatus == 3) {
              //驳回
              return h("div", [
                h(
                  "span",
                  {
                    class: "btn",
                    on: {
                      click: () => {
                        this.delModal = true;
                        this.ModalForm.fid = params.row.fid;
                      }
                    }
                  },
                  "删除"
                ),
                h(
                  "span",
                  {
                    class: "btn",
                    on: {
                      click: () => {
                        this.$router.push({
                          path: "/supplier/reissueTheBid",
                          query: {
                            fid: params.row.fid,
                          }
                        });
                      }
                    }
                  },
                  "修改"
                ),
                h(
                  "span",
                  {
                    class: "btn",
                    on: {
                      click: () => {
                        sendManagerInfo({
                          fid: params.row.fid
                        }).then(res => {
                          if (res.data.code == 200) {
                            Message.warning("提交信息成功");
                          } else {
                            Message.warning(res.data.msg);
                          }
                        });
                      }
                    }
                  },
                  "提交信息"
                ),
                h(
                  "span",
                  {
                    class: "btn",
                    on: {
                      click: () => {
                        this.rejectReason = params.row.fmemo;
                        this.ModalForm.fid = params.row.fid;
                        this.ModalForm.type = params.row.finfotype;
                        this.rejectModal = true;
                      }
                    }
                  },
                  "驳回理由"
                )
              ]);
            } else if (params.row.fstatus == 2) {
              //已取消
              return h("div", [
                h(
                  "span",
                  {
                    class: "btn",
                    on: {
                      click: () => {
                        // let toTaskLog = this.$router.resolve({
                        //   path: "/infoDetails",
                        //   query: { fid: params.row.fid, type: 1 }
                        // });
                        window.open('https://www.chinabidding.cn/public/bidagency/index.html#/infoDetails?fid='+ params.row.fid + '&type=1');
                        // this.$router.push({ path: '/infoDetails', query: { fid: params.row.fid, type: 1 } });
                      }
                    }
                  },
                  "查看"
                )
              ]);
            } else if (params.row.fstatus == 0) {
              //待发布
              return h("div", [
                  h(
                    "span",
                    {
                      class: "btn",
                      on: {
                        click: () => {
                          // let toTaskLog = this.$router.resolve({
                          //   path: "/infoDetails",
                          //   query: { fid: params.row.fid, type: 1 }
                          // });
                          window.open('https://www.chinabidding.cn/public/bidagency/index.html#/infoDetails?fid='+ params.row.fid + "&type=1");
                          // this.$router.push({ path: '/infoDetails', query: { fid: params.row.fid, type: 1 } });
                        }
                      }
                    },
                    "查看"
                  )
                ]);
            } else if (params.row.fstatus == 1) {
              //已发布
              return h("div", [
                    h(
                      "span",
                      {
                        class: "btn",
                        on: {
                          click: () => {
                            console.log(1111111111);
                            // let toTaskLog = this.$router.resolve({
                            //   path: "/infoDetails",
                            //   query: { fid: params.row.fid }
                            // });
                            window.open('https://www.chinabidding.cn/public/bidagency/index.html#/infoDetails?fid='+ params.row.fid);
                            // this.$router.push({ path: '/infoDetails', query: { fid: params.row.fid } });
                          }
                        }
                      },
                      "查看"
                    ),
                    
                  ]);
            }
          }
        }
      ],
      dataInfo: []
    };
  },
  methods: {
    qimoChatClick() {
      var url =
        "https://tb.53kf.com/code/client/0ae6bb374440bbf180f02e04d57fb6962/3"; //游客
      var xmlhttp;
      if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
      } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      }
      xmlhttp.open("GET", "/cblcn/home/logincheck?t=" + Math.random(), true);
      xmlhttp.send();
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var result = xmlhttp.responseText;
          if (result) {
            var us = eval("(" + result + ")");
            if (us && us.record_id) {
              //免费用户
              if (us.cust_right_group == 0) {
                url =
                  "https://tb.53kf.com/code/client/0ae6bb374440bbf180f02e04d57fb6962/1";
              } else {
                //收费用户
                url =
                  "https://tb.53kf.com/code/client/0ae6bb374440bbf180f02e04d57fb6962/2";
              }
            }

            // window.open(url,"","modal=yes,width=800,height=600,resizable=no,scrollbars=no,left=100,top=100");
            window.open(
              url,
              "",
              "height=625,width=750,top=195,left=585,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=yes, status=no"
            );
          }
        }
      };
    },
    delOk() {
      //确认删除
      let that = this;
      let fid = Number(this.ModalForm.fid)
      
      delManagerInfo({
        id: fid
      }).then(res => {
        if (res.code == 200) {
          this.$Message.success("删除成功");
          let totalPage = Math.ceil((this.total - 1) / this.infoForm.pageSize)
          this.infoForm.pageNumber = this.infoForm.pageNumber > totalPage ? totalPage : this.infoForm.pageNumber,
          this.infoForm.pageNumber = this.infoForm.pageNumber < 1 ?1 :this.infoForm.pageNumber
          this.getManagerInfo();
        } else {
          this.$Message.warning(res.message);
        }
      });
    },
    delCancel() {
      //取消删除
      this.delModal = false;
    },
    rejectOk() {
      //驳回修改信息
      this.$router.push({
        path: "/postMessage",
        query: { fid: this.ModalForm.fid, type: this.ModalForm.type }
      });
    },
    rejectCancel() {
      //驳回取消
      this.rejectModal = false;
    },

    // 表头筛选
    filterChange(val) {
      if (val.key == "finfotype") {
        if (val._filterChecked.length) {
          this.infoForm.type = val._filterChecked[0];
          this.getManagerInfo();
        } else {
          this.infoForm.type = null;
          this.getManagerInfo();
        }
      } else if (val.key == "fstatus") {
        if (val._filterChecked.length) {
          this.infoForm.status = val._filterChecked[0];
          this.infoForm.pageNumber = 1
          this.getManagerInfo();
        } else {
          this.infoForm.status = null;
          this.getManagerInfo();
        }
      }
    },

    //表头排序
    sortChange(val) {
      this.infoForm.order = val.order;
        this.infoForm.sort = val.key;
      // if (val.column.key == "fviews") {
      //   this.infoForm.order = val.order;
      // this.infoForm.sort = val.key.replace(/f/g, '');
      // } else {
      //   this.infoForm.order = val.order;
      //   this.infoForm.sort = 'lastUpdateTime';
      // }
      this.getManagerInfo();

    },

    // 翻页函数
    changePage(val) {
      this.infoForm.pageNumber = val;
      this.getManagerInfo();
    },

    // 获取list列表
    getManagerInfo() {
      getManagerInfo(this.infoForm).then(res => {
        // res.data = {
        //   code: 200,
        //   msg: "200",
        //   isSuccess: true,
        //   data: {
        //     total: "234",
        //     lsxx: "1",
        //     infos: [
        //       {
        //         fid: "1583422193352704",
        //         ftitle: "2/3测试",
        //         finfotype: 405,
        //         fstatus: 1,
        //         fviews: 10,
        //         flastupdatetime: "2023-02-03",
        //         fsigntimestart: "2023-02-03",
        //         fsigntimeend: "2023-02-22",
        //         fmemo: "null",
        //         fsignshow: false,
        //         fsignamount: 0,
        //         fbidshow: true,
        //         fchangeshow: true
        //       },
        //       {
        //         fid: "1583418841972736",
        //         ftitle: "2/3测试",
        //         finfotype: 401,
        //         fstatus: 0,
        //         fviews: 0,
        //         flastupdatetime: "2023-02-03",
        //         fsigntimestart: "2023-02-03",
        //         fsigntimeend: "2023-02-22",
        //         fsignshow: true,
        //         fsignamount: 1,
        //         fbidshow: false,
        //         fchangeshow: false
        //       },
        //       {
        //         fid: "1583378492203008",
        //         ftitle: "测试短信发送",
        //         finfotype: 401,
        //         fstatus: 1,
        //         fviews: 18,
        //         flastupdatetime: "2023-02-03",
        //         fsigntimestart: "2023-02-03",
        //         fsigntimeend: "2023-02-07",
        //         fmemo: "null",
        //         fsignshow: true,
        //         fsignamount: 2,
        //         fbidshow: true,
        //         fchangeshow: true
        //       },
        //       {
        //         fid: "1583375424143360",
        //         ftitle: "测试支付2",
        //         finfotype: 401,
        //         fstatus: 1,
        //         fviews: 13,
        //         flastupdatetime: "2023-02-03",
        //         fsigntimestart: "2023-02-03",
        //         fsigntimeend: "2023-02-07",
        //         fmemo: "null",
        //         fsignshow: true,
        //         fsignamount: 3,
        //         fbidshow: true,
        //         fchangeshow: true
        //       },
        //       {
        //         fid: "1583078991732736",
        //         ftitle: "测试支付",
        //         finfotype: 401,
        //         fstatus: 1,
        //         fviews: 21,
        //         flastupdatetime: "2023-02-02",
        //         fsigntimestart: "2023-02-02",
        //         fsigntimeend: "2023-02-06",
        //         fmemo: "null",
        //         fsignshow: true,
        //         fsignamount: 10,
        //         fbidshow: true,
        //         fchangeshow: true
        //       },
        //       {
        //         fid: "1583067900514304",
        //         ftitle: "测试支付失败4",
        //         finfotype: 401,
        //         fstatus: 1,
        //         fviews: 21,
        //         flastupdatetime: "2023-02-02",
        //         fsigntimestart: "2023-02-02",
        //         fsigntimeend: "2023-02-06",
        //         fmemo: "null",
        //         fsignshow: true,
        //         fsignamount: 2,
        //         fbidshow: true,
        //         fchangeshow: true
        //       },
        //       {
        //         fid: "1583055059038208",
        //         ftitle: "测试支付失败3",
        //         finfotype: 401,
        //         fstatus: 1,
        //         fviews: 6,
        //         flastupdatetime: "2023-02-02",
        //         fsigntimestart: "2023-02-02",
        //         fsigntimeend: "2023-02-06",
        //         fmemo: "null",
        //         fsignshow: true,
        //         fsignamount: 1,
        //         fbidshow: true,
        //         fchangeshow: true
        //       },
        //       {
        //         fid: "1583049171763200",
        //         ftitle: "测试支付失败2",
        //         finfotype: 401,
        //         fstatus: 1,
        //         fviews: 1,
        //         flastupdatetime: "2023-02-02",
        //         fsigntimestart: "2023-02-02",
        //         fsigntimeend: "2023-02-06",
        //         fmemo: "null",
        //         fsignshow: true,
        //         fsignamount: 1,
        //         fbidshow: true,
        //         fchangeshow: true
        //       },
        //       {
        //         fid: "1583043134676993",
        //         ftitle: "测试支付失败",
        //         finfotype: 401,
        //         fstatus: 1,
        //         fviews: 11,
        //         flastupdatetime: "2023-02-02",
        //         fsigntimestart: "2023-02-02",
        //         fsigntimeend: "2023-02-06",
        //         fmemo: "null",
        //         fsignshow: true,
        //         fsignamount: 1,
        //         fbidshow: true,
        //         fchangeshow: true
        //       },
        //       {
        //         fid: "1583040544378880",
        //         ftitle: "测试支付",
        //         finfotype: 401,
        //         fstatus: 1,
        //         fviews: 3,
        //         flastupdatetime: "2023-02-02",
        //         fsigntimestart: "2023-02-02",
        //         fsigntimeend: "2023-02-06",
        //         fmemo: "null",
        //         fsignshow: true,
        //         fsignamount: 0,
        //         fbidshow: true,
        //         fchangeshow: true
        //       }
        //     ]
        //   },
        //   time: "1675730944661"
        // };
        if (res.code == 200) {
          this.dataInfo = res.result.list;
          this.total = Number(res.result.total);
        } else{
          this.$Message.warning(res.message)
        }
      });
    },

    //搜索
    search() {
      this.getManagerInfo();
    },

    reset() {
      this.infoForm.keyword = "";
      this.getManagerInfo();
    }
  },
  mounted() {
    this.getManagerInfo();
  }
};
</script>

<style lang="less" scoped>
.InformationManagement {
  background: #fff;
  padding: 21px 24px;
  .title {
    padding: 0px 12px;
    height: 59px;
    line-height: 59px;
    position: relative;
    color: #333;
    display: flex;
    justify-content: space-between;
    .left{
      font-size: 20px;
    }
    p {
      font-size: 14px;
      color: #999;
      font-weight: 400;
    }
    .searchBox {
        // display: flex;
        // align-items: center;
        // margin-left: 60px;
        display: flex;
          align-items: center;
        .search {
          display: flex;
          align-items: center;

          input{
            width: 563px;
            height: 37px;
            background: #F6F6F6;
            border-radius: 4px;
            border: 1px solid #E8E8E8;
            padding-left: 20px;
            margin-right: 20px;
            outline: none;
            
          }
          input::placeholder{
            font-size: 14px;
          }
        }
        .btn {
          width: 88px;
          height: 34px;
          line-height: 34px;
          border: none;
          color: #fff;
          background: #3F6EF5;
          border-radius: 4px;
          vertical-align: middle;
          cursor: pointer;
        }
        .reset {
          margin-left: 20px;
          width: 80px;
          height: 40px;
          line-height: 40px;
          // border: 2px solid #2d6eff;
          border-radius: 4px;
        }
      }
  }
  .title::before {
    content: "";
    position: absolute;
    top: 18px;
    left: 0;
    width: 3px;
    height: 20px;
    background-color: #2d6eff;
    border-radius: 15px;
  }
  .table {
    background-color: #fff;
    padding: 16px 0;
    /deep/ .pl46 {
      padding-left: 46px;
    }
    /deep/ .pr46 {
      padding-right: 46px;
    }

    /deep/ .ivu-table {
      font-size: 14px;
      color: #333 !important;
    }
    /deep/ .ivu-btn {
      font-size: 14px;
    }
    /deep/ .ivu-table th {
      height: 47px !important;
      background-color: #f1f5fb;
      font-size: 14px !important;
      color: #333;
    }
    /deep/ .ivu-table td {
      height: 62px !important;
    }
    /deep/ .ivu-table-wrapper {
      border: none;
    }
    /deep/ .ivu-table:after {
      width: 0px;
    }
    /deep/.ellipsis {
      width: 180px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .page {
      padding-top: 32px;
      padding-bottom: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      //   /deep/ .ivu-page-item-active {
      //     background-color: #017aff;
      //     a {
      //       color: #fff;
      //     }
      //   }
    }

    /deep/ .btn {
      font-size: 14px;
      color: #5489ff !important;
      cursor: pointer !important;
      margin: 0 3px;
    }

    /deep/ .redDot {
      position: relative;
    }

    /deep/ .redDot::after {
      content: "";
      width: 8px;
      height: 8px;
      background-color: red;
      border-radius: 50%;
      position: absolute;
      top: 0;
      right: -12px;
    }
  }
  .service-common {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    width: 60px;
    // height: 300px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 110;
    font-size: 12px;
    color: #888;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);

    div {
      text-align: center;
      padding: 5px 0px;
      // flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      cursor: pointer;
      .iconfont {
        font-size: 22px;
      }
      .firstP {
        margin-top: -5px;
      }
    }
    div:hover {
      color: #53adfb;
    }

    .promotion {
      padding-top: 0px;
      .iconfont {
        font-size: 27px;
      }
    }
    .service {
      padding-top: 2px;
      padding-bottom: 10px;
      .iconfont {
        font-size: 25px;
      }
      .firstP {
        margin-top: -7px;
      }
    }
  }
}
</style>
