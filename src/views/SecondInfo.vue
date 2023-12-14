<template>
    <div class="secondInfo">
        <Card>
            <Form ref="formData" :model="formData" inline :label-width="80" :rules="formValidate">
                <div>
                    <Tag class="infoType" type="border" :checkable="false" size="large" color="primary"
                        v-if="noticeType === '招标公告'">招标公告</Tag>
                    <Tag class="infoType" type="border" :checkable="false" size="large" color="success"
                        v-if="noticeType === '中标公告'">中标公告</Tag>
                    <Form-item label="标题" prop="title">
                        <Input type="text" v-model="formData.title" clearable placeholder="请输入公告标题"
                            style="width:900px" />
                    </Form-item>
                </div>
                <Row class="secondInfo_main">
                    <Col class="secondInfo_left">
                    <Row>
                        <Row>
                            <Form-item style="width:200px;" label="招标代理" prop="agent">
                                <Input type="text" v-model="formData.agent" clearable placeholder="请输入用户名" />
                            </Form-item>
                            <Form-item style="width:200px;" label="招标人" prop="bidder">
                                <Input type="text" v-model="formData.bidder" clearable placeholder="请输入手机号" />
                            </Form-item>
                        </Row>
                        <Row>
                            <Form-item style="width:200px;" label="地区" prop="area">
                                <Select v-model="formData.area" placeholder="请选择地区" clearable>
                                    <Option v-for="(item, i) in optionData.area" :key="i" :value="item.value">
                                        {{item.label}}
                                    </Option>
                                </Select>
                            </Form-item>
                            <Form-item style="width:200px;" label="标讯类别" prop="infoType">
                                <Select v-model="formData.infoType" placeholder="请选择类别地区" clearable>
                                    <Option v-for="(item, i) in optionData.infoType" :key="i" :value="item.value">
                                        {{item.label}}
                                    </Option>
                                </Select>
                            </Form-item>
                        </Row>
                        <Row>
                            <Form-item v-if="noticeType === '招标公告'" style="width:200px;" label="联系人" prop="contact">
                                <Input type="text" v-model="formData.contact" clearable placeholder="请输入联系人姓名" />
                            </Form-item>
                            <Form-item v-if="noticeType === '中标公告'" style="width:200px;" label="中标公司" prop="contact">
                                <Input type="text" v-model="formData.winningCompany" clearable placeholder="请输入中标公司" />
                            </Form-item>
                            <Form-item v-if="noticeType === '招标公告'" style="width:200px;" label="联系方式"
                                prop="contactNumber">
                                <Input type="text" v-model="formData.contactNumber" clearable placeholder="请输入联系方式" />
                            </Form-item>
                            <Form-item v-if="noticeType === '中标公告'" style="width:200px;" label="联系地址"
                                prop="contactAddress">
                                <Input type="text" v-model="formData.contactAddress" clearable placeholder="请输入联系方式" />
                            </Form-item>
                        </Row>
                        <Row>
                            <Form-item v-if="noticeType === '招标公告'" style="width:200px;" label="开标日期" prop="openTime">
                                <DatePicker transfer type="date" placeholder="选择开标日期" v-model="formData.openTime">
                                </DatePicker>
                            </Form-item>
                            <Form-item v-else-if="noticeType === '中标公告'" style="width:200px;" label="回函邮箱"
                                prop="contactEmail">
                                <Input type="text" v-model="formData.contactEmail" clearable placeholder="请输入回函邮箱" />
                            </Form-item>
                            <Form-item style="width:200px;" label="发布日期" prop="publishTime">
                                <DatePicker transfer type="date" placeholder="选择发布日期" v-model="formData.publishTime">
                                </DatePicker>
                            </Form-item>
                        </Row>
                        <Row>
                            <Form-item v-if="noticeType === '招标公告'" style="width:200px;" label="投资金额"
                                prop="investNumber">
                                <Input type="text" v-model="formData.investNumber" clearable placeholder="请输入投资金额" />
                            </Form-item>
                            <Form-item style="width:200px;" v-if="noticeType === '招标公告'" label="资金来源"
                                prop="capitalSource">
                                <Select v-model="formData.capitalSource" placeholder="请选择资金来源" clearable>
                                    <Option v-for="(item, i) in optionData.capitalSource" :key="i" :value="item.value">
                                        {{item.label}}
                                    </Option>
                                </Select>
                            </Form-item>
                        </Row>
                        <Row>
                            <Form-item style="width:200px;" label="招标编号" prop="tendNumber">
                                <Input type="text" v-model="formData.tendNumber" clearable placeholder="请输入招标编号" />
                            </Form-item>
                            <Form-item style="width:200px;" label="招标类型" v-if="noticeType === '招标公告'"
                                prop="biddingType">
                                <Select v-model="formData.biddingType" placeholder="请选择资金来源" clearable>
                                    <Option v-for="(item, i) in optionData.biddingType" :key="i" :value="item.value">
                                        {{item.label}}
                                    </Option>
                                </Select>
                            </Form-item>
                            <Form-item v-else-if="noticeType === '中标公告'" style="width:200px;" label="中标金额"
                                prop="winningAmount">
                                <Input type="text" v-model="formData.winningAmount" clearable placeholder="请输入中标金额" />
                            </Form-item>
                        </Row>
                        <Form-item label="支持html" prop="htmlFlag" style="width:105px">
                            <i-switch v-model="formData.htmlFlag">
                                <span slot="open">是</span>
                                <span slot="close">否</span>
                            </i-switch>
                        </Form-item>
                        <Form-item style="">
                            <a href="#">信息原地址</a>
                        </Form-item>

                        <p class="industru_prop">所属行业</p>
                        <Form-item label="" prop="industry" style="margin-left:-80px;">
                            <CheckboxGroup v-model="formData.industry">
                                <checkbox v-for="(item,i) in optionData.industry" :label="item.value" :key="i">
                                    {{ item.label }}
                                </checkbox>

                            </CheckboxGroup>
                        </Form-item>

                    </Row>

                    </Col>
                    <Col class="secondInfo_right">
                    <Alert show-icon>
                        <p>
                            文件的时间及招标文件公示时间：<span class="red">2020年12月25日</span> 至<span class="red">2020年12月31日</span>
                            (每天上午8:30至12:00)

                            投标截止时间及开标时间：<span class="red">2021年1月14日</span> 下午15时30分（北京时间） </p>
                    </Alert>
                    <editor v-model="formData.description" />
                    </Col>
                </Row>

                <Row>

                </Row>
                <Row class="operation">
                    <Button size="small" type="success" @click="handleGetNext" icon="ios-albums">提交并拉去下条信息</Button>
                    <Button size="small" type="success" icon="ios-exit">提交并退出</Button>
                    <Button size="small" type="error" icon="ios-close">关闭</Button>
                    <Button size="small" type="error" icon="ios-trash">删除</Button>
                    <Button size="small" type="primary" icon="ios-eye">预览</Button>
                    <Button size="small" type="primary">转问题库</Button>
                    <Button size="small" type="primary">转公告</Button>
                    <Button size="small" type="primary">转中标</Button>
                    <Button size="small" type="primary">转预告</Button>
                    <Button size="small" type="primary">转政府采购</Button>
                    <Button size="small" type="primary">转企业采购</Button>
                    <Button size="small" type="error">拆包</Button>
                    <Button size="small" type="primary">附件</Button>

                </Row>
            </Form>
        </Card>



    </div>
