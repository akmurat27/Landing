import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },{
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  },{
    path:'/lightview',
    name: 'lightview',
    component: () => import('@/views/LightView.vue')
  },{
    path: '/page',
    name: 'page',
    component: () => import('@/views/PageLogin.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
