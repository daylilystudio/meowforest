<template>
  <TheHeader />
  <div class="tw-my-4 container">
    <RouterLink to="/" class="tw-font-bold">Home</RouterLink> /
    <span>404 Not Found</span>
  </div>
  <img src="@/assets/img/404.png" class="tw-block tw-w-3/5 sm:tw-w-60 tw-h-auto tw-mx-auto tw-mt-16" alt="404 Not Found">
  <RouterLink to="/" class="hover:tw-brightness-90 tw-bg-third tw-rounded-full tw-block tw-font-bold tw-text-center tw-w-3/5 sm:tw-w-60 tw-p-4 tw-mt-10 tw-mx-auto">
    Back To Home
  </RouterLink>
</template>

<script setup>
import TheHeader from '@/components/global/TheHeader.vue'
</script>
