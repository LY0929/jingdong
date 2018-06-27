<template>
  <div>
    <div class="content">
      <ul>
        <li v-for="(book,index) in allBooks" :key="index">
          <img :src="book.img" alt="">
          <div>
            <h4>{{book.title}}</h4>
            <p>{{book.bookSum}}</p>
            <b>￥{{book.price}}</b>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {getMBooks} from "../api/getData";

  export default {
    name: "BookRank",

    data(){
      return{
        allBooks:[]
      }
    },created:function(){
      this.getData()
    },
    methods:{
      getData(){
        getMBooks().then(res=>{
          this.allBooks=res.data;
        }).catch(error=>{
          console.log(error)
        });
      },
    }
  }
</script>

<style scoped>
  .content{width:90%;margin:10px auto;margin-bottom: 50px}
  .content ul{padding: 0px}
  .content ul li{display: flex;margin-bottom: 10px}
  .content ul li img{width: 110px;height:110px}
  .content ul li h4{font-size: 16px;color:#333;line-height:25px}
  .content ul li p{font-size: 14px;color: #2a2a2a;line-height:20px}
  .content ul li button{display: inline-block;width: 60px;height: 25px;border: none;
    outline: none;background: orange;color: white;border-radius: 3px;margin-left:5px}


</style>
