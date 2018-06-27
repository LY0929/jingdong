<template>
  <div class="footer">
    <router-link to="/desigenr/deshome"><i class="iconfont icon-shouye000"></i><span>主页</span></router-link>
    <router-link to="/desigenr/desq"><i class="iconfont icon-d"></i><span>设计圈</span></router-link>
    <router-link to="/desigenr/jdx"><i class="iconfont icon-lianmeng999"></i><span>JDX联名</span></router-link>
  </div>
</template>
<script>

  export default {
    name: "Tab2"
  }
</script>

<style scoped>
  .footer{position: fixed;bottom: 0px;display: flex;width: 100%;height:50px;background:white;z-index: 1}
  a{display: flex;flex: 1;align-items: center;flex-direction: column;justify-content: center;font-size:14px;color:#666;text-decoration: none}
  i{font-size:24px}
  .router-link-active{color: coral;}

</style>
