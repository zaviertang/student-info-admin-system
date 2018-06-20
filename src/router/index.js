import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/add'
    },
    {
      path: '/add',
      component: Layout,
      redirect: '/add/index',
      children: [{
        path: 'index',
        component: () => import('@/views/add/index')
      }]
    },
    {
      path: '/edu',
      component: Layout,
      redirect: '/edu/change',
      children: [{
        path: 'change',
        component: () => import('@/views/edu/change')
      }, {
        path: 'award',
        component: () => import('@/views/edu/award')
      }, {
        path: 'punish',
        component: () => import('@/views/edu/punish')
      }]
    },
    {
      path: '/person',
      component: Layout,
      redirect: '/person/index',
      children: [{
        path: 'index',
        component: () => import('@/views/person/Table')
      }]
    }
  ]
})
