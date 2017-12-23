<template>
<div> 
  <header class="header">
    <div class="back iconfont">&#xe624;</div>
    <div class="search"><a href="#" class="prompt">输入城市/景点/游玩主题</a></div>
    <div class="city"><router-link to="/city" class="position">乌鲁木器大</router-link></div>
  </header>
  <swiper :options="swiperOption">
    <swiper-slide v-for="item in swiperInfo" :key="item.id">
      <div class="swiper-img-con">
        <img class="swiper-img" :src="item.imgUrl" />
      </div>
      
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>

  <swiper :options="iconsOption">
    <swiper-slide v-for="(pageInfo, index) in pages" :key="index">
      <div class="icon-wrapper">
        <div v-for="item in pageInfo" :key="item.id" class="icon-item">
          <div class="icon-img-con">
          <img class="icon-img" :src="item.imgUrl" />
          <div class="title" v-text="item.title"></div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  
    <ul class="towli">
    <li class="lili"><span class="lione iconfont">&#xe652;</span>定位失败</li>
    <li><span class="litow iconfont">&#xe654;</span>5折泡温泉</li>
  </ul>
  <ul class="ultow">
    <li class="lione"></li>
    <li class="litow"></li>
  </ul>
  <h1 class="biaoti">
    热门推荐
  </h1>
  <div class="hot" v-for="item in hotInfo" :key="item.id">
    <div class="hot-img"><img :src="item.imgUrl" /></div>
    <ul class="hot-right">
      <li class="lione" v-text="item.title"></li>
      <li class="litow" v-text="item.describe"></li>
      <li class="lithree"><span class="spanone">￥</span><span v-text="item.price" class="spantow"></span><span class="spanthree">起</span></li>
    </ul>
  </div>
  <h2 class="more">查看更多商品</h2>
  <h1 class="biaotitow">周末去哪</h1>
  <div class="go" v-for="item in goInfo" :key="item.id">
    <div class="go-img"><img :src="item.imgUrl" /></div>
    <ul class="go-right">
      <li class="lione" v-text="item.title"></li>
      <li class="litow" v-text="item.describe"></li>
    </ul>
  </div>
  <div class="zi">
    <span class="piao-price">票面价</span>是指通过景区指定窗口售卖的纸质门票上标注的价格
  </div>
  <ul class="iconfour">
    <li><span class="iconfont">&#xe655;</span>机票</li>
    <li><span class="iconfont">&#xe6e3;</span>酒店</li>
    <li><span class="iconfont">&#xe646;</span>公寓</li>
    <li><span class="iconfont">&#xe66c;</span>更多</li>
  </ul>
  <ul class="bottom">
    <li><a href="#" >登录</a></li>
    <li><a href="#" >我的订单</a></li>
    <li><a href="#" >最近浏览</a></li>
    <li><a href="#" >关于我们</a></li>
  </ul>
</div>
</template>

<script>
  export default {
    name: 'Index',
    data () {
      return {
        swiperInfo: [],
        iconsInfo: [],
        hotInfo: [],
        goInfo: [],
        swiperOption: {
          autoplay: 10000,
          pagination: '.swiper-pagination',
          loop: true,
          initialSlide: 1
        },
        iconsOption: {
          pagination: '.swiper-pagination',
          initialSlide: 0
        }
      }
    },
    computed: {
      pages () {
        const pages = []
        this.iconsInfo.forEach((value, index) => {
          let page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(value)
        })
        return pages
      }
    },
    methods: {
      getIndexData () {
        this.$http.get('/api/index.json')
        .then(this.handleGetDataSucc.bind(this))
      },
      handleGetDataSucc (res) {
        const body = res.body
        if (body && body.data && body.data.swiper) {
          this.swiperInfo = body.data.swiper
          this.iconsInfo = body.data.icons
          this.hotInfo = body.data.hot
          this.goInfo = body.data.go
        }
      }
    },
    created () {
      this.getIndexData()
    }
  }
