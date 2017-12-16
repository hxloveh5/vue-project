<template>
<div>	
  <header class="header">
    <div class="back iconfont">&#xe624;</div>
    <div class="search"><a href="#" class="prompt">输入城市/景点/游玩主题</a></div>
    <div class="city"><span class="position">乌鲁木器大</span></div>
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
    <li>定位失败</li>
    <li>5折泡温泉</li>
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
        this.$http.get('/static/index.json')
        .then(this.handleGetDataSucc.bind(this))
      },
      handleGetDataSucc (res) {
        const body = res.body
        if (body && body.data && body.data.swiper) {
          this.swiperInfo = body.data.swiper
          this.iconsInfo = body.data.icons
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
  }
</style>
