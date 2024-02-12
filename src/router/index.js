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
      component: () => import('../components/store/storePage.vue')
    },
    {
      path: '/rules',
      name: 'rules',
      component: () => import('../components/rules/rulesPage.vue')
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../components/authorization/authPage.vue')
    },
    {
      path: '/recovery',
      name: 'recovery',
      component: () => import('../components/authorization/recovery/recoveryPage.vue')
    }
  ]
})

export default router