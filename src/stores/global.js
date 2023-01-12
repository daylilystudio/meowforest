import { ref, reactive, inject, watch } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const axios = inject('axios')
  const loadingPage = ref(false)
  const loading = ref(false)
  const menu = ref([
    {
      name: '全部商品',
      link: '/products',
      key: 'all'
    },
    {
      name: '貓の食品',
      link: '/products?category=food',
      key: 'food'
    },
    {
      name: '貓の用品',
      link: '/products?category=use',
      key: 'use'
    },
    {
      name: '貓の玩具',
      link: '/products?category=toy',
      key: 'toy'
    },
    {
      name: '登入後台',
      link: '/login',
      key: 'login'
    }
  ])
  // favorite
  const isfav = reactive({})
  const favId = Object.keys(window.localStorage).filter(el => el.match(/meowforestFav/gi))
  favId.forEach((el) => {
    isfav[el] = true
  })
  const toggleFav = (id) => {
    const fav = window.localStorage.getItem('meowforestFav' + id)
    if(fav==='y') {
      window.localStorage.removeItem('meowforestFav' + id)
      isfav['meowforestFav' + id] = false
    } else {
      window.localStorage.setItem('meowforestFav' + id, 'y')
      isfav['meowforestFav' + id] = true
    }
  }
  // get all products
  const products = ref([])
  async function getProducts() {
    if (products.value.length > 0) return
    const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/products/all`
    await axios.get(api).then((res) => {
      if(res.data.success){
        products.value = res.data.products
      }
    }).catch((err) => {
      console.log(err)
    })
  }
  // get carts
  const cart = ref([])
  async function getCart() {
    loading.value = true
    const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/cart`
    axios.get(api).then((res) => {
      cart.value = res.data.data
      loading.value = false
    }).catch((err) => {
      console.log(err)
      loading.value = false
    })
  }
  // method
  const payment = ref('')
  const shipping = ref('')
  const shippingMoney = ref(0)
  watch(shipping, (newVal)=>{
    shippingMoney.value = newVal==='delivery' ? 80 : 0
  })
  // checkout info
  const userInfo = reactive({
    name: '',
    tel: '',
    email: '',
    add: ''
  })
  const msg = ref('')
  const cardInfo = reactive({
    number: '',
    valid: '',
    cvv: ''
  })
  // init method, checkout info
  const initInfo = () => {
    payment.value = ''
    shipping.value = ''
    shippingMoney.value = 0
    userInfo.name = ''
    userInfo.tel = ''
    userInfo.email = ''
    userInfo.add = ''
    msg.value = ''
    cardInfo.number = ''
    cardInfo.valid = ''
    cardInfo.cvv = ''
  }

  return {
    loadingPage, loading, menu,
    isfav, toggleFav,
    getProducts, products,
    getCart, cart,
    payment, shipping, shippingMoney,
    userInfo, msg, cardInfo, initInfo
  }
})
