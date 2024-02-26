// 路由為 createWebHashHistory 寫法
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/ContentView.vue'),
    },
    {
      path: '/legislator',
      component: () => import('../views/UnopenedView.vue'),
    },
  ]
})

export default router