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
        <span class="tw-col-span-6">Product Name</span>
        <span class="tw-col-span-2">Price</span>
        <span class="tw-col-span-2">Num</span>
        <span class="tw-col-span-2">Subtotal</span>
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
    <section class="bg-third tw-rounded-2xl tw-my-6 md:tw-flex tw-gap-10 tw-p-6">
      <div class="tw-flex-1">
        <p class="tw-text-lg tw-font-bold">Payment Method</p>
        <label for="creditcard" class="tw-flex tw-items-center">
          <input name="payment" type="radio" id="creditcard" class="tw-hidden">
          <span class="tw-w-4 tw-h-4 tw-rounded-full tw-mr-2" />
          Credit Card
        </label>
        <p class="tw-ml-6 tw-mb-2 text-primary">交易安全無虞請放心使用。如超過三日未收到您的款項，您的訂購單將會自動取消。</p>
        <label for="atm" class="tw-flex tw-items-center">
          <input name="payment" type="radio" id="atm" class="tw-hidden">
          <span class="tw-w-4 tw-h-4 tw-rounded-full tw-mr-2" />
          ATM transfer
        </label>
        <p class="tw-ml-6 tw-mb-2 text-primary">會提供一組 ATM 專用之虛擬帳號，如三日內未收到款項，訂購將會自動取消。</p>
      </div>
      <div class="tw-flex-1">
        Shipping Method
      </div>
    </section>
  </main>
</template>
<script>
import TheHeader from '@/components/global/TheHeader.vue'
import TheProcessBar from '@/components/global/TheProcessBar.vue'
import { NSpin } from 'naive-ui'
import { onMounted, inject, ref } from 'vue'
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
    onMounted(() =>{
      loading.value = true
      const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/cart`
      axios.get(api).then((res) => {
        cart.value = res.data.data
        loading.value = false
        console.log(cart.value)
      }).catch((err) => {
        console.log(err)
        loading.value = false
      })
    })
    return {
      cart, loading
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
  input ~ span {
    border: 2px solid var(--themeColor);
    opacity: .4;
    position: relative;
  }
  input:checked ~ span {
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