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
          <img :src="item.imagesUrl[0]" :alt="item.title" class="tw-w-16 sm:tw-w-24 tw-rounded-lg">
          <p class="text-theme md:tw-text-base tw-flex-1 tw-pl-4">{{ item.title }} / ${{ item.price }}</p>
          <a @click="globalStore.toggleFav(item.id)" class="tw-p-2 -tw-mr-2 tw-cursor-pointer">
            <font-awesome-icon :icon="['far', 'circle-xmark']" class="text-primary fa-xl" />
          </a>
        </div>
      </template>
      <div v-if="Object.values(globalStore.isfav).every(el => el === false)" class="tw-text-center">
        <img :src="nodata" class="tw-w-4/5 sm:tw-w-48 tw-h-auto" alt="no data">
      </div>
    </n-card>
  </n-modal>
</template>
<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { NModal, NCard } from 'naive-ui'
// store
import { useGlobalStore } from '@/stores/global.js'
// img
import nodata from '@/assets/img/nodata.png'

export default {
  components: { NModal, NCard },
  setup() {
    const router = useRouter()
    const showModal = ref(false)
    const globalStore = useGlobalStore()
    return {
      nodata,
      globalStore,
      router,
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