<template>
<div>	
  <header class="header">
    <div class="back iconfont">&#xe624;</div>
    <div class="search"><a href="#" class="prompt">输入城市/景点/游玩主题</a></div>
    <div class="city"><span class="position">乌鲁木器大</span></div>
  </header>
  <swiper :options="swiperOption">
    <swiper-slide>
      <div class="swiper-img-con">
        <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1711/5a/cb4a0ccffeb99b02.jpg_640x200_1b0b75b1.jpg" />
      </div>
      
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-img-con">
      <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1712/d1/73dc10b5cd320202.jpg_640x200_02a40951.jpg" />
      </div>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
  export default {
    name: 'Index',
  	  data () {
        return {
          swiperOption: {
          	direction: 'horizontal',
            autoplay: 1000,
            loop: true
          }
        }
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
    width:0.65rem;
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
</style>
