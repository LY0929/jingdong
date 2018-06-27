<template>
  <div class="footer">
    <router-link to="/index/home">
      <i class="iconfont icon-homes9"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/index/classify">
      <i class="iconfont icon-classify9"></i>
      <span>分类</span>
    </router-link>
    <router-link to="/index/find">
      <i class="iconfont icon-faxian"></i>
      <span>发现</span>
    </router-link>
    <router-link to="/index/buy">
      <i class="iconfont icon-gouwuche"></i>
      <span>购物车</span>
    </router-link>
    <router-link to="/enter">
      <i class="iconfont icon-denglu"></i>
      <span>{{online}}</span>
    </router-link>
  </div>
</template>

<script>
  import {isenter} from "../api/getData";

  export default {
    name: "Tab",
    data(){
      return {
        online:''
      }
    },
    methods:{
      font(){
        isenter().then(res=>{
          if(res.data.msg){
            this.online='已登录'
          }else{
            this.online='未登录'
          }
        }).catch()
      }
    },
    created(){
      this.font()
    }
  }
</script>

<style scoped>
  .footer{
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0px;
    display: flex;
    box-shadow: 0px -2px 30px #ccc ;
    background: #fff;
  }
  a{
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #666873;
  }
  a span{
    color: #0e121f;
    font-size: 12px;
  }
  .router-link-active{
    color: red;
  }
  .router-link-active span{
    color: red;
  }
</style>
