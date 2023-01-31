<template>
  <n-button @click="isNew=true;showModal=true;tempProduct={}" strong round color="#FF904F" class="tw-block tw-ml-auto tw-mb-4">
    Add Product +
  </n-button>
  <n-space vertical :size="12">
    <n-data-table
      :bordered="false"
      :columns="columns"
      :data="tableData.data"
      :pagination="false"
      :loading="loading"
    />
    <n-pagination class="tw-justify-center" v-model:page="pagination.current" :page-count="pagination.total" @update:page="pageChange" />
  </n-space>
  <n-modal v-model:show="showModal" :mask-closable="false">
    <ProductModal :tempProduct="tempProduct" :isNew="isNew" :loading="loading" @updateProduct="update" @closeModal="v => showModal=v"/>
  </n-modal>
</template>

<script>
import { NSpace, NDataTable, NTag, NButton, NModal, NPagination } from 'naive-ui'
import { defineComponent ,h, ref, reactive, inject, onMounted} from 'vue'
import ProductModal from "@/components/admin/ProductModal.vue"
import api from '@/utils/api.js'

export default defineComponent({
  components: { ProductModal, NSpace, NDataTable, NButton, NModal, NPagination },
  setup() {
    const filter = inject('$filter')
    // data
    const loading = ref(false)
    const showModal = ref(false)
    const isNew = ref(false)
    const tempProduct = ref({})
    const pagination = reactive({
      current: 1,
      total: 2,
    })
    // get product
    const tableData = reactive({data:[]})
    const getData = async () => {
      loading.value = true
      try {
        const res = await api.getAdminData('products', pagination.current)
        loading.value = false
        if(res.data.success){
          tableData.data = res.data.products
          pagination.total = res.data.pagination.total_pages
        }
      } catch (err) {
        loading.value = false
        window.$message.error(err.toString())
      }
    }
    // const getProduct = () => {
    //   loading.value = true
    //   const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/admin/products`
    //   axios.get(api).then((res) => {
    //     loading.value = false
    //     if(res.data.success){
    //       tableData.data = res.data.products
    //     }
    //   }).catch((err) => {
    //     loading.value = false
    //     console.log(err)
    //   })
    // }
    onMounted(() => {
      getData()
    })
    // update item
    const update = async (data) => {
      loading.value = true
      let slug = 'product'
      let httpMethod = 'post'
      if(!isNew.value) {
        slug = `product/${data.id}`
        httpMethod = 'put'
      }
      try {
        const res = await api.updateAdminData(httpMethod, slug, data)
        showModal.value = false
        loading.value = false
        if(res.data.success){
          window.$notification.success({
            content: 'Update Success',
            duration: 1500,
          })
          getData()
        } else {
          window.$notification.success({
            content: res.data.message.toString(),
            duration: 2500,
          })
        }
      } catch (err) {
        loading.value = false
        window.$message.error(err.toString())
      }
    }
    // const updateProduct = (data) => {
    //   console.log(data)
    //   loading.value = true
    //   let api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/admin/product`
    //   let httpMethod = 'post'
    //   if(!isNew.value) {
    //     api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/admin/product/${data.id}`
    //     httpMethod = 'put'
    //   }
    //   axios[httpMethod](api, {'data': data}).then((res) => {
    //     showModal.value = false
    //     loading.value = false
    //     if(res.data.success){
    //       window.$notification.success({
    //         content: 'Update Success',
    //         duration: 1500,
    //       })
    //       getData()
    //     } else {
    //       window.$notification.success({
    //         content: res.data.message.toString(),
    //         duration: 2500,
    //       })
    //     }
    //   }).catch((err) => {
    //     loading.value = false
    //     console.log(err)
    //   })
    // }
    // delete item
    const delList = async (rowData) => {
      loading.value = true
      try {
        const res = await api.delAdminData('product', rowData.id)
        loading.value = false
        window.$notification.success({
          content: res.data.message,
          duration: 1500,
        })
        getData()
      } catch (err) {
        loading.value = false
        console.log(err.toString())
      }
    }
    // const delList = async (rowData) => {
    //   loading.value = true
    //   const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/admin/product/${rowData.id}`
    //   await axios.delete(api).then((res) => {
    //     loading.value = false
    //     window.$notification.success({
    //       content: res.data.message,
    //       duration: 1500,
    //     })
    //   }).catch((err) => {
    //     loading.value = false
    //     console.log(err)
    //   })
    //   getData()
    // }
    // table key
    const createColumns = ({
      editList, clickDel
    }) => {
      return [
        {
          title: "No.",
          key: "num"
        },
        {
          title: "Category",
          key: "category"
        },
        {
          title: "Product Name",
          key: "title",
          width: '35%'
        },
        {
          title: "Original Price",
          key: "origin_price",
          render(row) {
            return h(
              'span',
              filter.currency(row.origin_price)
            );
          }
        },
        {
          title: "Price",
          key: "price",
          render(row) {
            return h(
              'span',
              filter.currency(row.price)
            );
          }
        },
        {
          title: "Enable",
          key: "is_enabled",
          render(row) {
            return h(
              NTag,
              { type: row.is_enabled===true ? 'success' : '', bordered: false },
              { default: () => row.is_enabled===true ? 'Yes' : 'No' }
            );
          }
        },
        {
          title: "Action",
          key: "actions",
          render(row) {
            return h('div', null, [
              h(NButton,
                { type: "primary", size: "small", onClick: () => editList(row), class: 'tw-mr-2'},
                { default: () => "Edit" },),
              h(NButton,
                { size: "small", onClick: () => clickDel(row)},
                { default: () => "Del" })
            ]);
          }
        }
      ];
    };
    return {
      loading,
      showModal,
      isNew,
      tempProduct,
      tableData,
      update,
      columns: createColumns({
        editList(rowData) {
          tempProduct.value = rowData
          isNew.value = false
          showModal.value = true
        },
        clickDel(rowData) {
          window.$dialog.warning({
            title: "Confirm Delete ?",
            positiveText: "Sure !",
            negativeText: "No",
            blockScroll: false,
            onPositiveClick: () => {
              delList(rowData)
            }
          })
        }
      }),
      pagination,
      pageChange(v) {
        pagination.current = v
        getData()
      }
    };
  }
});
</script>