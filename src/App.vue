<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
  *{
    padding: 0px;
    margin: 0px;
  }
  a{
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  button,input{
    -webkit-appearance: none;
  }
  html,body,#app{
    width: 100%;
  }
</style>
