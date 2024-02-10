import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(''),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/mainPage.vue')
    },
    {
      path: '/store',
      name: 'store',
      component: () => import('../components/store.vue')
    },
    {
      path: '/rules',
      name: 'rules',
      component: () => import('../components/rules.vue')
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../components/auth.vue')
    },
    {
      path: '/recovery',
      name: 'recovery',
      component: () => import('../components/recovery.vue')
    }
  ]
})

export default router