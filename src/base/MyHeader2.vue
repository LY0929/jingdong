<template>
  <div class="header">
    <slot></slot>
    <i class="iconfont icon-shangyiye" v-if="back" @click="goBack" ></i>
    <i class="iconfont icon-more"></i>
  </div>
</template>

<script>
  export default {
    name: "MyHeader2",
    // 返回上一页
    props:['back'],
    data(){
      return {
        // back:false
      }
    },
    methods:{
      goBack(){
        //获取当前路由
        // this.$router.go(-1);
        this.$router.push({name:'home'})
      }
    },
    // 返回上一页
  }
</script>

<style scoped>
  .header{ position:fixed; top:0px; left:0px;width: 100%;height: 44px;text-align: center;line-height: 40px; color: black; background-color: #fff;}
  .header .iconfont.icon-shangyiye{width:20%; position:fixed;left: 10px;top:2px;font-size: 18px; z-index:100}
  .header .iconfont.icon-more{ width:20%; position:fixed; right: 10px;top:2px;font-size: 18px;}
</style>
