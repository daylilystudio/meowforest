<template>
  <div class="tw-fixed tw-bottom-3 sm:tw-bottom-6 tw-right-3 md:tw-right-5 tw-z-20">
    <a v-for="item in list" :key="item.icon"
      @click="clickBtn(item.icon)" :class="item.class"
      class="shadow tw-block tw-w-10 tw-h-10 tw-flex tw-items-center tw-justify-center
      tw-bg-white tw-rounded-full tw-mb-2 tw-cursor-pointer">
      <font-awesome-icon :icon="['fas', item.icon]" class="fa-lg" />
    </a>
  </div>
  <n-modal v-model:show="showModal" :block-scroll="false">
    <n-card
      style="max-width:95%; width: 800px"
      title="My Fav Product"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <template v-for="item in globalStore.products" :key="item.id">
        <div v-if="globalStore.isfav['meowforestFav' + item.id]" class="tw-flex tw-justify-between tw-items-center tw-py-2">
          <a @click="globalStore.toggleFav(item.id)" title="Remove Fav" class="tw-p-2 -tw-ml-5 tw-cursor-pointer">
            <font-awesome-icon :icon="['far', 'circle-xmark']" class="text-theme fa-xl" />
          </a>
          <a @click="showModal=false;router.push('/products/'+item.id)" class="tw-flex-1 tw-flex tw-items-center tw-cursor-pointer">
            <img :src="item.imagesUrl[0]" :alt="item.title" class="tw-w-16 sm:tw-w-24 tw-rounded-lg">
            <span class="text-theme md:tw-text-base tw-pl-4">{{ item.title }} / ${{ item.price }}</span>
          </a>
          <a @click="globalStore.addCart(item.id, 1)" title="Add To Cart" class="bg-second tw-w-10 tw-h-10 tw-flex tw-items-center tw-justify-center tw-rounded-full hover:tw-brightness-90 -tw-mr-2 tw-cursor-pointer">
            <img v-show="!globalStore.loadingAdd" src="@/assets/img/icon_cart.svg" class="tw-w-5" alt="Cart">
            <font-awesome-icon v-show="globalStore.loadingAdd" class="fa-spin tw-text-white" :icon="['fas', 'spinner']" />
          </a>
        </div>
      </template>
      <div v-if="Object.values(globalStore.isfav).every(el => el === false)" class="tw-text-center">
        <img src="@/assets/img/nodata.png" class="tw-w-4/5 sm:tw-w-48 tw-h-auto" alt="no data">
      </div>
    </n-card>
  </n-modal>
</template>
<script>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { NModal, NCard } from 'naive-ui'
// store
import { useGlobalStore } from '@/stores/global.js'

export default {
  components: { NModal, NCard },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const showModal = ref(false)
    const globalStore = useGlobalStore()
    return {
      globalStore,
      route, router,
      showModal,
      clickBtn(e) {
        switch(e) {
          case 'heart':
            showModal.value = true
            break
          case 'arrow-up':
            window.scrollTo({
              top: document.querySelector('body'),
              behavior: 'smooth'
            })
            break
        }
      },
      list: [
        {
          icon: 'heart',
          class: 'text-second',
        },
        {
          icon: 'arrow-up',
          class: 'tw-mb-2'
        }
      ]
    }
  }
}
</script>