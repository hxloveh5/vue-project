<template>
 <div class="map-page">
  <header class="header">
  <div class="back iconfont">&#xe624;</div>
  <div class="search iconfont">&#xe604;输入城市/景点/游玩主题</div>
  <div class="city iconfont"><span class="position">北京</span>&#xe601;</div> 
  </header>
  <swiper :options="swiperOption" class="swipers">
    <swiper-slide v-for="item in swiperInfo" :key="item.id">
     <div class="swiper-img-con">
      <img class="swiper-img" :src="item.imgUrl"/>
     </div>
    </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
  </swiper>

  <swiper :options="iconsOption">
    <swiper-slide v-for="(pageInfo, index) in pages" :key="index">
     <div class="icon-wrapper">
     <div v-for="item in pageInfo" :key="item.id" class="icon-item">
       <div class="icon-img-con">
         <img class="icon-img" :src="item.imgUrl"/>
         <div class="title" v-text="item.title"></div>
       </div>
      </div>
     </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
   </swiper>
   <ul class="map">
     <li class="map-item iconfont">&#xe602;定位失败</li>
     <li class="iconfont">&#xe613;五折泡温泉</li>
  </ul>
  <ul class="active">
    <li class="active-itemone"></li>
    <li class="active-itemtwo"></li>
  </ul> 
  <div class="hot-cakes">
    <h2 class="headline">热销推荐</h2>
     <div class="hot" v-for="item in hotInfo" :key="item.id">
     <div class="hot-img"><img :src="item.imgUrl" /></div>
      <ul class="hot-right">
       <li class="hot-one" v-text="item.title"></li>
        <li class="hot-two" v-text="item.describe"></li>
      <li class="hot-three"><span class="sprice">￥</span><span v-text="item.price" class="spantow"></span><span class="spanthree">起</span></li> 
    </ul>
  </div>
  </div>
  <div class="allproduct">
    <h2 class="lookall">查看所有商品</h2>
    <div class="weekend">
      <h3 class="go">周末去哪儿</h3>
       <div class="week-go" v-for="item in weekInfo" :key="item.id">
       <div class="week-img"><img :src="item.imgUrl" /></div>
       <ul class="go-to-week">
         <li class="goone" v-text="item.title"></li>
         <li class="gotwo" v-text="item.describe"></li>
       </ul>
    </div>
  </div>
  </div>
 </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      swiperInfo: [],
      iconInfo: [],
      hotInfo: [],
      weekInfo: [],
      swiperOption: {
        autoplay: 100000,
        pagination: '.swiper-pagination',
        loop: true
      },
      iconsOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pages () {
      const pageArr = []
      this.iconInfo.forEach((value, index) => {
        let page = Math.floor(index / 8)

        if (!pageArr[page]) {
          pageArr[page] = []
        }
        pageArr[page].push(value)
      })
      return pageArr
    }
  },
  methods: {
    getIndexData () {
      this.$http.get('/static/index.json')
       .then(this.handleGetDataSucc.bind(this))
    },
    handleGetDataSucc (res) {
      const body = res.body
      if (body && body.data && body.data.swiper) {
        this.swiperInfo = body.data.swiper
        this.iconInfo = body.data.icons
        this.hotInfo = body.data.hot
        this.weekInfo = body.data.go
      }
    }
  },
  created () {
    this.getIndexData()
  }
}
</script>

<style scoped>
 .map-page{
  width:100%;
  height:100%;
  background:#f5f5f5; 
 }
 .header{
  display:flex;
  background:#01bdd6;
  color:#fff;
 }
 .back{
  width:0.64rem;
  line-height:0.86rem;
  text-align:center; 
 }
 .search{
  flex:1;
  margin:0.14rem 0.18rem;
  background:#fff;
  border-radius:0.1rem;
  color:#eaeaea;
  line-height:0.6rem;
 }
 .city{
  width:1.14rem;
  line-height:0.86rem;
  text-align:center;
 }
