<template>
  <ShopLayout breadcrumb="Shopping Cart" :nextBtn="globalStore.cart.carts?.length>0?'Checkout':'Back To Home'" :nextBtnAllow="nextBtnAllow" @onGoNext="globalStore.cart.carts?.length>0?goNext():router.push('/')">
    <template v-slot:content>
      <NSpin :show="globalStore.loading" class="tw-px-2">
        <template v-if="globalStore.cart.carts?.length>0">
          <div class="tw-hidden md:tw-grid tw-bg-gray-200 tw-rounded-lg tw-py-2.5 tw-px-3 tw-grid-cols-12">
            <span class="tw-col-span-6">Product</span>
            <span class="tw-col-span-2">Unit Price</span>
            <span class="tw-col-span-2">Qty</span>
            <span class="tw-col-span-2">Total</span>
          </div>
          <div class="tw-block md:tw-hidden tw-bg-gray-200 tw-rounded-lg tw-py-1 tw-px-4">Shop List</div>
            <div v-for="(item, i) in globalStore.cart?.carts" :key="i" class="tw-relative tw-grid tw-grid-cols-12 tw-gap-y-4 tw-items-center tw-py-5 tw-border-b tw-border-solid tw-border-gray-200">
              <a @click="router.push('/products/'+item.product.id)" class="tw-col-span-12 md:tw-col-span-6 tw-flex tw-items-center tw-cursor-pointer">
                <img :src="item.product.imagesUrl[0]" :alt="item.product.title" class="tw-w-28 tw-mr-2">
                {{ item.product.title }}
              </a>
              <span class="tw-col-span-3 md:tw-col-span-2 tw-flex tw-justify-between">
                <span class="tw-text-primary tw-font-bold">${{ item.product.price }}</span>
                <span class="tw-mr-4 tw-block md:tw-hidden">X</span>
              </span>
              <NInputNumber @update:value="updateCart($event, item.id, item.product.id)" class="tw-w-4/5 tw-col-span-5 md:tw-col-span-2 tw-mt-1 tw-text-center" v-model:value="item.qty" :min="1" size="small" button-placement="both" />
              <span class="tw-col-span-4 md:tw-col-span-2 tw-flex tw-justify-between">
                <span class="tw-block md:tw-hidden">=</span>
                <span class="tw-text-primary tw-font-bold">${{ item.total }}</span>
              </span>
              <p @click="delCart(item.id)" class="tw-absolute tw-right-0 tw-top-8 md:tw-top-1/2 -tw-translate-y-1/2 tw-p-2 tw-cursor-pointer">
                <font-awesome-icon :icon="['far', 'trash-can']" />
              </p>
            </div>
            <a class="tw-text-primary tw-font-bold tw-block tw-pt-6 tw-pb-2 tw-cursor-pointer" @click="showModal=true">
              Enter Coupon Code <font-awesome-icon :icon="['fas', 'caret-right']" />
            </a>
            <div class="tw-text-xl tw-text-right tw-font-bold">
              Subtotal
              <span class="tw-ml-4 tw-text-primary">NTD. {{ globalStore.cart.total }}
                <small v-if="globalStore.cart.carts[0]?.coupon">(-{{ globalStore.cart.total - Math.ceil(globalStore.cart.final_total) }})</small>
              </span>
            </div>
        </template>
        <div v-else class="tw-opacity-50 tw-w-2/3 md:tw-w-72 tw-mx-auto tw-mt-16 tw-mb-6">
          <img src="@/assets/img/nodata.png" class="tw-w-full tw-h-auto" alt="no data">
        </div>
      </NSpin>
    </template>
    <template v-slot:order>
      <section v-if="globalStore.cart.carts?.length>0" class="tw-bg-third tw-rounded-2xl tw-flex tw-flex-col md:tw-flex-row tw-gap-6 md:tw-gap-14 tw-p-6">
        <div v-for="items in method" :key="items.title" class="tw-flex-1">
          <p class="tw-text-xl tw-font-bold tw-pb-4 tw-mb-4 tw-border-b tw-border-solid tw-border-white">{{ items.title }} <span class="tw-text-notice">*</span></p>
          <template v-for="item in items.option" :key="item.id">
            <label :for="item.id" class="tw-cursor-pointer">
              <div class="tw-flex tw-flex-wrap tw-items-center">
                <input v-model="globalStore[items.name]" :value="item.id" :name="items.name" type="radio" :id="item.id" class="tw-hidden">
                <i class="tw-w-4 tw-h-4 tw-rounded-full tw-mr-2" />
                <span class="tw-font-semibold">{{ item.txt }}</span>
              </div>
              <p class="tw-ml-6 tw-mt-2 tw-mb-4 tw-text-primary tw-flex-1">{{ item.info }}</p>
            </label>
          </template>
        </div>
      </section>
    </template>
  </ShopLayout>
  <NModal v-model:show="showModal" :block-scroll="false" title="Enter Coupon" preset="card" style="max-width:95%; width: 360px">
    <div @click="enterCoupon(card.code)" v-for="card in coupons" :key="card.code" class="tw-relative tw-flex tw-justify-between tw-items-center tw-border-b tw-border-dashed tw-border-gray-400 tw-mb-4 tw-px-3 tw-pb-4 tw-cursor-pointer">
      <div>
        <p class="tw-text-notice tw-text-lg tw-font-bold">{{ card.title }}</p>
        <p class="tw-text-primary tw-font-bold">CODE : {{ card.code }}</p>
        <span>{{ card.discount }}</span>
      </div>
      <p class="tw-p-2"><font-awesome-icon :icon="['far', 'hand-pointer']" class="tw-text-theme fa-xl fa-beat" /></p>
      <font-awesome-icon :icon="['fas', 'scissors']" class="tw-absolute tw-text-gray-300 tw-left-20 -tw-bottom-2 fa-lg" />
    </div>
  </NModal>
