import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/views/Login'
import Home from '@/views/Home'
// import Parent2 from '@/components/Parent2'
// import Outter from '@/components/Outter'
import All from '@/components/All'
Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'all',
      component: All
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path:'list',
          name:'list',
          component:() => import('../views/List.vue')
        },
        {
          path:'user',
          name:'user',
          component:() => import('../views/User.vue')
        }
      ]
    },
    {
      path:'/add',
      name:'add',
      component:() => import('../views/Add.vue')
    }
  ]
})
