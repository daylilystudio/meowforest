<template>
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
  <n-modal v-model:show="showModal" :mask-closable="true">
    <OrderModal :data="temp" @closeModal="v => showModal=v"/>
  </n-modal>
</template>
<script>
import { NSpace, NDataTable, NTag, NButton, NModal, NPagination } from 'naive-ui'
import { defineComponent ,h, ref, reactive, inject, onMounted} from 'vue'
import OrderModal from "@/components/admin/OrderModal.vue"
import api from '@/utils/api.js'

export default defineComponent({
  components: { OrderModal, NSpace, NDataTable, NModal, NPagination },
  setup() {
    const filter = inject('$filter')
    // data
    const loading = ref(false)
    const showModal = ref(false)
    const isNew = ref(false)
    const temp = ref({})
    const pagination = reactive({
      current: 1,
      total: 2,
    })
    // get data
    const tableData = reactive({data:[]})
    const getData = async () => {
      loading.value = true
      try {
        const res = await api.getAdminData('orders', pagination.current)
        loading.value = false
        if(res.data.success){
          tableData.data = res.data.orders
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
    // del item
    const delList = async (rowData) => {
      loading.value = true
      try {
        const res = await api.delAdminData('order', rowData.id)
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
    // table key
    const createColumns = ({
      editList, clickDel
    }) => {
      return [
        {
          title: "Create Date",
          key: "create_at",
          render(row) {
            return h(
              'span',
              filter.date(row.create_at*1000)
            );
          }
        },
        {
          title: "Name",
          key: "user[name]"
        },
        {
          title: "Email",
          key: "user[email]"
        },
        {
          title: "Total",
          key: "total",
          render(row) {
            return h(
              'span',
              filter.currency(Math.ceil(row.total)+row.user.shipping_money)
            );
          }
        },
        {
          title: "Paid",
          key: "is_paid",
          render(row) {
            return h(
              NTag,
              { type: row.is_paid===true ? 'success' : '', bordered: false },
              { default: () => row.is_paid===true ? 'Yes' : 'No' }
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
                { default: () => "View" },),
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
      temp,
      tableData,
      pagination,
      columns: createColumns({
        editList(rowData) {
          temp.value = rowData
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
      pageChange(v) {
        pagination.current = v
        getData()
      }
    };
  }
});
</script>