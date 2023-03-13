<template>
  <NCard
    style="max-width:95%; width: 800px"
    :title="'Order No. '+data.id"
    :bordered="false"
    size="huge"
    role="dialog"
    aria-modal="true"
  >
    <section class="md:tw-flex">
      <NList class="tw-flex-1">
        <p class="text-primary tw-text-xl tw-font-bold md:tw-mb-2">User Info</p>
        <NListItem>
          <span class="tw-font-bold tw-w-1/4 tw-inline-block">Name</span>{{ data.user.name }}
        </NListItem>
        <NListItem>
          <span class="tw-font-bold tw-w-1/4 tw-inline-block">Email</span>{{ data.user.email }}
        </NListItem>
        <NListItem>
          <span class="tw-font-bold tw-w-1/4 tw-inline-block">Phone</span>{{ data.user.tel }}
        </NListItem>
        <NListItem>
          <span class="tw-font-bold tw-w-1/4 tw-inline-block">Address</span>{{ data.user.address }}
        </NListItem>
      </NList>
      <NList class="tw-flex-1 tw-mt-6 md:tw-mt-auto">
        <p class="text-primary tw-text-xl tw-font-bold md:tw-mb-2">Order Info</p>
        <NListItem>
          <span class="tw-font-bold tw-w-1/4 tw-inline-block">Order at</span>{{ filter.date(data.create_at*1000) }}
        </NListItem>
        <NListItem>
          <span class="tw-font-bold tw-w-1/4 tw-inline-block">Shipping</span>{{ data.user.shipping_method }}
        </NListItem>
        <NListItem>
          <span class="tw-font-bold tw-w-1/4 tw-inline-block">Paid</span>
          <NTag :bordered="false" :type="data.is_paid?'success':''" size="small" style="--n-height:21.5px" class="tw-mr-1">{{ data.is_paid ? 'Yes' : 'No' }}</NTag>
          {{ data.user.payment_method==='atm'?'ATM':'Credit' }} {{ data.paid_date ? '/ '+filter.date(data.paid_date*1000) : '' }}
        </NListItem>
        <NListItem>
          <span class="tw-font-bold tw-w-1/4 tw-inline-block">Message</span>{{ data.message?data.message:'-' }}
        </NListItem>
        <NListItem class="text-second tw-text-base tw-font-bold">
          <span class="tw-w-1/4 tw-inline-block">Total</span>$ {{ filter.currency(Math.ceil(data.total)+data.user.shipping_money) }}
        </NListItem>
      </NList>
    </section>
    <NDataTable
      class="tw-mt-6"
      :bordered="false"
      :columns="columns"
      :data="Object.values(data.products)"
      :pagination="false"
    />
    <div class="tw-text-right tw-mt-4">
      <NButton @click="$emit('closeModal', false)">Close</NButton>
    </div>
  </NCard>
</template>
<script>
import { inject, h } from 'vue'
import { NCard, NButton, NDataTable, NList, NListItem, NTag } from "naive-ui";
export default {
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
        },
        {
          title: "Coupon",
          key: "coupon[code]"
        },
      ]
    }
  }
}
</script>