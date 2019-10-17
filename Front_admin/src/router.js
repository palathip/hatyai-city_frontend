import Vue from 'vue'
import Router from 'vue-router'
import LOGIN from './views/LOGIN.vue'
import Home from './views/Home.vue'
// import Head from './components/Head.vue'
import HOMEADMIN from './views/HOMEADMIN.vue'
import ROOM from './components/ROOM.vue'
import ROOM_TYPE from './components/ROOM_TYPE.vue'
import ROOM1 from './components/ROOM1.vue'
import ROOMCHECK from './components/ROOMCHECK.vue'
import CREDITFORM from './components/CREDITFORM.vue'
import S123 from './components/S123.vue'
import LEARN from './components/LEARN.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: LOGIN
    },
    {
      path: '/S123',
      name: 'S123',
      component: S123
    },
    {
      path: '/LEARN',
      name: 'LEARN',
      component: LEARN
    },
    {
      path: '/HOMEADMIN',
      component: HOMEADMIN,
      children: [
        { path: '/ROOM', component: ROOM },
        { path: '/ROOM_TYPE', component: ROOM_TYPE },
        { path: '/ROOM1', component: ROOM1 },
        { path: '/ROOMCHECK', component: ROOMCHECK },
        { path: '/CREDITFORM', component: CREDITFORM }
      ]
    }
  ]
})
