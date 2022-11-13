import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from '../views/user/LayoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: LayoutView,
      children:[
        {
          path: '/',
          name: 'home',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/user/HomeView.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/admin/LoginAdmin.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/HomeAdmin.vue'),
      children:[
        {
          path: '/admin/products',
          name: 'admin-products',
          component: () => import('../views/admin/ProductsAdmin.vue')
        }
      ]
    }
  ]
})

export default router
