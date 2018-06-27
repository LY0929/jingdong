<template>
  <div class="#aa">
    <my-header><div class="top">我的京东</div></my-header>
    <div class="iconfont icon-zuojiantou fh" @click="Fh"></div>
    <div class="my">
      <div class="manage"><i  class=" iconfont icon-shezhi"></i><span>账号管理</span></div>
      <div class="detail">
        <img :src="jd.head">
        <p>id:{{jd.jd_Id}}</p> <p>用户名:{{jd.account}}</p>
        <span class="iconfont icon-ai59">注册</span>   <span class=" iconfont icon-jiantou">京享值</span>
      </div>
      <div class="renzheng">待实名认证</div>
      <div class="card"><img src=""><p class=" iconfont icon-huangguan ft8">尊贵会员</p> <p>尊享八大特权 ></p></div>
    </div>
    <div class="caozuo">
      <ul>
        <li><i class="iconfont icon-yinxingqia c_9 "></i> <p>待付款</p></li>
        <li><i class="iconfont icon-huoche c_9 "></i><p>待收货</p> </li>
        <li><i class="iconfont icon-qian c_9 "></i><p>售后</p> </li>
        <li><i class="iconfont icon-chazhaobiaodanliebiao c_8 "></i><p>全部订单</p></li>
      </ul>
    </div>
    <div class="self">
      <ul>
        <li><p class="c-3 f-16">0张</p><p class="f-14">京东卷</p></li>
        <li><p class="c-3 f-16">0元</p><p class="f-14">开通白条</p></li>
        <li><p class="c-3 f-16">0个</p><p class="f-14">京豆</p></li>
        <li><p class="c-3 f-16">0张</p><p class="f-14">礼品单</p></li>
        <li><p class="iconfont icon-qianbao c-3 f-18 "></p><p class="f-14">全部资产</p></li>
      </ul>
    </div>

    <div class="guanzhu">
      <ul>
        <li ><p class="f-18 dian">0</p><p class="f-14 ">关注的商品</p></li>
        <li><p class="f-18 dian">0</p><p class="f-14 ">关注的店铺</p></li>
        <li><p class="f-18 dian">0</p><p class="f-14 ">足迹</p></li>
      </ul>
    </div>
    <div class="wai">
      <ul>
        <li><p class="iconfont icon-icon-test f-28 dian c-f"></p><p class="ft-13">用户福利</p>
        </li>
        <li><p class="iconfont icon-huoche1 f-28 dian c-5"> </p><p class="ft-13">京东火车票</p>
        </li>
        <li><p class="iconfont icon-yuyue f-28 dian c-ff" ></p><p class="ft-13">我的预约</p>
        </li>
        <li><p class="iconfont icon-52 f-28 dian c-5"></p><p class="ft-13">应用推荐</p>
        </li>
        <li><p class="iconfont icon-yingyeting f-28 dian c-5"></p><p class="ft-13">京东通信 </p>
        </li>
        <li><p class="iconfont icon-feiji800 f-28 dian c-5"></p><p class="ft-13">京东机票</p>
        </li>
        <li><p class="iconfont icon-jiudian f-28 dian c-f"></p><p class="ft-13">京东酒店</p>
        </li>
      </ul>
    </div>
    <div class="couple"> <h4>客户服务<i class="iconfont icon-jiantou"></i></h4></div>
    <div class="couple"><h4>为您推荐</h4></div>
    <div class="tuijian">
      <ul>
        <li v-for="self in command">
          <div> <img :src="self.img"> <span>自营</span>{{self.title}} <p>{{self.price}}</p></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import MyHeader from "../base/MyHeader";
  import {Commodity} from'../api/getData';
  export default {
    name: "My",
    components: {MyHeader},
    data(){
      return{
        command:[],
        jd:{}
      }
    },created:function () {
      let jd= this.$route.query.jd;
      this.jd=jd;

      Commodity().then(res =>{
          this.command=res.data;
        }
      ).catch(error=>{
        console.log(error);
      });
    },methods:{
      /*  chancan(){
          //  let jd= this.$route.params.jd;
          // console.log(this.$route.query.jd)
        }*/  Fh(){
        // this.$router.push({name:'home'});
        this.$router.push({name:'home'});
        // alert('run')
      }


    }
  }
</script>

