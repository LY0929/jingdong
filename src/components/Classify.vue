<template>
  <div class="classify">

    <LeftNav/>
    <router-view></router-view>
  </div>
</template>

<script>
  import LeftNav from './LeftNav'
  import {getNav,getHotImg} from "../api/getData";
  // import Detail from '../base/Detail'
  export default {
    name: "Classify",
    components:{
      // Detail,
      LeftNav
    },
    data(){
      return {
        msg:[],
        imgs:[]
      }
    },
    methods:{
      getLeftNav(){
        getNav().then(res=>{
          this.msg=res.data
        }).catch(err=>{
          console.log('服务器繁忙'+err)
        })
      },
      get(){
        getHotImg().then(res=>{
          this.imgs=res.data
        }).catch(err=>{console.log('服务器繁忙'+err)})
      }
    },
    created(){
      this.getLeftNav()
    }
  }
</script>

<style scoped>
  ul{width: 25%;background: #f8f8f8; display: inline-block;float: left}
  ul a{ line-height: 46px;height: 46px; display: block; text-align: center;font-size: 14px;color: #333}
  .router-link-active{ color: red}

</style>

