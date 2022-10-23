<template>
  <nav class="nav-container tw-h-14 md:tw-h-16 tw-fixed tw-top-6 tw-left-1/2 -tw-translate-x-1/2
  tw-rounded-full tw-shadow-xl tw-bg-white tw-flex tw-items-center tw-p-1.5">
    <img src="@/assets/logo.svg" class="tw-h-8 tw-ml-6" alt="Logo">
    <div class="menuShadow tw-shadow-xl md:tw-shadow-none tw-fixed tw-top-14 tw-left-6 tw-right-6 md:tw-static tw-flex tw-flex-col md:tw-flex-row tw-gap-6 tw-items-center
    tw-bg-white text-main-second tw-font-bold tw-text-lg tw-p-8 md:tw-p-0 md:tw-ml-auto">
      <router-link to="/">貓の食品</router-link>
      <router-link to="/">貓の用品</router-link>
      <router-link to="/">貓の玩具</router-link>
      <router-link to="/login" class="text-main-primary">登入後台</router-link>
</div>
    <a class="menuBtn tw-ml-auto tw-flex md:tw-hidden">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </a>
    <a class="bg-main-primary tw-relative tw-rounded-full tw-p-2.5 md:tw-p-3 tw-ml-6 tw-cursor-pointer hover:tw-brightness-90">
      <img src="@/assets/icon_cart.svg" alt="">
      <strong class="tw-w-5 tw-h-5 bg-notice tw-absolute -tw-top-1 -tw-right-1.5 tw-flex tw-justify-center tw-text-sm tw-text-white tw-rounded-full">
        2
      </strong>
    </a>
  </nav>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>