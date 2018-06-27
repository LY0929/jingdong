<template>
  <div>
    <top><div style="text-align: center; width:100%; border-bottom:1px solid #ddd;height: 44px;line-height: 44px;font-size: 18px;color: #333;position: fixed;top: 0px;left: 0px">购物车</div>
    </top>
    <div style="margin-top: 44px">
      <p class="p" style="line-height: 30px" v-if="i"><span @click="beforeDel">编辑商品</span></p>
      <p class="p" style="line-height: 30px" v-else><span @click="beforeDel">完成</span></p>
      <div v-for="m in msg" style="display: flex; margin-top: 10px; margin-bottom: 10px; border-bottom: 1px solid #ddd; clear:both; padding:10px 0px 10px 35px;position: relative;padding-left: 35px">
        <div><img :src="m.src" style="display: block; width: 75px;"></div>
        <div>
          <p style="font-size: 14px; padding-left:10px;font-weight: 600;color: #333;letter-spacing: 1px">{{m.title}}</p>
          <p style="font-size: 10px;color: #e4393c;position: absolute;bottom: 5px;left: 115px">￥<span style="font-size: 16px">{{m.price}}</span>.00</p>
          <div style="background:#f7f7f7;width: 110px;height: 30px" class="div"><span @click="subs(m.num,m.mid)">-</span><input type="text" v-model="m.num" @keyup="k(m.num,m.mid)" style="width: 45px;height: 30px"><span @click="adds(m.num,m.mid)">+</span></div>
        </div>
        <i :class="[iconfont,m.is?'icon-yuan':'icon-xuanzhong']" @click="makeClass(m.mid,m.is)" style="position: absolute;top: 50%;font-size: 30px;margin-top: -15px;left: 5px"></i>
      </div>
    </div>
    <div class="btm" v-if="i">
      <div @click="all" style="display: flex;flex-direction: column;color: #999;padding-left: 5px"><i :class="[iconfont,alls?'icon-yuan':'icon-xuanzhong']" style="font-size: 30px;"></i><span style="font-size: 10px; margin-top:-5px;text-align: center">全选</span></div>
      <div style="display: flex;width: 60%;;position: absolute;right: 0px;">
        <div style="flex: 1;display: flex;flex-direction: column"><span style="font-weight: 700;line-height: 25px">总结：</span><span style="color: #e4393c">￥{{money}}.00</span></div>
        <div ref="col" :class="[kiss?'gary':'red']" style="flex: 1;text-align: center;line-height: 50px;color: white">去结算({{nums}})件</div>
      </div>
    </div>


    <div class="btm" v-else>
      <div @click="all" style="display: flex;flex-direction: column;color: #999;padding-left: 5px"><i :class="[iconfont,alls?'icon-yuan':'icon-xuanzhong']" style="font-size: 30px;"></i><span style="font-size: 10px; margin-top:-5px;text-align: center">全选</span></div>
      <div style="display: flex;width: 60%;;position: absolute;right: 0px">
        <div style="flex: 1;line-height: 50px;text-align: center;color: white;background: #ff9600">移至收藏</div>
        <div ref="col" :class="[kiss?'gary':'red']" @click='del' style="flex: 1;text-align: center;line-height: 50px;color: white">删除</div>
      </div>
    </div>

  </div>
</template>

