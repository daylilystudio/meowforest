<template>
  <the-header />
  <main class="container">
    <div class="dropShadow -tw-mt-24 tw-mb-4 tw-text-white">
      <router-link to="/" class="tw-font-bold">Home</router-link> /
      <span>{{ breadcrumb }}</span>
    </div>
    <section class="shadow tw-bg-white tw-rounded-2xl tw-mb-8 tw-p-4 sm:tw-p-6">
      <the-process-bar :process="process" />
      <slot name="content" />
    </section>
    <template v-if="globalStore.cart.carts?.length>0 && !route.path.match(/order/gi)">
      <slot name="order" />
      <h5 class="tw-mt-8 tw-mb-3 sm:tw-mb-0">ORDER SUMMARY</h5>
      <div class="tw-text-xl tw-text-right tw-font-bold">
        <p class="tw-mb-2">Your Basket
          <span class="tw-ml-4 text-primary">NT$ {{globalStore.cart.final_total}}</span>
        </p>
        <p class="tw-pb-4 tw-border-b tw-border-solid border-theme">+ Shipping
          <span class="tw-ml-4 text-primary">NT$ {{globalStore.shipping==='delivery' ? 80 : 60}}</span>
        </p>
        <p class="tw-mt-4">Order Total
          <span class="tw-ml-4 text-second">NT$ {{globalStore.cart.final_total+(globalStore.shipping==='delivery' ? 80 : 60)}}</span>
        </p>
      </div>
      <a v-if="nextBtn" @click="$emit('onGoNext', '')" class="hover:tw-brightness-90 bg-second tw-text-white tw-rounded-full tw-block tw-font-bold tw-text-center tw-w-3/5 sm:tw-w-60 tw-p-4 tw-mt-10 tw-mx-auto tw-cursor-pointer">
        {{ nextBtn }} <font-awesome-icon :icon="['fas', 'angle-right']" />
      </a>
    </template>
  </main>
</template>

<script>
import { useRoute } from 'vue-router'
import TheHeader from '@/components/global/TheHeader.vue'
import TheProcessBar from '@/components/global/TheProcessBar.vue'
// store
import { useGlobalStore } from '@/stores/global.js'

export default {
  components: { TheHeader, TheProcessBar },
  props: {
    breadcrumb: {
      type: String,
      default: ''
    },
    process: {
      type: Number,
      default: 0
    },
    nextBtn: {
      type: String,
      default: ''
    }
  },
  emits: ['onGoNext'],
  setup() {
    const route = useRoute()
    const globalStore = useGlobalStore()
    return { route, globalStore }
  }
}
</script>