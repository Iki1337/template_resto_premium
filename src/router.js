import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      /*Lazy Loading*/
      component: () => import('./views/Home.vue')
    },
    {
      path: '/presentation',
      name: 'presentation',
      /*Lazy Loading*/
      component: () => import('./views/Presentation.vue')
    },
    {
      path: '/menus',
      name: 'menus',
      /*Lazy Loading*/
      component: () => import('./views/Menus.vue')
    },
    {
      path: '/photos',
      name: 'photos',
      /*Lazy Loading*/
      component: () => import('./views/Photos.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      /*Lazy Loading*/
      component: () => import('./views/Contact.vue')
    },
  ]
})
