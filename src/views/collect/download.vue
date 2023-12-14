<template>
    <div class="download">
        <Card>
            <Row class="my_row">
                <Col span="8" push="2">
                <div class="title">投标文件检查表下载</div>
                <div class="tb">
                    <div class="mask" @click="showBig(2)">
                        <Icon size="40" type="ios-eye-outline"></Icon>
                    </div>
                </div>
                <Button type="primary" icon="md-arrow-down"
                    @click="fileDownload('/static/tbwj.xlsx','投标文件检查表.xlsx')">下载</Button></Col>
                <Col span="8" push="4">
                <div class="title">项目跟踪表下载</div>
                <div class="xm">
                    <div class="mask" @click="showBig(1)">
                        <Icon size="40" type="ios-eye-outline"></Icon>
                    </div>
                </div>
                <Button type="primary" icon="md-arrow-down"
                    @click="fileDownload('/static/xmzb.xlsx','项目跟踪表.xlsx')">下载</Button></Col>
            </Row>
        </Card>
    </div>
</template>

<script>
    import "viewerjs/dist/viewer.css";
    import img1 from "@/assets/xmzb.png";
    // import file1 from "@/assets/xmzb.xlsx";
    import img2 from "@/assets/ztb.png";
    // import file2 from "@/assets/xmzb.xlsx";
    import Viewer from "viewerjs";
    export default {

        name: "download",
        data() {
            return {

            };
        },
        methods: {
            fileDownload(downloadUrl, name) {
                let aLink = document.createElement('a');
                aLink.style.display = 'none';
                aLink.href = downloadUrl;
                aLink.download = name;
                console.log(aLink);
                
                // 触发点击-然后移除
                document.body.appendChild(aLink);
                aLink.click();
                document.body.removeChild(aLink);
            },
            showBig(flag) {
                let image = new Image();
                if(flag ==1){

                    image.src = img1;
                }else if(flag ==2){
                    image.src = img2;

                }
                console.log(image);
                
                let viewer = new Viewer(image, {
                    hidden: function () {
                        viewer.destroy();
                    }
                });
                viewer.show();
            }
        },
        mounted() {}
    };
</script>

<style lang="less">
    .download {
        .my_row {
            padding-bottom: 30px;

            .title {
                text-align: center;
            }

            .tb,
            .xm {
                width: 100%;
                height: 0;
                padding-top: 100%;
                background: url(../../assets/xmzb.png) no-repeat;
                background-size: 100% 100%;
                margin-bottom: 20px;
                position: relative;
                cursor: pointer;

                &:hover .mask {
                    display: block;
                }

                .mask {
                    display: none;
                    width: 100%;
                    padding-top: 100%;
                    background-color: rgba(0, 0, 0, .4);
                    position: absolute;
                    top: 0;
                    left: 0;

                    i {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                    }
                }
            }

            .tb {
                background-image: url(../../assets/ztb.png);
            }

            position: relative;

            .ivu-btn {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }
</style>