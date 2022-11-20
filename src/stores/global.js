import { ref, inject } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const axios = inject('axios')
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

  return { menu, products, getProducts }
})
