<template>
  <the-header />
  <main class="container">
    <div class="dropShadow -tw-mt-24 tw-mb-4 tw-text-white">
      <router-link to="/" class="tw-font-bold">Home</router-link> /
      <span>Shopping Cart</span>
    </div>
    <n-spin :show="loading" class="shadow tw-bg-white tw-rounded-2xl tw-p-6 sm:tw-p-8">
      <n-data-table
        :columns="columns"
        :data="cart.data?.carts"
        :bordered="false"
      />
    </n-spin>
  </main>
</template>
<script>
import TheHeader from '@/components/global/TheHeader.vue'
import { NSpin, NDataTable, NButton } from 'naive-ui'
import { onMounted, inject, ref, h } from 'vue'
import { useRouter } from 'vue-router'

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
  components: { TheHeader, NSpin, NDataTable },
  setup() {
    const router = useRouter()
    const axios = inject('axios')
    const cart = ref({})
    const loading = ref(false)
    onMounted(() =>{
      loading.value = true
      const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/cart`
      axios.get(api).then((res) => {
        cart.value = res.data
        loading.value = false
      }).catch((err) => {
        console.log(err)
        loading.value = false
      })
    })
    return {
      cart, loading,
      columns: [
        {
          title: "Product",
          key: "product.imagesUrl[0]",
          render(row) {
            return h('div',
              { class: 'tw-cursor-pointer tw-flex tw-items-center', onClick: () => router.push('/products/'+row.product.id) },
              [
                h('img', { src: row.product.imagesUrl[0], class: 'tw-w-28 tw-mr-2'} ),
                h('span', {}, { default: () => row.product.title } )
              ]
            );
          }
        },
        {
          title: "Price",
          key: "product.price"
        },
        {
          title: "Number",
          key: "qty"
        },
        {
          title: "Total",
          key: "total"
        },
        {
          title: "Delete",
          key: "actions",
          render(row) {
            return h(
              NButton,
              {
                strong: true,
                tertiary: true,
                size: "small",
                onClick: () => alert(row.id)
              },
              { default: () => "Play" }
            );
          }
        }
      ],
    }
  }
}
</script>
<style lang="scss" scoped>
  :deep(.n-data-table .n-data-table-td) {
    vertical-align: middle;
    line-height: 1;
  }
</style>