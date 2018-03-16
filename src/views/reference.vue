<template>
    <div>
        <nav-website
           >
        </nav-website>
        <div class="reference">
            <header-website></header-website>
            <div class="content">
                <div class="con-list" v-for="item in referenceClass" v-if="flag===0" :id="item.type.id">
                    <div class="classification">
                        <div class="title">{{item.type.value_zh}}</div>
                        <div class="english"><span>—————</span>{{item.type.value_en}}<span>—————</span></div>
                    </div>
                    <ul class="list-show" :class="item.type.id">
                        <li v-for="obj in item.reportArray" class="list-li">
                            <div class="label">内参</div>
                            <img :src="obj.cover" class="img" @click="referenceDetail(obj.id)"/>
                            <div class="listDetail">
                                <p class="text" @click="referenceDetail(obj.id)">{{obj.title}}</p>
                                <div class="mess">
                                    <div style="overflow: hidden;margin-bottom:10px">
                                        <span style="float:left;color:rgba(133,144,166,1);">{{obj.author.position}}</span>
                                        <span style="float:right;color:rgba(133,144,166,1);">{{obj.release_time}}</span>
                                    </div>
                                    <img class="touxiang img-circle" :src="obj.author.avator" v-if="obj.author.avator"/>
                                    <span>{{obj.author.name}}</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="more" @click="more(item.type.id)" v-if="item.reportArray.length >4"
                         :id="item.type.id+'show'">点击查看更多<img src="../assets/img/more@2x.png"/>
                    </div>
                    <div class="stop" @click="stop(item.type.id)" :id="item.type.id+'stop'">
                        收起<img src="../assets/img/stop@2x.png"/></div>
                </div>
                <div class="con-list" v-if="flag===1">
                    <ul class="list-show" v-if="referenceList.length >0">
                        <li v-for="obj in referenceList" class="list-li">
                            <div class="label">内参</div>
                            <img :src="obj.cover" class="img" @click="referenceDetail(obj.id)"/>
                            <div class="listDetail">
                                <p class="text" @click="referenceDetail(obj.id)">{{obj.title}}</p>
                                <div class="mess">
                                    <div style="overflow: hidden;margin-bottom:10px">
                                        <span style="float:left;color:rgba(133,144,166,1);">{{obj.author.position}}</span>
                                        <span style="float:right;color:rgba(133,144,166,1);">{{obj.release_time}}</span>
                                    </div>
                                    <img class="touxiang img-circle" :src="obj.author.avator" v-if="obj.author.avator"/>
                                    <span>{{obj.author.name}}</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div v-if="referenceList.length===0" class="noResult">
                        <img src="../assets/img/noResult@2x.png"/>
                        <p>没有搜索到相关内容~</p>
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
.reference{
    margin-left:220px;
    background:#EEF2F3;
    height:100%;
    .content{
        padding-left:20px;
        padding-bottom:40px;
        .con-list{
            padding-top:40px;
            .classification{
                text-align:center;
                margin-bottom:20px;
                .title{
                    font-size:24px;
                    font-family:MicrosoftYaHei-Bold;
                    color:rgba(0,165,251,1);
                    margin-bottom:10px;
                }
                .english{
                    font-size:18px;
                    font-family:ArialMT;
                    color:rgba(95,105,125,1);
                    span{
                        margin:0 20px;
                    }
                }
            }
            .list-show{
                overflow: hidden;
                list-style: none;
                height:350px;
                margin-bottom:20px;
                li{
                    float:left;
                    width:25%;
                    padding-right:20px;
                    margin-bottom:20px;
                    position:relative;
                    .label{
                        position:absolute;
                        top:0;
                        right:20px;
                        width:50px;
                        height:28px;
                        background:rgba(234,67,53,1);
                        color:rgba(255,255,255,1);
                        line-height:28px;
                        padding:0;
                        border-radius: 0;
                    }
                }
                .img{
                    width:100%;
                    //height:100%;
                    height:190px;
                    cursor:pointer;
                }
                .listDetail{
                    background:#fff;
                    padding-top:20px;
                    height:167px;
                    .text{
                        padding-bottom:20px;
                        font-size:18px;
                        color:rgba(46,49,50,1);
                        border-bottom:1px solid #EEEEEE;
                        padding-left:20px;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                        cursor:pointer;
                        &:hover{
                            color:rgba(41,180,252,1);
                        }
                    }
                    .mess{
                        padding:13px 20px 20px 20px;
                        img{
                            margin-right:8px;
                        }
                        .touxiang{
                            width:28px;
                            height:28px;
                        }
                    }
                }
            }
            .noResult{
                text-align:center;
                margin-top:100px;
                img{
                    width:197px;
                    height:166px;
                }
                p{
                    color:rgba(95,105,125,1);
                    margin-top:30px;
                }
            }
            .stop{
                display:none;
                margin-bottom:3px;

            }
            .more,.stop{
                cursor:pointer;
                font-size:16px;
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

</style>
<script>
    import bus from '../store/bus.js';
    import navWebsite from '../components/nav.vue';
    import headerWebsite from '../components/header.vue';
    import navigation from '../components/pagination.vue';
    export default {
        name: 'app',
        components: {
            navWebsite,
            headerWebsite,
            navigation
        },
        data(){
            return {
                referenceClass:[],
                pages:0,//总页数
                pageNum:1,//当前页
                referenceList:[],
                flag:0
            }
        },
        methods:{
            more(id){
                $('.'+id).height(740);
                $('#'+id +'show').css('display','none');
                $('#'+id +'stop').css('display','block');
            },
            stop(id){
                $('html,body').animate({scrollTop:$('#'+id).offset().top}, 800);
                setTimeout(()=>{
                    $('.'+id).height(350);
                    $('#'+id +'show').css('display','block');
                    $('#'+id +'stop').css('display','none');
                },500);
            },
            // 左侧边栏点击jump到指定的分类位置
            jumpTo(id){
                if(this.flag === 0){
                    $('html,body').animate({scrollTop:$('#'+id).offset().top}, 500);
                }
            },
            msgListView(curPage){
                this.pageNum = curPage;
                this.getSearchreferenceList();
                window.scrollTo(0, 0);
            },
            referenceArr(){
                $.ajax({
                    url: this.biz.serverUrl+'/piionee/getReportByType',
                    type: 'get',
                    dataType: 'json',
                    data: {},
                    success: (res) => {
                        if(res.status === 0){
                            this.referenceClass = res.typeReportArray;
                            this.flag = 0;
                        }
                    }
                })
            },
            getSearchreferenceList(){
                this.query = sessionStorage.getItem('searchVal');
                $.ajax({
                    url: this.biz.serverUrl+'/piionee/getReportByQuery',
                    type: 'get',
                    dataType: 'json',
                    data: {
                        query:this.query,
                        page:this.pageNum,
                        rows:10
                    },
                    success: (res) => {
                        if(res.status === 0){
                            this.pages = Math.ceil(res.numFound / 10);
                            this.referenceList = res.reportArray;
                            this.referenceList.forEach((obj)=>{
                                obj.name = obj.author.name;
                                obj.avator = obj.author.avator;
                            });
                            this.flag = 1;
                        }
                    }
                })
            },
            referenceDetail(id){
                this.$router.push(`/referenceDetail`);
                sessionStorage.setItem('referenceId',id);
                bus.$emit('referenceDetail');
            }
        },
        mounted(){
            let searchType = sessionStorage.getItem('searchType');
            if(searchType === 'search'){
                this.getSearchreferenceList();
            } else if(searchType === 'click'){
                this.referenceArr();
            }
            // 当在科技动态时直接跳到科技内参的二级导航
            let anchorId = sessionStorage.getItem('anchorId');
            if(anchorId){
                this.referenceList = [];
                this.pages = 0;
                this.referenceArr();
                setTimeout(()=>{
                    this.jumpTo(anchorId);
                },500);
                sessionStorage.removeItem('anchorId');
            }
            //
            bus.$on('referenceLoad',(id)=>{
                if(id){
                    // 跳转到二级目录
                    this.referenceList = [];
                    this.pages = 0;
                    this.referenceArr();
                    setTimeout(()=>{
                     this.jumpTo(id);
                    },200);
                } else {
                    this.referenceList = [];
                    this.pages = 0;
                    this.referenceArr();
                    window.scrollTo(0, 0);
                }
            });
            bus.$on('referenceListLoad',()=>{
                this.referenceClass = [];
                this.pageNum = 1;
                bus.$emit('firstPage');
                this.getSearchreferenceList();
                bus.$emit('setSearchVal');
            });
            /*bus.$on('anchor',(id)=>{
                this.jumpTo(id);
            })*/
        }
    }
</script>

