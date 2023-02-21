<template>
    <div id="footer_container">
        <p id="title">
            {{ myinfo.global.title }}
        </p>
        <p id="finish_time">
            2023年个人简历
        </p>
        <div id="copyright">
            <p>
                <a target="_blank" href="https://s4.ax1x.com/2022/01/04/TbjXkt.png"></a> 
            </p>
            <p>
                <a href="https://beian.miit.gov.cn/" target="_blank"> {{ record_num }}</a>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyFooter",
        computed: {
            record_num() {
                return this.myinfo.footer.record_num
            }
        }
    };
</script>

<style scoped lang="less">
    @import "../config.less";

    #footer_container {
        color: @footer_font_color;
        font-size: @footer_font_size;
        font-weight: 500;

        p {
            margin: 25px;

            a {
                color: @footer_font_color;
                text-decoration: none;
            }
        }
    }

    #title {
        font-size: 1.5rem;
    }
</style>
