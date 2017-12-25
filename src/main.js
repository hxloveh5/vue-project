// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/reset.css'
import './assets/style/border.css'
import 'swiper/dist/css/swiper.css'
import './assets/style/iconfont1/iconfont.css'
import './assets/style/iconfont2/iconfont.css'
import VueResource from 'vue-resource'
import VueSwiper from 'vue-awesome-swiper'
import './assets/style/iconfont/iconfont.css'
import FastClick from 'fastclick'

Vue.config.productionTip = false
Vue.use(VueSwiper)
Vue.use(VueResource)
FastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
