<template>
  <div>
    <my-header2 :back="true">
      <div>发现</div>
    </my-header2>
    <div class="boxx">
      <Swiper ref="swiper" v-if="list.length > 0" :autoPlay='true' :showIndicator='true' interval="2500" duration="500">
        <Slide @click="clickMe" v-for="(tag,key) in list" :key="key">
          <img :src="tag.img" />
        </Slide>
      </Swiper>
    </div>
  </div>

</template>

<script>
  import MyHeader2 from '../base/MyHeader2'
  import {getBooks,delBook} from '../api/getData'
  import {getSlides} from "../api/getData";
  import { Swiper, Slide } from 'vue-swiper-component';
  export default {
    name: "Nice",
    // components:{MyHeader},
    data(){
      return{
        list: [
          { img: 'https://qiniu.epipe.cn/5456575529551388672?imageslim&imageView2/1/w/750/h/360' },
          { img: 'https://qiniu.epipe.cn/5430983074181545984?imageslim&imageView2/1/w/750/h/360' },
          { img: 'https://qiniu.epipe.cn/5464226412548325376?imageslim&imageView2/1/w/750/h/360' }
        ],
        slides:[],
      }
    },
    components: {
      Swiper,
      Slide,
      MyHeader2
    },
    created:function(){
      getSlides().then(res=>{
        this.slides=res.data;
      }).catch(err=>{
        console.log(err);
      });
      getBooks().then(res=>{
        console.log(res.data);
        this.books=res.data;
      }).catch(err=>{
        console.log(err);
      });
    },
    methods:{
      dels(id) {
        delBook(id).then(res => {
          this.books=res.data;
        }).catch(error=>{
          console.log(error);
        })
      },
      clickMe (index){
        console.log(index)
      },
    },
    // clickMe (index){
    //   console.log(index)
    // },

  }
</script>

<style scoped>
  .content{width: 90%;margin: 10px auto;}
  .content ul li{display: flex;padding: 10px 0;border-bottom: 1px solid #f1f1f1;}
  .content ul li div{margin-left: 8px;}
  .content ul li h4{font-size: 17px;color: #333;line-height: 30px;}
  .content ul li p{color: #2a2a2a;line-height: 20px; font-size: 12px;}
  .content ul li img{width: 90px;height: 80px;}
  .content ul li h5{font-size: 15px;color: #666;}
  .content ul li h5 .del{width:40px; height: 40px; line-height: 40px; text-align: center; float: right;}

  .boxx{margin-top: 20%}
  img {width: 100%;}

</style>
