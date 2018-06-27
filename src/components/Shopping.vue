<template>
  <div>
    <my-header2 :back="true">
      <div>发现</div>
    </my-header2>
    <swiper :options="swiperOption" class="my-swiper">
      <swiper-slide v-for="(img,index) in slides" :key="index">
        <img :src="img" alt="" >
      </swiper-slide>
    </swiper>
    <div class="content">
      <!--热门图书-->
      <div class="container">
        <h4>【热门商品】</h4>
        <ul>
          <!--<li v-for="book in hotBooks">-->
          <router-link v-for="(book,index) in hotBooks" tag="li" :to="{name:'details',params:{bid:book.bookId}}" :key="index">
            <img :src="book.img" alt="">
            <h5>￥{{book.title}}</h5>
            <h6>{{book.bookSum}}</h6>

            <p>{{book.price}}<span class="img" @click.stop="change(book.bookId,book.isCollected)"><b>收藏</b><i :class="[classA,book.isCollected?'icon-icon3':'icon-shoucang']"></i></span></p>
            <!--</li>-->
          </router-link>
        </ul>

      </div>
      <!--热门图书结束-->
    </div>
  </div>

</template>

<script>
  import MyHeader2 from '../base/MyHeader2'
  import {getHotBooks,getSlides} from "../api/getData"
  import {getBookById,setCollect1} from "../api/getData";

  export default {
    name: "Home",
    components:{MyHeader2},
    data(){
      return {
        hotBooks:[],
        slides:[],
        classA:'iconfont',
        // classB:'icon-shoucang',
        myBook:'',
        swiperOption:{}
      }
    },
    created:function () {
      getHotBooks().then(res=>{
        this.hotBooks=res.data;
        console.log(res.data);
      }).catch(err=>{
        console.log(err);
      });
      getSlides().then(res=>{
        this.slides=res.data;
      }).catch(err=>{
        console.log(err);
      });
      this.getDataById();
    },
    methods:{
      //向服务器发送请求，获取当前书籍
      getDataById(){
        getBookById().then(res=>{
          console.log('res.data'+res.data);
          this.myBook=res.data;
          // this.classB=this.myBook.isCollected?'icon-icon3':'icon-shoucang';
        }).catch(error=>{
          console.log('服务器繁忙');
        });
      },
      //点击事件  发送请求  收藏/取消收藏
      change(id,isColl){
        // console.log(this.myBook);
        setCollect1(id,!isColl).then(res=>{
          console.log(res);
          // let data=res.data.msg;
          this.hotBooks.forEach(h=>{
            if(h.bookId==res.data.msg){
              h.isCollected=res.data.isC;
              console.log('res.data.isC123'+res.data.msg)
            }
          })
          // if(data==='ok'){
          // this.classB=res.data.isC?'icon-shoucang':'icon-icon3';
          // this.getDataById();

          // }
        }).catch(error=>{
          console.log(error);
        });

      }
    }
  }
</script>

<style scoped>
  .container{width: 90%;margin: 8px auto;}
  .container h4{letter-spacing: 2px;}
  .container h4 span{font-size: 12px;}
  .container ul{display: flex;flex-wrap: wrap;margin: 8px 0;margin-bottom: 50px; padding: 5px;}
  .container li{width: 50%;text-align:left;padding-bottom: 80px;}
  .container li img{width: 90%; height: 70%}
  .container li h5{font-weight: normal;font-size: 18px;}
  .container li h6{font-weight: normal;font-size:13px;padding-right: 4px;}
  .container li p{padding-top:8px;}
  .container li p span{color: #666; float: right;padding-right: 18px;font-size: 13px;}
  .container li p span b{float:left;}
  .container li p span i{float: right;}

  .my-swiper img{width: 98%; margin: 0px auto;margin-top:10%; }
</style>
