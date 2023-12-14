<template>
    <div class="area-select">
        <!-- 地区选择框 -->
        <Modal v-model="areaFlag" title="请选择地区" @on-ok="selectArea" @on-cancel="areaFlag = false">
            <Tree class="areaSelect" :data="data2" show-checkbox check-directly></Tree>
        </Modal>
        <div @click.capture.stop="showAreaModal">
            <Select :width="width" :max-tag-count="4" v-model="value" label-in-value multiple placeholder="全部地区">
                      <!-- <Option :value="-1">地区全选</Option> -->
                      <Option :value="1">北京</Option>
                      <Option :value="2">上海</Option>
                      <Option :value="3">天津</Option>
                      <Option :value="4">重庆</Option>
                      <Option :value="5">河北</Option>
                      <Option :value="6">山西</Option>
                      <Option :value="7">内蒙古</Option>
                      <Option :value="8">辽宁</Option>
                      <Option :value="9">吉林</Option>
                      <Option :value="10">黑龙江</Option>
                      <Option :value="11">江苏</Option>
                      <Option :value="12">浙江</Option>
                      <Option :value="13">安徽</Option>
                      <Option :value="14">福建</Option>
                      <Option :value="15">江西</Option>
                      <Option :value="16">山东</Option>
                      <Option :value="17">河南</Option>
                      <Option :value="18">湖北</Option>
                      <Option :value="19">湖南</Option>
                      <Option :value="20">广东</Option>
                      <Option :value="21">广西</Option>
                      <Option :value="22">海南</Option>
                      <Option :value="23">贵州</Option>
                      <Option :value="24">云南</Option>
                      <Option :value="25">西藏</Option>
                      <Option :value="26">陕西</Option>
                      <Option :value="27">四川</Option>
                      <Option :value="28">甘肃</Option>
                      <Option :value="29">青海</Option>
                      <Option :value="30">新疆</Option>
                      <Option :value="31">宁夏</Option>
                      <Option :value="32">香港</Option>
                      <Option :value="33">澳门</Option>
                      <Option :value="34">台湾</Option>
                      <Option :value="36">跨省</Option>
            </Select>
        </div>
    </div>
</template>

<script>
    export default {
        name: "area-select",
        props: {
            value: {
                type: Array,
                default: []
            },
            width: {
                type: Number,
                default: 200
            }
        },
        data() {
            return {
                areaFlag: false,
                data2: [{
                    title: '全选',
                    expand: true,
                    children: [{
                            title: '华北',
                            expand: true,
                            children: [{
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
                                }
                            ]
                        },
                        {
                            title: '华东',
                            expand: true,
                            children: [{
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
                                }
                            ]
                        },
                        {
                            title: '华中',
                            expand: true,
                            children: [{
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
                                }
                            ]
                        },
                        {
                            title: '华南',
                            expand: true,
                            children: [{
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
                                }
                            ]
                        },
                        {
                            title: '东北',
                            expand: true,
                            children: [{
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
                                }
                            ]
                        },
                        {
                            title: '西北',
                            expand: true,
                            children: [{
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
                                }
                            ]
                        },
                        {
                            title: '西南',
                            expand: true,
                            children: [{
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
                                }
                            ]
                        },
                        {
                            title: '其他',
                            expand: true,
                            children: [{
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
                            ]
                        }
                    ]
                }]
            }
        },
        methods: {
            showAreaModal() {
                this.data2[0].children.forEach(a => {
                    a.children.forEach((b, i) => {
                        delete a.checked
                        delete a.indeterminate
                        if (this.value.indexOf(b.value) > -1) {
                            a.children.splice(i, 1, {
                                ...b,
                                checked: true
                            })
                        } else {
                            a.children.splice(i, 1, {
                                ...b,
                                checked: false
                            });
                        }
                    })
                })
                this.areaFlag = true;
            },
            selectArea() {
                let a = [];
                this.data2[0].children.forEach(item => {
                    item.children.forEach(child => {
                        if (child.checked) {
                            a.push(child.value)
                        }
                    })
                })
                // if(a.length === 35){
                //     a=[-1];
                // }
                this.$emit("input",a);
                this.$emit("on-confirm");

            }

        }

    }
</script>

<style lang="less" scoped>
    /deep/.areaSelect.ivu-tree ul ul {
        overflow: hidden;
    }

    /deep/.areaSelect.ivu-tree ul ul ul {
        margin-top: 15px;
        margin-right: -8px;
        padding: 0;
    }

    /deep/.areaSelect.ivu-tree ul ul>li>* {
        float: left;
    }

    /deep/.areaSelect.ivu-tree ul ul .ivu-tree-title {
        margin: 0;
        padding: 0;
    }
</style>