<template>
  <div id="live">
    <my-head1></my-head1>
    <router-view></router-view>
    <tab1></tab1>
  </div>
</template>

<script>
  import Tab1 from './Tab1'
  import MyHead1 from  './MyHead1'
  export default {
    name: "Live",
    components: {
      Tab1,MyHead1
    }
  }
</script>

<style scoped>
  html,body,#live{height: 100%;}
  *{padding:0;margin:0;}
  ul,li{list-style: none}
  a{text-decoration: none}
</style>
