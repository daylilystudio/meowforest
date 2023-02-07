<template>
  <n-card
    style="max-width:95%; width: 800px"
    :title="(isNew?'Add':'Edit')+' Coupon'"
    :bordered="false"
    size="huge"
    role="dialog"
    aria-modal="true"
  >
    <n-form
    ref="formRef"
    :model="data"
    :rules="rules"
    size="medium"
    label-placement="top">
      <n-grid :x-gap="12" cols="1 s:2" responsive="screen">
        <n-form-item-gi label="Coupon Title" path="title">
          <n-input v-model:value="data.title" placeholder="Coupon Title" />
        </n-form-item-gi>
        <n-form-item-gi label="Code" path="code">
          <n-input v-model:value="data.code" placeholder="Code" />
        </n-form-item-gi>
        <n-form-item-gi label="Due Date" path="due_date">
          <n-date-picker class="tw-w-full" v-model:value="data.due_date" :is-date-disabled="(ts) => ts < Date.now()" type="datetime" clearable />
        </n-form-item-gi>
        <n-gi>
          <n-grid :x-gap="12" cols="2">
            <n-form-item-gi label="Discount Percent" path="percent">
              <n-input-number v-model:value="data.percent" placeholder="Discount" />
            </n-form-item-gi>
            <n-form-item-gi label="Enabled" path="is_enabled">
              <n-switch v-model:value="data.is_enabled" :checked-value="1" :unchecked-value="0" />
            </n-form-item-gi>
          </n-grid>
        </n-gi>
      </n-grid>
    </n-form>
    <div class="tw-text-right">
      <n-button @click="$emit('closeModal', false)" class="tw-mr-3">Cancel</n-button>
      <n-button @click="$emit('update', data)" type="primary">
        {{isNew ? 'Add' : 'Update'}}
        <font-awesome-icon v-if="loading" class="fa-spin fa-lg tw-ml-2" :icon="['fas', 'spinner']" />
      </n-button>
    </div>
  </n-card>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { NCard, NButton, NForm, NGrid, NGi, NFormItemGi, NInput, NInputNumber, NSwitch, NDatePicker } from "naive-ui";
export default defineComponent({
  components: { NCard, NButton, NForm, NGrid, NGi, NFormItemGi, NInput, NInputNumber, NSwitch, NDatePicker },
  props: {
    temp:{
      type: Object,
      default() { return {} }
    },
    isNew:{
      type: Boolean,
      default: false
    },
    loading:{
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const data = ref(props.temp)
    return { 
      data,
      rules: {
        title: {
          required: true,
          message: "Plz input title"
        },
        code: {
          required: true,
          message: "Plz input code"
        },
        percent: {
          type: "number",
          required: true,
          trigger: ["blur", "change"],
          message: "Plz input percent"
        },
        due_date: {
          required: true,
          message: "Plz input date"
        }
      }
    }
  }
})
</script>