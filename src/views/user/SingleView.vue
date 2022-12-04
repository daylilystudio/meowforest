<template>
  <the-header />
  <main class="container">
    <div class="dropShadow -tw-mt-24 tw-mb-4 tw-text-white">
      <router-link to="/" class="tw-font-bold">Home</router-link> /
      <router-link to="/products" class="tw-font-bold">Product List</router-link> /
      <span>{{ product.title }}</span>
    </div>
    <div class="shadow md:tw-grid tw-gap-8 tw-grid-cols-2 tw-bg-white tw-rounded-2xl tw-p-6 sm:tw-p-8">
      <div>
        <div class="tw-relative tw-w-full tw-h-0" style="padding-bottom:75%">
          <swiper
            v-if="product.imagesUrl?.length>0"
            :modules="modules"
            :thumbs="{ swiper: thumbsSwiper }"
            :allowTouchMove="product.imagesUrl?.length>1 ? true : false"
            class="tw-absolute tw-top-0 tw-w-full tw-h-full">
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
        <h2>{{ product.title }}</h2>
        <p v-html="product.description" />
        <p class="tw-my-4">
          <span class="text-second tw-text-2xl tw-font-bold tw-mr-3">NT$ {{ product.price }}</span>
          <del>NT$ {{ product.origin_price }}</del>
        </p>
        <p class="tw-mt-auto tw-grid tw-grid-cols-2 tw-gap-4">
          <n-input-number class="tw-col-span-2" v-model:value="addNum" :min="1" size="large" button-placement="both" />
          <button :disabled="loadingAdd" @click="addCart(product.id)" class="bg-second hover:tw-brightness-90 tw-rounded-full tw-text-white tw-font-bold tw-text-base tw-p-2.5 tw-border-0 tw-cursor-pointer">
            <font-awesome-icon :icon="['fas', 'plus']" /> 加入購物車
            <font-awesome-icon v-show="loadingAdd" class="fa-spin" :icon="['fas', 'spinner']" />
          </button>
          <button :disabled="loadingAdd" @click="buy(product.id)" class="hover:tw-brightness-75 tw-bg-transparent tw-rounded-full tw-font-bold tw-text-base tw-p-2 tw-text-gray-400 tw-border tw-border-gray-300 tw-border-solid tw-cursor-pointer">
            <font-awesome-icon :icon="['fas', 'dollar-sign']" /> 直接購買
            <font-awesome-icon v-show="loadingAdd" class="fa-spin" :icon="['fas', 'spinner']" />
          </button>
        </p>
      </div>
    </div>
  </main>
  <!-- tab -->
  <section class="container tw-mt-10 md:tw-pl-1">
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
  <router-link class="hover:tw-brightness-90 bg-third tw-rounded-full tw-block tw-font-bold tw-text-center tw-w-3/5 sm:tw-w-60 tw-p-4 tw-mt-10 tw-mx-auto" to="/products">
    Back to Product List
  </router-link>
</template>
<script>
import TheHeader from '@/components/global/TheHeader.vue'
import { onMounted, inject, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { NInputNumber } from 'naive-ui'
// swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Thumbs } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import "swiper/css/free-mode"
import "swiper/css/thumbs"

export default {
  components: { TheHeader, Swiper, SwiperSlide, NInputNumber },
  setup() {
    const axios = inject('axios')
    const route = useRoute()
    const router = useRouter()
    const product = ref({})
    const tab = ref('spec')
    const addNum = ref(1)
    const loadingAdd = ref(false)
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
    // swiper
    let thumbsSwiper = ref(null)
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    }
    // api
    const addCartApi = async (id) => {
      loadingAdd.value = true
      const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/cart`
      try {
        const res = await axios.post(api,{'data': {'product_id':id,'qty':addNum.value}})
        loadingAdd.value = false
        return res
      } catch (err) {
        loadingAdd.value = false
        return err
      }
    }
    return{
      thumbsSwiper,
      setThumbsSwiper,
      modules: [Thumbs],
      product, tab, addNum, loadingAdd,
      async addCart(id) {
        const res = await addCartApi(id)
        const icon = res.data.success ? 'success' : 'error'
        window.$message[icon](res.data.message)
      },
      async buy(id) {
        await addCartApi(id)
        router.push('/cart')
      },
      notice: [
        {
          title: '運費說明',
          content: [
            '超商取貨運費 60 元｜宅配到府運費 80 元，',
            '單筆訂單滿 1,000 元免運費。',
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
          title: '課程活動認購說明',
          content: [
            '凡報名課程活動，付款完成即報名成功，課前將另發送mail通知，課程開立一般收據將統一由財務部門寄發。'
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
</style>