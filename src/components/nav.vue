
<template>
    <div class="nav">
        <img src="../assets/img/LOGO.png" class="logo"/>
        <div class="nav-list" :class="{'active':selected4}" @click="changeTab('bigdata')">
            <img src="../assets/img/bigData1.png" class="bigData-icon" v-if="!selected4"/>
            <img src="../assets/img/bigData2.png" class="bigData-icon" v-if="selected4"/>
            <span style="margin-left:11px;">科技大数据</span>
        </div>
        <div class="nav-list" :class="{'active':selected5}" @click="changeTab('technologyTransform')">
            <img src="../assets/img/scientific1.png" class="scientific-icon" v-if="!selected5"/>
            <img src="../assets/img/scientific2.png" class="scientific-icon" v-if="selected5"/>
            <span style="margin-left:12px;">技术转移服务</span>
        </div>
        <div class="nav2" :class="{'bg':selected2}">
            <div class="nav-list" :class="{'active':selected2}" @click="changeTab('reference')">
                <img src="../assets/img/nav-white02@2x.png" class="reference-icon" v-if="!selected2"/>
                <img src="../assets/img/nav-blue02@2x.png" class="reference-icon" v-if="selected2"/>
                <span style="margin-left:13px;">科技分析</span>
                <i class="jiantou"></i>
            </div>
            <ul class="nav-child">
                <li v-for="item in navChild" @click="anchor(item.id)">{{item.value_zh}}</li>
            </ul>
        </div>
        <div class="nav-list" :class="{'active':selected1}" @click="changeTab('dynamic')">
            <img src="../assets/img/nav-white01@2x.png" class="dynamic-icon" v-if="!selected1"/>
            <img src="../assets/img/nav-blue01@2x.png" class="dynamic-icon" v-if="selected1"/>
            <span style="margin-left:10px;">科技动态</span>
        </div>
        <!-- <div class="nav-list" :class="{'active':selected3}" @click="changeTab('scientific')">
            <img src="../assets/img/scientific1.png" class="scientific-icon" v-if="!selected3"/>
            <img src="../assets/img/scientific2.png" class="scientific-icon" v-if="selected3"/>
            <span style="margin-left:12px;">科技成果</span>
        </div> -->
        <p class="copyright">Copyright © 2013-2018 Greenut. All Rights Reserved.</p>
    </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>
.nav{
    width:220px;
    //position:absolute;
    position:fixed;
    top:0;
    left:0;
    height:100%;
    background:rgba(47,57,77,1);
    padding-top:40px;
    //text-align:center;
    color:#ffffff;
    .logo{
        width:110px;
        height:59px;
        margin-left:51px;
        margin-bottom:40px;
    }
    .nav-list{
        font-size:16px;
        height:50px;
        line-height:50px;
        padding-left:38px;
        cursor:pointer;
        border-left: 3px solid rgba(47,57,77,1);
        .dynamic-icon{
            width:22px;
            height:15px;
        }
        .reference-icon{
            width:17px;
            height:14px;
            margin-left:3px;
        }
        .scientific-icon{
            width:15px;
            height:17px;
            margin-left:5px;
        }
        .bigData-icon{
            width:17px;
            height:17px;
            margin-left:3px;
        }
    }
    .active{
        background:rgba(37,45,63,1);
        color:rgba(0,165,251,1);
        border-left: 3px solid rgba(0,165,251,1);
    }
    .bg{
        background:rgba(37,45,63,1);
    }
    .nav2{
        position:relative;
        .jiantou{
            position:absolute;
            top:21px;
            right:15px;
            background:url(../assets/img/nav-jiantou@2x.png);
            background-size:12px 7px;
            width:12px;
            height:7px;
        }
        .nav-child{
            margin-left:90px;
            li{
                height:50px;
                line-height:50px;
                cursor:pointer;
            }
        }
    }
    .copyright{
        position:absolute;
        bottom:20px;
        left:20px;
        width:180px;
        font-size:10px;
        color:rgba(153,153,153,1);
        text-align:center;
    }

}
</style>
<script>
    import bus from '../store/bus.js'
    export default {
        name: 'app',
        components: {},
        data(){
            return {
                selected1:false,
                selected2:false,
                selected3:false,
                selected4:true,
                selected5:false,
                navChild:[]
            }
        },
        methods:{
            anchor(id){
                this.$router.push(`/reference`);
                sessionStorage.setItem('anchorId',id);
                bus.$emit('referenceLoad',id);
                sessionStorage.setItem('searchType','click');
                sessionStorage.setItem('classification','reference');
            },
            changeTab(val){
                if(val === 'dynamic'){
                    this.$router.push(`/dynamic`);
                    bus.$emit('dynamicLoad');
                }
                if(val === 'reference'){
                    this.$router.push(`/reference`);
                    bus.$emit('referenceLoad');
                }
                if(val === 'scientific'){
                    //this.anchorId = '';
                    this.$router.push(`/scientific`);
                    bus.$emit('scientificLoad');
                }
                if(val === 'bigdata'){
                    //this.anchorId = '';
                    this.$router.push(`/bigdata`);
                    //bus.$emit('scientificLoad');
                }
                if(val === 'technologyTransform') {
                    this.$router.push(`/technologyTransform`);
                }
                sessionStorage.setItem('searchType','click');
                sessionStorage.setItem('classification',val);
                bus.$emit('setSearchVal');
            },
            setTabColor() {
                let routeName = this.$route.name;
                if(routeName === 'bigdata'){
                    this.selected1 = false;
                    this.selected2 = false;
                    this.selected3 = false;
                    this.selected4 = true;
                    this.selected5 = false;
                    sessionStorage.setItem('classification','bigdata');
                }
                if(routeName === 'dynamic' || routeName === 'newsDetail'){
                    this.selected1 = true;
                    this.selected2 = false;
                    this.selected3 = false;
                    this.selected4 = false;
                    this.selected5 = false;
                    sessionStorage.setItem('classification','dynamic');
                }
                if(routeName === 'reference' || routeName === 'referenceDetail'){
                    this.selected1 = false;
                    this.selected2 = true;
                    this.selected3 = false;
                    this.selected4 = false;
                    this.selected5 = false;
                    sessionStorage.setItem('classification','reference');
                }
                if(routeName === 'scientific' || routeName === 'scientificDetail'){
                    this.selected1 = false;
                    this.selected2 = false;
                    this.selected3 = true;
                    this.selected4 = false; 
                    this.selected5 = false;
                    sessionStorage.setItem('classification','scientific');
                }
                if(routeName === 'technologyTransform'){
                    this.selected1 = false;
                    this.selected2 = false;
                    this.selected3 = false;
                    this.selected4 = false;
                    this.selected5 = true; 
                    sessionStorage.setItem('classification','technologyTransform');
                }
                // 未登录时返回到登录页
                let userName = sessionStorage.getItem('userName');
                if(userName === null){
                    this.$router.push(`/login`);
                    bus.$emit('quit');
                }
            },
            getReportType(){
                $.ajax({
                    url: 'http://47.94.218.122:8085/piionee/getReportType',
                    type: 'get',
                    dataType: 'json',
                    data: {},
                    success: (res) => {
                        if(res.status === 0){
                            this.navChild = res.reportTypeArray;
                        }
                    }
                })
            }
        },
        mounted(){
            this.setTabColor();
            this.getReportType();
        }
    }
</script>