</script>
<style scoped>
  .header{
    display: flex;
    background: #05bad5;
    color: #fff;
  }
  .back{
    width: .64rem;
    line-height: .86rem;
    text-align: center;
  }
  .search{
    flex: 1;
    margin: .14rem .18rem;
    background: #fff;
    border-radius: .1rem;
    color:;
  }
  .prompt {
    font-size: 0.26rem;
    color: #ccc;
    line-height: 0.6rem;
  }
  .city{
    width:1.32rem;
    line-height: .86rem;
    text-align: left;
  }
  .position{
    width:0.85rem;
    display:block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .city::after{
    content:"";
    display: block;
    width: 0px;
    height: 0px;
    border: 0.1rem solid #fff;
    border-color: white transparent transparent transparent;
    position: absolute;
    right: 0.28rem;
    top: 0.36rem;
  }
  .swiper-img-con{
    width:100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 31.25%;
  }
  .swiper-img{
    width:100%;
  }
  .icon-wrapper{
    height:3.8rem;
  }
  .icon-item {
    box-sizing: border-box;
    width:25%;
    float:left;
    padding:0rem .6rem;
    margin-top:.4rem;
  }
  .icon-img-con{
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
  }
  .icon-img {
    width:100%;
  }
  .title{
    padding-top:.2rem;
    white-space: nowrap;
    font-size:.28rem;
    text-align:center;
    color:#1f1f1f;
  }
  
  .towli{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-top:0.01rem solid #dfdfdf;
    border-bottom:0.17rem solid #f5f5f5;
  }
  .towli li{
    height:0.96rem;
    width:3.74rem;
    text-align:center;
    line-height:0.96rem;
    font-size:.28rem;
    color:#1f1f1f;
  }
  .towli .lili{
    border-right:0.01rem solid #dfdfdf;
  }
  .ultow{
    display:flex;
    flex-direction:row;
    justify-content:space-around;
  }
  .ultow .lione{
    height:1.39rem;
    width:3.75rem;
    background:url(http://img1.qunarzz.com/piao/fusion/1710/a2/e395615b16fb1302.png) center center no-repeat;
    background-size:cover;
    border-right:0.01rem solid #dfdfdf;
  }
  .ultow .litow{
    height:1.39rem;
    width:3.75rem;
    background:url(http://img1.qunarzz.com/piao/fusion/1711/8a/4c62d1a89fc2d602.png) center center no-repeat;
    background-size:cover;
  }
  .biaoti{
    height:0.81rem;
    line-height:0.81rem;
    color:#1f1f1f;
    background:#f5f5f5;
  }
  .hot{
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    height:1.4rem;
    padding-top:0.24rem;
    padding-bottom:0.24rem;
    border-bottom:0.01rem solid #dfdfdf;
  }
  .hot-img img{
    width:1.4rem;
    height:1.4rem;
  }
  .hot .lione{
    color:#1f1f1f;
    font-size:.32rem;
  }
  .hot .litow{
    padding-top:.2rem;
    color:#9d9d9d;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .hot .lithree{
    padding-top:.2rem;
  }
  .hot .lithree .spanone{
    font-size: .2rem;
    color:#cfa072;
  }
  .hot .lithree .spantow{
    font-size: .4rem;
    color:#cfa072;
  }
  .hot .lithree .spanthree{
    font-size: .24rem;
    color:#9d9d9d;
  }
  .more{
    height: .88rem;
    width:100%;
    text-align:center;
    line-height: .88rem;
  }
  .biaotitow{
    height:0.81rem;
    line-height:0.81rem;
    color:#1f1f1f;
    background:#f5f5f5;
  }
  .go{
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    height:4.04rem;
    margin-bottom:.15rem;
  }
  .go-img{
    height: 0;
    overflow: hidden;
    padding-bottom: 37.4375%;;
  }
  .go-img img{
    width:100%;
  }
  .go-right{
    height:.62rem;
    padding:.08rem;
  }
  .go-right .lione{
    color:#1f1f1f;
    font-size:.28rem;
  }
  .go-right .litow{
    padding-top:.2rem;
    color:#9d9d9d;
    font-size: .24rem;
    padding-bottom:.4rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .zi{
    height:.3rem;
    font-size:.24rem;
    color: #616161;
    border-top:0.10rem solid #f5f5f5;
  }
  .iconfour{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .iconfour li{
    width:1.5rem;
    height:.62rem;
    text-align:center;
    line-height:.62rem;
    color: #9e9e9e;
  }
  .bottom{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .bottom li{
    width:1.12rem;
    height:.39rem;
    font-size:.12rem;
  }
</style>