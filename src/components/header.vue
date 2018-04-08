<template>
    <div class="search">
        <div class="searchText">
            <input type="text" v-model="searchVal" class="searchInput" id = "input" placeholder="请输入你要查找的内容"
                   @keyup.enter="searchResult"/>
            <i class="input-icon" @click="searchResult"></i>
        </div>
        <img class="user" src="../assets/img/user@2x.png" @click="quit"/>
        <div class="quit" @click="toLogin" v-if="quitShow">
            <i></i>
            <span>退出</span>
        </div>
    </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>
    .search{
        width:100%;
        height:68px;
        background:#fff;
        //line-height:68px;
        padding:16px 45px 0 20px;
        position:relative;
        .quit{
            position:absolute;
            top:40px;
            right:10px;
            z-index:10;
            background:url(../assets/img/quit.png);
            background-size:88px 46px;
            width:88px;
            height:46px;
            line-height:46px;
            text-align:center;
            color:rgba(133,144,166,1);
            cursor:pointer;
            &:hover{
                color:rgba(0,165,251,1);
                i{
                    background:url(../assets/img/quit-blue@2x.png) !important;
                    background-size:14px !important;
                }
            }
            i{
                width:14px;
                height:13px;
                display:inline-block;
                background:url(../assets/img/quit-ash@2x.png);
                background-size:14px;
            }
        }
        .searchText{
            position:relative;
            width:620px;
            float:left;
            .searchInput{
                width:620px;
                height:36px;
                background:rgba(238,242,243,1);
                border-radius: 100px;
                padding-left:20px;
            }
            ::-webkit-input-placeholder {
                color:rgba(133,144,166,1);
            }
            .input-icon{
                width:18px;
                height:18px;
                background:url(../assets/img/search@2x.png);
                background-size:18px 18px;
                position:absolute;
                top:9px;
                right:20px;
                cursor:pointer;
            }
        }
        .user{
            width:18px;
            height:21px;
            float:right;
            cursor:pointer;
            margin-top:7px;
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
                searchVal:'',
                quitShow:false,
            }
        },
        methods: {
            quit(){
                this.quitShow = !this.quitShow;

            },
            toLogin(){
                this.quitShow = false;
                //退出时清除sessionStorage
                sessionStorage.removeItem('classification');
                sessionStorage.removeItem('newsId');
                sessionStorage.removeItem('referenceId');
                sessionStorage.removeItem('searchVal');
                sessionStorage.removeItem('userName');
                this.$router.push(`/login`);
                bus.$emit('quit');
            },
            searchResult(){
                sessionStorage.setItem('searchVal', this.searchVal);
                let classification = sessionStorage.getItem('classification');
                if (this.searchVal !== '') {
                    if(classification === 'dynamic'){
                        this.$router.push(`/dynamic`);
                        bus.$emit('dynamicListLoad');
                        sessionStorage.setItem('searchVal', "");
                    } else if(classification === 'reference'){
                        sessionStorage.setItem('searchType','search');
                        this.$router.push(`/reference`);
                        bus.$emit('referenceListLoad');
                        sessionStorage.setItem('searchVal', "");
                    }else if(classification === 'scientific'){
                        sessionStorage.setItem('searchType','search');
                        this.$router.push(`/scientific`);
                        bus.$emit('scientificListLoad');
                        sessionStorage.setItem('searchVal', "");
                    }
                }
            }
        },
        mounted(){
            this.searchVal = sessionStorage.getItem('searchVal');
            bus.$on('setSearchVal',()=>{
                this.searchVal = sessionStorage.getItem('searchVal');
            });
            bus.$on('changePlacehold',(i)=>{
                $('#input').val("");
                $('#input').attr('placeholder','关键词、技术、行业、院校、研究机构...')
                //this.test();
            })
            $(document).click((event) => {
                event.stopPropagation();
                if ((!$('.quit').is(event.target) && $('.quit').has(event.target).length === 0 )
                    && (!$('.user').is(event.target) && $('.user').has(event.target).length === 0 )
                ) {
                    this.quitShow = false;
                }
            });
        }
    }
</script>

