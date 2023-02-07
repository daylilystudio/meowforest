<template>
  <shop-layout :process="2" breadcrumb="Order Finish" nextBtn="Back To Home" @onGoNext="router.push('/')">
    <template v-slot:content>
      <div v-if="orderInfo!==null">
        <img src="@/assets/img/thx.png" class="tw-block tw-w-3/5 sm:tw-w-60 tw-h-auto tw-mx-auto" alt="thank you!">
        <h4 class="tw-bg-gray-200 tw-rounded-lg tw-py-1 tw-px-4">Order Details
          <span class="text-second border-second tw-border tw-border-solid tw-text-sm tw-rounded-full tw-px-2 tw-ml-1">{{ orderInfo.is_paid ? 'Paid' : 'Unpaid' }}</span>
        </h4>
        <p class="tw-text-right tw-font-bold text-primary tw-my-2 tw-mr-4">Order No. {{ orderInfo.create_at }}
          <br class="tw-block md:tw-hidden">
          <a @click="copy" class="bg-primary tw-rounded-full tw-text-sm tw-text-white tw-py-1 tw-px-3 tw-cursor-pointer">
            <font-awesome-icon :icon="['far', 'copy']" class="tw-mr-2" />COPY URL
          </a>
        </p>
        <section class="md:tw-grid tw-grid-cols-2 tw-px-4 tw-leading-7">
          <div><span class="tw-font-bold tw-mr-1">Order Total</span> <span class="text-second">${{ Math.ceil(orderInfo.total)+orderInfo.user.shipping_money }}</span></div>
          <div><span class="tw-font-bold tw-mr-1">Order Date</span> {{ filter.date(orderInfo.create_at*1000) }}</div>
          <div><span class="tw-font-bold tw-mr-1">Shipping Method</span> {{ orderInfo.user.shipping_method }}</div>
          <div><span class="tw-font-bold tw-mr-1">Payment Method</span> {{ orderInfo.user.payment_method==='atm'?'ATM transfer':'Credit ****'+orderInfo.user.card.slice(-4) }}<font-awesome-icon v-if="orderInfo.user?.payment_method==='creditcard'" :icon="['far', 'credit-card']" class="tw-opacity-40 tw-ml-1" /></div>
          <div v-if="orderInfo.user.payment_method==='atm'"
            class="text-primary border-primary tw-border tw-border-solid tw-shadow-inner tw-rounded-xl tw-font-bold tw-col-span-2 md:tw-flex tw-items-center tw-py-3 tw-mt-2">
            <p class="tw-text-lg tw-text-center md:tw-px-8"><font-awesome-icon :icon="['fas', 'cat']" /> ATM transfer Info</p>
            <p class="tw-grid tw-gap-1 tw-text-center md:tw-text-left tw-my-4 md:tw-my-0">
              <span>Bank Code : 333 (Meow Bank)</span>
              <span>Account : 00001234567890</span>
              <span class="text-second">Deadline : {{ filter.date(orderInfo.create_at*1000, 3, false) + ' 23:00' }}</span>
            </p>
          </div>
        </section>
        <h4 class="tw-bg-gray-200 tw-rounded-lg tw-py-1 tw-px-4 tw-mt-10 tw-mb-2">Customer Details</h4>
        <section class="md:tw-grid tw-grid-cols-2 tw-leading-7 tw-px-4">
          <div><span class="tw-font-bold tw-mr-1">Name</span> {{ orderInfo.user.name }}</div>
          <div><span class="tw-font-bold tw-mr-1">Email</span> {{ orderInfo.user.email }}</div>
          <div><span class="tw-font-bold tw-mr-1">Phone</span> {{ orderInfo.user.tel }}</div>
          <div><span class="tw-font-bold tw-mr-1">Address</span> {{ orderInfo.user.address }}</div>
        </section>
        <h4 @click="openProducts=!openProducts" class="tw-bg-gray-200 tw-rounded-lg tw-py-1 tw-px-4 tw-mt-10 tw-mb-1
          tw-flex tw-justify-between tw-items-center tw-cursor-pointer">
          Products Detail
          <p :class="{'fa-rotate-180':!openProducts}"><font-awesome-icon :icon="['fas', 'angle-up']" /></p>
        </h4>
        <section :class="(openProducts?'tw-h-auto ':'tw-h-0')" class="tw-overflow-hidden tw-px-4">
          <div v-for="(item, i) in orderInfo.products" :key="i" class="tw-grid tw-grid-cols-12 tw-gap-y-4 tw-items-center tw-py-4 tw-border-b tw-border-solid tw-border-gray-200">
            <span class="tw-col-span-12 md:tw-col-span-6">
              {{item.product.title}}
            </span>
            <span class="tw-col-span-4 md:tw-col-span-2 tw-flex tw-justify-between">
              <span class="text-primary tw-font-bold">${{item.product.price}}</span>
              <span class="tw-mr-4">X</span>
            </span>
            <span class="tw-col-span-4 md:tw-col-span-2">{{item.qty}}</span>
            <span class="tw-col-span-4 md:tw-col-span-2 tw-flex tw-justify-between">
              =<span class="text-primary tw-font-bold">${{item.total}}</span>
            </span>
          </div>
          <p class="tw-mt-5 tw-text-right">
            <span v-if="orderInfo.user.discount>0" class="tw-text-sm">Discount / -{{ orderInfo.user.discount }}<br/></span>
            <span class="tw-text-sm">Shipping / {{ orderInfo.user.shipping_money }}</span><br/>
            <span>Total / </span><span class="tw-font-bold text-primary tw-ml-1">{{ '$'+(Math.ceil(orderInfo.total)+orderInfo.user.shipping_money) }}</span>
          </p>
        </section>
      </div>
      <div v-else class="tw-text-xl tw-font-bold tw-text-center tw-mb-6">No order found</div>
    </template>
  </shop-layout>
</template>

<script>
import ShopLayout from '../../components/user/ShopLayout.vue'
import { inject, ref, onBeforeMount } from 'vue'
import { useRouter, useRoute } from 'vue-router'
// store
import { useGlobalStore } from '@/stores/global.js'

export default {
  components: { ShopLayout },
  setup() {
    const axios = inject('axios')
    const filter = inject('$filter')
    const router = useRouter()
    const route = useRoute()
    const globalStore = useGlobalStore()
    const orderInfo = ref(null)
    const openProducts =  ref(false)
    async function getOrder(id) {
      globalStore.loading = true
      const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/order/${id}`
      axios.get(api).then((res) => {
        orderInfo.value = res.data.success ? res.data.order : 'No order found'
        globalStore.loading = false
      }).catch((err) => {
        window.$message.error(err.toString())
        globalStore.loading = false
      })
    }
    onBeforeMount(async () => {
      await getOrder(route.path.split('/')[2])
    })
    return {
      filter,
      globalStore, router, orderInfo, openProducts,
      async copy() {
        const inputNode = document.createElement('input')
        inputNode.value = window.location.href
        inputNode.style.display = 'none'
        document.body.appendChild(inputNode)
        try {
          await navigator.clipboard.writeText(inputNode.value)
          window.$message.success('Copy URL Success !')
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  input::placeholder{
    color: #bbb;
  }
</style>