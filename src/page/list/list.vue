<template>
  <div>
  <header class="header">
    <div class="back iconfont">&#xe624;</div>
    <div class="search"><a href="#" class="prompt">一日游</a></div>
    <div class="city"><span class="position">搜索</span></div>
  </header>
  
    <div class="scrollRow wrapper " ref="wrapperUl">
        <ul class="scroll-cont" v-bind:class="{bigger:isActive}" > 
          <li>八达岭长城</li>
          <li>古北水镇</li>
          <li>故宫</li>
          <li>鸟巢</li>
          <li>水立方</li>
          <li>八达岭长城</li>
          <li>古北水镇</li>
          <li>故宫</li>
          <li>鸟巢</li>
          <li>水立方</li>
          <li>八达岭长城</li>
          <li>古北水镇</li>
          <li>故宫</li>
          <li>鸟巢</li>
          <li>水立方</li>
          <li>八达岭长城</li>
          <li>古北水镇</li>
          <li>故宫</li>
          <li>鸟巢</li>
          <li>水立方</li>
        </ul>
        <span class="pull iconfont" @click="handleClickPull"></span>
    </div>

  <div class="list-box">
    <div ref="scrollList">
    <ul v-for="item in listInfo" class="list-cont">
    <li>
        <router-link to="/detail">
        <div><img :src="item.imgUrl" alt=""></div>
        <div v-text="item.title"></div>
        <div><span>北京出发</span><em>无自费</em><i>无购物</i></div>
        <div v-text="'已售'+item.sold"></div>
        <div>&yen</div>
        <div class="price" v-text="item.price"> 
        </div>
        <span class="upTo">起</span>
        </router-link>
    </li>
    </ul>
    </div>
  </div>

  <footer class="select">
        <li  @click="handleClickClass">
            <i class="iconfont">&#xe6b0;</i><br>
            <span>全部分类</span>
            <div class="location" v-show="flag">
                <ul class="menu1">
                    <li>一日游</li>
                    <li>文化古迹</li>
                    <li>交通运输</li>
                    <li>运动健身</li>
                </ul>
            </div>
        </li>
        <li @click="handleClickClass">
            <i class="iconfont">&#xe61d;</i><br>
            <span>筛选</span>
            <div class="location" v-show="flag">
                <ul class="menu2">
                    <li>一日游</li>
                    <li>文化古迹</li>
                    <li>交通运输</li>
                    <li>运动健身</li>
                </ul>
            </div>
        </li>
        <li>
            <i class="iconfont">&#xe601;</i><br>
            <span>排序</span>
        </li>
  </footer>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'list',
    data () {
      return {
        listInfo: [],
        flag: true,
        isActive: false
      }
    },
    methods: {
      getListData () {
        this.$http.get('/static/list.json')
        .then(this.handleGetDataSucc.bind(this))
      },
      handleGetDataSucc (res) {
        const body = res.body
        if (body && body.data && body.data.list) {
          this.listInfo = body.data.list
        }
      },
      handleClickClass () {   
          if(this.flag == true)
        this.flag = false
          else{
            this.flag = true
        }
      },
      handleClickPull () {
          if(this.isActive == true)
          this.isActive = false
          else
         {
            this.isActive = true
          }
      }
    },
    created () {
      this.getListData()
    },
    // mounted () {
    //   const listLength = this.$refs.wrapperUl.getElementByTagName('li').length;
    //   this.$refs.wrapperUl.style.width = document.body.clientWidth + 'px'
    //   this.scroll = new BScroll('.wrapper', {scrollX: true})
    // },
    // watch: {
    //   listInfo () {
    //     this.$nextTick(() => {
    //       this.scroll.refresh()
    //     })
    //     setTimeout(() => {
    //       this.scroll.refresh()
    //     }, 2000)
    //   }
    // },
    mounted () {
    this.$nextTick( () => {
    //   this.scroll = new BScroll(this.$refs.wrapperUl,{scrollX: true})
      this.scroll1 = new BScroll(this.$refs.scrollList)
    })
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
    padding-left:.2rem;
}
.prompt {
    font-size: 0.26rem;
    color: #000;
    line-height: 0.6rem;
}
.city{
    width:.97rem;
    line-height: .86rem;
    text-align: left;
    margin-left:.2rem;
}
.position{
    width:0.85rem;
    display:block;
    text-overflow: ellipsis;
    white-space: nowrap;
    /* overflow: hidden; */
}
/* .city::after{
    content:"";
    display: block;
    width: 0px;
    height: 0px;
    border: 0.1rem solid #fff;
    border-color: white transparent transparent transparent;
    position: absolute;
    right: 0.28rem;
    top: 0.36rem;
} */
.scrollRow{
    min-width:7.5rem;
    min-height:.75rem;
    padding-top:.15rem;
    padding-left:.2rem;
    background:#f4f4f4;
    position:relative;
}
.scrollRow .pull{
    content:"";
    display: block;
    width: 0px;
    height: 0px;
    border: 0.1rem solid #fff;
    border-color: #ccc transparent transparent transparent;
    position: absolute;
    right: 0.28rem;
    top: 0.36rem;
}
.scroll-cont {
    flex-wrap: nowrap;
    height:.52rem; 
    min-width:7.5rem;
    overflow-x: scroll;
    /* overflow: scroll; */
}
.scrollRow li{
    float:left;
    height: .52rem;
    padding:.05rem auto;
    white-space: nowrap;
    text-align: center;
    line-height: .52rem;
    padding:0 .04rem;
    margin-right:.14rem;
    margin-bottom: .14rem;
    background: #fff;
}
.list-box{   
    width:98%;
    min-height: 4rem;
    padding-top:.14rem;
    padding-left:.2rem;
    background:#f2f2f2;
} 
.list-cont{
    position: relative;
    height:2rem;
    background:#fff;
}
.list-cont div:nth-of-type(1) {
    position:absolute;
}
.list-cont div:nth-of-type(1) img{
    width:1.64rem;
    height:1.64rem;
}
.list-cont div:nth-of-type(2) {
    margin-left:1.8rem;
    line-height: .40rem;
    font-size:.28rem;
    color:#000;
}
.list-cont div:nth-of-type(3) {
    margin-left:1.8rem;
    margin-top:.07rem;
}
.list-cont div:nth-of-type(3) span{
    font-size:.2rem;
    color:darkblue;
    padding-right:.2rem;
    border-right:1px solid #ccc;
}
.list-cont div:nth-of-type(3) em{
    padding-left:.2rem;
    padding-right:.2rem;
    border-right:1px solid #ccc;
    font-size:.2rem;
    color:#6e6e6e;
}
.list-cont div:nth-of-type(3) i{
    padding-left:.2rem;
    font-size:.2rem;
    color:#6e6e6e;
}
.list-cont div:nth-of-type(4) {
    margin-top: .25rem;
    margin-left:1.8rem;
    font-size:.2rem;
    color:#a1a1a1;
}
.list-cont div:nth-of-type(5) {
    position:absolute;
    top:1.10rem;
    right:1rem;
    font-size:.14rem;
    color:orange;
}
.list-cont div:nth-of-type(6) {
    position:absolute;
    top:1.04rem;
    right:.5rem;
    color:orange;
    font-size:.30rem;
}
.upTo {
    position:absolute;
    top:1.08rem;
    right:.2rem;
    color:#000;
    font-size:.20rem;
}
.select{
    position:fixed;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    /* align-items: center; */
    width:100%;
    height:.9rem;
    list-style:none;
    background: #000;
}
.select li{
    position: relative;
    margin-top:.05rem;
    text-align: center;
    color:#fff;
}
.location {
    position:absolute;
    left:-1.1rem;
    top:-3.35rem;
    width:8.4rem;
    height: 3.3rem;
    background: #fff;
    opacity: 1;
}
.menu1{
    width:3.1rem;
    height:100%;
    background: #f4f5f7;
    position: absolute;
    left:0rem;
    top:-0.05rem;
}
.menu1 li{
    width:100%;
    line-height: .5rem;
    color:#000;
}
.bigger{
    height:2rem;
}
</style>  