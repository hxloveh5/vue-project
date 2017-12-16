<template>
 <div>
  <header class="header">
 	<div class="back iconfont">&#xe624;</div>
 	<div class="search iconfont">&#xe604;输入城市/景点/游玩主题</div>
 	<div class="city iconfont">北京&#xe601;</div>	
  </header>
  <swiper :options="swiperOption">
    <swiper-slide v-for="item in swiperInfo" :key="item.id">
     <div class="swiper-img-con">
      <img class="swiper-img" :src="item.imgUrl"/>
     </div>
    </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

  <swiper>
    <swiper-slide v-for="(pageInfo, index) in pages" :key="index">
     <div class="icon-wrapper">
     <div v-for="item in pageInfo" :key="item.id" class="icon-item">
       <div class="icon-img-con">
        <img class="icon-img" :src="item.imgUrl"/>
       </div>
      </div>
     </div>
    </swiper-slide>
   </swiper> 
 </div>
 
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      swiperInfo: [],
      iconInfo: [],
      swiperOption: {
        autoplay: 1000,
        direction: 'horizontal',
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    pages () {
      var pageArr = []
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
  text-overflow:ellipsis;
  word-wrap:nowrap;
 }
 .swiper-img-con{
	width:100%;
 }
 .swiper-img{
 	width:100%;
 }
 .icon-wrapper{
 
 }
 .icon-item{
  box-sizing:border-box;
  width:25%;
  float:left;
  padding:0.4rem;
 }
.icon-img-con{
  width:100%;
  text-align:center;
  height:0;
  padding-bottom:100%;
}
 .icon-img{
  width:100%;

 }
</style>
