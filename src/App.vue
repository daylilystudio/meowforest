<template>
  <AppProvider>
    <RouterView />
  </AppProvider>
</template>

<script setup>
import { RouterView } from 'vue-router'
import AppProvider from './components/AppProvider.vue'
</script>
