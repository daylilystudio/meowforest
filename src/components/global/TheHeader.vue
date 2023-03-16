<template>
  <header
    class="tw-h-64 md:tw-h-96 tw-bg-cover"
    :style="{backgroundImage: 'url('+ bg +')'}" />
</template>
<script>
// image
import bg from '@/assets/img/heroOther.jpg'
export default {
  setup () {
    return { bg }
  }
}
</script>
