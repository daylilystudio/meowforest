<template>
  <app-provider>
    <RouterView />
  </app-provider>
</template>

<script setup>
import { RouterView } from 'vue-router'
import AppProvider from './components/AppProvider.vue';
</script>