<script>
  import {addBuy,makeNum,delBuy,changeBuy,again} from "../api/getData";
  import Top from '../base/Top'
  export default {
    name: "Buy",
    components:{
      Top
    },
    data(){
      return{
        msg:this.$route.params.ids,
        money:0,
        nums:0,
        kiss:true,
        iconfont:'iconfont',
        al:false,
        alls:false,
        i:true
      }
    },
    methods:{
      k(k1,k2){
        if(k1>=1&&k1<=200){
          makeNum(k1,k2).then(res=>{}).catch()
          this.Buy()
        }
        if(k1>200){
          alert('最大购买数为200')
          let max=200;
          makeNum(max,k2)
          this.Buy()
        }
      },
      subs(s1,s2){
        if(s1>1){
          s1--
          makeNum(s1,s2).then(res=>{}).catch()
          this.Buy()
        }
      },
      adds(a1,a2){
        if(a1<200){
          a1++
          makeNum(a1,a2).then(res=>{}).catch()
          this.Buy()
        }
      },
      Buy(){
        addBuy().then(res=>{
          this.msg=res.data.msg;
          this.nums=res.data.ns
          this.money=0;
          this.msg.forEach(vals=>{
            this.money+=vals.num*vals.price
            vals.is=false;
          });
          this.show();
          console.log(this.nums);
          if(this.nums==0){
            this.alls=true
          }
        }).catch(err=>{alert('服务器繁忙'+err)})
      },
      makeClass(i,is){
        delBuy(i,is).then(res=>{
          // console.log(res.data)
          this.money=res.data.p;
          this.msg.forEach(m=>{
            if(m.mid==res.data.n){
              m.is=res.data.msg
            }
          });
          this.nums=0;
          this.msg.forEach(ms=>{
            if(!ms.is){
              this.nums++
            }
          });
          this.show()
        }).catch(err=>{console.log('服务器繁忙')});
      },
      show(){
        if(this.nums>0){
          this.kiss=false
        }else{
          this.kiss=true
        }
      },
      // all(){
      //   this.alls=!this.alls
      //   this.msg.forEach(a=>{
      //     // this.al=!this.al;
      //     a.is=this.alls
      //   })
      //   if(this.alls){
      //     this.kiss=this.alls
      //   }else{
      //     this.kiss=this.alls
      //   }
      //   addBuy().then(res=>{
      //     this.nums=res.data.ns
      //   }).catch()
      // },

      all(){
        let tf=true;
        this.msg.forEach(a=>{
          if(a.is){
            this.msg.forEach(b=>{
              this.alls=false;
              b.is=false;
              this.kiss=this.alls;
              again().then(res=>{
                this.money=res.data.p;
                console.log(res.data)
              }).catch();

              addBuy().then(res=>{
                this.nums=res.data.ns
              }).catch();

              return
            });
            tf=false;
          }
          if(tf){
            this.msg.forEach(c=>{
              this.alls=true;
              a.is=true;
              this.kiss=this.alls
            })
          }

        })

        //   this.alls=!this.alls
        //   this.msg.forEach(a=>{
        //      // this.al=!this.al;
        //     a.is=this.alls
        //   });
        // if(this.alls){
        //     this.kiss=this.alls
        // }else{
        //   this.kiss=this.alls
        // }
        // addBuy().then(res=>{
        //   this.nums=res.data.ns
        // }).catch()
      },


      beforeDel(){
        this.msg.forEach(b=>{
          b.is=true
        });
        this.alls=true
        this.i=!this.i
      },
      del(){
        if (confirm('确认删除')) {
          this.i=true;
          this.msg.forEach(de => {
            if (!de.is) {
              changeBuy(de.mid).then(res => {
                this.Buy()
              }).catch(err => {
                console.log('服务器繁忙')
              })
            }
          })
        }

      }
    },
    created(){
      this.Buy();
    },
  }
</script>

<style scoped>
  .p{height: 30px;line-height: 30px;border-bottom: 1px solid #ddd}
  .p span{ float: right; color: #e4393c;font-size: 14px;margin-right: 10px}
  .div{ position: absolute;right: 15px;bottom: 5px;}
  .div input{border: none;top:-4px; position:relative;background: #f7f7f7;text-align: center;color: #999;border: 1px solid transparent;outline: none}
  .div span{display: inline-block;width: 30px;height: 30px; text-align: center;line-height: 30px;font-size: 22px}
  .btm{height: 50px;width: 100%; background:white;position: fixed; z-index: 9999; border-top:1px solid #ddd;bottom: 0px;left: 0px;display: flex}
  .icon-xuanzhong{ color: #e4393c}
  .red{ background: #e4393c}
  .gary{ background: #ccc}
</style>
