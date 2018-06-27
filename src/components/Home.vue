<template >
  <div id="box">

    <!--上标题-->
    <div class="head" ref="head">
      <router-link to="/classify" class="lefts">
        <span class="iconfont icon-fenleihuaban"></span>
      </router-link>

      <div id="ipt">
        <span class="iconfont icon-jingdong"></span>
        <span class="spana"></span>
        <span class="spanf"></span>
        <input type="text" id="ipter">
      </div>

      <router-link to="/login" class="rights">
        <i class="iconfont icon-xiaoxi"></i>
        <span>消息</span>
      </router-link>
    </div>
    <!--轮播图-->
    <swiper :options="swiperOption" ref="mySwiper" class="boxImg">
      <swiper-slide v-for="(i,index) in arrImg" :key="index"><img :src="i" ></swiper-slide>
    </swiper>
    <!--app便民入口-->
    <div v-for="(i,index) in arrAct" :key="index" class="boxAct"><img :src="i" alt=""></div>
    <div class="paging" >
      <router-link v-for="(i,index) in arrPag" :key="index" :to="i.to" class="pagingBox">
        <img :src="i.img" alt="">
        <p>{{i.title}}</p>
      </router-link>
    </div>

    <!--福利图片-->
    <div class="fuli">
      <router-link to="">
        <img src="https://m.360buyimg.com/mobilecms/jfs/t20527/245/1437133891/247125/6cdc76a1/5b28df9cNfe4729ef.jpg!q70.jpg" alt="">
      </router-link>
    </div>

    <!--京东秒杀-->
    <div class="secondsKill">
      <router-link to="" class="spans">
        <span>京东秒杀</span>
        <b>京选轮番秒杀></b>
      </router-link>
      <div class="killBox">
        <router-link to="" v-for="(i,index) in arrKill" :key="index" class="secondsBox" tag="div">
          <img :src="i.img" alt="">
          <p>{{i.pice}}</p>
          <i>{{i.kill}}</i>
        </router-link>
      </div>
    </div>

    <!--每日购 买买买-->
    <div class="DailyShopping">
      <img src="https://m.360buyimg.com/mobilecms/jfs/t20863/125/519979559/24806/2e941d67/5b0fecc7N541bb0dd.png!q70.jpg" alt="">
    </div>
    <div class="DailyShoppingBox">
      <router-link :to="i.to" v-for="(i,index) in arrDaily" :key="index" >
        <div class="dailybox">
          <h3>{{i.title}}</h3>
          <p>{{i.text}}</p>
          <img :src="i.img" alt="">
        </div>
      </router-link>
    </div>

    <!--爱生活-->
    <div class="DailyShopping">
      <img src="https://m.360buyimg.com/mobilecms/jfs/t15526/56/2344102455/23273/d8e15d5a/5aa0dbc1Nefd2bd2a.png!q70.jpg" alt="">
    </div>

    <div class="live">
      <router-link to="" v-for="(i,index) in arrLiveA" :key="index">
        <div class="liveBoxA">
          <h4>{{i.title}}</h4>
          <p>{{i.text}}</p>
          <img :src="i.imgA" alt="">
          <img :src="i.imgB" alt="">
        </div>
      </router-link>
      <router-link :to="o.to" v-for="o in arrLiveB">
        <div class="liveBoxB">
          <h4>{{o.title}}</h4>
          <p>{{o.text}}</p>
          <img :src="o.img" alt="">
        </div>
      </router-link>
    </div>

    <!--逛商场-->
    <div class="DailyShopping">
      <img src="https://m.360buyimg.com/mobilecms/jfs/t16513/302/2326287697/26686/e58b7ef4/5aa241ebN16cfe40f.png!q70.jpg" alt="">
    </div>
    <div class="live mall">
      <router-link :to="i.to" v-for="i in arrMallA" >
        <div class="liveBoxA">
          <h4>{{i.title}}</h4>
          <p>{{i.text}}</p>
          <img :src="i.img" alt="">
        </div>
      </router-link>
      <router-link :to="i.to" v-for="i in arrMallB" >
        <div class="liveBoxB">
          <h4>{{i.title}}</h4>
          <p>{{i.text}}</p>
          <img :src="i.img" alt="">
        </div>
      </router-link>
    </div>

    <!--特色推荐-->
    <div class="DailyShopping">
      <img src="https://m.360buyimg.com/mobilecms/jfs/t18535/84/701712774/27096/4495e446/5aa0def4N4412e53b.png!q70.jpg" alt="">
    </div>
    <div class="live rec">
      <router-link :to="i.to" v-for="i in arrRecA" >
        <div class="liveBoxA">
          <h4>{{i.title}}</h4>
          <p>{{i.text}}</p>
          <img :src="i.imgA" alt="">
          <img :src="i.imgB" alt="">
        </div>
      </router-link>
      <router-link :to="i.to" v-for="i in arrRecB" >
        <div class="liveBoxB recBoxB">
          <h4>{{i.title}}</h4>
          <p>{{i.text}}</p>
          <img :src="i.img" alt="">
        </div>
      </router-link>
    </div>

    <!--为你推荐-->
    <div class="forYou">
      <div class="forLeft"></div>
      <span class="forRecommend">
              <span class="iconfont icon-shangchuanxiangshangjiantou"></span>
              为您推荐
          </span>
      <div class="forRight"></div>
    </div>

    <!--登陆账号-->
    <div class="denglu">
      <router-link to="" >
        登陆账号，查看专属推荐商品>
      </router-link>
    </div>
    <!--推荐商品-->
    <div class="exclusiveBox" v-for="i in arrExc">
      <router-link to="">
        <img :src="i.img" alt="">
        <div class="excBox1">{{i.title}}</div>
        <div class="excBox2">{{i.price}}</div>
        <div class="excDiv">
          <span>{{i.evaluates}}</span>
          <router-link to="">
            <div class="excBox3">
              看相似
            </div>
          </router-link>
        </div>
      </router-link>
    </div>

    <!--底部版权栏-->

    <div class="load">
      <div @click="getMoreData" >点击继续加载</div>
    </div>

    <div class="baseBox">
      <div class="base1">
        <router-link to="">登陆</router-link>
        <router-link to="">注册</router-link>
        <router-link to="">反馈</router-link>
        <router-link to="">返回顶部</router-link>
      </div>
      <div class="base2">
        <router-link to="/download">
          <span class="iconfont icon-app"></span>
          <p>客户端</p>
        </router-link>
        <router-link to="">
          <span class="iconfont icon-guojihua"></span>
          <p>国际版</p>
        </router-link>
        <router-link to="">
          <span class="iconfont icon-huihua_fuzhi-copy"></span>
          <p>电脑版</p>
        </router-link>
      </div>
      <div class="base3">
        <router-link to="">
          Copyright © 2004-2018 京东JD.com 版权所有
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>


 import {getExclusiveSize,getCarousel,getActivity,getPaging,
        getSecondsKill,getDailyShopping,getLoveLiveA,getLoveLiveB,
        getShoppingMallB,getShoppingMallA,getRecommendA,getRecommendB} from "../api/getData";

  export default {
    name: "Home",
    components:{
      Headers
    },
    data () {
      return{
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          initialSlide: 0,
          loop: true,
          speed: 400,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
          onTransitionStart(swiper) {
            console.log(swiper);
          }
        },
        arrAct:[],
        arrPag:[],
        arrKill:[],
        arrDaily:[],
        arrLiveA:[],
        arrLiveB:[],
        arrMallA:[],
        arrMallB:[],
        arrRecA:[],
        arrRecB:[],
        arrExc:[],
        arrImg:[],
        excIndex:0,  //要加载的数据的index值，默认为0
      }
    },

    created:function(){
      this.getData();
      this.getExcSize();
    },
    mounted(){
      window.addEventListener('scroll',this.scrollTop);
    },
    methods:{
      scrollTop(){
        let Tops=window.pageYouffset||document.documentElement.scrollTop||document.body.scrollTop;
        if(Tops>300&&Tops<500){
          this.$refs.head.style.background='rgba(255,89,75,0.74)';
        }else if(Tops>500){
          this.$refs.head.style.background='rgba(193,7,5,0.9)';
        }
        else if(Tops==0){
          this.$refs.head.style.background='-webkit-linear-gradient(top,#000,transparent)';
        }
      },
      getData(){
        getCarousel().then(res=>{
          this.arrImg=res.data;
        }).catch(err=>{});
        getActivity().then(res=>{
          this.arrAct=res.data;
        }).catch(err=>{});
        getPaging().then(res=>{
          this.arrPag=res.data;
        }).catch(err=>{});
        getSecondsKill().then(res=>{
          this.arrKill=res.data;
        }).catch(err=>{});
        getDailyShopping().then(res=>{
          this.arrDaily=res.data;
        }).catch(err=>{});
        getLoveLiveA().then(res=>{
          this.arrLiveA=res.data;
        }).catch(err=>{});
        getLoveLiveB().then(res=>{
          this.arrLiveB=res.data;
        }).catch(err=>{});
        getShoppingMallA().then(res=>{
          this.arrMallA=res.data;
        }).catch(err=>{});
        getShoppingMallB().then(res=>{
          this.arrMallB=res.data;
        }).catch(err=>{});
        getRecommendA().then(res=>{
          this.arrRecA=res.data;
        }).catch(err=>{});
        getRecommendB().then(res=>{
          this.arrRecB=res.data;
        }).catch(err=>{});
      },
      getExcSize(){
        getExclusiveSize(this.excIndex).then(res=>{
          //将新数据添加到页面中
          let arrExcs=res.data.exclusiveSize;
          //遍历页面数据 添加到返回集合中
          arrExcs.forEach(b=>{
            this.arrExc.push(b);
          })
        }).catch(err=>{});
      },
      getMoreData(){
        this.excIndex=this.arrExc.length; //修改数据启示索引
        this.getExcSize();
      }
    }

  }
