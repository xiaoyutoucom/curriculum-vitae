<template>
    <div :id="slot_name">
        <slot :name="slot_name"></slot>
    </div>
</template>


<script>

    export default {
        name: "IntroItem", // 指定组件名
        props: [
            "slot_name",
        ],
    }

</script>

<style lang="less" scoped>
    @import "../config.less";
    
    /* 
        每个自己的介绍项的样式在这配置, 格式如下:
            
            #myinfo文件中的anchor名(anchor名不用加#) {
                // 你的样式....
            }

    */
    #home {
        font-size: @introItem_home_font_size;
        padding: @intro_container_padding;

        a {
            text-decoration: none;
            color: @introItem_home_background_color;
        }

        .home_item {
            display: flex;
            flex-wrap: wrap;

            .sayHi {
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;

                p,
                & > a {
                    margin: 0 0 1.5rem 0;
                }

                & > a {
                    display: inline-block;
                }

                .info_emphasis {
                    color: @global_emphasis_color;
                }

                .contract_me {
                    width: 6rem;
                    padding: 0.6rem;
                    font-size: 1.3rem;
                    text-align: center;
                    background-color: @global_emphasis_color;
                    color: @introItem_home_contact_font_color;
                }

                .blogs {
                    display: flex;
                    font-size: 1rem;

                    .blog_item {
                        &:not(:first-child) {
                            margin-left: 1rem;
                        }

                        &:nth-child(3) {
                            display: flex;
                            align-items: center;
                        }
                    }
                }
            }


            .avatar {

                width: 5rem;
                flex-grow: 2;
                #flex_center();

                .home__blob {
                    fill: @introItem_home_avatar_background_color;
                    width: 24rem;
                }

                .home__blob-img {
                    width: 20rem;

                    @media screen and (max-width: @Mobile_width) {
                        width: 25rem;
                    }
                }
            }
        }
    }


    #aboutme {
        #intro_container();

        .whoami {
            #flex_center();
            flex-wrap: wrap;
            margin-top: 2rem;

            .pic {
                width: 300px;
                border-radius: 0.8rem;
            }

            .introduce {
                align-self: flex-start;
                padding: 0 @introItem_aboutme_introduce_padding;
                flex-basis: 22.6rem;


                p {
                    margin-bottom: 10px;
                    font-size: @introItem_aboutme_introduce_title_font_size;
                }

                div {
                    font-weight: 500;
                    line-height: 1.5;
                    font-size: @introItem_aboutme_introduce_content_font_size;
                }
            }
        }
    }

    
    #skills {
        #intro_container();

        .container {
            display: flex;

            ul {
                #cls_mp();

                li {
                    list-style: none;
                }
            }
            
            & > div {
                flex: 1 1 50%;
            }

            .skills_left {
                padding: 2rem;

                & > p {
                    font-size: @introItem_skills_introduce_title_font_size;
                    font-weight: @global_font_weight;
                    #cls_mp();
                }

                .skills_introduce {
                    font-size: @introItem_skills_introduce_content_font_size;
                    font-weight: 500;
                    line-height: @introItem_skills_introduce_content_line_height;
                    margin: 16px 0 32px 0;
                }
            }

            .skills_right {
                padding: 2rem;

                .skills_list {
                    margin-top: 5rem;
                }
            }

        }
    }


    #works {
        #intro_container();

        .works_container {
            #flex_center();
            flex-wrap: wrap;


            .work_item {
                width: @introItem_works_work_item_width;
                height: @introItem_works_work_item_height;
                margin: 1rem;
                box-shadow: 0px 4px 25px rgba(15, 49, 71, 0.15);
                border-radius: 0.5rem;
                overflow: hidden;
                transition-property: all;
                transition-timing-function: ease-in-out;
                transition-duration: .35s;

                img {
                    width: 100%;
                    height: 100%;
                }

                &:hover {
                    transform: scale(1.05);
                }
            }
        }
    }


    #contact {
        #intro_container();

        .el-descriptions {
            width: 50%;


            ::v-deep td.el-descriptions-item__cell.el-descriptions-item__content {

                @media screen and (min-width: @Mobile_width) {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                }
                
            }


            ::v-deep button.el-button.el-button--primary {
                background-color: @introItem_contact_copyButton_bgColor;
                @media screen and (max-width: @Mobile_width) {
                    display: none;
                }

                &:hover {
                    background-color: @introItem_contact_copyButton_hover_bgColor;
                }
            }
        }
    }
</style>
