<template>
    <div>
        <nav-website></nav-website> 
        <div class = "scientific">
            <header-website></header-website>
            <div class = "content">
                <div class = "box">
                    <nav class = "nav" v-if="navShow">
                        <ul class = "nav-ul">
                           <template v-for="(item,i) in navList">
                                <li :class="{'active':i===0}" data-toggle="tab"  :key="item.id" @click="tabClick(item.id)">
                                    <a href="" >{{item.value_zh}}</a>
                                </li>
                            </template>
                        </ul>
                    </nav>
                    <div class="tab-content">
                        <div class="tab-pane fade in active" style="padding:0 20px;">
                            <div v-for="item in newsContent" class="detail">
                                <img :src="item.cover" class="img" @click="scientificDetail(item.id)"/>
                                <div class="text">
                                    <div class="title" @click="scientificDetail(item.id)">{{item.title}}</div>
                                    <p class="small-title">{{item.abstracts}}</p>
                                    <div class="base">
                                        <img src="../assets/img/jigou.png"/><span>{{item.institution}}</span>
                                        <img src="../assets/img/teach.png"/>
                                        <span v-for = "a in item.mavinArray" :key="a.id">
                                            {{a.name}}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <navigation
                    v-if="pages !==0"
                    :pages="pages"
                    @navpage="msgListView">
                </navigation>
            </div>
        </div>
    </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>
    .scientific {
        margin-left:220px;
        height:100%;
        .content {
            padding:20px 20px 0 20px;
            .box{
                background:#fff;
                border-radius: 2px;
                .nav-ul{
                    width:100%;
                    height:50px;
                    line-height:50px;
                    list-style: none;
                    background:rgba(230,232,233,1);
                    border-radius: 2px 2px 0 0;
                    margin-bottom:0;
                    li{
                        float:left;
                        padding:0 24px;
                        cursor:pointer;
                        a{
                            text-decoration: none;
                            color:rgba(95,105,125,1);
                        }
                    }
                    .active{
                        background:#fff;
                        a{
                            color:rgba(0,165,251,1);
                        }
                    }
                }
                .tab-content{
                    .detail{
                        padding:22px 0;
                        overflow: hidden;
                        border-bottom:1px solid #DDDDDD;
                        .img{
                            width:260px;
                            height:150px;
                            float:left;
                            margin-right:20px;
                            cursor:pointer;
                        }
                        .text{
                            //float:left;
                            //margin-left:20px;
                            margin-left:280px;
                            position:relative;
                            height:150px;
                            .title{
                                font-size:22px;
                                color:rgba(46,49,50,1);
                                cursor:pointer;
                            }
                            .small-title{
                                color:rgba(133,144,166,1);
                                margin-top:10px;
                            }
                            .base{
                                position:absolute;
                                bottom:0;
                                left:0;
                            }
                            img{
                                width:14px;
                                height:14px;
                                margin-right:5px;
                            }
                            span{
                                font-size:12px;
                                color:rgba(133,144,166,1);
                                margin-right:20px;
                            }
                        }
                        &:hover{
                            background:rgba(247,249,249,1);
                            .title{
                                color:rgba(0,165,251,1);
                            }
                        }
                    }
                    .detail:last-child{
                        border:0;
                    }
                }
            }
        }
    }
</style>
<script>
    import bus from '../store/bus.js';
    import navWebsite from '../components/nav.vue';
    import headerWebsite from '../components/header.vue';
    import navigation from '../components/pagination.vue';

    export default{
        name: 'app',
        components: {
            navWebsite,
            headerWebsite,
            navigation
        },
        data(){
            return {
                navList:[],
                pages:0,//总页数
                pageNum:1,//当前页
                flag:0,
                newsContent:[],
                query:'',
                navShow:false
            }
        },
        methods:{
            msgListView(curPage){
                this.pageNum = curPage;
                if(this.flag === 0){
                    this.getNewsList();
                } 
                
                window.scrollTo(0, 0);
            },
            getNewsCategory(){
                $.ajax({
                    url: this.biz.serverUrl+'/piionee/getAchievementType',
                    type: 'get',
                    dataType: 'json',
                    data: {},
                    success: (res) => {
                        if(res.status === 0){
                            this.navList = res.achievementTypeArray;
                            this.categoryId = this.navList[0].id;
                            this.pageNum = 1;
                            this.getNewsList();
                        }
                    }
                })
            },
            getNewsList(){
                $.ajax({
                    url: this.biz.serverUrl+'/piionee/getAchievementByType',
                    type: 'get',
                    dataType: 'json',
                    data: {
                        id:this.categoryId,
                        page:this.pageNum,
                        rows:10
                    },
                    success: (res) => {
                        if(res.status === 0){
                            this.pages = Math.ceil(res.numFound / 10);
                            this.newsContent = res.achievementArray;
                            this.flag = 0;
                            console.log(res)
                        }
                    }
                })
            },
            getSearchNewsList(){
                this.query = sessionStorage.getItem('searchVal');
                $.ajax({
                    url: this.biz.serverUrl+'/piionee/getAchievementByQuery',
                    type: 'get',
                    dataType: 'json',
                    data: {
                        query:this.query,
                        page:this.pageNum,
                        rows:10
                    },
                    success: (res) => {
                        if(res.status === 0){
                            console.log(res)
                            this.pages = Math.ceil(res.numFound / 10);
                            this.newsContent = res.achievementArray;
                            this.flag = 1;
                        }
                    }
                })
            },
            tabClick(id){
                this.categoryId = id;
                this.pageNum = 1;
                bus.$emit('firstPage');
                this.getNewsList();
            },
            scientificDetail(id){
                this.$router.push(`/scientificDetail`);
                sessionStorage.setItem('scientificId',id);
                bus.$emit('scientificDetail');
            }
        },
        mounted(){
            this.getNewsCategory();
            this.navShow = true;
            bus.$on('scientificLoad',()=>{
                this.navShow = false;
                setTimeout(()=>{
                    this.navShow = true;
                },100);
                this.getNewsCategory();
                window.scrollTo(0, 0);
            });
            bus.$on('scientificListLoad',()=>{
                this.navList = [];
                this.newsContent = [];
                this.navShow = false;
                this.pageNum = 1;
                bus.$emit('firstPage');
                this.getSearchNewsList();
                bus.$emit('setSearchVal');
            })
        }
      }
</script>