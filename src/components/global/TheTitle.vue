<template>
  <h2 class="tw-text-center tw-tracking-wider tw-text-4xl md:tw-text-5xl tw-font-bold tw-mt-10">
    {{ props.titleTxt }}
  </h2>
  <p class="tw-text-second tw-text-center tw-font-bold tw-mb-10 tw-mt-2 tw-text-2xl md:tw-text-3xl">
    {{ subTxt }}
  </p>
</template>

<script setup>
const props = defineProps({
  titleTxt: {
    type: String,
    default: ''
  },
  subTxt: {
    type: String,
    default: ''
  }
})
</script>
