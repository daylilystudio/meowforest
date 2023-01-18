import { createRouter, createWebHistory } from 'vue-router'
// user
import NotFound from '../views/user/NotFound.vue'
import LayoutView from '../layouts/LayoutView.vue'
import HomeView from '../views/user/HomeView.vue'
import ProductsView from '../views/user/ProductsView.vue'
import SingleView from '../views/user/SingleView.vue'
import CartView from '../views/user/CartView.vue'
import CheckoutView from '../views/user/CheckoutView.vue'
import OrderView from '../views/user/OrderView.vue'
// admin
import LoginAdmin from '../views/admin/LoginAdmin.vue'
import HomeAdmin from '../views/admin/HomeAdmin.vue'
import ProductsAdmin from '../views/admin/ProductsAdmin.vue'
import OrdersAdmin from '../views/admin/OrdersAdmin.vue'
import CouponsAdmin from '../views/admin/CouponsAdmin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: LayoutView,
      redirect: '/',
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
        },
        {
          path: '/cart',
          name: 'user-cart',
          component: CartView
        },
        {
          path: '/checkout',
          name: 'user-checkout',
          component: CheckoutView
        },
        {
          path: '/order/:orderid',
          name: 'user-order',
          component: OrderView
        },
        { path: '/:pathMatch(.*)', name: 'not-found', component: NotFound }
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
        },
        {
          path: '/admin/orders',
          name: 'admin-orders',
          component: OrdersAdmin
        },
        {
          path: '/admin/coupons',
          name: 'admin-coupons',
          component: CouponsAdmin
        }
      ]
    }
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router