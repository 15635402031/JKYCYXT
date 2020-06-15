import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: () => import('../views/showImg/showImg.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/home.vue')
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: () => import('../views/data')
  },
  {
    path: '/residentList',
    name: 'residentList',
    component: () => import('../views/residentList')
  }
]
const router = new VueRouter({
  routes
})

export default router
