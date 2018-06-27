<template>
  <div id="des">
    <my-head2></my-head2>
    <router-view></router-view>
    <tab2></tab2>
  </div>
</template>

<script>
  import Tab2 from './Tab2'
  import MyHead2 from  './MyHead2'
  export default {
    name: "Desigenr",
    components: {
      Tab2,MyHead2
    }
  }
</script>

<style scoped>
  html,body,#des{height: 100%;}
  *{padding:0;margin:0;}
  ul,li{list-style: none}
  a{text-decoration: none}
</style>
