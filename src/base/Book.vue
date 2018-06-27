<template>
  <div id="book">
    <my-head3></my-head3>
    <router-view></router-view>
    <tab4></tab4>

  </div>
</template>

<script>
  import MyHead3 from  './MyHead3'
  import  Tab4  from './Tab4'
  export default {
    name: "Book",
    components: {
      MyHead3,Tab4
    }
  }
</script>

<style scoped>
  html,body,#book{height: 100%;margin: 0px}
  *{padding:0;margin:0;}
  ul,li{list-style: none}
  a{text-decoration: none}
</style>
