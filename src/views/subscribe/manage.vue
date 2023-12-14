<template>
    <div id="subscribe-manage">
        <BindWechatModal v-if="wechatFlag" @closeWechat="closeWechat"></BindWechatModal>
        <Modal v-model="delFlag" title="重要提醒：">
            <p>将删除包括该订阅条件的微信、短信、邮件订阅服务，请确认是否删除？</p>
            <div slot="footer">
                <Button type="text" @click="delFlag = false">我再想想</Button>
                <Button type="primary" @click="confirm">彻底删除</Button>
            </div>
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
        <Card>
            <Tabs v-model="changeName">
                <TabPane label="招标与采购订阅" name="name1">
                    <p style="margin:10px 0;">【招标与采购订阅】</p>
                    <Table :columns="columnTend" border :data="groupList1">
                        <template slot-scope="{row}" slot="email">
                            <!-- <Button type="success" size="small" v-if="row.isEmail" @click="unsub(0,row.id)">已启用</Button>
                            <Button type="error" size="small" v-else @click="subscribe(0,row.id)">未启用</Button> -->
                            <i-switch :value="row.isEmail" @on-change="changeStatus(row,0)">
                                <span slot="open">开</span>
                                <span slot="close">关</span>
                            </i-switch>
                        </template>
                        <template slot-scope="{row,index}" slot="wechat">
                            <!-- <Button type="success" size="small" v-if="row.isWechat"
                                @click="unsub(1,row.id)">已启用</Button>
                            <Button type="error" size="small" v-else @click="subscribe(1,row.id)">未启用</Button> -->
                            <i-switch v-model="groupList1[index].isWechat" @on-change="changeStatus(row,1)">
                                <span slot="open">开</span>
                                <span slot="close">关</span>
                            </i-switch>
                        </template>
                        <template slot-scope="{row}" slot="message">
                            <!-- <Button type="success" size="small" v-if="row.isSms" @click="unsub(2,row.id)">已启用</Button>
                            <Button type="error" size="small" v-else @on-change="subscribe(2,row.id)">未启用</Button> -->
                            <i-switch :value="row.isSms" @on-change="changeStatus(row,2)">
                                <span slot="open">开</span>
                                <span slot="close">关</span>
                            </i-switch>
                        </template>

                        <template slot-scope="{row}" slot="app">
                            <!-- <Button type="error" size="small"  v-if="row.isApp"
                                @click="unsub(3,row.id)">已启用</Button>
                            <Button type="primary" size="small"  v-else @click="subscribe(3,row.id)">未启用</Button> -->

                              <i-switch :value="row.isApp" @on-change="changeStatus(row,3)">
                                <span slot="open">开</span>
                                <span slot="close">关</span>
                            </i-switch>
                        </template>

                        <template slot-scope="{row}" slot="area">
                            <p class="nowrap">{{ row.area }}</p>
                        </template>
                        <template slot-scope="{row}" slot="action">
                            <Button type="primary" @click="set(row,0)">编辑</Button>
                            <Button type="error" @click="del(row.id)">删除</Button>
                        </template>
                    </Table>
                </TabPane>
                <TabPane label="前期拟在建订阅" name="name2">
                    <p style="margin:10px 0;">【前期拟在建订阅】</p>
                    <Table :columns="columnBuild" border :data="groupList2">
                        <template slot-scope="{row}" slot="email">
                            <!-- <Button type="success" size="small" v-if="row.isEmail" @click="unsub(0,row.id)">已启用</Button>
                            <Button type="error" size="small" v-else @click="subscribe(0,row.id)">未启用</Button> -->
                            <i-switch :value="row.isEmail" @on-change="changeStatus(row,0)">
                                <span slot="open">开</span>
                                <span slot="close">关</span>
                            </i-switch>
                        </template>
                        <template slot-scope="{row,index}" slot="wechat">
                            <!-- <Button type="success" size="small" v-if="row.isWechat" @click="unsub(1,row.id)">已启用</Button>
                            <Button type="error" size="small" v-else @click="subscribe(1,row.id)">未启用</Button> -->
                            <i-switch v-model="groupList2[index].isWechat" @on-change="changeStatus(row,1)">
                                <span slot="open">开</span>
                                <span slot="close">关</span>
                            </i-switch>
                        </template>
                        <template slot-scope="{row}" slot="message">
                            <!-- <Button type="success" size="small" v-if="row.isSms" @click="unsub(2,row.id)">已启用</Button>
                            <Button type="error" size="small" v-else @click="subscribe(2,row.id)">未启用</Button> -->
                            <i-switch :value="row.isSms" @on-change="changeStatus(row,2)">
                                <span slot="open">开</span>
                                <span slot="close">关</span>
                            </i-switch>
                        </template>

                        <template  slot-scope="{row}" slot="app">
                            <!-- <Button type="error" size="small"  v-if="row.isApp"
                                @click="unsub(3,row.id)">已启用</Button>
                            <Button type="primary" size="small"  v-else @click="subscribe(3,row.id)">未启用</Button> -->

                              <i-switch :value="row.isApp" @on-change="changeStatus(row,3)">
                                <span slot="open">开</span>
                                <span slot="close">关</span>
                            </i-switch>
                        </template>

                        <template slot-scope="{row}" slot="area">
                            <p class="nowrap">{{ row.area }}</p>
                        </template>

                        <template slot-scope="{row}" slot="action">
                            <Button type="primary" @click="set(row,1)">编辑</Button>
                            <Button type="error" @click="del(row.id)">删除</Button>
                        </template>
                    </Table>

                </TabPane>
            </Tabs>
        </Card>
    </div>
