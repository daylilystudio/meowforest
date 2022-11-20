import { createRouter, createWebHistory } from 'vue-router'
// user
import LayoutView from '../views/user/LayoutView.vue'
import HomeView from '../views/user/HomeView.vue'
import ProductsView from '../views/user/ProductsView.vue'
import SingleView from '../views/user/SingleView.vue'
// admin
import LoginAdmin from '../views/admin/LoginAdmin.vue'
import HomeAdmin from '../views/admin/HomeAdmin.vue'
import ProductsAdmin from '../views/admin/ProductsAdmin.vue'

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
          component: HomeView
        },
        {
          path: '/products',
          name: 'user-products',
          component: ProductsView
        },
        {
          path: '/products/:id',
          name: 'user-single-product',
          component: SingleView
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginAdmin
    },
    {
      path: '/admin',
      name: 'admin',
      component: HomeAdmin,
      children:[
        {
          path: '/admin/products',
          name: 'admin-products',
          component: ProductsAdmin
        }
      ]
    }
  ]
})

export default router
