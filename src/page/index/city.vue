<template>
	<div>
		<header class="header-top">
			<div class="back iconfont">&#xe624;</div>
			<div class="choose">
				<div class="active china">国内</div>
				<div class="out-china">国外</div>
			</div>
		</header>
		<div class="header-bottom">
			<input placeholder="输入城市名和拼音"/>
		</div>
		<div class="your-address">
			您的位置
		</div>
		<div class="your-address-city">
			<div class="now-city">
				北京
			</div>
		</div>
		<div class="your-address">
			热门城市
		</div>
		<div class="hot-city">
			<div class="hot-citys" v-for="item in cityInfo" :key="item.id" v-text="item.title"></div>
		</div>
		<ul class="list">
			<li>A</li>
			<li>B</li>
			<li>C</li>
			<li>D</li>
			<li>E</li>
			<li>F</li>
			<li>A</li>
			<li>G</li>
			<li>H</li>
			<li>I</li>
			<li>J</li>
			<li>K</li>
			<li>L</li>
			<li>M</li>
			<li>N</li>
			<li>O</li>
			<li>P</li>
			<li>Q</li>
			<li>R</li>
			<li>S</li>
			<li>T</li>
			<li>U</li>
			<li>V</li>
			<li>W</li>
			<li>X</li>
			<li>Y</li>
			<li>Z</li>
		</ul>
		<div v-for="item in listsInfo" :key="item.id">
		  <div class="your-address" v-text="item.word"></div>
		  <ul class="lists">
		  	<li v-for="(item, index) in listsInfo" :key="item.index"></li>
		  </ul>
		</div>
	</div>
</template>
<script>
  export default{
    name: 'City',
    data () {
      return {
        cityInfo: [],
        listsInfo: []
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
          this.cityInfo = body.data.citys
          this.listsInfo = body.data.citylist[0].lista
          console.log(body.data.citylist[0])
        }
      }
    },
    created () {
      this.getIndexData()
    }
  }
</script>
<style scoped>
	
	.header-top{
		height:.80rem;
		background:#4eacc5;
		position:fixed;
		top:0;
		left:0;
		width:100%;
    }
	.back{
		float:left;
		height:.60rem;
		text-align:center;
		line-height: .60rem;
		color:#fff;
		margin-right:1.36rem;
		margin-left:.26rem;
		margin-top:.1rem;
	}
	.choose{
		background:#4eacc5;
		border:.02rem solid #fff;
		color:#fff;
		text-align:center;
		line-height: .66rem;
		overflow: hidden;
		margin-right:1.68rem;
		margin-top:.1rem;
		border-radius: .08rem
	}
	.choose div{
		float:left;
	}
	.china{
		height:.60rem;
		width:1.90rem;
	}
	.out-china{
		height:.60rem;
		width:1.90rem;
	}
	.header-bottom{
		margin-top:.80rem;
		background:#4eacc5;
	}
	.header-bottom input{
		height:.60rem;
		border:none;
		border-radius: .08rem;
		text-align: center;
		margin-left:.16rem;
		width:7.22rem;
		margin-bottom:.1rem;
	}
	.active{
		background:#fff;
		color:#4eacc5;
	}
	.your-address{
		height:.56rem;
		background:#f5f5f5;
		color:#646464;
		padding-left:.24rem;
		line-height:.56rem;
	}
	.your-address-city{
		padding:.22rem .26rem;
	}
	.now-city{
		width:2.1rem;
		height:.48rem;
		border:.02rem solid #4eacc5;
		text-align: center;
		line-height:.54rem;
		border-radius: .08rem;

	}
	.hot-city{
		padding-bottom: .20rem;
		overflow: hidden;
	}
	.hot-citys{
		width:2.1rem;
		height:.48rem;
		border:.02rem solid #4eacc5;
		text-align: center;
		line-height:.54rem;
		border-radius: .08rem;
		margin-top:.17rem;
		float: left;
		margin-top:.16rem;
		margin-left:.26rem;
	}
	.list{
		position:fixed;
		right:0;
		top:3.02rem;
		width:.32rem;
		height:6.36rem;
		background:transparent;
		text-align:center;
		color:#4eacc5;
	}
</style>