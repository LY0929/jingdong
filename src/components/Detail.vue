<template>
  <div class="content">
    <my-header2 :back="true">
      <div>购物百科--电视</div>
    </my-header2>
    <div class="container">
      <div v-for="book in myBook">
        <img :src="book.img">
      </div>
    </div>
  </div>
</template>

<script>
  import MyHeader2 from '../base/MyHeader2'
  import {getBookById,setCollect,getdetail1} from "../api/getData";
  export default {
    name: "Detail",
    components:{MyHeader2},
    data(){
      return{
        detail1:[],
        myBook:'',
        classA:'iconfont',
        classB:'icon-shoucang'
      }
    },
    created:function(){
      this.getDataById();

    },
    computed:{
      bookId(){
        return this.$route.params.bid;
      }
    },
    methods:{
      getDataById(){
        getBookById(this.bookId).then(res=>{
          // console.log(res.data);//可以得到点击的数据
          this.myBook=res.data;
          console.log(this.myBook);
          this.classB=this.myBook.isCollected?'icon-star__easyico':'icon-shoucang';
        }).catch(error=>{
          console.log('服务器繁忙');
        });
      },
      //点击事件  发送请求  收藏/取消收藏
      // change(id,isColl){
      //   setCollect(id,!isColl).then(res=>{
      //     let data=res.data.msg;
      //     if(data==='ok'){
      //       this.classB=res.data.isC?'icon-star__easyico':'icon-shoucang';
      //     }
      //   }).catch(error=>{
      //     console.log(error);
      //   });
      // }
    }
  }
</script>

<style scoped>
  .content{left: 0;top: 0;bottom: 0;right: 0;background: #fff;z-index: 100;}
  .container{width: 90%;text-align: center;margin: 0px auto;margin-top:9%;}
  .container img{width: 90%;margin: 0px auto;}

  .book-img{text-align: center;}
  .book-img img{width: 100%;}
  .title{margin-top: 10px;}
  #one div img{width: 100%;padding-top:20%;}
  .content i img{width: 100%;}
  .title p{font-size: 18px;font-weight: bold;float: left;margin-left: 60px;}
  .title .img{float: right;}
  .title .book-sum{font-size: 14px;color: red;font-weight: normal;margin-top: 10px;}
  .title .book-author{font-size: 15px;color: #999;font-weight: normal;margin-top: 8px;}
  .title .price{font-size: 16px;color: red;clear: both;margin-top: 10px;}
  .title .img span{font-size: 12px;color: #999;margin-left: 8px;}
  .title .img .iconfont{font-size: 19px;}
  .icon-star__easyico{color: coral;}
</style>
