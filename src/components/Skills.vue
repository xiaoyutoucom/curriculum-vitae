<template>
    <transition
        :appear="true"
    >
        <li class="skill_item" ref="skill_item">
            <span class="skill_name">
                <i 
                    class="bx"
                    :class="icon_class_name"
                >
                </i>
                {{ skill_name }}
            </span>
            <span class="progress_num">{{ progress_num }}%</span>
            <el-progress
                style="width: 100%; margin-top: 0.56rem;"
                :stroke-width="22"
                :text-inside="progress_inside"
                :show-text="isMobile"
                :percentage="progress_num"
                :class="{night_progress_font_color: isMobile}"
            >
            </el-progress>
        </li>
    </transition>
</template>

<script>
    export default {
        name: "Skills", // 指定组件名,
        mounted() {
            this.isMobile = document.documentElement.scrollWidth < 750 ? true : false   // 移动端的掌握程度显示在进度条内, PC端显示在右侧
            this.$bus.$on("isDarkReaderEnabled", bool => {
                this.isDarkReaderEnabled = bool
            })
            addEventListener("resize", ()=>{
                this.isMobile = document.documentElement.scrollWidth < 750 ? true : false   // 移动端的掌握程度显示在进度条内, PC端显示在右侧
            })
        },
        data() {
            return {
                isMobile: false,
                isDarkReaderEnabled: false,
                origin_transition: undefined,
            }
        },
        watch: {
            isDarkReaderEnabled: {
                handler(bool) {
                    const li = this.$refs.skill_item
                    if (!this.origin_transition) {
                        this.origin_transition = getComputedStyle(li).transition
                    }
                    
                    if (bool) {
                        li.style.transition = "none"
                        li.style.transform = "none"
                        li.classList.remove("fix_toggle_day_night_transition")

                    }else {
                        li.style.transition = this.origin_transition
                        li.classList.add("fix_toggle_day_night_transition")
                    }
                    
                },
            },
        },
        computed: {
            // 移动端显示在外面， PC端显示在里面
            progress_inside() {
                return !this.isMobile
            },
        },
        props: {
            skill_name: {
                default: "暂无技能",
            },
            progress_num: {
                default: 0,
            },
            icon_class_name: {
                type: String,
                default: "bxl-javascript",
            },
        }
    }
</script>

<style lang="less" scoped>
    @import "../config.less";

    // 让技能掌握程度条也使用上全局主题色
    ::v-deep .el-progress-bar__inner {
        background-color: @global_emphasis_color !important;
    }

    .skill_item {
        background-color: #fff;
        margin-bottom: 18px;
        padding: 0.72rem 1.39rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 25px rgba(14, 35, 48, 0.15);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        transition-duration: @introItem_skills_skill_item_hover_animation_duration;
        transition-property: all;
        transition-timing-function: linear;


        .skill_name {

            display: flex;
            align-items: center;

            i {
                font-size: @introItem_skills_skill_item_icon_size;
                color: @global_emphasis_color;
                margin-right: 5px;
            }
        }

        .progress_num {
            @media screen and (max-width: @Mobile_width) {
                display: none;
            }
        }

        &:hover {
            transform: translateY(-8px);
        }


        // 修复skills在暗黑模式下文字显示问题
        ::v-deep .el-progress {
            .el-progress-bar__innerText {
                color: @global_anti_emphasis_color !important;
            }

            .el-progress__text {
                font-size: @introItem_skills_introduce_content_font_size * 1.2 !important;
                margin-left: 12px !important;
            }
        }
    }

    // 从暗黑模式切换回白天模式后重新拥有过渡
    .fix_toggle_day_night_transition {
        &:hover {
            transform: translateY(-8px)!important;
        }
    }

    // 暗黑模式skills项进度条字体颜色
    .night_progress_font_color {
        color: #D6D2CA !important;
    }
</style>
