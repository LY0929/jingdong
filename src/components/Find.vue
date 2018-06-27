<template>
  <div id="app">
    <div class="header" v-if="searchBarFixed">
      <slot></slot>
      <div>发现</div>
      <i class="iconfont icon-shangyiye" v-if="back" @click="goBack" ></i>
      <i class="iconfont icon-more"></i>
    </div>
    <router-view></router-view>
    <tab3></tab3>
  </div>
</template>

<script>
  import Tab3 from '../base/Tab3'
  export default {
    name: 'Find',
    components: {
      Tab3
    },
    props:['back'],
    data(){
      return {
        scrollTop:'',
        searchBarFixed:true,
      }
    },
    methods:{
      goBack(){
        //获取当前路由
        this.$router.go(-1);
      },
    },

  }
</script>

<style>
  *{padding: 0;margin: 0;}
  ul,li{list-style: none;}
  a{text-decoration: none;}
  button,input{-webkit-appearance: none;}
  /*#box{position: fixed; top:0px; left:0px; width: 100%; height: 88px;}*/
  .header{ position:fixed; top:0px; left:0px;width: 100%;height: 44px;text-align: center;line-height: 40px;color: #fff;}
  .header .iconfont.icon-shangyiye{width:20%; position: absolute;left: 10px;top:2px;font-size: 18px; z-index:100}
  .header .iconfont.icon-more{ width:20%; position: absolute; right: 10px;top:2px;font-size: 18px;}
</style>
