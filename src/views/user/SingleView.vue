<template>
  <the-header />
  <main class="container">
    <div class="dropShadow -tw-mt-24 tw-mb-4 tw-text-white">
      <router-link to="/" class="tw-font-bold">Home</router-link> /
      <router-link to="/products" class="tw-font-bold">Product List</router-link> /
      <span>{{ product.title }}</span>
    </div>
    <div v-if="!noProduct" class="shadow md:tw-grid tw-gap-8 tw-grid-cols-2 tw-bg-white tw-rounded-2xl tw-p-6 sm:tw-p-8">
      <div>
        <div class="tw-relative tw-w-full tw-h-0" style="padding-bottom:75%">
          <swiper
            v-if="product.imagesUrl?.length>0"
            :modules="modules"
            :thumbs="{ swiper: thumbsSwiper }"
            :allowTouchMove="product.imagesUrl?.length>1 ? true : false"
            class="!tw-absolute tw-top-0 tw-w-full tw-h-full">
            <swiper-slide
              v-for="(img, i) in product.imagesUrl" :key="i"
              :style="{backgroundImage:'url('+img+')'}" />
          </swiper>
        </div>
        <swiper 
          :allowTouchMove="false" :spaceBetween="8" :slidesPerView="5"
          watch-slides-progress :modules="modules" @swiper="setThumbsSwiper"
          id="thumbs" class="tw-mt-2 tw-leading-none">
          <swiper-slide v-for="(img, i) in product.imagesUrl" :key="i">
            <img class="tw-w-full tw-cursor-pointer" :src="img" :alt="i">
          </swiper-slide>
        </swiper>
      </div>
      <div class="tw-flex tw-flex-col tw-mt-2 md:tw-mt-0">
        <h2 class="tw-flex tw-justify-between tw-items-center">
          {{ product.title }}
          <font-awesome-icon @click="globalStore.toggleFav(product.id)" :icon="[globalStore.isfav['meowforestFav' + product.id]?'fas':'far', 'heart']" class="text-second tw-p-2 -tw-mr-2 tw-cursor-pointer" />
        </h2>
        <n-tag :bordered="false" round type="success" class="tw-self-start">{{ product.category }}</n-tag>
        <p class="tw-mt-6" v-html="product.description" />
        <p class="tw-my-4">
          <span class="text-second tw-text-2xl tw-font-bold tw-mr-3">NTD. {{ product.price }}</span>
          <del>NTD. {{ product.origin_price }}</del>
        </p>
        <p class="tw-mt-auto tw-grid tw-grid-cols-2 tw-gap-4">
          <n-input-number class="tw-col-span-2" v-model:value="addNum" :min="1" size="large" button-placement="both" />
          <button :disabled="globalStore.loadingAdd" @click="globalStore.addCart(product.id, addNum)" class="bg-second hover:tw-brightness-90 tw-rounded-full tw-text-white tw-font-bold tw-text-base tw-p-2.5 tw-border-0 tw-cursor-pointer">
            <font-awesome-icon :icon="['fas', 'plus']" /> 加入購物車
            <font-awesome-icon v-show="globalStore.loadingAdd" class="fa-spin" :icon="['fas', 'spinner']" />
          </button>
          <button :disabled="globalStore.loadingAdd" @click="buy(product.id)" class="hover:tw-brightness-75 tw-bg-transparent tw-rounded-full tw-font-bold tw-text-base tw-p-2 tw-text-gray-400 tw-border tw-border-gray-300 tw-border-solid tw-cursor-pointer">
            <font-awesome-icon :icon="['fas', 'dollar-sign']" /> 直接購買
            <font-awesome-icon v-show="globalStore.loadingAdd" class="fa-spin" :icon="['fas', 'spinner']" />
          </button>
        </p>
      </div>
    </div>
  </main>
  <!-- tab -->
  <section v-if="!noProduct" class="container tw-mt-10 md:tw-pl-1">
    <ul class="tw-flex tw-list-none tw-text-lg tw-font-bold">
      <li @click="tab='spec'" :class="{'active':tab==='spec'}" class="menuA tw-cursor-pointer tw-mr-8">Product Spec</li>
      <li @click="tab='notice'" :class="{'active':tab==='notice'}" class="menuA tw-cursor-pointer">Notice</li>
    </ul>
    <div v-if="tab==='spec'" class="tw-mt-8" v-html="product.content" />
    <div v-if="tab==='notice'" class="tw-mt-8">
      <template v-for="list in notice" :key="list.title">
        <p class="tw-font-bold tw-mt-4">
          <font-awesome-icon :icon="['fas', 'paw']" class="tw-mr-2" />{{list.title}}
        </p>
        <p v-for="item in list.content" :key="item" class="tw-ml-6">
          {{item}}
        </p>
      </template>
    </div>
  </section>
  <img v-if="noProduct" src="@/assets/img/nodata.png" class="tw-block tw-w-3/5 sm:tw-w-60 tw-h-auto tw-mx-auto tw-mt-32" alt="no data">
  <router-link to="/products" class="hover:tw-brightness-90 bg-third tw-rounded-full tw-block tw-font-bold tw-text-center tw-w-3/5 sm:tw-w-60 tw-p-4 tw-mt-10 tw-mx-auto">
    Back To Product List
  </router-link>
