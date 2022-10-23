<template>
  <n-button @click="isNew=true;showModal=true;tempProduct={}" type="primary" ghost class="tw-block tw-ml-auto tw-mb-4">
    Add Product +
  </n-button>
  <n-space vertical :size="12">
    <n-data-table
      :bordered="false"
      :columns="columns"
      :data="tableData.data"
      :pagination="pagination"
      :loading="loading"
    />
  </n-space>
  <n-modal v-model:show="showModal" :mask-closable="false">
    <ProductModal :tempProduct="tempProduct" :isNew="isNew" @updateProduct="updateProduct" @closeModal="v => showModal=v"/>
  </n-modal>
</template>
<script>
import { NSpace, NDataTable, NTag, NButton, NModal } from 'naive-ui'
import { defineComponent ,h, ref, reactive, inject, onMounted} from 'vue'
import ProductModal from "../../components/admin/ProductModal.vue"

export default defineComponent({
  components: { ProductModal, NSpace, NDataTable, NButton, NModal },
  setup() {
    const axios = inject('axios')
    const filter = inject('$filter')
    // data
    const loading = ref(false)
    const showModal = ref(false)
    const isNew = ref(false)
    const tempProduct = ref({})
    // get product
    const tableData = reactive({data:[]})
    const getProduct = () => {
      loading.value = true
      const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/admin/products`
      axios.get(api).then((res) => {
        loading.value = false
        if(res.data.success){
          tableData.data = res.data.products
        }
      }).catch((err) => {
        loading.value = false
        console.log(err)
      })
    }
    onMounted(() => {
      getProduct()
    })
    // update item
    const updateProduct = (data) => {
      loading.value = true
      let api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/admin/product`
      let httpMethod = 'post'
      if(!isNew.value) {
        api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/admin/product/${data.id}`
        httpMethod = 'put'
      }
      axios[httpMethod](api, {'data': data}).then((res) => {
        showModal.value = false
        loading.value = false
        if(res.data.success){
          window.$notification.success({
            content: 'Update Success',
            duration: 1500,
          })
          getProduct()
        } else {
          window.$notification.success({
            content: res.data.message.toString(),
            duration: 2500,
          })
        }
      }).catch((err) => {
        loading.value = false
        console.log(err)
      })
    }
    // table key
    const createColumns = ({
      editList, deleteList
    }) => {
      return [
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
              { type: row.is_enabled===1 ? 'success' : '', bordered: false },
              { default: () => row.is_enabled===1 ? 'Yes' : 'No' }
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
                { type: "error", size: "small", onClick: () => deleteList(row)},
                { default: () => "Delete" })
            ]);
          }
        }
      ];
    };
    return {
      loading,
      showModal,
      tempProduct,
      tableData,
      updateProduct,
      columns: createColumns({
        editList(rowData) {
          tempProduct.value = rowData
          isNew.value = false
          showModal.value = true
        },
        deleteList(rowData) {
          alert("del"+rowData.name)
        }
      }),
      pagination: {
        pageSize: 10,
        class: 'tw-mx-auto'
      }
    };
  }
});
</script>