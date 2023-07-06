// API Document https://github.com/hexschool/vue3-course-api-wiki/wiki
// 統一管理 API 教學 https://ithelp.ithome.com.tw/articles/10230336
import axios from 'axios'
import Cookies from 'js-cookie'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API,
  headers: { 'Content-Type': 'application/json' },
  timeout: 20000
})

// request 的攔截器
instance.interceptors.request.use(
  function (config) {
    const token = Cookies.get('meowForestToken') || null
    if (token) {
      config.headers.Authorization = token
      instance.defaults.headers.common.Authorization = token
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
// response 攔截器
instance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          alert('Page Not Found')
          break
        case 500:
          alert('Programming Error')
          break
        default:
          alert(error.message)
      }
    }
    if (!window.navigator.onLine) {
      alert('Something wrong with the network, plz reconnect.')
      return
    }
    return Promise.reject(error)
  }
)

// ///////// //
// Web API //
// ///////// //

// getProduct
async function getProduct (id) {
  return instance.get(`api/${import.meta.env.VITE_PATH}/product/${id}`)
}

// getProducts
async function getProducts () {
  return instance.get(`api/${import.meta.env.VITE_PATH}/products/all`)
}

// getCart
async function getCart (id) {
  return instance.get(`api/${import.meta.env.VITE_PATH}/cart`)
}

// addCart
async function addCart (data) {
  return instance.post(`api/${import.meta.env.VITE_PATH}/cart`, data)
}

// updateCart
async function updateCart (cartId, data) {
  return instance.put(`api/${import.meta.env.VITE_PATH}/cart/${cartId}`, data)
}

// delCart
async function delCart (id) {
  return instance.delete(`api/${import.meta.env.VITE_PATH}/cart/${id}`)
}

// enterCoupon
async function enterCoupon (data) {
  return instance.post(`api/${import.meta.env.VITE_PATH}/coupon`, data)
}

// submitOrder
async function submitOrder (data) {
  return instance.post(`api/${import.meta.env.VITE_PATH}/order`, data)
}

// payOrder
async function payOrder (id) {
  return instance.post(`api/${import.meta.env.VITE_PATH}/order`)
}

// getOrder
async function getOrder (id) {
  return instance.get(`api/${import.meta.env.VITE_PATH}/order/${id}`)
}

// ///////// //
// Admin API //
// ///////// //

// Login
async function login (data) {
  return instance.post('admin/signin', data)
}

// Check
async function check () {
  return instance.post('api/user/check')
}

// Logout
async function logout () {
  return instance.post('logout')
}

// Upload Img
async function uploadImg (data, onProgress) {
  return instance.post(`api/${import.meta.env.VITE_PATH}/admin/upload`, data, onProgress)
}

// Get Admin Data List
async function getAdminData (slug, page) {
  return instance.get(`api/${import.meta.env.VITE_PATH}/admin/${slug}?page=${page}`)
}

// Update Admin Data List
async function updateAdminData (http, slug, data) {
  return instance[http](`api/${import.meta.env.VITE_PATH}/admin/${slug}`, { data })
}

// Delete Admin Data List
async function delAdminData (slug, id) {
  return instance.delete(`api/${import.meta.env.VITE_PATH}/admin/${slug}/${id}`)
}

export default {
  getProduct,
  getProducts,
  getCart,
  addCart,
  updateCart,
  delCart,
  enterCoupon,
  submitOrder,
  payOrder,
  getOrder,
  login,
  check,
  logout,
  uploadImg,
  getAdminData,
  updateAdminData,
  delAdminData
}
