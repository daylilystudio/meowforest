<template>
  <ShopLayout :process="1" breadcrumb="Checkout" nextBtn="Submit Order" @onGoNext="goNext">
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
      <div v-if="globalStore.payment==='creditcard'" class="tw-grid tw-grid-cols-6 tw-gap-4 sm:tw-gap-x-8 tw-gap-y-5 sm:tw-px-4 tw-mt-5">
        <label for="creditcard" class="tw-col-span-6 sm:tw-col-span-3">
          Credit Card Number <span class="tw-text-notice">*</span><br>
          <input @input="validCard($event)" class="tw-text-primary tw-w-full tw-border tw-border-solid tw-rounded-md tw-py-1 tw-px-2" maxlength="19"
            :value="globalStore.cardInfo.number" type="tel" id="creditcard" placeholder="1111 2222 3333 4444">
        </label>
        <label for="valid" class="tw-col-span-4 sm:tw-col-span-2">
          Valid Thru <span class="tw-text-notice">*</span><br>
          <input @input="validThru($event)" class="tw-text-primary tw-w-full tw-border tw-border-solid tw-rounded-md tw-py-1 tw-px-2" maxlength="5"
            :value="globalStore.cardInfo.valid" type="tel" id="valid" placeholder="MMYY">
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

<script>
import ShopLayout from '@/components/user/ShopLayout.vue'
import { inject, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
// store
import { useGlobalStore } from '@/stores/global.js'

export default {
  components: { ShopLayout },
  setup() {
    const router = useRouter()
    const axios = inject('axios')
    const globalStore = useGlobalStore()
    onBeforeMount(() => {
      if (globalStore.cart.carts?.length===0 || globalStore.payment==='' || globalStore.shipping==='' ) {
        router.push('/')
        window.$message.warning('Plz Add item first')
      }
    })
    const payOrder = (id) => {
      const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/pay/${id}`
      axios.post(api).then((res) => {
        if(res) {
          return res
        }
      }).catch((err) => {
        window.$message.error(err.toString())
      })
    }
    const submitOrder = () => {
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
            card: globalStore.cardInfo.number.split(' ').join(''),
          },
          message: globalStore.msg
        }
      }
      globalStore.loadingPage = true
      const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/order`
      axios.post(api, data).then(async (res) => {
        if(res) {
          window.$message.warning(res.data.message)
          if (res.data.success) {
            if (globalStore.payment==='creditcard') {
              await payOrder(res.data.orderId)
            }
            await globalStore.initInfo()
            await globalStore.getCart()
            // avoid not create order yet, so wait 1s
            await setTimeout(()=>{
              router.push('/order/' + res.data.orderId)
            }, 1000)
          } else {
            router.push('/cart')
          }
        }
        globalStore.loadingPage = false
      }).catch((err) => {
        window.$message.error(err.toString())
        globalStore.loadingPage = false
      })
    }
    return {
      globalStore,
      validCard(e) {
        const arr = e.target.value.match(/[0-9]/gi)
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
      },
      validThru(e) {
        const arr = e.target.value.match(/[0-9]/gi)
        if (e.target.value !== '' && arr.length > 2) {
          arr.splice(2, 0, '/')
        }
        globalStore.cardInfo.valid = arr.join('')
      },
      goNext() {
        // check email
        const regexEmail = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
        if (!globalStore.userInfo.email.match(regexEmail)) {
          window.$message.warning('Wrong Email')
        }
        // check all fill
        const checkFill = Object.values(globalStore.userInfo).every(item => item!=='')
        let checkCardFill = true
        if (!checkFill) window.$message.warning('Plz Finish Your Info :)')
        else if (globalStore.payment==='creditcard') {
          checkCardFill = Object.values(globalStore.cardInfo).every(item => item!=='')
          if (checkCardFill && globalStore.cardInfo.number.match(/[0-9]/gi).length !==16 || globalStore.cardInfo.valid.length !==5 || globalStore.cardInfo.cvv.length !==3) {
            window.$message.warning('Plz Confirm Payment Info')
            return
          }
        }
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