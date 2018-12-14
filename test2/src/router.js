import Vue from 'vue'
import Router from 'vue-router'
import main from '@/views/main/main'

Vue.use(Router)

const login = [
  {
    path:'/login',
    name:'login',
    component:()=>import('./views/login/login.vue')
  }
]
//首页
const home = [
  {
    path:'/home',
    name:'home',
    component:()=>import('./views/home/home.vue')
  },
  {
    path:'/home',
    redirect: '/home',
  }
]
//空间
const space = [
  {
    path:'/space',
    name:'space',
    component:()=>import('./views/space/space.vue')
  }
]
//笔记
 const notes = [
  {
    path: '/notes',
    name: 'notes',
    component: () => import('./views/notes/notes.vue')
  }
]
export const mainRouter = {
	path: '/',
	name: 'main',
	redirect: '/home',
	component: main,
	children:[
    ...home,
    ...notes,
    ...login,
    ...space
  ]
}
const  router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      mainRouter,
  ]
})

export default router

