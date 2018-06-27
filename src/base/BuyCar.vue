<template>
  <div class="box">
    <div class="left">
      <div><i class="iconfont icon-lingdang"></i><span>卖家</span></div>
      <div><i class="iconfont icon-dianpu"></i><span>进店</span></div>
      <div @click="Run(datas)" style="position: relative"><i class="iconfont icon-03"></i><span>购物车</span>
        <span v-if="ok" style="position: absolute;display: block; min-width: 12px;height: 14px; border-radius: 50%; font-size:10px;text-align: center;line-height: 12px; background: #e4393c; color: white; right: 3px;top: 3px">{{n}}</span></div>
    </div>
    <div class="right">
      <div style="background: #ff9600" @click="addCar(msg,price)">加入购物车</div>
      <div style="background: #e4393c">立即购买</div>
    </div>
  </div>
</template>

<script>
  import {addFollow,addBuy,ready} from "../api/getData";

  export default {
    name: "BuyCar",
    data(){
      return {datas:[],
        ok:false,
        n:1
      }
    },
    props:['msg','price'],
    methods:{
      addCar(n,price){
        addFollow(n,price)
        addBuy().then(res=>{
          this.datas=res.data
        }).catch(err=>{console.log('服务器繁忙')})
        // console.log(this.price)
        this.ok=true
        this.n=this.price
      },
      Run(some){
        this.$router.push({name:'buy',params:{ids:some}});
      }
    },
    created(){
      ready(this.msg).then(res=>{
        if(res.data.msg){
          this.ok=true;
          this.n=res.data.msg
        }
      }).catch()
    }
  }
</script>

<style scoped>
  i{ font-size: 20px;margin-top: 5px;margin-bottom: 2px}
  .box{ display: flex;position: fixed;bottom: 0;left: 0;width: 100%;height: 50px;background: white}
  .left{display: flex;flex: 1;}
  .left div{ display: flex; flex: 1; flex-direction: column;align-items: center;}
  .left div span{font-size: 10px;color: #666}
  .right{display: flex;color: white;flex: 1}
  .right div{ text-align: center;height: 50px;line-height: 50px; flex: 1;font-size: 14px}
</style>
