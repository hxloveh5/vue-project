import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'
import Order from '@/page/order/order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    }
  ]
})
