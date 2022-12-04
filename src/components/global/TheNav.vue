<template>
  <nav class="nav-container tw-h-14 xl:tw-h-16 tw-fixed tw-top-3 sm:tw-top-6 tw-left-1/2 -tw-translate-x-1/2
  tw-rounded-full tw-shadow-xl tw-bg-white tw-flex tw-items-center tw-p-1.5 tw-z-20">
    <img @click="router.push('/')" src="@/assets/logo.svg" class="tw-h-8 tw-ml-6 tw-cursor-pointer" alt="Logo">
    <div class="menuList tw-fixed tw-top-14 tw-left-6 tw-right-6 md:tw-static tw-flex tw-flex-col md:tw-flex-row tw-gap-8 tw-items-center tw-justify-center
    tw-bg-white text-second tw-font-bold tw-text-lg md:tw-ml-auto tw-rounded-b-2xl tw-shadow-xl md:tw-shadow-none">
      <router-link to="/products?category=food" class="menuA">貓の食品</router-link>
      <router-link to="/products?category=use" class="menuA">貓の用品</router-link>
      <router-link to="/products?category=toy" class="menuA">貓の玩具</router-link>
      <router-link to="/login" class="menuA text-primary">登入後台</router-link>
    </div>
    <a @click="toggleMenu($event)" class="menuBtn tw-ml-auto tw-flex md:tw-hidden tw-cursor-pointer">
      <span></span>
      <span></span>
      <span></span>
    </a>
    <router-link to="/cart" :class="{'tw-cursor-not-allowed':route.path==='/cart'}" class="bg-primary tw-relative tw-rounded-full tw-p-2.5 md:tw-p-3 tw-ml-6 tw-cursor-pointer hover:tw-brightness-90">
      <img src="@/assets/img/icon_cart.svg" alt="">
      <strong class="tw-w-5 tw-h-5 bg-notice tw-absolute -tw-top-1 -tw-right-1.5 tw-flex tw-justify-center tw-text-sm tw-text-white tw-rounded-full">
        2
      </strong>
    </router-link>
  </nav>
</template>
<script>
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const route = useRoute()
    const router = useRouter()
    return {
      route, router,
      toggleMenu(e) {
        e.target.classList.toggle('active')
        document.querySelector('.menuList').classList.toggle('active')
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.menuBtn{
  width: 1.6rem;
  height: 1.34rem;
  flex-direction: column;
  justify-content: space-between;
  span{
    border-radius: 2px;
    width: 100%;
    height: 3px;
    background-color: var(--secondColor);
    transition: all .5s;
    transform-origin: 50% 50%;
    pointer-events: none;
  }
  &.active{
    justify-content:center;
    span{
      &:nth-of-type(2) {
        opacity: 0;
      }
      &:nth-of-type(1) {
        transform: rotate(45deg) translateY(4.2px);
      }
      &:nth-of-type(3) {
        transform: rotate(-45deg) translateY(-4.2px);
      }
    }
  }
}
.menuList{
  @media (max-width:767px) {
    height: 0;
    transition: height .5s ease-in-out;
    overflow: hidden;
    background-image: linear-gradient( rgba(#000, .1) 0%, transparent 10%, transparent 12%);
  }
  &.active{
    @media (max-width:767px) {
      height: 16rem;
    }
  }
}
</style>