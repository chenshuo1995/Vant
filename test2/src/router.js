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
const main = [
  {
    path:'/main',
    name:'main',
    component:()=>import('./views/main/main.vue'),
    children:[
      {
        path:'home',
        name:'home',
        component:()=>import('./views/home/home.vue')
      },
      {
        path:'space',
        name:'space',
        component:()=>import('./views/space/space.vue')
      },
      {
        path: 'notes',
        name: 'notes',
        component: () => import('./views/notes/notes.vue')
      }
    ]
  },
  {
    path:'/',
    redirect: '/main/home',
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
    path:'/',
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

const  router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
		...home,
    ...notes,
    ...login,
    ...space
    // ...main
  ],
  
})

export default router

