<template>
  <div class="tw-fixed tw-bottom-3 sm:tw-bottom-6 tw-right-3 md:tw-right-5 tw-z-20">
    <a href=”#” v-for="item in list" :key="item.icon"
      @click.prevent="clickBtn(item.icon)" :class="(route.path.match(/checkout/)&&item.icon==='heart'?'tw-hidden':item.class)"
      class="tw-shadow-main tw-w-10 tw-h-10 tw-flex tw-items-center tw-justify-center
      tw-bg-white tw-rounded-full tw-mb-2 tw-cursor-pointer">
      <FontAwesomeIcon :icon="['fas', item.icon]" class="fa-lg" />
    </a>
  </div>
  <NModal v-model:show="showModal" :block-scroll="false" title="My Fav Product" preset="card" style="max-width:95%; width: 650px">
    <template v-for="item in globalStore.products" :key="item.id">
      <div v-if="globalStore.isFav['meowForestFav' + item.id]" class="tw-flex tw-justify-between tw-items-center tw-py-2">
        <a href=”#” @click.prevent="globalStore.toggleFav(item.id)" title="Remove Fav" class="tw-p-2 -tw-ml-2 tw-cursor-pointer">
          <FontAwesomeIcon :icon="['far', 'circle-xmark']" class="tw-text-theme fa-xl" />
        </a>
        <a href=”#” @click.prevent="showModal=false;router.push('/products/'+item.id)" class="tw-flex-1 tw-flex tw-items-center tw-cursor-pointer">
          <img :src="item.imagesUrl[0]" :alt="item.title" class="tw-w-16 sm:tw-w-24 tw-rounded-lg">
          <span class="tw-text-theme md:tw-text-base tw-pl-4">{{ item.title }} / ${{ item.price }}</span>
        </a>
        <a href=”#” @click.prevent="globalStore.addCart(item.id, 1);clickItem=item.id" title="Add To Cart" class="tw-bg-primary tw-w-10 tw-h-10 tw-flex tw-items-center tw-justify-center tw-rounded-full hover:tw-brightness-90 tw-cursor-pointer">
          <FontAwesomeIcon v-if="globalStore.loadingAdd&&clickItem===item.id" class="fa-spin tw-text-white" :icon="['fas', 'spinner']" />
          <img v-else src="@/assets/img/icon_cart.svg" class="tw-w-5" alt="Cart">
        </a>
      </div>
    </template>
    <div v-if="Object.values(globalStore.isFav).every(el => el === false)" class="tw-text-center">
      <img src="@/assets/img/noData.png" class="tw-w-4/5 sm:tw-w-48 tw-h-auto" alt="no data">
    </div>
  </NModal>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { NModal } from 'naive-ui'
// store
import { useGlobalStore } from '@/stores/global.js'

const route = useRoute()
const router = useRouter()
const showModal = ref(false)
const globalStore = useGlobalStore()
const clickItem = ref('')
const clickBtn = (e) => {
  switch (e) {
    case 'heart':
      showModal.value = true
      break
    case 'arrow-up':
      window.scrollTo({
        top: document.body,
        behavior: 'smooth'
      })
      break
  }
}
const list = [
  {
    icon: 'heart',
    class: 'tw-bg-notice tw-text-white'
  },
  {
    icon: 'arrow-up',
    class: 'tw-mb-2'
  }
]
</script>
