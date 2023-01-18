<template>
  <n-card
    style="max-width:95%; width: 800px"
    :title="'Order No. '+data.id"
    :bordered="false"
    size="huge"
    role="dialog"
    aria-modal="true"
  >
    <section class="md:tw-flex">
      <n-list class="tw-flex-1">
        <p class="text-primary tw-text-xl tw-font-bold md:tw-mb-2">User Info</p>
        <n-list-item>
          <span class="tw-font-bold tw-w-1/4 tw-inline-block">Name</span>{{ data.user.name }}
        </n-list-item>
        <n-list-item>
          <span class="tw-font-bold tw-w-1/4 tw-inline-block">Email</span>{{ data.user.email }}
        </n-list-item>
        <n-list-item>
          <span class="tw-font-bold tw-w-1/4 tw-inline-block">Phone</span>{{ data.user.tel }}
        </n-list-item>
        <n-list-item>
          <span class="tw-font-bold tw-w-1/4 tw-inline-block">Address</span>{{ data.user.address }}
        </n-list-item>
      </n-list>
      <n-list class="tw-flex-1 tw-mt-6 md:tw-mt-auto">
        <p class="text-primary tw-text-xl tw-font-bold md:tw-mb-2">Order Info</p>
        <n-list-item>
          <span class="tw-font-bold tw-w-1/4 tw-inline-block">Order at</span>{{ filter.date(data.create_at*1000) }}
        </n-list-item>
        <n-list-item>
          <span class="tw-font-bold tw-w-1/4 tw-inline-block">Shipping</span>{{ data.user.shipping_method }}
        </n-list-item>
        <n-list-item>
          <span class="tw-font-bold tw-w-1/4 tw-inline-block">Paid</span>
          <n-tag :bordered="false" :type="data.is_paid?'success':''" size="small" style="--n-height:21.5px" class="tw-mr-1">{{ data.is_paid ? 'Yes' : 'No' }}</n-tag>
          {{ data.user.payment_method==='atm'?'ATM':'Credit' }} {{ data.paid_date ? '/ '+filter.date(data.paid_date*1000) : '' }}
        </n-list-item>
        <n-list-item>
          <span class="tw-font-bold tw-w-1/4 tw-inline-block">Message</span>{{ data.message?data.message:'-' }}
        </n-list-item>
        <n-list-item class="text-second tw-text-base tw-font-bold">
          <span class="tw-w-1/4 tw-inline-block">Total</span>$ {{ filter.currency(data.total+data.user.shipping_money) }}
        </n-list-item>
      </n-list>
    </section>
    <n-data-table
      class="tw-mt-6"
      :bordered="false"
      :columns="columns"
      :data="Object.values(data.products)"
      :pagination="false"
    />
    <div class="tw-text-right tw-mt-4">
      <n-button @click="$emit('closeModal', false)">Close</n-button>
    </div>
  </n-card>
</template>
<script>
import { defineComponent, inject, h } from 'vue'
import { NCard, NButton, NDataTable, NList, NListItem, NTag } from "naive-ui";
export default defineComponent({
  components: { NCard, NButton, NDataTable, NList, NListItem, NTag },
  props: {
    data:{
      type: Object,
      default() { return {} }
    }
  },
  setup() {
    const filter = inject('$filter')
    // table key
    return {
      filter,
      columns: [
        {
          title: "Product Name",
          key: "product[title]"
        },
        {
          title: "Price",
          key: "product[price]"
        },
        {
          title: "Qty",
          key: "qty",
          render(row) {
            return h(
              'span',
              `${row.qty} / ${row.product.unit}`
            );
          }
        },
        {
          title: "Total",
          key: "total",
          render(row) {
            return h(
              'span',
              filter.currency(row.total)
            );
          }
        }
      ]
    }
  }
})
</script>