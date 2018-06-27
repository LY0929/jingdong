<template>
  <div class="content">
    <detail-head></detail-head>
    <my-foot></my-foot>
    <div class="container">
      <div class="check-img">
        <img :src="check.img" alt="">
      </div>
      <div class="title">
        <p class="on"><span>京东超市</span>自营</p>
        <p class="one">{{check.title}}</p>
        <div class="img" @click="change(check.id,check.isCollected)"><i :class="[classA,classB]"></i><span>关注</span></div>
        <p class="in">部分仓库有新老包装替换，请知悉，感谢谅解！</p>
        <p class="price">￥<span>{{check.price}}</span><i>降价提醒</i></p>
        <p class="skill"><span>秒杀预告</span> 秒杀期间可享受超值价格优惠</p>
        <p class="time"><span>秒杀时间</span>2018.06.22 00:00:00-2018.06.23 00:00:00</p>
      </div>
      <div class="text">
        <p><span>白条</span>【激活白条】新用户获得百元礼包</p>
      </div>
      <div class="txt">
        <div class="div1">促销</div>
        <div class="div2">
          <p><span>满送</span>满1999元即赠热销商品，赠完即止</p>
          <p class="p1"><span>加价购</span>满2099元,即可在购物车换购热销商品</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getCheckById,setCollect} from "../api/getData";
  import MyHead0 from "../base/MyHead0";
  import Tab0 from "../base/Tab0";
  import DetailHead from "./DetailHead";
  import MyFoot from "../base/MyFoot";


  export default{
    name: "DetailCheck",
    components: {MyFoot, DetailHead, Tab0, MyHead0},
    created(){
      this.getDataById();
    },
    data(){
      return{
        check:'',
        classA:'iconfont',
        classB:'icon-guanzhu',

      };
    },
    //计算属性
    computed:{
      id(){
        return this.$route.params.bid//获取商品ID
      }
    },
    methods: {
      getDataById() {
        getCheckById(this.id).then(res => {
          this.check = res.data;
          //根据是否被关注，修改样式
          this.classB = this.id.isCollected ? 'icon-guanzhu-' : ' icon-guanzhu';
        }).catch(error => {
          console.log('服务器繁忙')
        })
      },
    },
    change(id,isColl){
      setCollect(id,!isColl).then(res=>{
        let data=res.data.msg;
        if(data=='ok'){
          this.classB=res.data.isColl?'icon-guanzhu-':'icon-guanzhu';
        }
      }).catch(error=>{
        console.log(error)
      })

    },


  }

</script>

<style scoped>
  .content{height:100%;background:white;z-index:100;font-size:15px;position: relative;top:-30px;}
  .container{width:100%;height:auto;margin:0px auto;margin-bottom: 50px}
  .container .check-img{text-align:center;border-bottom:1px solid #ccc;padding-right:24px}
  .container .title .on{width:72px;height:15px;line-height:15px;margin-top:15px;font-size:12px;color: red;border:1px solid red}
  .container .title .on span{background: red;color: white;}
  .container .title  .one{font-size:16px;margin-top: 5px;color: #333}
  .container .title {width:90%;margin: auto;border-bottom: 1px solid #ccc;}
  .container .title .img{float:right;border-left: 1px solid #ccc;padding-left: 2px}
  .container .title .in{font-size:12px;color: red;margin-top: 2px}
  .container .title .price{margin-top:10px;color: red}
  .container .title .price span{font-size: 16px;font-weight: bold}
  .container .title .price i{font-style: normal;border: 1px solid #ccc;width:60px;color:#333;font-size: 12px;
    border-radius: 2px;text-align: center;float: right}
  .container .title .skill{font-size: 12px;color: red;margin-top:5px}
  .container .title .skill span{background: red;color: white;}
  .container .title .time{font-size: 12px;margin:10px 0px}
  .container .title .time span{color: #666;padding-right:5px}
  .container .text{width:90%;margin:auto;border-bottom: 1px solid #ccc;padding: 10px 0px}
  .container .text p span{color: #666}
  .container .txt{width:90%;margin:auto;padding: 10px 0px;overflow: auto}
  .container .txt .div1{width:50px;color: #666}
  .container .txt .div2{width:85%;float: right;font-size:12px;margin-top: -25px}
  .container .txt .div2 span{color: red;margin-right: 5px;border: 1px solid red;height: 12px;line-height: 12px;font-size: 10px}
  .container .txt .div2  .p1{margin-top: 10px}
  .icon-guanzhu-{color: red}
</style>
