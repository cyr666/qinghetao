<template>
    <div>
        <nav-website></nav-website> 
        <div class = "bigdata">
            <header-website></header-website>
            <div class = "mainBody">
                <div class = "mainBody_top">
                    <div class = "comper">
                        <p>每周专利简报</p>
                        <div class = "time_con">
                            <img class = "time_img" src = "../assets/img/time.png"/>
                            <span class = "time_word">统计时间截至:</span>
                            <span class = "time_num">{{endTime}}(以国家知识产权局公示为准)</span>
                        </div>
                    </div>
                    <div class = "" style="width:100%">
                        <div class="card">
                            <div class = "bar-word">世界五大知识产权局专利产出情况分析</div>
                            <div id="bar-graph"></div>
                        </div>
                        <div class = "country_con">
                            <div class = "bar-word">热门专利技术主题</div>
                            <nav class = "nav" ref = "green">
                                <ul class = "nav-ul">
                                <template v-for="(item,i) in countryArray">
                                        <li style = "height:30px" :class="{'active':i===0}" data-toggle="tab"  :key="item.id" @click="tabClick(item.id)">
                                            {{item.name}}
                                        </li>
                                    </template>
                                </ul>
                            </nav>
                            <div class = "circle_con">
                                <div>
                                    <div id = "circle"></div> 
                                </div>
                                <div class = "data_source">
                                    <span>数据来源:</span>
                                    <span>{{clickEndTime}}申请专利</span>    
                                </div>                            
                            </div>                           
                        </div>
                        <div class="word2">
                            <div class = "bar-word">专利申请数据看全球科技热点</div>
                            <div id="bubble"></div>
                        </div>
                    </div>
                </div>
                <div class = "mainBody_bottom">
                    <div class = "comper">
                        <p>全国专利数据分析周报</p>
                        <div class = "time_con">
                            <img class = "time_img" src = "../assets/img/time.png"/>
                            <span class = "time_word">统计时间截至:</span>
                            <span class = "time_num">{{endTime}}</span>
                        </div>
                    </div>
                    <div>
                        <div class="card">
                            <div id="map"></div>
                            <div class = "data_source">
                                <span>数据来源:</span>
                                <span>{{clickEndTime}}申请专利</span>    
                            </div>
                        </div>                            
                        <div class="card2">
                            <ul class = "navlist">
                                <li>排名</li>
                                <li>地区</li>
                                <li>专利授权数量</li>
                            </ul>
                            <div class = "topItem">
                                <!-- <div class = "topNum">
                                    <ul><li v-for='item in num' :key="item.id" :id="item.id" v-on:mouseover="dataDetails" v-on:mouseout="hideDataDetails">{{item.num}}</li></ul>
                                </div> -->
                                <div class = "topArea">
                                    <ul>
                                        <li v-for="(item,i) in topArea" :key="item.id" v-on:mouseover="dataDetails" :id ="item.id" v-on:mouseout="hideDataDetails">
                                            <span class = "topNumber" :id='item.id'>{{i+1}}</span>
                                            <span class = "areaName" :id='item.id'>{{item.name}} ></span>
                                        </li>
                                    </ul>
                                </div>
                                <div class = "column_con">
                                    <div id="column"></div>
                                </div>
                            </div>                               
                        </div>
                    </div>                    
                </div>
                <div class = "mobileData" id = "rec" ref = "rec" v-show ="showmobileData">
                    <div class = "Area_con">
                        <span class = "AreaName"></span>
                    </div>
                    <div class = "hot_con">
                        <img src = "../assets/img/hot.png"/>
                        <span>热门技术</span>    
                    </div>
                    <div class = "skill_con">
                        <span v-for ="item in topicArray" :key ="item.id">{{item.value}}</span>
                    </div>
                    <div class = "company_con">
                        <img src = "../assets/img/company.png"/>
                        <span>相关企业</span>
                        <div class = "relatedBusiness">
                            <h6 v-for="item in relatedBusinessArray" :key="item.id">{{item.value}}</h6>
                        </div>    
                    </div>                    
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>
    .bigdata{
        margin-left:220px;
        height:100%;
        .mainBody{   
            padding:20px 20px 0 20px;
            .mainBody_top{
                width:100%;
                height:428px;
                background:#fff;
                box-sizing: border-box;
                padding:0 2%;
                .comper{
                    width:100%;
                    height:50px;
                    border-bottom:1px solid #EEEEEE;
                    overflow: hidden;
                    p{
                        float:left;
                        //width:90px;
                        height:50px;
                        font-size:14px;
                        line-height:48px;
                        color:#2E3132;
                        border-bottom:3px solid #00A5FB;
                    }
                    .time_con{
                        float:right;
                        font-size:12px;
                        color:#9FA5B1;
                        box-sizing: border-box;
                        height:50px;
                        line-height:50px;
                        .time_img{
                            width:13px;
                            height:14px;
                            margin-top:-2px;
                        }
                    }

                }
                .card{
                    margin:20px 0 20px 0;
                    padding:0 2%;
                    float:left;
                    width:32%;
                    height:338px;
                    box-sizing:border-box;
                    background:rgba(244,248,249,1);
                    .bar-word{
                        //padding-left:5%;
                        margin-top:10px;
                        height:24px;
                        line-height:24px;
                        font-size:14px;
                        color:#5F697D
                    }
                    #bar-graph{
                        width:100%;
                        height:320px;
                        
                    }
                }
                .country_con{
                    margin:20px 3% 20px 3%;
                    float:left;
                    height:338px;
                    width:31%;
                    padding:0 2%;
                    box-sizing: border-box;
                    background:rgba(244,248,249,1);
                    //margin-left:10px;
                    .bar-word{
                        margin-top:10px;
                        height:24px;
                        line-height:24px;
                        font-size:14px;
                        color:#5F697D
                    }
                    nav{
                        .nav-ul{
                            width:100%;
                            height:30px;
                            border-bottom:2px solid #eee;
                            margin-top:12px;
                            li{
                                list-style-type: none;
                                float:left;
                                overflow: hidden;
                                height:30px;
                                line-height:30px;
                                margin-right:13%;
                                color:#5F697D;
                                font-size:13px;
                                cursor: pointer;
                            }
                            li:first-child{
                                border-bottom:2px solid #00C99A
                            }
                            li:last-child{
                                margin-right:0;
                            }
                            li:hover{
                                border-bottom:2px solid #00C99A
                            }
                        }
                    }
                    .circle_con{
                        position: relative;
                        width:100%;
                        height:300px;
                        #circle{
                            // position:absolute;
                            // top:10px;
                            // left:0%;
                            width:100%;
                            height:180px;
                        }
                        .data_source{
                            font-size:10px;
                            color:#9FA5B1;
                            height:20px;
                            line-height:20px;
                            text-align: right;
                            margin-top:25px;
                        }
                    }
                }
                .word2{
                    position: relative;
                    margin:20px 0 20px 0;
                    float:left;
                    height:338px;
                    width:31%;
                    padding:0 2%;
                    box-sizing: border-box;
                    background:rgba(244,248,249,1);
                    //margin-left:10px;
                    .bar-word{
                        margin-top:10px;
                        height:24px;
                        line-height:24px;
                        font-size:14px;
                        color:#5F697D
                    }
                    #bubble{
                        position:absolute;
                        top:20px;
                        left:6%;
                        width:91%;
                        height:300px;
                    }  
                }
            }
            .mainBody_bottom{
                width:100%;
                height:619px;
                margin-top:20px;
                background:#fff;
                box-sizing: border-box;
                padding:0 2%;
                margin-bottom:40px;
                //overflow: hidden;
                .comper{
                    width:100%;
                    height:50px;
                    border-bottom:1px solid #EEEEEE;
                    overflow: hidden;
                    p{
                        float:left;
                        font-size:14px;
                        line-height:47px;
                        color:#2E3132;
                        border-bottom:3px solid #00A5FB;
                    }
                    .time_con{
                        float:right;
                        font-size:12px;
                        color:#9FA5B1;
                        box-sizing: border-box;
                        height:50px;
                        line-height:50px;
                        .time_img{
                            width:13px;
                            height:14px;
                            margin-top:-2px;
                        }
                    }
                }
                .card{
                    box-sizing: border-box;
                    padding-top:30px;
                    //padding-left:2%;
                    width:55%;
                    // padding-top:30px;
                    float:left;
                    #map{
                        width:100%;
                        height:500px;
                    } 
                    .data_source{
                        font-size:10px;
                        color:#9FA5B1;
                        height:20px;
                        line-height:20px;
                        text-align: left;
                    }                      
                }
                .card2{
                    position: relative;
                    box-sizing: border-box;
                    width:45%;
                    padding-top:50px;
                    //margin-left:5%;
                    float:left;
                    
                    .navlist{
                        box-sizing: border-box;
                        width:90%;
                        height:44px;
                        border-bottom:1px solid #eee;
                        li{
                            list-style-type: none;
                            float:left;
                            height:49px;
                            line-height:49px;
                            margin-right:12.5%;
                            font-size:12px;
                            color:#8590A6;
                        }
                    }
                    .topItem{
                        position: relative;
                        top:0;
                        width:100%;
                        .topNum{
                            width:100%;
                            float:left;
                            position: absolute;
                            box-sizing: border-box;
                            padding-right: 10%;
                            ul{
                                width:100%;
                                box-sizing: border-box;
                                margin-top:-10px;
                                //padding-left: 10px;
                                li{
                                    width:100%;
                                    list-style-type: none;
                                    line-height: 37px;
                                    font-size:12px;
                                    font-family: 'Arial';
                                    color:#5F697D;
                                    border-bottom: 1px solid #eee;
                                    padding-left: 10px;
                                    cursor: pointer;
                                }
                                li:hover{
                                    background:#F4F8F9;
                                }
                            }
                        }
                        .topArea{
                            //position:absolute;
                            float:left;
                            //margin-left:10%;
                            width:100%;
                            //z-index: 2;
                            ul{
                                box-sizing: border-box;
                                margin-top:-10px;
                                //padding-left: 2%;
                                width:90%;
                                li{
                                    width:100%;
                                    list-style-type: none;
                                    line-height: 38px;
                                    font-size: 14px;
                                    color:#5F697D;
                                    border-bottom: 1px solid #eee;
                                    // padding-left: 20px;
                                    cursor: pointer;
                                    span{
                                        display:inline-block;
                                    }
                                    .topNumber{
                                        padding-left:2%;
                                        width:10%;
                                        font-size:12px;
                                        font-family: Arial
                                    }
                                    .areaName{
                                        font-size:14px;
                                        color:#5F697D;
                                        margin-left:7%;
                                    }
                                }
                                li:hover{
                                    background:#F4F8F9; 
                                }
                            } 
                        }
                        .column_con{
                            position: relative;
                            #column{
                                position: absolute;
                                left:25%;
                                top:-35px;
                                width:78%;
                                height:457px;
                                z-index: 0
                            }
                        }                           
                    }                       
                }                                   
            }
            .mobileData{
                box-sizing: border-box;
                position: fixed;
                top:20%;
                // left:800px;
                width:17%;
                padding:1%;
                background:#F4F8F9;
                box-shadow: 0 0 2px 2px #E6ECED;
                .Area_con{
                    width:100%;
                    height:26px;
                    border-bottom:1px solid #CED3DB;
                    .AreaName{
                        display: inline-block;
                        font-size: 14px;
                        line-height: 24px;
                        color: #5F697D;
                        border-bottom: 2px solid #00A5FB;
                    }
                }
                .hot_con{
                    margin-top:15px;
                    img{
                        width:17px;
                        height:16px;
                    }
                    span{
                        font-size:12px;
                        color:#2E3132;
                    }
                }
                .skill_con{
                    box-sizing: border-box;
                    padding:11px 0 15px 0;
                    span{
                        display:inline-block;
                        padding:0px 15px;
                        margin-right:8px;
                        margin-bottom:8px;
                        text-align: center;
                        height:24px;
                        line-height: 24px;
                        font-size:12px;
                        color:#5F697D;
                        border-radius: 15px;
                        background:#E6ECED;
                    }
                }
                .company_con{
                    img{
                        width:17px;
                        height:16px;
                    }
                    span{
                        font-size:12px;
                        color:#2E3132;
                    }
                    .relatedBusiness{
                        h6{
                            font-size:12px;
                            color:#5F697D;
                            line-height:18px;
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
    import theme from '../assets/js/china.js'
    export default{
        name: 'app',
        components: {
            navWebsite,
            headerWebsite
        },
        data(){
            return{
                countryArray:[],
                countryName:[],
                countryApply:[],//专利申请数量
                countryGrant:[],//专利授权数量
                circleArr:[],
                circleId:1,
                chinaCityAll:[],
                //dataAll:[],
                top10Apply:[],
                top10Grant:[],
                num:[],
                topArea:["北京","北京","北京","北京","北京","北京","北京","北京","北京","北京"],
                colorList:['#00C99A','#29b4fc','#29b4fc','#29b4fc','#29b4fc'],
                showmobileData:false,
                down:false,
                endTime:'',
                worldTopic:[],
                columnId:'',
                topicArray:[],//top10的城市的topic
                relatedBusinessArray:[],//top10的城市的相关企业
                top10Name:[],
                clickEndTime:''
            }
        },
        methods:{
            drawBar(){
                let that = this;
                let chart = this.$echarts.init(document.getElementById('bar-graph'));
                let option = { 
                    "color": "#384757",
                    "tooltip": {
                    "trigger": "axis",                   
                    },
                    "width":'83%',
                    "legend": {
                    'left':'-1%',
                    itemWidth:10,
                    itemHeight:10,
                    "data": [
                        {
                        "name": "申请专利",
                        "icon": "circle",
                        "textStyle": {
                            "color": "#7d838b"
                        },
                        },
                        {
                        "name": "授权专利",
                        "icon": "circle",
                        "textStyle": {
                            "color": "#7d838b"
                        }
                        },
                        
                    ],
                    "top": "5%",
                    "textStyle": {
                        "color": "#fff"
                    }
                    },
                    "xAxis": [
                    {
                        "type": "category",
                        "data": this.countryName,
                        "show":true,  
                        "axisTick": {
                            show: true,
                        },
                        "axisLabel":{
                            textStyle:{
                                color:'#9fa5b1'
                            }
                        },
                        "axisLine":{  
                    　　　　 show:true,
                            lineStyle:{
                                color:'#DEE5EA',
                            }
                    　　 }  
                    }
                    ],
                    "yAxis": [
                    {
                        "min": 0,
                        "max": 20000,
                        "interval": 4000,
                        "show":true,  
                        "splitLine":{  
                    　　　　'show':true,
                            lineStyle:{
                                color:'#DEE5EA',
                            }  
                    　　 }, 
                        "axisLabel":{
                            textStyle:{
                                color:'#9fa5b1'
                            }
                        }, 
                        "axisLine":{  
                    　　　　 show:false,
                            lineStyle:{
                                color:'#DEE5EA',
                            }
                    　　 }  
                    }
                    ],
                    "grid": {
                    "top": "20%",
                    "left":"16%"
                    },
                    "series": [
                    {
                        "name": "申请专利",
                        "type": "bar",
                        "data": this.countryApply,
                        "barWidth": "15%",
                        "itemStyle": {
                        "normal": {
                            "color": {
                            "colorStops": [
                                {
                                "offset": 0,
                                "color": "#00A5FB"
                                }
                            ],
                            "globalCoord": false
                            }
                        }
                        },
                    },
                    {
                        "name": "授权专利",
                        "type": "bar",
                        "data": this.countryGrant,
                        "barWidth": "15%",
                        "itemStyle": {
                        "normal": {
                            "color": {
                            "colorStops": [
                                {
                                "offset": 0,
                                "color": "#7376E3"
                                },
                                
                            ],
                            "globalCoord": false
                            }
                        }
                        },
                        "barGap": "70%"
                    }
                    ]
                };
                chart.setOption(option)
            },
            drowCircle(){
                let that = this;
                let chart = this.$echarts.init(document.getElementById('circle'));
                let circleOption = {
                    title:{
                        text:"",
                        link:'https://github.com/ecomfe/echarts-wordcloud',
                        subtext: '',
                        sublink:'http://data-visual.cn',
                    },
                    tooltip: {},
                    series: [{
                        type: 'wordCloud',
                        gridSize: 17,//词与词的分散度
                        sizeRange: [12, 25],
                        rotationRange: [0, 0],
                        shape: 'circle',
                        width:'80%',
                        height:'80%',
                        top:'10%',
                        textStyle: {
                            normal: {
                                color: function() {
                                    var colorList = ['#2e3132', '#009deF', '#01b68c','#7376E3','#F4555c'];
                                    var i = Math.round(Math.random()*4);
                                    return colorList[i]
                                    // return 'rgb(' + [
                                    //     Math.round(Math.random() * 255),
                                    //     Math.round(Math.random() * 255),
                                    //     Math.round(Math.random() * 255)
                                    // ].join(',') + ')';
                                }
                            },
                            emphasis: {
                                shadowBlur: 10,
                                shadowColor: '#333'
                            }
                        },
                        data: this.circleArr
                    }]
                };
                chart.setOption(circleOption);
            },
            drowMap(){
                let myChart = this.$echarts.init(document.getElementById('map'));
                let blueArr = [];
                this.$echarts.registerMap('zhongguo', theme);
                var geoCoordMap = {
                    "海南": [110.17, 19.92],
                    "河南": [113.700339, 34.751827],
                    "河北": [114.54095, 38.058913],
                    "湖北": [114.289984, 30.5942],
                    "广东": [113.293215, 23.102603],
                    "湖南": [113.03042, 28.188898],
                    "江西": [115.911671, 28.658012],
                    "黑龙江": [126.629804, 45.774197],
                    "四川": [102.112035, 30.630737],
                    "安徽": [117.321109, 31.850184],
                    "江苏": [118.8586,32.915],
                    "浙江": [120.498,29.0918],
                    "北京":[116.4551,40.2539],
                    "山东":[118.7402,36.4307],
                    "上海":[121.4648,31.2891],
                    "福建":[118.3008,25.9277],
                    "重庆":[107.7539,30.1904],
                    "山西":[112.4121,37.6611],
                    "天津":[117.4219,39.4189],
                    "香港":[114.1178,22.3242],
                    "澳门":[111.5547,22.1484],
                    "内蒙古":[108.6977,40.8408],
                    "新疆":[84.9023,42.148],
                    "陕西":[109.5996,35.7396],
                    "吉林":[125.7746,43.5938],
                    "贵州":[106.6113,26.9385],
                    "辽宁":[122.0438,41.0889],
                    "宁夏":[105.9961,37.3096],
                    "台湾":[120.0254,23.5986],
                    "广西":[107.7813,23.6426],
                    "云南":[101.0652,25.1807],
                    "甘肃":[101.8129,38.166],
                    "贵州":[106.6113,26.9385],
                    "台湾":[120.0254,23.5986],
                    "青海":[95.2402,35.4199],
                    "西藏":[87.8695,31.6846]
                }
                var data = this.chinaCityAll
                var max = 100000,
                    min = 900; // todo 
                var maxSize4Pin = 500,
                    minSize4Pin = 30;

                var convertData = function(data) {
                    var res = [];
                    for (var i = 0; i < data.length; i++) {
                        var geoCoord = geoCoordMap[data[i].name];
                        if (geoCoord) {
                            res.push({
                                name: data[i].name,
                                value: geoCoord.concat(data[i].value).concat(data[i].grant_num)
                            });
                        }
                    }
                    return res;
                };


                let option = {
                    title: {
                        text: '',
                        subtext: '',
                        x: 'center',
                        textStyle: {
                            color: '#ccc'
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: function(params) {
                            if (typeof(params.value)[2] == "undefined") {
                                //return params.name + ' : ' + params.value;
                            } else {
                                return params.name + ' : '+ params.value[2]+"(申请)"+"<br/>"
                                    +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                                    + params.value[3]+"(授权)";
                            }
                        }
                    },
                    legend: {
                        orient: 'vertical',
                        y: 'bottom',
                        x: 'right',
                        data: ['sell_area'],
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    visualMap: {
                        show: false,
                        min: 0,
                        max: 500,
                        left: 'left',
                        top: 'bottom',
                        text: ['高', '低'], // 文本，默认为数值文本
                        calculable: true,
                        seriesIndex: [1],
                        inRange: {
                            // color: ['#3B5077', '#031525'] // 蓝黑
                            // color: ['#ffc0cb', '#800080'] // 红紫
                            // color: ['#3C3B3F', '#605C3C'] // 黑绿
                            // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
                            color: ['#23074d', '#cc5333'] // 紫红
                            // color: ['#00467F', '#A5CC82'] // 蓝绿
                            // color: ['#1488CC', '#2B32B2'] // 浅蓝
                            // color: ['#00467F', '#A5CC82'] // 蓝绿
                            // color: ['#00467F', '#A5CC82'] // 蓝绿
                            // color: ['#00467F', '#A5CC82'] // 蓝绿
                            // color: ['#00467F', '#A5CC82'] // 蓝绿

                        }
                    },
                    // toolbox: {
                    //     show: true,
                    //     orient: 'vertical',
                    //     left: 'right',
                    //     top: 'center',
                    //     feature: {
                    //             dataView: {readOnly: false},
                    //             restore: {},
                    //             saveAsImage: {}
                    //             }
                    // },
                    geo: {
                        show: true,
                        map: 'zhongguo',
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false,
                            }
                        },
                        roam:false,//禁止放大缩小
                        itemStyle: {
                            normal: {
                                areaColor: '#031525',
                                borderColor: '#3B5077',
                            },
                            emphasis: {
                                areaColor: '#2B91B7',
                            }
                        },
                        layoutCenter:['48%','50%'],
                        layoutSize:'110%'
                    },
                    series: [{
                            name: 'credit_pm2.5',
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            data: convertData(data),
                            symbolSize: function(val) {
                                return val[2] / 5000;
                            },//蓝色光圈的大小
                            label: {
                                normal: {
                                    formatter: '{b}',
                                    position: 'right',
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                },
                            },
                            itemStyle: {
                                normal: {
                                    color: '#05C3F9'
                                }
                            }
                        },
                        {
                            type: 'map',
                            map: 'zhongguo',
                            geoIndex: 0,
                            aspectScale: 0.75, //长宽比
                            showLegendSymbol: false, // 存在legend时显示
                            label: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: false,
                                    textStyle: {
                                        color: '#fff'
                                    }
                                }
                            },
                            roam: true,
                            itemStyle: {
                                normal: {
                                    areaColor: '#031525',
                                    borderColor: '#3B5077',
                                },
                                emphasis: {
                                    areaColor: '#2B91B7'
                                }
                            },
                            animation: false,
                            data: data
                        },
                        {
                            name: '点',//红色气泡的大小
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            symbol: 'pin',
                            symbolSize: function(val) {
                                var a = (maxSize4Pin - minSize4Pin) / (max - min);
                                var b = minSize4Pin - a * min;
                                b = maxSize4Pin - a * max;
                                return a * val[2] + b;
                            },
                            label: {
                                normal: {
                                    show: true,
                                    formatter: function(params) {
                                        if (typeof(params.value)[2] == "undefined") {
                                            //return params.name + ' : ' + params.value;
                                        } else {
                                            return params.value[2];//气泡上显示的数值 
                                        }
                                    },
                                    textStyle: {
                                        color: '#fff',
                                        fontSize: 9,
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#F62157', //标志颜色
                                }
                            },
                            zlevel: 6,
                            data: convertData(data),
                        },
                        {
                            name: 'Top 5',
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            data: convertData(data.sort(function(a, b) {
                                return b.value - a.value;
                            }).slice(0, 34)),
                            symbolSize: function(val) {
                                blueArr.push(val[2]);
                                if(val[2]/blueArr[0]*15 == 0){
                                    return 1
                                }else{
                                    return val[2]/blueArr[0]*15; 
                                }
                                                              
                                //console.log(blueArr)
                                //return Math.log(10+val[2])*2;
                                //return Math.pow(val[2],0.4)
                            },
                            showEffectOn: 'render',
                            rippleEffect: {
                                brushType: 'stroke'
                            },
                            hoverAnimation: true,
                            label: {
                                normal: {
                                    formatter: '{b}',
                                    position: 'right',
                                    show: false
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#05C3F9',
                                    shadowBlur: 10,
                                    shadowColor: '#05C3F9'
                                }
                            },
                            zlevel: 1
                        },

                    ]
                };
                myChart.setOption(option);
            },
            drowColumn(){
                let myChart = this.$echarts.init(document.getElementById('column'));
                let dataAll = this.dataAll;
                let yAxisData = [];
                let option = {
                    title: {
                        
                    },
                    // tooltip: {
                    //     trigger: 'axis',
                    //     axisPointer: {
                    //         type: 'line'
                    //     },
                    // },
                    legend: {
                        left:"45%",
                        top:"-1%",
                        itemWidth:12,
                        itemHeight:12,
                        "data": [
                                {
                                "name": "申请专利",
                                "icon": "circle",
                               
                                "textStyle": {
                                    "color": "#7d838b",
                                    "fontSize":10
                                },
                                },
                                {
                                "name": "授权专利",
                                "icon": "circle",
                                "textStyle": {
                                    "color": "#7d838b",
                                    "fontSize":10
                                }
                                },
                                
                            ],
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        top:'5%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        //boundaryGap: [0,0.1],
                        show:false,
                        
                    },
                    yAxis: {
                        type: 'category',
                        data: this.top10Name,
                        show:false,
                        max:8.7
                        //axisTick: {length:0},
                    },
                    series: [
                        {
                            name: '申请专利',
                            type: 'bar',
                            data: this.top10Apply,
                            barWidth: "28%",
                            itemStyle: {
                                "normal": {
                                    "color": {
                                    "colorStops": [
                                        {
                                        "offset": 0,
                                        "color": "#00A5FB"
                                        }
                                    ],
                                    "globalCoord": false
                                    }
                                }
                            },
                            label:{
                                normal:{
                                    show:true,
                                    position:'inside Top',
                                    textStyle:{
                                        color:'rgba(255,255,255,0.7)',
                                        fontSize:8,
                                        fontFamily:'Arial'
                                    }                                    
                                }
                            },
                        },
                        {
                            name: '授权专利',
                            type: 'bar',
                            data: this.top10Grant,
                            barWidth: "28%",
                            itemStyle: {
                                "normal": {
                                    "color": {
                                    "colorStops": [
                                        {
                                        "offset": 0,
                                        "color": "#7376E3"
                                        },
                                        
                                    ],
                                    "globalCoord": false
                                    }
                                }
                            },
                            label:{
                                normal:{
                                    show:true,
                                    position:'inside Top',
                                    textStyle:{
                                        color:'rgba(255,255,255,0.7)',
                                        fontSize:8
                                    }                                    
                                }
                            },
                            barGap: "0"
                        },
                    ]
                };
                myChart.setOption(option) 
            },
            drowBubble(){
                let that = this;
                let chart = this.$echarts.init(document.getElementById('bubble'));
                var plantCap = this.worldTopic;
                var datalist = [
                    {
                        offset: [10,50],
                        symbolSize: 84,
                        opacity: .95,
                        fontSize: '18'
                    },{
                        offset: [5,42],
                        symbolSize: 80,
                        opacity: .88,
                        fontSize: '17.1'
                    },{
                        offset: [65,43],
                        symbolSize: 71,
                        opacity: .84,
                        fontSize: '15.2'
                    },{
                        offset: [56,57],
                        symbolSize: 60,
                        opacity: .8,
                        fontSize: '12.85'
                    },{
                        offset: [64,57],
                        symbolSize: 58,
                        opacity: .75,
                        fontSize: '12.43'
                    },{
                        offset: [54,50],
                        symbolSize: 55,
                        opacity: .7,
                        fontSize: '11.8'
                    },{
                        offset: [66,50.5],
                        symbolSize: 50,
                        opacity: .68,
                        fontSize: '10.7'
                    },{
                        offset: [52,55],
                        symbolSize: 40,
                        opacity: .6,
                        fontSize: '8.57'
                    },{
                        offset: [60,42],
                        symbolSize: 40,
                        opacity: .6,
                        fontSize: '10'
                    },{
                        offset: [51,46],
                        symbolSize: 35,
                        opacity: .58,
                        fontSize: '10'
                    },{
                        offset: [69,47],
                        symbolSize: 35,
                        opacity: .58,
                        fontSize: '10'
                    },{
                        offset: [60,57],
                        symbolSize: 30,
                        opacity: .56,
                        fontSize: '9'
                    },{
                        offset: [59,60],
                        symbolSize: 25,
                        opacity: .3,
                        fontSize: '8'
                    },{
                        offset: [55,102],
                        symbolSize: 25,
                        opacity: .3,
                        fontSize: '8'
                    },{
                        offset: [52,60],
                        symbolSize: 25,
                        opacity: .3,
                        fontSize: '8'
                    }
                ];
                var offset = [[50,50],[20,60],[50,90],[80,60],[90,30],[25,25],[10,90],[90,90],[5,10],[80,3],[30,98],[0,50],[60,15],[40,0],[70,100]];
                var datas = [];
                for(var i= 0 ;i<plantCap.length; i++){
                    var m = Math.round(Math.random()*15);
                    var item = plantCap[i];
                    var itemToStyle = datalist[i];
                    var top = Math.round(Math.random()*95);
                    var left = Math.round(Math.random()*95);
                    // var offset = [];
                    // offset[1] = top;
                    // offset[0] = left;
                    //console.log(offset)
                    datas.push({
                        name: item.value,
                        value: offset[i],
                        symbolSize: function(){
                            if(i==0){
                                return 70
                            }else if(i == 14){
                                return 30
                            }else{
                                var size = [36,40,47,49,43,51,53,45]
                                return size[Math.round(Math.random()*7)]
                            }
                        }(),
                        label: {
                            normal: {
                                textStyle: {
                                    fontSize: function(){
                                                    if(i==0){
                                                        return 20
                                                    }else if(i == 14){
                                                        return 9
                                                    }else{
                                                         return 12
                                                    }
                                                }()
                                },
                                formatter: function(params){
                                                    //console.log(params.data.name)
                                                    var oldParamsName = params.data.name;//老字符串
                                                    var newParamsName = "";// 最终拼接成的字符串
                                                    var letter = oldParamsName.split('');
                                                    var paramsNameNumber = (oldParamsName.split('')).length;// 实际标签的个数
                                                    var provideNumber = 2;// 每行能显示的字的个数
                                                    var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                                                    /**
                                                     * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                                                     */
                                                    // 条件等同于rowNumber>1
                                                    var reg = /(\d|[a-zA-Z])/g
                                                    if(reg.test(oldParamsName)){
                                                        return oldParamsName;
                                                    }else{   
                                                    if (paramsNameNumber > provideNumber) {
                                                        /** 循环每一行,p表示行 */
                                                        for (var p = 0; p < rowNumber; p++) {
                                                            var tempStr = "";// 表示每一次截取的字符串
                                                            var start = p * provideNumber;// 开始截取的位置
                                                            var end = start + provideNumber;// 结束截取的位置
                                                            // 此处特殊处理最后一行的索引值
                                                            if (p == rowNumber - 1) {
                                                                // 最后一次不换行
                                                                tempStr = oldParamsName.substring(start, paramsNameNumber);
                                                            } else {
                                                                // 每一次拼接字符串并换行                                                              
                                                                tempStr = oldParamsName.substring(start, end) + "\n";                                                                                                                            
                                                            }
                                                            newParamsName += tempStr;// 最终拼成的字符串
                                                        }

                                                    } else {
                                                        // 将旧标签的值赋给新标签
                                                        newParamsName = oldParamsName;
                                                    }
                                                    //将最终的字符串返回
                                                    
                                                    return newParamsName
                                                }
                                }
                            },

                        },
                        itemStyle: {
                            normal: {
                                opacity: 1
                            }
                        },
                    })
                }
                let option = {
                            tooltip: {
                                trigger: 'item',
                                backgroundColor: '#000',
                                opacity:'0.5',
                                textStyle: {
                                    color: '#fff',
                                    
                                },
                                formatter: (data) => {
                                    // if (1) {
                                    //     // return `${item.data[2]}<br/>  坐标: x ${item.data[0]}  y ${item.data[1]}`;
                                    //     return data
                                    // }
                                }
                            },
                            width:'85%',
                            height:'70%',
                            left:'2%',
                            xAxis: [{
                                gridIndex: 0,
                                type: 'value',
                                show: false,
                                min: 0,
                                max: 100,
                                nameLocation: 'end',
                                nameGap: 0


                            }],
                            yAxis: [{
                                gridIndex: 0,
                                min: 0,
                                show: false,
                                max: 100,
                                nameLocation: 'middle',
                                nameGap: 50,
                            }],
                            series: [
                                {
                                    type: 'scatter',
                                    symbol: 'circle',
                                    symbolSize: 100,
                                    label: {
                                        normal: {
                                            show: true,
                                            formatter: '{b}',
                                            color: '#fff',
                                            textStyle: {
                                                fontSize: '20'
                                            }
                                        },

                                    },

                                    itemStyle: {
                                        normal: {
                                            color: function() {
                                                    var colorList = ['#00C99A', '#00A5FB','#7376E3'];
                                                    var i = Math.round(Math.random()*2);
                                                    return colorList[i]
                                                }
                                        },
                                        emphasis: {
                                            color: '#FFA41D',
                                            opacity: 1
                                        }
                                    },
                                    data: datas
                                }

                            ]
                        };
                    chart.setOption(option)         
            },
            getData(){
                $.ajax({
                    url: this.biz.serverUrl+'/piionee/patent/getCountryPatent2',
                    type: 'get',
                    dataType: 'json',
                    data: {},
                    success: (res) => {
                        if(res.status === 0){
                            this.countryArray = res.countryArray;
                            this.endTime = res.end_time;
                            let name = [];
                            let apply_num = [];
                            let grant_num = [];
                            res.countryArray.forEach((obj)=>{
                                name.push(obj.name);
                                apply_num.push(obj.apply_num);
                                grant_num.push(obj.grant_num)
                            })
                            this.countryName = name;
                            this.countryApply = apply_num;//专利申请数量
                            this.countryGrant = grant_num;//专利授权数量
                            this.$nextTick(() => {
                                this.drawBar();
                                this.drowMap();
                                this.drowBubble();                                
                            });
                        }
                    }
                })
            },
            getWorldTopic(){
                $.ajax({
                    url: this.biz.serverUrl+'/piionee/patent/getGlobalTopic',
                    type: 'get',
                    dataType: 'json',
                    data: {},
                    success:(res) => {
                        if(res.status === 0){
                            this.worldTopic = res.topicArray;
                            this.drowBubble();
                        }
                    }
                })
            },
            getCircleData(){
                $.ajax({
                    url: this.biz.serverUrl+'/piionee/patent/getTopicByCountryId',
                    type: 'get',
                    dataType: 'json',
                    data: {
                        id:this.circleId
                    },
                    success: (res) => {
                        if(res.status === 0){
                            res.topicArray.forEach((obj)=>{
                                if(obj.topic_num){
                                    obj.name = obj.value;
                                    obj.value = obj.topic_num
                                }
                               delete obj.topic_num
                            });
                            this.clickEndTime = res.end_time;
                            this.circleArr = res.topicArray;
                            this.drowCircle();
                            this.drowColumn();
                        }
                    }
                })
            },
            tabClick(id){
                this.circleId = id;
                let lis = this.$refs.green.getElementsByTagName("li");
                let li = Array.from(lis);
                li.forEach((li)=>{
                    li.style.cssText = "border-bottom:none"
                })
                li[id-1].style.cssText = "border-bottom:2px solid #00C99A"
                this.getCircleData();
                this.colorList.forEach((i,v)=>{
                    this.colorList[v] = "#29b4fc"
                })
                    this.colorList[id-1] = "#00C99A";
                    this.drawBar()

            },
            getChinaAllCity(){
                $.ajax({
                    url: this.biz.serverUrl+'/piionee/patent/getChinaAllCityPatent2',
                    type: 'get',
                    dataType: 'json',
                    data: {
                        // id:this.circleId
                    },
                    success: (res) => {
                        if(res.status === 0){
                            console.log(res)
                            let array = res.cityArray;
                            let cityArray = JSON.parse(JSON.stringify(res.cityArray).replace(/apply_num/g,"value"));
                            this.chinaCityAll = cityArray;
                            let top10 = res.cityArray.slice(0,10);
                            let name = [];
                            let value1 = [];//城市申请专利数量
                            let value2 = [];// 城市授予专利数量
                            let num = [];
                            let countryName = [];
                            top10.forEach((obj,v)=>{
                                num.push({num:v+1,id:obj.id})
                                name.push({name:obj.name,id:obj.id});
                                value1.unshift(obj.apply_num);
                                value2.unshift(obj.grant_num );
                                countryName.unshift(obj.name)
                            })
                            this.top10Name = countryName;
                            this.num = num;
                            this.topArea = name;
                            this.top10Apply = value1;
                            this.top10Grant = value2;
                            this.drowMap();
                            this.drowColumn();
                        }
                    }
                })  
            },
            dataDetails(e){
                var target = e.target || e.srcElement;
                this.showmobileData = true;
                this.columnId = e.path[0].id;
                let ev = e || event;
                let x = $("#rec").offset().left;
                let y = $("#rec").offset().top;
                let dx = ev.clientX;
                let dy = ev.clientY;
                let nx = ev.clientX+50
                let ny = ev.clientY+50;
                if(dx >= window.screen.width){
                    let scrollTop = $(window).scrollTop();
                    let height = $("#rec").outerHeight();
                    $("#rec").css({'top':ny+scrollTop/2+'px','left':nx-500+'px'});
                }else{
                    $("#rec").css({'left':nx+'px'});
                }      
                $.ajax({
                    url: this.biz.serverUrl+'/piionee/patent/getCityInfoByCityId',
                    type: 'get',
                    dataType: 'json',
                    data: {
                        id:this.columnId
                    },
                    success:(res) => {
                        if(res.status === 0){
                            this.topicArray = res.topicArray;
                            this.relatedBusinessArray = res.relatedBusinessArray;
                            $(".AreaName").text(res.name)
                        }
                    }
                })                           
            },
            hideDataDetails(){
               this.showmobileData = false;
            }
        },
        mounted(){
            this.getData();
            this.getCircleData();
            this.getChinaAllCity();
            this.drowBubble();
            this. getWorldTopic();
            bus.$on('bigData',()=>{
                this.getData();
                this.getCircleData();
                this.getChinaAllCity();
            })
        }
    }
</script>