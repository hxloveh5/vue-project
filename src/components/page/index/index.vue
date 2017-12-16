<template>
  <div>
    <header class="header">
      <div class="back iconfont">&#xe624;</div>
      <div class="search"></div>
      <div class="city">城市</div>
    </header>
    <template>
	  <swiper :options="swiperOption">
	    <!-- slides -->
	    <swiper-slide>
	      <div class="swiper-img-con">	 -->
	        <img class="swiper-img" src="../img/1.png" alt="">
	      </div>
	    </swiper-slide>
	    <swiper-slide>
	      <div class="swiper-img-con">
	       <img class="swiper-img" src="../img/2.png" alt="">
	      </div>
	   	  
	    </swiper-slide>
	    <!-- Optional controls -->
	    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
	</template>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
	return {
	  swiperOption: {
	  	autoplay: 5000,
	  	direction: 'horizontal'
	  }
	}
  }
}
</script>


<style scoped>
  .header {
  	display: flex;
  	background: #05bad5;
  	color: #fff;
  }
  .back {
  	width: 0.64rem;
  	line-height: .86rem;
  }
  .search {
  	flex: 1;
  	margin: 0.14rem 0.18rem;
  	background: #fff;
  	border-radius: 0.1rem;
  }
  .city {
  	width: 1.14rem;
  	line-height: 0.86rem;
  	text-align: center;
  }
  .swiper-img-con {
  	width: 100%;
  }
  .swiper-img {
  	width: 100%;
  }
</style>
