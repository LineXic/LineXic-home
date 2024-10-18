import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
      meta: {
      title: '主页',
    }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
      meta: {
      title: 'LineXic主页-关于我',
    }
      },
      {
      path: '/jiedan',
      name: '接单',
      component: () => import('../views/JiedanView.vue')
      meta: {
      title: 'LineXic主页-接单',
    }
    },
  ]
})

export default router
