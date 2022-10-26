<template>
  <nav class="nav-container tw-h-14 xl:tw-h-16 tw-fixed tw-top-3 sm:tw-top-6 tw-left-1/2 -tw-translate-x-1/2
  tw-rounded-full tw-shadow-xl tw-bg-white tw-flex tw-items-center tw-p-1.5 tw-z-10">
    <img src="@/assets/logo.svg" class="tw-h-8 tw-ml-6" alt="Logo">
    <div class="menuList tw-fixed tw-top-14 tw-left-6 tw-right-6 md:tw-static tw-flex tw-flex-col md:tw-flex-row tw-gap-8 tw-items-center tw-justify-center
    tw-bg-white text-main-second tw-font-bold tw-text-lg md:tw-ml-auto tw-rounded-b-2xl tw-shadow-xl md:tw-shadow-none">
      <router-link to="/">貓の食品</router-link>
      <router-link to="/">貓の用品</router-link>
      <router-link to="/">貓の玩具</router-link>
      <router-link to="/login" class="text-main-primary">登入後台</router-link>
    </div>
    <a @click="toggleMenu($event)" class="menuBtn tw-ml-auto tw-flex md:tw-hidden tw-cursor-pointer">
      <span></span>
      <span></span>
      <span></span>
    </a>
    <a class="bg-main-primary tw-relative tw-rounded-full tw-p-2.5 md:tw-p-3 tw-ml-6 tw-cursor-pointer hover:tw-brightness-90">
      <img src="@/assets/img/icon_cart.svg" alt="">
      <strong class="tw-w-5 tw-h-5 bg-notice tw-absolute -tw-top-1 -tw-right-1.5 tw-flex tw-justify-center tw-text-sm tw-text-white tw-rounded-full">
        2
      </strong>
    </a>
  </nav>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {
      toggleMenu(e) {
        e.target.classList.toggle('active')
        document.querySelector('.menuList').classList.toggle('active')
      }
    }
  }
})
</script>