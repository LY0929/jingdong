<template>
    <!--<div>首页</div>-->
    <div>
      <router-view></router-view>
      <tab></tab>
    </div>
</template>

<script>
  import Tab from './Tab'
    export default {
        name: "Index",
        components:{
          Tab
        }
    }
</script>

<style scoped>

</style>
