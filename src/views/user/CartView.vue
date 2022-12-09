<template>
  <the-header />
  <main class="container">
    <div class="dropShadow -tw-mt-24 tw-mb-4 tw-text-white">
      <router-link to="/" class="tw-font-bold">Home</router-link> /
      <span>Shopping Cart</span>
    </div>
    <section class="shadow tw-bg-white tw-rounded-2xl tw-p-4 sm:tw-p-6">
      <the-process-bar :process="0" />
      <div class="tw-hidden md:tw-grid tw-bg-gray-200 tw-rounded-lg tw-py-2.5 tw-px-3 tw-grid-cols-12">
        <span class="tw-col-span-6">Product</span>
        <span class="tw-col-span-2">Unit Price</span>
        <span class="tw-col-span-2">Qty</span>
        <span class="tw-col-span-2">Total</span>
      </div>
      <div class="tw-block md:tw-hidden tw-bg-gray-200 tw-rounded-lg tw-py-1 tw-px-4">Shop List</div>
      <n-spin :show="loading" class="tw-px-2">
        <div v-for="(item, i) in cart?.carts" :key="i" class="tw-grid tw-grid-cols-12 tw-gap-y-4 tw-items-center tw-py-5 tw-border-b tw-border-solid tw-border-gray-200">
          <span class="tw-col-span-12 md:tw-col-span-6 tw-flex tw-items-center">
            <img :src="item.product.imagesUrl[0]" :alt="item.product.title" class="tw-w-28 tw-mr-2">
            {{item.product.title}}
          </span>
          <span class="tw-col-span-4 md:tw-col-span-2 tw-flex tw-justify-between">
            <span class="text-primary tw-font-bold">${{item.product.price}}</span>
            <span class="tw-mr-4 tw-block md:tw-hidden">X</span>
          </span>
          <span class="tw-col-span-4 md:tw-col-span-2">{{item.qty}}</span>
          <span class="tw-col-span-4 md:tw-col-span-2 tw-flex tw-justify-between">
            <span class="tw-block md:tw-hidden">=</span>
            <span class="text-primary tw-font-bold">${{item.total}}</span>
          </span>
        </div>
        <div class="tw-text-xl tw-text-right tw-font-bold tw-mt-8">
          Subtotal<span class="tw-ml-4 text-primary">NT$ {{cart.total}}</span>
        </div>
        <!-- <n-data-table
          :columns="columns"
          :data="cart.data?.carts"
          :bordered="false"
        /> -->
      </n-spin>
    </section>
    <section class="bg-third tw-rounded-2xl tw-my-8 tw-flex tw-flex-col md:tw-flex-row tw-gap-6 md:tw-gap-14 tw-p-6">
      <div v-for="items in method" :key="items.title" class="tw-flex-1">
        <p class="tw-text-xl tw-font-bold tw-pb-4 tw-mb-4 tw-border-b tw-border-solid tw-border-white">{{items.title}}</p>
        <template v-for="item in items.option" :key="item.id">
          <label :for="item.id" class="tw-cursor-pointer">
            <div class="tw-flex tw-flex-wrap tw-items-center">
              <input v-model="methodValue[items.name]" :value="item.id" :name="items.name" type="radio" :id="item.id" class="tw-hidden">
              <i class="tw-w-4 tw-h-4 tw-rounded-full tw-mr-2" />
              <span class="tw-font-semibold">{{item.txt}}</span>
            </div>
            <p class="tw-ml-6 tw-mt-2 tw-mb-4 text-primary tw-flex-1">{{item.info}}</p>
          </label>
        </template>
      </div>
    </section>
    <h5>ORDER SUMMARY</h5>
    <div class="tw-text-xl tw-text-right tw-font-bold">
      <p class="tw-mb-2">Your Basket
        <span class="tw-ml-4 text-primary">NT$ {{cart.final_total}}</span>
      </p>
      <p class="tw-pb-4 tw-border-b tw-border-solid border-theme">+ Shipping
        <span class="tw-ml-4 text-primary">NT$ {{deliveryFee}}</span>
      </p>
      <p class="tw-mt-4">Order Total
        <span class="tw-ml-4 text-second">NT$ {{cart.final_total+deliveryFee}}</span>
      </p>
    </div>
    <router-link to="/products" class="hover:tw-brightness-90 bg-second tw-text-white tw-rounded-full tw-block tw-font-bold tw-text-center tw-w-3/5 sm:tw-w-60 tw-p-4 tw-mt-10 tw-mx-auto">
      Checkout <font-awesome-icon :icon="['fas', 'angle-right']" />
    </router-link>
  </main>
