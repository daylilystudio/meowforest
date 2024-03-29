<template>
  <NButton @click="isNew=true;showModal=true;tempProduct={}" strong round color="#FF904F" class="tw-block tw-ml-auto tw-mb-4">
    Add Product +
  </NButton>
  <NSpace vertical :size="12">
    <NDataTable
      :bordered="false"
      :columns="columns"
      :data="tableData.data"
      :pagination="false"
      :loading="loading"
    />
    <NPagination class="tw-justify-center" v-model:page="pagination.current" :page-count="pagination.total" @update:page="pageChange" />
  </NSpace>
  <NModal v-model:show="showModal" :mask-closable="false">
    <ProductModal :tempProduct="tempProduct" :isNew="isNew" :loading="loading" @updateProduct="update" @closeModal="v => showModal=v"/>
  </NModal>
</template>

<script setup>
import { NSpace, NDataTable, NTag, NButton, NModal, NPagination } from 'naive-ui'
import { h, ref, reactive, inject, onMounted } from 'vue'
import ProductModal from '@/components/admin/ProductModal.vue'
import api from '@/utils/api.js'

const filter = inject('$filter')
// data
const loading = ref(false)
const showModal = ref(false)
const isNew = ref(false)
const tempProduct = ref({})
const pagination = reactive({
  current: 1,
  total: 2
})
// get product
const tableData = reactive({ data: [] })
const getData = async () => {
  loading.value = true
  try {
    const res = await api.getAdminData('products', pagination.current)
    loading.value = false
    if (res.data.success) {
      tableData.data = res.data.products
      pagination.total = res.data.pagination.total_pages
    }
  } catch (err) {
    loading.value = false
    window.$message.error(err.toString())
  }
}
onMounted(() => {
  getData()
})
// update item
const update = async (data) => {
  loading.value = true
  let slug = 'product'
  let httpMethod = 'post'
  if (!isNew.value) {
    slug = `product/${data.id}`
    httpMethod = 'put'
  }
  try {
    const res = await api.updateAdminData(httpMethod, slug, data)
    showModal.value = false
    loading.value = false
    if (res.data.success) {
      window.$notification.success({
        content: 'Update Success',
        duration: 1500
      })
      getData()
    } else {
      window.$notification.success({
        content: res.data.message.toString(),
        duration: 2500
      })
    }
  } catch (err) {
    loading.value = false
    window.$message.error(err.toString())
  }
}
// delete item
const delList = async (rowData) => {
  loading.value = true
  try {
    const res = await api.delAdminData('product', rowData.id)
    loading.value = false
    window.$notification.success({
      content: res.data.message,
      duration: 1500
    })
    getData()
  } catch (err) {
    loading.value = false
    window.$message.error(err.toString())
  }
}
// table key
const createColumns = ({
  editList, clickDel
}) => {
  return [
    {
      title: 'No.',
      key: 'num'
    },
    {
      title: 'Category',
      key: 'category'
    },
    {
      title: 'Product Name',
      key: 'title',
      width: '35%'
    },
    {
      title: 'Original Price',
      key: 'origin_price',
      render (row) {
        return h(
          'span',
          filter.currency(row.origin_price)
        )
      }
    },
    {
      title: 'Price',
      key: 'price',
      render (row) {
        return h(
          'span',
          filter.currency(row.price)
        )
      }
    },
    {
      title: 'Enable',
      key: 'is_enabled',
      render (row) {
        return h(
          NTag,
          { type: row.is_enabled === true ? 'success' : '', bordered: false },
          { default: () => row.is_enabled === true ? 'Yes' : 'No' }
        )
      }
    },
    {
      title: 'Action',
      key: 'actions',
      render (row) {
        return h('div', null, [
          h(NButton,
            { type: 'primary', size: 'small', onClick: () => editList(row), class: 'tw-mr-2' },
            { default: () => 'Edit' }),
          h(NButton,
            { size: 'small', onClick: () => clickDel(row) },
            { default: () => 'Del' })
        ])
      }
    }
  ]
}
const columns = createColumns({
  editList (rowData) {
    tempProduct.value = rowData
    isNew.value = false
    showModal.value = true
  },
  clickDel (rowData) {
    window.$dialog.warning({
      title: 'Confirm Delete ?',
      positiveText: 'Sure !',
      negativeText: 'No',
      blockScroll: false,
      onPositiveClick: () => {
        delList(rowData)
      }
    })
  }
})
const pageChange = (v) => {
  pagination.current = v
  getData()
}
</script>
