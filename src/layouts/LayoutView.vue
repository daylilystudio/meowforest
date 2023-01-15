<script setup>
  import { RouterView } from 'vue-router'
  import TheNav from '@/components/global/TheNav.vue'
  import TheFooter from '@/components/global/TheFooter.vue'
  import TheSticky from '@/components/global/TheSticky.vue'
  import bg from '@/assets/img/bg.jpg'
  // store composition API
  import { useGlobalStore } from '@/stores/global.js';
  const globalStore = useGlobalStore();
  globalStore.getProducts()
  globalStore.getCart()
</script>

<template>
  <div :style="{backgroundImage: 'url('+ bg +')'}">
    <TheNav />
    <RouterView />
    <TheFooter />
    <TheSticky />
  </div>
</template>
