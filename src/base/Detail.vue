<template>
  <div>
    <top>
      <div style="width: 100%; position: relative; border-radius: 15px; height:30px; margin-top:8px;padding-left: 28px;box-sizing: border-box; background: #f7f7f7">
        <div style="position: absolute; z-index: 999;left: 5px;top:-8px"><i class="iconfont icon-sousuo123"></i></div>
        <input type="text" style="outline: none; color: #232326; top: -9px; position: relative; height: 26px;background: #f7f7f7;border: none" placeholder="电风扇">
      </div>
    </top>
    <div  @click="jump(m.mid)" v-for="m in msg" style="display: flex;" class="box">
      <div style="width: 30%;"><img :src="m.src" style="width: 100%;height: 100%; display: block"></div>
      <div style="width: 70%;padding: 0px 10px 10px;box-sizing: border-box">
        <p style="font-size: 14px;margin-top: 8px;color: #333;height:38px">{{m.title}}</p>
        <div style="font-size: 10px;margin-top: 3px" class="good"><span style="margin-right: 8px">{{m.good1}}</span><span>{{m.good2}}</span></div>
        <div style="color: #e93b3d;margin-top: 13px;font-size: 12px;">￥<span style="font-size: 18px">{{m.price}}</span>.00</div>
        <div style="height: 14px;line-height: 14px; ">
          <div style="height: 100%;float: left;margin-top: 5px;margin-right: 10px"><img :src="m.srcz" style="height: 100%;display: block;"></div>
          <p style="font-size: 12px; float: left;margin-top: 5px; display: inline-block; color: #999;" >{{m.say}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getClass} from "../api/getData";
  import Top from './Top'
  export default {
    name: "Detail",
    components:{
      Top
    },
    data(){
      return {
        msg:[],
        num:this.$route.query.ClassId
      }
    },
    methods:{
      jump(id){
        this.$router.push({name:'bottom',query:{ids:id}});
        // console.log(id)
      },
      getClass(num){
        getClass(num).then(res=>{
          this.msg=res.data
        }).catch()
      }
    },
    created(){
      this.getClass(this.num)
    }
  }

</script>

<style scoped>
  .box:nth-child(2){margin-top: 45px}
  .container{ width: 75%;display: inline-block;float: left}
  .box{border: 1px solid #f0f0f0 }
  .good span{ color: #999;background: #f2f2f7;border-radius: 1px}
  .icon-sousuo{ color: #333;font-size: 20px}
</style>
