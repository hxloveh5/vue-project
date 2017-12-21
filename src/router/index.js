import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'
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
      path: '/list',
      name: 'list',
      component: List
    }
  ]
})
