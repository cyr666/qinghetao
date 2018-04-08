<template>
    <div class = "searchBefore_con">
        <div class = "institution">
            <div class = "institution_word">
                <h4 class = "word">技术转移服务机构</h4>
                <span class = "more">更多></span>
            </div>
            <div class = "institution_main">
                <div class = "institution_left">
                    <div class = "institution_header">
                        <h1>清华大学科技开发部</h1>
                        <span class = "institution_detail">查看详情</span>                       
                    </div>
                    <div class = "content">
                        <div class = "contentOne">
                            <img src = "../../assets/img/tecnology1.png" class = "searchBefore_img1"/>
                            <span class = "searchBefore_direction">研究方向</span>
                            <span v-for = "item in searchDirection" :key="item.id" class = "direction_item">{{item}}</span>
                        </div>
                        <div class = "contentOne">
                            <img src = "../../assets/img/special.png" class = "searchBefore_img1" style="width:12px;height:13px"/>
                            <span class = "searchBefore_direction">专家学者</span>
                            <span v-for = "item in searchSpecial" :key="item.id" class = "direction_item">{{item}}</span>
                        </div>
                        <div class = "contentOne">
                            <img src = "../../assets/img/institution.png" class = "searchBefore_img1" style="width:13px;height:12px"/>
                            <span class = "searchBefore_direction">机构简介</span>
                            <p class = "institutionDesc">萨克就看撒健康代价函数空间和付款时间福克斯的骄傲利空打击阿列克山大老是卡就大了圣诞节爱丽丝的就卡拉克斯的了较大利空桑德拉看的激动倒萨可视对讲阿卡丽商店就卡死了大家阿斯利康大家拉克丝就对了撒低级拉萨的就流口水的建档立卡圣诞节快乐洒家打开拉萨到静安寺大家快乐圣诞节拉萨扩大了老师肯定就拉开手机打开拉萨</p>
                        </div>
                        <img src = "" class = "institution_logo"/>
                    </div>
                </div>
                 <div class = "institution_left">
                    <div class = "institution_header">
                        <h1>清华大学科技开发部</h1>
                        <span class = "institution_detail">查看详情</span>                       
                    </div>
                    <div class = "content">
                        <div class = "contentOne">
                            <img src = "../../assets/img/tecnology1.png" class = "searchBefore_img1"/>
                            <span class = "searchBefore_direction">研究方向</span>
                            <span v-for = "item in searchDirection" :key="item.id" class = "direction_item">{{item}}</span>
                        </div>
                        <div class = "contentOne">
                            <img src = "../../assets/img/special.png" class = "searchBefore_img1" style="width:12px;height:13px"/>
                            <span class = "searchBefore_direction">专家学者</span>
                            <span v-for = "item in searchSpecial" :key="item.id" class = "direction_item">{{item}}</span>
                        </div>
                        <div class = "contentOne">
                            <img src = "../../assets/img/institution.png" class = "searchBefore_img1" style="width:13px;height:12px"/>
                            <span class = "searchBefore_direction">机构简介</span>
                            <p class = "institutionDesc">萨克就看撒健康代价函数空间和付款时间福克斯的骄傲利空打击阿列克山大老是卡就大了圣诞节爱丽丝的就卡拉克斯的了较大利空桑德拉看的激动倒萨可视对讲阿卡丽商店就卡死了大家阿斯利康大家拉克丝就对了撒低级拉萨的就流口水的建档立卡圣诞节快乐洒家打开拉萨到静安寺大家快乐圣诞节拉萨扩大了老师肯定就拉开手机打开拉萨</p>
                        </div>
                        <img src = "" class = "institution_logo"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>
    .searchBefore_con{
        .institution{
            .institution_word{
                width: 100%;
                height: 39px;
                margin-top: 19px;
                .word{
                    float: left;
                    padding-left: 1%;
                    border-left: 4px solid #00A5FB;
                    font-size: 18px;
                    color: #000;
                    font-family: 'SourceHanSansCN-Regular';
                }
                .more{
                    float:right;
                    font-size: 14px;
                    color: #00A5FB;
                    line-height: 39px;
                    cursor: pointer;
                }
            }
        }
        .institution_main{
            margin-top:10px;
            .institution_left{
                float: left;
                width: 49%;
                padding: 20px 4%;
                background: #fff;
                margin-right: 2%;
                box-shadow: 0 0 10px #ccc;
                .institution_header{
                    width: 100%;
                    height: 57px;
                    h1{
                    float: left;
                    font-size: 20px;
                    color: #2E3132;
                    font-family: "微软雅黑"
                    }
                    .institution_detail{
                        float: right;
                        padding: 9px 4%;
                        margin-top: 20px;
                        font-size: 12px;
                        color: #00A5FB;
                        border: 1px solid #00A5FB;
                        cursor: pointer;
                    }
                }
                .content{
                    width: 100%;
                    margin-top: 20px;
                    position: relative;
                    .contentOne{
                        margin-bottom: 10px;
                        .searchBefore_img1{
                            width: 12px;
                            height: 12px;
                            margin-right: 1%;
                            margin-top: -3px;
                        }
                        .searchBefore_direction{
                            font-size: 14px;
                            color: #788297;
                            margin-right: 4%;
                        }
                        .direction_item{
                            margin-right: 3%;
                            font-size: 14px;
                            color: #2E3132
                        }
                        .institutionDesc{
                            float: right;
                            width: 77%;
                            height: 120px;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 5;
                            overflow: hidden;
                            font-size: 14px;
                            color: #2E3132;
                            line-height: 25px;
                        }
                    }
                    .institution_logo{
                        position: absolute;
                        top: 90px;
                        left: 0%;
                        width: 20%;
                        height:75px;
                        background: #00A5FB
                    }
                }
            }
            .institution_left:last-child{
                margin-right: 0px;
            }           
        }
    }
</style>
<script>
export default {
  name: "app",
  components: {},
  data(){
      return{
          searchDirection:["环境污染","污水处理","垃圾焚烧"],
          searchSpecial: ["张丰田","韩建达","田丰"]
      }
  },
}
</script>
