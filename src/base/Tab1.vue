<template>
  <div class="footer">
    <router-link to="/lhome"><i class="iconfont icon-shouye"></i>主页</router-link>
    <router-link to="/women"><i class="iconfont icon-nvren01"></i>女人街</router-link>
    <router-link to="/man"><i class="iconfont icon-nanren"></i>男人帮</router-link>
    <router-link to="/classify"><i class="iconfont icon-leimupinleifenleileibie"></i>分类</router-link>

  </div>
</template>
<script>

  export default {
    name: "Tab1"
  }
</script>

<style scoped>
  .footer{position: fixed;bottom: 0px;display: flex;width: 100%;height:50px;background:white;z-index: 1}
  a{display: flex;flex: 1;align-items: center;flex-direction: column;justify-content: center;font-size: 12px;color:#666;text-decoration: none}

  .router-link-active{color:red;}

</style>
