<template>
  <footer class="tw-text-white">
    <section class="bg-theme tw-py-14">
      <div class="container tw-flex tw-flex-col sm:tw-flex-row">
        <img class="tw-mr-14 tw-hidden lg:tw-block" :src="logo" alt="Logo">
        <div class="tw-ml-14 tw-flex tw-flex-col tw-gap-4">
          <p class="tw-font-bold sm:tw-mb-2">Product</p>
          <router-link to="/products?category=food">貓の食品</router-link>
          <router-link to="/products?category=use">貓の用品</router-link>
          <router-link to="/products?category=toy">貓の玩具</router-link>
          <router-link to="/login" class="text-second">登入後台</router-link>
        </div>
        <div class="tw-mt-14 sm:tw-mt-0 tw-ml-14 tw-flex tw-flex-col tw-gap-4">
          <p class="tw-font-bold sm:tw-mb-2">Contact</p>
          <span>02-12340000</span>
          <span>open from Mon - Fri, 9:00 -18:00</span>
          <span>meowforest@mail.com</span>
        </div>
      </div>
    </section>
    <section class="bg-primary tw-py-8 tw-px-4 tw-text-center">
      {{thisYear()}} © 貓森 Meow Forest All Reserved. Web Design & Develope by Daylily.<br>
      The site is for resume, not really e-commerce
    </section>
  </footer>
</template>
<script>
import { defineComponent } from 'vue'
// image
import logo from '@/assets/img/logo_light.svg'

export default defineComponent({
  setup() {
    return {
      logo,
      thisYear() {
        const now = new Date()
        return now.getFullYear()
      }
    }
  }
})
</script>