</script>

<style scoped>

#box{
  background: #F6F6F6;

}
  .head{
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0px;
    z-index: 50;
    background:-webkit-linear-gradient(top,#000,transparent);
    left: 0px;

  }
  .rights{
    float: right;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin: 8px;
    font-size: 20px;
  }
  .rights span{
    font-size: 13px;
  }
  .lefts{
    display: block;
    margin: 13px;
    float: left;
    color: #fff;
  }
  #ipt{
    float: left;
    margin-top: 8px;
    margin-left: 5px;
    width: 76%;
    height: 32px;
    background:#fff;
    border-radius: 20px;
    box-sizing: border-box;
  }
  #ipter{
    width:80%;
    border: none;
    outline: 0;
    float: right;
    margin-right: 10px;
    margin-top: 5px;
    font-size: 15px;
    background-size: 17px;
  }
  #ipter [type='text']{
    box-sizing: border-box;
    width: 80%;
    font-size: 17px;
    padding: 0px 150px;
  }

  .spana{
    display: inline-block;
    width: 1px;
    height: 20px;
    background: lightgray;
    position: fixed;
    margin-left: 5px;
    margin-top: 4px;
  }
  .spanf{
    background:url("../assets/fangdajing.png")no-repeat left;
    display: inline-block;
    float: left;
    width: 20px;
    height: 20px;
    position: fixed;
    margin:3px 10px;

  }
  .icon-jingdong{
    color: red;
    font-size: 20px;
    font-weight: bold;
    margin-left:15px;
    line-height: 30px;
  }


  .boxImg img{
    width: 100%;
  }
  .boxAct{
    margin-top: -5px;
    width: 100%;
  }
  .boxAct img{
    width: 100%;
  }
  .paging{
    width: 100%;
    height: 200px;
    margin-top: -5px;
    background: url("https://m.360buyimg.com/mobilecms/s1280x1280_jfs/t21853/313/1465240363/352302/691d23ba/5b2a1e4dN26e92e71.png.dpg.webp")no-repeat;
    background-size:cover;
    background-position: center center;
  }
  .pagingBox{
    float: left;
    width: 20%;
    text-align: center;
    padding-top:20px;
    font-size: 13px;
    color: #fff;

  }
  .paging img{
    width:60%;
  }
  .fuli img{
    width: 100%;
  }
  .secondsKill{
    width: 100%;
    height: 170px;
    background: #fff;

  }
  .spans{
    display: inline-block;
    width: 100%;
    height: 40px;
    line-height: 40px;
    color: #F02B2B;
  }
  .spans span{
    font-size: 18px;
    font-weight: bolder;
    margin-left: 10px;
  }
  .spans b{
    float: right;
    font-size: 13px;
    margin-right: 10px;
    color: rgba(238,66,33,0.64);
  }
  .killBox{
    width: 100%;
    height: 130px;
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .secondsBox{
    display: inline-block;
    float: left;
    width:80px;
    height: 130px;
    text-align: center;
    margin: 0 5px 0px 5px;
  }
  .secondsBox img{
    width:60px;
    height: 70px;
  }
  .secondsBox p{
    color:#F02B2B ;
    font-size: 17px;
    font-weight: bolder;
  }
  .secondsBox i{
    color: lightgray;
    font-size: 12px;
    text-decoration: line-through;
  }
  .DailyShopping{
    width: 100%;
    height: 40px;
    overflow: hidden;
  }
  .DailyShopping img{
    width: 100%;
    height: 100%;

  }
  .DailyShoppingBox{
    width: 100%;
    height: 260px;

  }
  .dailybox{
    width: 24.5%;
    margin-right:0.5% ;
    margin-bottom: 0.5%;
    background: #fff;
    float: left;
    text-align: center;
  }
  .dailybox img{
    width: 70%;
    margin-bottom: 5px;
  }
  .dailybox h3{
    display: inline-block;
    background-image:-webkit-linear-gradient(left,rgb(255, 118, 92),rgb(255, 35, 179));
    -webkit-background-clip: text;
    color:transparent;
    font-weight:500;
    line-height: 25px;
  }
  .dailybox p{
    font-size: 13px;
    color: rgba(7,5,29,1);
    margin-bottom: 5px;
  }
  .live{
    height:400px;
  }
  .liveBoxA{
    width: 49%;
    background: #fff;
    padding: 10px;
    float: left;
    margin-right: 0.7%;
    margin-bottom: 0.7%;
    color: rgba(0,0,0,0.73);
    box-sizing: border-box;
  }

  .liveBoxA img{
    width: 50%;
    float: left;
  }
  .liveBoxA h4{
    font-size: 17px;
    font-weight:500;
  }
  .liveBoxA p{
    color: #FF6969;
    font-size: 13px;
    margin-bottom: 7px;
  }
  .liveBoxB{
    float: left;
    width: 24.3%;
    background: #fff;
    margin-right: 0.7%;
    margin-bottom: 0.7%;
    text-align: center;
    padding-left: 10px;
    box-sizing: border-box;
  }
  .liveBoxB img{
    width: 80%;
  }
  .liveBoxB h4{
    color: rgba(0,0,0,0.73);
    font-size: 17px;
    font-weight:500;
    text-align: left;
  }
  .liveBoxB p{
    color: #FF6969;
    font-size: 13px;
    margin-bottom: 7px;
    text-align: left;
  }
  .mall{
    height:550px ;
  }
  .rec{
    height: 480px;
  }
  .recBoxB{
    padding: 10px;
  }
  .recBoxB img{
    width: 100%;
    padding-bottom:4px ;
  }
  .recBoxB h4{
    font-size: 17px;
    font-weight:500;
  }
  .recBoxB p{
    line-height: 20px;
  }

  .forYou{
    width: 100%;
    text-align: center;
    line-height: 50px;
  }
  .forRecommend{
    color: #848689;
    font-size: 15px;
  }
  .forLeft,.forRight{
    display: inline-block;
    width: 36%;
    height: 1px;
    background: #c1c1c1;
    float: left;
    margin-top: 25px;
    margin-left: 5px;
  }
  .forRight{
    float: right;
    margin-right: 5px;
  }
  .denglu{
    margin-bottom: 20px;
    text-align: center;
  }
  .denglu a{
    color: #F23030;
    font-size: 16px;
  }

  .exclusiveBox{
    width: 49.1%;
    height: 310px;
    background: #fff;
    float: left;
    margin-right: 0.7%;
    margin-bottom: 0.7%;
    font-size: 14px;
    padding: 5px;
    box-sizing: border-box;
  }
  .exclusiveBox img{
    width: 100%;
  }
  .exclusiveBox a{
    color: #232326;
  }
  .exclusiveBox div{
    width: 100%;
    height: 13%;
    line-height:20px;
  }
  .exclusiveBox .excBox2{
    color: #F23030;
    font-size: 17px;
    height:30px;
  }
  .exclusiveBox .excDiv{

  }
  .excDiv span{
    font-size: 9px;
    color: lightgray;
  }
  .exclusiveBox .excBox3{
    float: right;
    width: 55px;
    height: 25px;
    border: 1px solid #c1c1c1;
    text-align: center;
    margin-right: 5px;
    line-height: 25px;
    color: #cacaca;
  }

  .load{
    width: 100%;
    height: 40px;
    text-align: center;
    overflow: hidden;
    line-height: 30px;
    border-top: 1px solid #cacaca;

  }
  .load div{
    color: #686868;
    font-size: 17px;
    width: 150px;
    height: 40px;
    line-height: 40px;
    border-radius: 5px;
    margin: 0 auto;
  }
  .baseBox{
    overflow: hidden;
    margin-bottom: 50px;
    width: 100%;
    height:170px;
    background: #fff;
  }
  .base1{
    border-bottom: 1px solid #cacaca;
    height: 50px;
  }
  .base1 a{
    display: block;
    float: left;
    width: 24%;
    height:18px;
    margin-top: 15px;
    text-align: center;
    border-right:1px solid #ccc ;
    line-height: 18px;
    font-size: 15px;
    color: #848689;
    font-weight: normal;

  }
  .base1 a:last-child{
    border: none;
  }
  .base2{
    border-bottom: 1px solid #cacaca;
    height: 90px;
    width: 100%;
  }
  .base2 a{
    display: block;
    float: left;
    width: 33%;
    text-align: center;
    margin-top: 5px;
    color: #797979;
  }
  .base2 a span{
    font-size: 40px;
  }
  .base3 a{
    display: block;
    width: 100%;
    color: #797979;
    font-size: 13px;
    text-align: center;
  }
</style>

