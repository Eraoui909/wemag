import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "about" */ '../views/News')
  },
  {
    path: '/project-results',
    name: 'ProjectResults',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProjectResults')
  },
  {
    path: '/partners',
    name: 'Partners',
    component: () => import(/* webpackChunkName: "about" */ '../views/Partners')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
