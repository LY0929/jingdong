
let express=require('express');
let jd=express();


// 首页轮播图
let Carousel=
  [
  'https://m.360buyimg.com/mobilecms/s828x404_jfs/t19927/294/1782314233/253741/2e61e68f/5b260a25N7101a6f0.jpg!cr_1125x549_0_72!q70.jpg.dpg',
  'https://img1.360buyimg.com/da/s828x404_jfs/t24406/311/194912598/157307/fd8f9301/5b288082Nf5ac5254.jpg!cr_1125x549_0_72.dpg',
  'https://img1.360buyimg.com/da/s1280x624_jfs/t18382/316/2000777328/139342/a4451c9e/5ae29924Nb9450d63.jpg!cr_1125x549_0_72.dpg.webp',
  'https://m.360buyimg.com/mobilecms/s1280x624_jfs/t20188/33/787371598/121420/d1ae6f57/5b17c93aNfed9dc41.jpg!cr_1125x549_0_72!q70.jpg.dpg.webp',
  'https://img1.360buyimg.com/da/s1280x624_jfs/t19843/220/1856817881/192266/3914311c/5b275956Ne6e61e26.jpg!cr_1125x549_0_72.dpg.webp',
  'https://m.360buyimg.com/mobilecms/s1280x624_jfs/t21250/171/1064978522/124712/8cba20f0/5b1f6700N812c8ddf.jpg!cr_1125x549_0_72!q70.jpg.dpg.webp',
  'https://m.360buyimg.com/mobilecms/s1280x624_jfs/t23470/198/139511420/129968/a909d7b3/5b266e80Nf210d76f.jpg!cr_1125x549_0_72!q70.jpg.dpg.webp',
  'https://m.360buyimg.com/mobilecms/s828x404_jfs/t21076/37/1338936647/171092/9cd4b331/5b26151cNc2e3958a.jpg!cr_1125x549_0_72!q70.jpg.dpg'
];

// 首页618活动展示图
let Activity=['https://m.360buyimg.com/mobilecms/jfs/t21721/348/1384519107/324007/985cef54/5b28c5b4N1ba22f04.gif'];


//首页分页入口图标

let Paging=[
  {title:'京东超市',img:'https://m.360buyimg.com/mobilecms/jfs/t21739/179/1493744146/6738/951af549/5b2a15acNc52bcc51.png',to:'/jd'},
  {title:'唯品会',img:'https://m.360buyimg.com/mobilecms/jfs/t22297/125/1487252094/7729/c70dbddc/5b2a15c6N7bd8268a.png',to:'/jd'},
  {title:'京东服饰',img:'https://m.360buyimg.com/mobilecms/jfs/t20614/91/1484047184/5909/ca59f0dc/5b2a17a5Nd7e1f6c5.png',to:'/jd'},
  {title:'京东生鲜',img:'https://m.360buyimg.com/mobilecms/jfs/t24115/19/231389064/7003/37916368/5b2a1846N1fa06dba.png',to:'/jd'},
  {title:'京东到家',img:'https://m.360buyimg.com/mobilecms/jfs/t20074/98/1897039729/6395/31684dcd/5b2a1873N2146f504.png',to:'/jd'},
  {title:'充值缴费',img:'https://m.360buyimg.com/mobilecms/jfs/t22696/115/251055896/7215/2f426ed/5b2a188cNad7d9cbf.png',to:'/jd'},
  {title:'9.9元拼',img:'https://m.360buyimg.com/mobilecms/jfs/t22192/170/1433480528/7230/4e464923/5b2a18b5Nf454c539.png',to:'/jd'},
  {title:'领券',img:'https://m.360buyimg.com/mobilecms/jfs/t20506/253/1500011481/6654/54fbcdd3/5b2a18e1Nf12f9611.png',to:'/jd'},
  {title:'赚钱',img:'https://m.360buyimg.com/mobilecms/jfs/t20203/2/1469180457/5571/83300fb5/5b2a18f3N6baa15b5.png',to:'/jd'},
  {title:'全部',img:'https://m.360buyimg.com/mobilecms/jfs/t20866/22/1446848004/7191/5de74a71/5b2a1900N95f4e2f4.png',to:'/jd'}
];

//京东秒杀

