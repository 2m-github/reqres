import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
function pageLoad(page){
  return () => import (/* webpackChunkName: "about" */ `../views/${page}.vue`)
}
const routes = [
  {
    path: '/',
    name: 'Home',
    component: pageLoad('Home')
  },
  {
    path: '/about',
    name: 'About',
    component: pageLoad('About')
  },
  {
    path: '/login',
    name: 'Login',
    component: pageLoad('Login')
  },
  {
    path: '/boardlist',
    name: 'BoardList',
    component: pageLoad('BoardList')

  },
  {
    path: '/boarddetail/:uid',
    name: 'BoardDetail',
    // beforeEnter:(to,from,next) => {
    //   next('/')
    // },
    component: pageLoad('BoardDetail')
  },
  {
    path: '/slot',
    name: 'slot',
    component: pageLoad('slot')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
