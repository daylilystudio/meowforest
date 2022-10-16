<template>
  <n-card
    style="max-width:95%; width: 800px"
    title="Add Product"
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
      <n-grid :span="24" :x-gap="24">
        <n-form-item-gi :span="12" label="Input" path="inputValue">
          <n-input v-model:value="data.inputValue" placeholder="Input" />
        </n-form-item-gi>
      </n-grid>
    </n-form>
    <div class="tw-text-right">
      <n-button @click="$emit('closeModal', false)" class="tw-mr-3">Cancel</n-button>
      <n-button @click="$emit('updateProduct', data.value)" type="primary">Add</n-button>
    </div>
  </n-card>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { NCard, NButton, NForm, NGrid, NFormItemGi, NInput } from "naive-ui";
export default defineComponent({
  components: { NCard, NButton, NForm, NGrid, NFormItemGi, NInput },
  props: {
    tempProduct:{
      type: Object,
      default() { return {} }
    }
  },
  setup(props) {
    const data = ref(props.tempProduct)
    return { 
      data,
      rules: {
        inputValue: {
          required: true,
          trigger: ["blur", "input"],
          message: "Please input inputValue"
        },
      }
    }
  }
})
</script>