import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'
import City from '@/page/index/city'
import Linkbank from '@/page/index/linkbank'

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
    }
  ]
})