</template>
<script>
import ShopLayout from '@/components/user/ShopLayout.vue'
import { NSpin, NInputNumber, NModal } from 'naive-ui'
import { onBeforeMount, ref, inject, computed } from 'vue'
import { useRouter } from 'vue-router'
// store
import { useGlobalStore } from '@/stores/global.js'

export default {
  components: { ShopLayout, NSpin, NInputNumber, NModal },
  setup () {
    const router = useRouter()
    const axios = inject('axios')
    const showModal = ref(false)
    const globalStore = useGlobalStore()
    const nextBtnAllow = computed(() => {
      if (globalStore.cart.carts?.length > 0) {
        return globalStore.payment !== '' && globalStore.shipping !== ''
      }
      return true
    })
    const updateCart = (qty, cartId, productId) => {
      globalStore.loading = true
      const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/cart/${cartId}`
      axios.put(api, { data: { product_id: productId, qty } }).then((res) => {
        if (res) {
          globalStore.getCart()
          window.$message.warning(res.data.message)
        }
        globalStore.loading = false
      }).catch((err) => {
        window.$message.error(err.toString())
        globalStore.loading = false
      })
    }
    const delCart = (id) => {
      globalStore.loading = true
      const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/cart/${id}`
      axios.delete(api).then((res) => {
        if (res) {
          globalStore.getCart()
          window.$message.warning(res.data.message)
        }
        globalStore.loading = false
      }).catch((err) => {
        window.$message.error(err.toString())
        globalStore.loading = false
      })
    }
    onBeforeMount(() => {
      globalStore.getCart()
    })
    return {
      showModal,
      nextBtnAllow,
      router,
      globalStore,
      updateCart,
      delCart,
      goNext () {
        if (globalStore.payment === '') {
          window.$message.warning('Plz choose payment method')
        } else if (globalStore.shipping === '') {
          window.$message.warning('Plz choose shipping method')
        } else {
          router.push('/checkout')
        }
      },
      enterCoupon (code) {
        showModal.value = false
        const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/coupon`
        axios.post(api, { data: { code } }).then((res) => {
          if (res) {
            globalStore.getCart()
            window.$message.warning(res.data.message)
          }
        }).catch((err) => {
          window.$message.error(err.toString())
        })
      },
      coupons: [
        {
          title: '94愛貓咪',
          code: '94lovecat',
          discount: 'All Product 10% OFF'
        },
        {
          title: '過年特惠',
          code: 'CNY',
          discount: 'All Product 50% OFF'
        }
      ],
      method: [
        {
          title: 'Payment Method',
          name: 'payment',
          option: [
            {
              id: 'creditcard',
              txt: 'Credit Card',
              info: 'Visa、MasterCard、JCB皆可使用。'
            },
            {
              id: 'atm',
              txt: 'ATM transfer',
              info: '會提供一組 ATM 專用之虛擬帳號，如三日內未收到款項，訂購將會自動取消。'
            }
          ]
        },
        {
          title: 'Shipping Method',
          name: 'shipping',
          option: [
            {
              id: 'delivery',
              txt: 'Home Delivery',
              info: '宅配運費 NTD.80，滿3,000免運'
            },
            {
              id: 'pickup',
              txt: 'Store pickup',
              info: '喵森據點自取免運，據點地址：台北市中山區幸運路666號' // No. 666, lucky St., Zhongshan Dist., Taipei City 104 , Taiwan
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  input ~ i {
    border: 2px solid var(--themeColor);
    opacity: .4;
    position: relative;
  }
  input:checked ~ i {
    border-color: var(--primaryColor);
    opacity: 1;
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      width: 66%;
      height: 66%;
      border-radius: 99px;
      background-color: var(--primaryColor);
    }
  }
</style>
