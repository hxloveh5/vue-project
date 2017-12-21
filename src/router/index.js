import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'
import Detail from '@/page/detail/detail'

import City from '@/page/index/city'
import Linkbank from '@/page/index/linkbank'
import List from '@/page/list/list'
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
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/linkbank',
      name: 'linkbank',
      component: Linkbank
    },
    {

      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    }
  ]
})
