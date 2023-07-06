<template>
  <TheHeader />
  <main class="container">
    <div class="tw-drop-shadow-main -tw-mt-24 tw-mb-4 tw-text-white">
      <RouterLink to="/" class="tw-font-bold">Home</RouterLink> /
      <RouterLink to="/products" class="tw-font-bold">Product List</RouterLink> /
      <span>{{ product.title }}</span>
    </div>
    <div v-if="!noProduct" class="tw-shadow-main md:tw-grid tw-gap-8 tw-grid-cols-2 tw-bg-white tw-rounded-2xl tw-p-6 sm:tw-p-8">
      <div>
        <div class="tw-relative tw-w-full tw-h-0" style="padding-bottom:75%">
          <Swiper
            v-if="product.imagesUrl?.length>0"
            :modules="modules"
            :thumbs="{ swiper: thumbsSwiper }"
            :allowTouchMove="product.imagesUrl?.length>1 ? true : false"
            class="!tw-absolute tw-top-0 tw-w-full tw-h-full">
            <SwiperSlide
              v-for="(img, i) in product.imagesUrl" :key="`swiper${i}`"
              :style="{backgroundImage:`url(${img})`}" />
          </Swiper>
        </div>
        <Swiper
          :allowTouchMove="false" :spaceBetween="8" :slidesPerView="5"
          watch-slides-progress :modules="modules" @swiper="setThumbsSwiper"
          id="thumbs" class="tw-mt-2 tw-leading-none">
          <SwiperSlide v-for="(img, i) in product.imagesUrl" :key="i">
            <img class="tw-w-full tw-cursor-pointer" :src="img" :alt="i">
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="tw-flex tw-flex-col tw-mt-2 md:tw-mt-0">
        <h2 class="tw-flex tw-justify-between tw-items-center">
          {{ product.title }}
          <FontAwesomeIcon @click="globalStore.toggleFav(product.id)" :icon="[globalStore.isFav['meowForestFav' + product.id]?'fas':'far', 'heart']" class="tw-text-notice tw-p-2 -tw-mr-2 tw-cursor-pointer" />
        </h2>
        <NTag :bordered="false" round type="success" class="tw-self-start">{{ product.category }}</NTag>
        <p class="tw-mt-6" v-html="product.description" />
        <p class="tw-my-4">
          <span class="tw-text-primary tw-text-2xl tw-font-bold tw-mr-3">NTD. {{ product.price }}</span>
          <del>NTD. {{ product.origin_price }}</del>
        </p>
        <p class="tw-mt-auto tw-grid tw-grid-cols-2 tw-gap-4">
          <NInputNumber class="tw-col-span-2" v-model:value="addNum" :min="1" size="large" button-placement="both" />
          <button type="button" :disabled="globalStore.loadingAdd" @click="globalStore.addCart(product.id, addNum)" class="tw-bg-second hover:tw-brightness-90 tw-rounded-full tw-text-theme tw-font-bold tw-text-base tw-p-2.5 tw-border-0 tw-cursor-pointer">
            <FontAwesomeIcon :icon="['fas', 'plus']" /> Add to Cart
            <FontAwesomeIcon v-show="globalStore.loadingAdd" class="fa-spin" :icon="['fas', 'spinner']" />
          </button>
          <button type="button" :disabled="globalStore.loadingAdd" @click="buy(product.id)" class="tw-bg-third hover:tw-brightness-90 tw-rounded-full tw-text-theme tw-font-bold tw-text-base tw-p-2 tw-border-0 tw-cursor-pointer">
            <FontAwesomeIcon :icon="['fas', 'dollar-sign']" /> Buy Now
            <FontAwesomeIcon v-show="globalStore.loadingAdd" class="fa-spin" :icon="['fas', 'spinner']" />
          </button>
        </p>
      </div>
    </div>
  </main>
  <!-- tab -->
  <section v-if="!noProduct" class="container tw-mt-10 md:tw-pl-1">
    <ul class="tw-flex tw-list-none tw-text-lg tw-font-bold">
      <li @click="tab='spec'" :class="{'active':tab === 'spec'}" class="menuA tw-cursor-pointer tw-mr-8">Product Spec</li>
      <li @click="tab='notice'" :class="{'active':tab === 'notice'}" class="menuA tw-cursor-pointer">Notice</li>
    </ul>
    <div v-if="tab==='spec'" class="tw-mt-8" v-html="product.content" />
    <div v-if="tab==='notice'" class="tw-mt-8">
      <template v-for="list in notice" :key="list.title">
        <p class="tw-font-bold tw-mt-4">
          <FontAwesomeIcon :icon="['fas', 'paw']" class="tw-mr-2" />{{ list.title }}
        </p>
        <p v-for="item in list.content" :key="item" class="tw-ml-6">
          {{ item }}
        </p>
      </template>
    </div>
  </section>
  <img v-if="noProduct" src="@/assets/img/noData.png" class="tw-block tw-w-3/5 sm:tw-w-60 tw-h-auto tw-mx-auto tw-mt-32" alt="no data">
  <RouterLink to="/products" class="hover:tw-brightness-90 tw-bg-third tw-rounded-full tw-block tw-font-bold tw-text-center tw-w-3/5 sm:tw-w-60 tw-p-4 tw-mt-10 tw-mx-auto">
    Back To Product List
  </RouterLink>
