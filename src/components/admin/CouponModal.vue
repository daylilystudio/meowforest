<template>
  <NCard
    style="max-width:95%; width: 800px"
    :title="(isNew?'Add':'Edit')+' Coupon'"
    :bordered="false"
    size="huge"
    role="dialog"
    aria-modal="true"
  >
    <NForm
    ref="formRef"
    :model="data"
    :rules="rules"
    size="medium"
    label-placement="top">
      <NGrid :x-gap="12" cols="1 s:2" responsive="screen">
        <NFormItemGi label="Coupon Title" path="title">
          <NInput v-model:value="data.title" placeholder="Coupon Title" />
        </NFormItemGi>
        <NFormItemGi label="Code" path="code">
          <NInput v-model:value="data.code" placeholder="Code" />
        </NFormItemGi>
        <NFormItemGi label="Due Date" path="due_date">
          <NDatePicker class="tw-w-full" v-model:value="data.due_date" :is-date-disabled="(ts) => ts < Date.now()" type="datetime" clearable />
        </NFormItemGi>
        <NGi>
          <NGrid :x-gap="12" cols="2">
            <NFormItemGi label="Discount Percent" path="percent">
              <NInputNumber v-model:value="data.percent" placeholder="Discount" />
            </NFormItemGi>
            <NFormItemGi label="Enabled" path="is_enabled">
              <NSwitch v-model:value="data.is_enabled" :checked-value="1" :unchecked-value="0" />
            </NFormItemGi>
          </NGrid>
        </NGi>
      </NGrid>
    </NForm>
    <div class="tw-text-right">
      <NButton @click="$emit('closeModal', false)" class="tw-mr-3">Cancel</NButton>
      <NButton @click="$emit('update', data)" type="primary">
        {{ isNew ? 'Add' : 'Update' }}
        <font-awesome-icon v-if="loading" class="fa-spin fa-lg tw-ml-2" :icon="['fas', 'spinner']" />
      </NButton>
    </div>
  </NCard>
</template>
<script>
import { ref } from 'vue'
import { NCard, NButton, NForm, NGrid, NGi, NFormItemGi, NInput, NInputNumber, NSwitch, NDatePicker } from 'naive-ui'
export default {
  components: { NCard, NButton, NForm, NGrid, NGi, NFormItemGi, NInput, NInputNumber, NSwitch, NDatePicker },
  props: {
    temp: {
      type: Object,
      default () { return {} }
    },
    isNew: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    const data = ref(props.temp)
    return {
      data,
      rules: {
        title: {
          required: true,
          message: 'Plz input title'
        },
        code: {
          required: true,
          message: 'Plz input code'
        },
        percent: {
          type: 'number',
          required: true,
          trigger: ['blur', 'change'],
          message: 'Plz input percent'
        },
        due_date: {
          required: true,
          message: 'Plz input date'
        }
      }
    }
  }
}
</script>
