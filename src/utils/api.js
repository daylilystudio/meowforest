// API Document https://github.com/hexschool/vue3-course-api-wiki/wiki
// 統一管理 API 教學 https://ithelp.ithome.com.tw/articles/10230336
import axios from "axios"
import Cookies from 'js-cookie'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API,
  headers: { 'Content-Type': 'application/json' },
  timeout: 20000
});

// 此處的instance為我們create的實體
instance.interceptors.response.use(
  function (config) {
    console.log('config', config)
    const token = Cookies.get('meowforestToken') || null
    if (token) {
      config.headers.Authorization = token
      instance.defaults.headers.common.Authorization = token
    }
    return config
  },
  function (error) {
    if (error.response){
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
      alert("Something wrong with the network, plz reconnect.")
      return
    }
    return Promise.reject(error)
  }
)

/////////
// API //
/////////

// Login
function login(data) {
  return instance.post('admin/signin', data)
}

// Check
function check() {
  return instance.post('api/user/check')
}

// Logout
function logout() {
  return instance.post('logout')
}

// Get Admin Data List
function getAdminData(slug, page) {
  return instance.get(`api/${import.meta.env.VITE_PATH}/admin/${slug}?page=${page}`)
}

// Update Admin Data List
function updateAdminData(http, slug, data) {
  return instance[http](`api/${import.meta.env.VITE_PATH}/admin/${slug}`, {'data': data})
}

// Delete Admin Data List
function delAdminData(slug, id) {
  return instance.delete(`api/${import.meta.env.VITE_PATH}/admin/${slug}/${id}`)
}

export default {
  login, check, logout,
  getAdminData,
  updateAdminData,
  delAdminData
}