<template>
    <div class="info_buttons">
        <!-- 微信扫一扫分享 -->
        <Modal v-model="codeFlag" title="微信扫一扫分享">
            <!-- <img :src="codeSrc" /> -->
            <img src="@/assets/info.png" style="display:block;margin:0 auto;" />
        </Modal>
        <!-- 绑定信息弹窗 -->
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
        <!-- 分享弹窗 -->
        <Modal v-model="shareFlag" title="企业分享">
            <h4 style="height:80px" v-text="shareData.title"></h4>
            <p>留言:</p>
            <Input v-model="content.message" maxlength="100" show-word-limit type="textarea" placeholder="说点什么..." />
            <p style="margin-top:30px;">
                使用人：
                <span style="color:#ed4014;">请前往【企业管理】创建其他使用人分账户。</span>
            </p>

            <Tree :data="treeData" show-checkbox @on-check-change="changeTree"></Tree>

            <div slot="footer">
                <Button type="text" @click="shareFlag = false">取消</Button>
                <Button type="primary" @click="goShare" :loading="shareLoading">提交</Button>
            </div>
        </Modal>
        <!-- row.isCollect -->
        <Icon v-if="isIcon" size="24" title="收藏" class="actionBtn" :color="row.is_collected == 0?'':'#2d8cf0'"
            :type="row.is_collected == 0?'ios-star-outline':'ios-star'" @click="collect(row.id)" />
        <Icon v-if="isIcon" size="24" title="内部分享" class="actionBtn" type="ios-share-alt-outline" @click="share(row)" />
        <Icon v-if="isIcon" size="24" class="actionBtn" type="ios-folder-outline" v-show="false" />
        <Icon v-if="isIcon" size="24" class="actionBtn" type="ios-chatbubbles-outline" @click="bindWechat(row)"
            v-show="false" />
        <Button v-if="isBtn" type="primary" size="small" class="my_button" @click="share(row)">内部分享</Button>
        <Button v-if="isBtn" type="primary" size="small" class="my_button"  @click="bindWechat(row)"
            v-show="false">微信分享</Button>
    </div>
</template>
<script>
    import {
        addMessage,
        shareWechat,
        findAllUserData,
        removeCollection,
        saveCollection,
        upCollection,
        delCollection
    } from "@/api/index";
    export default {
        props: {
            row: {
                type: Object
            },
            isIcon: {
                type: Boolean,
                default: false
            },
            isBtn: {
                type: Boolean,
                default: false
            }
        },
        name: "infoButtons",
        data() {
            return {
                shareLoading: false,
                typeArr: [
                    "工程招标",
                    "货物招标",
                    "服务招标",
                    "中标公示",
                    "招标预告",
                    "政府采购",
                    "企业采购",
                    "项目信息"
                ],
                content: {
                    message: "",
                    searchData: {}
                },
                treeData: [{
                    title: "全选",
                    expand: true,
                    checked: false,
                    children: []
                }],
                shareData: {
                    title: "",
                    content: "",
                    type: "",
                    range: 1,
                    userIds: [],
                    createSend: false
                },
                shareFlag: false,
                bindArr: ["邮件", "微信", "手机", "app"],
                bindFlag: false,
                bindNum: 0,
                codeSrc: "",
                codeFlag: false
            }
        },
        methods: {
            remove() {

            },
            goBind() {
                console.log(1)
                this.$router.push({
                    name: "ownspace_index"
                });
                this.bindFlag = false;
            },
            bindWechat(info) {
                this.shareData.title = "【" + info.type + "】" + info.realTitle;
                this.shareData.type = "信息分享";
                shareWechat(this.shareData).then(res => {
                    if (res.success) {
                        var ticket = res.result.split(`"`)[3];
                        this.codeSrc =
                            "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=" + ticket;
                        this.codeFlag = true;
                    } else if (res.code == 201) {
                        this.bindNum = 1;
                        this.bindFlag = true;
                    }
                });
            },
            getTreeData() {
                //获取分享人列表
                findAllUserData().then(res => {
                    if (res.success) {
                        this.treeData[0].children = [];
                        res.result.forEach(item => {
                            if (item.delFlag === 0 && item.status === 0) {

                                var obj = {};
                                obj.title = item.nickname;
                                obj.id = item.id;
                                obj.checked = false
                                this.treeData[0].children.push(obj);
                                // this.initTree[0].children.push(obj);
                            }
                        });
                    }
                });
            },
            collect(id) {
                // 收藏
                console.log(this.row);
                if (this.row.is_collected == 0) {
                    var type;
                    this.typeArr.forEach((item, i) => {
                        if (this.row.type == item) {
                            type = i + 1
                        }
                    })
                    saveCollection({
                        infoId: this.row.id,
                        name: this.row.realTitle,
                        url: this.row.url,
                        type
                    }).then(res => {
                        console.log(res)
                        if (res.success) {
                            console.log(res);

                            this.row.is_collected = res.result.id;
                            this.$Message.success("收藏成功")
                        }
                    })
                } else {
                    removeCollection({
                        id: this.row.is_collected
                    }).then(res => {
                        if (res.success) {
                            this.row.is_collected = 0
                            this.$Message.success("取消收藏成功")

                        }
                    })
                }

            },
            share(row) {
                // 分享
                this.treeData = [{
                    title: "全选",
                    expand: true,
                    checked: false,
                    children: []
                }];
                this.getTreeData()
                this.shareData.userIds = []
                this.shareData.title = "【" + row.type + "】" + (row.realTitle ? row.realTitle : row.title);
                this.shareData.type = "信息分享";
                this.content.message = ""; //留言初始化
                this.content.url = this.row.url; //留言初始化
                this.shareFlag = true;
                console.log("【" + row.type + "】" + (row.realTitle ? row.realTitle : row.title));
            },
            goShare() {
                // 提交分享
                if (this.shareData.userIds.length == 0) {
                    this.$Message.warning("请先选择分享人");
                } else {
                    this.shareLoading = true;
                    this.shareData.content = JSON.stringify(this.content);
                    addMessage(this.shareData).then(res => {
                        if (res.success) {
                            this.shareFlag = false;
                            this.$Message.success("分享成功");
                            this.getTreeData();
                            this.shareLoading = false;
                        }
                    });
                }
            },
            changeTree(a, b) {
                // 分享人选择事件
                this.shareData.userIds = [];
                a.forEach(item => {
                    if (item.title != "全选") {
                        this.shareData.userIds.push(item.id);
                    }
                });
            },
        },
        mounted() {

        }
    }
</script>
<style lang="less">
    .ivu-btn {
        margin-right: 5px;
    }
    .my_button {
        span {
            margin-left: 0!important;
        }
    }
    .actionBtn {
        cursor: pointer;
        margin: 0 6px;
    }

</style>