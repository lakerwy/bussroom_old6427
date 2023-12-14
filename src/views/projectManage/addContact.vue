<template>

    <div>
        <Drawer title="添加联系人" v-model="visible" @ width="720" :styles="styles" @on-close="cancel">
            <Form ref="formData" :model="formData" :rules="formValidate">
                <Row :gutter="32">
                    <Col span="12">
                    <FormItem label="姓名" label-position="top" prop="name">
                        <Input v-model="formData.name" placeholder="请输入姓名" @on-keyup="btKeyUp('name')"
                            @on-change="btKeyDown('name')" />
                    </FormItem>
                    </Col>
                    <Col span="12">
                    <FormItem label="性别" label-position="top" prop="sex">
                        <Select v-model="formData.sex" placeholder="请选择性别">
                            <Option value="男">男</Option>
                            <Option value="女">女</Option>
                        </Select>
                    </FormItem>
                    </Col>
                </Row>
                <Row :gutter="32">
                    <Col span="12">
                    <FormItem label="公司" label-position="top" prop="company">
                        <Input v-model="formData.company" placeholder="请输入所属公司名称" @on-keyup="btKeyUp('company')"
                            @on-change="btKeyDown('company')" />
                    </FormItem>
                    </Col>
                    <Col span="12">
                    <FormItem label="部门" label-position="top" prop="department">
                        <Input v-model="formData.department" placeholder="请输入所属部门名称"
                            @on-change="btKeyDown('department')" @on-keyup="btKeyUp('department')" />
                    </FormItem>
                    </Col>
                </Row>
                <Row :gutter="32">
                    <Col span="12">
                    <FormItem label="座机" label-position="top" prop="telNumber">
                        <Input v-model="formData.telNumber" placeholder="请输入您的座机号码" />
                    </FormItem>
                    </Col>
                    <Col span="12">
                    <FormItem label="手机" label-position="top" prop="mobile">
                        <Input v-model="formData.mobile" placeholder="请输入您的手机号" />
                    </FormItem>
                    </Col>
                </Row>
                <Row :gutter="32">
                    <Col span="12">
                    <FormItem label="邮箱" label-position="top" prop="email">
                        <Input v-model="formData.email" placeholder="请输入您的座机号码" />
                    </FormItem>
                    </Col>
                </Row>
            </Form>
            <div class="demo-drawer-footer">
                <Button type="primary" :loading="submitLoading" @click="submit">提交</Button>
                <Button style="margin-left: 8px" @click="cancel">取消</Button>
            </div>
        </Drawer>
    </div>
</template>

<script>
    import {
        addProjectContact
    } from "@/api/index";
    // import {
    //     validateMobile,
    //     validateTel
    // } from "@/libs/validate";
    export default {
        name: "addContact",
        data() {
            const validateTel = (rule, value, callback) => {
                // 座机号验证
                var a = /^(0\d{2,3}-\d{7,8})$/;
                if (a.test(value) || !value) {
                    callback();
                } else {
                    callback(new Error(`请输入正确格式的电话号码"区号-号码"`));
                }
            };
            // 名称长度限制
            const validateName = (rule, value, callback) => {
                if (value.length <= 25) {
                    callback();
                } else {
                    callback(new Error(`不超过25个字符`));
                }
            };
            const validateMobile = (rule, value, callback) => {
                var reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
                if (value && !reg.test(value)) {
                    callback(new Error('手机号格式错误'));
                } else {
                    callback();
                }
            };
            return {
                visible: this.value,
                submitLoading: false,
                styles: {
                    height: 'calc(100% - 55px)',
                    overflow: 'auto',
                    paddingBottom: '53px',
                    position: 'static'
                },
                formData: {
                    name: '',
                    sex: '男',
                    company: '',
                    department: '',
                    telNumber: '',
                    mobile: '',
                    email: '',
                    projectId: this.projectId
                },
                formValidate: {
                    name: [{
                            required: true,
                            message: "请输入姓名",
                            trigger: "blur"
                        },
                        {
                            validator: validateName,
                            trigger: "blur"
                        }
                    ],
                    sex: [{
                        required: true,
                        message: "请选择性别",
                        trigger: "change"
                    }],
                    company: [{
                            required: true,
                            message: "请输入公司名称",
                            trigger: "blur"
                        },
                        {
                            validator: validateName,
                            trigger: "blur"
                        }
                    ],
                    department: [{
                            required: false,
                            message: "请输入部门名称",
                            trigger: "blur"
                        },
                        {
                            validator: validateName,
                            trigger: "blur"
                        }
                    ],
                    telNumber: [{
                            required: false,
                            message: "请输入座机号",
                            trigger: "blur"
                        },
                        {
                            validator: validateTel,
                            trigger: "blur"
                        }
                    ],
                    mobile: [{
                            required: false,
                            message: "请输入手机号",
                            trigger: "blur"
                        },
                        {
                            validator: validateMobile,
                            trigger: "blur"
                        }
                    ],
                    email: [{
                            required: false,
                            message: "请输入邮箱地址"
                        },
                        {
                            type: "email",
                            message: "邮箱格式不正确"
                        }
                    ]
                }
            }
        },
        methods: {
            btKeyDown(name) {
                this.formData[name] = this.formData[name].replace(/[^\w\u4E00-\u9FA5]/g, " ");
                // this.formData[name] = this.formData[name].replace(/[^2]/g, "11");
            },
            btKeyUp(name) {
                this.formData[name] = this.formData[name].replace(/[^\w\u4E00-\u9FA5]/g, "");
            },
            submit() {
                this.$refs.formData.validate(valid => {
                    if (valid) {
                        this.submitLoading = true;
                        addProjectContact(this.formData).then(res => {
                            if (res.success) {
                                this.$Message.success("操作成功");
                                this.$emit("on-submit");
                                this.$emit("on-cancel");
                                this.formData.name = ""
                                this.formData.sex = "男"
                                this.formData.company = ""
                                this.formData.department = ""
                                this.formData.telNumber = ""
                                this.formData.mobile = ""
                                this.formData.email = ""
                            }
                            this.submitLoading = false;
                        })
                    }
                })
            },
            cancel() {
                this.$emit("on-cancel");
            }
        },
        props: {
            value: {
                type: Boolean,
                default: false
            },
            projectId: {
                type: String,
                default: ""
            },
        },
        watch: {
            value(val) {
                console.log(this.visible, val, "visible");
                this.visible = val
            }
        },
        mounted() {}

    }
</script>
<style>
    .demo-drawer-footer {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        border-top: 1px solid #e8e8e8;
        padding: 10px 16px;
        text-align: left;
        background: #fff;
    }
</style>