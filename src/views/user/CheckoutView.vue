<template>
  <shop-layout :process="1" breadcrumb="Checkout" nextBtn="Submit Order" @onGoNext="goNext">
    <template v-slot:content>
      <h5 class="tw-text-lg tw-mb-5">Shipping Information</h5>
      <div class="tw-grid sm:tw-grid-cols-2 tw-gap-x-8 tw-gap-y-5 tw-px-4">
        <label for="infoName">
          Full Name <span class="text-second">*</span><br>
          <input class="text-primary tw-w-full tw-border tw-border-solid tw-rounded-md tw-py-1 tw-px-2"
            v-model="globalStore.shippingInfo.name" type="text" name="name" id="infoName" placeholder="enter full name">
        </label>
        <label for="infoTel">
          Mobile Number <span class="text-second">*</span><br>
          <input class="text-primary tw-w-full tw-border tw-border-solid tw-rounded-md tw-py-1 tw-px-2" maxlength="16"
            v-model="globalStore.shippingInfo.phone" type="tel" name="tel" id="infoTel" placeholder="e.g. 0900111222">
        </label>
        <label for="infoEmail">
          E-mail <span class="text-second">*</span><br>
          <input class="text-primary tw-w-full tw-border tw-border-solid tw-rounded-md tw-py-1 tw-px-2"
            v-model="globalStore.shippingInfo.email" type="email" name="email" id="infoEmail" placeholder="name@email.com">
        </label>
        <label for="infoAdd">
          Address <span class="text-second">*</span><br>
          <input class="text-primary tw-w-full tw-border tw-border-solid tw-rounded-md tw-py-1 tw-px-2"
            v-model="globalStore.shippingInfo.add" type="text" name="address" id="infoAdd" placeholder="enter full address">
        </label>
      </div>
      <hr class="tw-opacity-40 tw-mt-10 tw-mb-8">
      <h5 class="tw-text-lg">Payment Details</h5>
      <div v-if="globalStore.payment==='creditcard'" class="tw-grid tw-grid-cols-6 tw-gap-4 sm:tw-gap-x-8 tw-gap-y-5 tw-px-4 tw-mt-5">
        <label for="creditcard" class="tw-col-span-6 sm:tw-col-span-3">
          Credit Card Number <span class="text-second">*</span><br>
          <input class="text-primary tw-w-full tw-border tw-border-solid tw-rounded-md tw-py-1 tw-px-2" maxlength="16"
            v-model="globalStore.cardInfo.number" type="tel" id="creditcard" placeholder="1111 2222 3333 4444">
        </label>
        <label for="valid" class="tw-col-span-4 sm:tw-col-span-2">
          Valid Thru <span class="text-second">*</span><br>
          <input class="text-primary tw-w-full tw-border tw-border-solid tw-rounded-md tw-py-1 tw-px-2" maxlength="4"
            v-model="globalStore.cardInfo.valid" type="tel" id="valid" placeholder="MM YY">
        </label>
        <label for="cvv" class="tw-col-span-2 sm:tw-col-span-1">
          CVV <span class="text-second">*</span><br>
          <input class="text-primary tw-w-full tw-border tw-border-solid tw-rounded-md tw-py-1 tw-px-2" maxlength="3"
            v-model="globalStore.cardInfo.cvv" type="tel" id="cvv" placeholder="XXX">
        </label>
      </div>
      <p v-if="globalStore.payment==='atm'" class="tw-text-lg">
        you will get a ATM account for pay this order in Next Page.
      </p>
      <p class="text-second tw-mt-8">
        *If you Submit Order, you also agree with our Shop Terms & Conditions
      </p>
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
      if (globalStore.cart.carts?.length===0 || globalStore.payment==='' || globalStore.shipping==='' ) {
        router.push('/')
      }
    })
    return {
      globalStore,
      goNext() {
        const checkFill = Object.values(globalStore.shippingInfo).every(item => item!=='')
        const checkCardFill = globalStore.payment==='creditcard' ? Object.values(globalStore.cardInfo).every(item => item!=='') : true
        if (checkFill && checkCardFill) {
          router.push('/order/123123')
          return
        }
        window.$notification.warning({
          content: 'Plz finish your info :)',
          duration: 3000,
        })
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