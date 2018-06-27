<template>
  <ul><div><router-link  v-for="m in msg" :to="m.to" @click="get(m.id)">{{m.title}}</router-link></div></ul>
</template>

<script>
  import {getNav} from "../api/getData";

  export default {
    name: "LeftNav",
    data(){
      return {msg:[]}
    },
    methods:{
      getLeftNav(){
        getNav().then(res=>{
          this.msg=res.data
        }).catch(err=>{
          console.log('服务器繁忙'+err)
        })
      },
    },
    created(){
      this.getLeftNav()
    }
  }
</script>

<style scoped>
  .router-link-active{ color: red;background: white}
  ul{width: 25%;background: #f8f8f8; display: inline-block;float: left;box-sizing: border-box;border-right:1px solid #f0f0f0}
  ul a{ line-height: 46px;height: 46px; display: block; text-align: center;font-size: 14px;color: #333}
</style>
