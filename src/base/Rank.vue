<template>
  <div class="rank">
    <my-head0></my-head0>
    <router-view></router-view>
    <tab0></tab0>
  </div>
</template>

<script>
  import Tab0 from './Tab0'
  import MyHead0 from  './MyHead0'
  export default {
    name: "Rank",
    components: {
      Tab0,MyHead0
    }
  }
</script>

<style scoped>
  html,body,.rank{height: 100%;}
  *{padding:0;margin:0;}
  ul,li{list-style: none}
  a{text-decoration: none}
</style>
