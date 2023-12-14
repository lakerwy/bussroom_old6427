<template>
    <div class="studio-comment">
        <div class="top">
            <div class="left">
                <Avatar size="40" :src="avatarPath" />
            </div>
            <Input placeholder="写留言" v-model="commentInfo.content" />
            <div class="right">
                <Button type="primary" @click="addComment" :loading="commentFlag"
                    :disabled="commentInfo.content.length === 0"> 发布 </Button>
            </div>
        </div>
        <div class="comment_main">
            <div class="comment_group" v-for="(item,index) in commentList" :key="index">
                <div class="left">
                    <Avatar size="40" :src="item.avatar" />
                </div>
                <h2 class="nickname">
                    {{item.username}}
                </h2>
                <h2 class="message" v-html="item.content">
                    <!-- {{item.content}} -->
                </h2>
                <div class="options">
                    <span class="f_left">{{item.createTime}}</span>
                    <span class="f_right reply_btn" @click="showReply(true,index)">回复</span>
                </div>
                <div class="overview" v-if="item.replies.length && !item.replyFlag">
                    {{item.replies[0].username}} 等人 <span
                        @click="showReplyInfo(index)">共{{item.replies.length}}条回复</span>
                </div>
                <div class="input_comment" v-if="item.inputFlag">
                    <Input v-model="item.inputValue">
                    <span slot="prepend">回复 <span class="nickname">{{item.username}}</span> ：</span>
                    </Input>
                    <div class="right">
                        <Button type="primary" :disabled="!item.inputValue" @click="addReply(true,index)">发布
                        </Button>
                    </div>
                </div>
                <div class="reply_list" v-if="item.replies.length && item.replyFlag">
                    <div class="reply_group" v-for="(reply,j) in item.replies" :key="j">
                        <h2 style="fontSize:12px;">
                            {{reply.username}} <span v-if="!reply.isParent"> <span
                                    style="color:#515a6e; fontWeight:normal;">回复</span>
                                {{replyName(item.replies,reply.parentId)}}</span>
                        </h2>
                        <h2 class="message">
                            {{reply.title}}
                        </h2>
                        <div class="options">
                            <span class="f_left">{{reply.createTime}}</span>
                            <span class="f_right reply_btn" @click="showReply(false,index,j)">回复</span>
                        </div>
                        <div class="input_comment" v-if="reply.inputFlag" style="marginBottom:5px;">
                            <Input v-model="reply.inputValue">
                            <span slot="prepend">回复 <span class="nickname">{{item.username}}</span> ：</span>
                            </Input>
                            <div class="right">
                                <Button type="primary" :disabled="!reply.inputValue" @click="addReply(false,index,j)">发布
                                </Button>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="reply_group">
                        <h2>
                            李四
                        </h2>
                        <h2 class="message">
                            您说的对。
                        </h2>
                        <div class="options">
                            <span class="f_left">2020-11.11 12:20:20</span>
                            <span class="f_right">回复</span>
                        </div>
                        <div class="input_comment" style="marginBottom:5px;">
                            <Input>
                            <span slot="prepend">回复 <span class="nickname">李四</span> ：</span>
                            </Input>
                            <div class="right">
                                <Button type="primary">发布
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div class="reply_group">
                        <h2>
                            李四
                        </h2>
                        <h2 class="message">
                            您说的对。
                        </h2>
                        <div class="options">
                            <span class="f_left">2020-11.11 12:20:20</span>
                            <span class="f_right">回复</span>
                        </div>
                    </div> -->
                </div>
            </div>
            <!-- <div class="comment_group">
                <div class="left">
                    <Avatar size="40" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                </div>
                <h2>
                    张三
                </h2>
                <h2 class="message">
                    此项目进展顺利，是一个很好的项目！
                </h2>
                <div class="options">
                    <span class="f_left">2020-11.11 12:20:20</span>
                    <span class="f_right">回复</span>
                </div>
                <div class="overview" v-show="false">
                    李四 等人 <span>共三条回复</span>
                </div>
                
            </div>
            <div class="comment_group">
                <div class="left">
                    <Avatar size="40" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                </div>
                <h2>
                    张三
                </h2>
                <h2 class="message">
                    此项目进展顺利，是一个很好的项目！
                </h2>
                <div class="options">
                    <span class="f_left">2020-11.11 12:20:20</span>
                    <span class="f_right">回复</span>
                </div>
                <div class="overview" v-show="true">
                    李四 等人 <span>共三条回复</span>
                </div>
                <div class="reply_list" v-show="false">
                </div>
            </div> -->
        </div>
        <a class="more" v-if="moreFlag" @click="showMore"> 显示更多 </a>
        <p class="more" v-if="!moreFlag"> 没有更多了 </p>
    </div>
