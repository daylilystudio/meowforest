<template>
  <header class="tw-relative tw-w-full tw-h-screen">
    <div class="hero tw-absolute tw-top-0 tw-bottom-0 tw-left-0 tw-right-0" />
    <img class="tw-relative tw-w-full" src="@/assets/img/meowforestTxt.svg" alt="">
  </header>
  <div class="about">wewe
  </div>
</template>

<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
  })
</script>

<style lang="scss" scoped>
.hero{
  background-position: center;
  background-size: cover;
  background-image: url(./../assets/img/hero_m.jpg);
  @media (min-width: 640px) {
    background-image: url(./../assets/img/hero.jpg);
  }
}
</style>
