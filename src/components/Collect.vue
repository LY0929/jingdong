<template>
  <div>
    <my-header2 :back="true">
      <div>个人收藏</div>
    </my-header2>
    <div class="container">
      <ul>
        <li v-for="book in collectBooks">
          <img :src="book.img" alt="">
          <b>{{book.title}}</b>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import MyHeader2 from '../base/MyHeader2'
  import {getCollections} from "../api/getData";

  export default {
    name: "Collect",
    components:{MyHeader2},
    created(){
      this.getData();
    },
    data(){
      return {
        //已收藏的书籍  数组
        collectBooks:[]
      }
    },
    methods:{
      //向服务器发送请求  获取数据
      getData(){
        getCollections().then(res=>{
          console.log(res.data);
          this.collectBooks=res.data;//将数据存入数组
          // console.log('this.collectBooks'+res.data);
        }).catch(error=>{
          console.log('服务器繁忙');
        });
      }
    }
  }
</script>

<style scoped>
  .container{width: 90%;margin: 8px auto; margin-top:9%}
  .container ul{display: flex;flex-wrap: wrap;margin: 8px 0;margin-bottom: 50px;}
  .container li{width: 50%;text-align: center;margin: 5px 0;}
  .container li img{width: 90%;}
</style>
