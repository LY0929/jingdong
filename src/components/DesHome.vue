<template>
  <div class="designer">
    <div class="d">
      <img src='https://m.360buyimg.com/babel/s318x35_jfs/t18664/311/2522843747/31231/3aa464a7/5afbb1c0Nb2e9447b.jpg!q70.dpg'>
    </div>
    <div class="e">
      <img src="https://m.360buyimg.com/babel/s318x352_jfs/t20038/77/1956047236/204294/405e1fed/5b2bcc74N5c2bbb24.jpg!q70.dpg">
    </div>
    <div class="clo">
      <swiper :options="swiperOption" class="my-swiper">
        <!-- degs -->
        <swiper-slide v-for="(deg,index) in degs" :key="index">
          <img :src="deg.img" alt="">
          <p>{{deg.title}}</p>
          <p >￥{{deg.price}}</p>
        </swiper-slide>
      </swiper>
    </div>
    <div class="des">
      <img src="https://m.360buyimg.com/mobilecms/s750x750_jfs/t22405/60/1036270923/182057/c3c776e/5b1f42e1N7b78f346.jpg!q80.jpg">
    </div>
    <div class="title">
      <ul>
        <li><i class="iconfont icon-zuobiao "></i>新品牌注入</li>
        <li>今日最大牌</li>
        <li>主推品牌</li>
      </ul>
    </div>
    <div class="timg">
      <img src="https://m.360buyimg.com/babel/jfs/t22408/161/452421488/25523/bbb64e1a/5b0e1c7aNceb05a12.jpg!q70.dpg">
    </div>
    <div class="imgs">
      <img src="https://m.360buyimg.com/babel/s157x204_jfs/t16597/321/2685332140/180761/f6d3a925/5b0660d9N9ea9daf0.jpg!q70.dpg">
      <img src="https://m.360buyimg.com/babel/s157x204_jfs/t21181/362/1383803799/182484/2c7ff989/5b2774afN5ef35323.jpg!q70.dpg">
    </div>
    <div class="timg">
      <img src="https://m.360buyimg.com/babel/jfs/t21529/264/459841587/26082/c54dd958/5b0e1c6bNe1886db8.jpg!q70.dpg">
    </div>
    <div class="des">
      <img src="https://m.360buyimg.com/babel/s318x209_jfs/t20704/273/825118104/172146/ef3ec70c/5b19ee42Nf5a08708.jpg!q70.dpg">
    </div>
    <div class="clo">
      <swiper :options="swiperOption" class="my-swiper">
        <!-- degs -->
        <swiper-slide v-for="(deg,index) in degs" :key="index">
          <img :src="deg.img" alt="">
          <p>{{deg.title}}</p>
          <p >￥{{deg.price}}</p>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
  import {getDegs} from "../api/getData";

  export default {
    name: "DesHome",
    data() {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
        },
        degs: [],
      }
    },
    created:function(){
      getDegs().then(res=>{
        this.degs=res.data;
      }).catch(error=>{
        console.log(error)
      });
    }
  }
</script>

<style scoped>
  .designer{width:100%;overflow: auto;margin-bottom:50px}
  ul,li{list-style: none}
  .designer .d , .designer .d img {width: 100%}
  .designer .e , .designer .e img {width: 100%}
  .designer .clo{width:100% ;overflow:auto}
  .designer .clo p{width:100px;font-size: 12px;}
  .designer .clo .swiper-container{overflow: auto;}
  .clo .swiper-slide{width:105px !important;margin-left: 5px}
  .clo .swiper-slide.swiper-slide-active {width:105px !important;}
  .clo.swiper-slide.swiper-slide-next{width:105px !important;}
  .clo .swiper-slide.swiper-slide-prev{width:105px !important;}
  .des {width: 100%;height: 200px;overflow: hidden}
  .des img{width: 100%;}
  .title{margin-top: 5px;text-align: left}
  .title ul li{float: left;margin-right:10px}
  .timg , .timg img{width: 100%}
  .imgs img{width:40%;margin-left:25px}
</style>
