import axios from 'axios'
//配置基础路径
axios.defaults.baseURL='http://localhost:10086'



//首页接口

//1.轮播图接口
let getCarousel=()=>{
  return axios.get('/getCarousel')
};

//2.活动展示图
let getActivity=()=>{
  return axios.get('/getActivity')
};

//3.首页分页入口图标
let getPaging=()=>{
  return axios.get('/getPaging')
};

//4.京东秒杀
let getSecondsKill=()=>{
  return axios.get('/getSecondsKill')
};

//5.每日逛 买买买
let getDailyShopping=()=>{
  return axios.get('/getDailyShopping')
};

//6.爱生活
let getLoveLiveA=()=>{
  return axios.get('/getLoveLiveA')
};
let getLoveLiveB=()=>{
  return axios.get('/getLoveLiveB')
};
//7.逛商场
let getShoppingMallA=()=>{
  return axios.get('/getShoppingMallA')
};
let getShoppingMallB=()=>{
  return axios.get('/getShoppingMallB')
};
//8.特色推荐
let getRecommendA=()=>{
  return axios.get('/getRecommendA')
};
let getRecommendB=()=>{
  return axios.get('/getRecommendB')
};
//9.专属推荐
let getExclusiveSize=(offset)=>{
  return axios.get('/getExclusive?offset='+offset)
};







//分类接口

function getHotImg(){
  return axios.get('/getHotImg')
}
function getHotImg1(){
  return axios.get('/getHotImg1')
}
function getHotImg2(){
  return axios.get('/getHotImg2')
}

function getNav(){
  return axios.get('/getNav')
}

function getFan(num,isclick) {
  return axios.get('/getIsclick?num='+num+'&isclick='+isclick)
}

function getOld() {
  return axios.get('/getOld')
}

function clearOld() {
  return axios.get('/clearOld')
}

//获取一类的商品的后台
function getClass(num) {
  return axios.get('/getSomeClass?id='+num)
}

//传递数据获取详细的页面
function getDetail(num) {
  return axios.get('/getMany?id='+num)
}

//加入购物车
function addFollow(number,num) {
  return axios.get('/addCar?id='+number+'&num='+num)
}

//通过判断条件添加购物车
function addBuy() {
  return axios.get('/foundTrue')
}

//修改购物车的数量
function makeNum(v1,v2) {
  return axios.get('/makeNum?value1='+v1+'&value2='+v2)
}

//删除购物车
function delBuy(n1,n2) {
  return axios.get('/delBuy?id='+n1+'&+is'+n2)
}

//编辑购物车
function changeBuy(nm) {
  return axios.get('/changBuy?id='+nm)
}

function again() {
  return axios.get('/getstart')
}

function ready(i) {
  return axios.get('/getready?id='+i)
}





//首页分页接口
let getWater=()=>{
  return axios.get('/getWater')
};
let getPhone=()=>{
  return axios.get('/getPhone')
};
let getCheck=()=>{
  return axios.get('/getCheck')
};

//2.获取详情
let getWaterById=id=>{
  return axios.get('/getWaterById?id='+id)
};
let getPhoneById=id=>{
  return axios.get('/getPhoneById?id='+id)
};
let getCheckById=id=>{
  return axios.get('/getCheckById?id='+id)
};
//3.关注/取消关注
let setCollect=(id,isCollected)=>{
  return axios.get('/collect?id='+id+'&isCollected='+isCollected)
};


//1.获取活动榜数据
let getCross=()=>{
  return axios.get('/getCross')
};

//1.获取轮播图
let getSlides=()=>{
  return  axios.get('/getslides')
};
//.2
let getClothes=()=>{
  return axios.get('/getclothes')
};




//登录接口
let login =(res,req)=>{
  return axios('/login?username='+res+'&pwd='+req);
};
//用户注册
let register=(zh,m1,)=>{
  return axios('/register?username='+zh+'&pwd1='+m1);
};
//商品推荐
let Commodity=()=>{
  return axios('/comm');
};
//账号是否重复
let Reqeat=(zh)=>{
  return axios('/yz?username='+zh);
};

//是否已经登录

let isenter=()=>{
  return axios('/getis')
};











//发现接口导出

//1.获取轮播图
let getSlides1=()=>{
  console.log(axios.get('/getslides'));
  return axios.get('/getslides');
};
//2.获取热门图书
let getHotBooks=()=>{
  return axios.get('/book/hot');
};
//3.获取所有图书
let getBooks=()=>{
  return axios.get('/getBooks');
};
//3.获取所有图书
let getBooks1=()=>{
  return axios.get('/getBooks1');
};
let getBooks2=()=>{
  return axios.get('/getBooks2');
};
//31.获取所有图书
let getdetail1=()=>{
  return axios.get('/getdetail1');
};

//q3.获取所有图书
let getTasty5=()=>{
  return axios.get('/getTasty5');
};
let getTasty4=()=>{
  return axios.get('/getTasty4');
};
let getTasty3=()=>{
  return axios.get('/getTasty3');
};
let getTasty2=()=>{
  return axios.get('/getTasty2');
};
let getTasty1=()=>{
  return axios.get('/getTasty1');
};
let getTasty11=()=>{
  return axios.get('/getTasty11');
};
//4.删除书籍
let delBook=id=>{
  return axios.get('/delBook?bookId='+id);
};
//5.根据ID查找书籍
let getBookById=id=>{
  return axios.get('/getBookById?bookId='+id);
};
//6.收藏 /取消收藏
let setCollect1=(id,isCollected)=>{
  return axios.get('/collect?bookId='+id+'&isCollected='+isCollected);
};
//7.获取已收藏的书籍
let getCollections=()=>{
  return axios.get('/getCollections');
};



//.3 设计师
let getDegs=()=>{
  return axios.get('/getdegs')
};
//图书

let getBooks99=()=>{
  return  axios.get('/getbooks1')
};
let getMyBook=()=>{
  return axios.get('/getmybook')
}

let getHotBooks1=()=>{
  return axios.get('/book1/hot');
}
let getMBooks=()=>{
  return axios.get('/book1/hot');
}



//导出
export {
  getExclusiveSize,getCarousel,getActivity,getPaging,
  getSecondsKill,getDailyShopping,getLoveLiveA,getLoveLiveB,
  getShoppingMallA,getShoppingMallB,getRecommendA,getRecommendB,


  getHotImg,getNav,getHotImg1,getHotImg2,getFan,getOld,clearOld,
  getClass,getDetail,addFollow,addBuy,makeNum,delBuy,changeBuy,
  again,ready,


  getWater,getWaterById,setCollect,getPhone,getPhoneById,getCheck,
  getCheckById,getCross,getSlides,getClothes,getDegs,getBooks99,
  getMyBook,getHotBooks1,getMBooks,



  login,register,Commodity,Reqeat,isenter


}

export {getSlides1,getHotBooks,getBooks,getBooks1,getBooks2,delBook,getdetail1,getBookById,setCollect1,};
export{getTasty5,getTasty4,getTasty3,getTasty2,getTasty1,getTasty11}
export{getCollections}

