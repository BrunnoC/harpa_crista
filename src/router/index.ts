import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Hino from '../views/HinoView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/hino/:id?',
    name: 'hino',
    component: Hino
  }
]

const router = new VueRouter({
  routes
})

export default router
