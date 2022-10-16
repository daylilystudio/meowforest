<template>
  <n-button @click="showModal=true" type="primary" ghost class="tw-block tw-ml-auto tw-mb-4">
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
  <n-modal v-model:show="showModal">
    <ProductModal :tempProduct="tempProduct" @updateProduct="updateProduct" @closeModal="v => showModal=v"/>
  </n-modal>
</template>
<script>
import { NSpace, NDataTable, NTag, NButton, NModal } from 'naive-ui'
import { defineComponent ,h, ref, reactive, inject, onMounted} from 'vue'
import ProductModal from "../../components/admin/ProductModal.vue"
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
      key: "origin_price"
    },
    {
      title: "Price",
      key: "price"
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

export default defineComponent({
  components: { ProductModal, NSpace, NDataTable, NButton, NModal },
  setup() {
    const axios = inject('axios')
    // data
    const loading = ref(false)
    const showModal = ref(false)
    const tempProduct = ref({})
    // get product
    const tableData = reactive({data:[]})
    const getProduct = () => {
      loading.value = true
      const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/admin/products`
      axios.get(api).then((res) => {
        loading.value = false
        if(res.data.success){
          window.$notification.success({
            content: '讀取資料成功',
            duration: 1500,
          })
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
      console.log(typeof data)
      showModal.value = false
      getProduct()
    }
    return {
      loading,
      showModal,
      tempProduct,
      tableData,
      updateProduct,
      columns: createColumns({
        editList(rowData) {
          alert("edit"+rowData.name)
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