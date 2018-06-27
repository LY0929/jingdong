<template>
  <div id="#app">
    <my-header>京东登录</my-header>
    <div class="iconfont icon-zuojiantou fh" @click="Fh"></div>
    <div class="enter"><span class="on">账号密码登录</span><span>短信验证码登录</span></div>
    <p class="cuowu" v-if="isshow">账号或密码输入错误</p>
    <div class="zhanghao">
      <ul>
        <li>
          <span>账号</span><input class="span" type="text" placeholder="请输入账号"  v-model="names">
        </li>
        <li>
          <span>密码</span><input  class="span" type="password" placeholder="请输入密码" v-model="pwds">
        </li>
      </ul>
    </div>
    <div class="deng">
      <p class="enters" @click="logins(names,pwds)"  tag="p" >登录</p>
      <p class="enters en">一键登录</p>
    </div>
    <div class="help">
      <i class="iconfont icon-suo">忘记密码</i>
      <i class="iconfont icon-shouji" @click="dj">手机快速注册</i></div>
    <div class="else">
      <div class="two"></div>
      <div class=" tre">其他登录方式</div>
      <div class="two"></div>

    </div>
    <div class="jd">
      <div style="display: flex">
        <i class="iconfont icon-qq1 qq" style="display: flex;flex: 1;justify-items: center;align-items: center"></i>
        <i class="iconfont icon-weixin weixin" style="display: flex;flex: 1;justify-items: center;align-items: center;text-align: center"></i>
      </div>

      <p style="text-align: center">登录即代表你已同意京东隐私政策</p>

    </div>
  </div>
</template>

<script>

 import MyHeader from '../base/MyHeader';
 import {login,isenter} from "../api/getData";

  export default {
    name: "Enter",
    components: {MyHeader},
    data(){
      return{
        names:'',
        pwds:'',
        res:{},
        isshow:false,


      }
    },created(){
      let zh= this.$route.query.zh;
      this.names=zh;
     this.enters()
    }
    ,
    methods:{
      enters(){
        isenter().then(res=>{
          // console.log(res.data.dy);
          if(res.data.msg){
            this.$router.push({path:'/my',query:{jd:res.data.dy}})
          }
        }).catch()
      },
      dj(){
        this.$router.push({path:'/enroll'})
      },
      logins(names,pwds){
        login(names,pwds).then(res =>{
          this.res =res.data.jdid;
          if (res.data.statue===1){
            // window.location = 'http://localhost:8080/#/my';
            this.$router.push({path:'/my',query:{jd:res.data.jdid}});
          }else {
            this.isshow=true;
          }
        }).catch(error=>{
          console.log(error);
        });
      },
      Fh(){
        this.$router.push({name:'home'});
      }
    },

  };
</script>

<style scoped>
  body,html{ width: 100%; height:100%; margin: 0px; padding: 0px;}
  div{ width: 100%;height: 100%;}
  .fh{ width: 20px; height:44px; font-size: 25px; position: absolute; left: 8px;
    top: 8px; color:#333;}
  .enter{width: 100%; height: 44px;border-bottom: 1px solid #d7d7d7; }

  .enter span{ width: 40%; height: 44px;font-size:15px; float: left; text-align: center;line-height: 43px;
    color:#333; margin: 0 5%;}
  .enter .on{ border-bottom: 2px solid #f23030;}
  .zhanghao{ width: 90%; height:140px;margin: 0 5%; }
  .zhanghuo ul { width:100%;}
  .zhanghao ul li{ width:90%;height: 48px; margin: 0px 5%; font-size: 16px; float: left; margin-top: 5px; margin-bottom: 5px;}
  .zhanghao ul li span{ width: 30%;height: 48px; float: left; color: #333; line-height: 48px;
    border-bottom: 1px solid #d7d7d7}
  .span{ display: inline-block; width: 70%; height: 48px; border:none;outline: none;
    float: left; color:#bbb;border-bottom: 1px solid #d7d7d7; font-size: 15px;}
  .deng{ width: 90%; height: 100px; margin: 0 5%;}
  .enters{ width: 100%; height:45px;background:#eee;text-align: center; line-height: 45px; font-size: 16px;
    display:inline-block; color: #848689;}
  .en{ border: 1px solid #f23030; color: #f23030; margin-top: 10px;}

  .help{ width: 100%; height: 22px; margin-top: 30px;}
  .help i {width: 40%; height: 22px; margin: 0 5%; font-style: normal; display: inline-block; float: left;
    color: #333; font-size: 14px;}
  .two{ width:30%; height: 1px;  float: left; border-bottom: 1px solid #ccc;margin-top: 15px; margin-left:3.5%;}
  .else{ width: 100%; height: 31px;margin-top: 20%;}
  .tre{ width: 30%; height:31px; float: left; text-align: center; line-height: 30px; font-size: 16px;
    color: #bfbfbf;}
  .jd{ width: 90%; height:100px;margin: 10% 5% 0 5%;}
  .qq{ height: 50px; line-height: 50px; font-size: 30px; color: #6db5ff; margin-left: 95px;margin-top: 25px}
  .weixin{ font-size: 35px; color:#b7e4a9;margin-left: 30px;}
  .jd p{font-size: 15px; margin-top: 10px;}
  .cuowu { width: 100%; height: 20px;line-height: 20px; text-align: center; font-size: 12px; color: red;
    float: left;}
</style>