</template>

<script setup>
import TheHeader from '@/components/global/TheHeader.vue'
import { onBeforeMount, ref } from 'vue'
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'
import { NInputNumber, NTag } from 'naive-ui'
import api from '@/utils/api'
// swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Thumbs } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
// store
import { useGlobalStore } from '@/stores/global.js'

const route = useRoute()
const router = useRouter()
const product = ref({})
const noProduct = ref(false)
const tab = ref('spec')
const addNum = ref(1)
const globalStore = useGlobalStore()
const productId = route.path.split('/')[2]
const getProduct = async (id) => {
  try {
    globalStore.loadingPage = true
    const res = await api.getProduct(id)
    if (res.data.success) {
      product.value = res.data.product
    } else {
      noProduct.value = true
    }
    globalStore.loadingPage = false
  } catch (err) {
    window.$message.error(err.toString())
  }
}
onBeforeMount(() => {
  getProduct(productId)
})
onBeforeRouteUpdate((to) => {
  getProduct(to.path.split('/')[2])
})
// swiper
const thumbsSwiper = ref(null)
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}
const modules = [Thumbs]
const buy = async (id) => {
  try {
    await globalStore.addCart(id, addNum.value)
    router.push('/cart')
  } catch (err) {
    window.$message.error(err.toString())
  }
}
const notice = [
  {
    title: 'Shipping Fees',
    content: [
      'Free shipping for pick-up at Meow Forest store.Home delivery fee: NTD 80.',
      'Free shipping for single orders over NTD 3,000.',
      'For certain products with specific characteristics such as value, urgency, or size, only one shipping method may be available, and the shipping fee will be indicated on the product page.',
      'For home delivery, except for special items, the shipping instructions will be provided in the "Notes" section on the product page. Other items will be delivered via a courier service.'
    ]
  },
  {
    title: 'Delivery Instructions',
    content: [
      'Delivery will be made within 7 business days (excluding holidays) from the date of payment completion.'
    ]
  },
  {
    title: 'Return and Exchange Instructions',
    content: [
      'For any return or exchange requests, please contact us by email at meowforest@mail.com or call 02-12340000. Thank you.'
    ]
  },
  {
    title: 'Special Event Subscription Instructions',
    content: [
      'Upon completing the payment, you will be successfully registered for the special event. A separate email notification will be sent before the event. General receipts for the course will be issued by the finance department.'
    ]
  }
]
</script>

<style scoped>
  .menuA::after{
    background-color: var(--secondColor);
  }
  .active::after{
    width: 100%;
  }
  :deep(.swiper-slide){
    background-size: cover;
    background-position: center;
  }
  :deep(.n-input__input-el){
    text-align: center;
  }
</style>