<style scoped>
  body,html{ width: 100%; height:100%; margin: 0px; padding: 0px;}
  div{ width: 100%;height: 100%;}
  .fh{ width: 20px; height:44px; font-size: 25px; position: absolute; left: 8px;
    top: 8px; z-index: 100;}
  .my{ width: 95%; height: 117px;  background: linear-gradient(90deg,#eb3c3c,#ff7459);
    box-shadow: 0 2px 5px rgba(255,98,98,.4); font-size: 16px;color:#fff;
    border-radius: 5px; margin: 10px 2.5% 0 2.5%; position: relative; overflow: hidden;}
  .my .manage{ width: 30%; height: 20px;float: right; color: #801f18;font-size: 14px; margin-top: 10px;}
  .my .manage i{ font-size: 16px; color: #fff; float: left;color: #801f18;}
  .my .detail{ width: 90%;height: 67px;position: absolute; left: 5%; bottom: 25px;}
  .my .detail img {width: 60px; height: 60px;float: left;}
  .my .detail p{ width:55%;height:20px;font-size: 14px;float: left; text-align: left;
    margin-left: 10%; line-height: 30px;}
  .my .detail span{ width: 20%; float: left;background: #9f3838; margin-left: 7%; font-size: 12px; margin-top: 3%;
    border-radius: 6px;}
  .renzheng{ width: 20%; height: 19px;position:absolute; left: 12px; bottom:23px;background: #752420;
    border-radius: 8px; font-size: 12px;text-align: center;}
  .card{ width: 35%; height: 40px;transform: rotate(15deg); position: absolute;
    right: -5px; bottom: 0px; font-size: 10px; color: #c1a665; background: #333;
    border: 1px solid  #c1a665;border-radius: 2px; }
  .ft8{font-size: 8px}
  .caozuo{ width: 95%; height: 72px;margin: 6% 2.5% 0 2.5%;  background: #f0f0f0}
  .caozuo ul{ width: 100%;height: 72px;}
  .caozuo ul li { width: 25%; height: 72px; text-align: center; float: left;height: 72px;position: relative;}
  .caozuo li i { text-align: center; width: 100%; height: 50px;display: inline-block;font-size: 28px;line-height: 50px; }
  .c_9{color:#dd9e58;}
  .c_8{color:#e83b3d;}
  .caozuo li p{ font-size: 14px; color:#666;}

  .self{ width: 95%; height: 72px;margin: 6% 2.5% 0 2.5%;  background: #f0f0f0}
  .self ul{ width: 100%;height: 72px;}
  .self ul li { width: 20%; height: 72px; text-align: center; float: left;height: 72px;}
  .f-16{ font-size: 16px; line-height: 25px;}
  .f-14{ font-size: 14px; color: #666; height: 25px; line-height:25px;}
  .c-3{color: #e73d3b; line-height: 25px;}
  .f-18{font-size: 18px;}

  .guanzhu{ width: 95%; height: 72px;margin:6% 2.5% 0 2.5%; background: #f0f0f0}
  .guanzhu ul{ width: 100%;height: 72px;}
  .guanzhu ul li { width:33%; height: 72px; text-align: center; float: left;height: 72px;}
  .dian { height: 40px; line-height: 40px;}

  .wai{ width: 95%; height: 141px;margin: 4% 2.5% 0 2.5%;  background: #f0f0f0}
  .wai ul{ width: 100%;height: 72px;}
  .wai ul li { width: 25%; height: 72px; text-align: center; float: left;height: 72px;position: relative;}
  .f-28{font-size: 28px;}
  .ft-13{ font-size: 13px; color: #666; }
  .c-f{ color:#ff4e4c;}
  .c-5{ color:#5e8aea;}
  .c-ff{ color:#ffac1d;}
  .couple { width: 95%; height: 40px; float: left; margin: 5% 2.5% 0 2.5%;text-align: left;
    background: #f7f7f7;}
  .couple h4{ font-size: 14px; height: 40px; line-height: 40px; }
  .couple i { float: right; font-size: 14px;}
  .tuijian{width: 95%; float: left; margin: 5% 2.5% 0 2.5%;text-align: left;
    background: #f7f7f7;height: 200px;}
  .tuijian ul { width: 100%; height: 100%; background: #fff;}
  .tuijian ul li { width:49%; height:217px; float: left;text-align: center;border: 1px solid #f7f7f7;font-size: 13px}
  .tuijian div{ width: 84%;height: 217px; margin: 0 8%;}
  .tuijian ul li img { width:90%; height: 129px;}

  .tuijian ul li  p{ width: 90%; margin: 0 5%; font-size: 16px; color:#e43e3f;text-align: left;}
  .tuijian ul li  span{ font-size: 16px; background:#e43e3f; color: #fff; }

</style>