</template>
<script>
import TheHeader from '@/components/global/TheHeader.vue'
import { onBeforeMount, inject, ref } from 'vue'
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'
import { NInputNumber, NTag } from 'naive-ui'
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

export default {
  components: { TheHeader, Swiper, SwiperSlide, NInputNumber, NTag },
  setup() {
    const axios = inject('axios')
    const route = useRoute()
    const router = useRouter()
    const product = ref({})
    const noProduct = ref(false)
    const tab = ref('spec')
    const addNum = ref(1)
    const globalStore = useGlobalStore()
    const productId = route.path.split('/')[2]
    const getProduct = (id) => {
      globalStore.loadingPage = true
      const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/product/${id}`
      axios.get(api).then((res) => {
        if(res.data.success){
          product.value = res.data.product
        } else {
          noProduct.value = true
        }
        globalStore.loadingPage = false
      }).catch((err) => {
        console.log(err)
        noProduct.value = true
        globalStore.loadingPage = false
      })
    }
    onBeforeMount(() =>{
      getProduct(productId)
    })
    onBeforeRouteUpdate((to) => {
      getProduct(to.path.split('/')[2])
    })
    // swiper
    let thumbsSwiper = ref(null)
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    }
    return{
      globalStore,
      thumbsSwiper,
      setThumbsSwiper,
      modules: [Thumbs],
      noProduct, product, tab, addNum,
      async buy(id) {
        await globalStore.addCart(id, addNum.value)
        router.push('/cart')
      },
      notice: [
        {
          title: '運費說明',
          content: [
            '喵森據點取貨免運費｜宅配到府運費 80 元，',
            '單筆訂單滿 3,000 元免運費。',
            '若因其商品價值、時效性或體積等特性，僅提供一種出貨方式、運費不同時，將在該商品頁面告知。',
            '宅配除特殊品項，會於商品頁的「注意事項」公告配送說明，其餘品項使用宅配通進行配送。'
          ]
        },
        {
          title: '配送說明',
          content: [
            '付款完成日算起的7個工作天內(不含例假日)送達。'
          ]
        },
        {
          title: '退換貨說明',
          content: [
            '若有退換貨需求，可來信 meowforest@mail.com 或來電 02-12340000 洽詢，謝謝。'
          ]
        },
        {
          title: '特殊活動認購說明',
          content: [
            '凡報名特殊活動，付款完成即報名成功，課前將另發送mail通知，課程開立一般收據將統一由財務部門寄發。'
          ]
        }
    ]
    }
  }
}
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