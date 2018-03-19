<template>
    <div>
        <swiper :options="swiperOption">
            <swiper-slide class="slide1"  v-for="item in slidePicArr" :key="item.id"><img :src="item" class = "swiperImg"/></swiper-slide>
            <!-- <swiper-slide class="slide1">Slide 2</swiper-slide>
            <swiper-slide class="slide1">Slide 3</swiper-slide>
            <swiper-slide class="slide1">Slide 4</swiper-slide> -->
            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        </swiper>
    </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>
    .slide1{
        width:100%;
        height:300px;
        text-align:center;
        line-height:300px;
        //background:url(../assets/img/background.jpg)
        .swiperImg{
            width:222px;
            height:222px;
        }
    }
</style>
<script>
    import bus from '../store/bus.js';
    //import BMap from 'BMap';
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
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
                slidePicArr:[]
            }
        },
        computed: {
        },
        methods:{

        },
        mounted () {
            bus.$on("getSlidePicture",(arr)=>{
                this.slidePicArr = arr;
                console.log(this.slidePicArr)
            })
        }

    }
</script>


