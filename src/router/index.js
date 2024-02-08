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
      path: '/rules',
      name: 'rules',
      component: () => import('../components/rules.vue')
    }
  ]
})

export default router