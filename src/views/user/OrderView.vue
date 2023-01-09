<template>
  <shop-layout :process="2" breadcrumb="Order Finish" nextBtn="Back To Home" @onGoNext="router.push('/')">
    <template v-slot:content>
      <h5 class="tw-text-lg tw-mb-5">Order Information</h5>
        轉帳資訊:付款金額,轉入銀行,轉入帳號,繳費期限
    </template>
  </shop-layout>
</template>

<script>
import ShopLayout from '../../components/user/ShopLayout.vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
// store
import { useGlobalStore } from '@/stores/global.js'

export default {
  components: { ShopLayout },
  setup() {
    const router = useRouter()
    const globalStore = useGlobalStore()
    onMounted(() => {
    })
    return {
      globalStore, router
    }
  }
}
</script>

<style lang="scss" scoped>
  input::placeholder{
    color: #bbb;
  }
</style>