let SecondsKill=[
  {img:'https://m.360buyimg.com/mobilecms/s240x240_jfs/t22435/294/240852448/167931/6aadedb3/5b2a06e7N074e0805.jpg!q70.jpg.dpg.webp',pice:'￥1000',kill:'￥1500'},
  {img:'https://m.360buyimg.com/mobilecms/s240x240_jfs/t20170/155/1432904899/195327/969cec35/5b2a0193N6d25df74.jpg!q70.jpg.dpg.webp',pice:'￥180',kill:'￥260'},
  {img:'https://m.360buyimg.com/mobilecms/s240x240_jfs/t19843/290/1188775160/171707/f4af37c7/5b173333N5be9328b.jpg!q70.jpg.dpg.webp',pice:'￥320',kill:'￥420'},
  {img:'https://m.360buyimg.com/mobilecms/s240x240_jfs/t3049/86/2413946956/420886/2a6f2297/57e159a0N6b9fbac4.jpg!q70.jpg.dpg.webp',pice:'￥150',kill:'￥230'},
  {img:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t21952/188/359200644/287418/9ec1e4f0/5b0b77f8N5c52139f.jpg!q70.jpg',pice:'￥300',kill:'￥360'},
  {img:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t17164/150/1772351283/210702/8de42a79/5ad97f02N5e28fd8e.jpg!q70.jpg',pice:'￥9.9',kill:'￥27'},
  {img:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t8560/160/1545664319/379719/b21a9fc1/59bb8668Ndb8458e7.jpg!q70.jpg',pice:'￥2866',kill:'￥3666'},
  {img:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t23242/142/258531539/203124/2633bf2e/5b2a3ec6N15693e03.jpg!q70.jpg',pice:'￥24.9',kill:'￥80'},
  {img:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t18109/266/2209684642/172554/761849f7/5ae93b28N2f91f14d.jpg!q70.jpg',pice:'￥1348.9',kill:'￥1649'},
  {img:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t24565/277/139736277/81028/15f15fde/5b2642bdN129317ed.jpg!q70.jpg',pice:'￥44.5',kill:'￥69'},
  {img:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t21952/188/359200644/287418/9ec1e4f0/5b0b77f8N5c52139f.jpg!q70.jpg',pice:'￥300',kill:'￥360'},
  {img:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t21952/188/359200644/287418/9ec1e4f0/5b0b77f8N5c52139f.jpg!q70.jpg',pice:'￥300',kill:'￥360'},
  {img:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t21952/188/359200644/287418/9ec1e4f0/5b0b77f8N5c52139f.jpg!q70.jpg',pice:'￥300',kill:'￥360'},
];

//每日逛 买买买

let DailyShopping=[
  {title:'白条商城',text:'打白条换新机',img:'https://m.360buyimg.com/n1/s220x220_jfs/t21337/101/421650423/137083/f5748df2/5b0cfc29N0dae3d71.jpg!q70.jpg.dpg.webp',to:'/dadada'},
  {title:'品牌秒杀',text:'低价抢大牌',img:'https://m.360buyimg.com/n1/s220x220_jfs/t20479/34/896529471/48396/115141e/5b1a4cc4N7c33d0fa.png!q70.jpg.dpg.webp',to:'/dadada'},
  {title:'闪购',text:'精选1元购',img:'https://m.360buyimg.com/n1/s220x220_jfs/t16837/227/1000566114/351714/d05f639b/5ab34abeN538af652.jpg!q70.jpg.dpg.webp',to:'/dadada'},
  {title:'拍拍二手',text:'iPhone 5折起',img:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t14251/339/1738489148/26244/792efe55/5a56fd12N458f4fe7.jpg!q70.jpg.dpg.webp',to:'/dadada'},
  {title:'排行榜',text:'专属购物指南',img:'https://m.360buyimg.com/n1/s220x220_jfs/t21070/181/325665345/75671/99f8164d/5b093020N8739a72a.jpg!q70.jpg.dpg.webp',to:'/rank'},
  {title:'发现好货',text:'发现品质生活',img:'https://m.360buyimg.com/n1/g15/M07/1C/15/rBEhWFKubEYIAAAAAADduLczDFwAAGz1AMrQIgAAN3Q591.jpg!q70.jpg.dpg.webp',to:'/dadada'},
  {title:'会买专辑',text:'教你买买买',img:'https://m.360buyimg.com/n1/s220x220_jfs/t3223/233/348647786/182067/c6e9f443/57b1757aNff8bda13.jpg!q70.jpg.dpg.webp',to:'/dadada'},
  {title:'新品首发',text:'爱奇艺新品',img:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t20767/199/1472814250/34574/6447244f/5b2a30efN28d066b2.jpg!q70.jpg.dpg.webp',to:'/dadada'}
];

//爱生活

let loveLiveA=[
  {title:'玩3C',text:'环球奇遇记 享多重好礼',imgA:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t21478/201/1501064013/29561/c175ead6/5b2a3b54N3b8d3ad9.jpg!q70.jpg.dpg.webp',
    imgB:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t21196/6/1392860476/62867/56c7bae8/5b27b02aNe15aafc3.png!q70.jpg.dpg.webp',to:'/biu'},
  {title:'京东家电',text:'全民消暑季 入场领400元券',imgA:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t22363/318/1484948466/11138/8317fc9b/5b2a528eN7c6bde83.jpg!q70.jpg.dpg.webp',
    imgB:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t22666/293/257815171/29274/6b5605b1/5b2a5295N5a81ad96.jpg!q70.jpg.dpg.webp',to:'/biu'},
  {title:'京东超市',text:'爆款直降',imgA:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t17770/315/693398667/78863/454152bf/5aa0a076N681f053d.jpg!q70.jpg.dpg.webp',
    imgB:'https://m.360buyimg.com/n1/s220x220_jfs/t18082/177/682706332/60026/913f5358/5aa0a088N20a1819a.jpg!q70.jpg.dpg.webp',to:'/biu'},
  {title:'爱家',text:'家居日用 部分满199减100',imgA:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t12286/264/1793197008/47743/b6607b0f/5a2a6d2aN557c463d.jpg!q70.jpg.dpg.webp',
    imgB:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t15760/54/212088516/35440/792b2ec6/5a2a6d2bNb152c875.jpg!q70.jpg.dpg.webp',to:'/biu'}
];
let loveLiveB=[
  {title:'爱宝宝',text:'爆款低至五折',img:'https://m.360buyimg.com/n1/s220x220_jfs/t17929/299/899794385/17291/d90318f9/5ab4c680N7d291625.jpg!q70.jpg.dpg.webp',to:'/biu'},
  {title:'爱美丽',text:'满199减100',img:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t12874/158/2363075855/16976/b8fa41b3/5a7ae019N0770c0c9.jpg!q70.jpg.dpg.webp',to:'/biu'},
  {title:'爱吃',text:'9.9包邮',img:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t14473/103/2042876100/41836/766c1953/5a697f47Nc952ed7f.jpg!q70.jpg.dpg.webp',to:'/biu'},
  {title:'爱穿搭',text:'做百变女神',img:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t20260/181/224299388/42393/9632586f/5b053603N0f65aec5.jpg!q70.jpg.dpg.webp',to:'/live'}
];

// 逛商场

let shoppingMallA=[
  {title:'女装馆',text:'新品低至59元',img:'https://m.360buyimg.com/mobilecms/s272x272_jfs/t16600/316/1123536957/10512/e744c5e7/5abdb42fN41d579c4.jpg!q70.jpg.dpg.webp',to:'/tatata'},
  {title:'男装馆',text:'新品低至五折',img:'https://m.360buyimg.com/mobilecms/s272x272_jfs/t19171/48/2068942657/20313/968dd562/5ae44421Nfeb9df92.jpg!q70.jpg.dpg.webp',to:'/tatata'},
  {title:'大家电馆',text:'满千减百',img:'https://m.360buyimg.com/mobilecms/s272x272_jfs/t6040/257/2410958493/8966/97600ae/5940932aN4c01e44f.jpg!q70.jpg.dpg.webp',to:'/tatata'},
  {title:'母婴馆',text:'熊孩子来淘货',img:'https://m.360buyimg.com/n1/s272x272_jfs/t21595/79/1463819700/89021/1bd64546/5b29d9c8N6366bde0.jpg!q70.jpg.dpg.webp',to:'/tatata'}
];
let shoppingMallB=[
  {title:'美食城',text:'低至五折',img:'https://m.360buyimg.com/n1/s220x220_jfs/t9493/45/927659237/64704/684be9e2/59b90174N6d2610f3.jpg!q70.jpg.dpg.webp',to:'/tatata'},
  {title:'手机馆',text:'iPhone X',img:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t17803/53/2654705346/41004/65cd5280/5b06d046Nf4b174c7.png!q70.jpg.dpg.webp',to:'/tatata'},
  {title:'鞋靴箱包',text:'好货立减',img:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t17431/350/1978141073/19643/64a1dc1b/5adee747Ne45f1a95.jpg!q70.jpg.dpg.webp',to:'/tatata'},
  {title:'小家电馆',text:'满减狂欢!',img:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t18541/282/1032573647/40290/79a5b948/5ab85e0eN5cc3ba7d.jpg!q70.jpg.dpg.webp',to:'/tatata'},
  {title:'京东生鲜',text:'尝鲜秒杀',img:'https://m.360buyimg.com/n1/s220x220_jfs/t16606/62/1855724749/61984/568d8f4a/5ad98b64N0286c382.jpg!q70.jpg.dpg.webp',to:'/tatata'},
  {title:'家装城',text:'大牌直降',img:'https://m.360buyimg.com/n1/s220x220_jfs/t4675/30/4072351537/8037/bb6092cb/590997adNf0986dc9.jpg!q70.jpg.dpg.webp',to:'/kakakka'},
  {title:'京东图书',text:'文字有力量',img:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t20605/235/251134628/30658/10f47904/5b06d0bbN6a065cff.jpg!q70.jpg.dpg.webp',to:'/book'},
  {title:'美妆馆',text:'大牌0元试用',img:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t5875/44/3703772888/90203/fa7313c7/59410d3bN97832467.jpg!q70.jpg.dpg.webp',to:'/tatata'}
];

//特色推荐
let recommendA=[
  {title:'白条商城',text:'苹果享免息',imgA:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t20062/280/1037399934/17090/1da36d9f/5b11293aN16ead9e8.jpg!q70.jpg.dpg.webp',
    imgB:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t19858/57/1187548736/33049/56725a42/5b1659c7N6b115c39.png!q70.jpg.dpg.webp',to:'/diudiudiu'}
];

let recommendB=[
  {title:'京东众筹',text:'0.01元抢',img:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t22441/168/197316871/12398/d2aff080/5b2887c0Nd4a88bd5.jpg!q70.jpg.dpg.webp',to:'/wawawa'},
  {title:'京东旅行',text:'线路半价抢',img:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t22588/146/45109745/21240/cef447f4/5b23a50eN28742efd.jpg!q70.jpg.dpg.webp',to:'/wawawa'},
  {title:'智能生活',text:'酷玩黑科技',img:'https://m.360buyimg.com/n1/s220x220_jfs/t289/96/1291853847/90246/a947e043/54363b36N2b252118.jpg!q70.jpg.dpg.webp',to:'/wawawa'},
  {title:'陪伴宝宝',text:'1分秒好货',img:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t21922/77/636924958/18987/4cd35c74/5b149052N39ab63a3.jpg!q70.jpg.dpg.webp',to:'/wawawa'},
  {title:'特产扶贫',text:'原产好物',img:'https://m.360buyimg.com/n1/s220x220_jfs/t14326/73/1683672091/201966/d3e61ed3/5a55dadcNe9e63953.jpg!q70.jpg.dpg.webp',to:'/wawawa'},
  {title:'爱车生活',text:'1元包邮',img:'https://m.360buyimg.com/n1/s220x220_jfs/t17524/212/408777584/272165/72a46846/5a718b15N2296fb2f.jpg!q70.jpg.dpg.webp',to:'/wawawa'},
  {title:'大药房',text:'3瓶减20',img:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t19876/122/1905941205/34079/f8ef571d/5b2a2bd3N047e33d5.jpg!q70.jpg.dpg.webp',to:'/wawawa'},
  {title:'设计师',text:'天生不一样',img:'https://m.360buyimg.com/mobilecms/s220x220_jfs/t21202/142/457679144/24742/128e9091/5b0e5efcN0855c17b.jpg!q70.jpg.dpg.webp',to:'/desigenr'},
  {title:'京东房车',text:'特惠房源',img:'https://m.360buyimg.com/n1/s220x220_jfs/t17893/269/2562496516/27808/c5830e39/5b05385bN1c46cce3.jpg!q70.jpg.dpg.webp',to:'/wawawa'},
  {title:'生活娱乐',text:'就是爱玩儿',img:'https://m.360buyimg.com/n1/s220x220_jfs/t15199/1/2111489780/17549/7e5185ac/5a6ef516N392fe81f.jpg!q70.jpg.dpg.webp',to:'/wawawa'},
];


//专属推荐商品
let exclusive=[
  {title:'炫龙(Shinelon)炎魔T2ti GTX1050ti 4G独显',price:'￥6099.00',evaluates:'好评率98%',id:'1',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t19396/312/1460781627/172218/8942f4b7/5acc1e8fN78629462.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'小米（MI小米MIX2S 黑色 全网通(8GRAM+256GROM)',price:'￥4099.00',evaluates:'好评率98%',id:'2',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t19687/104/1405382275/147852/73a1bbe/5ac97f08N3874ea2b.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'外星人Alienware15.6英寸Gsync屏',price:'￥29999.00',evaluates:'好评率98%',id:'3',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t17221/136/1213977283/129609/f02bf09d/5ac1edbfN82872ffe.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'华为HUAWEIP20Pro 全面屏徕卡三摄 6GB+128GB 宝石蓝',price:'￥5488.00',evaluates:'好评率98%',id:'4',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t19225/206/1269058000/160653/b8379287/5ac1e879N3153c619.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'ROG玩家国度 GX501GI GTX1080MaxQ 8G 15.6英寸',price:'￥29999.00',evaluates:'好评率98%',id:'5',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t23629/104/190989632/256106/c64d4f09/5b288e5bNcca8dcb9.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'掠夺者（Predator）G3 GTX1060 6G独显 15.6英寸',price:'￥6999.00',evaluates:'好评率98%',id:'6',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t12664/110/2038089537/210428/508da08a/5a308dfcN082c0502.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'机械师游戏本GTX1050Ti全面屏轻薄',price:'￥6999.00',evaluates:'好评率98%',id:'7',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t24277/151/260591788/365535/da54343/5b2a7cf2N2e3d0c5a.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'外星人Alienware Aurora水冷游戏台式电脑整机',price:'￥42999.00',evaluates:'好评率98%',id:'8',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t16846/24/1733011900/296222/7a62c2d0/5ad6b0dfN4afa141f.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'未来人类（Terrans Force） 游戏本i7独显15.6英寸',price:'￥6999.00',evaluates:'好评率98%',id:'9',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t18262/171/2569396054/363135/a2b39a0b/5afaa587N4000abe6.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'外星人Alienware ALPHA(阿尔法)游戏台式电脑主机',price:'￥7999.00',evaluates:'好评率98%',id:'10',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t19072/195/1788078537/112982/ed2fee13/5ad6ab26Na32ac409.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'微星（MSI）宙斯盾钛3 Aegis Ti3-002',price:'￥42999.00',evaluates:'好评率98%',id:'11',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t18316/303/263557771/225033/ac9d5023/5a66cba6N8e8cdfe4.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'华硕(ASUS)玩家国度ROG GT51CH 台式游戏电脑主机',price:'￥19999.00',evaluates:'好评率98%',id:'12',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t21292/218/871176640/251852/129008d8/5b1a27b3N3e6ff54d.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'NVIDIA 英伟达 TITAN V 泰坦X Pascal帕斯卡Xp',price:'￥22999.00',evaluates:'好评率98%',id:'13',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t21721/124/1202935260/250915/e5ed3e7e/5b22285cN9e917319.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'钛度(Taidu)黑晶吃鸡游戏台式电脑主机',price:'￥10999.00',evaluates:'好评率98%',id:'14',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t15682/123/1791817403/158516/f8d80f7a/5a654611N8a6a7528.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'惠普（HP） 暗影精灵3代游戏台式机吃鸡电脑主机',price:'￥15999.00',evaluates:'好评率98%',id:'15',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t21352/153/845463981/178750/f4aeb093/5b19f6deN8f20105b.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'Apple iMac Pro 27英寸一体机',price:'￥38999.00',evaluates:'好评率98%',id:'16',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t12730/340/2310355025/164277/26c86ed/5a3a0ff1Na64a6cc0.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'日本火山泥去黑头撕拉面膜 有效祛黑头粉刺螨虫控油',price:'￥59.00',evaluates:'好评率98%',id:'17',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t20017/46/1173336271/235173/5db5ed93/5b17451fNce4fd671.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'纽仕兰牧场 Theland 3.5g蛋白质 全脂牛奶 250ml*24家庭装',price:'￥69.00',evaluates:'好评率98%',id:'18',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t3526/295/888755633/189982/16ea21b4/5816dce5N70820f42.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'纽仕兰牧场 Theland 白金版3.8g蛋白质 全脂牛奶 250ml',price:'￥89.00',evaluates:'好评率98%',id:'19',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t3091/105/4935956091/181871/1cb84ab/5860c1e0Ne2bbc8d6.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'三只松鼠坚果炒货零食每日坚果手剥开口松子100g/袋',price:'￥24.90',evaluates:'好评率98%',id:'20',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t5170/122/443463169/348090/2a68bff4/58ff269fN7b7e087b.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'微星（MSI）宙斯盾钛3 Aegis Ti3-002',price:'￥42999.00',evaluates:'好评率98%',id:'21',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t18316/303/263557771/225033/ac9d5023/5a66cba6N8e8cdfe4.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'华硕(ASUS)玩家国度ROG GT51CH 台式游戏电脑主机',price:'￥19999.00',evaluates:'好评率98%',id:'22',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t21292/218/871176640/251852/129008d8/5b1a27b3N3e6ff54d.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'NVIDIA 英伟达 TITAN V 泰坦X Pascal帕斯卡Xp',price:'￥22999.00',evaluates:'好评率98%',id:'23',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t21721/124/1202935260/250915/e5ed3e7e/5b22285cN9e917319.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'钛度(Taidu)黑晶吃鸡游戏台式电脑主机',price:'￥10999.00',evaluates:'好评率98%',id:'24',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t15682/123/1791817403/158516/f8d80f7a/5a654611N8a6a7528.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'惠普（HP） 暗影精灵3代游戏台式机吃鸡电脑主机',price:'￥15999.00',evaluates:'好评率98%',id:'25',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t21352/153/845463981/178750/f4aeb093/5b19f6deN8f20105b.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'Apple iMac Pro 27英寸一体机',price:'￥38999.00',evaluates:'好评率98%',id:'26',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t12730/340/2310355025/164277/26c86ed/5a3a0ff1Na64a6cc0.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'日本火山泥去黑头撕拉面膜 有效祛黑头粉刺螨虫控油',price:'￥59.00',evaluates:'好评率98%',id:'27',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t20017/46/1173336271/235173/5db5ed93/5b17451fNce4fd671.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'纽仕兰牧场 Theland 3.5g蛋白质 全脂牛奶 250ml*24家庭装',price:'￥69.00',evaluates:'好评率98%',id:'28',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t3526/295/888755633/189982/16ea21b4/5816dce5N70820f42.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'纽仕兰牧场 Theland 白金版3.8g蛋白质 全脂牛奶 250ml',price:'￥89.00',evaluates:'好评率98%',id:'29',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t3091/105/4935956091/181871/1cb84ab/5860c1e0Ne2bbc8d6.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'三只松鼠坚果炒货零食每日坚果手剥开口松子100g/袋',price:'￥24.90',evaluates:'好评率98%',id:'30',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t5170/122/443463169/348090/2a68bff4/58ff269fN7b7e087b.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'微星（MSI）宙斯盾钛3 Aegis Ti3-002',price:'￥42999.00',evaluates:'好评率98%',id:'31',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t18316/303/263557771/225033/ac9d5023/5a66cba6N8e8cdfe4.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'华硕(ASUS)玩家国度ROG GT51CH 台式游戏电脑主机',price:'￥19999.00',evaluates:'好评率98%',id:'32',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t21292/218/871176640/251852/129008d8/5b1a27b3N3e6ff54d.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'NVIDIA 英伟达 TITAN V 泰坦X Pascal帕斯卡Xp',price:'￥22999.00',evaluates:'好评率98%',id:'33',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t21721/124/1202935260/250915/e5ed3e7e/5b22285cN9e917319.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'钛度(Taidu)黑晶吃鸡游戏台式电脑主机',price:'￥10999.00',evaluates:'好评率98%',id:'34',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t15682/123/1791817403/158516/f8d80f7a/5a654611N8a6a7528.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'惠普（HP） 暗影精灵3代游戏台式机吃鸡电脑主机',price:'￥15999.00',evaluates:'好评率98%',id:'35',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t21352/153/845463981/178750/f4aeb093/5b19f6deN8f20105b.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'Apple iMac Pro 27英寸一体机',price:'￥38999.00',evaluates:'好评率98%',id:'36',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t12730/340/2310355025/164277/26c86ed/5a3a0ff1Na64a6cc0.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'日本火山泥去黑头撕拉面膜 有效祛黑头粉刺螨虫控油',price:'￥59.00',evaluates:'好评率98%',id:'37',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t20017/46/1173336271/235173/5db5ed93/5b17451fNce4fd671.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'纽仕兰牧场 Theland 3.5g蛋白质 全脂牛奶 250ml*24家庭装',price:'￥69.00',evaluates:'好评率98%',id:'38',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t3526/295/888755633/189982/16ea21b4/5816dce5N70820f42.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'纽仕兰牧场 Theland 白金版3.8g蛋白质 全脂牛奶 250ml',price:'￥89.00',evaluates:'好评率98%',id:'39',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t3091/105/4935956091/181871/1cb84ab/5860c1e0Ne2bbc8d6.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'三只松鼠坚果炒货零食每日坚果手剥开口松子100g/袋',price:'￥24.90',evaluates:'好评率98%',id:'40',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t5170/122/443463169/348090/2a68bff4/58ff269fN7b7e087b.jpg!q70.jpg.dpg.webp',to:'/kakaka'},{title:'微星（MSI）宙斯盾钛3 Aegis Ti3-002',price:'￥42999.00',evaluates:'好评率98%',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t18316/303/263557771/225033/ac9d5023/5a66cba6N8e8cdfe4.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'华硕(ASUS)玩家国度ROG GT51CH 台式游戏电脑主机',price:'￥19999.00',evaluates:'好评率98%',id:'41',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t21292/218/871176640/251852/129008d8/5b1a27b3N3e6ff54d.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'NVIDIA 英伟达 TITAN V 泰坦X Pascal帕斯卡Xp',price:'￥22999.00',evaluates:'好评率98%',id:'42',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t21721/124/1202935260/250915/e5ed3e7e/5b22285cN9e917319.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'钛度(Taidu)黑晶吃鸡游戏台式电脑主机',price:'￥10999.00',evaluates:'好评率98%',id:'43',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t15682/123/1791817403/158516/f8d80f7a/5a654611N8a6a7528.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'惠普（HP） 暗影精灵3代游戏台式机吃鸡电脑主机',price:'￥15999.00',evaluates:'好评率98%',id:'44',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t21352/153/845463981/178750/f4aeb093/5b19f6deN8f20105b.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'Apple iMac Pro 27英寸一体机',price:'￥38999.00',evaluates:'好评率98%',id:'45',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t12730/340/2310355025/164277/26c86ed/5a3a0ff1Na64a6cc0.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'日本火山泥去黑头撕拉面膜 有效祛黑头粉刺螨虫控油',price:'￥59.00',evaluates:'好评率98%',id:'46',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t20017/46/1173336271/235173/5db5ed93/5b17451fNce4fd671.jpg!q70.jpg.dpg.webp',to:'/kakaka'},
  {title:'纽仕兰牧场 Theland 3.5g蛋白质 全脂牛奶 250ml*24家庭装',price:'￥69.00',evaluates:'好评率98%',id:'47',
    img:'https://m.360buyimg.com/mobilecms/s636x636_jfs/t3526/295/888755633/189982/16ea21b4/5816dce5N70820f42.jpg!q70.jpg.dpg.webp',to:'/kakaka'}
];








//热卖榜数据
//饮用水数据
let water=[{img:'https://m.360buyimg.com/n1/s200x200_jfs/t4636/248/4059769692/194744/354936c6/5909ae53N369e8ef4.jpg', title:'百岁山矿泉水348ml*24瓶 整箱',price:'40.90',id:1,isCollect:false},
  {img:'https://m.360buyimg.com/n1/s200x200_jfs/t19654/285/937690088/242261/b34d3043/5ab323e2Nf7f794e3.jpg',
    title:'雀巢（Nestle）饮用水 优活 330mlX24瓶 整箱',price:'24.90',id:2,isCollect:false},
  {img:'https://m.360buyimg.com/n1/s200x200_jfs/t8698/74/2266855729/79497/95b64375/59c899a8Nf9b8cb2d.jpg',
    title:'农夫山泉 饮用天然水380ml 1*24瓶 整箱',price:'29.90',id:3,isCollect:false},
  {img:'https://m.360buyimg.com/n1/s200x200_jfs/t19804/333/345507602/121443/a707db0e/5af11d97N43b1bf37.jpg',
    title:'依能 青柠 苏打水 无糖 无汽 500ml*15瓶/件（新老包装随机发货）',price:'37.90',id:4,isCollect:false},
  {img:'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t6802/288/2080927319/107330/bd8df5e1/59882796N0acb7dd4.jpg.dpg',
    title:'汇善谷 饮用水 弱碱性 天然矿泉水 517ml*18瓶/箱 整箱',price:'87.00',id:5,isCollect:false},
  {img:'https://m.360buyimg.com/n1/s200x200_jfs/t8698/74/2266855729/79497/95b64375/59c899a8Nf9b8cb2d.jpg',
    title:'农夫山泉 饮用天然水380ml 1*24瓶 整箱',price:'29.90',id:6,isCollect:false},
  {img:'https://m.360buyimg.com/n1/s200x200_jfs/t19804/333/345507602/121443/a707db0e/5af11d97N43b1bf37.jpg',
    title:'依能 青柠 苏打水 无糖 无汽 500ml*15瓶/件（新老包装随机发货）',price:'37.90',id:7,isCollect:false},
  {img:'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t6802/288/2080927319/107330/bd8df5e1/59882796N0acb7dd4.jpg.dpg',
    title:'汇善谷 饮用水 弱碱性 天然矿泉水 517ml*18瓶/箱 整箱',price:'87.00',id:8,isCollect:false},

]
//手机商品数据
let phone=[{img:'https://m.360buyimg.com/n1/s200x200_jfs/t13975/192/2527939522/54999/198a9aed/5a433f01N71990f76.jpg', title:'荣耀9青春版 全网通 标配版 3GB+32GB 幻夜黑',price:'999.00',id:1,isCollect:false},
  {img:'https://m.360buyimg.com/n1/s200x200_jfs/t8107/37/1359438185/72159/a6129e26/59b857f8N977f476c.jpg',
    title:'Apple iPhone 8 Plus (A1864) 64GB 深空灰色',price:'5599.00',id:2,isCollect:false},
  {img:'https://m.360buyimg.com/n1/s200x200_jfs/t21826/239/756934284/295397/2410a22a/5b179e27N68f4073f.jpg',
    title:'荣耀Play 全网通版 4GB+64GB 极光蓝',price:'1999.00',id:3,isCollect:false},
  {img:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t21757/124/232227905/159368/f843df78/5b051a4bN034f495c.jpg!q80.jpg',
    title:'小辣椒 红辣椒Note5X 6+64GB',price:'1399.00',id:4,isCollect:false},
  {img:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t18274/352/2453877177/252772/701633fd/5af93ebdNef901549.jpg!q80.jpg',
    title:'vivo X21i 全面屏 双摄美颜拍照手机 6GB+64GB 宝石红 ',price:'2598.00',id:5,isCollect:false},
  {img:'https://m.360buyimg.com/n1/s200x200_jfs/t21826/239/756934284/295397/2410a22a/5b179e27N68f4073f.jpg',
    title:'荣耀Play 全网通版 4GB+64GB 极光蓝',price:'1999.00',id:6,isCollect:false},
  {img:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t21757/124/232227905/159368/f843df78/5b051a4bN034f495c.jpg!q80.jpg',
    title:'小辣椒 红辣椒Note5X 6+64GB',price:'1399.00',id:7,isCollect:false},
  {img:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t18274/352/2453877177/252772/701633fd/5af93ebdNef901549.jpg!q80.jpg',
    title:'vivo X21i 全面屏 双摄美颜拍照手机 6GB+64GB 宝石红 ',price:'2598.00',id:8,isCollect:false},
];
//厨房小店数据
let check=[{img:'https://m.360buyimg.com/n1/s200x200_jfs/t21262/301/747923963/240745/cbc22694/5b17b6fbN4fb34941.jpg', title:'东菱（Donlim）迷你榨汁机 料理机',price:'79.00',id:1,isCollect:false},
  {img:'https://m.360buyimg.com/n1/s200x200_jfs/t21265/23/427527586/231476/b5609496/5b0d0c49N56c24de4.jpg',
    title:'美的（Midea）电饭煲 微压蒸汽阀 ',price:'180.00',id:2,isCollect:false},
  {img:'https://m.360buyimg.com/n1/s200x200_jfs/t24346/125/145358445/299926/ac9bb62f/5b268e24N8a75e4de.jpg',
    title:'美菱（MeiLing）微波炉 20L小型机械微波炉 ',price:'369.00',id:3,isCollect:false},
  {img:'https://img11.360buyimg.com/n2/s240x240_jfs/t20047/188/868285998/238935/9ead10f2/5b0d74adNe1263632.jpg!q70.jpg',
    title:'美菱（MeiLing）MT-FH35001 电烤炉',price:'199.00',id:4,isCollect:false},
  {img:'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t5683/15/7195905070/142221/95b13814/596eff2cN71e976c0.jpg.dpg',
    title:'倍斯特（Besiter）10000毫安 移动电源/充电宝  ',price:'59.00',id:5,isCollect:false},
  {img:'https://m.360buyimg.com/n1/s200x200_jfs/t24346/125/145358445/299926/ac9bb62f/5b268e24N8a75e4de.jpg',
    title:'美菱（MeiLing）微波炉 20L小型机械微波炉 ',price:'369.00',id:6,isCollect:false},
  {img:'https://img11.360buyimg.com/n2/s240x240_jfs/t20047/188/868285998/238935/9ead10f2/5b0d74adNe1263632.jpg!q70.jpg',
    title:'美菱（MeiLing）MT-FH35001 电烤炉',price:'199.00',id:7,isCollect:false},
  {img:'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t5683/15/7195905070/142221/95b13814/596eff2cN71e976c0.jpg.dpg',
    title:'倍斯特（Besiter）10000毫安 移动电源/充电宝  ',price:'59.00',id:8,isCollect:false},

];
//活动榜数据
// 跨品类
let cross=[
  {obj:[
      {img:'https://m.360buyimg.com/n1/s174x174_jfs/t5323/268/1762578247/59708/86855536/59141156N0f0575e0.jpg'},
      {img:'https://m.360buyimg.com/n1/s264x264_g14/M01/01/02/rBEhVlNfb48IAAAAAAFiVpTvRRAAAMybAI9KYgAAWJu606.jpg'},
      {img:'https://m.360buyimg.com/n1/s174x174_jfs/t11215/25/1842674058/141827/6c45a6dc/5a0ac631N7e47fc06.jpg'}
    ],
    title:'满159减50',id:1,person:'8万人在抢',sum:['费雪','贝亲','象宝宝','米乐鱼']
  },
  {obj:[{img:'https://m.360buyimg.com/n1/s174x174_jfs/t6955/298/1540659444/160024/9da7bccb/59828dc0N496ccff8.jpg'},
      {img:'https://m.360buyimg.com/n1/s174x174_jfs/t2611/93/3703171247/522367/f86865b7/5796f924N164f1999.jpg'},
      {img:'https://m.360buyimg.com/n1/s174x174_jfs/t15637/123/1955582809/198544/1fae502c/5a6e9a24N89aac87b.jpg'}
    ],
    title:'满199减100',id:2,person:'7.8万人在抢',sum:['佳洁士','护舒宝','雅高','皇宇']
  },
  { obj:[
      {img:'https://m.360buyimg.com/n1/s174x174_jfs/t5323/268/1762578247/59708/86855536/59141156N0f0575e0.jpg'},
      {img:'https://m.360buyimg.com/n1/s264x264_g14/M01/01/02/rBEhVlNfb48IAAAAAAFiVpTvRRAAAMybAI9KYgAAWJu606.jpg'},
      {img:'https://m.360buyimg.com/n1/s174x174_jfs/t11215/25/1842674058/141827/6c45a6dc/5a0ac631N7e47fc06.jpg'}
    ],
    title:'满159减50',id:3,person:'8万人在抢',sum:['费雪','贝亲','象宝宝','米乐鱼']
  },
  {obj:[{img:'https://m.360buyimg.com/n1/s174x174_jfs/t6955/298/1540659444/160024/9da7bccb/59828dc0N496ccff8.jpg'},
      {img:'https://m.360buyimg.com/n1/s174x174_jfs/t2611/93/3703171247/522367/f86865b7/5796f924N164f1999.jpg'},
      {img:'https://m.360buyimg.com/n1/s174x174_jfs/t15637/123/1955582809/198544/1fae502c/5a6e9a24N89aac87b.jpg'}
    ],
    title:'满199减100',id:4,person:'7.8万人在抢',sum:['佳洁士','护舒宝','雅高','皇宇']
  }


];

//爱穿搭
//轮播图数据
let slides=['https://m.360buyimg.com/babel/s318x204_jfs/t20233/97/1220382164/115892/a95e1200/5b233ffaNac6cd8c9.jpg!q70.dpg',
  'https://m.360buyimg.com/babel/s318x204_jfs/t20815/329/796669587/149942/3e171ce0/5b18d0cfNc8c94d19.jpg!q70.dpg',
  'https://m.360buyimg.com/babel/s318x204_jfs/t20308/115/1353517656/136393/a56fc730/5b276121Nfd3e409e.jpg!q70.dpg',
  'https://m.360buyimg.com/babel/s318x204_jfs/t21232/61/1409706718/144360/2a03cd95/5b278504Nc3642a7a.jpg!q70.dpg',
  'https://m.360buyimg.com/babel/s318x204_jfs/t20881/133/1359664353/125352/b14771a4/5b2770e5N811191ad.jpg!q70.dpg'];
//
let clothes=[{img:'https://m.360buyimg.com/babel/s85x85_jfs/t15919/141/400945235/639538/1f433a19/5a2f9fe5N2082e9ac.jpg!q70.dpg',title:'LOHO眼镜生活 复古圆框防辐',price:'229.00',id:1},
  {img:'https://m.360buyimg.com/babel/s85x85_jfs/t18307/327/1886627412/221797/35466e5f/5ad9b2e5Nafb7c72f.jpg!q70.dpg',title:'NewEra纽亦华 条纹鸭舌帽字母',price:'287.1',id:2},
  {img:'https://m.360buyimg.com/babel/s85x85_jfs/t19462/158/2009945801/232613/8c6d238f/5ade9398N3211c786.jpg!q70.dpg',title:'【明星同款】美职棒MLB棒球帽子',price:'448.2',id:3},
  {img:'https://m.360buyimg.com/babel/s85x85_jfs/t19030/345/966045177/395524/212040ff/5ab4c458N4f00d7a7.jpg!q70.dpg',title:'ANSPORT学生男女双肩包背包TRS70W3多彩色',price:'335.00',id:4},
  {img:'https://m.360buyimg.com/babel/s85x85_jfs/t15328/182/2616945191/167139/d95522ff/5aab82b3N0d3d9233.jpg!q70.dpg',title:'PANDORA 潘多拉 粉色心情串珠手链 TZ1810-19cm',price:'2287',id:5},
  {img:'https://m.360buyimg.com/babel/s85x85_jfs/t18307/327/1886627412/221797/35466e5f/5ad9b2e5Nafb7c72f.jpg!q70.dpg',title:'NewEra纽亦华 条纹鸭舌帽字母',price:'287.1',id:6},
  {img:'https://m.360buyimg.com/babel/s85x85_jfs/t19462/158/2009945801/232613/8c6d238f/5ade9398N3211c786.jpg!q70.dpg',title:'【明星同款】美职棒MLB棒球帽子',price:'448.2',id:7},
  {img:'https://m.360buyimg.com/babel/s85x85_jfs/t19030/345/966045177/395524/212040ff/5ab4c458N4f00d7a7.jpg!q70.dpg',title:'ANSPORT学生男女双肩包背包TRS70W3多彩色',price:'335.00',id:8},
  {img:'https://m.360buyimg.com/babel/s85x85_jfs/t15328/182/2616945191/167139/d95522ff/5aab82b3N0d3d9233.jpg!q70.dpg',title:'PANDORA 潘多拉 粉色心情串珠手链 TZ1810-19cm',price:'2287',id:9}


];





//设置头信息

function setMyHeader(res){
  //设置头信息
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By",' 3.2.1');
  res.setHeader("Content-Type", "application/json;charset=utf-8");
}


//1.首页轮播图接口

jd.get('/getCarousel',function (req,res) {
  setMyHeader(res);
  res.send(JSON.stringify(Carousel))
});

//2.首页618活动展示图

jd.get('/getActivity',function(req,res){
  setMyHeader(res);
  res.send(JSON.stringify(Activity))
});

//3.首页分页入口图标

jd.get('/getPaging',function(req,res){
  setMyHeader(res);
  res.send(JSON.stringify(Paging))
});

//4.京东秒杀

jd.get('/getSecondsKill',function(req,res){
  setMyHeader(res);
  res.send(JSON.stringify(SecondsKill))
});

//5. 每日逛 买买买
jd.get('/getDailyShopping',function(req,res){
  setMyHeader(res);
  res.send(JSON.stringify(DailyShopping))
});

//6.爱生活
jd.get('/getLoveLiveA',function(req,res){
  setMyHeader(res);
  res.send(JSON.stringify(loveLiveA))
});
jd.get('/getLoveLiveB',function(req,res){
  setMyHeader(res);
  res.send(JSON.stringify(loveLiveB))
});

//7.逛商场
jd.get('/getShoppingMallA',function(req,res){
  setMyHeader(res);
  res.send(JSON.stringify(shoppingMallA))
});
jd.get('/getShoppingMallB',function(req,res){
  setMyHeader(res);
  res.send(JSON.stringify(shoppingMallB))
});

//8.特色推荐
jd.get('/getRecommendA',function(req,res){
  setMyHeader(res);
  res.send(JSON.stringify(recommendA))
});
jd.get('/getRecommendB',function(req,res){
  setMyHeader(res);
  res.send(JSON.stringify(recommendB))
});

//9.专属推荐
//约定：每次返回八组数据
let pageSize=8; //返回的数据量
jd.get('/getExclusive',function(req,res){
  let stillDatas=true;    //判断数据状态
  setMyHeader(res);
  let myDatas=parseInt(req.query.offset);   //截取数据的开始位置
  let exclusiveSize=exclusive.slice(myDatas,myDatas+pageSize);  //需要返回的数据集合（数组）
  if(myDatas+pageSize>=exclusive.length){
    stillDatas=false;
  }

  res.send(JSON.stringify({stillDatas,exclusiveSize}));    //将所有数据返回
});




let hotImg=[{title:'电风扇',isclick:false,id:1,src:'https://img20.360buyimg.com/focus/jfs/t17962/238/2678578741/19614/71205ad3/5b056472N771896da.png'},
  {title:'手机',isclick:false,id:2,src:"https://img11.360buyimg.com/focus/jfs/t21388/146/237407622/26923/221da1b3/5b054fedN2ba90518.jpg"},
  {title:'空调',isclick:false,id:3,src:'https://img30.360buyimg.com/focus/jfs/t22051/318/235303191/9297/c5ea2761/5b055000N410a7553.png'},
  {title:"充电宝",isclick:false,id:4,src:'https://img20.360buyimg.com/focus/jfs/t22300/73/231945461/4142/40db87e3/5b055011Nb89b2bda.png'},
  {title:'蓝牙耳机',isclick:false,id:5,src:'https://img30.360buyimg.com/focus/jfs/t19705/34/2693294559/3094/5f38bd0b/5b05507eN6a4152bc.jpg'},
  {title:'蚊帐',isclick:false,id:6,src:'https://img20.360buyimg.com/focus/jfs/t17347/267/2693789922/24957/5e2ff705/5b056485N5ff83ec1.png'},
  {title:'凉席',isclick:false,id:7,src:'https://img13.360buyimg.com/focus/jfs/t19792/196/2650240166/22152/3cade383/5b05648bN0b429032.png'},
  {title:'耳机',isclick:false,id:8,src:'https://img20.360buyimg.com/focus/jfs/t20128/208/216721929/9242/472993da/5b05522dNa2aae1bb.png'},
  {title:'电饭煲',isclick:false,id:9,src:"https://img30.360buyimg.com/focus/jfs/t19654/268/2639299825/8766/1224c568/5b055225N991ebfb0.png"},
  {title:'空调挂机',isclick:false,id:10,src:'https://img30.360buyimg.com/focus/jfs/t19654/268/2639299825/8766/1224c568/5b055225N991ebfb0.png'},
  {title:'路由器',isclick:false,id:11,src:'https://img20.360buyimg.com/focus/jfs/t21715/149/246679831/16257/ddbf2036/5b0565a7N8dbc0017.png'},
  {title:'空调扇',isclick:false,id:12,src:'https://img11.360buyimg.com/focus/jfs/t19963/2/695987521/18365/702605d5/5b0552f2Nac9a0c92.png'},
  {title:'男鞋',isclick:false,id:13,src:'https://img13.360buyimg.com/focus/jfs/t18037/160/2694437684/22707/4ab8fe1a/5b0552eaNbc8f1bda.png'},
  {title:'热水器',isclick:false,id:14,src:'https://img10.360buyimg.com/focus/jfs/t21889/345/237339526/13219/a0f0704/5b055235Nf8fb2d6c.png'},
  {title:'防晒',isclick:false,id:15,src:'https://img30.360buyimg.com/focus/jfs/t20047/53/692421098/24627/f9785550/5b055644Nf0b93238.jpg'}]
let hotImg1=[{id:16,src:'https://img20.360buyimg.com/focus/jfs/t21115/83/225125274/13856/5473fb3f/5b0567c1N59d53b27.png',isclick:false,title:'冰箱'},
  {id:17,title:'洗衣机',isclick:false,src:'https://img14.360buyimg.com/focus/jfs/t21664/15/237213959/24996/a3c6c7d6/5b0567c7N9cc1c355.png'},
  {id:18,title:'电视',isclick:false,src:'https://img12.360buyimg.com/focus/jfs/t18106/218/2672347202/29951/3618e960/5b0567cdN275fbcdd.png'}]
let hotImg2=[{isclick:false,id:19,src:'https://img30.360buyimg.com/focus/jfs/t16333/58/1091559738/36108/3a56903e/5a4f4872Ndb69555f.png',title:'华为手机'},
  {isclick:false,title:'小米手机',id:20,src:'https://img20.360buyimg.com/focus/jfs/t16366/16/1307996090/39842/dbaa3c73/5a4f4867Ncb588473.png'},
  {title:'苹果',isclick:false,id:21,src:'https://img30.360buyimg.com/focus/jfs/t14245/137/2069922478/30524/1e8fc597/5a69d582N25086304.png'}]
let nav=[
  {title:'热门推荐',id:1,to:'/index/classify/one'},
  {title:'手机数码',id:2,to:'/index/classify/two'},
  {title:'家电用器',id:3,to:'/minapp/classify/thr'},
  {title:'电脑办公',id:4,to:'/minapp/classify/four'},
  {title:'计生情趣',id:5,to:'/minapp/classify/five'},
  {title:'美妆护肤',id:6,to:'/minapp/classify/six'},
  {title:'个护清洁',id:7,to:'/minapp/classify/seven'},
  {title:'汽车用品',id:8,to:'/minapp/classify/seven'},
  {title:'京东超市',id:9,to:'/minapp/classify/seven'},
  {title:'男装',id:10,to:'/minapp/classify/seven'},
  {title:'男鞋',id:11,to:'/minapp/classify/seven'},
  {title:'女装',id:12,to:'/minapp/classify/seven'},
  {title:'女鞋',id:13,to:'/minapp/classify/seven'},
  {title:'母婴童装',id:14,to:'/minapp/classify/seven'},
  {title:'运动户外',id:15,to:'/minapp/classify/seven'},
  {title:'内衣配饰',id:16,to:'/minapp/classify/seven'},
  {title:'食品生鲜',id:17,to:'/minapp/classify/seven'},
  {title:'酒水饮料',id:18,to:'/minapp/classify/seven'},
  {title:'家具家装',id:19,to:'/minapp/classify/seven'},
  {title:'家居厨具',id:20,to:'/minapp/classify/seven'},
]


let fan=[
  {
    data:[
      {num:1,is:false,detail:'【风动全城 全民消暑！舒心解意，格力伴你静享品质清凉风】LED触摸显示屏，80度广角送风，附带香薰功能，6m远程遥控，3种风类，3档风速，7h定时预约，便捷拆洗设计，经典贝壳造型，静享清新柔风》》格力风扇专场',title:'格力（GREE）FL-09X61Bh 柔风易拆洗遥控塔扇/无叶风扇/电风扇',isFollow:false,mid:1,say:'5万条评价 好评率98%',price:329.00,good1:'遥控控制',good2:'易拆洗',
        srcz:'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t7792/270/1427377021/1088/6d981d81/599cf545Na1f3ceb4.png',
        src:'https://img12.360buyimg.com/n2/s240x240_jfs/t21394/248/1482816370/114405/2beb8dcf/5b2a5ed4N651f05b1.jpg!q70.jpg',
        src1:'http://m.360buyimg.com/mobilecms/s750x750_jfs/t22183/147/426270487/44518/c68b29a1/5b0d33edNbbd16e12.jpg!q80.dpg',
        src2:'http://m.360buyimg.com/mobilecms/s750x750_jfs/t17323/127/1072020795/33649/3e4270d3/5ab9ec8eNc928f08a.jpg!q80.dpg',
        src3:'http://m.360buyimg.com/mobilecms/s750x750_jfs/t17839/257/1082762998/58382/4f378c12/5ab9ec8eNaf95acac.jpg!q80.dpg',
        src4:'http://m.360buyimg.com/mobilecms/s750x750_jfs/t18874/284/771475030/80128/5c840832/5aa5e1b1N97b069e4.jpg!q80.dpg',},
      {num:1,is:false,detail:'【到手仅199！满199减10元！自营旗舰五叶遥控落地扇！世界500强品质保证】爆售超150万台！9种风量特设静音档！7H遥控预约定时安心省力！5片航空翼型扇叶柔和出风！LED大屏显示更多清凉好货',title:'美的（Midea）FS40-13ER 五叶遥控落地扇/电风扇',isFollow:false,mid:2,say:'49万条评价 好评率98%',price:209.00,good1:'遥控控制',good2:'多叶柔风',
        srcz:'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t7792/270/1427377021/1088/6d981d81/599cf545Na1f3ceb4.png',
        src:'https://img10.360buyimg.com/n2/s240x240_jfs/t23545/212/296776452/187321/72845cc5/5b2b54f0N0af808ed.jpg!q70.jpg.webp',
        src1:'http://m.360buyimg.com/mobilecms/s750x750_jfs/t20671/229/316693511/78876/8015089b/5b092faeNa1e50704.jpg!q80.dpg',
        src2:'http://m.360buyimg.com/mobilecms/s750x750_jfs/t2842/190/1889826552/271512/2e53b8f/574d4c85N6462f7b5.jpg!q80.dpg',
        src3:'http://m.360buyimg.com/mobilecms/s750x750_jfs/t18595/125/2422018682/102220/e1b5a29f/5af26287N15a0de45.jpg!q80.dpg',
        src4:'http://m.360buyimg.com/mobilecms/s750x750_jfs/t16741/315/2340066220/41058/f09b73a5/5af2628cNc1c1074a.jpg!q80.dpg',},
      {num:1,is:false,detail:'【秒杀价299元！风动全城 全民消暑！】上市半年爆售14万台！安全无叶静柔无声，智能遥控，3档风量调节，渐弱式静音睡眠风，特有香薰功能，防倾倒设计，时尚外观点缀家居！更多特惠',title:' 艾美特（Airmate）电风扇 塔扇 无叶风扇 遥控 带香薰功能 FT41R',isFollow:false,mid:3,say:'8万条评价 好评率98%',price:299.00,good1:'',good2:'易拆洗',
        srcz:'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t7792/270/1427377021/1088/6d981d81/599cf545Na1f3ceb4.png',
        src:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t20518/325/545870704/137793/b8b7cdaa/5b0fdce7N35af8b3b.jpg!q80.dpg',
        src1:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t20827/41/879913553/160607/8006660a/5b1a5304N75d4bd48.jpg!q80.dpg',
        src2:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t4189/20/762643775/303080/c8eeefb1/58b95e5cN5fc35cf2.jpg!q80.dpg',
        src3:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t3046/231/7664908200/253097/689a1560/58b95e70N973a0456.jpg!q80.dpg',
        src4:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t5899/101/7132744658/157184/8fd121af/596efbe5Nb5d6065c.jpg!q80.dpg',
      },
      {num:1,is:false,detail:'【风动全城 全民消暑！舒心解意，格力伴你静享品质清凉风】半年爆售25万台，5叶舒爽柔风，6米远程遥控，3档风速，3种风类，1级能效，7.5小时定时！静享睡眠，动享酷暑！》》格力风扇专场',title:'格力（GREE）FD-40X64Bh5 五叶遥控落地扇/电风扇',say:'15万条评价 好评率98%',isFollow:false,mid:4,price:209,good1:'遥控控制',good2:'多页柔风',
        srcz:'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t7792/270/1427377021/1088/6d981d81/599cf545Na1f3ceb4.png',
        src:'https://img14.360buyimg.com/n2/s240x240_jfs/t24514/280/266418579/114159/22f88314/5b2a5cb2Nf6f41805.jpg!q70.jpg.webp',
        src1:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t20683/347/166515740/607259/7c763e9b/5affeee0N82f23bc2.png!q80.webp',
        src2:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t14377/272/1004546345/159674/55e30bfd/5a405310Naebfc87f.jpg!q80.dpg',
        src3:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t16243/26/857596706/153413/b73d5508/5a40530cN00656ce1.jpg!q80.dpg',
        src4:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t12952/321/2456950980/118879/2a7b75ce/5a405315N7abdca20.jpg!q80.dpg',


      },
      {num:1,is:false,detail:'【到手仅199！满199减10元！自营旗舰五叶遥控落地扇！世界500强品质保证】爆售超150万台！9种风量特设静音档！7H遥控预约定时安心省力！5片航空翼型扇叶柔和出风！LED大屏显示更多清凉好货',title:'美的（Midea） FS40-13GR 大风量电风扇/落地扇/智能家用电风扇/遥控风扇电扇',isFollow:false,mid:5,say:'5万条评价 好评率98%',price:239,good1:'遥控控制',good2:'易拆洗',
        srcz:'https://img11.360buyimg.com/jdphoto/s48x28_jfs/t7792/270/1427377021/1088/6d981d81/599cf545Na1f3ceb4.png',
        src:'https://img13.360buyimg.com/n2/s240x240_jfs/t20575/40/1501415497/374201/882a63c3/5b2b0976Nf93613a4.jpg!q70.jpg.webp',
        src1:'https://img13.360buyimg.com/n2/s240x240_jfs/t20575/40/1501415497/374201/882a63c3/5b2b0976Nf93613a4.jpg!q70.jpg.webp',
        src2:'https://img13.360buyimg.com/n2/s240x240_jfs/t20575/40/1501415497/374201/882a63c3/5b2b0976Nf93613a4.jpg!q70.jpg.webp',
        src3:'https://img13.360buyimg.com/n2/s240x240_jfs/t20575/40/1501415497/374201/882a63c3/5b2b0976Nf93613a4.jpg!q70.jpg.webp',
        src4:'https://img13.360buyimg.com/n2/s240x240_jfs/t20575/40/1501415497/374201/882a63c3/5b2b0976Nf93613a4.jpg!q70.jpg.webp',
      },],
    id:1
  }
]

jd.get('/getHotImg',function (req,res) {
  setMyHeader(res);
  res.send(JSON.stringify(hotImg))
});
jd.get('/getHotImg1',function (req,res) {
  setMyHeader(res);
  res.send(JSON.stringify(hotImg1))
});
jd.get('/getHotImg2',function (req,res) {
  setMyHeader(res);
  res.send(JSON.stringify(hotImg2))
});
jd.get('/getNav',function (req,res) {
  setMyHeader(res);
  res.send(JSON.stringify(nav))
});
jd.get('/getIsclick',function (req,res) {
  let id=req.query.num
  hotImg.forEach((value,)=>{
    show(value,id)
  })
  hotImg1.forEach((value)=>{
    show(value,id)
  })
  hotImg2.forEach((value)=>{
    show(value,id)
  })
  setMyHeader(res),
    res.send('ok')
});

//获取浏览足迹
jd.get('/getOld',function (req,res) {

  let data=[];
  data=[];
  hotImg.forEach((val)=>{
    if(val.isclick){
      data.push(val)
    }
  })
  hotImg1.forEach((val)=>{
    if(val.isclick){
      data.push(val)
    }
  })
  hotImg2.forEach((val)=>{
    if(val.isclick){
      data.push(val)
    }
  })
  if(data.length>0){
    data.push({msg:true})
  }else{
    data.push({msg:false})
  }
  setMyHeader(res)

  res.send(JSON.stringify(data))
});

//清空所有浏览足迹
jd.get('/clearOld',function (req,res) {
  hotImg.forEach((val)=>{
    val.isclick=false
  })
  hotImg1.forEach((val)=>{
    val.isclick=false
  })
  hotImg2.forEach((val)=>{
    val.isclick=false
  })
  setMyHeader(res)
  res.send({msg:'ok'})
});

//获取每个一类商品的详情页
jd.get('/getSomeClass',function (req,res) {
  let data='';
  fan.forEach((val)=>{
    if(val.id==req.query.id){
      data=val.data
    }
  })
  setMyHeader(res)
  res.send(JSON.stringify(data))
});

jd.get('/getMany',function (req,res) {
  let num=req.query.id
  let msg=''
  fan.forEach(val=>{
    if(val.id==1){
      val.data.forEach(v=>{
        if(v.mid==num){
          msg=v
        }
      })
    }
  })
  setMyHeader(res)
  res.send(JSON.stringify(msg))
});

//判断是否收藏
jd.get('/addCar',function (req,res) {
  let numbers=req.query.num;
  let id=req.query.id;
  fan.forEach(v=>{
    if(v.id==1){
      v.data.forEach(val=>{
        if(val.mid==id){
          val.isFollow=true;
          val.num=numbers
        }
      })
    }
  });
  setMyHeader(res);
  res.send({msg:'ok'})
});

//寻找为true的isfollow

jd.get('/foundTrue',function (req,res) {
  let arr=[]
  let n=0;
  arr=[]
  n=0
  fan.forEach(val=>{
    if(val.id==1){
      val.data.forEach(v=>{
        if(v.isFollow){
          arr.push(v)
          n++
        }
      })
    }
  })
  setMyHeader(res)
  res.send(JSON.stringify({msg:arr,ns:n}))
});

//修改数量
jd.get('/makeNum',function (req,res) {
  let v1=req.query.value1
  let v2=req.query.value2
  // console.log(v1,v2)
  fan.forEach(val=>{
    if(val.id==1){
      val.data.forEach(v=>{
        if(v.mid==v2){
          v.num=Number(v1)
          // console.log(v.num)
        }
      })
    }
  })
  setMyHeader(res)
  res.send(JSON.stringify({msg:'ok'}))
});

//取消购物车

jd.get('/delBuy',function (req,res) {
  let id=req.query.id
  // let s=req.query.is
  let s='';
  fan.forEach(val=>{
    if(val.id==1){
      val.data.forEach(v=>{
        console.log(id);
        if(v.mid==id){
          v.is=!v.is;
          s=v.is
        }
      })
    }
  });

  let p=0;
  fan.forEach(tv=>{
    if(tv.id==1){
      tv.data.forEach(t=>{
        if(!t.is&&t.isFollow){
          p+=t.num*t.price
        }
      })
    }
  });

  // console.log(s,id)
  setMyHeader(res)
  res.send(JSON.stringify({msg:s,n:id,p:p}))
});


//重新算价格
jd.get('/getstart',function (req,res) {
  let p=0;
  fan.forEach(m=>{
    if(m.id==1){
      m.data.forEach(mon=>{
        mon.is=false;
        if(!mon.is&&mon.isFollow){
          p+=mon.num*mon.price
        }
      })
    }
  })
  setMyHeader(res)
  res.send(JSON.stringify({p:p}))
})

//判断是否已经添加页面
jd.get('/getready',function (req,res) {
  let rs='';
  fan.forEach(r=>{
    if(r.id==1){
      r.data.forEach(rr=>{
        if(rr.mid==req.query.id){
          if(rr.isFollow){
            rs=rr.num
          }
        }
      })
    }
  })
  setMyHeader(res)
  res.send(JSON.stringify({msg:rs}))
});



//重新算价格
jd.get('/getstart',function (req,res) {
  let p=0;
  fan.forEach(m=>{
    if(m.id==1){
      m.data.forEach(mon=>{
        mon.is=false;
        if(!mon.is&&mon.isFollow){
          p+=mon.num*mon.price
        }
      })
    }
  });
  setMyHeader(res);
  res.send(JSON.stringify({p:p}))
});

//判断是否已经添加页面
jd.get('/getready',function (req,res) {
  let rs='';
  fan.forEach(r=>{
    if(r.id==1){
      r.data.forEach(rr=>{
        if(rr.mid==req.query.id){
          if(rr.isFollow){
            rs=rr.num
          }
        }
      })
    }
  })
  setMyHeader(res);
  res.send(JSON.stringify({msg:rs}))
});







jd.get('/changBuy',function (req,res) {
  let id=req.query.id
  fan.forEach(c=>{
    if(c.id==1){
      c.data.forEach(v=>{
        if(v.mid==id){
          v.isFollow=false
        }
      })
    }
  })
  setMyHeader(res)
  res.send(JSON.stringify({msg:'ok'}))
});






//1.热卖榜
//饮用水
jd.get('/getWater',(req,res)=>{
  setMyHeader(res)
  res.send(JSON.stringify(water))
});
//2.根据ID查看详情   http://localhost:10086/getWaterById?id=1
jd.get('/getWaterById',(req,res)=>{
  setMyHeader(res);
  //获取请求携带的参数  商品的ID
  let id=req.query.id;
  let oneWater={mag:'未找到该商品'};
  water.forEach((water,index,arr)=>{
    if(water.id==id){
      oneWater=water;
      return;
    }
  });
  res.send(JSON.stringify(oneWater))
});

//3.添加关注 http://localhost:10086/collect?id=1&isCollected=false
jd.get('/collect',(req,res)=>{
  setMyHeader(res);
  let id=req.query.id;
  let isColl=req.query.isCollected;
  let data='';//保存要修改商品关注状态
  water.forEach((water)=>{
    if(water.id==id) {
      if(isColl==='true'){
        water.isCollected=true
      }else{
        water.isCollected=false;
      }
      data=water.isCollected;
      return;
    }
  });
  res.send(JSON.stringify({msg:'ok',isColl:data}))
});


//手机商品
//1.
jd.get('/getPhone',(req,res)=>{
  setMyHeader(res)
  res.send(JSON.stringify(phone))
});
//2.根据ID查看详情   http://localhost:10086/getPhoneById?id=1
jd.get('/getPhoneById',(req,res)=>{
  setMyHeader(res);
  //获取请求携带的参数  商品的ID
  let id=req.query.id;
  let onePhone={mag:'未找到该商品'};
  phone.forEach((phone,index,arr)=>{
    if(phone.id==id){
      onePhone=phone;
      return;
    }
  });
  res.send(JSON.stringify(onePhone))
});
//3.添加关注 http://localhost:10086/collect?id=1&isCollected=false
jd.get('/collect',(req,res)=>{
  setMyHeader(res)
  let id=req.query.id;
  let isColl=req.query.isCollected;
  let data='';//保存要修改商品关注状态
  phone.forEach((phone)=>{
    if(phone.id==id) {
      if(isColl==='true'){
        phone.isCollected=true
      }else{
        phone.isCollected=false;
      }
      data=phone.isCollected;
      return;
    }
  });
  res.send(JSON.stringify({msg:'ok',isColl:data}))
});

//厨房小店
jd.get('/getCheck',(req,res)=>{
  setMyHeader(res)
  res.send(JSON.stringify(check))
});
//2.根据ID查看详情   http://localhost:10086/getPhoneById?id=1
jd.get('/getCheckById',(req,res)=>{
  setMyHeader(res);
  //获取请求携带的参数  商品的ID
  let id=req.query.id;
  let oneCheck={mag:'未找到该商品'};
  check.forEach((check,index,arr)=>{
    if(check.id==id){
      oneCheck=check;
      return;
    }
  });
  res.send(JSON.stringify(oneCheck))
});
//3.添加关注 http://localhost:10086/collect?id=1&isCollected=false
jd.get('/collect',(req,res)=>{
  setMyHeader(res);
  let id=req.query.id;
  console.log(id);
  let isColl=req.query.isCollected;
  let data='';//保存要修改商品关注状态
  check.forEach((check)=>{
    if(check.id==id) {
      if(isColl==='true'){
        check.isCollected=true
      }else{
        check.isCollected=false;
      }
      data=check.isCollected;
      console.log(data);
      return;
    }
  });
  res.send(JSON.stringify({msg:'ok',isColl:data}))
});
//跨品类
jd.get('/getCross',(req,res)=>{
  setMyHeader(res);
  res.send(JSON.stringify(cross))
});

//爱穿搭轮播图
//1：提供轮播图
jd.get('/getslides',(req,res)=>{
  setMyHeader(res);
  res.send(JSON.stringify(slides))
});
//2.轮播图
jd.get('/getclothes',(req,res)=>{
  setMyHeader(res);
  res.send(JSON.stringify(clothes))
});
//设计师轮播图
jd.get('/getdegs',(req,res)=>{
  setMyHeader(res);
  res.send(JSON.stringify(degs))
});






//登陆后台

//推荐物品
let hot=[
  {
    img:'https://m.360buyimg.com/mobilecms/s750x750_g8/M03/0F/14/rBEHZ1C1vF4IAAAAAAEPodGHse0AADDggNgYB8AAQ-5974.jpg!q80.jpg.webp',
    bookId:1,isCollected:false,title:'罗技（Logitech）K120键盘',price:45.00,
  },{
    img:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t12784/180/2636118319/77730/bc216e8c/5a45f0ebNd50ff8a7.jpg!q80.jpg.webp',
    bookId:2,isCollected:false,title:'雷士 浪漫温馨家居卧室过道走廊LED节能小夜灯',price:19.90,
  },{
    img:'https://img14.360buyimg.com/n7/jfs/t4831/198/2044532416/118622/56acbc69/58f6cebeNe454f9ec.jpg.dpg',
    bookId:3,isCollected:false,title:'罗技（Logitech）MK120鼠标键盘套装 三年质保',price:78,
  },{
    img:'https://img14.360buyimg.com/n7/jfs/t20830/85/1073904637/15025/6b72d63f/5b1f39bbN5a810b14.jpg.dpg',
    bookId:4,isCollected:false,title:'Apple Pencil手写笔',price:788.00,
  },{
    img:'https://img14.360buyimg.com/n7/jfs/t2980/46/1804528364/112899/88b0584c/5791c8e9Nd16b86ad.jpg.dpg',
    bookId:5,isCollected:false,title:'美的 中式抽油烟机性价比之选 AS7210-G1',price:899,
  },{
    img:'https://img14.360buyimg.com/n7/jfs/t20905/311/1574921117/342782/616560c8/5b2cc636N2c800547.jpg.dpg',
    bookId:6,isCollected:false,title:' 樱雪 小户型侧吸式抽油烟机H1221W(Q)',price:549,
  },{
    img:'https://img14.360buyimg.com/n7/jfs/t18595/339/1052523652/77250/b4afe949/5abb0ec6N6dbbddf1.jpg.dpg',
    bookId:7,isCollected:false,title:' Apple iPad 平板电脑 2018年新款9.7英寸',price:2488,
  },{
    img:'https://img14.360buyimg.com/n7/jfs/t10072/231/1597945576/58010/1512bd1b/59e35198N2e697952.jpg.dpg',
    bookId:8,isCollected:false,title:' 摆渡人【荐书联盟推荐】',price:16.20,
  },{
    img:'https://img14.360buyimg.com/n7/jfs/t7390/67/1641043178/148001/c2707ea8/599e55c1N8df8213c.jpg.dpg',
    bookId:9,isCollected:false,title:' 雷士（NVC）插电五孔插座光控夜灯',price:29.90,
  },{
    img:'https://img14.360buyimg.com/n7/jfs/t8701/321/1805249278/105280/d0092823/59bf6491N46d8fbd0.jpg.dpg',
    bookId:10,isCollected:false,title:' led小夜灯插电声光控光控感应',price:17.9,
  },{
    img:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t5569/210/2444054820/291206/d9115766/591aaab1N86b1cb3e.jpg!q80.jpg.webp',
    bookId:11,isCollected:false,title:' 朗美科 床头过道玄关展柜婴儿房喂奶灯',price:59,
  }];


//用户登录  usersname 账号 userspwd 密码 autonoym 是否认证 jd-id编号  account 默认昵称
// head  头像
let users=[
  {usersname:'王坤朋',userspwd:'666666',autonym:false,jd_Id:1,account:'四月',head:'https://m.360buyimg.com/mobilecms/s750x750_g8/M03/0F/14/rBEHZ1C1vF4IAAAAAAEPodGHse0AADDggNgYB8AAQ-5974.jpg!q80.jpg.webp'},
  {usersname:'王宇',userspwd:'666666',autonym:false,jd_Id:2,account:'五月',head:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t5569/210/2444054820/291206/d9115766/591aaab1N86b1cb3e.jpg!q80.jpg.webp'},
  {usersname:'夏俊敏',userspwd:'666666',autonym:false,jd_Id:3,account:'六月',head:'https://img14.360buyimg.com/n7/jfs/t20905/311/1574921117/342782/616560c8/5b2cc636N2c800547.jpg.dpg'},
  {usersname:'李林炎',userspwd:'666666',autonym:false,jd_Id:3,account:'六月',head:'https://img14.360buyimg.com/n7/jfs/t20905/311/1574921117/342782/616560c8/5b2cc636N2c800547.jpg.dpg'},
  {usersname:'55',userspwd:'666666',autonym:false,jd_Id:3,account:'六月',head:'https://img14.360buyimg.com/n7/jfs/t20905/311/1574921117/342782/616560c8/5b2cc636N2c800547.jpg.dpg'},
];
jd.get('/login',(req,res)=>{
  // setMyheader(res);
  setMyHeader(res);
  let name=req.query.username;  //暂理解为 获取请求中的 usersname数据
  let pwd=req.query.pwd;     // 获取请求中的userspwd数据
  console.log(name,pwd);
  let data='';
  let isLogin=false;     // 布尔类型  false代表没有此用户
  users.forEach((person)=>{
    if(person.usersname==name&&person.userspwd==pwd){
      data={statue:1,msg:"登陆成功",jdid:person};
      isLogin=true;
      person.autonym=true;
    }
  });
  if(!isLogin){
    data={status:0,msg:"不存在此用户"};
  }
  res.send(data);
});

//用户注册
jd.get('/register',(req, res)=>{
  // setMyheader(res);
  setMyHeader(res);
  let name=req.query.username;
  let pwd=req.query.pwd1;
  console.log(req.query);
  // let obj={usersname:name,userspwd:pwd,autonym:false, jd_Id:users.length+1,account:'用户名'};
  let obj= new Object(); /*{usersname:name,userspwd:pwd,autonym:false,}*/
  obj.usersname=name;
  obj.userspwd=pwd;
  obj.autonym=false;
  obj.jd_Id=users.length+1;
  obj.account='用户名';
  users.push(obj);
  res.send({statue:1,msg:"登录成功"});
});
//判断账号是否重复
jd.get('/yz',(req,res)=>{
  setMyHeader(res);
  let name=req.query.username;
  let data={};
  let isTrue=true;
  users.forEach((person)=>{
    if (person.usersname===name){
      data={statue:0,msg:"用户名重复"};
      isTrue=false;
    }
  });
  if (isTrue) {
    data = {statue:1,msg:'用户名可用'};

  }
  res.send(data);
});

//商品推荐
jd.get('/comm',(req,res)=>{
  // setMyheader(res);
  setMyHeader(res);
  res.send(hot);
});

//是否已经登录

jd.get('/getis',(req,res)=>{
  let is=false;
  let one='';
  users.forEach(p=>{
    if(p.autonym){
      is=true;
      one=p;
    }
  });
  setMyHeader(res);
  res.send(JSON.stringify({msg:is,dy:one}))
});











//发现接口



//轮播图数据
let slids=['https://img13.360buyimg.com/jdphoto/jfs/t16819/320/786190875/224761/5ffd0149/5aa8ba25Ne60e7133.png',
  'https://img30.360buyimg.com/jdphoto/jfs/t20683/100/452109090/99159/469febc6/5b0e5a59N50f5376c.png',
  'https://img13.360buyimg.com/jdphoto/jfs/t16819/320/786190875/224761/5ffd0149/5aa8ba25Ne60e7133.png',
];

//热门图书
let hotBooks=[
  {
    img:'https://img11.360buyimg.com/jdphoto/s340x240_jfs/t14998/23/2140593174/123138/37690cc5/5a741a46Ndb98761f.jpg.dpg',
    bookId:1,title:'8895',isCollected:false,price:'1w+人阅读',bookSum:'电视 如何选购合适尺寸的电视机,HDR电视与非HDR电视说明',
  },{
    img:'https://img11.360buyimg.com/jdphoto/s340x240_jfs/t15277/80/2146237007/57766/79af3807/5a741a4bNde0f5721.jpg.dpg',
    bookId:2,title:'5638',isCollected:false,price:' 1w+人阅读',bookSum:'空调 变频空调与定频空调优劣势比较,空调能效等级及新鲜卖点',
  },
  {
    img:'https://img11.360buyimg.com/jdphoto/s340x240_jfs/t16705/25/391161302/63800/d2387225/5a741a4fN49019f5b.jpg.dpg',
    bookId:3,title:'1w+',isCollected:false,price:'3w+人阅读',bookSum:'冰箱 冰箱容量选择,变频冰箱与定频冰箱优劣势对比等',
  },{
    img:'https://img11.360buyimg.com/jdphoto/s340x240_jfs/t14893/253/2158598715/63713/68d3794c/5a741a53Ne65bd41e.jpg.dpg',
    bookId:4,title:'2w+',isCollected:false,price:'6w+人阅读',bookSum:'洗衣机 洗衣机分类介绍,容量选择,变频与定频洗衣机对比说明',},
  {
    img:'https://img11.360buyimg.com/jdphoto/s340x240_jfs/t15979/235/2092936501/60709/b8bfa02d/5a741a58N776de6d2.jpg.dpg',
    bookId:5,title:'50',isCollected:false,price:'3w+人阅读 ',bookSum:'电动牙刷 电动牙刷清洁原理、清洁模式介绍,软毛、硬毛特点及适应人群',
  },
  {
    img:'https://img11.360buyimg.com/jdphoto/s340x240_jfs/t16903/192/427107564/58115/5b14f0db/5a741a5dN014ff172.jpg.dpg',
    bookId:6,title:'1020',isCollected:false,price:'6127人阅读',bookSum:'电饭煲 电饭煲多种分类,容量选择,金属内胆与非金属内胆特点说明',
  },
  {
    img:'https://img11.360buyimg.com/jdphoto/s340x240_jfs/t15403/129/2200182272/47861/16a0742c/5a741a61N902cb86f.jpg.dpg',
    bookId:7,title:'8982',isCollected:false,price:'3w+人阅读',bookSum:'燃气热水器 燃气热水器分类介绍,相关选购技巧等',
  },
  {
    img:'https://img11.360buyimg.com/jdphoto/s340x240_jfs/t14641/349/2140703560/37806/e0231cf3/5a741a65Na520ae14.jpg.dpg',
    bookId:8,title:'1008',isCollected:false,price:'9130人阅读',bookSum:'豆浆机 如何选购合适容量的豆浆机,常见功能说明等',
  }
];

//所有书籍
let books=[
  {
    img:'https://m.360buyimg.com/mobilecms/jfs/t2248/71/2714064956/379437/c3c42c98/5715ff6dN97d4b2d2.jpg!q70.jpg.dpg',
    bookId:1,title:'一兜糖..',price:'6w+人阅读',bookSum:'【主妇购物车】一批10元厨房小工具驾到',
    img1:'https://m.360buyimg.com/mobilecms/jfs/t16942/176/2381081509/121011/479eb166/5af14e42N63ef7d54.jpg!q70.jpg.dpg',

  },{
    img:'https://m.360buyimg.com/mobilecms/jfs/t23224/272/237068949/1045062/fe64f015/5b29d10fN3cd70eff.png',
    bookId:2,title:'好物值..',price:'259人阅读',bookSum:'来一波回忆杀!你有多少七龙珠的珍藏?  ',
    img1:'https://p1.meituan.net/deal/88da7f44c2f1ff105ba2281fd1400006482188.jpg@368w_208h_1e_1c',

  },{
    img:'https://m.360buyimg.com/mobilecms/jfs/t20227/291/1230084360/667617/f8c649c7/5b220efaN37fbfd9e.png',
    bookId:3,title:'喵喵购',price:'275人阅读',bookSum:'过敏星人的除菌新法宝,松下空气消毒净化器报道',
    img1:'https://m.360buyimg.com/mobilecms/jfs/t21247/122/1098403247/182563/d09d96d2/5b1ff67dN58aa9a8f.jpg!q70.jpg.dpg',

  },
  {
    img:'https://m.360buyimg.com/mobilecms/jfs/t22318/32/811886904/110000/1f395f8/5b18ced6N8c043226.jpg!q70.jpg.dpg',
    bookId:4,title:'Vivian22',price:'208人阅读',bookSum:'宝宝用品选购攻略,你买对了吗?',
    img1:'https://m.360buyimg.com/mobilecms/jfs/t20425/205/847855947/52402/bb814808/5b19fdb8Nc365cf7d.jpg!q70.jpg.dpg',

  },];
let books1=[
  {
    img:'https://m.360buyimg.com/mobilecms/jfs/t22132/232/1333583139/101892/a6ae4732/5b25e2e9Na284dac0.jpg!q70.jpg.dpg',
    bookId:5,title:'极果',price:'1501人阅读',bookSum:'轻便舒适的防晒衣,防晒能力比防晒霜还好 ',
    img1:'https://m.360buyimg.com/mobilecms/jfs/t20425/205/847855947/52402/bb814808/5b19fdb8Nc365cf7d.jpg!q70.jpg.dpg',

  }
];
let books2=[
  {
    img:'https://m.360buyimg.com/mobilecms/jfs/t23332/181/85281220/78755/11b8a0b3/5b24df5bNa1ddf8a8.jpg!q70.jpg.dpg',
    bookId:6,title:' 妈妈帮..',price:'221人阅读',bookSum:'不可思议!宝宝竟然还记得子宫里的事',
    img1:'https://m.360buyimg.com/mobilecms/jfs/t20425/205/847855947/52402/bb814808/5b19fdb8Nc365cf7d.jpg!q70.jpg.dpg',

  },{
    img:'https://m.360buyimg.com/mobilecms/jfs/t20863/268/1174956458/254143/8d8053fd/5b21f173N991643ca.jpg!q70.jpg.dpg',
    bookId:7,title:'心悦书..',price:'645人阅读',bookSum:'看完这几本书你会发现,能套路你的人越来越少了',
    img1:'https://m.360buyimg.com/mobilecms/jfs/t20425/205/847855947/52402/bb814808/5b19fdb8Nc365cf7d.jpg!q70.jpg.dpg',

  }
];
let detail1=[
  {
    detail2:[
      {
        img:'https://m.360buyimg.com/mobilecms/jfs/t21592/365/447133210/184449/7eba6c50/5b0e1614Nae55b2d3.jpg!q70.jpg',
        bookId:1,

      },{
        img:'https://m.360buyimg.com/mobilecms/jfs/t21067/144/445210040/297029/a19c6da1/5b0e1616N729b9f79.jpg!q70.jpg',
        bookId:2,

      },{
        img:'https://m.360buyimg.com/mobilecms/jfs/t21352/62/446160996/209479/c7211004/5b0e1616N46f05062.jpg!q70.jpg',
        bookId:3,
        isCollected:false
      },{
        img:'https://m.360buyimg.com/mobilecms/jfs/t20506/226/455833419/213783/8daf870f/5b0e1615Ne0b6634a.jpg!q70.jpg',
        bookId:4,

      },{
        img:'https://m.360buyimg.com/mobilecms/jfs/t21262/99/498170046/144058/f2f2a0df/5b0e1614Na4adf0bb.jpg!q70.jpg',
        bookId:5,

      },{
        img:'https://m.360buyimg.com/mobilecms/jfs/t21043/148/439560171/201447/64ff6e43/5b0e1616N87e4e5a9.jpg!q70.jpg',
        bookId:6,

      },
    ],
    bookId:1
  },
  {
    detail2:[
      {
        img:'https://m.360buyimg.com/mobilecms/jfs/t21106/152/446902184/91903/190b683a/5b0e13b1N1f1e6123.jpg!q70.jpg',
        bookId:1,
      },{
        img:'https://m.360buyimg.com/mobilecms/jfs/t22420/263/475130376/160592/756eeb8e/5b0e13b4Nda340890.jpg!q70.jpg',
        bookId:2,
      },{
        img:'https://m.360buyimg.com/mobilecms/jfs/t20344/362/444954295/232259/29a2a83a/5b0e13b6N61b09a9d.jpg!q70.jpg',
        bookId:3,
      },{
        img:'https://m.360buyimg.com/mobilecms/jfs/t20701/105/446211402/216159/ab281e68/5b0e13b4Na0a1f554.jpg!q70.jpg',
        bookId:4,
      },{
        img:'https://m.360buyimg.com/mobilecms/jfs/t21739/37/444446105/188864/75a5641d/5b0e13b3N1509f6a3.jpg!q70.jpg',
        bookId:5,
      },{
        img:'https://m.360buyimg.com/mobilecms/jfs/t21709/6/444814593/118904/731d152a/5b0e13b3N04ce563a.jpg!q70.jpg',
        bookId:6,
      },
    ],
    bookId:2
  }
];
//好吃的
let Tasty1=[
  {
    img:'https://m.360buyimg.com/babel/s746x341_jfs/t10294/51/1283380258/112185/8088ad63/59decf11N3d1369ea.jpg!q70.dpg',
  },
];
let Tasty11=[
  {
    img:'https://m.360buyimg.com/babel/jfs/t11089/55/321501700/18538/ccd8aca4/59ed6d10Na4e39e84.png',
  }
];
let Tasty2=[
  {
    img:'https://m.360buyimg.com/babel/s199x199_jfs/t13765/283/547914936/442000/e53c3d89/5a0e6f67N4d7aa247.jpg!q70.dpg',
    bookId:1,price:'22.9',price1:'32.9',bookSum:'已售罄 辣个火锅 自热火锅 方便火锅 懒人火锅 好吃懒做系列 爽辣牛油素菜版400g 1',
  },
  {
    img:'https://m.360buyimg.com/babel/s199x199_jfs/t5626/343/292524493/284015/272a2845/591e90b4N83175705.jpg!q70.dpg',
    bookId:2,price:'33.9',price1:'42.9',bookSum:'已售罄 蜀道香 肉干肉脯 四川零食特产 天椒霸道麻辣牛肉干200g 157388条评价 好评',
  },
  {
    img:'https://m.360buyimg.com/babel/s199x199_jfs/t13903/318/372830385/304296/c63dc43f/5a0a7f5aN434120a6.jpg!q70.dpg',
    bookId:3,price:'38.9',price1:'52.9',bookSum:'已售罄 蜀道香 肉干肉脯 四川零食特产 天椒霸道麻辣牛肉干200g 157388条评价 好评',
  },
  // {
  //   img:'https://m.360buyimg.com/babel/s211x211_jfs/t16711/351/572125965/503317/3758af71/5a94c171Ne90fd22e.jpg!q70.dpg',
  //   bookId:4,price:'39.8',price1:'42.9',bookSum:'已售罄 悠米 坚果炒货 休闲零食 混合坚果 什锦果仁罐装270g 64206条评价 好评99%',
  // },
  // {
  //   img:'https://m.360buyimg.com/babel/s199x199_jfs/t13765/283/547914936/442000/e53c3d89/5a0e6f67N4d7aa247.jpg!q70.dpg',
  //   bookId:1,price:'22.9',price1:'32.9',bookSum:'已售罄 辣个火锅 自热火锅 方便火锅 懒人火锅 好吃懒做系列 爽辣牛油素菜版400g 1',
  // },
  // {
  //   img:'https://m.360buyimg.com/babel/s199x199_jfs/t5626/343/292524493/284015/272a2845/591e90b4N83175705.jpg!q70.dpg',
  //   bookId:2,price:'33.9',price1:'45.9',bookSum:'已售罄 蜀道香 肉干肉脯 四川零食特产 天椒霸道麻辣牛肉干200g 157388条评价 好评',
  // },
  // {
  //   img:'https://m.360buyimg.com/babel/s199x199_jfs/t13903/318/372830385/304296/c63dc43f/5a0a7f5aN434120a6.jpg!q70.dpg',
  //   bookId:3,price:'38.9',price1:'55.9',bookSum:'已售罄 蜀道香 肉干肉脯 四川零食特产 天椒霸道麻辣牛肉干200g 157388条评价 好评',
  // },
  // {
  //   img:'https://m.360buyimg.com/babel/s211x211_jfs/t16711/351/572125965/503317/3758af71/5a94c171Ne90fd22e.jpg!q70.dpg',
  //   bookId:4,price:'39.8',price1:'64.9',bookSum:'已售罄 悠米 坚果炒货 休闲零食 混合坚果 什锦果仁罐装270g 64206条评价 好评99%',
  // },
];
let Tasty3=[
  {
    img:'https://m.360buyimg.com/babel/jfs/t21826/171/1002314560/65302/da56cc7/5b1debaaN2b95a2d7.png',
  },
  {
    img:'https://m.360buyimg.com/babel/s187x259_jfs/t15472/8/2367966226/30831/58159847/5aa79f05N8a8bf045.jpg!q70.dpg',
  },
  {
    img:'https://m.360buyimg.com/babel/s187x259_jfs/t17779/35/2349622402/31760/442f46f9/5af1064bNf0ddf99e.jpg!q70.dpg',
  },
  {
    img:'https://m.360buyimg.com/babel/s187x259_jfs/t17938/124/2351897044/29665/dcfe8d04/5af15de0N32f7b2c7.jpg!q70.dpg',
  },
  {
    img:'https://m.360buyimg.com/babel/s187x259_jfs/t22123/5/758928976/52699/7dbbdfce/5b17401fN76109833.jpg!q70.dpg',
  },
  {
    img:'https://m.360buyimg.com/babel/s187x259_jfs/t20671/203/1098755874/95271/ab2ee401/5b208c73N4b0eaa4c.jpg!q70.dpg',
  },
  {
    img:'https://m.360buyimg.com/babel/s187x259_jfs/t18055/297/2341898303/58114/a3f6eedf/5af1157aNac59d628.jpg!q70.dpg',
  },
  {
    img:'https://m.360buyimg.com/babel/jfs/t20173/325/1205919234/79530/c4c7c997/5b220ec1N2ea7aac6.png',
  },
  {
    img:'https://m.360buyimg.com/babel/jfs/t19072/217/2193217730/60719/56269809/5aea84e5N34840d7f.png',
  },
  {
    img:'https://m.360buyimg.com/babel/jfs/t19897/59/187393755/81559/1daf8950/5aea81ddN6008ad1f.png',
  },
  {
    img:'https://m.360buyimg.com/babel/s187x259_jfs/t21457/304/1125652466/74027/e78947de/5b208863N9abb223a.jpg!q70.dpg',
  },
  {
    img:'https://m.360buyimg.com/babel/s187x259_jfs/t17563/71/2173636568/64319/6f0b5504/5aea8221N750f8ca0.jpg!q70.dpg ',
  },
];
let Tasty4=[
  {
    img:'https://m.360buyimg.com/babel/jfs/t10258/184/2015802058/19348/c5d61c58/59ed6d19Nb8c3f26c.png',
  }
];
let Tasty5=[
  {
    img:'https://m.360buyimg.com/babel/s746x167_jfs/t19639/83/2121106256/140008/c31db926/5ae3e840N9b04e10d.jpg!q70.dpg',
    bookId:1,bookK:'×',
  },
  {
    img:'https://m.360buyimg.com/babel/jfs/t11527/300/1519819106/119329/6b3ca650/5a05af87Nc28de47f.png',
    bookId:2,bookK:'×',
  },
  {
    img:'https://m.360buyimg.com/babel/s318x71_jfs/t18667/245/321720485/60287/fbb33193/5a6b02b5N408cc60f.jpg!q70.dpg',
    bookId:3,bookK:'×',
  },
  {
    img:'https://m.360buyimg.com/babel/s318x71_jfs/t18976/275/2054219235/31396/5daefe9c/5ae04af2N20fb26bd.jpg!q70.dpg',
    bookId:4,bookK:'×',
  },
  {
    img:'https://m.360buyimg.com/babel/s318x71_jfs/t19513/194/2084351983/87784/95e89fad/5ae43da4N124c0bf4.jpg!q70.dpg',
    bookId:5,bookK:'×',
  },

];













//1.接口：提供轮播图
jd.get('/getslides',function (req, res) {
  setMyHeader(res);
  res.send(JSON.stringify(slids));
});

//2.获取热门图书
jd.get('/book/hot',(req,res)=>{
  console.log('接收到客户端 hot 请求');
  setMyHeader(res);
  res.send(JSON.stringify(hotBooks));
});

//3.获取图书列表(获取所有的图书)
jd.get('/getBooks',(req,res)=>{
  console.log('接收到客户端，getBooks请求');
  setMyHeader(res);
  res.send(JSON.stringify(books));//将所有的图书返回
});
//3.获取图书列表(获取所有的图书)
jd.get('/getBooks1',(req,res)=>{
  console.log('接收到客户端，getBooks请求');
  setMyHeader(res);
  res.send(JSON.stringify(books1));//将所有的图书返回
});
//3.获取图书列表(获取所有的图书)
jd.get('/getBooks2',(req,res)=>{
  console.log('接收到客户端，getBooks请求');
  setMyHeader(res);
  res.send(JSON.stringify(books2));//将所有的图书返回
});
//31.获取图书列表(获取所有的图书)
jd.get('/getdetail1',(req,res)=>{
  console.log('接收到客户端，getBooks请求');
  setMyHeader(res);
  res.send(JSON.stringify(detail1));//将所有的图书返回
});
//31.根据ID查找书籍   http://localhost:9999/getBookById?bookId=5,看是否得到这本书，是详情页里的多个图片
jd.get('/getBookById',(req,res)=>{
  setMyHeader(res);
  //获取请求携带的参数   书籍的ID
  let id=req.query.bookId;
  let oneBook={msg:'未找到该书籍'};
  detail1.forEach((book,index,arr)=>{
    if(book.bookId==id){
      oneBook=book.detail2;
      return;//结束遍历
    }
  });
  res.send(JSON.stringify(oneBook));//返回书籍对象
});
let collectBooks=[];//添加收藏的书籍
//q3.获取图书列表(获取所有的图书)
jd.get('/getTasty1',(req,res)=>{
  console.log('接收到客户端，getTasty1请求');
  setMyHeader(res);
  res.send(JSON.stringify(Tasty1));//将所有的图书返回
});
jd.get('/getTasty11',(req,res)=>{
  console.log('接收到客户端，getTasty11请求');
  setMyHeader(res);
  res.send(JSON.stringify(Tasty11));//将所有的图书返回
});
jd.get('/getTasty2',(req,res)=>{
  console.log('接收到客户端，getTasty2请求');
  setMyHeader(res);
  res.send(JSON.stringify(Tasty2));//将所有的图书返回
});
jd.get('/getTasty3',(req,res)=>{
  console.log('接收到客户端，getTasty3请求');
  setMyHeader(res);
  res.send(JSON.stringify(Tasty3));//将所有的图书返回
});
jd.get('/getTasty4',(req,res)=>{
  console.log('接收到客户端，getTasty4请求');
  setMyHeader(res);
  res.send(JSON.stringify(Tasty4));//将所有的图书返回
});
jd.get('/getTasty5',(req,res)=>{
  console.log('接收到客户端，getTasty5请求');
  setMyHeader(res);
  res.send(JSON.stringify(Tasty5));//将所有的图书返回
});
//4.根据ID删除书籍  http://localhost:9005?id=5    并返回删除后的书籍
jd.get('/delBook',(req,res)=>{
  console.log('delBook请求');
  setMyHeader(res);
  // console.log(req.query);
  //获取请求携带的参数   书籍的ID
  let id=req.query.bookId;//检查是否删除掉（http://localhost:9999/delBook?id=4）
  Tasty5.forEach((book,index,arr)=>{
    if(book.bookId==id){
      //删除该书籍
      arr.splice(index,1);
    }
  });
  res.send(JSON.stringify(Tasty5));//将删除之后的新数据返回
});

//5.根据ID查找书籍   http://localhost:9999/getBookById?bookId=5,看是否得到这本书,是详情页里的一个图片加上数据
// app.get('/getBookById',(req,res)=>{
//   setMyHeader(res);
//   //获取请求携带的参数   书籍的ID
//   let id=req.query.bookId;
//   let oneBook={msg:'未找到该书籍'};
//   hotBooks.forEach((book,index,arr)=>{
//     if(book.bookId==id){
//       oneBook=book;
//       return;//结束遍历
//     }
//   });
//   res.send(JSON.stringify(oneBook));//返回书籍对象
// });
//
// let collectBooks=[];//添加收藏的书籍

//6.添加收藏   http://localhost:9005/collect?bookId=5&isCollected=false
jd.get('/collect',(req,res)=>{
  setMyHeader(res);
  let id=req.query.bookId;//书籍ID
  let isColl=req.query.isCollected;// 'true'  'false'
  let data='';//保存要修改的书籍对象的收藏状态
  hotBooks.forEach((book)=>{
    if(book.bookId==id){
      if (isColl === 'true'){
        book.isCollected=true;//收藏
      } else{
        book.isCollected=false;//取消收藏
      }
      data=book.isCollected;
      return;
    }
  });
  // res.send(JSON.stringify(data));
  res.send(JSON.stringify({msg:id,isC:data}));
  console.log('isc'+isc)
});

//7. 获取收藏的书籍
jd.get('/getCollections',(req,res)=>{
  getCollection();//获取收藏的书籍
  setMyHeader(res);
  res.send(JSON.stringify(collectBooks));//将添加收藏的书籍返回
});

//8.添加书籍   http://localhost:9005?title='水浒传'&price=70.5&src=''&sum=''
jd.get('/addBook',(req,res)=>{
  setMyHeader(res);
  let title=req.query.title;//书名
  let price=req.query.price;//价格
  let src=req.query.src;//书封面
  let sum=req.query.sum;//简介
  //创建书籍对象
  let obj={};
  obj.bookId=books[books.length-1].bookId+1;//ID
  obj.img=src;
  obj.price=price;
  obj.isCollected=false;
  obj.bookSum=sum;
  obj.title=title;
  books.push(obj);
  res.send(JSON.stringify({msg:'ok'}));
  // res.send(JSON.stringify(books));
});



//检索收藏书籍,存入数据源中
let getCollection=()=>{
  collectBooks=[];//清空数据
  hotBooks.forEach(book=>{
    if(book.isCollected){
      collectBooks.push(book);//将已收藏的书籍添加到数组中
    }
  });
};




//设计师
let degs=[{img:'https://m.360buyimg.com/babel/s100x100_jfs/t15934/81/1585786153/135120/44a12fc1/5a56becfN921b276f.jpg!q70.dpg',title:'KITAYAMA 北山制包所 海女系列 ',price:'689.00',id:1},
  {img:'https://m.360buyimg.com/babel/s100x100_jfs/t5818/113/136283776/181293/47f715ce/591d767cNa6dc8126.jpg!q70.dpg',title:'JD(x)Haculla京东联名定制款',price:"879.00",id:2},
  {img:'https://m.360buyimg.com/babel/s100x100_jfs/t5761/214/130427253/231769/230e9ab7/591d6e4eN85cee666.jpg!q70.dpg',title:'JD (x)  Ferragni 京东联名款',price:'1999.00',id:3},
  {img:'https://m.360buyimg.com/babel/s100x100_jfs/t5818/113/136283776/181293/47f715ce/591d767cNa6dc8126.jpg!q70.dpg',title:'JD(x)Haculla京东联名定制款',price:"879.00",id:4},
  {img:'https://m.360buyimg.com/babel/s100x100_jfs/t5761/214/130427253/231769/230e9ab7/591d6e4eN85cee666.jpg!q70.dpg',title:'JD (x)  Ferragni 京东联名款',price:'1999.00',id:5},
  {img:'https://m.360buyimg.com/babel/s100x100_jfs/t15934/81/1585786153/135120/44a12fc1/5a56becfN921b276f.jpg!q70.dpg',title:'KITAYAMA 北山制包所 海女系列 ',price:'689.00',id:6}]

//图书
let books99=['https://m.360buyimg.com/babel/s318x127_jfs/t24475/265/298669241/198489/b44d6377/5b2b6188N8ff8c049.jpg!q70.dpg',
  'https://m.360buyimg.com/babel/s318x127_jfs/t21523/79/481359308/170619/42d6667d/5b0e3a19Nfe859978.jpg!q70.dpg',
  'https://m.360buyimg.com/babel/s318x127_jfs/t22642/141/287221681/191994/ca399890/5b2b71c2N0d2d4be1.jpg!q70.dpg',
  'https://m.360buyimg.com/babel/s318x127_jfs/t21034/213/1452668126/177925/957c4ce5/5b2a1259Naa6007c4.jpg!q70.dpg',

];
let hotbooks=[
  {img:'http://img3m4.ddimg.cn/25/22/25273834-1_l_4.jpg', id:1,isCollected:false,title:'沙乡年鉴',price:'25.00',bookSum:'像风和日出一样，人们一度把获取野生动植物当作理所当然之事'},
  {img:'http://img3m6.ddimg.cn/48/24/25274946-1_l_3.jpg', id:2,isCollected:false,title:'原谅这世间的不完美',price:'30.20',bookSum:'深沉的姿态观照现实，具有打动人心的力量。'},
  {img:'http://img3m5.ddimg.cn/51/19/25287225-1_l_3.jpg', id:3,isCollected:false,title:'时光若止，岁月成诗 ',price:'47.70',bookSum:'对孤独的畏惧与喜爱，对于生命本真的探求'},
  {img:'http://img3m1.ddimg.cn/46/8/25289101-1_l_3.jpg',  id:4,isCollected:false,title:'宝贝，宝贝 ',price:'33.80',bookSum:'献给所有正在和将要做父母的男人和女人，所有在欢乐和寂寞中成长的孩子。 '},
  {img:'http://img3m1.ddimg.cn/17/18/25271351-1_l_6.jpg', id:5,isCollected:false,title:'我伤感的青春 ',price:'27.90',bookSum:'回想自己的青春，有爱，有情，但同时还有不少的烦恼、彷徨与迷惘。'},
  {img:'http://img3m5.ddimg.cn/51/19/25287225-1_l_3.jpg', id:6,isCollected:false,title:'时光若止，岁月成诗 ',price:'47.70',bookSum:'对孤独的畏惧与喜爱，对于生命本真的探求'},
  {img:'http://img3m1.ddimg.cn/46/8/25289101-1_l_3.jpg',  id:7,isCollected:false,title:'宝贝，宝贝 ',price:'33.80',bookSum:'献给所有正在和将要做父母的男人和女人，所有在欢乐和寂寞中成长的孩子。 '},
  {img:'http://img3m5.ddimg.cn/21/5/25277295-1_l_3.jpg',  id:8,isCollected:false,title:'微笑深处，最是孤独',price:'35。00',bookSum:'让每一个孤独的灵魂，拥抱自由，活出真我，领悟生活的真意。'},
  {img:'http://img3m6.ddimg.cn/48/24/25274946-1_l_3.jpg', id:9,isCollected:false,title:'原谅这世间的不完美',price:'30.20',bookSum:'深沉的姿态观照现实，具有打动人心的力量。'},
  {img:'http://img3m5.ddimg.cn/51/19/25287225-1_l_3.jpg', id:10,isCollected:false,title:'时光若止，岁月成诗 ',price:'47.70',bookSum:'对孤独的畏惧与喜爱，对于生命本真的探求'},
  {img:'http://img3m1.ddimg.cn/46/8/25289101-1_l_3.jpg',  id:11,isCollected:false,title:'宝贝，宝贝 ',price:'33.80',bookSum:'献给所有正在和将要做父母的男人和女人，所有在欢乐和寂寞中成长的孩子。 '},
  {img:'http://img3m1.ddimg.cn/17/18/25271351-1_l_6.jpg', id:12,isCollected:false,title:'我伤感的青春 ',price:'27.90',bookSum:'回想自己的青春，有爱，有情，但同时还有不少的烦恼、彷徨与迷惘。'},
  {img:'http://img3m5.ddimg.cn/51/19/25287225-1_l_3.jpg', id:13,isCollected:false,title:'时光若止，岁月成诗 ',price:'47.70',bookSum:'对孤独的畏惧与喜爱，对于生命本真的探求'},
  {img:'http://img3m1.ddimg.cn/46/8/25289101-1_l_3.jpg',  id:14,isCollected:false,title:'宝贝，宝贝 ',price:'33.80',bookSum:'献给所有正在和将要做父母的男人和女人，所有在欢乐和寂寞中成长的孩子。 '},
  {img:'http://img3m5.ddimg.cn/21/5/25277295-1_l_3.jpg',  id:15,isCollected:false,title:'微笑深处，最是孤独',price:'35。00',bookSum:'让每一个孤独的灵魂，拥抱自由，活出真我，领悟生活的真意。'},
  {img:'http://img3m6.ddimg.cn/48/24/25274946-1_l_3.jpg', id:16,isCollected:false,title:'原谅这世间的不完美',price:'30.20',bookSum:'深沉的姿态观照现实，具有打动人心的力量。'},
  {img:'http://img3m4.ddimg.cn/25/22/25273834-1_l_4.jpg', id:17,isCollected:false,title:'沙乡年鉴',price:'25.00',bookSum:'像风和日出一样，人们一度把获取野生动植物当作理所当然之事'},
  {img:'http://img3m5.ddimg.cn/51/19/25287225-1_l_3.jpg', id:18,isCollected:false,title:'时光若止，岁月成诗 ',price:'47.70',bookSum:'对孤独的畏惧与喜爱，对于生命本真的探求'},
]

let mybook=[{img:'https://m.360buyimg.com/babel/s85x85_jfs/t1855/103/2104472107/517548/13895960/56f38159Nf70e925b.jpg!q70.dpg',title:'知行合一王明阳',price:'72',id:1},
  {img:'https://m.360buyimg.com/babel/s85x85_jfs/t14299/221/2395259757/750126/62652caa/5a98b3faN2068cfbe.jpg!q70.dpg',title:'范志红健康饮食',price:'88',id:2},
  {img:'https://m.360buyimg.com/babel/s85x85_jfs/t1855/103/2104472107/517548/13895960/56f38159Nf70e925b.jpg!q70.dpg',title:'知行合一王明阳',price:'72',id:3},
  {img:'https://m.360buyimg.com/babel/s85x85_jfs/t14299/221/2395259757/750126/62652caa/5a98b3faN2068cfbe.jpg!q70.dpg',title:'范志红健康饮食',price:'88',id:4},
  {img:'https://m.360buyimg.com/babel/s85x85_jfs/t1855/103/2104472107/517548/13895960/56f38159Nf70e925b.jpg!q70.dpg',title:'知行合一王明阳',price:'72',id:5},
  {img:'https://m.360buyimg.com/babel/s85x85_jfs/t14299/221/2395259757/750126/62652caa/5a98b3faN2068cfbe.jpg!q70.dpg',title:'范志红健康饮食',price:'88',id:6},
  {img:'https://m.360buyimg.com/babel/s85x85_jfs/t14299/221/2395259757/750126/62652caa/5a98b3faN2068cfbe.jpg!q70.dpg',title:'范志红健康饮食',price:'88',id:7},
  {img:'https://m.360buyimg.com/babel/s85x85_jfs/t1855/103/2104472107/517548/13895960/56f38159Nf70e925b.jpg!q70.dpg',title:'知行合一王明阳',price:'72',id:8},
  {img:'https://m.360buyimg.com/babel/s85x85_jfs/t14299/221/2395259757/750126/62652caa/5a98b3faN2068cfbe.jpg!q70.dpg',title:'范志红健康饮食',price:'88',id:9},
  {img:'https://m.360buyimg.com/babel/s85x85_jfs/t1855/103/2104472107/517548/13895960/56f38159Nf70e925b.jpg!q70.dpg',title:'知行合一王明阳',price:'72',id:10},

]



//设计师轮播图
jd.get('/getdegs',(req,res)=>{
  setMyHeader(res);
  res.send(JSON.stringify(degs))
});

//图书轮播图
jd.get('/getbooks1',(req,res)=>{
  setMyHeader(res);
  res.send(JSON.stringify(books99))
});
//
jd.get('/getmybook',(req,res)=>{
  setMyHeader(res);
  res.send(JSON.stringify(mybook))
});
//
jd.get('/book1/hot',(req,res)=>{
  setMyHeader(res);
  res.send(JSON.stringify(hotbooks))
});
//
jd.get('/getBooks1',(req,res)=>{
  setMyHeader(res);
  res.send(JSON.stringify(hotbooks))
});











//监听事件

jd.listen(10086,function(){
  console.log('sever run on 10086........')
});



function show(v,id){
  if(v.id==id){
    v.isclick=true
  }
}



