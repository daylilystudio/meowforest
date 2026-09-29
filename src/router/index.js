import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('../layouts/LayoutView.vue'),
      redirect: '/',
      children: [
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
          path: '/order/:orderId',
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
      children: [
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
  scrollBehavior () {
    return { top: 0, behavior: 'smooth' }
  }
})

// 動態載入的頁面 chunk 失效時（dev server 重新預打包依賴、或重新部署後舊檔名已不存在），
// 換頁會直接失敗而停在原頁。此時重新整理並前往目標頁，拿到最新的檔案。
// 用 sessionStorage 記錄，避免檔案真的不存在時無限重新整理。
const CHUNK_ERROR = /Failed to fetch dynamically imported module|Importing a module script failed|error loading dynamically imported module|Unable to preload CSS/i
router.onError((err, to) => {
  if (!CHUNK_ERROR.test(err?.message)) return
  const key = 'chunkReloaded'
  try {
    if (sessionStorage.getItem(key) === to.fullPath) return
    sessionStorage.setItem(key, to.fullPath)
  } catch {}
  window.location.hash = to.fullPath
  window.location.reload()
})
router.afterEach(() => {
  try { sessionStorage.removeItem('chunkReloaded') } catch {}
})

export default router
