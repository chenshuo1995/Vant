import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = [
  {
    path:'/login',
    name:'login',
    component:()=>import('./views/login/login.vue')
  }
]
const home = [
  {
    path:'/',
    name:'home',
    component:()=>import('./views/home/home.vue')
  }
]

 const about = [
  {
    path: '/about',
    name: 'about',
    component: () => import('./views/about/about.vue')
  }
]

const  router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
		...home,
    ...about,
    ...login,
	]
})

export default router

