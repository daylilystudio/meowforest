<template>
  <n-button @click="isNew=true;showModal=true;temp={}" strong round color="#FF904F" class="tw-block tw-ml-auto tw-mb-4">
    Add Coupon +
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
    <CouponModal :temp="temp" :isNew="isNew" :loading="loading" @update="update" @closeModal="v => showModal=v"/>
  </n-modal>
</template>
<script>
import { NSpace, NDataTable, NTag, NButton, NModal, NPagination } from 'naive-ui'
import { defineComponent ,h, ref, reactive, inject, onMounted} from 'vue'
import CouponModal from "@/components/admin/CouponModal.vue"
import api from '@/utils/api.js'

export default defineComponent({
  components: { CouponModal, NSpace, NDataTable, NButton, NModal, NPagination },
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
        const res = await api.getAdminData('coupons', pagination.current)
        loading.value = false
        if(res.data.success){
          tableData.data = res.data.coupons
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
      let slug = 'coupon'
      let httpMethod = 'post'
      if(!isNew.value) {
        slug = `coupon/${data.id}`
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
    // del item
    const delList = async (rowData) => {
      loading.value = true
      try {
        const res = await api.delAdminData('coupon', rowData.id)
        loading.value = false
        window.$notification.success({
          content: res.data.message,
          duration: 1500,
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
          title: "title",
          key: "title"
        },
        {
          title: "Code",
          key: "code"
        },
        {
          title: "Discount",
          key: "percent"
        },
        {
          title: "Due Date",
          key: "due_date",
          render(row) {
            return h(
              'span',
              filter.date(row.due_date)
            );
          }
        },
        {
          title: "Enabled",
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
      update,
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