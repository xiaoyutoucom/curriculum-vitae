<template>
    <el-container>
        <el-header>
            <MyHeader />
        </el-header>
        <el-main>
            <Intro />
        </el-main>
        <el-footer>
            <MyFooter />
        </el-footer>
    </el-container>
</template>

<script>
    import MyHeader from "@/components/MyHeader";
    import Intro from "@/components/Intro";
    import MyFooter from "@/components/MyFooter";

    export default {
      name: "App",
      components: {
        MyHeader,
        Intro,
        MyFooter,
      },
    };
</script>

<style lang="less">
    @import "./config.less";

    /*===== 全局字体 =====*/
    html {
        font-family: 'Poppins', Helvetica, Arial, sans-serif;

        // 锚点滚动的过渡效果
        scroll-behavior: smooth;

        // 滚动条样式
        &::-webkit-scrollbar {
            width: @global_scrollbar_width;
            height: @global_scrollbar_width;
        }
        
        &::-webkit-scrollbar-thumb {
            background-color: rgba(144, 147, 153, .5);
            border-radius: 30px;
            box-shadow: inset 2px 2px 2px hsla(0,0%,100%,.25), inset -2px -2px 2px rgba(0,0,0,.25);

            &:hover {
                background-color: rgba(105, 106, 109, 0.5);
            }
        }

        &::-webkit-scrollbar-track {
            background-color: #fff;
        }

        scroll-padding-top: @header_height;
    }

    @media screen and (max-width: @Mobile_width) {
        html {
            font-size: @mobile_rem;
        }
        
    }

    @media screen and (min-width: @Mobile_width) {
        html {
            font-size: @default_rem;
        }
    }

    .el-header {
        height: @header_height !important;
        background-color: @global_background_color;
        box-shadow: 0 1px 4px rgba(140, 153, 167, 0.18);
        z-index: 999;
        position: sticky;
        top: 0px;
    }
    
    .el-header, .el-footer {
      text-align: center;
    }

    .el-footer {
        background-color: @footer_background_color;
        height: auto!important;
    }


    .el-main {
      background-color: @global_background_color;
    }
</style>
