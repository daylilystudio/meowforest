<template>
  <ShopLayout :process="1" breadcrumb="Checkout" nextBtn="Submit Order" :nextBtnAllow="nextBtnAllow" @onGoNext="goNext">
    <template v-slot:content>
      <h5 class="tw-text-lg tw-mb-5">Shipping Information</h5>
      <div class="tw-grid sm:tw-grid-cols-2 tw-gap-x-4 sm:tw-gap-x-8 tw-gap-y-5 sm:tw-px-4">
        <label for="infoName">
          Full Name <span class="tw-text-notice">*</span><br>
          <input class="tw-text-primary tw-w-full tw-border tw-border-solid tw-rounded-md tw-py-1 tw-px-2"
            v-model="globalStore.userInfo.name" type="text" name="name" id="infoName" placeholder="enter full name">
        </label>
        <label for="infoTel">
          Mobile Number <span class="tw-text-notice">*</span><br>
          <input class="tw-text-primary tw-w-full tw-border tw-border-solid tw-rounded-md tw-py-1 tw-px-2" maxlength="16"
            v-model="globalStore.userInfo.tel" type="tel" name="tel" id="infoTel" placeholder="e.g. 0900111222">
        </label>
        <label for="infoEmail">
          E-mail <span class="tw-text-notice">*</span><br>
          <input class="tw-text-primary tw-w-full tw-border tw-border-solid tw-rounded-md tw-py-1 tw-px-2"
            v-model="globalStore.userInfo.email" type="email" name="email" id="infoEmail" placeholder="name@email.com">
        </label>
        <label for="infoAdd">
          Address <span class="tw-text-notice">*</span><br>
          <input class="tw-text-primary tw-w-full tw-border tw-border-solid tw-rounded-md tw-py-1 tw-px-2"
            v-model="globalStore.userInfo.add" type="text" name="address" id="infoAdd" placeholder="enter full address">
        </label>
        <label for="msg" class="tw-col-span-2">
          Memo<br>
          <input class="tw-text-primary tw-w-full tw-border tw-border-solid tw-rounded-md tw-py-1 tw-px-2"
            v-model="globalStore.msg" type="text" id="msg">
        </label>
      </div>
      <hr class="tw-opacity-40 tw-mt-10 tw-mb-8">
      <h5 class="tw-text-lg">Payment Details</h5>
      <div v-if="globalStore.payment==='creditCard'" class="tw-grid tw-grid-cols-6 tw-gap-4 sm:tw-gap-x-8 tw-gap-y-5 sm:tw-px-4 tw-mt-5">
        <label for="creditCard" class="tw-col-span-6 sm:tw-col-span-3">
          Credit Card Number <span class="tw-text-notice">*</span><br>
          <input @input="validCard($event)" class="tw-text-primary tw-w-full tw-border tw-border-solid tw-rounded-md tw-py-1 tw-px-2" maxlength="19"
            :value="globalStore.cardInfo.number" type="tel" id="creditCard" placeholder="1111 2222 3333 4444">
        </label>
        <label for="valid" class="tw-col-span-4 sm:tw-col-span-2">
          Valid Thru <span class="tw-text-notice">*</span><br>
          <input @input="validThru($event)" class="tw-text-primary tw-w-full tw-border tw-border-solid tw-rounded-md tw-py-1 tw-px-2" maxlength="5"
            :value="globalStore.cardInfo.valid" type="tel" id="valid" placeholder="MM YY">
        </label>
        <label for="cvv" class="tw-col-span-2 sm:tw-col-span-1">
          CVV <span class="tw-text-notice">*</span><br>
          <input class="tw-text-primary tw-w-full tw-border tw-border-solid tw-rounded-md tw-py-1 tw-px-2" maxlength="3"
            v-model="globalStore.cardInfo.cvv" type="tel" id="cvv" placeholder="XXX">
        </label>
      </div>
      <p v-if="globalStore.payment==='atm'" class="tw-text-lg">
        you will get a ATM account for pay this order in Next Page.
      </p>
      <p class="tw-text-notice tw-mt-8">
        *If you Submit Order, you also agree with our Shop Terms & Conditions
      </p>
    </template>
  </ShopLayout>
</template>

