<template>
  <div class="meber">
    <div class="img">
      <img src="https://m.360buyimg.com/babel/jfs/t23845/5/265389523/217989/e9081aa8/5b2a394fN2d2771e9.jpg!q70.dpg">
      <img src="https://m.360buyimg.com/babel/jfs/t21001/219/1065766700/22374/5c713930/5b1faf5fN7b578ecc.png">
      <img src="https://m.360buyimg.com/babel/s510x340_jfs/t23392/200/251181105/162607/444200d8/5b2a39daN576c5b0d.jpg!q70.dpg">
    </div>
    <div class="clo">
      <swiper :options="swiperOption" class="my-swiper">
        <!-- mybook-->
        <swiper-slide v-for="(mb,index) in mybook" :key="index">
          <img :src="mb.img" alt="">
          <p>{{mb.title}}</p>
          <p>￥{{mb.price}}</p>
        </swiper-slide>
      </swiper>
    </div>
    <div class="img">
      <img src="https://m.360buyimg.com/babel/jfs/t21001/219/1065766700/22374/5c713930/5b1faf5fN7b578ecc.png">
      <img src="https://m.360buyimg.com/babel/s510x340_jfs/t23392/200/251181105/162607/444200d8/5b2a39daN576c5b0d.jpg!q70.dpg">
    </div>
    <div class="clo">
      <swiper :options="swiperOption" class="my-swiper">
        <!-- mybook-->
        <swiper-slide v-for="(mb,index) in mybook" :key="index">
          <img :src="mb.img" alt="">
          <p>{{mb.title}}</p>
          <p>￥{{mb.price}}</p>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
  import {getMyBook} from "../api/getData";

  export default {
    name: "Meber",
    data() {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
        },
        mybook:[]

      }},
    created:function(){
      getMyBook().then(res=>{
        this.mybook=res.data;
      }).catch(error=>{
        console.log(error)
      });
    }
  }
</script>

<style scoped>
  *{margin: 0px;padding:0px}
  ul,li{list-style: none}
  .meber{width: 100%;overflow: auto;margin-bottom:50px}
  .img {background: darkslateblue;height: auto}
  .img ,.img img{width: 100%;}
  .meber .clo p{width:90px;font-size:12px}
  .meber.clo .swiper-container{overflow: auto;}
  .clo .swiper-slide{width:107px !important;margin-left: 5px}
  .clo .swiper-slide.swiper-slide-active {width:107px !important;}
  .clo.swiper-slide.swiper-slide-next{width:107px !important;}
  .clo .swiper-slide.swiper-slide-prev{width:107px !important;}
</style>
