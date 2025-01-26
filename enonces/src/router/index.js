import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/vif',
      name: 'v-if',
      component: () => import('../views/conditions/Vif.vue'),
    },
    {
      path: '/velse',
      name: 'v-else',
      component: () => import('../views/conditions/Velse.vue'),
    },
    {
      path: '/velseif',
      name: 'v-else-if',
      component: () => import('../views/conditions/Velseif.vue'),
    },
    {
      path: '/vfor',
      name: 'v-for',
      component: () => import('../views/loops/Vfor.vue'),
    },
    {
      path: '/final',
      name: 'final',
      component: () => import('../views/Final.vue'),
    },
  ],
})

export default router
