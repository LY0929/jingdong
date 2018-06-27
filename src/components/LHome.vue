<template>
  <div class="page">
    <!--slides-->
    <swiper :options="swiperOption" class="my-swiper">
      <!-- slides -->
      <swiper-slide v-for="(img,index) in slides" :key="index"><img :src="img" alt=""></swiper-slide>
    </swiper>
    <div class="conent">
      <img src="https://m.360buyimg.com/babel/jfs/t17017/117/1765805638/195709/9e31ca6c/5ad3fb48N48d91edf.jpg!q70.dpg">
    </div>
    <div class="con">
      <img src="https://m.360buyimg.com/babel/jfs/t17851/334/987447994/27682/223ad6b8/5ab36ec6N68d455c6.jpg!q70.dpg" class="img">
      <span>街头风MAX,印花卫衣来助攻</span>
      <i>更多</i>
    </div>
    <div class="line"></div>
    <div class="img">
      <img src="https://m.360buyimg.com/babel/jfs/t7627/98/3060837352/32286/94bc1892/59ba3b52N7d5152da.png">
      <img src="https://m.360buyimg.com/babel/jfs/t18307/231/956901815/85519/90782864/5ab483daNce502cb9.png">
    </div>
    <!--clothes-->
    <div class="clo">
      <swiper :options="swiperOption" class="my-swiper">
        <!-- clothes -->
        <swiper-slide v-for="(cloths,index) in clothes" :key="index">
          <img :src="cloths.img" alt="">
          <p>{{cloths.title}}</p>
          <p>￥{{cloths.price}}</p>
        </swiper-slide>
      </swiper>
    </div>
    <div class="clo">
      <swiper :options="swiperOption" class="my-swiper">
        <!-- clothes -->
        <swiper-slide v-for="(cloths,index) in clothes" :key="index">
          <img :src="cloths.img" alt="">
          <p>{{cloths.title}}</p>
          <p>￥{{cloths.price}}</p>
        </swiper-slide>
      </swiper>
    </div>
    <div class="clo">
      <swiper :options="swiperOption" class="my-swiper">
        <!-- clothes-->
        <swiper-slide v-for="(cloths,index) in clothes" :key="index">
          <img :src="cloths.img" alt="">
          <p>{{cloths.title}}</p>
          <p>￥{{cloths.price}}</p>
        </swiper-slide>
      </swiper>
    </div>
    <!--潮流穿搭-->
    <div class="box">
      <img src="https://m.360buyimg.com/babel/s318x42_jfs/t17632/102/928425733/30953/e8ff8263/5ab364ffN34916cb8.jpg!q70.dpg">
    </div>
    <div class="box1">
      <img src="https://m.360buyimg.com/babel/s157x204_jfs/t20785/238/449242561/150926/8dac1fd5/5b0e2886N9fe4575f.jpg!q70.dpg">
      <img src="https://m.360buyimg.com/babel/s157x204_jfs/t20071/262/1821269757/24533/ed755760/5b277957N43c13b5b.jpg!q70.dpg">
    </div>
    <!--明星同款-->
    <div>
      <img src="https://m.360buyimg.com/babel/s318x42_jfs/t18658/119/953069805/51157/fd5012ee/5ab36c0bN070de1cb.jpg!q70.dpg">
    </div>
    <div class="star">
      <img src="https://m.360buyimg.com/babel/jfs/t20788/314/1208020658/77553/fc36fd2f/5b21d212N0c48d106.png">
      <img src="https://m.360buyimg.com/babel/s106x146_jfs/t20518/285/869307671/121229/da8061da/5b1a49ffNe06c66b3.jpg!q70.dpg">
      <img src="https://m.360buyimg.com/babel/s106x146_jfs/t21517/302/865183849/90626/8ded9dde/5b1a2452N094da84d.jpg!q70.dpg">
      <img src="https://m.360buyimg.com/babel/s106x146_jfs/t20518/285/869307671/121229/da8061da/5b1a49ffNe06c66b3.jpg!q70.dpg">
      <img src="https://m.360buyimg.com/babel/s106x146_jfs/t21517/302/865183849/90626/8ded9dde/5b1a2452N094da84d.jpg!q70.dpg">
      <img src="https://m.360buyimg.com/babel/jfs/t20788/314/1208020658/77553/fc36fd2f/5b21d212N0c48d106.png">
    </div>
  </div>

</template>

<script>
  import {getSlides,getClothes} from "../api/getData";

  export default {
    name: "LHome",

    data() {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
        },
        slides: [],
        clothes:[]

      }},
    created:function(){
      getSlides().then(res=>{
        this.slides=res.data;
      }).catch(error=>{
        console.log(error)
      });
      getClothes().then(res=>{
        this.clothes=res.data;
      }).catch(error=>{
        console.log(error)
      });
    },

  }
</script>

<style scoped>
  .my-swiper img{width: 100%;}
  .page{width:100%;overflow: auto;margin-bottom: 50px}
  .swiper-container{width: 100%}
  .page .conent img{width: 100%;border-bottom: 1px solid #ccc}
  .page .con{width:100%;height:28px;line-height:28px;position:relative;text-align:center}
  .page .con .img{height:78%;width:18%;position: absolute;top:3px;left: 10px}
  .page .con span{font-size: 14px;font-weight: bold;display: inline-block;border-right: 1px solid #888;position: absolute;
    left:80px;top:3px;height:21px;line-height: 21px;padding-right:15px;
  }
  .page .con i{font-style:normal;font-size: 14px;color: #888;float: right;margin-right: 10px;}
  .page .line{width:100%;height:3px;background:#ccc}
  .page .img{width: 100%;}
  .page .img img {width: 100%}
  .page .clo p{width: 80px;font-size: 12px}
  .page .clo .swiper-container{overflow: auto;}
  .clo .swiper-slide{width:107px !important;margin-left: 5px}
  .clo .swiper-slide.swiper-slide-active {width:107px !important;}
  .clo.swiper-slide.swiper-slide-next{width:107px !important;}
  .clo .swiper-slide.swiper-slide-prev{width:107px !important;}
  .page .star img{width: 32%;height: 32%}

  .box1 img{
    margin-left: 30px;
  }
</style>
