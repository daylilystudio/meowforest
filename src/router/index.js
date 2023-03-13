import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('../layouts/LayoutView.vue'),
      redirect: '/',
      children:[
        {
          path: '/',
          name: 'home',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/user/HomeView.vue')
        },
        {
          path: '/products',
          name: 'user-products',
          component: () => import('../views/user/ProductsView.vue')
        },
        {
          path: '/products/:id',
          name: 'user-single-product',
          component: () => import('../views/user/SingleView.vue')
        },
        {
          path: '/cart',
          name: 'user-cart',
          component: () => import('../views/user/CartView.vue')
        },
        {
          path: '/checkout',
          name: 'user-checkout',
          component: () => import('../views/user/CheckoutView.vue')
        },
        {
          path: '/order/:orderid',
          name: 'user-order',
          component: () => import('../views/user/OrderView.vue')
        },
        { path: '/:pathMatch(.*)', name: 'not-found', component: () => import('../views/user/NotFound.vue') }
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
        },
        {
          path: '/admin/orders',
          name: 'admin-orders',
          component: () => import('../views/admin/OrdersAdmin.vue')
        },
        {
          path: '/admin/coupons',
          name: 'admin-coupons',
          component: () => import('../views/admin/CouponsAdmin.vue')
        }
      ]
    }
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router