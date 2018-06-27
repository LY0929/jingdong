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
        <li>热门搜索：</li>
        <li class="on">图书钜惠</li>
        <li>东野圭吾</li>
        <li>绘本</li>
        <li>跨店满减</li>
        <li>区块链</li>
      </ul>
    </div>
    <swiper :options="swiperOption" class="my-swiper">
      <!-- books -->
      <swiper-slide v-for="(img,index) in books" :key="index"><img :src="img" alt=""></swiper-slide>
    </swiper>
    <div class="img">
      <img src="https://m.360buyimg.com/babel/jfs/t21436/96/296893777/107810/8ff893b4/5b07c58aNfa490dee.jpg!q70.dpg">
    </div>
    <div class="line"></div>
    <div class="text">
      <div >
        <img src="https://m.360buyimg.com/babel/jfs/t18097/208/2237117039/14231/93583833/5aebc6faN99724e9e.png" >
        <div class="t">文学小说，满300减100</div>
      </div>
    </div>
    <div class="line"></div>
    <div class="miaosha">
      <img src="http://m.360buyimg.com/babel/jfs/t19096/352/2242027346/18606/8d835fc3/5aebc6bdN247c7fbf.jpg!q70.dpg">
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
    <div class="ul1">
      <ul>
        <li><img src="https://m.360buyimg.com/babel/s171x222_jfs/t21079/8/1369960447/86558/d4597940/5b265603Nda0ad3af.jpg!q70.dpg"></li>
        <li><img src="https://m.360buyimg.com/babel/s171x222_jfs/t22744/338/471746035/187578/927ba291/5b3063f8N074e5971.jpg!q70.dpg"></li>
        <li><img src="https://m.360buyimg.com/babel/s171x222_jfs/t24118/288/420836000/132743/17391e8e/5b2f7229N5ccc3b44.jpg!q70.dpg"></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {getBooks99,getMyBook} from "../api/getData";

  export default {
    name: "BookHome",

    data() {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
        },
        books:[],
        mybook:[]

      }},
    created:function(){
      getBooks99().then(res=>{
        this.books=res.data;
      }).catch(error=>{
        console.log(error)
      });
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
  .book{width: 100%;overflow: auto;margin-bottom: 50px;overflow: hidden}
  .book .head{width: 100%;height:40px;line-height:30px;margin:5px auto 0px auto;border-bottom: 1px solid #eee;padding: 0px 10px;box-sizing: border-box}
  .head i{font-size:20px;color:peru;}
  .head .in{width:80%;height:20px;line-height:20px;border-radius:15px;
    border: 1px solid #ccc;display: inline-block;margin-left:20px;padding-left: 10px;background:#eee }
  .head .in i{color: #888;font-size: 16px}
  .head  .in input{border: none;background:#eee;font-size: 12px;color:#ccc}
  .book .ul{width: 100%;height:30px;font-size: 12px;line-height: 30px}
  .book .ul span{display: inline-block;}
  .book .ul ul{display: inline-block;width:100%;margin:0px 50px}
  .book .ul ul li{ float:left;margin-right: 3px}
  .book .ul .on{color: peru;}
  .book .my-swiper img{width: 100%;margin: auto}
  .book .img{width: 100%}
  .book .img img{width: 100%}
  .book .line{width: 100%;height:5px;background:#eee}
  .book .text{width: 100%;height:30px;font-size: 14px;font-weight: bold;line-height:30px;}
  .book .text img{width:20%;height:20px;margin-top:5px;margin-left: 10px}
  .book .text .t{float:right;margin-right:80px}
  .book .miaosha{width: 100%;height:30px;margin-top:5px}
  .book .miaosha img{width:100%}
  .book .clo p{width:90px;font-size: 12px}
  .book .clo .swiper-container{overflow: auto;}
  .clo .swiper-slide{width:107px !important;margin-left: 5px}
  .clo .swiper-slide.swiper-slide-active {width:107px !important;}
  .clo.swiper-slide.swiper-slide-next{width:107px !important;}
  .clo .swiper-slide.swiper-slide-prev{width:107px !important;}
  .book .ul1{margin:auto;background: beige;width: 100%;height:280px;text-align: center}
  .book .ul1 ul{width: 100%;text-align: center;overflow: hidden;padding:30px 0px}
  .book .ul1 ul li :nth-child(1){float:left;margin-left:-20%}
  .book .ul1 ul li:nth-child(2){margin-left:40%}
  .book .ul1 ul li:nth-child(3){float: right;width:20%;}

</style>
