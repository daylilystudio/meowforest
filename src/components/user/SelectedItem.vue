<template>
  <div class="tw-relative tw-text-white">
    <p v-if="products.length===0" class="tw-text-center tw-py-20">
      <FontAwesomeIcon class="fa-spin fa-xl" :icon="['fas', 'spinner']" />
    </p>
    <Swiper
      v-if="products.length>0"
      class="container !tw-py-10"
      :modules="modules"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :speed="600"
      :slides-per-view="3"
      :centeredSlides="true"
      :loop="true"
      :space-between="0"
      :navigation="{
        nextEl: '.swiper-navigation-next',
        prevEl: '.swiper-navigation-prev'
      }"
      :pagination="{ clickable: true }"
    >
      <SwiperSlide
        v-for="item in products" :key="item.title"
        class="!tw-overflow-hidden tw-border-2 tw-border-white tw-border-solid tw-font-bold tw-cursor-pointer"
        @click="router.push('/products/'+item.id)">
        <div style="border-radius:40px" :style="{backgroundImage: 'url('+ item.imagesUrl[0] +')'}"
          class="tw-absolute tw-top-0 tw-bg-cover tw-bg-center tw-w-full tw-h-full" />
        <p class="tw-bg-second tw-text-theme tw-relative tw-text-lg tw-rounded-full tw-py-1 tw-px-5">
          {{ item.category }}
        </p>
        <span class="tw-relative tw-text-xl tw-mt-1 tw-drop-shadow-main">{{ item.title }}</span>
      </SwiperSlide>
    </Swiper>
    <div class="swiper-navigation-prev tw-hidden md:tw-block tw-z-10 tw-absolute tw-left-4 tw-top-1/2 -tw-translate-y-1/2 tw-cursor-pointer">
      <FontAwesomeIcon :icon="['fas', 'paw']" class="fa-2xl fa-rotate-270" />
    </div>
    <div class="swiper-navigation-next tw-hidden md:tw-block tw-z-10 tw-absolute tw-right-4 tw-top-1/2 -tw-translate-y-1/2 tw-cursor-pointer">
      <FontAwesomeIcon :icon="['fas', 'paw']" class="fa-2xl fa-rotate-90" />
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '@/stores/global.js'
// swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
  components: { Swiper, SwiperSlide },
  setup () {
    const router = useRouter()
    const globalStore = useGlobalStore()
    const { products } = storeToRefs(globalStore)
    return {
      router,
      modules: [Autoplay, Pagination, Navigation],
      products
    }
  }
}
</script>

<style lang="scss" scoped>
  :deep(.swiper-wrapper) {
    align-items: center;
  }
  :deep(.swiper-slide) {
    height: 320px;
    opacity: 0;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 20px;
    transition-duration: .3s, .3s, .3s, .3s, 0s !important;
    transition-property: width, height, opacity, padding-bottom, z-index;
    &:hover div{
      filter: blur(1px) brightness(.7);
    }
  }
  :deep(.swiper-slide-active) {
    opacity: 1;
    width: 49% !important;
    z-index: 1;
    padding-bottom: 7%;
    @media (max-width:768px) {
      width: 59% !important;
    }
  }
  :deep(.swiper-slide-next), :deep(.swiper-slide-prev) {
    opacity: 1;
    height: 200px;
    width: 31.5% !important;
    @media (max-width:768px) {
      p, span {
        opacity: 0;
      }
    }
  }
  :deep(.swiper-slide-prev) {
    margin-right: -6%;
    @media (max-width:768px) {
      margin-right: -11%
    }
  }
  :deep(.swiper-slide-next) {
    margin-left: -6%;
    @media (max-width:768px) {
      margin-left: -11%
    }
  }
  :deep(.swiper-pagination){
    bottom: 0;
    line-height: 0;
    .swiper-pagination-bullet{
      opacity: 1;
      width: 10px;
      height: 10px;
      border: 1px solid #fff;
      background-color: transparent;
    }
    .swiper-pagination-bullet-active{
      background-color: #fff;
    }
  }
</style>
