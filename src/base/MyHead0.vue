<template>
  <div class="head">
    <b class="iconfont icon-fanhui"  @click="goBack"></b>
    <i class=" iconfont icon-dian1 one"></i>
    <div>排行榜</div>
  </div>
</template>

<script>
  export default {
    name: "MyHead0",

    methods:{
      goBack(){
        this.$router.push({name:'home'})
      }
    }
  }
</script>

<style scoped>
  .head{width: 100%;height:40px;line-height:40px;text-align: center;
    background: white;color:#333;border-bottom: 1px solid #ccc}
  .head div{width: 50%;text-align: center;margin: 0 auto;}
  .head b{float: left;margin-left:15px ;margin-top: 2px;font-weight: bold;color:#888}
  .head .one{float:right;margin-right:15px;font-weight: bold;color:#888;font-size: 24px}
</style>
