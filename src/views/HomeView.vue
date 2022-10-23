<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import TheNav from '../components/TheNav.vue'
</script>

<template>
  <header>
    <TheNav></TheNav>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
  </header>
  <RouterView />
</template>
