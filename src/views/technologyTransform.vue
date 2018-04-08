<template>
    <div>
        <navWebsite></navWebsite>
        <div class = "Transform_con">
            <headerWebsite></headerWebsite>
            <div class = "TransformContent">
                <div class = "hotArea_con">
                    <div class = "hotArea_word">热门领域</div>
                    <div class = "theme">
                        <span>大数据</span><span>计算机</span><span>信息技术服务</span>
                    </div>                   
                </div>
                <searchBefore></searchBefore>
            </div>
        </div>
    </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>
    .Transform_con{
        margin-left: 220px;
        background: #EEF2F3;
        height: 100%;
        .TransformContent{
            padding: 20px 2%;
            .hotArea_word{
                line-height: 28px;
                font-size: 14px;
                color: #62819D;
            }
            .theme{
                span{
                    display: inline-block;
                    padding: 0 1.5%;
                    margin-bottom: 11px;
                    height: 28px;
                    line-height: 28px;
                    font-size: 14px;
                    color: #fff;
                    background: #62819D;
                    margin-right: 1%;
                    border-radius: 20px;
                    cursor: pointer;
                }
            }
        }
    }
</style>
<script>
    import bus from '../store/bus.js';
    import navWebsite from '../components/nav.vue';
    import headerWebsite from '../components/header.vue';
    import searchBefore from './tecnologySearch/searchBefore.vue'
    export default {
        name: 'app',
        components: {
            navWebsite,
            headerWebsite,
            searchBefore,
        },
        data(){
            return{

            }
        },
        mounted(){
            bus.$emit("changePlacehold",this.$route.name)
        }
    }
</script>
    

