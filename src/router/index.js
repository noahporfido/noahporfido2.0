import Vue from 'vue'
import VueRouter from 'vue-router'
import { FullpageLayout } from '@/layouts'

Vue.use(VueRouter)

const routes = [
  {
    name: 'FullpageLayout',
    path: '',
    component: FullpageLayout,
    chidren: []
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
