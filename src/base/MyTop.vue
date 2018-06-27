<template>
  <div class="content">
    <div class="top">
      <router-link to="/rank/hot/water">饮用水</router-link>
      <router-link to="/rank/hot/phone">手机通讯</router-link>
      <router-link to="/rank/hot/check">厨房小店</router-link>
      <i class=" iconfont icon-jiayi4quanbu"></i>
    </div>

    <router-view></router-view>

  </div>

</template>

<script>

  export default {
    name: "MyTop",
  }
</script>



<style scoped>
  .top{width: 100%;height: 35px;line-height:35px;border-bottom: 1px solid #ccc;display: flex;text-align: center}
  a{color:#666;display: flex;width:30%;text-align: center;margin-left: 10px;text-decoration: none}
  .top i{float:right;margin-right:15px;margin-top: 2px}
  .router-link-active{font-weight:bold;color: black;}
</style>
