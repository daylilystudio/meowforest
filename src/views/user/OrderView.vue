<template>
  <shop-layout :process="2" breadcrumb="Order Finish" nextBtn="Back To Home" @onGoNext="router.push('/')">
    <template v-slot:content>
      <div v-if="orderInfo!==null">
        <h4 class="tw-bg-gray-200 tw-rounded-lg tw-py-1 tw-px-4">Order Details
          <span class="text-second border-second tw-border tw-border-solid tw-text-sm tw-rounded-full tw-px-2 tw-ml-1">{{ orderInfo.user.is_paid ? 'Paid' : 'Unpaid' }}</span>
        </h4>
        <p class="tw-text-right tw-font-bold text-primary tw-my-2 tw-mr-4">Order No. {{ orderInfo.create_at }}
          <br class="tw-block md:tw-hidden">
          <a class="bg-primary tw-rounded-full tw-text-sm tw-text-white tw-py-1 tw-px-3 tw-cursor-pointer">
            <font-awesome-icon :icon="['far', 'copy']" class="tw-mr-2" />COPY URL
          </a>
        </p>
        <section class="md:tw-grid tw-grid-cols-2 tw-px-4 tw-leading-7">
          <div>Delivery: {{ orderInfo.user.shipping_method }}</div>
          <div>Payment: {{ orderInfo.user.payment_method }}</div>
          <div v-if="orderInfo.user.payment_method==='atm'"
            class="text-primary border-primary tw-border tw-border-solid tw-shadow-inner tw-rounded-xl tw-font-bold tw-col-span-2 md:tw-flex tw-items-center tw-py-3 tw-mt-2">
            <p class="tw-text-lg tw-text-center md:tw-px-8"><font-awesome-icon :icon="['fas', 'cat']" /> ATM Payment Info</p>
            <p class="tw-grid tw-gap-1 tw-text-center md:tw-text-left tw-my-4 md:tw-my-0">
              <span>Bank Code : 333 (Meow Bank)</span>
              <span>Bank Account : 00001234567890</span>
              <span class="text-second">Deadline : 2022-11-11 23:00</span>
            </p>
          </div>
          <div>Total: {{ orderInfo.total+orderInfo.user.shipping_money }}</div>
        </section>
        <h4 class="tw-bg-gray-200 tw-rounded-lg tw-py-1 tw-px-4 tw-mt-8">Customer Details</h4>
        <section class="md:tw-grid tw-grid-cols-2 tw-px-4 tw-leading-7">
          <div>Name: {{ orderInfo.user.name }}</div>
          <div>Email: {{ orderInfo.user.email }}</div>
          <div>Phone: {{ orderInfo.user.tel }}</div>
          <div>Address: {{ orderInfo.user.address }}</div>
        </section>
        <h4 class="tw-bg-gray-200 tw-rounded-lg tw-py-1 tw-px-4 tw-mt-8">Products Detail</h4>
      </div>
      <div v-else class="tw-text-xl tw-font-bold tw-text-center tw-mb-6">No order found</div>
    </template>
  </shop-layout>
</template>

<script>
import ShopLayout from '../../components/user/ShopLayout.vue'
import { inject, ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
// store
import { useGlobalStore } from '@/stores/global.js'

export default {
  components: { ShopLayout },
  setup() {
    const axios = inject('axios')
    const router = useRouter()
    const route = useRoute()
    const globalStore = useGlobalStore()
    const orderInfo = ref(null)
    async function getOrder(id) {
      globalStore.loading = true
      const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/order/${id}`
      axios.get(api).then((res) => {
        if (res.data.success) orderInfo.value = res.data.order
        console.log(res)
        globalStore.loading = false
      }).catch((err) => {
        console.log(err)
        globalStore.loading = false
      })
    }
    onMounted(async () => {
      await getOrder(route.path.split('/')[2])
      console.log(orderInfo.value)
    })
    return {
      globalStore, router, orderInfo
    }
  }
}
</script>

<style lang="scss" scoped>
  input::placeholder{
    color: #bbb;
  }
</style>