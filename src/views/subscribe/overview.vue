<template>
    <div id="subscribe-overview">
        <Card>
            <Row gutter="20">
                <Col span="5">
                <ul class="group">
                    <li class="title">招标与采购信息
                        <Icon size="20" type="md-add" @click.stop="enter('tendering')" />
                    </li>
                    <li class="emptyTip" v-if="groupTend.length === 0">暂无订阅信息</li>
                    <li v-for="(item,i) in groupTend" :key="i" class="item" :class="{'active':tendFlag === i}"
                        @click="getSet(item,i,true)">{{item.name}}</li>
                </ul>
                <ul class="group">
                    <li class="title">拟在建项目信息
                        <Icon size="20" type="md-add" @click.stop="enter('building')" />
                    </li>
                    <li class="emptyTip" v-if="groupBuild.length === 0">暂无订阅信息</li>
                    <li v-for="(item,i) in groupBuild" :key="i" class="item" :class="{'active':buildFlag === i}"
                        @click="getSet(item,i,false)">{{item.name}}</li>
                </ul>
                </Col>
                <Col span="19">
                <Alert show-icon>当前选择：{{currentName}}</Alert>

                <Table :columns="columns1" :data="data1" :loading="loadingFlag">
                    <template slot-scope="{row}" slot="type">
                        <strong>【{{ row.type }}】</strong>
                    </template>
                    <template slot="action" slot-scope="{row}">
                        <infoButtons :row="row" :isIcon="true" />
                    </template>
                    <template slot-scope="{row}" slot="area">
                        <strong class="area">{{ row.area }}</strong>
                        <!-- getByArea -->
                    </template>
                    <template slot-scope="{row}" slot="title">
                        <a target="_blank" :href="row.url" class="infoTitle" v-html="row.title"></a>
                    </template>
                </Table>

                <p style="text-align:center; margin:20px 0;">
                    <Page :total="total" :page-size="30" @on-change="changePage" :current.sync="currentPage"
                        show-elevator />
                </p>

                </Col>
            </Row>
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
    import infoButtons from "@/views/my-components/xboot/info-buttons";
    import Cookies from "js-cookie";

    export default {
        name: "subscribe-overview",
        components: {
            infoButtons
        },
        data() {
            return {
                itemFlag: -1,
                tendFlag: -1,
                buildFlag: -1,
                columns1: [{
                        title: "类型",
                        slot: "type",
                        align: "center",
                        "minWidth": 90
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
                        align: "left",
                        tooltip: true,
                        minWidth: 380
                    },
                    {
                        title: "操作",
                        slot: "action",
                        align: "center",
                        width: 130
                    },
                    {
                        title: "发布时间",
                        key: "date",
                        minWidth: 90
                    }
                ],
                groupTend: [],
                groupBuild: [],
                userInfo: {},
                searchTend: {
                    keyword: "",
                    table: [""],
                    area: [""],
                    category: [""],
                    page: 1,
                    rows: 30,
                    searchRange: 0,
                    range: 1
                },
                searchBuild: {
                    keyword: "",
                    table: [""],
                    area: [""],
                    category1: [""],
                    category2: [""],
                    stage: [""],
                    page: 1,
                    rows: 30,
                    type: 0,
                    range: 0
                },
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
                total: 0,
                currentName: "",
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
                            value: 0
                        },
                        {
                            name: "货物招标",
                            value: 1
                        },
                        {
                            name: "服务招标",
                            value: 2
                        },
                        {
                            name: "中标公示",
                            value: 3
                        },
                        {
                            name: "招标预告",
                            value: 4
                        },
                        {
                            name: "政府采购",
                            value: 5
                        },
                        {
                            name: "企业采购",
                            value: 6
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
                data1: [],


            }
        },
        methods: {
            enter(name) {
                this.$router.push({
                    name: name
                });

            },
            getSet(item, index, flag) {
                this.currentName = item.name;
                this.currentPage = 1;
                this.searchTend.page = 1;
                this.searchBuild.page = 1;
                this.loadingFlag = true;
                if (flag) {
                    this.tendFlag = index;
                    this.buildFlag = -1;
                    // 招标与采购
                    this.searchType = 0;
                    this.searchTend.area = item.area;
                    this.searchTend.keyword = item.keyword;
                    this.searchTend.table = item.table;
                    this.searchTend.searchRange = item.searchRange;
                    this.searchTend.range = item.range;
                    this.searchTend.keywordLogic = item.keywordLogic;
                    if (this.searchTend.range == -1) {
                        /* this.searchTend.startTime = this.format(new Date(item.startTime), 'yyyy/MM/dd')
                        this.searchTend.endTime = this.format(new Date(item.endTime), 'yyyy/MM/dd') */
                        this.searchTend.startTime = item.startTime.slice(0, 10).replace(/-/g, '/');
                        this.searchTend.endTime = item.endTime.slice(0, 10).replace(/-/g, '/');
                    } else {
                        delete this.searchTend.startTime;
                        delete this.searchTend.endTime;
                    }
                    this.search0()
                } else {
                    // 前期拟在建
                    this.buildFlag = index;
                    this.tendFlag = -1;
                    this.searchType = 1;
                    this.searchBuild.area = item.area;
                    this.searchBuild.range = item.range;
                    this.searchBuild.keyword = item.keyword;
                    this.searchBuild.table = item.table;
                    this.searchBuild.category1 = item.category1;
                    this.searchBuild.category2 = item.category2;
                    this.searchBuild.stage = item.stage;
                    this.searchBuild.searchRange = item.searchRange;
                    this.searchBuild.keywordLogic = item.keywordLogic;
                    this.search1()
                }

            },
            search0() {

                // 招标与采购搜索
                this.data1 = [];
                ztbSearch(this.searchTend).then(res => {
                    this.index++
                    let arr = []
                    if (res.code == 502) {
                        if ("keyword".indexOf(res.message)) {
                            this.$Message.error("关键词不能包含特殊符号")
                        }
                    } else if (res.status == "OK") {
                        res.result.items.forEach(item => {
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
                            let nowArea = ""
                            this.newArea.forEach(areaItem => {
                                if (areaItem.value == item.area_id) {
                                    nowArea = areaItem.title
                                }
                            })

                            arr.push({
                                type: type,
                                area: nowArea,
                                title: item.title,
                                date: this.format(new Date(parseInt(item.publish_date)),
                                    'yyyy/MM/dd'),
                                realTitle: item.title,
                                is_collected: item.is_collected,
                                id: item.id,
                                url: item.url
                            });
                        });
                        this.data1 = arr;
                        if (res.result.total > 3000) {
                            this.total = 3000;
                        } else {
                            this.total = res.result.total;
                        }
                    } else if (res.status == "FAIL") {
                        this.data1 = [];
                        this.total = 0;
                        this.currentPage = 1;
                        this.searchTend.page = 1;
                    }
                    this.loadingFlag = false;
                });
            },
            search1() {
                this.data1 = [];
                nzjSearch(this.searchBuild).then(res => {
                    let arr = []
                    this.observerFlag = true;
                    if (res.status == "OK") {
                        var stage;
                        res.result.items.forEach((item, i) => {
                            this.optionList.stage.forEach(a => {
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
                            let newArea = ""
                            this.newArea.forEach(el => {
                                if (el.value == item.area_id) {
                                    newArea = el.title
                                }
                            })
                            arr.push({
                                area: item.area_id > 36 ? '未知' : newArea,
                                title: item.title,
                                realTitle: item.title,
                                category: parseInt(item.numa) < 1 || parseInt(item.numa) > 18 ?
                                    '未知' : this.optionList
                                    .category1[parseInt(item.numa) - 1].name,
                                stage: stage,
                                date: this.format(new Date(parseInt(item.publish_date)),
                                    'yyyy/MM/dd'),
                                is_collected: item.is_collected ? item.is_collected : 0,
                                id: item.id,
                                type,
                                url: item.url
                            });
                        });
                        this.data1 = arr;
                        this.total = res.result.total;
                    }
                    this.loadingFlag = false
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
                    if (res.success) {
                        this.groupTend = [];
                        this.groupBuild = [];
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
                            var item = {};
                            item.area = [];
                            a.area.split(",").forEach(a => {
                                if (a) {
                                    item.area.push(parseInt(a))
                                }
                            })
                            item.range = a.dateRange;
                            item.keyword = a.keyword;
                            item.searchRange = a.searchRange ? a.searchRange : 0;
                            item.table = a.infoType.split(",");
                            item.name = a.name;
                            item.startTime = a.startTime ? a.startTime : "";
                            item.endTime = a.endTime ? a.endTime : "";
                            item.id = a.id;
                            item.keywordLogic = a.keywordLogic || a.keywordLogic == 0 ? a.keywordLogic : 1;
                            this.groupTend.push(item);

                        });
                        // console.log(this.groupTend,"groupTend");
                        list2.forEach((a, index) => {
                            var item = {};
                            item.area = [];
                            a.area.split(",").forEach(b => {
                                if (b) {
                                    item.area.push(parseInt(b))
                                }
                            })
                            item.range = a.dateRange;
                            item.keyword = a.keyword;
                            item.searchRange = a.searchRange;
                            item.name = a.name;
                            item.id = a.id;
                            item.table = a.infoType.split(",");
                            item.category1 = a.primaryIndustry.split(",");
                            item.category2 = a.secondaryIndustry.split(",");
                            item.stage = a.stage.split(",");
                            item.keywordLogic = a.keywordLogic || a.keywordLogic == 0 ? a.keywordLogic : 1;
                          this.groupBuild.push(item);
                        });
                    }
                    if (this.groupTend.length > 0) {
                        this.getSet(this.groupTend[0], 0, true)
                    } else if (this.groupBuild.length > 0) {
                        this.getSet(this.groupBuild[0], 0, false)
                    } else {
                        this.data1 = [];
                        this.total = 0;
                        this.currentPage = 1;
                        this.searchTend.page = 1;
                        this.searchBuild.page = 1;
                        this.currentName = "";
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
            }
        },
        activated() {
            this.init();
            this.getGroup();

        },
        mounted() {},
        watch: {}
    }
</script>

<style lang="less">
    #subscribe-overview {

        .group {
            color: #333;

            .emptyTip {
                color: #666;
                font-size: 12px;
                text-align: center;
            }

            li {
                list-style: none;
                padding: 5px 10px;
                border-top: 1px solid #efefef;
                box-sizing: border-box;
                -moz-user-select: none;
                /*火狐*/
                -webkit-user-select: none;
                /*webkit浏览器*/
                -ms-user-select: none;
                /*IE10*/
                -khtml-user-select: none;
                /*早期浏览器*/
                user-select: none;

                &.item {
                    cursor: pointer;
                }

                &.item:hover {
                    background: #f0faff;
                    color: #2d8cff;
                }

                &.active {
                    color: #2d8cff;
                    background: #f0faff;
                    position: relative;

                    &::after {
                        content: "";
                        right: 0;
                        top: 0;
                        position: absolute;
                        background-color: #2d8cf0;
                        height: 100%;
                        width: 2px;
                    }
                }
            }

            .title {
                position: relative;
                font-size: 15px;

                i {
                    color: #333;
                    float: right;
                    transform: translate(-5px, 0px);
                    cursor: pointer;
                }
            }

            .item {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                text-indent: 1em;


            }

        }

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