/* .position{
 
  display:block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  } */
 .swiper-img-con{
  width:100%;
  background:#fff;
/*   margin-top:1rem; */
 }
 .swipers{

 }
 .swiper-img{
  width:100%;
 }
 .icon-wrapper{
 /* height:3.8rem; */
 }
 .icon-item{
  box-sizing:border-box;
  width:25%;
  float:left;
  padding:0.3rem;
  background:#fff;
 }
.icon-img-con{

  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items: center;
  width:100%;
}
.icon-img{
 width:50%;
}
.title{
  text-align:center;
  white-space:nowrap;
  margin-top:0.2rem;
}
.map{
  display: flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
  background:#fff;
  border-top:0.01rem solid #dfdfdf;
}
.map li{
 text-align:center;
 width:49%;
 line-height:0.98rem;
}
.map-item{
 border-right:0.01rem solid #dfdfdf;
}
.active{
 display: flex;
 flex-direction:row;
 justify-content:space-around;
 align-items:center;
 margin-top:0.2rem;
 background:#fff;
}
.active-itemone{
 width:3.75rem;
 height:1.39rem; 
 background:url(http://img1.qunarzz.com/piao/fusion/1710/a2/e395615b16fb1302.png)center center no-repeat;
 background-size:cover;
 border-right:0.01rem solid #dfdfdf;
}
.active-itemtwo{
 width:3.75rem;
 height:1.39rem; 
 background:url(http://img1.qunarzz.com/piao/fusion/1711/8a/4c62d1a89fc2d602.png)center center no-repeat;
 background-size:cover;
}
.headline{
  height:0.81rem;
  line-height: 0.81rem;
  margin-left: 0.3rem;
  color:#1f1f1f;
  background:#f5f5f5;
}
.hot{
  display:flex;
  flex-direction:row;
  height:1.4rem;
  padding-top:0.24rem;
  padding:0.24rem;
  border-bottom:0.01rem solid #dfdfdf;
  background:#fff; 
}
.hot-img img{
    width:1.4rem;
    height:1.4rem;
}
.hot-right{
   width:80%; 
}
.hot-one{
  width:50%; 
  overflow: hidden;
  margin-top: .04rem;
  margin-bottom: .1rem;
  margin-left:0.2rem;
  color: #212121;
  font-size: .3rem;
  white-space: nowrap;
  text-overflow: ellipsis;
}
 .hot-two{
  /* width:80%; */ 
  overflow: hidden;
  margin-top: .04rem;
  margin-bottom: .1rem;
  margin-left:0.2rem;
  color: #212121;
  font-size: .3rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  }
   .hot-three{
    padding-top:.2rem;
    margin-left:0.16rem;
  }
   .hot-three .sprice{
    font-size: .2rem;
    color:#cfa072;
  }
  .hot-three .spantow{
    font-size: .4rem;
    color:#cfa072;
  }
 /*.hot-three .spanthree{
    font-size: .24rem;
    color:#9d9d9d;
  } */
  .lookall{
    height: .88rem;
    color: #00afc7;
    line-height: .88rem;
    text-align: center;
    background:#fff;
  }
 .go{
  height:0.81rem;
  line-height: 0.81rem;
  margin-left: 0.3rem;
  color:#1f1f1f;
  background:#f5f5f5;
  }
.weekgo{
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  height:4.04rem;
  margin-bottom:.15rem;
}
.weekimg{
  width:100%;
  overflow: hidden;
  height: 0.37rem;
  padding-bottom: 37.4375%;
  }
.week-img img{
  width:100%;
}
.goone{
  overflow: hidden;
  padding-right: 1.4rem;
  color: #212121;
  font-size: .28rem;
  line-height: .48rem;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.gotwo{
  overflow: hidden;
  padding-right: 1.4rem;
  color: #212121;
  font-size: .24rem;
  line-height: .42rem;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
