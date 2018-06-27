<template>
  <div class="head">
    <b class="iconfont icon-fanhui"  @click="goBack"></b>
    <i class=" iconfont icon-dian1 one"></i>
    <div>
      <ul>
        <li class="li"><i class="iconfont icon-shangpin1"></i>商品</li>
        <li>评价</li>
        <li>详情</li>
        <li>推荐</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailHead",

    methods:{
      goBack(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .head{width: 100%;height:40px;line-height:40px;text-align: center;
    background: white;color:#333;border-bottom: 1px solid #ccc}
  .head div{width: 50%;text-align: center;margin: 0 auto;}
  .head div ul li{float: left;font-size: 12px;margin: 0px 5px}
  .head b{float: left;margin-top: 2px;font-weight: bold;color:#888}
  .head .one{float:right;margin-right:15px;font-weight: bold;color:#888;font-size: 24px}
  .li {color: red}
</style>
