<template>
  <div class="content">
    <div class="top">
      <router-link to="/rank/event/cross">跨品类</router-link>
      <router-link to="/rank/event/eat">食品饮料</router-link>
      <router-link to="/rank/event/snake">休闲食品</router-link>
      <i class=" iconfont icon-jiayi4quanbu"></i>
    </div>
    <router-view></router-view>

  </div>

</template>

<script>

  export default {
    name: "MyTop2",
  }
</script>



<style scoped>
  .top{width: 100%;height: 35px;line-height:35px;border-bottom: 1px solid #ccc;display: flex;text-align: center}
  a{color:#666;display: flex;width:30%;text-align: center;margin-left: 10px}
  .top i{float:right;margin-right:15px;margin-top: 2px}
  .router-link-active{font-weight:bold;color: black;}
</style>
