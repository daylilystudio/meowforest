<template>
  <h2 class="tw-text-center tw-tracking-wider tw-text-4xl md:tw-text-5xl tw-font-bold tw-mt-10">
    {{titletxt}}
  </h2>
  <p class="text-second tw-text-center tw-font-bold tw-mb-10 tw-mt-2 tw-text-2xl md:tw-text-3xl">
    {{subtxt}}
  </p>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    titletxt: {
      type: String,
      default: ''
    },
    subtxt: {
      type: String,
      default: ''
    }
  }
})
</script>