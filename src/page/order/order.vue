<template>
<div class="box">
	<header class="header">
		<div class="back iconfont">&#xe624;</div>
		<div class="order"><span>订单填写</span></div>
		<div class="login"><a href="javascript:;">登录</a></div>
	</header>
	<div class="main">
		<div class="introduce">
			<h2 class="defination">天安门故宫珍宝馆+八达岭+颐和园+恭王府联票无线耳麦人工讲解</h2>
			<div class="price">
				<div><span class="prione">￥<em>148</em></span><span class="piece">起/张</span></div>
				<p class="reserve"><a href="javascript:;">预定须知</a></p>
			</div>
		</div>
		<div class="notice">
			<span class="date"><em class="iconfont">&#xe639;</em>2017-12-19</span><span class="date"><em class="iconfont">&#xe602;</em>条件退</span>
		</div>
		<div class="notice">
			<span class="date"><em class="iconfont">&#xe639;</em>成人</span><span class="date"><em class="iconfont">&#xe602;</em>不含餐</span><span class="date"><em class="iconfont">&#xe602;</em>中文</span>
		</div>
		<div class="notice">
			<span class="date"><em class="iconfont">&#xe639;</em> 【升级A】故宫 八达岭</span>
		</div>
		<div class="notice">
			<span class="date only"><em class="iconfont">&#xe757;</em>已过最晚退票时间</span>
		</div>
	</div>
	<div class="tour">
		<div class="tourDate">
			<p>游玩日期</p>
			<li><span>今天<br>12月18日</span></li>
			<li><span>明天<br>12月19日</span></li>
			<li><span>其他日期</span></li>
		</div>
		<div class="count">
			<p>购买数量</p>
			<div class="buy"><span>每个手机号限购30张<br>每个身份证限购</span></div>
			<div class="ticket">
				<span class="num1 iconfont">&#xe644;</span>1<span class="num2 iconfont">&#xe647;</span>
			</div>
		</div>	
	</div>
	<div class="vister">
		<div class="all">
			<div class="title">游客1</div>
			<p class="name">游客姓名</p>
			<div class="phone"><span class="iconfont">&#xe601;</span></div>
		</div>
		<div class="all">
			<div class="title">拼音</div>
			<p class="name">拼音(姓名拼音)</p>
		</div>
		<div class="all">
			<div class="title">手机号</div>
			<p class="name"><span>+86></span>请填写手机号</p>
		</div>
		<div class="all">
			<div class="title">游客1</div>
			<p class="name">游客姓名</p>
		</div>
	</div>
	<p class="consult"><a href="">咨询电话</a></p>
	<div class="pay">
		<div class="payL">
		  <span>产品价格￥<em>148</em><em class="iconfont"></em></span>
		</div>
		<div class="payR">
			<span>提交订单</span>
		</div>	
	</div>
</div>
</template>

<script>
	
</script>