</template>

<script>
    const time = {
        time1: 0,
        time: 0
    }
    import {
        getUserListData,
    } from "@/api/index";
    import quillEditor from './my-components/xboot/quill';
    import wangEditor from './my-components/xboot/wangEditor';
    import editor from './my-components/xboot/editor';
    export default {
        name: "secondInfo",
        components: {
            quillEditor,
            wangEditor,
            editor
        },
        data() {
            return {
                optionData: {
                    area: [{
                            label: '北京',
                            value: 1
                        },
                        {
                            label: '天津',
                            value: 3
                        },
                        {
                            label: '河北',
                            value: 5
                        },
                        {
                            label: '山西',
                            value: 6
                        },
                        {
                            label: '内蒙古',
                            value: 7
                        },
                        {
                            label: '上海',
                            value: 2
                        },
                        {
                            label: '山东',
                            value: 16
                        },
                        {
                            label: '江苏',
                            value: 11
                        },
                        {
                            label: '安徽',
                            value: 13
                        },
                        {
                            label: '江西',
                            value: 15
                        },
                        {
                            label: '浙江',
                            value: 12
                        },
                        {
                            label: '福建',
                            value: 14
                        },
                        {
                            label: '湖北',
                            value: 18
                        },
                        {
                            label: '湖南',
                            value: 19
                        },
                        {
                            label: '河南',
                            value: 17
                        },
                        {
                            label: '广东',
                            value: 20
                        },
                        {
                            label: '广西',
                            value: 21
                        },
                        {
                            label: '海南',
                            value: 22
                        },
                        {
                            label: '辽宁',
                            value: 8
                        },
                        {
                            label: '吉林',
                            value: 9
                        },
                        {
                            label: '黑龙江',
                            value: 10
                        }, {
                            label: '陕西',
                            value: 26
                        },
                        {
                            label: '甘肃',
                            value: 28
                        },
                        {
                            label: '宁夏',
                            value: 31
                        },
                        {
                            label: '新疆',
                            value: 30
                        },
                        {
                            label: '青海',
                            value: 29
                        }, {
                            label: '重庆',
                            value: 4
                        },
                        {
                            label: '四川',
                            value: 27
                        },
                        {
                            label: '贵州',
                            value: 23
                        },
                        {
                            label: '云南',
                            value: 24
                        },
                        {
                            label: '西藏',
                            value: 25
                        },
                        {
                            label: '跨省',
                            value: 36
                        },
                        {
                            label: '香港',
                            value: 32
                        },
                        {
                            label: '澳门',
                            value: 33
                        },
                        {
                            label: '台湾',
                            value: 34
                        }
                    ],
                    options: [{
                            label: "转问题库",
                            value: 0
                        },
                        {
                            label: "转公告",
                            value: 1
                        },
                        {
                            label: "转中标",
                            value: 2
                        },
                        {
                            label: "转预告",
                            value: 3
                        },
                        {
                            label: "转政府采购",
                            value: 4
                        },
                        {
                            label: "转企业采购",
                            value: 5
                        },
                    ],
                    industry: [{
                            value: 1,
                            label: "交通运输"
                        },
                        {
                            value: 2,
                            label: "网络通讯计算机"
                        },
                        {
                            value: 3,
                            label: "市政房地产建筑"
                        },
                        {
                            value: 4,
                            label: "水利桥梁"
                        },
                        {
                            value: 5,
                            label: "机械电子电器"
                        },
                        {
                            value: 6,
                            label: "环保"
                        },
                        {
                            value: 7,
                            label: "能源化工"
                        },
                        {
                            value: 8,
                            label: "医疗卫生"
                        },
                        {
                            value: 9,
                            label: "科技文教旅游"
                        },
                        {
                            value: 10,
                            label: "冶金矿产原材料"
                        },
                        {
                            value: 11,
                            label: "出版印刷"
                        },
                        {
                            value: 12,
                            label: "轻工纺织食品"
                        },
                        {
                            value: 13,
                            label: "农林牧渔"
                        },
                        {
                            value: 14,
                            label: "商业服务"
                        },
                        {
                            value: 15,
                            label: "其它"
                        },
                        {
                            value: 16,
                            label: "园林绿化"
                        },
                        {
                            value: 17,
                            label: "能源"
                        },
                        {
                            value: 18,
                            label: "化工"
                        }
                    ],
                    infoType: [{
                            label: "国内招标",
                            value: 0
                        },
                        {
                            label: "国际招标",
                            value: 1
                        },
                        {
                            label: "政府采购",
                            value: 2
                        },
                    ],
                    capitalSource: [{
                            label: "国内政府资金",
                            value: 0
                        },
                        {
                            label: "商业融资",
                            value: 1
                        },
                        {
                            label: "外国政府贷款",
                            value: 2
                        },
                        {
                            label: "世界银行贷款",
                            value: 3
                        },
                        {
                            label: "亚洲开发银行",
                            value: 4
                        },
                        {
                            label: "日元贷款",
                            value: 5
                        },
                        {
                            label: "非洲开发银行贷款",
                            value: 6
                        },
                        {
                            label: "欧洲复兴与开发银行贷款",
                            value: 7
                        },
                        {
                            label: "全球环球基金",
                            value: 8
                        },
                        {
                            label: "其它",
                            value: 9
                        },
                    ],
                    biddingType: [{
                            label: "工程招标",
                            value: 0
                        },
                        {
                            label: "货物招标",
                            value: 1
                        },
                        {
                            label: "服务招标",
                            value: 2
                        },
                    ]
                },
                noticeType: "中标公告",
                openTip: true,
                dropDownContent: "收起",
                dropDownIcon: "ios-arrow-up",
                formData: {
                    description: "",
                    title: "",
                    biddingType: "",
                    agent: "",
                    bidder: "",
                    area: 1,
                    infoType: "",
                    contact: "",
                    contactNumber: "",
                    openTime: "",
                    publishTime: "",
                    capitalSource: "",
                    investNumber: 0,
                    tendNumber: "",
                    htmlFlag: true,
                    industry: [1],
                    winningCompany: "",
                    contactAddress: "",
                    contactEmaill: "",
                    winningAmount: ""

                },
                infoList: [{
                        agent: "代理1",
                        area: 1,
                        bidder: "14455556666",
                        biddingType: 1,
                        capitalSource: 1,
                        contact: "联系人1",
                        contactNumber: "14455556666",
                        description: `<p>我院拟采用竞价的方式采购抗疫表彰奖品一批，本着“公平、公开、公正”的原则，现公开采购信息，欢迎符合法律法规规定的供应商（包括生产厂商和代理商）参与本项目投标。现将有关事项公告如下：<strong></strong></p><p><strong>&nbsp;</strong><br></p><p></p><p><strong>一、</strong><strong>项目名称及编号</strong></p><p><br></p><p></p><p>抗疫表彰奖品一批采购项目(GYK-HW-2020031)</p><p><br></p><p></p><p>二、<strong>产品参数及商务要求</strong><strong></strong></p><p><strong><br></strong></p><p></p><p>（一）<strong>产品参数及要求</strong><strong></strong></p><p><strong><br></strong></p><p></p><table border="0" cellspacing="0"><tbody><tr><td nowrap="nowrap" valign="center" width="41"><p>序号</p><p><br></p><p></p></td><td valign="center" width="137"><p>货物名称</p><p><br></p><p></p></td><td nowrap="nowrap" valign="center" width="174"><p>规格参数</p><p><br></p><p></p></td><td valign="center" width="75"><p>数量</p><p><br></p><p></p></td><td nowrap="nowrap" valign="center" width="92"><p>单位</p><p><br></p><p></p></td><td nowrap="nowrap" valign="center" width="84"><p>预算（元）</p><p><br></p><p></p></td><td nowrap="nowrap" valign="center" width="95"><p>备注</p><p><br></p><p></p></td></tr><tr><td nowrap="nowrap" valign="center" width="41"><p><strong>1</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td nowrap="nowrap" valign="center" width="137"><p><strong>荣誉证书</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td valign="center" width="174"><p><strong>大12K 22*16cm 内页展开A4</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td nowrap="nowrap" valign="center" width="75"><p><strong>505</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td nowrap="nowrap" valign="center" width="92"><p><strong>本</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td nowrap="nowrap" rowspan="4" valign="center" width="84"><p><strong>40000</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td nowrap="nowrap" rowspan="4" valign="center" width="95"><p>报价（含打样、设计和配送费用）<strong></strong></p><p><strong><br></strong></p><p></p></td></tr><tr><td nowrap="nowrap" valign="center" width="41"><p><strong>2</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td nowrap="nowrap" valign="center" width="137"><p><strong>奖章木盒</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td valign="center" width="174"><p><strong>14*10.5*3.5cm 表面文字激光雕刻</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td nowrap="nowrap" valign="center" width="75"><p><strong>755</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td nowrap="nowrap" valign="center" width="92"><p><strong>个</strong><strong></strong></p><p><strong><br></strong></p><p></p></td></tr><tr><td nowrap="nowrap" valign="center" width="41"><p><strong>3</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td nowrap="nowrap" valign="center" width="137"><p><strong>木制金箔奖牌</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td valign="center" width="174"><p><strong>木托：30*40cm;金箔：25*35cm</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td nowrap="nowrap" valign="center" width="75"><p><strong>21</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td nowrap="nowrap" valign="center" width="92"><p><strong>个</strong><strong></strong></p><p><strong><br></strong></p><p></p></td></tr><tr><td nowrap="nowrap" valign="center" width="41"><p><strong>4</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td nowrap="nowrap" valign="center" width="137"><p><strong>亚克力金箔奖牌</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td valign="center" width="174"><p><strong>24*31cm</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td nowrap="nowrap" valign="center" width="75"><p><strong>250</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td nowrap="nowrap" valign="center" width="92"><p><strong>个</strong><strong></strong></p><p><strong><br></strong></p><p></p></td></tr></tbody></table><p><strong></strong></p><p><strong>&nbsp;</strong></p>`,
                        htmlFlag: true,
                        industry: [1],
                        infoType: 1,
                        investNumber: 0,
                        openTime: "",
                        publishTime: "",
                        tendNumber: "1011",
                        title: "主题1"
                    },
                    {
                        agent: "代理2",
                        area: 2,
                        bidder: "17788888999",
                        biddingType: 2,
                        capitalSource: 2,
                        contact: "联系人2",
                        contactNumber: "17788888999",
                        description: `<p>我院拟采用竞价的方式采购抗疫表彰奖品一批，本着“公平、公开、公正”的原则，现公开采购信息，欢迎符合法律法规规定的供应商（包括生产厂商和代理商）参与本项目投标。现将有关事项公告如下：<strong></strong></p><p><strong>&nbsp;</strong><br></p><p></p><p><strong>一、</strong><strong>项目名称及编号</strong></p><p><br></p><p></p><p>抗疫表彰奖品一批采购项目(GYK-HW-2020031)</p><p><br></p><p></p><p>二、<strong>产品参数及商务要求</strong><strong></strong></p><p><strong><br></strong></p><p></p><p>（一）<strong>产品参数及要求</strong><strong></strong></p><p><strong><br></strong></p><p></p><table border="0" cellspacing="0"><tbody><tr><td nowrap="nowrap" valign="center" width="41"><p>序号</p><p><br></p><p></p></td><td valign="center" width="137"><p>货物名称</p><p><br></p><p></p></td><td nowrap="nowrap" valign="center" width="174"><p>规格参数</p><p><br></p><p></p></td><td valign="center" width="75"><p>数量</p><p><br></p><p></p></td><td nowrap="nowrap" valign="center" width="92"><p>单位</p><p><br></p><p></p></td><td nowrap="nowrap" valign="center" width="84"><p>预算（元）</p><p><br></p><p></p></td><td nowrap="nowrap" valign="center" width="95"><p>备注</p><p><br></p><p></p></td></tr><tr><td nowrap="nowrap" valign="center" width="41"><p><strong>1</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td nowrap="nowrap" valign="center" width="137"><p><strong>荣誉证书</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td valign="center" width="174"><p><strong>大12K 22*16cm 内页展开A4</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td nowrap="nowrap" valign="center" width="75"><p><strong>505</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td nowrap="nowrap" valign="center" width="92"><p><strong>本</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td nowrap="nowrap" rowspan="4" valign="center" width="84"><p><strong>40000</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td nowrap="nowrap" rowspan="4" valign="center" width="95"><p>报价（含打样、设计和配送费用）<strong></strong></p><p><strong><br></strong></p><p></p></td></tr><tr><td nowrap="nowrap" valign="center" width="41"><p><strong>2</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td nowrap="nowrap" valign="center" width="137"><p><strong>奖章木盒</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td valign="center" width="174"><p><strong>14*10.5*3.5cm 表面文字激光雕刻</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td nowrap="nowrap" valign="center" width="75"><p><strong>755</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td nowrap="nowrap" valign="center" width="92"><p><strong>个</strong><strong></strong></p><p><strong><br></strong></p><p></p></td></tr><tr><td nowrap="nowrap" valign="center" width="41"><p><strong>3</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td nowrap="nowrap" valign="center" width="137"><p><strong>木制金箔奖牌</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td valign="center" width="174"><p><strong>木托：30*40cm;金箔：25*35cm</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td nowrap="nowrap" valign="center" width="75"><p><strong>21</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td nowrap="nowrap" valign="center" width="92"><p><strong>个</strong><strong></strong></p><p><strong><br></strong></p><p></p></td></tr><tr><td nowrap="nowrap" valign="center" width="41"><p><strong>4</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td nowrap="nowrap" valign="center" width="137"><p><strong>亚克力金箔奖牌</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td valign="center" width="174"><p><strong>24*31cm</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td nowrap="nowrap" valign="center" width="75"><p><strong>250</strong><strong></strong></p><p><strong><br></strong></p><p></p></td><td nowrap="nowrap" valign="center" width="92"><p><strong>个</strong><strong></strong></p><p><strong><br></strong></p><p></p></td></tr></tbody></table><p><strong></strong></p><p><strong>&nbsp;</strong></p>`,
                        htmlFlag: true,
                        industry: [2],
                        infoType: 2,
                        investNumber: 10,
                        openTime: "",
                        publishTime: "",
                        tendNumber: "2022",
                        title: "主题2"
                    },
                ],
                formValidate: {
                    title: [{
                        required: true,
                        message: '不能为空',
                        trigger: 'blur'
                    }],
                    agent: [{
                        required: true,
                        message: '不能为空',
                        trigger: 'blur'
                    }],
                    bidder: [{
                        required: true,
                        message: '不能为空',
                        trigger: 'blur'
                    }],
                    area: [{
                        required: true,
                        message: '不能为空',
                        trigger: 'blur'
                    }],
                    infoType: [{
                        required: true,
                        message: '不能为空',
                        trigger: 'blur'
                    }],
                    biddingType: [{
                        required: true,
                        message: '不能为空',
                        trigger: 'blur'
                    }],
                    industry: [{
                        required: true,
                        message: '不能为空',
                        trigger: 'blur'
                    }],
                },
                optionValue: 0,
                time: {
                    time1: 0,
                    time2: 0
                },
                index:0
            };
        },
        methods: {
            init() {
                this.formData = this.infoList[0]
            },
            handleGetNext() {
                time.time1 = new Date().getTime()
                document.documentElement.scrollTop = 0
                // setTimeout(() => {
                if(this.index === 0){
                    this.index = 1
                }else {
                    this.index = 0
                }
                this.formData = this.infoList[this.index]
                this.$Message.success("您提交的信息已成功录入系统")
                time.time2 = new Date().getTime()
                // }, 3000);
                console.log(time.time2 - time.time1, "ms");
            },
        },
        mounted() {
            // 计算高度
            // this.height = Number(document.documentElement.clientHeight - 230);
            this.init();



        },
        beforeCreate() {

            // console.log(new Date().getTime(),"beforeCreate");
        }
    };
</script>



<style lang="less" scoped>
    .secondInfo {
        min-width: 1200px;

        .secondInfo_main {
            overflow: hidden;
        }

        .secondInfo_left {
            float: left;
            overflow: hidden;
            width: 425px;
        }

        .secondInfo_right {
            // float: left;
            margin-left: 425px;
        }

        .industru_prop {
            width: 80px;
            text-align: right;
            padding-right: 12px;

            &::before {
                content: '*';
                display: inline-block;
                margin-right: 4px;
                line-height: 1;
                font-family: SimSun;
                font-size: 14px;
                color: #ed4014;
            }
        }

        .infoType {
            height: 32px;
            line-height: 32px;
        }

        .ivu-tag/deep/ {
            cursor: default;
        }

        .red {
            color: #f77;
        }

        .operation {
            margin: 15px;
        }

    }
</style>