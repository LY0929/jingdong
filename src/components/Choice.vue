<template>
  <div>
    <my-header2 :back="true">
      <div></div>
    </my-header2>
    <div class="boxx">
      <Swiper ref="swiper" v-if="list.length > 0" :autoPlay='true' :showIndicator='true' interval="1000" duration="500">
        <Slide @click="clickMe" v-for="(tag,key) in list" :key="key">
          <img :src="tag.img" />
        </Slide>
      </Swiper>
    </div>
    <div class="content">
      <ul>
        <router-link v-for="(book,index) in books" tag="li" :to="{name:'details',params:{bid:book.bookId}}" :key="index">
          <div>
            <p>{{book.bookSum}}</p>
            <h1>
              <img :src="book.img1">
              <b>{{book.title}}</b>
              <span>{{book.price}}</span>
            </h1>

          </div>
          <img :src="book.img">
        </router-link>
      </ul>
      <div id="one" >
        <div v-for="(book,index) in books1">
          <p>{{book.bookSum}}</p>
          <img :src="book.img">
          <h1>
            <img :src="book.img1">
            <span><i>{{book.title}}</i><b>{{book.price}}</b></span>

          </h1>

        </div>
      </div>
      <ul>
        <router-link v-for="(book,index) in books2" tag="li" :to="{name:'detail',params:{bid:book.bookId}}" :key="index">
          <div>
            <p>{{book.bookSum}}</p>
            <h1>
              <img :src="book.img1">
              <b>{{book.title}}</b>
              <span>{{book.price}}</span>
            </h1>

          </div>
          <img :src="book.img">
        </router-link>
      </ul>
    </div>
  </div>

</template>

<script>
  import MyHeader2 from '../base/MyHeader2'
  import {getBooks,getBooks1,getBooks2} from '../api/getData'
  import { Swiper, Slide } from 'vue-swiper-component';

  //重要取出数据内容
  import {getSlides} from "../api/getData";
  export default {
    name: "Choice",
    // components:{MyHeader},
    data(){
      return{
        books:[],
        books1:[],
        books2:[],
        list: [
          { img: 'https://qiniu.epipe.cn/5456575529551388672?imageslim&imageView2/1/w/750/h/360' },
          { img: 'https://qiniu.epipe.cn/5430983074181545984?imageslim&imageView2/1/w/750/h/360' },
          { img: 'https://qiniu.epipe.cn/5464226412548325376?imageslim&imageView2/1/w/750/h/360' },
        ],
        slides:[],
      }
    },
    components: {
      Swiper,
      Slide,
      MyHeader2
    },
    created:function(){
      console.log('run');
      getBooks().then(res=>{
        console.log(res.data);
        this.books=res.data;
        console.log(this.books)
      }).catch(err=>{
        console.log(err);
      });
      getBooks1().then(res=>{
        console.log(res.data);
        this.books1=res.data;
        console.log(this.books1)
      }).catch(err=>{
        console.log(err);
      });
      getBooks2().then(res=>{
        console.log(res.data);
        this.books2=res.data;
        console.log(this.books2)
      }).catch(err=>{
        console.log(err);
      });
      getSlides().then(res=>{
        this.slides=res.data;
      }).catch(err=>{
        console.log(err);
      });
      getSlides().then(res=>{
        this.slides=res.data;
      }).catch(err=>{
        console.log(err);
      });
      getBooks().then(res=>{
        console.log(res.data);
        this.books=res.data;
      }).catch(err=>{
        console.log(err);
      });
    },
    methods:{
      dels(id) {
        delBook(id).then(res => {
          this.books=res.data;
        }).catch(error=>{
          console.log(error);
        })
      },
      // dels(id) {
      //   delBook(id).then(res => {
      //     this.books=res.data;
      //   }).catch(error=>{
      //     console.log(error);
      //   })
      // },
      clickMe(index){
        console.log(index)
      },
    },


  }
</script>

<style scoped>
  div{ background-color: #F7F7F7}
  .content{width: 90%;margin: 10px auto;}
  .content ul li{display: flex;padding: 10px;border-bottom: 1px solid #f1f1f1; background-color: #fff; margin-bottom: 2%}
  .content ul li p{width:100%;color: #2a2a2a;line-height: 20px; font-size: 17px;}
  .content ul li div{width:45%;margin-right: 8px; background-color: #fff}
  .content ul li div h1 img{width:15px; height:15px;border-radius: 50%; float: left; margin-top: 18px;}
  .content ul li div h1 b{font-weight: normal; font-size: 11px; color: #999; padding-left: 8px;}
  .content ul li div h1 span{font-weight: normal; font-size:11px; color:#999}
  .content ul li h4{font-size: 17px;color: #333;line-height: 30px;}
  .content ul li img{width:190px;height:110px; float: right; display: inline-block}
  .content ul li h5{font-size: 15px;color: #666;}
  .content ul li h5 .del{width:40px; height: 40px; line-height: 40px; text-align: center; float: right;}

  .content #one{width:100%;height:200px; padding: 10px;border-bottom: 1px solid #f1f1f1; background-color: #fff; margin-bottom: 2%;}
  .content #one h1 img{width:15px; height:15px;border-radius: 50%;display: inline-block}
  .content #one h1 span b{font-weight: normal;font-size: 11px; color: #999;float:right}
  .content #one h1 span{width:92%;font-weight: normal;font-size:11px; color:#999;float: right;padding-right: 2%}
  .content #one h1 span i{float: left}
  .content #one p{width:95%;height:30px;line-height:20px;color: #2a2a2a;font-size: 17px;margin: 0px auto}
  .content #one img{width:100%;height:150px;}
  .content #one h1{width:100%;font-size: 15px;color: #666;}


  .my-swiper img{width: 98%; margin: 0px auto;margin-top:28%;}
  .boxx{margin-top:9%}
  img {width: 100%;}
</style>
