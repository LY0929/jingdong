<template>
  <div>
    <my-header2 :back="true">
      <div>发现</div>
    </my-header2>
    <div class="content">
      <div v-for="(book,index) in Tasty1" class="one">
        <img :src="book.img">
      </div>
      <div v-for="(book,index) in Tasty11" class="two">
        <img :src="book.img">
      </div>
      <ul>
        <router-link v-for="(book,index) in Tasty2" tag="li" :to="{name:'detail',params:{bid:book.bookId}}">
          <div>
            <img :src="book.img">
            <p>{{book.bookSum}}</p>
            <p>￥{{book.price}}<span>￥{{book.price1}}</span></p>
          </div>

        </router-link>
      </ul>
      <div class="box">
        <img src="https://m.360buyimg.com/babel/jfs/t10807/308/2046455886/18375/6b59cdf7/59ed6d20Nd9219fe6.png">
        <ul>
          <router-link v-for="(book,index) in Tasty3" tag="li" :to="{name:'detail',params:{bid:book.bookId}}">
            <img :src="book.img">
          </router-link>
        </ul>
      </div>
      <div v-for="(book,index) in Tasty4"  class="box1">
        <img :src="book.img">
        <ul class="box2">
          <router-link v-for="(book,index) in Tasty5" tag="li"  :to="{name:'detail',params:{bid:book.bookId}}">
            <img :src="book.img">
            <div @click.stop="delBook(book.bookId)">{{book.bookK}}</div>
          </router-link>
        </ul>
      </div>
      <div class="box_bottom">更多推荐>></div>
    </div>
  </div>

</template>

<script>
  import MyHeader2 from '../base/MyHeader2'
  import {getSlides1,delBook} from "../api/getData"
  import {getTasty5,getTasty4,getTasty3,getTasty2,getTasty1,getTasty11} from '../api/getData'
  export default {
    name: "Tasty",
    components:{MyHeader2},
    data(){
      return{
        Tasty1:[],
        Tasty11:[],
        Tasty2:[],
        slides:[],
        Tasty3:[],
        Tasty4:[],
        Tasty5:[],
      }
    },
    created:function(){
      getSlides1().then(res=>{
        this.slides=res.data;
      }).catch(err=>{
        console.log(err);
      });
      getTasty1().then(res=>{
        console.log(res.data);
        this.Tasty1=res.data;
        console.log(this.Tasty1)
      }).catch(err=>{
        console.log(err);
      });
      getTasty11().then(res=>{
        console.log(res.data);
        this.Tasty11=res.data;
        console.log(this.Tasty11)
      }).catch(err=>{
        console.log(err);
      });
      getTasty2().then(res=>{
        console.log(res.data);
        this.Tasty2=res.data;
        console.log(this.Tasty2)
      }).catch(err=>{
        console.log(err);
      });
      getTasty3().then(res=>{
        console.log(res.data);
        this.Tasty3=res.data;
        console.log(this.Tasty3)
      }).catch(err=>{
        console.log(err);
      });
      getTasty4().then(res=>{
        console.log(res.data);
        this.Tasty4=res.data;
        console.log(this.Tasty4)
      }).catch(err=>{
        console.log(err);
      });
      getTasty5().then(res=>{
        console.log(res.data);
        this.Tasty5=res.data;
        console.log(this.Tasty5)
      }).catch(err=>{
        console.log(err);
      });
    },
    methods:{
      getData(){
        getTasty5().then(res=>{
          this.Tasty5=res.data;
          console.log(res.data);
        }).catch(error=>{
          console.log(error);
        });
      },
      delBook(id){
        //删除书籍
        delBook(id).then(res=>{
          this.Tasty5=res.data;
          console.log(this.Tasty5);
        }).catch(error=>{
          console.log(error);
        });
      },

    }
  }
</script>

<style scoped>
  .content{width:100%;margin:0px auto;overflow: hidden}
  .content .one{width:100%; border-bottom: 1px solid #f1f1f1; background-color: #fff;}
  .content .one img{width: 100%;}
  .content .two{width:100%; border-bottom: 1px solid #f1f1f1; background-color: #fff;margin-top:-1px;}
  .content .two img{width: 100%;}
  .content ul{width: 100%;height:230px;margin:0px auto; background-color:#f1f1f1}
  .content ul li img{width:100%;float: left; margin:10px 0px; height: 100px;margin-right: 2%}
  .content ul li{width:31%;float: left; margin:10px 0px; height: 200px;margin:4px 3px;font-size: 13px;text-align: justify;border-radius: 2px; padding-left:1px; background-color: #fff}
  .content ul li div p{width:100%; height: 50px; line-height: 25px; overflow: hidden;}
  .content ul li div p span{font-size:12px; color: #999; text-decoration:line-through;}

  .content .box{width: 100%; height:445px; background-color:#fff;}
  .content .box img{width: 100%; height: auto;margin: 0px auto;}
  .content .box ul{width: 98%; margin: 0px auto;background-color: #fff;overflow: hidden}
  .content .box ul li{width:23%;height:120px;float: left;box-sizing: border-box}
  .content .box ul li img{width: 100%;}

  .content .box1{width: 100%; height:auto; margin-top:5%;}
  .content .box1 img{width: 100%; height: auto;margin: 0px auto;}
  .content .box1 ul li{width: 100%;height: 120px;}
  .content .box1 ul li div{border-radius: 50%;width:20px; height: 20px; position: absolute; top:9%; right:4%; z-index:999; opacity: 0.65; border: 1px solid #666;text-align: center}
  .content .box2 li{ position: relative}
  .content .box2 img{display: block}
  .content .box_bottom{ width: 200px; height: 60px;line-height: 60px;margin:0px auto; text-align:center;letter-spacing: 1px; font-size:14px; color: #999;}
</style>
