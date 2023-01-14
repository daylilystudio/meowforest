// 未完成
import axios from "axios"
import Cookies from 'js-cookie'
// API Document https://github.com/hexschool/vue3-course-api-wiki/wiki

const instance = axios.create({
  baseURL: import.meta.env.VITE_API,
  headers: { 'Content-Type': 'application/json' },
  timeout: 20000
});

// 此處的instance為我們create的實體
instance.interceptors.response.use(
  function (config) {
    // Do something with response data
    const token = Cookies.get('einsure_token') || null
    // 如果state有存token，則在headers上自動加上token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
      instance.defaults.headers.common.Authorization = `Bearer ${token}`
    }
    return config
  },
  function (error) {
    if (error.response){
      switch (error.response.status) {
        case 404:
          alert("你要找的頁面不存在")
          // go to 404 page
          break
        case 500:
          alert("程式發生問題")
          // go to 500 page
          break
        default:
          alert(error.message)
      }
    } 
    if (!window.navigator.onLine) {
      alert("網路出了點問題，請重新連線後重整網頁");
      return;
    }
    return Promise.reject(error);
  }
);

// 管理API https://ithelp.ithome.com.tw/articles/10230336