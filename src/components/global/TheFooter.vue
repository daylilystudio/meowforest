<template>
  <footer class="tw-text-white tw-mt-24">
    <section class="tw-bg-theme tw-py-14">
      <div class="container tw-flex tw-flex-col sm:tw-flex-row">
        <img class="tw-mr-14 tw-hidden lg:tw-block" src="@/assets/logo_light.svg" alt="Logo">
        <div class="tw-ml-14 tw-flex tw-flex-col tw-gap-4">
          <p class="tw-font-bold sm:tw-mb-2">Product</p>
          <router-link v-for="list in globalStore.menu" :key="list.link" :to="list.link" :class="{'tw-text-second':list.key==='login'}">{{ list.name }}<span class="tw-ml-2">{{ list.en }}</span></router-link>
        </div>
        <div class="tw-mt-14 sm:tw-mt-0 tw-ml-14 tw-flex tw-flex-col tw-gap-4">
          <p class="tw-font-bold sm:tw-mb-2">Contact</p>
          <span>02-12340000</span>
          <span>open from Mon - Fri, 9:00 -18:00</span>
          <span>meowforest@mail.com</span>
        </div>
      </div>
    </section>
    <section class="tw-bg-primary tw-py-8 tw-px-4 tw-text-center">
      {{ thisYear() }} © 貓森 Meow Forest All Reserved.<br class="tw-block sm:tw-hidden">
      Design & Web Develope by <a href="https://daylily.tw" target="_blank">Daylily</a>.<br>
      Personal works, non-commercial purposes.
      <p class="tw-w-full tw-h-16 tw-block sm:tw-hidden" />
    </section>
  </footer>
</template>
<script>
// store composition API
import { useGlobalStore } from '@/stores/global.js'

export default {
  setup() {
    const globalStore = useGlobalStore()
    return {
      globalStore,
      thisYear() {
        const now = new Date()
        return now.getFullYear()
      }
    }
  }
}
</script>