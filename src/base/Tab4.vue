<template>
  <div class="footer">
    <router-link to="/book/bookhome"><i class="iconfont icon-shouye1"></i><span>首页</span></router-link>
    <router-link to="/book/bookclass"><i class="iconfont icon-fenlei"></i><span>分类</span></router-link>
    <router-link to="/book/bookme"><i class="iconfont icon-shu"></i><span>书ME</span></router-link>
    <router-link to="/book/bookrank"><i class="iconfont icon-paixingbang"></i><span>排行榜</span></router-link>
    <router-link to="/book/meber"><i class="iconfont icon-xunzhang"></i><span>会员勋章</span></router-link>
  </div>
</template>
<script>

  export default {
    name: "Tab4"
  }
</script>

<style scoped>
  .footer{position: fixed;bottom: 0px;display: flex;width: 100%;height:50px;background:white;z-index: 1;background: #BFA785;}
  a{display: flex;flex: 1;align-items: center;flex-direction: column;justify-content: center;
    font-size:14px;color:#666;text-decoration: none;margin-left:-15px}
  i{font-size:24px}
  .router-link-active{color:#fff;}

</style>
