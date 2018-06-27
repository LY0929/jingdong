<template>
  <div class="container">
    <div v-if="is"style="clear: both">
      <h4>浏览足迹 <span @click="alt" style="float: right;color: #848689; font-size: 12px; line-height:14px;font-weight: normal">清空</span></h4>
      <div v-for="img in images" class="minbox" @click="add(img.id,img.isclick)">
        <img :src="img.src" alt="">
        <p>{{img.title}}</p>
      </div>
    </div>
    <div style="clear: both">
      <h4>热门分类</h4>
      <div v-for="img in imgs" class="minbox" @click="add(img.id,img.isclick)">
        <img :src="img.src" alt="">
        <p>{{img.title}}</p>
      </div>
      <h4>家电热搜</h4>
      <div v-for="img in imgs1" class="minbox"  @click="add(img.id,img.isclick)">
        <img :src="img.src" alt="">
        <p>{{img.title}}</p>
      </div>
      <h4>热卖手机</h4>
      <div v-for="img in imgs2"  class="minbox" @click="add(img.id,img.isclick)">
        <img :src="img.src" alt="">
        <p>{{img.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {getHotImg,getHotImg1,getHotImg2,getFan,getOld,clearOld} from "../api/getData";

  export default {
    name: "One",
    data(){
      return{
        imgs:[],
        imgs1:[],
        imgs2:[],
        images:[],
        is:false
      }
    },
    methods:{
      alt(){
        if(confirm('确定删除')){
          clearOld();
          this.old()
        }
      },
      get(){
        getHotImg().then(res=>{
          this.imgs=res.data
        }).catch(err=>{console.log('服务器繁忙'+err)})
        getHotImg1().then(res=>{
          this.imgs1=res.data
        }).catch(err=>{console.log('服务器繁忙'+err)})
        getHotImg2().then(res=>{
          this.imgs2=res.data
        }).catch(err=>{console.log('服务器繁忙'+err)})
      },
      add(num,isclick){
        getFan(num,isclick)
        this.old()
        this.$router.push({ name: 'detail',query:{ClassId:num}})
      },
      old(){
        getOld().then(res=>{
          this.images=res.data
          this.images=this.images.splice(0,res.data.length-1)
          this.is=res.data[res.data.length-1].msg
          console.log(res.data[res.data.length-1].msg)
        }).catch(err=>{console.log('服务器繁忙')})
      }
    },
    created(){
      this.get();
      this.old()
    }
  }
</script>

<style scoped>
  .container{ width: 75%;display: block;float: left; box-sizing: border-box;padding: 7px 10px 0px;margin-bottom: 50px}
  .container h4{ font-weight: 700;font-size: 14px}
  .container img{ width: 80%}
  .minbox{ width: 33.3%;float: left;text-align: center}
  .minbox p{ height: 35px; font-size: 12px;margin-top: 2px;letter-spacing: 2px}
</style>

