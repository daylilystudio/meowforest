<template>
  <the-header />
  <div class="tw-my-4 container">
    <router-link to="/" class="tw-font-bold">Home</router-link> /
    <span>404 Not Found</span>
  </div>
  <img src="@/assets/img/404.png" class="tw-block tw-w-3/5 sm:tw-w-60 tw-h-auto tw-mx-auto tw-mt-16" alt="404 Not Found">
  <router-link to="/" class="hover:tw-brightness-90 bg-third tw-rounded-full tw-block tw-font-bold tw-text-center tw-w-3/5 sm:tw-w-60 tw-p-4 tw-mt-10 tw-mx-auto">
    Back To Home
  </router-link>
</template>
<script>
import TheHeader from '@/components/global/TheHeader.vue'

export default {
  components: { TheHeader },
}
</script>