</template>
<script>
import TheHeader from '@/components/global/TheHeader.vue'
import TheProcessBar from '@/components/global/TheProcessBar.vue'
import { NSpin } from 'naive-ui'
import { onMounted, inject, ref, reactive, watch } from 'vue'
// import { useRouter } from 'vue-router'

// const createColumns = ({
//   play
// }) => {
//   return [
//     {
//       title: " ",
//       key: "product.imagesUrl[0]",
//       width: 100,
//       render(row) {
//         return h(
//           'img',
//           {
//             src: row.product.imagesUrl[0],
//             class: 'tw-w-full tw-cursor-pointer',
//             onClick: () => alert(1)
//           }
//         );
//       }
//     },
//     {
//       title: "Product Name",
//       key: "product.title"
//     },
//     {
//       title: "Price",
//       key: "product.price"
//     },
//     {
//       title: "Number",
//       key: "qty"
//     },
//     {
//       title: "Total",
//       key: "total"
//     },
//     {
//       title: "Delete",
//       key: "actions",
//       render(row) {
//         return h(
//           NButton,
//           {
//             strong: true,
//             tertiary: true,
//             size: "small",
//             onClick: () => alert(row.id)
//           },
//           { default: () => "Play" }
//         );
//       }
//     }
//   ];
// };

export default {
  components: { TheHeader, TheProcessBar, NSpin },
  setup() {
    // const router = useRouter()
    const axios = inject('axios')
    const cart = ref({})
    const loading = ref(false)
    const methodValue = reactive({payment:'', shipping:''})
    const deliveryFee = ref(0)
    onMounted(() =>{
      loading.value = true
      const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/cart`
      axios.get(api).then((res) => {
        cart.value = res.data.data
        loading.value = false
      }).catch((err) => {
        console.log(err)
        loading.value = false
      })
    })
    watch(methodValue, (newVal) => {
      deliveryFee.value = newVal.shipping==='delivery' ? 80 : 60
    })
    return {
      cart, loading, methodValue, deliveryFee,
      method: [
        {
          title: 'Payment Method',
          name: 'payment',
          option: [
            {
              id: 'creditcard',
              txt: 'Credit Card',
              info: '交易安全無虞請放心使用。如超過三日未收到您的款項，您的訂購單將會自動取消。'
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
              info: '未滿1000元運費80元，滿千免運。'
            },
            {
              id: 'pickup',
              txt: '7-11 pickup',
              info: '未滿1000元運費60元，滿千免運。此出貨方式須先透過信用卡或ATM的方式付款，超商端僅提供純取貨之服務。'
            }
          ]
        }
      ]
      // columns: [
      //   {
      //     title: "Product",
      //     key: "product.imagesUrl[0]",
      //     render(row) {
      //       return h('div',
      //         { class: 'tw-cursor-pointer tw-flex tw-items-center', onClick: () => router.push('/products/'+row.product.id) },
      //         [
      //           h('img', { src: row.product.imagesUrl[0], class: 'tw-w-28 tw-mr-2'} ),
      //           h('span', {}, { default: () => row.product.title } )
      //         ]
      //       );
      //     }
      //   },
      //   {
      //     title: "Price",
      //     key: "product.price"
      //   },
      //   {
      //     title: "Number",
      //     key: "qty"
      //   },
      //   {
      //     title: "Total",
      //     key: "total"
      //   },
      //   {
      //     title: "Delete",
      //     key: "actions",
      //     render(row) {
      //       return h(
      //         NButton,
      //         {
      //           strong: true,
      //           tertiary: true,
      //           size: "small",
      //           onClick: () => alert(row.id)
      //         },
      //         { default: () => "Play" }
      //       );
      //     }
      //   }
      // ],
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
  // :deep(.n-data-table .n-data-table-td) {
  //   vertical-align: middle;
  //   line-height: 1;
  // }
</style>