import { ref, reactive, watch } from 'vue'
import { defineStore } from 'pinia'
import api from '@/utils/api'

export const useGlobalStore = defineStore('global', () => {
  const loadingPage = ref(false)
  const loading = ref(false)
  const loadingAdd = ref(false)
  const addingCart = ref(false) // Ani
  const menu = ref([
    {
      name: 'Products',
      link: '/products',
      key: 'all'
    },
    {
      name: 'Cat´s Food',
      link: '/products?category=food',
      key: 'food'
    },
    {
      name: 'Cat´s Use',
      link: '/products?category=use',
      key: 'use'
    },
    {
      name: 'Cat´s Toy',
      link: '/products?category=toy',
      key: 'toy'
    }
  ])
  // favorite
  const isFav = reactive({})
  const favId = Object.keys(window.localStorage).filter(el => el.match(/meowForestFav/gi))
  favId.forEach((el) => {
    isFav[el] = true
  })
  const toggleFav = (id) => {
    const fav = window.localStorage.getItem('meowForestFav' + id)
    if (fav === 'y') {
      window.localStorage.removeItem('meowForestFav' + id)
      isFav['meowForestFav' + id] = false
    } else {
      window.localStorage.setItem('meowForestFav' + id, 'y')
      isFav['meowForestFav' + id] = true
      window.$message.success('Added Fav !')
    }
  }
  // get all products
  const products = ref([])
  async function getProducts () {
    if (products.value.length > 0) return
    try {
      const res = await api.getProducts()
      if (res.data.success) {
        products.value = res.data.products
      }
    } catch (err) {
      window.$message.error(err.toString())
    }
  }
  // get carts
  const cart = ref([])
  async function getCart () {
    try {
      loading.value = true
      const res = await api.getCart()
      cart.value = res.data.data
      loading.value = false
    } catch (err) {
      window.$message.error(err.toString())
    }
  }
  // add to cart
  async function addCart (id, num) {
    try {
      loadingAdd.value = true
      const res = await api.addCart({ data: { product_id: id, qty: num } })
      loadingAdd.value = false
      addingCart.value = true
      setTimeout(() => {
        addingCart.value = false
      }, 1100)
      if (res) {
        const icon = res.data.success ? 'success' : 'error'
        window.$message[icon](res.data.message)
        await getCart()
      }
    } catch (err) {
      window.$message.error(err.toString())
    }
  }
  // method
  const payment = ref('')
  const shipping = ref('')
  const shippingMoney = ref(0)
  watch(shipping, (newVal) => {
    shippingMoney.value = newVal === 'delivery' ? 80 : 0
    shippingMoney.value = cart.value.final_total > 3000 ? 0 : shippingMoney.value
  })
  watch(cart, (newVal) => {
    shippingMoney.value = shipping.value === 'delivery' ? 80 : 0
    shippingMoney.value = newVal.final_total > 3000 ? 0 : shippingMoney.value
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
    loadingPage,
    loading,
    loadingAdd,
    addingCart,
    menu,
    isFav,
    toggleFav,
    getProducts,
    products,
    getCart,
    addCart,
    cart,
    payment,
    shipping,
    shippingMoney,
    userInfo,
    msg,
    cardInfo,
    initInfo
  }
})
