<template>
  <div class="content">
    <ul>
      <router-link v-for="(check,index) in allCheck" tag="li" :to="{name:'detailc',params:{bid:check.id}}" :key="index">
        <div class="img">{{check.id}}</div>
        <img :src="check.img" alt="">
        <div class="text">
          <p>{{check.title}}</p>
          <b>￥{{check.price}}</b>
          <p class="on"><span>销售指数</span>98</p>
        </div>
      </router-link>
    </ul>

  </div>
</template>

<script>
  import {getCheck} from "../api/getData";

  export default {
    name: "Check",
    data(){
      return{
        allCheck:[],
      }
    },
    created:function(){
      this.getData();

    },
    methods:{
      //向服务器发送请求，获取所有商品
      getData(){
        getCheck().then(res=>{
          this.allCheck=res.data;
        }).catch(err=>{
          console.log('服务器繁忙')
        })
      }
    },
  }
</script>

<style scoped>
  .content{width:100%;margin:0px auto;margin-bottom: 50px}
  .content .img{background: red;width:20px;height:20px;text-align: center;color: white;padding-left: 0px}
  .content ul li{border-bottom: 1px solid #ccc;}
  .content ul li img{margin-left: 15px}
  .content .text{float: right;padding-left:15px;width: 150px;margin-right: 10px}
  .content ul li img{width: 110px;height:110px}
  .content ul li p{font-size:14px;color: #2a2a2a;line-height:20px}
  .content ul li b{margin-top: 5px}
  .content .on{width:55px;height:12px;line-height:12px;margin-top:15px;font-size:10px;color: red;border:1px solid red}
  .content .on span{background: red;color: white;}
</style>