</template>

<script>
    import {
        ztbSearch,
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
        // 招标与采购
    } from "@/api/index";
    import Cookies from "js-cookie";
    import BindWechatModal from "@/views/my-components/xboot/bindWechatModal.vue"

    export default {
        name: "subscribe-manage",
        components: {
          BindWechatModal
        },
        data() {
            return {
                wechatFlag: false,
                changeName: 'name1',
                itemFlag: -1,
                userInfo: {},
                searchType: 0,
                currentPage: 1,
                loadingFlag: false,
                newArea: [{
                        title: '北京',
                        value: 1
                    },
                    {
                        title: '天津',
                        value: 3
                    },
                    {
                        title: '河北',
                        value: 5
                    },
                    {
                        title: '山西',
                        value: 6
                    },
                    {
                        title: '内蒙古',
                        value: 7
                    },
                    {
                        title: '上海',
                        value: 2
                    },
                    {
                        title: '山东',
                        value: 16
                    },
                    {
                        title: '江苏',
                        value: 11
                    },
                    {
                        title: '安徽',
                        value: 13
                    },
                    {
                        title: '江西',
                        value: 15
                    },
                    {
                        title: '浙江',
                        value: 12
                    },
                    {
                        title: '福建',
                        value: 14
                    },
                    {
                        title: '湖北',
                        value: 18
                    },
                    {
                        title: '湖南',
                        value: 19
                    },
                    {
                        title: '河南',
                        value: 17
                    },
                    {
                        title: '广东',
                        value: 20
                    },
                    {
                        title: '广西',
                        value: 21
                    },
                    {
                        title: '海南',
                        value: 22
                    },
                    {
                        title: '辽宁',
                        value: 8
                    },
                    {
                        title: '吉林',
                        value: 9
                    },
                    {
                        title: '黑龙江',
                        value: 10
                    }, {
                        title: '陕西',
                        value: 26
                    },
                    {
                        title: '甘肃',
                        value: 28
                    },
                    {
                        title: '宁夏',
                        value: 31
                    },
                    {
                        title: '新疆',
                        value: 30
                    },
                    {
                        title: '青海',
                        value: 29
                    }, {
                        title: '重庆',
                        value: 4
                    },
                    {
                        title: '四川',
                        value: 27
                    },
                    {
                        title: '贵州',
                        value: 23
                    },
                    {
                        title: '云南',
                        value: 24
                    },
                    {
                        title: '西藏',
                        value: 25
                    },
                    {
                        title: '跨省',
                        value: 36
                    },
                    {
                        title: '香港',
                        value: 32
                    },
                    {
                        title: '澳门',
                        value: 33
                    },
                    {
                        title: '台湾',
                        value: 34
                    }
                ],
                optionList: {
                    table1: [{
                            value: "-1",
                            name: "全部栏目"
                        },
                        {
                            value: "3030",
                            name: "VIP项目"
                        },
                        {
                            value: "3020",
                            name: "项目备案核准"
                        },
                        {
                            value: "3050",
                            name: "项目动态"
                        },
                        {
                            value: "3070",
                            name: "项目跟踪"
                        },
                        {
                            value: "3080",
                            name: "重点招商项目"
                        },
                        {
                            value: "3090",
                            name: "国外商机"
                        },
                    ],
                    table2: [{
                            name: "工程招标",
                            value: 1
                        },
                        {
                            name: "货物招标",
                            value: 2
                        },
                        {
                            name: "服务招标",
                            value: 3
                        },
                        {
                            name: "中标公示",
                            value: 4
                        },
                        {
                            name: "招标预告",
                            value: 5
                        },
                        {
                            name: "政府采购",
                            value: 6
                        },
                        {
                            name: "企业采购",
                            value: 7
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
                        }
                    ],
                    newArea: [{
                            title: '北京',
                            value: 1
                        },
                        {
                            title: '天津',
                            value: 3
                        },
                        {
                            title: '河北',
                            value: 5
                        },
                        {
                            title: '山西',
                            value: 6
                        },
                        {
                            title: '内蒙古',
                            value: 7
                        },
                        {
                            title: '上海',
                            value: 2
                        },
                        {
                            title: '山东',
                            value: 16
                        },
                        {
                            title: '江苏',
                            value: 11
                        },
                        {
                            title: '安徽',
                            value: 13
                        },
                        {
                            title: '江西',
                            value: 15
                        },
                        {
                            title: '浙江',
                            value: 12
                        },
                        {
                            title: '福建',
                            value: 14
                        },
                        {
                            title: '湖北',
                            value: 18
                        },
                        {
                            title: '湖南',
                            value: 19
                        },
                        {
                            title: '河南',
                            value: 17
                        },
                        {
                            title: '广东',
                            value: 20
                        },
                        {
                            title: '广西',
                            value: 21
                        },
                        {
                            title: '海南',
                            value: 22
                        },
                        {
                            title: '辽宁',
                            value: 8
                        },
                        {
                            title: '吉林',
                            value: 9
                        },
                        {
                            title: '黑龙江',
                            value: 10
                        }, {
                            title: '陕西',
                            value: 26
                        },
                        {
                            title: '甘肃',
                            value: 28
                        },
                        {
                            title: '宁夏',
                            value: 31
                        },
                        {
                            title: '新疆',
                            value: 30
                        },
                        {
                            title: '青海',
                            value: 29
                        }, {
                            title: '重庆',
                            value: 4
                        },
                        {
                            title: '四川',
                            value: 27
                        },
                        {
                            title: '贵州',
                            value: 23
                        },
                        {
                            title: '云南',
                            value: 24
                        },
                        {
                            title: '西藏',
                            value: 25
                        },
                        {
                            title: '跨省',
                            value: 36
                        },
                        {
                            title: '香港',
                            value: 32
                        },
                        {
                            title: '澳门',
                            value: 33
                        },
                        {
                            title: '台湾',
                            value: 34
                        }
                    ],
                    category1: [{
                            name: "交通运输",
                            value: "1"
                        },
                        {
                            name: "能源化工--电力",
                            value: "2"
                        },
                        {
                            name: "能源化工--化工",
                            value: "3"
                        },
                        {
                            name: "冶金矿产",
                            value: "4"
                        },
                        {
                            name: "机械电子",
                            value: "5"
                        },
                        {
                            name: "网络通讯计算机",
                            value: "6"
                        },
                        {
                            name: "市政房地产建筑",
                            value: "7"
                        },
                        {
                            name: "水利",
                            value: "8"
                        },
                        {
                            name: "环保",
                            value: "9"
                        },
                        {
                            name: "医疗卫生",
                            value: "10"
                        },
                        {
                            name: "科技文教旅游",
                            value: "11"
                        },
                        {
                            name: "出版印刷",
                            value: "12"
                        },
                        {
                            name: "轻工纺织食品",
                            value: "13"
                        },
                        {
                            name: "农林牧渔",
                            value: "14"
                        },
                        {
                            name: "商业服务",
                            value: "15"
                        },
                        {
                            name: "园林绿化",
                            value: "16"
                        }
                    ],
                    category2: [
                        [{
                                name: "高速公路、道路",
                                value: "101"
                            },
                            {
                                name: "桥梁、立交桥",
                                value: "102"
                            },
                            {
                                name: "机场",
                                value: "103"
                            },
                            {
                                name: "铁路、轨道交通",
                                value: "104"
                            },
                            {
                                name: "航道、水利枢纽",
                                value: "105"
                            },
                            {
                                name: "港口、码头、泊位、渔港",
                                value: "106"
                            },
                            {
                                name: "客运站、交通枢纽",
                                value: "107"
                            },
                            {
                                name: "隧道",
                                value: "108"
                            },
                            {
                                name: "物流",
                                value: "109"
                            }
                        ],
                        [{
                                name: "火电",
                                value: "201"
                            },
                            {
                                name: "核电",
                                value: "202"
                            },
                            {
                                name: "水电",
                                value: "203"
                            },
                            {
                                name: "风电",
                                value: "204"
                            },
                            {
                                name: "电网建设",
                                value: "205"
                            },
                            {
                                name: "太阳能、光伏发电",
                                value: "206"
                            },
                            {
                                name: "垃圾焚烧发电及其他新能源发电",
                                value: "207"
                            },
                            {
                                name: "水泥余热发电",
                                value: "208"
                            }
                        ],
                        [{
                                name: "天然气、输气管道",
                                value: "301"
                            },
                            {
                                name: "石油、石化",
                                value: "302"
                            },
                            {
                                name: "有机化学",
                                value: "303"
                            },
                            {
                                name: "无机化学",
                                value: "304"
                            },
                            {
                                name: "煤化工",
                                value: "305"
                            }
                        ],
                        [{
                                name: "选煤厂、煤矿、尾矿",
                                value: "401"
                            },
                            {
                                name: "矿山、矿产、矿石",
                                value: "402"
                            },
                            {
                                name: "水泥生产线、混凝土",
                                value: "403"
                            },
                            {
                                name: "金属冶炼",
                                value: "404"
                            },
                            {
                                name: "钢厂、钢结构",
                                value: "405"
                            },
                            {
                                name: "玻璃及其他",
                                value: "406"
                            }
                        ],
                        [{
                                name: "机械产品、厂房、生产车间",
                                value: "501"
                            },
                            {
                                name: "医疗器械、电子产品、电器产品",
                                value: "502"
                            },
                            {
                                name: "造船、造车",
                                value: "503"
                            }
                        ],
                        [{
                            name: "网络通讯计算机",
                            value: "601"
                        }],
                        [{
                                name: "房地产建筑",
                                value: "701"
                            },
                            {
                                name: "供热",
                                value: "702"
                            },
                            {
                                name: "排水",
                                value: "704"
                            },
                            {
                                name: "土地治理",
                                value: "705"
                            }
                        ],
                        [{
                                name: "水厂、供水",
                                value: "801"
                            },
                            {
                                name: "灌溉",
                                value: "802"
                            },
                            {
                                name: "围海造地",
                                value: "803"
                            },
                            {
                                name: "水库、引水",
                                value: "804"
                            },
                            {
                                name: "防护堤、防洪堤",
                                value: "805"
                            }
                        ],
                        [{
                                name: "垃圾",
                                value: "901"
                            },
                            {
                                name: "水处理",
                                value: "902"
                            },
                            {
                                name: "废弃物处理",
                                value: "903"
                            },
                            {
                                name: "脱硫脱硝、除尘除渣",
                                value: "904"
                            },
                            {
                                name: "污泥治理",
                                value: "905"
                            }
                        ],
                        [{
                                name: "医院",
                                value: "1001"
                            },
                            {
                                name: "制药制剂",
                                value: "1002"
                            }
                        ],
                        [{
                            name: "科技文教旅游",
                            value: "1105"
                        }],
                        [{
                            name: "出版印刷",
                            value: "1205"
                        }],
                        [{
                                name: "纺织",
                                value: "1301"
                            },
                            {
                                name: "食品生产",
                                value: "1302"
                            },
                            {
                                name: "肉类加工、屠宰",
                                value: "1303"
                            },
                            {
                                name: "造纸",
                                value: "1304"
                            },
                            {
                                name: "粮食储备",
                                value: "1305"
                            },
                            {
                                name: "卷烟物流",
                                value: "1306"
                            },
                            {
                                name: "其他",
                                value: "1307"
                            }
                        ],
                        [{
                            name: "农林牧渔",
                            value: "1405"
                        }],
                        [{
                            name: "商业服务",
                            value: "1505"
                        }],
                        [{
                            name: "园林绿化",
                            value: "1605"
                        }]
                    ],
                    stage: [{
                            value: "0",
                            name: "全部阶段"
                        },
                        {
                            value: "2",
                            name: "项目建议书阶段"
                        },
                        {
                            value: "3",
                            name: "可行性研究报告阶段"
                        },
                        {
                            value: "4",
                            name: "项目审批核查"
                        },
                        {
                            value: "6",
                            name: "工程设计"
                        },
                        {
                            value: "10",
                            name: "施工准备"
                        },
                        {
                            value: "11",
                            name: "在建阶段"
                        }
                    ],
                    time: ["近一天", "近一周", "近两周", "近一月", "近三月", "近半年", "近一年"]
                },
                index: 1,
                bindArr: ["邮件", "微信", "手机", "app"],
                bindFlag: false,
                bindNum: 0,
                delId: "",
                delFlag: false,
                columnTend: [{
                        title: "关键词",
                        key: "keyword",
                        align: "center",
                        minWidth: 120
                    },
                    {
                        title: "范围",
                        key: "range",
                        align: "center",
                        minWidth: 120
                    },
                    {
                        title: "地区",
                        slot: "area",
                        align: "center",
                        minWidth: 150,
                    },
                    {
                        title: "类型",
                        key: "infoType",
                        align: "center",
                        minWidth: 100
                    },
                    {
                        title: "邮件",
                        slot: "email",
                        align: "center",
                        minWidth: 100
                    },
                    {
                        title: "微信",
                        slot: "wechat",
                        align: "center",
                        minWidth: 100
                    },
                    {
                        title: "短信",
                        slot: "message",
                        align: "center",
                        minWidth: 100
                    },
                    {
                        title: "采招圈APP",
                        slot: "app",
                        align: "center",
                        minWidth: 100
                    },
                    {
                        title: "创建时间",
                        key: "createTime",
                        align: "center",
                        minWidth: 120,

                    },
                    {
                        title: "操作",
                        slot: "action",
                        align: "center",
                        fixed: "right",
                        width: 260
                    }
                ],
                columnBuild: [{
                        title: "关键词",
                        key: "keyword",
                        align: "center",
                        minWidth: 120
                    },
                    {
                        title: "地区",
                        slot: "area",
                        align: "center",
                        minWidth: 150,
                    },
                    {
                        title: "一级行业",
                        key: "category1",
                        align: "center",
                        minWidth: 150
                    },
                    {
                        title: "二级行业",
                        key: "category2",
                        align: "center",
                        minWidth: 150
                    },
                    {
                        title: "进展阶段",
                        key: "stage",
                        align: "center",
                        minWidth: 150
                    },
                    {
                        title: "邮件",
                        slot: "email",
                        align: "center",
                        minWidth: 100
                    },
                    {
                        title: "微信",
                        slot: "wechat",
                        align: "center",
                        minWidth: 100
                    },
                    {
                        title: "短信",
                        slot: "message",
                        align: "center",
                        minWidth: 100
                    },
                    {
                        title: "采招圈APP",
                        slot: "app",
                        align: "center",
                        minWidth: 100
                    },
                    {
                        title: "创建时间",
                        key: "createTime",
                        align: "center",
                        minWidth: 120,

                    },
                    {
                        title: "操作",
                        slot: "action",
                        align: "center",
                        fixed: "right",
                        width: 260
                    }
                ],
                tableData: [],
                rangeList: [{
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
                    }
                ],
                groupList1: [],
                groupList2: [],


            }
        },
        methods: {
            changeStatus(row,flag) {

                let status;
                let isShowWechat = false;
                // console.log(row.isSms,row.isApp);
                // console.log(row,flag);
                if(flag === 0){
                    status = row.isEmail;
                }else if(flag === 1){
                    status = row.isWechat;
                    isShowWechat = true;
                }else if(flag === 2){
                    status = row.isSms;
                }else if(flag === 3){
                    status = row.isApp;
                }

                if(status){
                    this.unsub(flag,row.id);
                }else{
                    this.subscribe(flag,row, isShowWechat);
                }
            },
            unsub(type, groupId) {
                disable({
                    type,
                    groupId
                }).then(res => {
                    if (res.success) {
                        this.$Message.success(res.message);
                        this.getGroup();
                    }
                });
            },
            subscribe(type, row, isShowWechat) {
                this.bindNum = type;
                enable({
                    type,
                    groupId: row.id,
                    update: true,
                    total: 0
                }).then(res => {
                    // console.log(res);
                    if (!res.success) {
                        if (res.code == "201") {
                            // 未绑定
                            if (isShowWechat){
                              this.wechatFlag = true;
                              let that = this;
                              console.log(this.changeName)
                              if (this.changeName == 'name1'){
                                this.groupList1[row._index].isWechat = false;
                              } else {
                                this.groupList2[row._index].isWechat = false;
                              }
                            } else {
                              this.bindFlag = true;
                            }
                        }
                    } else {
                        this.$Message.success("订阅成功");
                        this.getGroup();
                    }
                });
            },
            goBind() {
                this.$router.push({
                    name: "ownspace_index"
                });
                this.bindFlag = false;
            },
            // getGroup() {
            //     var that = this;
            //     getAllGroup().then(res => {
            //         if (res.success) {

            //             res.result.forEach((item, index) => {
            //                 item.updateTime = item.updateTime;
            //                 item.range = that.rangeList[item.searchRange];
            //                 item.index = index + 1;
            //                 item.area = item.area == "" ? "全部" : item.area.split(",").length;
            //                 item.infoType = item.infoType == "" ? "全部" : item.infoType.split(",")
            //                 .length;
            //                 item.createTime = item.createTime
            //             });
            //             that.tableData = res.result;
            //         }
            //     });
            // },
            set(row, flag) {
                let pageNumber = Math.ceil((row.index + 1) / 5);
                // console.log(pageNumber);
                if (flag === 0) {

                    this.$router.push({
                        name: "tendering",
                        params: {
                            id: row.id,
                            pageNumber
                        }
                    });
                } else {
                    this.$router.push({
                        name: "building",
                        params: {
                            id: row.id,
                            pageNumber
                        }
                    });

                }
            },
            del(id) {
                this.delFlag = true;
                this.delId = id;
            },
            confirm() {
                removeGroup({
                    ids: [this.delId]
                }).then(res => {
                    if (res.success) {
                        this.$Message.success("成功删除");
                        this.delFlag = false;
                        this.getGroup();
                    }
                });
            },
            changePage(i) {
                if (this.searchType === 0) {
                    this.searchTend.page = i;
                    this.search0();
                } else if (this.searchType === 1) {
                    this.searchBuild.page = i;
                    this.search1();
                }


            },

            getGroup(flag) {
                getAllGroup().then(res => {
                    this.groupList1 = [];
                    this.groupList2 = [];
                        // console.log(res,'11111');

                    if (res.success) {
                        // res.result = res.result.filter(item => item.type === 0).reverse()
                        let list1 = [];
                        let list2 = [];
                        res.result.forEach(item => {
                            for (let key in item) {
                                if (item[key] == null) {
                                    item[key] = ""
                                }
                            }
                            if (item.type === 0) {
                                list1.push(item)
                            } else if (item.type === 1) {
                                list2.push(item)
                            }
                        })
                        list1.forEach((a, index) => {
                            a.updateTime = a.updateTime ? a.updateTime.split(" ")[0] : "";
                            this.rangeList.forEach(item => {
                                if (item.value === a.searchRange) {
                                    a.range = item.name;
                                }
                            })
                            if (a.area.length === 0 || a.area === "-1" || a.area.split(",").length ==
                                this.optionList.newArea.length) {
                                a.area = "全部地区"
                            } else {
                                let areaArr = []
                                a.area.split(",").forEach((obj, j) => {
                                    this.optionList.newArea.forEach(obj2 => {
                                        if (obj2.value === parseInt(obj)) {
                                            areaArr.push(obj2.title)
                                        }
                                    })
                                })
                                a.area = areaArr.join(",");
                            }
                            a.index = index;
                            if (a.infoType.length === 0) {
                                a.infoType = "全部类型"
                            } else {
                                let infoStr = []
                                a.infoType.split(",").forEach(obj => {
                                    this.optionList.table2.forEach(obj2 => {
                                        if (obj2.value === parseInt(obj)) {
                                            infoStr.push(obj2.name)
                                        }
                                    })
                                })
                                a.infoType = infoStr.join(",")
                            }
                            a.createTime = a.createTime ? a.createTime.split(" ")[0] : "无";
                            this.groupList1.push(a)

                        });
                        list2.forEach((a, index) => {
                            a.updateTime = a.updateTime ? a.updateTime.split(" ")[0] : "";
                             this.rangeList.forEach(item => {
                                if (item.value === a.searchRange) {
                                    a.range = item.name;
                                }
                            })
                            if (a.area.length === 0 || a.area === "-1" || a.area.split(",").length ==
                                this.optionList.newArea.length) {
                                a.area = "全部地区"
                            } else {
                                let areaArr = []
                                a.area.split(",").forEach((obj, j) => {
                                    this.optionList.newArea.forEach(obj2 => {
                                        if (obj2.value === parseInt(obj)) {
                                            areaArr.push(obj2.title)
                                        }
                                    })
                                })
                                a.area = areaArr.join(",");
                            }

                            if (a.infoType.length === 0) {
                                a.infoType = "全部类型"
                            } else {
                                let infoStr = []
                                a.infoType.split(",").forEach(obj => {
                                    this.optionList.table1.forEach(obj2 => {
                                        if (obj2.value === obj) {
                                            infoStr.push(obj2.name)
                                        }
                                    })
                                })
                                a.infoType = infoStr.join(",")
                            }
                            a.createTime = a.createTime.split(" ")[0];

                            let category1 = "全部一级行业";
                            let category2 = "全部二级行业";
                            this.optionList.category1.forEach(item => {
                                if (item.value == a.primaryIndustry) {
                                    category1 = item.name;
                                }
                            })
                            this.optionList.category2.forEach(item => {
                                item.forEach(el => {
                                    if (el.value == a.secondaryIndustry) {
                                        category2 = el.name;
                                    }
                                })
                            })
                            // console.log(a);
                            let stage = "全部阶段"
                            this.optionList.stage.forEach(item => {
                                if (item.value == a.stage) {
                                    stage = item.name;
                                }
                            })

                            a.category1 = category1;
                            a.category2 = category2;
                            a.stage = stage;
                            a.index = index;
                            this.groupList2.push(a)

                        });
                    }

                });
            },
            init() {
                let v = JSON.parse(Cookies.get("userInfo"));
                // 转换null为""
                for (let attr in v) {
                    if (v[attr] == null) {
                        v[attr] = "";
                    }
                }
                let str = JSON.stringify(v);
                this.userInfo = JSON.parse(str);
            },
            closeWechat(){
              this.wechatFlag = false;
            },
        },
        activated() {
            this.init();
            this.getGroup();

        },
        mounted() {
            // if (this.$route.query && this.$route.query.type == 1) {
            //     this.changeName = 'name2'
            // }
        },
        watch: {}
    }
</script>

<style lang="less">
    #subscribe-manage {


        .infoTitle:visited {
            color: #800080;
        }

        .page-box {
            height: 50px;
            margin-top: 20px;
        }

        .nowrap {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
</style>