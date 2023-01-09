import { ref, reactive, inject } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const axios = inject('axios')
  const loading = ref(false)
  const menu = ref([
    {
      name: '貓の食品',
      link: '/products?category=food',
      category: 'food'
    },
    {
      name: '貓の用品',
      link: '/products?category=use',
      category: 'use'
    },
    {
      name: '貓の玩具',
      link: '/products?category=toy',
      category: 'toy'
    }
  ])
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
  // checkout info
  const shippingInfo = reactive({
    name: '',
    phone: '',
    email: '',
    add: ''
  })
  const cardInfo = reactive({
    number: '',
    valid: '',
    cvv: ''
  })
  // order info
  const order = ref()

  return {
    loading, menu, products, getProducts,
    getCart, cart, payment, shipping,
    shippingInfo, cardInfo, order
  }
})
