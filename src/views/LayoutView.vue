<script setup>
  import { RouterView } from 'vue-router'
  import TheNav from '../components/global/TheNav.vue'
  import TheFooter from '../components/global/TheFooter.vue';
  import bg from '@/assets/img/bg.jpg'
</script>

<template>
  <div :style="{backgroundImage: 'url('+ bg +')'}">
    <TheNav />
    <RouterView />
    <TheFooter />
  </div>
</template>
