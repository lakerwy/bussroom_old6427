<template>
    <div id="april_box" v-show="flag">
        <div class="april" >
            <div class="april_close" @click="close"></div>
            <div class="april_content">
                <h2 class="april_title red">公告</h2>
                <p class="april_first">尊敬的用户：</p>
                <p>
                    <img src="https://cdn.chinabidding.cn/public/2020/img/laba.png" alt=""> 避免给您造成经济损失，请仔细阅读!
                    您好！目前市场已经进入招标旺季，一些“钓鱼网站”，通过短信、邮件等方式，以我网的名义给广大用户发送到期通知，导致一些用户汇错款项，造成了不必要的经济损失。
                </p>
                <p>在此提醒广大用户，请在办理续费前，与您的客服专员联系或拨打<span class="red"> 400-006-6655 </span>核对汇款信息！</p>
                <p class="red"> 温馨提示：元博网采购与招标网首页右侧可随时查看账号的到期时间及专属客服联系方式。</p>
                <p class="bottom">元博网采购与招标网</p>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "april-tip",
        data() {
            return {
                flag:true
            }
        },
        methods:{
            close(){
                this.flag = false;
            }
        }

    };
</script>

<style scoped>
    #april_box {
        /* display: none; */
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        z-index: 110;
    }

    #april_box .april {
        position: fixed;
        width: 940px;
        height: 440px;
        left: 50%;
        top: 15%;
        margin-left: -470px;
        background-color: #fff;
        z-index: 111;
    }

    #april_box .april_content {
        padding: 0 40px 0 27px;
        position: relative;
        height: 354px;
    }

    #april_box .april_close {
        width: 17px;
        height: 16.3px;
        background: url("https://cdn.chinabidding.cn/public/2020/img/yuanbo/ybtc_right_icon.png") no-repeat;
        background-size: 100% 100%;
        position: absolute;
        right: 20px;
        top: 20px;
        cursor: pointer;
        z-index: 1;
    }

    #april_box .april_content .april_title {
        text-align: center;
        font-size: 20px;
        line-height: 87px;
    }

    #april_box .april_content .april_first {
        text-indent: 0;
    }

    #april_box .april_content p {
        letter-spacing: 1px;
        color: #333;
        font-size: 14px;
        line-height: 28px;
        text-indent: 2em;
    }

    #april_box .april_content p img {
        width: 14px;
        height: 14px;
        margin-top: -4px;
    }

    #april_box .april_content p.bottom {
        position: absolute;
        right: 40px;
        bottom: 0;
        text-indent: 0;
    }

    #april_box .april_content .red {
        color: #DB2831;
    }
</style>