<template>
    <div>
        <Steps :current="step" style="padding:20px 50px">
            <Step :title="step>0?'已完成':(step==0?'进行中':'待进行')" content="基本设置"></Step>
            <Step :title="step>1?'已完成':(step==1?'进行中':'待进行')" content="分页设置"></Step>
            <Step :title="step>2?'已完成':(step==2?'进行中':'待进行')" content="信息排重/分发/过滤"></Step>
            <Step :title="step>3?'已完成':(step==3?'进行中':'待进行')" content="字段设置"></Step>
            <!-- <Step :title="step>4?'已完成':(step==4?'进行中':'待进行')" content="搜索结果"></Step> -->
        </Steps>
        <Card>

            <Form :model="formItem" :label-width="100" v-show="step==0">
                <!-- <h3 style="text-align:center; color:#2d8cf0;"></h3> -->
                <Divider orientation="left" dashed>基本设置</Divider>
                <Row>
                    <Col span="16">
                    <FormItem label="采集源名称">
                        <Input placeholder="请输入..."></Input>
                    </FormItem>
                    </Col>
                    <Col span="8">
                    <FormItem type="number" label="优化保留数">
                        <InputNumber style="width:100%;" :max="10" :min="1"></InputNumber>
                    </FormItem>
                    </Col>
                </Row>
                <FormItem label="采集源地址">
                    <Input placeholder="请输入..."></Input>
                </FormItem>
                <FormItem label="采集源说明">
                    <Input placeholder="请输入..."></Input>
                </FormItem>
                <Row>
                    <Col span="12">
                    <FormItem label="采集源代码">
                        <Input placeholder="请输入..." value="12312234" disabled></Input>
                    </FormItem>
                    </Col>
                    <Col span="12">
                    <FormItem label="采集源等级">
                        <InputNumber style="width:100%;" :max="10" :min="1"></InputNumber>
                    </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="20">
                    <FormItem label="所属站点">
                        <Select v-model="formItem.select" placeholder="新疆广汇电子采购平台[http://zc.guanghui.com/Custom/]">
                            <Option value="0">新疆广汇电子采购平台[http://zc.guanghui.com/Custom/]</Option>
                            <Option value="1">政府采购平台[http://zc.guanghui.com/Custom/]</Option>
                        </Select>
                    </FormItem>
                    </Col>
                    <Col span="4">
                    <Button style="margin-left:20px;">复制</Button>
                    </Col>
                </Row>

                <FormItem label="所属频道">
                    <Select v-model="formItem.select" placeholder="中标公示">
                        <Option value="0">中标公示</Option>
                        <Option value="1">招标公告</Option>
                    </Select>
                </FormItem>
                <FormItem label="数据类别">
                    <Select v-model="formItem.select" placeholder="通用类别">
                        <Option value="0">通用类别</Option>
                        <Option value="1">招标公告</Option>
                    </Select>
                </FormItem>
                <Row>
                    <Col span="12">
                    <FormItem label="所属地区">
                        <Select v-model="formItem.select" placeholder="/全国/新疆">
                            <Option value="0">全国</Option>
                            <Option value="1">新疆</Option>
                            <Option value="1">北京</Option>
                        </Select>
                    </FormItem>
                    </Col>
                    <Col span="12">
                    <FormItem label="操作说明">
                        <InputNumber style="width:100%;" :max="10" :min="1"></InputNumber>
                    </FormItem>
                    </Col>
                </Row>
                <FormItem label="采集源类型">
                    <RadioGroup>
                        <Radio label="0">手工采集</Radio>
                        <Radio label="1">试采集</Radio>
                        <Radio label="2">自动采集</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem label="配置类型">
                    <RadioGroup>
                        <Radio label="0">概细缆采集</Radio>
                        <Radio label="1">元搜索采集</Radio>
                        <Radio label="2">全站采集</Radio>
                        <Radio label="3">自定义采集</Radio>
                    </RadioGroup>
                </FormItem>
                <Divider orientation="left" dashed>运行策略</Divider>
                <FormItem label="运行策略">
                    <RadioGroup>
                        <Radio label="0">循环采集</Radio>
                        <Radio label="1">间隔时间</Radio>
                        <Radio label="2">CRON表达式</Radio>
                    </RadioGroup>
                </FormItem>
                <Row>
                    <Col span="8">
                    <FormItem label="时间间隔">
                        <InputNumber style="width:100%;" :max="10" :min="1"></InputNumber>
                    </FormItem>
                    </Col>
                    <Col span="8">
                    <FormItem label="间隔单元">
                        <InputNumber style="width:100%;" :max="10" :min="1"></InputNumber>
                    </FormItem>
                    </Col>
                    <Col span="8">
                    <FormItem label="运行次数">
                        <InputNumber style="width:100%;" :max="10" :min="1"></InputNumber>
                    </FormItem>
                    </Col>
                </Row>
                <Divider orientation="left" dashed>
                    <Checkbox v-model="single">自定义采集参数(自定义采集无效)</Checkbox>
                </Divider>
                <Divider orientation="left" dashed>辅助服务器</Divider>
                <Row>
                    <Col span="8">
                    <FormItem label="代理服务器">
                        <Select v-model="formItem.select" placeholder="请选择">
                            <Option value="0">全国</Option>
                            <Option value="1">新疆</Option>
                            <Option value="1">北京</Option>
                        </Select>
                    </FormItem>
                    </Col>
                    <Col span="8">
                    <FormItem label="单拨执行">
                        <i-switch v-model="formItem.switch" @on-change="change" />
                    </FormItem>
                    </Col>
                    <Col span="8">
                    <FormItem label="单拨服务器">
                        <Select v-model="formItem.select" disabled placeholder="请选择">
                            <Option value="0">全国</Option>
                            <Option value="1">新疆</Option>
                            <Option value="1">北京</Option>
                        </Select>
                    </FormItem>
                    </Col>
                </Row>
            </Form>
            <Form :model="formItem" :label-width="100" v-show="step==1">
                <Divider orientation="left" dashed>概览访问设置</Divider>
                <!-- <Row>
                <Col span="16">
                <FormItem label="采集源名称">
                    <Input placeholder="请输入..."></Input>
                </FormItem>
                </Col>
                <Col span="8">
                <FormItem type="number" label="优化保留数">
                    <InputNumber style="width:100%;" :max="10" :min="1"></InputNumber>
                </FormItem>
                </Col>
            </Row> -->
                <FormItem label="入口地址">
                    <Input placeholder="请输入..."></Input>
                </FormItem>
                <FormItem label="前置地址">
                    <Input placeholder="请输入..." type="textarea"></Input>
                </FormItem>
                <Row>
                    <Col span="8">
                    <FormItem label="请求编码">
                        <InputNumber style="width:100%;" :max="10" :min="1"></InputNumber>
                    </FormItem>
                    </Col>
                    <Col span="8">
                    <FormItem>
                        <Checkbox v-model="single">本地跳转</Checkbox>
                    </FormItem>
                    </Col>
                    <Col span="8">
                    <FormItem>
                        <Checkbox v-model="single">post请求</Checkbox>
                    </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="8">
                    <FormItem label="循环次数">
                        <InputNumber style="width:100%;" :max="10" :min="1"></InputNumber>
                    </FormItem>
                    </Col>
                    <Col span="8">
                    <FormItem label="自动翻页">
                        <Select v-model="formItem.select" placeholder="请选择">
                            <Option value="0">新疆广汇电子采购平台[http://zc.guanghui.com/Custom/]</Option>
                            <Option value="1">政府采购平台[http://zc.guanghui.com/Custom/]</Option>
                        </Select> </FormItem>
                    </Col>
                    <Col span="8">
                    <FormItem label="限定时长">
                        <InputNumber disabled style="width:100%;" :max="10" :min="1"></InputNumber>
                    </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="20">
                    <FormItem label="请求地址">
                        <Input placeholder="请输入..."></Input>

                    </FormItem>
                    </Col>
                    <Col span="4">
                    <Button style="margin-left:20px;">测试</Button>
                    </Col>
                </Row>
                <FormItem>
                    <Table :columns="columns_c" border :data="data_c">

                    </Table>
                </FormItem>
                <Divider orientation="left" dashed>细缆访问设置</Divider>
                <Row>
                    <Col span="8">
                    <FormItem label="请求编码">
                        <InputNumber style="width:100%;" :max="10" :min="1"></InputNumber>
                    </FormItem>
                    </Col>
                    <Col span="8">
                    <FormItem>
                        <Checkbox v-model="single">本地跳转</Checkbox>
                    </FormItem>
                    </Col>
                    <Col span="8">
                    <FormItem>
                        <Checkbox v-model="single">post请求</Checkbox>
                    </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="16">
                    <FormItem label="请求地址">
                        <Input placeholder="请输入..."></Input>

                    </FormItem>
                    </Col>
                    <Col span="8">
                    <FormItem label="请求参数">
                        <Input placeholder="请输入..."></Input>

                    </FormItem>
                    </Col>
                </Row>
                <Divider orientation="left" dashed>细缆访问设置</Divider>
                <FormItem>
                    <Button icon="ios-add" size="small" type="primary">新建</Button>
                    <Button icon="ios-trash" size="small" type="error">删除</Button>
                </FormItem>
                <FormItem>
                    <Table :columns="columns_v" border :data="data_v">
                    </Table>
                </FormItem>

            </Form>
            <Form :model="formItem" :label-width="100" v-show="step==2">
                <Divider orientation="left" dashed>排重设置</Divider>
                <FormItem>
                    <Button icon="ios-add" size="small" type="primary">新建</Button>
                    <Button icon="ios-trash" size="small" type="error">删除</Button>
                </FormItem>
                <FormItem>
                    <Table :columns="columns_r" border :data="data_r">
                    </Table>
                </FormItem>
                <Divider orientation="left" dashed>信息分发</Divider>
                <FormItem>
                    <Button icon="ios-add" size="small" type="primary">新建</Button>
                    <Button icon="ios-trash" size="small" type="error">删除</Button>
                </FormItem>
                <FormItem>
                    <Table :columns="columns_i" border :data="data_i">
                    </Table>
                </FormItem>
                <Divider orientation="left" dashed>过滤配置</Divider>
                <FormItem>
                    <Button icon="ios-add" size="small" type="primary">新建</Button>
                    <Button icon="ios-trash" size="small" type="error">删除</Button>
                </FormItem>
                <FormItem>
                    <Table :columns="columns_f" border :data="data_f">
                    </Table>
                </FormItem>

            </Form>

            <Tabs type="card" v-show="step==3">
                <TabPane label="源文地址">
                    <Form :model="formItem" :label-width="100">
                        <Divider orientation="left" dashed>内容抽取</Divider>
                        <Row>
                            <Col span="10">
                            <FormItem label="采集位置">
                                <RadioGroup>
                                    <Radio label="0">概览</Radio>
                                    <Radio label="1">细览</Radio>
                                </RadioGroup>
                            </FormItem>
                            </Col>
                            <Col span="14">
                            <FormItem label="采值方式">
                                <RadioGroup>
                                    <Radio label="0">指定值</Radio>
                                    <Radio label="1">正则获取</Radio>
                                    <Radio label="2">xpath获取</Radio>
                                </RadioGroup>
                            </FormItem>
                            </Col>
                        </Row>

                        <FormItem label="xpath抽取">
                            <Select v-model="formItem.select" placeholder="请选择">
                                <Option value="0">新疆广汇电子采购平台[http://zc.guanghui.com/Custom/]</Option>
                                <Option value="1">政府采购平台[http://zc.guanghui.com/Custom/]</Option>
                            </Select>
                        </FormItem>
                        <Row>
                            <Col span="18">
                            <FormItem label="合并内容">
                                <Input disabled placeholder="内容分页的正则表达式"></Input>
                            </FormItem>
                            </Col>
                            <Col span="6">
                            <FormItem>
                                <Checkbox v-model="single">二次请求</Checkbox>
                            </FormItem>
                            </Col>
                        </Row>
                        <Divider orientation="left" dashed>内容抽取</Divider>
                        <Row>
                            <Col span="12">
                            <FormItem label="正则再抽取">
                                <Select v-model="formItem.select" placeholder="请选择">
                                    <Option value="0">新疆广汇电子采购平台[http://zc.guanghui.com/Custom/]</Option>
                                    <Option value="1">政府采购平台[http://zc.guanghui.com/Custom/]</Option>
                                </Select>
                            </FormItem>
                            </Col>
                            <Col span="12">
                            <FormItem label="正则输出组">
                                <Input placeholder="请输入..."></Input>
                            </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="12">
                            <FormItem label="开始字符串">
                                <Input placeholder="请输入..."></Input>
                            </FormItem>
                            </Col>
                            <Col span="6">
                            <FormItem>
                                <Checkbox v-model="single">包含开始</Checkbox>
                            </FormItem>
                            </Col>
                            <Col span="6">
                            <FormItem>
                                <Checkbox v-model="single">异常左边界</Checkbox>
                            </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="12">
                            <FormItem label="结束字符串">
                                <Input placeholder="请输入..."></Input>
                            </FormItem>
                            </Col>
                            <Col span="6">
                            <FormItem>
                                <Checkbox v-model="single">包含结束</Checkbox>
                            </FormItem>
                            </Col>
                            <Col span="6">
                            <FormItem>
                                <Checkbox v-model="single">异常右边界</Checkbox>
                            </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="12">
                            <FormItem label="内容前插入">
                                <Input placeholder="请输入..."></Input>
                            </FormItem>
                            </Col>
                            <Col span="12">
                            <FormItem label="内容后追加">
                                <Input placeholder="请输入..."></Input>
                            </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="12">
                            <FormItem label="过滤标签集">
                                <Input placeholder="多个html以,隔开"></Input>
                            </FormItem>
                            </Col>
                            <Col span="12">
                            <FormItem label="过滤属性集">
                                <Input placeholder="多个html以,隔开"></Input>
                            </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <FormItem>
                                <Col span="4">
                                <Checkbox v-model="single">过滤所有属性</Checkbox>
                                </Col>
                                <Col span="4">
                                <Checkbox v-model="single">全角转半角</Checkbox>
                                </Col>
                                <Col span="4">
                                <Checkbox v-model="single">转为纯文本</Checkbox>
                                </Col>
                                <Col span="4">
                                <Checkbox v-model="single">去两端空白符</Checkbox>
                                </Col>
                                <Col span="4">
                                <Checkbox v-model="single">unicode处理</Checkbox>
                                </Col>
                            </FormItem>
                        </Row>
                        <Divider orientation="left" dashed>
                            <Checkbox style="font-size:16px">提取附件</Checkbox>
                        </Divider>
                        <Divider orientation="left" dashed>替换测试</Divider>
                        <Table :columns="columns_t" border :data="data_t">
                        </Table>

                    </Form>
                </TabPane>
                <TabPane label="标题">标签二的内容</TabPane>
                <TabPane label="发布时间">标签三的内容</TabPane>
                <TabPane label="内容">标签三的内容</TabPane>
                <TabPane label="HTML">标签三的内容</TabPane>
                <TabPane label="行业">标签三的内容</TabPane>
                <TabPane label="行业编号">标签三的内容</TabPane>
                <TabPane label="编号">标签三的内容</TabPane>
                <TabPane label="标讯类别编号">标签三的内容</TabPane>
            </Tabs>




            <Row style="padding:10px; display:flex; justify-content: flex-end;">
                <Button type="primary" @click="step++">确认</Button>
                <Button type="success" style="margin-left: 8px" @click="step++">下一步</Button>
                <Button style="margin-left: 8px" @click="step--">关闭</Button>
            </Row>
        </Card>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    switch1: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                },
                step: 3,
                columns_c: [{
                        title: '链接地址',
                        key: 'a'
                    },
                    {
                        title: '标题',
                        key: 'b'
                    },
                    {
                        title: '是否有效',
                        key: 'c'
                    },
                    {
                        title: '响应状态码',
                        key: 'd'
                    }
                ],
                columns_v: [

                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '参数名',
                        key: 'a'
                    },
                    {
                        title: '参数值',
                        key: 'b'
                    },
                    {
                        title: '提取方式',
                        key: 'c'
                    },
                    {
                        title: '请求类型',
                        key: 'd'
                    }
                ],
                columns_r: [

                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '源字段集',
                        key: 'a'
                    },
                    {
                        title: '排重位置',
                        key: 'b'
                    },
                    {
                        title: '限制采集源范围内',
                        key: 'c'
                    },
                    {
                        title: '限度更新模式',
                        key: 'd'
                    }
                ],
                columns_i: [

                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '字段',
                        key: 'a'
                    },
                    {
                        title: '包含内容',
                        key: 'b'
                    },
                    {
                        title: '分发至频道',
                        key: 'c'
                    }
                ],
                columns_f: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '字段',
                        key: 'a'
                    },
                    {
                        title: '包含内容',
                        key: 'b'
                    },
                    {
                        title: '是否采集',
                        key: 'c'
                    }
                ],
                columns_t: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '查找',
                        key: 'a'
                    },
                    {
                        title: '替换为',
                        key: 'b'
                    },
                    {
                        title: '正则匹配',
                        key: 'c'
                    },
                    {
                        title: '循环替换',
                        key: 'd'
                    }
                ],
                data_c: [],
                data_v: [],
                data_r: [{
                    a: "源文地址",
                    b: "概览排重",
                    c: "是",
                    d: "否",
                }],
                data_i: [],
                data_f: [{
                    a: "key",
                    b: "招标公告",
                    c: "否"
                }],
                data_t: [
                {
                    a: "`)",
                    b: "http://www.chinabidding.cn",
                    c: "否",
                    d: "否"
                },
                {
                    a: "javascript:ViewNewsDet...",
                    b: "http://www.bid360.com.cn",
                    c: "否",
                    d: "否"
                }
                ],
            }
        }
    }
</script>

<style scoped lang="less">
    /deep/ .ivu-form-item {
        margin-bottom: 15px;
    }

    /deep/ .ivu-steps-title,
    /deep/ .ivu-steps-head {
        background: #f0f0f0;

    }

    /deep/ .ivu-divider-inner-text{
        font-weight: bold;
    }
</style>