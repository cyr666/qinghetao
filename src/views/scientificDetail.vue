<template>
    <div>
        <nav-website></nav-website>
        <div class = "scientificDetail">
            <header-Website></header-Website>
            <div class = "content">
                <div class = "con-left" :class = "{'bigBox':!topicShow}">
                    <div class = "box1">
                        <div class = "header">
                            <div class = "head-top">
                                <p>{{detailInfo.title}}</p>
                            </div>
                            <div class = "head-bottom" v-if = "detailInfo.tabList">
                                <span>标签 : </span>
                                <span v-for = "item in detailInfo.tabList" :key="item.id">{{item}}</span>
                            </div>
                        </div>
                        <div class = "mainBody">
                            <h3>一、成果介绍</h3>
                            <div class = "introduce" v-html = "detailInfo.introduce"></div>
                            <h3>二、技术指标</h3>
                            <div class = "technical_indicators" v-html = "detailInfo.technical_indicators"></div>
                            <h3>三、应用说明</h3>
                            <div class = "application_description" v-html = "detailInfo.application_description"></div>
                            <h3>四、效益分析</h3>
                            <div class = "benefit_analysis" v-html = "detailInfo.benefit_analysis"></div>
                            <h3>五、合作方式</h3>
                            <div class = "cooperation_mode" v-html = "detailInfo.cooperation_mode"></div>
                            <h3>六、所属行业领域</h3>
                            <div class = "industry_field" v-html = "detailInfo.industry_field"></div>
                        </div>
                    </div>
                    <div class = "box2">
                        <nav class = "nav">
                            <ul class = "nav-ul">
                                <template v-for="(item,i) in navList">
                                    <li :class="{'active':i===0}" data-toggle="tab"  :key="item.id"  @click="tabClick(i+1)">
                                        <a href="" >{{item}}</a>
                                    </li>
                                </template>
                            </ul>
                        </nav>
                        <div class="tab-content">
                            <div class="tab-pane fade in active" style="padding:0 20px;">
                                <div v-for="item in newsContent" class="detail" :key="item.id">
                                    <img :src="item.cover" class="img" @click="scientificDetail(item.id)"/>
                                    <div class="text">
                                        <div class="title" @click="scientificDetail(item.id)">{{item.title}}</div>
                                        <p class="small-title">{{item.abstracts}}</p>
                                        <div class="base">
                                            <img src="../assets/img/date@2x.png"/><span>{{item.institution}}</span>
                                            <img src="../assets/img/source@2x.png"/>
                                            <span v-for = "a in item.mavinArray" :key="a.id">
                                                {{a.name}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class = "con-right" v-if = "topicShow">
                    <div class="headline"><span class="border"></span>机构和团队</div>
                    <div class="team">
                        <div class="title">所属机构</div>
                        <div class="logo">
                            <img src = "" class = "logo_pic"/>
                            <div class = "logoIntruc_con">
                                <p class = "logo_name">清华大学</p>
                                <p class = "logo_intruc">啦啦啦</p>
                            </div>
                        </div>
                        <div class = "team_intruc" :class = "{'showAll':show}" ref = "team_intruc">
                            几点开始的代课老师角度考虑成熟阶段了看到了就是了肯定就是来看看角度来说看到了思考
                        </div>
                        <div class="more" v-if="!show" @click="more"><img src="../assets/img/more@2x.png"/>展开</div>
                        <div class="stop" v-if="show" @click="stop"><img src="../assets/img/stop@2x.png"/>收起</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style style lang="less" rel="stylesheet/less" scoped>
    .scientificDetail{
        margin-left:220px;
        height:100%;
        .content{
            padding:20px;
            overflow: hidden;
            .bigBox{
                // width:100% !important;
                // padding-right:0 !important;
            }
            .con-left{
                width:76%;
                float:left;
                padding-right:20px;
                .box1{
                    background:#fff;
                    padding:20px 20px 40px 20px;
                    .header{
                        border-bottom:1px solid #DDDDDD;
                        padding-bottom:14px;
                        overflow: hidden;
                        .head-top{
                            width:100%;
                            padding-right:20px;
                            p{
                                font-size:26px;
                                color:rgba(46,49,50,1);
                            }
                            span{

                            }
                        }
                    }
                     .mainBody{
                        margin-top: 40px;
                        padding:20px;
                        line-height:30px;
                    }
                }
                .box2{
                    margin-top:20px;
                    background:#fff;
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
                            padding:10px 0;
                            overflow: hidden;
                            border-bottom:1px solid #DDDDDD;
                            .img{
                                width:220px;
                                height:127px; 
                                float:left;
                                cursor:pointer;
                            }
                            .text{
                                //float:left;
                                //margin-left:20px;
                                margin-left:260px;
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
                                    bottom:20px;
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
            .con-right{
                width:24%;
                float:left;
                box-sizing: border-box;
                .headline{
                    font-size:18px;
                    color:rgba(46,49,50,1);
                    margin-bottom:20px;
                    .border{
                        width:3px;
                        height:18px;
                        float:left;
                        background:rgba(0,165,251,1);
                        margin-top:4px;
                        margin-right:6px;
                    }
                }
                .team{
                    box-sizing: border-box;
                    width:262px;
                    height:273px; 
                    background:rgba(255,255,255,1);
                    .title{
                        box-sizing: border-box;
                        font-size:14px;
                        padding-left:20px;
                        height:45px;
                        line-height:45px;
                        color:#5F697D;
                        border-bottom:1px solid #eee;
                    }
                    .logo{
                        box-sizing: border-box;
                        padding:20px;
                        .logo_pic{
                            float:left;
                            width:80px;
                            height:78px; 
                        }
                        .logoIntruc_con{
                            box-sizing: border-box;
                            float:left;
                            margin-left:20px;
                            padding:12px 0;
                            .logo_name{
                                font-size:18px;
                                color:#2E3132;
                            }
                            .logo_intruc{
                                font-size:13px;
                                color:#2E3132;
                            }
                        }
                    }
                    .team_intruc{
                        box-sizing: border-box;
                        width:262px;
                        height:56px;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                        padding:20px;
                        font-size:14px;
                        color:#5F697D;
                        text-indent: 2em;
                    } 
                    .showAll{
                        width:262px !important;
                        padding:20px !important;
                        font-size:14px !important;
                        color:#5F697D !important;
                        text-indent: 2em !important;
                    }
                    .more,.stop{
                        margin-top:20px;
                        cursor:pointer;
                        font-size:13px;
                        color:rgba(133,144,166,1);
                        text-align:center;
                        img{
                            width:14px;
                            height:8px;
                            margin-left:10px;
                        }
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
    export default{
        components: {
            navWebsite,
            headerWebsite
        },
        data() {
            return{
                topicShow:false,
                scientificId:'',
                detailInfo:{},
                navList:["推荐成果","推荐内参","相关动态"],
                newsContent:[],
                idFrom:1,
                topicShow:true,
                show:false
            }
        },
        methods: {
            scientificDetail(){
                this.scientificId = sessionStorage.getItem('scientificId');
                $.ajax({
                    url: this.biz.serverUrl+'/piionee/getAchievementDetails',
                    type: 'get',
                    dataType: 'json',
                    data: {
                        id:this.scientificId,
                    },
                    success: (res) => {
                        if(res.status === 0){
                            this.detailInfo = res;
                            // if(res.author){
                            //     this.author = res.author;
                            // }
                            // if(res.topicArray && res.topicArray.length >0){
                            //     this.topicShow = true;
                            //     this.topicId = res.topicArray[0].id;
                            //     // 刷新相关技术主题列表
                            //     this.relatedShow = false;
                            //     setTimeout(()=>{
                            //         this.relatedShow = true;
                            //     },100);

                            //     this.theme = res.topicArray;
                            //     this.getCharts();
                            // } else {
                            //     this.topicShow = false;
                            // }
                            console.log(res)
                        }
                    }
                })
            },
            ///piionee/getRecommand?id=1& (http://47.94.218.122:8085/piionee/getRecommandReport?id=1&rows=5)idFrom=2
            getRecommand(){
                this.scientificId = sessionStorage.getItem('scientificId');
                $.ajax({
                    url: this.biz.serverUrl + '/piionee/getRecommand',
                    type: 'get',
                    dataType: 'json',
                    data: {
                        id:this.scientificId,
                        idFrom:this.idFrom
                    },
                    success: (res) => {
                        if(res.status === 0){
                           if(this.idFrom === 1){
                                this.newsContent = res.achievementArray
                               console.log("1")
                           }else if(this.idFrom === 2){
                                this.newsContent = res.reportArray
                               console.log("2")
                           }else if(this.idFrom === 3){
                                this.newsContent = res.newsArray
                               console.log("3")
                           }
                        }
                    }
                })
            },
            tabClick(id){
                this.idFrom = id;
                this.getRecommand();
                console.log(id)
            },
            more(){
                this.show = true;
                let team = this.$refs.team_intruc;
                team.classList.remove("team_intruc");
            },
            stop(){
                this.show = false;
            }
        },
        mounted(){
            this.scientificDetail();
            this.getRecommand();
            bus.$on('scientificDetail',()=>{
                window.scrollTo(0, 0);
                this.scientificDetail();
                // this.recommand();
                bus.$emit('setSearchVal');
            });
        }
    }
</script>