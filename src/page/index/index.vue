<template>
 <div>
  <header class="header">
 	<div class="back">返回</div>
 	<div class="search">输入城市/景点/游玩主题</div>
 	<div class="city">北京</div>	
  </header>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide>
     <div class="swiper-img-con">
      <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1609/15/630b82d932a3c402.jpg_640x200_862e836b.jpg"/>
     </div>
     
    </swiper-slide>
    <swiper-slide>
     <div class="swiper-img-con">
      <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1711/cd/5ff8869f365e7e02.jpg_640x200_097b1798.jpg"/>
      </div>
    </swiper-slide>
    <swiper-slide></swiper-slide>
    <swiper-slide></swiper-slide>
    <swiper-slide></swiper-slide>
    <swiper-slide></swiper-slide>
    <swiper-slide></swiper-slide>
    <!-- Optional controls -->
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
        autoplay: 1000,
        direction: 'horizontal'
      }
    }
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
 }
 .search{
 	flex:1;
 	margin:0.14rem 0.18rem;
 	background:#fff;
 	border-radius:0.1rem;

 }
 .city{
 	width:1.14rem;
 	line-height:0.86rem;
 	text-align:center;
 }
 .swiper-img-con{
	width:100%;
 }
 .swiper-img{
 	width:100%;
 }
</style>