</template>
<script>
    import {
        addComment,
        delComment,
        getCommentByCondition,
        addReply,
        delReply,
        getReplyById,
    } from "@/api/index";
    export default {
        props: {
            projectId: String
        },
        name: "studio-comment",
        data() {
            return {
                commentData: {
                    projectId: "",
                    sort: "createTime",
                    order: "desc",
                    pageNumber: 1,
                    pageSize: 10
                },
                commentFlag: false,
                commentInfo: {
                    projectId: "",
                    content: ""
                },
                oldCommentList: [],
                commentList: [],
                replyData: {
                    title: "",
                    commentId: "",
                    parentId: 0,
                    isParent: true,
                },
                moreFlag: true
            }
        },
        methods: {
            init() {
                this.commentData.projectId = this.projectId;
                this.commentInfo.projectId = this.projectId;
                this.getCommentList()
            },
            getCommentList() {
                this.commentData.pageNumber = 1;
                getCommentByCondition(this.commentData).then(res => {
                    if (res.success) {
                        // this.oldCommentList = res.result.content;
                        let result = res.result.content;
                        result.forEach((el, i) => {
                            result[i].replyFlag = false;
                            result[i].inputFlag = false;
                            result[i].inputValue = "";
                            el.replies.forEach((obj, j) => {
                                result[i].replies[j].inputFlag = false;
                                result[i].replies[j].inputValue = "";
                            })
                        })
                        this.commentList = result;
                        if (this.commentList.length < 10) {
                            this.moreFlag = false
                        } else {
                            this.moreFlag = true
                        }



                    }
                })
            },
            addComment() {
                if (!this.commentInfo.content) {
                    this.$Message.warning("留言内容不能为空");
                    return false;
                }else if(this.commentInfo.content.length>255){
                    this.$Message.warning("留言内容长度不超过255");
                    return false;
                }
                this.commentFlag = true;
                addComment(this.commentInfo).then(res => {
                    if (res.success) {
                        this.$Message.success("发布成功");
                        this.commentInfo.content = ""
                        this.getCommentList()
                    }
                    this.commentFlag = false;

                })
            },
            replyName(replies, id) {
                let username = ""
                replies.some(item => {
                    if (item.id === id) {
                        username = item.username
                    }
                })
                return username
            },
            addReply(flag, index, j) {
                let item = this.commentList[index];
                // flag为true即为回复评论，反之回复回复
                this.replyData.isParent = flag;
                if (flag) {
                    this.replyData.title = item.inputValue;
                    this.replyData.commentId = item.id;
                    this.replyData.parentId = 0;
                } else {
                    let reply = this.commentList[index].replies[j];
                    this.replyData.title = reply.inputValue;
                    this.replyData.commentId = item.id;
                    this.replyData.parentId = reply.id;
                }
                if (!this.replyData.title) {
                    this.$Message.warning("回复内容不能为空");
                    return false;
                }else if(this.replyData.title.length >255){
                    this.$Message.warning("回复内容长度不超过255");
                    return false;

                }
                addReply(this.replyData).then(res => {
                    if (res.success) {
                        this.$Message.success("回复成功");
                        // 回复成功后关闭输入框
                        if (flag) {
                            let obj = this.commentList[index];
                            obj.inputFlag = false;
                            obj.inputValue = "";
                            this.commentList.splice(index, 1, obj)
                        } else {
                            let obj = this.commentList[index].replies[j];
                            obj.inputFlag = false;
                            obj.inputValue = "";
                            this.commentList[index].replies.splice(j, 1, obj)
                        }
                        let result = res.result;
                        result.inputValue = ""
                        result.inputFlag = false;
                        this.commentList[index].replies.unshift(result)
                        this.commentList[index].replyFlag = true;

                    }
                })
            },
            // 控制回复框显示逻辑
            showReply(flag, i, j = 0) {

                if (flag) {
                    let obj = this.commentList[i];
                    obj.inputFlag = !obj.inputFlag
                    this.commentList.splice(i, 1, obj)
                } else {
                    let obj = this.commentList[i].replies[j];
                    obj.inputFlag = !obj.inputFlag;
                    this.commentList[i].replies.splice(j, 1, obj)
                    // this.commentList[i].replies[j].inputFlag = !this.commentList[i].replies[j].inputFlag;
                }
            },
            // 控制回复显示逻辑
            showReplyInfo(i) {
                let obj = this.commentList[i]
                obj.replyFlag = true;
                this.commentList.splice(i, 1, obj)
            },
            showMore() {
                this.commentData.pageNumber++;
                getCommentByCondition(this.commentData).then(res => {
                    if (res.success) {
                        let list = res.result.content;
                        if (list.length < 10) {
                            this.moreFlag = false
                        }
                        list.forEach((el, i) => {
                            list[i].replyFlag = false;
                            list[i].inputFlag = false;
                            list[i].inputValue = "";
                            el.replies.forEach((obj, j) => {
                                list[i].replies[j].inputFlag = false;
                                list[i].replies[j].inputValue = "";
                            })
                        })
                        this.commentList = this.commentList.concat(list)
                    }
                })
            }

        },
        activated() {
            console.log(12);
            this.init()
        },
        computed: {
            avatarPath() {
                return localStorage.avatorImgPath;
            },
        }
    }
