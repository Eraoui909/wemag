import Vue from 'vue'
import VueRouter from 'vue-router'
import SingleArticle from "@/views/SingleArticle";

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
    path: '/activities',
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
  {
    path: '/single-article/:id',
    name: 'SingleArticle',
    component: SingleArticle,
  },
  {
    path: '/contents',
    name: 'Contents',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contents')
  },
  {
    path: '/press-and-media',
    name: 'Press_Media',
    component: () => import(/* webpackChunkName: "about" */ '../views/Press_media')
  },
  {
    path: '/projects-delivrables',
    name: 'projectsDelivrables',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProjectsDelivrables')
  },
  {
    path: '/scientific-valorization',
    name: 'ScientificValorization',
    component: () => import(/* webpackChunkName: "about" */ '../views/ScientificValorization')
  },
  {
    path: '/multiplier-events',
    name: 'MultiplierEvents',
    component: () => import(/* webpackChunkName: "about" */ '../views/MultiplierEvents')
  },

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