<script setup>
import ShopLayout from '@/components/user/ShopLayout.vue'
import { onBeforeMount, computed } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/utils/api'
// store
import { useGlobalStore } from '@/stores/global.js'

const router = useRouter()
const globalStore = useGlobalStore()
onBeforeMount(() => {
  if (globalStore.cart.carts?.length === 0 || globalStore.payment === '' || globalStore.shipping === '') {
    router.push('/')
    window.$message.warning('Plz Add item first')
  }
})
const submitOrder = async () => {
  const data = {
    data: {
      user: {
        name: globalStore.userInfo.name,
        email: globalStore.userInfo.email,
        tel: globalStore.userInfo.tel,
        address: globalStore.userInfo.add,
        payment_method: globalStore.payment,
        shipping_method: globalStore.shipping,
        shipping_money: globalStore.shippingMoney,
        discount: globalStore.cart.total - Math.ceil(globalStore.cart.final_total),
        card: globalStore.cardInfo.number.split(' ').join('')
      },
      message: globalStore.msg
    }
  }
  try {
    globalStore.loadingPage = true
    const res = await api.submitOrder(data)
    if (res) {
      console.log(res)
      window.$message.warning(res.data.message)
      if (res.data.success) {
        if (globalStore.payment === 'creditCard') {
          await api.payOrder(res.data.orderId)
        }
        await globalStore.initInfo()
        await globalStore.getCart()
        // waiting api create order, so delay 1s
        await setTimeout(() => {
          router.push('/order/' + res.data.orderId)
        }, 1000)
      } else {
        router.push('/cart')
      }
    }
    globalStore.loadingPage = false
  } catch (err) {
    window.$message.error(err.toString())
  }
}
// check
const checkEmail = computed(() => globalStore.userInfo.email.match(/^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/))
const checkFill = computed(() => Object.values(globalStore.userInfo).every(item => item !== ''))
const checkCardFill = computed(() => Object.values(globalStore.cardInfo).every(item => item !== '') && globalStore.cardInfo.number.match(/[0-9]/gi).length === 16 && globalStore.cardInfo.valid.length === 5 && globalStore.cardInfo.cvv.length === 3)
const nextBtnAllow = computed(() => checkFill.value && checkEmail.value && (globalStore.payment !== 'creditCard' || checkCardFill.value))
const validCard = (e) => {
  const filterNum = e.target.value.match(/[0-9]/gi)
  const arr = filterNum !== null ? filterNum : ''
  const newArr = []
  if (e.target.value !== '') {
    const arr1 = arr.slice(0, 4)
    const arr2 = arr.slice(4, 8)
    const arr3 = arr.slice(8, 12)
    const arr4 = arr.slice(12)
    if (arr1.length > 0 && arr2.length > 0 && arr3.length === 0) {
      newArr.push(arr1.join(''), ' ', arr2.join(''))
    } else if (arr3.length > 0 && arr4.length === 0) {
      newArr.push(arr1.join(''), ' ', arr2.join(''), ' ', arr3.join(''))
    } else if (arr4.length > 0) {
      newArr.push(arr1.join(''), ' ', arr2.join(''), ' ', arr3.join(''), ' ', arr4.join(''))
    }
  }
  globalStore.cardInfo.number = newArr.join('')
}
const validThru = (e) => {
  const filterNum = e.target.value.match(/[0-9]/gi)
  const arr = filterNum !== null ? filterNum : ''
  if (arr && e.target.value !== '' && arr.length > 2) {
    arr.splice(2, 0, '/')
  }
  globalStore.cardInfo.valid = arr !== '' ? arr.join('') : ''
}
const goNext = () => {
  // check all fill
  if (!checkFill.value) {
    window.$message.warning('Plz Finish Your Info :)')
    return
  }
  if (globalStore.payment === 'creditCard' && !checkCardFill.value) {
    window.$message.warning('Plz Confirm Payment Info')
    return
  }
  // check email
  if (!checkEmail.value) {
    window.$message.warning('Wrong Email')
    return
  }
  console.log(1)
  // go
  window.$dialog.warning({
    title: 'Confirm Submit Order ?',
    positiveText: 'Sure !',
    negativeText: 'No',
    blockScroll: false,
    onPositiveClick: () => {
      submitOrder()
    }
  })
}
</script>

<style lang="scss" scoped>
  input::placeholder{
    color: #bbb;
  }
</style>
