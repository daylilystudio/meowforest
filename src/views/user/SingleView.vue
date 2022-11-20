<template>
  <the-header />
  <main class="container">
    <div class="dropShadow -tw-mt-24 tw-mb-4 tw-text-white">
      <router-link to="/" class="tw-font-bold">Home</router-link> /
      <router-link to="/products" class="tw-font-bold">Product List</router-link> /
      <span>{{ product.title }}</span>
    </div>
    <div class="shadow md:tw-grid tw-grid-cols-2 tw-bg-white tw-rounded-2xl tw-p-6 sm:tw-p-8">
      <div>dsadas</div>
      <div>
        <h2>{{ product.title }}</h2>
        <p>
          <span>NT$ {{ product.price }}</span>
          <del>NT$ {{ product.origin_price }}</del>
        </p>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </main>
  <router-link class="bg-primary tw-rounded-full tw-block tw-text-white tw-w-3/5 sm:tw-w-60 tw-p-4 tw-mx-auto" to="/products/">
    Back to Product List
  </router-link>
</template>
<script>
import TheHeader from '@/components/global/TheHeader.vue'
import { onMounted, inject, ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  components: { TheHeader },
  setup() {
    const axios = inject('axios')
    const route = useRoute()
    const product = ref({})
    onMounted(() =>{
      const id = route.path.split('/')[2]
      const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/product/${id}`
      axios.get(api).then((res) => {
        if(res.data.success){
          product.value = res.data.product
        }
      }).catch((err) => {
        console.log(err)
      })
    })
    return{
      product
    }
  }
}
</script>
<style lang="">
    
</style>