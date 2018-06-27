// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

// 1.导入swiper轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css';
//2.使用swiper轮播插件
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false

//导入组件
import Index from './components/Index'
import Welcome from './components/Welcome'
import Home from './components/Home'
import Classify from './components/Classify'
import Find from './components/Find'
import Shopping from './components/Shopping'
import LogIn from './components/LonIn'
import One from './components/One'
import Detail from './base/Detail'
import Bottom from './base/Bottom'
import Buy from './components/Buy'
import Live from './base/Live'
import LHome from './components/LHome'
import Rank from  './base/Rank'
import Hot from './components/Hot'
import Event from './components/Event'
import Discont from './components/Discont'
import Water from './components/Water'
import Phone from './components/Phone'
import Check from './components/Check'
import Eat from './components/Eat'
import Snake from './components/Snake'
import Cross from './components/Cross'
import DetallWater from './components/DetallWater'
import DetailCheck from './components/DetailCheck'
import DetailPhone from './components/DetailPhone'
import Enter from './components/Enter'
import Enroll from './components/Enroll'
import My from './components/My'

import Choice from './components/Choice';
import Tasty from './components/Tasty';
import Collect from './components/Collect';
import Nice from './components/Nice';
import Details from './components/Detail';//123路由


import Desigenr from './base/Desigenr'
import DesHome from './components/DesHome'
import Jdx from './components/Jdx'
import Desq from './components/Desq'

import Book from './base/Book'
import BookHome from './components/BookHome'
import BookClass from './components/BookClass'
import BookRank from './components/BookRank'
import Meber from './components/Meber'

Vue.use(VueRouter);

const router=new VueRouter({
  routes:[

    // {path:'/buy',component:Buy,name:'buy'},

    //后台
    {path:'/enter',component:Enter,name:'enter'},
    {path:'/enroll',component:Enroll,name:'enroll'},
    {path:'/my',component:My,name:'my'},
    {path:'/bottom',component:Bottom,name:'bottom'},
    {path:'/detail',component:Detail,name:'detail'},
    {path:'/index',component:Index,children:[
        {path:'buy',component:Buy,name:'buy'},
        {path:'home',component:Home,name:'home'},
        {path:'',redirect:'home'},
        {path:'classify',component:Classify,children:[
            {path:'one',component:One},
          {path:'',redirect:'one'},
          ]},
        {path:'find',component:Find,children:[
          {path:'choice',component:Choice},
            {path:'',redirect:'choice'},
            {path:'shopping',component:Shopping},
            {path:'tasty',component:Tasty},
            {path:'nice',component:Nice},
            {path:'collect',component:Collect},
            ]},
        {path:'login',component:LogIn,},
      ]},
    {path:'/Welcome',component:Welcome},
    {path:'',redirect:'/Welcome'},
    {path:'/live',component:Live,children:[
        {path:'/lhome',component:LHome},
        {path:'',redirect:'/lhome'}
      ]},
    {path:'/rank',component:Rank,children:[
        {path:'hot',component:Hot,children:[
            {path:'water',component:Water},
            {path:'phone',component:Phone},
            {path:'check',component:Check},
            {path:'',redirect:'water'}
          ],},
        {path:'discont',component:Discont,children:[
            {path:'water',component:Water},
            {path:'phone',component:Phone},
            {path:'check',component:Check},
            {path:'',redirect:'water'}
          ]},
        {path:'event',component:Event,children:[
            {path:'cross',component:Cross},
            {path:'eat',component:Eat},
            {path:'snake',component:Snake},
            {path:'',redirect:'cross'}
          ]},
        {path:'',redirect:'hot'},
        {path:'/detallw/:bid',component:DetallWater,name:'detallw'},
        {path:'/detailp/:bid',component:DetailPhone,name:'detailp'},
        {path:'/detailc/:bid',component:DetailCheck,name:'detailc'}
      ]},

    {path:'/details :bid',component:Details,name:'details'},


    {path:'/desigenr',component:Desigenr,children:[
        {path:'deshome',component:DesHome},
        {path:'',redirect:'deshome'},
        {path:'desq',component:Desq},
        {path:'jdx',component:Jdx}
      ]},

    {path:'/book',component:Book,children:[
        {path:'bookhome',component:BookHome},
        {path:'',redirect:'bookhome'},
        {path:'bookclass',component:BookClass},
        {path:'bookme',component:BookHome},
        {path:'bookrank',component:BookRank},
        {path:'meber',component:Meber}
      ]}

    ]
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
});