</script>
<style lang="less">
    .studio-comment {
        .more {
            background-color: #fff;
            display: block;
            line-height: 50px;
            text-align: center;
            color: #3390ED;
            text-align: center;
            border-top: 1px solid #e8e7e7;
        }

        p.more {
            color: #333;
        }

        .f_left {
            float: left;
        }

        .f_right {
            float: right;
        }

        .top {
            background-color: #fff;
            border-radius: 15px 15px 0 0;
            padding: 25px 110px 20px 85px;
            height: 80px;
            position: relative;
            margin-bottom: 1px;

            .right {
                position: absolute;
                top: 25px;
                right: 30px;

                .ivu-btn[disabled] {
                    background-color: #8FC1F4;
                    color: #fff;
                }
            }

            .left {
                position: absolute;
                left: 30px;
                top: 20px;
            }
        }

        .comment_main {
            padding: 0px 30px;
            // border-radi5us: 0 0 15px 15px;
            background-color: #fff;

            .nickname {
                color: #333;
                font-weight: bold;
                font-size: 12px;
            }

            .comment_group {
                padding: 24px 0 20px 0;
                position: relative;
                border-bottom: 1px solid #e8e7e7;
                padding-left: 55px;
                padding-bottom: 20px;

                &:last-of-type {
                    border: none;
                }

                .left {
                    position: absolute;
                    top: 30px;
                    left: 0;
                }

                h2 {

                    font-size: 14px;
                    line-height: 30px;
                    word-break: break-all;
                }

                .nickname {
                    font-size: 12px;

                }

                .message {
                    font-weight: normal;
                }

                .options {
                    height: 20px;
                    color: #bbb;
                    line-height: 20px;
                    font-size: 12px;

                    .f_right {
                        cursor: pointer;
                        position: relative;

                        &::before {
                            position: absolute;
                            content: "";
                            width: 12px;
                            height: 12px;
                            background-image: url(../../../assets/reply.png);
                            left: -20px;
                            top: 4px;
                        }
                    }
                }

                .overview {
                    height: 40px;
                    line-height: 40px;
                    background-color: #f5f5f5;
                    color: #000;
                    padding-left: 20px;
                    margin-top: 10px;
                    margin-bottom: 10px;

                    span {
                        color: #3390ED;
                        cursor: pointer;
                    }
                }

                .reply_list {
                    background-color: #f5f5f5;
                    margin-top: 10px;
                    padding: 10px 20px;

                    .reply_group {
                        padding: 10px 0;
                        border-bottom: 1px solid #e8e7e7;

                    }

                    .reply_group:last-of-type {
                        border: none;
                    }
                }

                .input_comment {
                    padding: 10px 80px 0px 0;
                    position: relative;
                    margin-top: 10px;

                    .ivu-input-group-prepend {
                        background-color: #fff;
                    }

                    .ivu-input {
                        border-left: 0;
                    }

                    .ivu-btn[disabled] {
                        background-color: #8FC1F4;
                        color: #fff;
                    }

                    .right {
                        position: absolute;
                        top: 10px;
                        right: 0;
                    }
                }

            }
        }
    }
</style>