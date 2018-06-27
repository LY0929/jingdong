<template>
  <div class="book">
    <div class="head">
      <i class="iconfont icon-classify9"></i>
      <div class="in">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="云边有个小卖部">
      </div>
    </div>
    <div class="ul">
      <ul>
        <li class="on">热门推荐</li>
        <li>儿童文学</li>
        <li>科普百科</li>
        <li>幼儿启蒙</li>
        <li>儿童文学</li>
        <li>科普百科</li>
        <li>幼儿启蒙</li>
        <li>科普百科</li>
        <li>幼儿启蒙</li>
        <li>幼儿启蒙</li>
        <li>幼儿启蒙</li>
        <li>幼儿启蒙</li>
      </ul>
    </div>
    <div class="imgs">
      <ul>
        <li v-for="book in hotbooks">
          <img :src="book.img" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {getHotBooks1} from "../api/getData";

  export default {
    name: "BookClass",
    data(){
      return{
        hotbooks:[]
      }
    },
    created:function(){
      getHotBooks1().then(res=>{
        this.hotbooks=res.data;
      }).catch(error=>{
        console.log(error)
      });
    }
  }


</script>

<style scoped>
  *{margin: 0px;padding:0px}
  ul,li{list-style: none}
  .book{width: 100%;overflow: auto;margin-bottom: 50px}
  .book .head{width: 100%;height:40px;line-height:30px;margin:5px auto 0px auto;border-bottom: 1px solid #eee;padding: 0px 10px;box-sizing: border-box}
  .head i{font-size:20px;color:peru;}
  .head .in{width:70%;height:20px;line-height:20px;border-radius:15px;
    border: 1px solid #ccc;display: inline-block;margin-left:20px;padding-left: 10px;background:#eee }
  .head .in i{color: #888;font-size: 16px}
  .head  .in input{border: none;background:#eee;font-size: 12px;color:#ccc}
  .book .ul{width: 30%;height: auto;float:left;background:#eee;text-align: center}
  .book .ul li{width:100%;height:50px;line-height:50px}
  .book .ul  .on{background: white;color: red}
  .book  .imgs{float: right;width:70%;margin-top:20px}
  .book  .imgs  li{width:70px;height:70px;float: left;margin: 10px}
  .book  .imgs  li img{width: 100%}
</style>
