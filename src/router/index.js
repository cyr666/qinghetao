import Vue from 'vue';
import Router from 'vue-router';
import login from '../views/login.vue';
import dynamic from '../views/dynamic.vue';
import newsDetail from '../views/newsDetail.vue';
import reference from '../views/reference.vue';
import referenceDetail from '../views/referenceDetail.vue';
import scientific from '../views/scientific.vue';
import scientificDetail from '../views/scientificDetail.vue';
import bigData from '../views/bigData.vue';
import technologyTransform from '../views/technologyTransform.vue'
Vue.use(Router);

export default new Router({
    //mode:'history',
    routes: [
        {
            path: '/',
            name: 'login',
            component: login
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/dynamic',
            name: 'dynamic',
            component: dynamic
        },
        {
            path: '/newsDetail',
            name: 'newsDetail',
            component: newsDetail
        },
        {
            path: '/reference',
            name: 'reference',
            component: reference
        },
        {
            path: '/referenceDetail',
            name: 'referenceDetail',
            component: referenceDetail
        },
        {
            path: '/scientific',
            name: 'scientific',
            component: scientific
        },
        {
            path: '/scientificDetail',
            name: 'scientificDetail',
            component: scientificDetail
        },
        {
            path: '/bigdata',
            name: 'bigdata',
            component: bigData
        },
        {
            path: '/technologyTransform',
            name: 'technologyTransform',
            component: technologyTransform
        }
    ]
});
