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
                        <div class = "mainBody" ref = "text">
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
                                <!-- 推荐成果模板 -->
                                 <div v-for="item in newsContent" :key="item.id" class="detail" v-if = "achievement">
                                    <img :src="item.cover" class="img" @click="newsDetail(item.id)"/>
                                    <div class="text">
                                        <div class="title" @click="newsDetail(item.id)">{{item.title}}</div>
                                        <p class="small-title">{{item.abstracts}}</p>
                                        <div class="base">
                                            <img src="../assets/img/date@2x.png"/><span>{{item.release_time}}</span>
                                            <img src="../assets/img/source@2x.png"/><span>{{item.source}}</span>
                                        </div>
                                    </div>
                                </div>
                                <!-- 推荐内参模板 -->
                                <div v-for="item in newsContent" class="detail" :key="item.id" v-if = "report">
                                    <img :src="item.cover" class="img" @click="scientificDetail(item.id)"/>
                                    <div class="text">
                                        <div class="title" @click="scientificDetail(item.id)">{{item.title}}</div>
                                        <div class="base">
                                            <div class = "base_left">
                                                <img :src="item.author.avator"/><span>{{item.author.position}}:</span>
                                                <!-- <img src="../assets/img/source@2x.png"/> -->
                                                <span>{{item.author.name}}</span>
                                            </div>
                                            <div class = "base_right">
                                                <span class = "time">{{item.release_time}}</span>
                                            </div>                                           
                                        </div>
                                    </div>
                                </div>
                                <!-- 相关动态模板 -->
                                <div v-for="item in newsContent" :key="item.id" class="detail" v-if = "news">
                                    <img :src="item.cover" class="img" @click="newsDetail(item.id)"/>
                                    <div class="text">
                                        <div class="title" @click="newsDetail(item.id)">{{item.title}}</div>
                                        <p class="small-title">{{item.abstracts}}</p>
                                        <div class="base basenews">
                                            <img src="../assets/img/date@2x.png"/><span>{{item.release_time}}</span>
                                            <img src="../assets/img/source@2x.png"/><span>{{item.source}}</span>
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
                            <img :src="institution.logo" class = "logo_pic"/>
                            <div class = "logoIntruc_con">
                                <p class = "logo_name">清华大学</p>
                                <p class = "logo_intruc">{{institution.name}}</p>
                            </div>
                        </div>
                        <div :class = "{showAll:show,'team_intruc':!show}" ref = "team_intruc">
                            {{institution.introduce}}
                        </div>
                        <div class="more" v-if="!show" @click="more"><img src="../assets/img/more@2x.png"/>展开</div>
                        <div class="stop" v-if="show" @click="stop"><img src="../assets/img/stop@2x.png"/>收起</div>
                    </div>
                    <div class = "research">
                        <div class="title">研究团队</div>
                        <ul class = "member_con">
                            <li v-for='item in mavinArray' :key="item.id">
                                <span class = "symbol" :style = "{background:activeColor}">{{item.name}}</span>
                                <div class = "memberIntruc_con">
                                    <p class = "memberName">{{item.name}}</p>
                                    <p class = "memberMajor"><span v-for="topic in item.topicArray">{{topic.value}}&nbsp;</span></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="headline"><span class="border"></span>数据仪表盘</div>
                    <nav class="nav" v-if="dataShow">
                        <ul class="themeUl">
                            <li :class="{'active':i===0}" v-for="(item,i) in theme" data-toggle="tab" :key = item.id
                            @click="changeTheme(item.id)">{{item.value}}</li>
                        </ul>
                    </nav>
                    <div class = "slideImg_con" v-if="picShow">
                        <div class="title">图片说明</div>
                        <swiper :options="swiperOption">
                            <swiper-slide class="slide1"  v-for="item in picArr" :key="item.id"><img :src="item" class = "swiperImg"/></swiper-slide>
                        </swiper>
                    </div>
                    <div class="card achievements" v-if="mentionShow">
                        <div class="title">技术成果</div>
                        <div id="bar-graph"></div>
                    </div>
                    <div class="card" v-if="tendencyShow">
                        <div class="title">趋势预测</div>
                        <div id="line"></div>
                    </div>
                    <div class="card tendency" v-if="analysisShow">
                        <div class="title">趋势预测</div>
                        <div style="padding-top:30px;">
                            <div id="pie"></div>
                            <div class="saturated">饱和值<span>{{analysis.saturated_value}}</span>篇</div>
                            <div style="text-align:center">
                                <div style="overflow: hidden;padding-bottom:20px;display:inline-block">
                                    <div class="tendency-left">
                                        <p>{{analysis.halfLife_time}}</p>
                                        <span>半衰期</span>
                                    </div>
                                    <div class="tendency-right">
                                        <p>{{analysis.saturated_year}}</p>
                                        <span>饱和年份</span>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                // width:100%;
                // padding-right:0;
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
                                    .base_left{
                                        float:left;
                                        img{
                                            width:34px;
                                            height:34px;
                                            border-radius: 17px;
                                            margin-right:5px;
                                        }
                                        span{
                                            font-size:12px;
                                            color:rgba(133,144,166,1);
                                            //margin-right:20px;
                                        }                                   
                                    }
                                    .base_right{
                                        float:left;
                                        font-size:12px;
                                        color:rgba(133,144,166,1);
                                        margin-left: 276px;
                                        margin-top: 10px;
                                    }                                   
                                }
                                .basenews{
                                    img{
                                        width:14px;
                                        height:14px;
                                        margin-right:5px;
                                        }
                                    span{
                                        font-size:12px;
                                        color:rgba(133,144,166,1);
                                        //margin-right:20px;
                                    }      
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
                            height:80px; 
                        }
                        .logoIntruc_con{
                            box-sizing: border-box;
                            float:left;
                            width:120px;
                            margin-left:20px;
                            padding:12px 10px;
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
                        padding:0 20px;
                        font-size:14px;
                        color:#5F697D;
                        text-indent: 2em;
                    } 
                    .showAll{
                        width:262px;
                        height:auto;
                        overflow: hidden;
                        padding:0px 20px;
                        font-size:14px;
                        color:#5F697D;
                        text-indent: 2em;
                    }
                    .more,.stop{
                        padding:10px 0;
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
                .research{
                    width: 262px;
                    height: auto; 
                    margin-top: 10px;
                    margin-bottom: 20px;
                    background: rgba(255,255,255,1);
                    .title{
                        box-sizing: border-box;
                        font-size:14px;
                        padding-left:20px;
                        height:45px;
                        line-height:45px;
                        color:#5F697D;
                        border-bottom:1px solid #eee;
                    }
                    .member_con{
                        box-sizing: border-box;
                        padding:20px;
                        li{
                            height:auto;
                            box-sizing: border-box;
                            padding:15px 0;
                            border-bottom:1px dashed #E9EFF3 ;
                            list-style-type: none;
                            overflow: hidden;
                            .symbol{
                                float:left;
                                width:48px;
                                height:48px;
                                line-height:48px;
                                font-size:30px;
                                padding:0px 10px;
                                text-align: center;
                                background:#00A5FB;
                                color:#fff;
                                overflow: hidden;
                            }
                            .memberIntruc_con{
                                box-sizing: border-box;
                                padding-left:12px;
                                height: auto;
                                float:left;
                                .memberName{
                                    font-size:16px;
                                    color:#2E3132
                                }
                                .memberMajor{
                                    width:160px;
                                    font-size:12px;
                                    color:#5F697D;
                                }
                            }
                        }
                    }
                }
                .themeUl{
                    list-style: none;
                    li{
                        float:left;
                        padding:5px 12px;
                        font-size:12px;
                        color:rgba(95,105,125,1);
                        background:rgba(220,228,231,1);
                        border-radius: 100px;
                        cursor:pointer;
                        margin-right:10px;
                        margin-bottom:10px;
                    }
                    .active{
                        background:rgba(0,165,251,1);
                        color:#ffffff;
                    }
                }
                .slideImg_con{
                    box-sizing: border-box;
                    width:262px;
                    height:332px;
                    margin-bottom:20px;
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
                    .swiperImg{
                        width:222px;
                        height:222px;
                        margin:20px;
                    }
                }
                .card{
                    background:#fff;
                    margin-bottom:20px;
                    .title{
                        height:50px;
                        line-height:50px;
                        color:rgba(95,105,125,1);
                        padding-left:20px;
                        border-bottom:1px solid #EEEEEE;
                    }
                    #bar-graph{
                        height:200px;
                    }
                    #line{
                        height:200px;
                    }
                    #pie{
                        height:120px;
                    }
                }
                .tendency{
                    p{
                        margin:0;
                    }
                    .saturated{
                        text-align:center;
                        margin:15px 0 0 0;
                        font-size:12px;
                        color:rgba(133,144,166,1);
                        margin-bottom:30px;
                        span{
                            font-size:18px;
                            color:rgba(133,144,166,1);
                            font-family:Arial-BoldMT !important;
                            margin:0 5px;
                        }
                    }
                    .tendency-left{
                        float:left;
                        padding-right:30px;
                        border-right:1px solid #DDDDDD;
                    }
                    .tendency-right{
                        float:left;
                        padding-left:30px;
                    }
                    .tendency-left,.tendency-right{
                        text-align:center;
                        p{
                            font-size:20px;
                            color:rgba(246,92,99,1);
                        }
                        span{
                            font-size:12px;
                            color:rgba(133,144,166,1);
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
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default{
        components: {
            navWebsite,
            headerWebsite,
            swiper,
            swiperSlide
        },
        data() {
            return{
                scientificId:'',
                detailInfo:{},
                navList:["推荐成果","推荐内参","相关动态"],
                newsContent:[],
                idFrom:1,
                topicShow:false,
                show:false,
                activeColor:'green',
                topicId:'',
                institution:{},
                mavinArray:[],
                picShow:false,
                mention:{},//柱状图
                tendency:{},//折线图
                analysis:{},//饼图
                picArr:[],
                dataShow:false,
                report:false,
                achievement:true,
                news:false,
                mentionShow:true,//技术成果
                tendencyShow:true,//趋势预测
                analysisShow:true,//趋势预测饼图
                swiperOption: {
                    spaceBetween: 10,
                    loop: true,
                    autoplay: {
                        delay: 2000,
                        disableOnInteraction: false
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                },
            }
        },
        methods: {
            drawBar(){
                let chart = this.$echarts.init(document.getElementById('bar-graph'));
                let barOption = {
                    color: ['#29B4FC'],
                    tooltip : {
                        trigger: 'axis',
                        formatter: function(params) {
                            return params[0].value + '篇-' + params[0].name +'年'
                        }
                    },
                    grid: {
                        top:'3%',
                        left: '1%',
                        bottom: '10%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : this.mention.date,
                            axisLine:{show:false},
                            axisTick:{show:false}
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            show:false
                        }
                    ],
                    series : [
                        {
                            type:'bar',
                            barWidth: '60%',
                            data:this.mention.value
                        }
                    ]
                };
                chart.setOption(barOption);
            },
            drawLine(){
                let chart = this.$echarts.init(document.getElementById('line'));
                let lineOption = {
                    grid: {
                        top:'3%',
                        left: '1%',
                        bottom: '10%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : this.tendency.date,
                            axisLine:{show:false},
                            axisTick:{show:false}
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            show:false
                        }
                    ],
                    series : [
                        {
                            name:'',
                            type:'line',
                            smooth: false,
                            areaStyle: {normal: {
                                color:'rgba(251,180,74,0.3)'
                            }},
                            lineStyle:{
                                normal:{
                                    color:'rgba(251,180,74,1)',
                                    width:4
                                }
                            },
                            symbolSize:0,
                            data:this.tendency.value
                        }
                    ]
                };
                chart.setOption(lineOption);
            },
            drawPie(){
                let chart = this.$echarts.init(document.getElementById('pie'));
                let dataStyle = {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                };
                let placeHolderStyle = {
                    normal: {
                        color: 'rgba(246,92,99,0.3)',//未完成的圆环的颜色
                    },
                    emphasis: {
                        color: 'rgba(246,92,99,0.7)'//未完成的圆环的颜色
                    }
                };
                let pieOption = {
                    title: [{
                        text: this.analysis.mentions_count,
                        left: '49%',
                        top: '32%',
                        textAlign: 'center',
                        textBaseline: 'middle',
                        textStyle: {
                            color: 'rgba(246,92,99,1)',
                            fontWeight: 'normal',
                            fontSize: 24
                        }
                    }, {
                        text: '增长因子'+ this.analysis.increase_factor,
                        left: '49%',
                        top: '53%',
                        textAlign: 'center',
                        textBaseline: 'middle',
                        textStyle: {
                            color: 'rgba(133,144,166,1)',
                            fontWeight: 'normal',
                            fontSize: 12
                        }
                    }],
                    series: [{
                        type: 'pie',
                        radius: [56, 60],
                        itemStyle: dataStyle,
                        hoverAnimation: false,
                        data: [{
                            value: this.analysis.mentions_count,
                        }, {
                            value: this.analysis.saturated_value-this.analysis.mentions_count,
                            itemStyle: placeHolderStyle
                        }]
                    }]
                };
                chart.setOption(pieOption);
            },
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
                            console.log(this.detailInfo)
                            if(res.institution){
                                this.institution = res.institution
                            }
                            if(res.mavinArray && res.mavinArray.length > 0){
                                this.mavinArray = res.mavinArray;
                            }
                            // if(res.author){
                            //     this.author = res.author;
                            // }
                            if(res.topicArray && res.topicArray.length >0){
                                this.topicShow = true;
                                this.topicId = res.topicArray[0].id;
                                // 刷新相关技术主题列表
                                this.dataShow = false;
                                setTimeout(()=>{
                                    this.dataShow = true;
                                },100);
                                this.theme = res.topicArray;
                                this.getTopicInfo();
                                this.getRecommand();
                            } else {
                                this.topicShow = false;
                            }
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
                               console.log(res.achievementArray)
                           }else if(this.idFrom === 2){
                                this.newsContent = res.reportArray
                               console.log(res.reportArray)
                           }else if(this.idFrom === 3){
                                this.newsContent = res.newsArray
                               console.log(res.newsArray)
                           }
                        }
                    }
                })
            },
            tabClick(id){
                this.idFrom = id;
                this.getRecommand();
                if(id === 1){
                    this.achievement = true;
                    this.report = false;
                    this.news = false;
                }else if(id === 2){
                    this.achievement = false;
                    this.report = true;
                    this.news = false;
                }else if(id === 3){
                    this.achievement = false;
                    this.report = false;
                    this.news = true;
                }
            },
            more(){
                this.show = true;
            },
            stop(){
                this.show = false;
            },
            getActiveColor(){
                 function ranColor(){
                    return '#'+Math.floor(Math.random()*0xffffff).toString(16);
                };
                this.activeColor = ranColor();
                console.log(ranColor())
            },
            changeTheme(id){
                this.topicId = id;
                this.getTopicInfo()
            },
            getTopicInfo(){
                console.log(this.topicId)
                $.ajax({
                    url: this.biz.serverUrl + '/piionee/getChartsByTopicId2',
                    type: 'post',
                    dataType: 'json',
                    data: {
                        id: this.topicId
                    },
                    success: (res) => {
                        if(res.status === 0){
                            console.log(res)
                            let date = [];
                            let value = [];
                            if(res.mentionArray && res.mentionArray.length > 0){
                                this.mentionShow = true;
                                res.mentionArray.forEach((obj) => {
                                    date.push(obj.year);
                                    value.push(obj.value);
                                });
                                this.mention.date = date;
                                this.mention.value = value;
                                this.$nextTick(() => {
                                    this.drawBar();
                                });
                            }else{
                                this.mentionShow = false;
                            };
                            if(res.tendency_chart && res.tendency_chart.length > 0){
                                this.tendencyShow = true;
                                res.tendency_chart.forEach((obj) => {
                                    date.push(obj.year);
                                    value.push(obj.preValue)
                                });
                                this.tendency.date = date;
                                this.tendency.value = value;
                                this.$nextTick(() => {
                                    this.drawLine();
                                })
                            }else{
                                this.tendencyShow = false;
                            };
                            if(res.tendency_form && !this.isEmptyObject(res.tendency_form)){
                                this.analysisShow = true;
                                this.analysis = res.tendency_form;
                                this.$nextTick(() => {
                                    this.drawPie();
                                });
                            }else{
                                this.analysisShow = false;
                            };
                            if(res.pictureList && res.pictureList.length > 0){
                                this.picShow = true;
                                this.picArr = res.pictureList;
                            }else{
                                this.picShow = false; 
                            };
                        }
                    }
                })
            },
            isEmptyObject(obj){
                for(let key in obj){
                    return false;
                }
                return true;
            }
        },
        mounted(){
            this.scientificDetail();
            // this.getRecommand();
            this.getActiveColor();
            this.getTopicInfo();
            bus.$on('scientificDetail',()=>{
                window.scrollTo(0, 0);
                this.scientificDetail();
                // this.recommand();
                bus.$emit('setSearchVal');                
            });
        },
        watch:{
            detailInfo(){
                let that = this;
                this.$nextTick(() => {
                    let imgs = that.$refs.text.getElementsByTagName("img");
                    let img = Array.from(imgs);
                    let brs = that.$refs.text.getElementsByTagName("br");
                    let br = Array.from(brs);
                    img.forEach(function(i){
                        i.style.cssText = "width:65%; height:65%; margin:20px 0 20px 100px; display:block"
                    });
                    br.forEach(function(b){
                       $(b).remove();
                    });
                })
            }

        }
    }
</script>