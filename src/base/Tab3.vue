<template>
  <div class="top">
    <router-link to="/index/find/choice">
      <i class="iconfont icon-star_full"></i><span>精选</span>
    </router-link>
    <router-link to="/index/find/shopping">
      <i class="iconfont icon-shu"></i><span>购物百科</span>
    </router-link>
    <router-link to="/index/find/tasty">
      <i class="iconfont icon-bangbangtang"></i><span>好吃的</span>
    </router-link>
    <router-link to="/index/find/Collect">
      <i class="iconfont icon-zhaoxiangji"></i><span>个人收藏</span>
    </router-link>
    <router-link to="/index/find/nice">
      <i class="iconfont icon-kouhong"></i><span>好看的</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "Tab3"
  }
</script>icon-classify9

<style scoped>
  .top{position:fixed;left:0;bottom: 0px;width: 100%;height: 50px; z-index:999;border-top: 1px solid #f0f0f0;
    display: flex;background: rgba(255,255,255,0.9);}
  a{display: flex;flex: 1;flex-direction: column;align-items: center;justify-content: center;color: #888;}
  a span{font-size: 12px;}
  .router-link-active{color:white; background:linear-gradient(red, white) }
</style>
