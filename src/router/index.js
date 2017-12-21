import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'
import City from '@/page/index/city'
import Linkbank from '@/page/index/linkbank'
import List from '@/page/list/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
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
    }
  ]
})
