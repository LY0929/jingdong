<template>

    <div class="bj">
      <swiper :options="swiperOption" class="dj">
        <swiper-slide class="lun jd-img1"><input  class="bk1" type="button" @click="Sy" value="跳过"></swiper-slide>
        <swiper-slide class="lun jd-img2" ><input class="bk2" type="button" @click="Sy" value="跳过"></swiper-slide>
        <swiper-slide class="lun jd-img3" ><input class="bk3" type="button" @click="Sy" value="跳过"></swiper-slide>
        <swiper-slide class="lun jd-img4" ><div class="kq" @click="Sy">立即开启</div></swiper-slide>
      </swiper>
    </div>

</template>

<script>
  export default {
    name: "Welcome",
    data(){
      return{
        swiperOption:{

        }
      }
    },
    methods:{
      Sy(){
        this.$router.push({name:'home'});
      }
    }
  }
</script>

<style scoped>
  body,html{ width: 100%; height: 100%;}
  .bj{ width: 100%; height: 100%;  position: absolute;z-index: 1000;}
  .lun{ width: 100%; height: 100%; background: #ccc;}
  .lun input { border: none; position: absolute;top: 8px; right: 10px; font-size: 16px; color: #888;
    display: inline-block; width: 50px; height: 30px;}
  .bk1{background:#ff6422;}
  .bk2{background:#35b8f0;}
  .bk3{background:#67dd33;}
  .bk4{background:#f13e51;}
  .jd-img1{ background-image: url("../assets/jd-img1.jpg"); background-size: 100% 100%;}
  .jd-img2{ background-image: url("../assets/jd-img2.jpg"); background-size: 100% 100%;}
  .jd-img3{ background-image: url("../assets/jd-img3.jpg"); background-size: 100% 100%;}
  .jd-img4{ background-image: url("../assets/jd-img4.jpg"); background-size: 100% 100%;}
  .kq{ width: 70%; height: 60px; border: 1px solid #fff; border-radius: 5px;position:absolute;
    left:0px; bottom:76px; margin-left:15%; line-height: 60px;font-size: 20px; color: #fff;
    text-align: center;
  }
  .swiper-container{
    width: 100%;
    height: 100%;
  }
</style>
