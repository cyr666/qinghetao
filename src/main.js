
import Vue from 'vue';
import router from './router/index';
import $ from  'jquery';
// 引入bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
//字体图标
import './assets/font/iconfont.css';
// 引入echarts
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;

import biz from './config.js';
Vue.prototype.biz = biz;

const app = new Vue({
    router
}).$mount('#app');







