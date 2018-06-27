<template>
  <div>
    <my-header>注册</my-header>
    <div class="iconfont icon-zuojiantou fh" @click="Fh"></div>
    <div class="div">
      <div class="logo iconfont icon-jingdong"> </div>
      <div class="title ju">
        <h3> 注册成为会员</h3>
        <p>欢迎来到我们的世界，带给你全新的感受</p>
      </div>
      <div class="import ju">

        <input type="text" placeholder="请输入账号" v-model="zh" @blur="Re()" @click="cz()">
        <p class="pd" v-if="isshow2"> 账号太受欢迎了</p>
        <input type="password" placeholder="请输入密码" v-model="m1">
        <input type="password" placeholder="请再次输入密码" v-model="m2" @blur="Pd()">
        <p class="pd" v-if="isshow">两次密码不一致</p>
        <input class="zhuche" type="button" value="注册" @click="Reg(zh,m1)" disabled="true"
               ref="zc">
        <p>注册成为会员，享受我们真诚的服务</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Tab from "./Tab";
  import MyHeader from "../base/MyHeader";
  import {register,Reqeat} from "../api/getData";

  export default {
    name: "Enroll",
    components: {MyHeader, Tab},
    data(){
      return{
        isshow:false,
        isshow2:false,
        zh:'',
        m1:'',
        m2:''
      }
    },
    methods:{
      Reg:function(){
        register(this.zh,this.m1).then(res =>{
          if (res.data.statue===1){
            this.$router.push({path:'/enter',query:{zh:this.zh}});
          }
        }).catch(error =>{
          console.log(error);
        });
      },
      Pd(){
        // let a=/^[a-zA-Z]\{}/
        if (this.zh!==''&&this.m1===this.m2&&this.m1!==''){
          console.log('run');
          this.$refs.zc.disabled=false;
        }else if (this.m1!==''&&this.m1!==this.m2){
          console.log(this.m1);
          this.isshow=true;
        }
      },
      Re(){
        Reqeat(this.zh).then(res=>{
            if (res.data.statue===0&&this.zh!==''){
              this.isshow2=true;
            }
          }
        ).catch(error =>{
          console.log(error);
        });
      },
      Fh(){
        this.$router.push({path:'/enter'});
      },
      cz(){
        this.isshow2=false;
      }
    }
  }
</script>

<style scoped>
  .fh{ width: 20px; height:44px; font-size: 25px; position: absolute; left: 8px; top:8px;}
  .div{ background-image:url("../assets/timg.jpg"); padding-top: 40px; background-size: 100%;}
  .ju{ width: 90%; margin: 0 5%;}
  .logo{ width: 100px;height: 40px; color: red; position: absolute; left: 50%;
    top:40px; margin-left: -50px; font-size: 55px;}
  .title{ height:80px; background:#fff; text-align: center;}
  .title h3 { font-size: 22px;  height:45px; line-height: 45px; }
  .title p{ height: 25px; font-size: 14px; color: #888;}
  .import{ background: #fff; margin-top: 20px; height:300px;}
  .import input{ display: inline-block; width: 80%; height: 40px; border: none;
    border-bottom: 1px solid #999; margin-top: 10px; font-size: 14px;}
  .import p{ height: 20px; font-size: 16px; color: #333;}
  .zhuche{ font-size: 20px; background: red;color: #fff;}
  .import .pd{height: 20px; font-size: 12px; color:red;}
</style>
