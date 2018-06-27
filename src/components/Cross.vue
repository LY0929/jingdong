<template>
  <div class="content">
    <ul>
      <li v-for="(cross,index) in allCross" :key="index" class="li">
        <!--文字-->
        <div class="head">
          <p><span class="one">0{{cross.id}}</span>{{cross.title}}
            <span class="two">{{cross.person}}</span></p>
        </div>
        <!--图片-->
        <div class="main">
          <ul>
            <li v-for="(img,index) in cross.obj" :key="index">
              <img :src="img.img" alt="">
            </li>
          </ul>
        </div>
        <!--文字-->
        <div class="foot">
          <ul>
            <li v-for="a in cross.sum">{{a}}</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import  {getCross} from "../api/getData";

  export default {
    name: "Cross",
    data(){
      return{
        allCross:[],
      }
    },
    created:function(){
      this.getData();

    },
    methods:{
      //向服务器发送请求，获取所有饮用水
      getData(){
        getCross().then(res=>{
          this.allCross=res.data;
        }).catch(err=>{
          console.log('服务器繁忙')
        })
      }
    },
  }
</script>

<style scoped>
  .content{width:100%;margin:0px auto;margin-bottom: 50px;}
  .content ul .li{width:100%;overflow: auto;border-bottom: 1px solid #ccc;text-align: center}
  .content .head{width:100%;height:50px;line-height:20px;}
  .content .head p{width:100%;color: red;font-weight: bold;font-size: 17px;margin-top:20px}
  .content .head p .one{float: left;font-size:24px;margin-left: 5px;border-left: 2px solid red}
  .content .head p .two{float: right;font-size:12px;color:#888;font-weight: normal;margin-right: 10px}
  .content .main img{width:90px;height:90px;}
  .content .main ul{width:100%;height: 100px;text-align: center}
  .content .main li{width:33%;height:100px;line-height: 100px;float: left}
  .content .foot{width:100%;height: 50px;line-height: 50px;text-align: center}
  .content .foot ul{width:70%;height:30px;margin: auto}
  .content .foot li{width:45px;height:20px;line-height:20px;float: left;border:1px solid #ccc;border-radius:10px;
    font-size: 12px;color: #888;margin:4px}


</style>
