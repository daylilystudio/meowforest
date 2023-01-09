<template>
  <shop-layout :process="1" breadcrumb="Checkout" nextBtn="Submit Order" @onGoNext="goNext">
    <template v-slot:content>
      <h5 class="tw-text-lg tw-mb-5">Shipping Information</h5>
      <div class="tw-grid sm:tw-grid-cols-2 tw-gap-x-8 tw-gap-y-5 tw-px-4">
        <label for="infoName">
          Full Name <span class="text-second">*</span><br>
          <input class="text-primary tw-w-full tw-border tw-border-solid tw-rounded-md tw-py-1 tw-px-2"
            v-model="globalStore.userInfo.name" type="text" name="name" id="infoName" placeholder="enter full name">
        </label>
        <label for="infoTel">
          Mobile Number <span class="text-second">*</span><br>
          <input class="text-primary tw-w-full tw-border tw-border-solid tw-rounded-md tw-py-1 tw-px-2" maxlength="16"
            v-model="globalStore.userInfo.tel" type="tel" name="tel" id="infoTel" placeholder="e.g. 0900111222">
        </label>
        <label for="infoEmail">
          E-mail <span class="text-second">*</span><br>
          <input class="text-primary tw-w-full tw-border tw-border-solid tw-rounded-md tw-py-1 tw-px-2"
            v-model="globalStore.userInfo.email" type="email" name="email" id="infoEmail" placeholder="name@email.com">
        </label>
        <label for="infoAdd">
          Address <span class="text-second">*</span><br>
          <input class="text-primary tw-w-full tw-border tw-border-solid tw-rounded-md tw-py-1 tw-px-2"
            v-model="globalStore.userInfo.add" type="text" name="address" id="infoAdd" placeholder="enter full address">
        </label>
        <label for="msg" class="tw-col-span-2">
          Memo<br>
          <input class="text-primary tw-w-full tw-border tw-border-solid tw-rounded-md tw-py-1 tw-px-2"
            v-model="globalStore.msg" type="text" id="msg">
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
import { inject, onMounted } from 'vue'
import { useRouter } from 'vue-router'
// store
import { useGlobalStore } from '@/stores/global.js'

export default {
  components: { ShopLayout },
  setup() {
    const router = useRouter()
    const axios = inject('axios')
    const globalStore = useGlobalStore()
    onMounted(() => {
      if (globalStore.cart.carts?.length===0 || globalStore.payment==='' || globalStore.shipping==='' ) {
        router.push('/')
      }
    })
    const submitOrder = () => {
      const data = {
        data: {
          user: {
            name: globalStore.userInfo.name,
            email: globalStore.userInfo.email,
            tel: globalStore.userInfo.tel,
            address: globalStore.userInfo.add
          },
          message: globalStore.msg,
          payment_method: globalStore.payment,
          shipping_method: globalStore.shipping
        }
      }
      globalStore.loadingPage = true
      const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/order`
      axios.post(api, data).then((res) => {
        if(res) {
          window.$notification.warning({
            content: res.data.message,
            duration: 2000,
          })
          if(res.data.success) {
            // router.push('/order/123123')
          }
        }
        globalStore.loadingPage = false
      }).catch((err) => {
        console.log(err)
        globalStore.loadingPage = false
      })
    }
    return {
      globalStore,
      goNext() {
        const checkFill = Object.values(globalStore.userInfo).every(item => item!=='')
        const checkCardFill = globalStore.payment==='creditcard' ? Object.values(globalStore.cardInfo).every(item => item!=='') : true
        console.log(checkCardFill)
        if (checkFill && checkCardFill) {
          window.$dialog.warning({
            title: "Confirm Submit Order ?",
            positiveText: "Sure !",
            negativeText: "No",
            blockScroll: false,
            onPositiveClick: () => {
              submitOrder()
            }
          })
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