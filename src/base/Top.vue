<template>
  <div class="box">
    <div style="width: 40px;height: 45px; z-index: 999; text-align: center;line-height: 45px"><i @click="back" class="iconfont icon-fanhui123"></i></div>
    <slot></slot>
    <div style="width: 58px; z-index:999;height: 45px;text-align: center;line-height: 45px; "><i class="iconfont icon-xuanxiang123"></i></div>
  </div>
</template>

<script>
  export default {
    name: "Top",
    methods:{
      back(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .box{ display: flex;height:45px; z-index:999;line-height: 45px;width: 100%;background: white;position: fixed;top: 0px;left: 0px }
  .icon-fanhui123{ font-size: 20px}
  .icon-xuanxiang123{ font-size: 30px; color:#666;text-align: center;margin-top: 18px; position: fixed;right: 10px;top: -20px}
</style>
