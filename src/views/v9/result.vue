<template>
    <div class="v6-result">
        <Card>
            <Tabs type="card" closable @on-tab-remove="handleTabRemove">
                <TabPane label="欢饮您" v-if="tabList.tab0"></TabPane>
                <TabPane label="新疆广汇电子-中标公告" v-if="tabList.tab1"></TabPane>
                <TabPane label="五矿矿业电子商务-比价采购-采购公告" v-if="tabList.tab2"></TabPane>
            </Tabs>
            <Row style="margin:15px 0">
                <Button style="margin-right:20px" icon="ios-paper">浏览器链接原文</Button>
                <Button style="margin-right:20px" icon="ios-eye">浏览附件</Button>
                <Button style="margin-right:20px" icon="ios-trash" type="error">删除信息</Button>
                <Button style="margin-right:20px" icon="ios-refresh" type="success">刷新</Button>
            </Row>
            <Table :columns="columns" :data="data">

            </Table>
            <p style="text-align:center; margin:20px 0;">
                <Page style="display: inline-block;" :total="pageData.total" :page-size="20" :current.sync="pageData.currentPage"
                    @on-change="changePage" show-elevator />
            </p>
        </Card>
        <Card>
            <Tabs type="card"  @on-tab-remove="handleTabRemove">
                <TabPane label="阅读模板"></TabPane>
                <TabPane label="采集源日志" ></TabPane>
            </Tabs>
            <div style="height:300px"></div>
        </Card>
    </div>
</template>

<script>
    export default {
        name: "v6-result",
        data() {
            return {
                tabList: {
                    tab0: true,
                    tab1: true,
                    tab2: true
                },
                pageData: {
                    total: 300,
                    currentPage: 1
                },
                columns: [{
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '编号',
                        key: 'a'
                    },
                    {
                        title: '信息状态',
                        key: 'b'
                    },
                    {
                        title: '创建时间',
                        key: 'c'
                    },
                    {
                        title: '标题',
                        key: 'd',
                        minWidth: 200,
                        render: (h, parmas) => {
                            return h("a", {
                                attrs: {
                                    href: "www.baidu.com",
                                }
                            }, parmas.row.d);
                        }
                    },
                    {
                        title: '发布时间',
                        key: 'e'
                    },
                    {
                        title: '行业',
                        key: 'f'
                    },
                    {
                        title: '行业编号',
                        key: 'g'
                    },
                    {
                        title: '标讯类别',
                        key: 'i'
                    },
                    {
                        title: '招标类型',
                        key: 'j'
                    }
                ],
                data: [{
                        a: "123412",
                        b: "auto",
                        c: "2021-07-20",
                        d: "[采购公告]北京国信创新科技股份公司",
                        e: "2021-04-20",
                        f: "互联网",
                        g: "123",
                        i: "采购公告",
                        j: "电子招标",
                    },
                    {
                        a: "123412",
                        b: "auto",
                        c: "2021-07-20",
                        d: "[采购公告]北京国信创新科技股份公司",
                        e: "2021-04-20",
                        f: "互联网",
                        g: "123",
                        i: "采购公告",
                        j: "电子招标",
                    },
                    {
                        a: "123412",
                        b: "auto",
                        c: "2021-07-20",
                        d: "[采购公告]北京国信创新科技股份公司",
                        e: "2021-04-20",
                        f: "互联网",
                        g: "123",
                        i: "采购公告",
                        j: "电子招标",
                    },
                    {
                        a: "123412",
                        b: "auto",
                        c: "2021-07-20",
                        d: "[采购公告]北京国信创新科技股份公司",
                        e: "2021-04-20",
                        f: "互联网",
                        g: "123",
                        i: "采购公告",
                        j: "电子招标",
                    },
                    {
                        a: "123412",
                        b: "auto",
                        c: "2021-07-20",
                        d: "[采购公告]北京国信创新科技股份公司",
                        e: "2021-04-20",
                        f: "互联网",
                        g: "123",
                        i: "采购公告",
                        j: "电子招标",
                    },
                    {
                        a: "123412",
                        b: "auto",
                        c: "2021-07-20",
                        d: "[采购公告]北京国信创新科技股份公司",
                        e: "2021-04-20",
                        f: "互联网",
                        g: "123",
                        i: "采购公告",
                        j: "电子招标",
                    },
                    {
                        a: "123412",
                        b: "auto",
                        c: "2021-07-20",
                        d: "[采购公告]北京国信创新科技股份公司",
                        e: "2021-04-20",
                        f: "互联网",
                        g: "123",
                        i: "采购公告",
                        j: "电子招标",
                    },
                    {
                        a: "123412",
                        b: "auto",
                        c: "2021-07-20",
                        d: "[采购公告]北京国信创新科技股份公司",
                        e: "2021-04-20",
                        f: "互联网",
                        g: "123",
                        i: "采购公告",
                        j: "电子招标",
                    },
                ]
            }
        },
    }
</script>

<style>

</style>