<style>
.box {
	height: 1200px;
	background: #f5f5f5;
}
	.header {
		display: flex;
		width: 100%;
		height: 0.88rem;
		background: #00bcd4;	
		color: #fff;	
	}
	.back {
		width: 0.9rem;
		line-height: 0.88rem;
		text-align: center;
		font-size: 0.4rem;	
	}
	.order {
		flex: 1;
		line-height: 0.88rem;
		text-align: center;
		font-size: 0.3rem;
	}
	.login {
		width:1rem;
		text-align: center;
		line-height: 0.88rem;
		font-size: 0.28rem;
	}
	.login a {
		 color: #fff;
	}
	.main {
		padding: 0.3rem;
		background: #fff;
	}
	.introduce {
		display: flex;
		justify-content: space-between;
	}
	.defination {
		width: 5rem;
		height: 0.9rem;
		font-size: 0.32rem;
		line-height: 0.45rem;
		overflow: hidden;
	}
	.prione {
		font-size: .2rem;
		color: #ff8300;
	}
	.prione em {
		font-size: .3rem;
	}
	.piece {
		font-size: 0.2rem;
		color: #9e9e9e;
		padding-left: 0.1rem;
	}
	.reserve {
		font-size: 0.24rem;
		padding-top: .16rem;
		display: flex;
		justify-content: flex-end;
	}
	.notice {
		padding-top: .2rem;
	}
	.date, .term {
		font-size: .2rem;
		color: #616161;
		padding-right: .2rem;
	}
	.date em { 
		font-size: .2rem;
		color: #00bcd4;
		padding-right: .1rem;
	}
	.only em{
		font-size: .25rem;
		color: #ff776d;
	}
	.tour {		
		width: 100%;
		margin-top: .2rem;
		background: #fff;
	}
	.tourDate {
		display: flex;
		flex-direction: row;
		border-bottom: .01rem solid #ccc;
	}
	.tourDate p {
		width: 1.72rem;
		text-align:center;
		line-height: 1.3rem;
		font-size: .3rem;
	}
	.tourDate li {
		list-style: none;
		width: 1.56rem;
		text-align: center;
		height: .84rem;
		border: 0.01rem solid #ccc;
		border-radius: 0.1rem;
		margin: 0.24rem .12rem;
		color: #dedede;
	}
	.tourDate li span {
		display: flex;
		height: .84rem;
		justify-content: center;
		align-items: center;
		font-size: .24rem;
		line-height: .36rem;
	}
	.Date {
		padding: .24rem;
		flex: 1;
	}
	.Date li {
		width: 1.56rem;
		height: 1.3rem;
		float: left;
	}
	.count {
		display: flex;
		height:1.3rem;
		display: flex;
		margin-top: .2rem;
		border-bottom: .01rem solid #ccc;
	}
	.count p {
		padding: 0 .3rem;
		line-height: 1.3rem;
		font-size: .3rem;
		color: #616161;
	}
	.buy {
		margin-top: .4rem;
		font-size: .24rem;
		color:#ccd5e2;
	}
	.ticket {
		display: flex;
		justify-content: space-between;
		width: 1.92rem;
		height: .6rem;
		margin-top: .32rem;
		margin-left: 1.3rem;
		border: .01rem solid #ccc;
		line-height: .6rem;
	}
	.ticket span {
		font-size: .6rem;
	}
	.num1 {
		color: #cad1d7;
	}
	.num2 {
		color: #00bcd4;
	}
	.vister {
		background: #fff;
		margin-top: .2rem;
	}
	.all {
		display: flex;
		justify-content: flex-start;
		height: .96rem;
		line-height: .96rem;
		border-bottom: .01rem solid #eee;
	}
	.title {
		width: 2rem;
		font-size: .32rem;
		line-height: .96rem;
		padding-left: .3rem;
	}
	.name {
		width: 4.6rem;
		line-height: .96rem;
	}
	.name span {
		padding: .15rem;
		border: .01rem solid #ccc;
		margin-right: .05rem;
	}
	.phone {
		display: flex;
		justify-content: flex-start;
	}
	.tel {
		display: inline-block;
		width: .8rem;
		height: .5rem;
		border: .01rem solid #eee;
	}
	.consult {
		width: 100%;
		display: flex;
		justify-content: flex-end;
	}
	.consult a {
		 padding: .2rem;
	}
	.pay {
		 height: 1rem;
		 display: flex;
	}
	.payL {
		width: 50%;
		background: #fff;
		line-height: 1rem;
		padding-left: .2rem;
		color: #ff9800;
	}
	.payL em {
		font-size: .36rem;
	}
	.payR {
		 flex: 1;
		 background: #ff9800;
		 line-height: 1rem;
		 text-align: center;
	}
	.payR span {
		color: #fff;
		font-size: .36rem;
	}
</style>
<div class="pay">
		<div class="payL">
		  <span>产品价格<em>148</em><em class="iconfont"></em></span>
		</div>
		<div class="payR">
			<span>提交订单</span>
		</div>	
	</div>