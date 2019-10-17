import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Payment from './views/Payment.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      // name: 'home',
      component: Home
    },
    {
      path: '/payment',
      component: Payment
    }
  ]
})
