<template>
  <div>
    <top><div class="ti" style="display: flex;width: 100%;display: flex"><i>商品</i><i>评价</i><i>详情</i><i>推荐</i></div></top>

    <swiper :options="swiperOption">
      <swiper-slide><img :src="msg.src" alt="" style="width: 100%;display: block"></swiper-slide>
      <swiper-slide><img :src="msg.src1" alt="" style="width: 100%;display: block"></swiper-slide>
      <swiper-slide><img :src="msg.src2" alt="" style="width: 100%;display: block"></swiper-slide>
      <swiper-slide><img :src="msg.src3" alt="" style="width: 100%;display: block"></swiper-slide>
      <swiper-slide><img :src="msg.src4" alt="" style="width: 100%;display: block"></swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>


    <div style="padding: 15px 10px">
      <h1 style="font-size: 16px;font-weight: normal;position: relative"><div style="padding-right: 52px;box-sizing: border-box"><i style="height: 16px;display: inline-block;margin-right: 5px"><img :src="msg.srcz" style="height: 100%" alt=""></i>{{msg.title}}</div>
        <div style="position: absolute;right: 0px;top: 0px;font-size: 10px;display: flex; text-align:center;flex-direction: column"><i style="color: black;font-size: 18px" class="iconfont icon-shoucang"></i><span>关注</span></div>
      </h1>
      <p style="color: #e4393c;font-size: 12px;max-height: 46px;overflow: hidden">{{msg.detail}}</p>
      <!--<p>{{msg.price}}</p>-->
      <p style="font-size: 12px;color: #e4393c;margin-top: 5px">￥<span style="font-size: 18px;">{{msg.price}}</span>.00</p>
    </div>
    <div style="position: relative; border-top: 1px solid #ddd;padding-left: 30px;border-bottom: 1px solid #ddd">
      <span style="color: #999;font-size: 12px; position: absolute;left: 10px;top: 12px">白条</span> <p style="padding: 12px;font-size: 12px;color: #333;letter-spacing: 1px">【激活白条】新用户得百元礼包<span class="icon"><i class="iconfont icon-eclips-horizonal-copy"></i></span></p>
    </div >
    <div style="position: relative;padding-left: 30px;border-bottom: 1px solid #ddd" class="tre">
      <span style="color: #999;font-size: 12px; position: absolute;left: 10px;top: 14px">领劵</span><p style="padding: 12px;padding-left: 18px"><i>免邮卷</i><i>满105减5</i><i style="background: #e4393c;color: white">新用户专享</i><span class="icon" style="right: 0;">共三张<i class="iconfont icon-eclips-horizonal-copy"></i></span></p>
    </div>
    <div style="position: relative;border-bottom: 10px solid #e8e8e8">
      <span style="color: #999;font-size: 12px; position: absolute;left: 10px;top: 14px">促销</span>
      <div style="padding: 0px 35px 0px 50px">
        <div style="padding: 10px 0px">
          <p style="font-size: 12px;color: #333;letter-spacing: 1px;margin: 5px 0px"><span style="color: #e4393c;margin-right: 8px;border: 1px solid #e4393c;border-radius: 1px">满减</span>满199减10元</p>
          <p style="font-size: 12px;color: #333;letter-spacing: 1px;margin: 5px 0px"><span style="color: #e4393c;margin-right: 8px;border: 1px solid #e4393c;border-radius: 1px">限制</span>此价格不与套装优惠同时享受</p>
          <span class="icon"><i class="iconfont icon-eclips-horizonal-copy"></i></span>
        </div>
      </div>
    </div>
    <div class="num">
      <i style="position: absolute;left: 10px;top: 15px">数量：</i><span @click="sub">-</span><input type="text" @keyup="max" v-model="number" style="width: 50px;height: 30px"><span @click="add">+</span>
    </div>
    <!--向子组件传递数据-->
    <buy-car :msg="num" :price="number"></buy-car>
  </div>

</template>

<script>
  import {getDetail} from "../api/getData";
  import BuyCar from './BuyCar'
  import Top from './Top'
  export default {
    name: "Bottom",
    components:{
      BuyCar,
      Top
    },
    data(){
      return {
        msg:[],
        num:this.$route.query.ids,
        number:1,
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
          },
        }
      }
    },
    methods:{
      get(n){
        getDetail(n).then(res=>{
          this.msg=res.data
        }).catch(err=>{alert('服务器繁忙')})
      },
      sub(){
        if(this.number>1){
          this.number--
        }
      },
      max(){
        if(this.number>200){
          this.number=200
          alert('最多购买200个')
        }
      },
      add(){
        this.number++
        if(this.number>200){
          this.number=200
          alert('最多购买200个')
        }
      }

    },
    created(){
      this.get(this.num)
    }
  }
</script>

<style scoped>
  i{ font-style: normal}
  .num{font-size: 12px; margin-bottom: 50px; color: #999; position:relative;line-height: 20px;padding-top: 10px;padding-left: 50px}
  .num span{ width: 30px;height: 30px;display: inline-block;line-height: 30px;text-align: center;font-size: 30px;border: 1px solid #ccc}
  .num input{border: none;position:relative; top:-8px;border: 1px solid #ccc;border-left: none;border-right: none;text-align: center}
  .tre i{color: #e4393c; padding: 0px 5px; border-radius: 1px; border:1px solid #e4393c;font-size: 10px;margin-right: 5px;letter-spacing: 1px}
  .icon .iconfont{ border: none;font-size: 30px;color: #333}
  .icon {position: absolute;right: 0; top: 0;right: 10px;font-size: 12px;letter-spacing: 1px;color: #999}
  .ti{ display: flex}
  .ti i{display: flex;flex: 1; align-items: center;flex-direction: column}
  .swiper-slide{margin-top: 45px}
  .swiper-slide-active{margin-top: 45px}
  .swiper-pagination-bullet-active{background: #e4393c}
</style>
