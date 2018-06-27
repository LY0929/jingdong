<template>
  <div class="footer">
    <div class="page"><i class="iconfont icon-jimi-copy-copy"></i><span>JIMI</span></div>
    <div class="page"><i class="iconfont icon-jindianguangguang01"></i><span>进店</span></div>
    <div class="page"><i class="iconfont icon-gouwuche"></i><span>购物车</span></div>
    <div class="t on"> 加入购物车</div>
    <div class="t one">立即购买</div>
  </div>
</template>

<script>
  export default {
    name: "MyFoot"
  }
</script>

<style scoped>
  .footer{position: fixed;bottom: 0px;display: flex;width: 100%;height:45px;background:white}
  .page{display: flex;flex: 1;align-items: center;flex-direction: column;justify-content: center;color:#666;}
  .page span{font-size: 12px}
  .t{width:90px;height: 50px;line-height: 50px;text-align: center}
  .on{background: orange}
  .one{background: crimson}
</style>
