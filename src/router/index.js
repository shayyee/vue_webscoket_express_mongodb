import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Robot from '@/views/Robot'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/robot',
      name: 'Robot',
      component: Robot
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
