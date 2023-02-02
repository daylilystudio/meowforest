<template>
  <nav class="nav-container tw-h-14 xl:tw-h-16 tw-fixed tw-top-3 sm:tw-top-6 tw-left-1/2 -tw-translate-x-1/2
  tw-rounded-full tw-shadow-xl tw-bg-white tw-flex tw-items-center tw-p-1.5 tw-z-20">
    <img @click="router.push('/')" src="@/assets/logo.svg" class="tw-h-8 tw-ml-6 tw-cursor-pointer" alt="Logo">
    <div :class="{'active':openMobileNav}" class="menuList tw-fixed tw-top-14 tw-left-6 tw-right-6 md:tw-static tw-flex tw-flex-col md:tw-flex-row tw-gap-8 tw-items-center tw-justify-center
    tw-bg-white text-second tw-font-bold lg:tw-text-lg md:tw-ml-auto tw-rounded-b-2xl tw-shadow-xl md:tw-shadow-none">
      <router-link v-for="list in globalStore.menu" :key="list.link" @click="openMobileNav=false" :to="list.link" :class="{'text-theme':list.key==='login'}" class="menuA tw-flex sm:tw-flex-col tw-items-center">
        {{ list.name }}
        <span class="tw-text-xs tw-leading-0 md:-tw-mb-1">{{ list.en }}</span>
      </router-link>
    </div>
    <a @click="openMobileNav=!openMobileNav" :class="{'active':openMobileNav}" class="menuBtn tw-ml-auto tw-flex md:tw-hidden tw-cursor-pointer">
      <span></span>
      <span></span>
      <span></span>
    </a>
    <router-link to="/cart" :class="{'tw-cursor-not-allowed':route.path==='/cart', 'shake':globalStore.addingCart}" title="Go Shopping Cart" class="bg-primary tw-relative tw-rounded-full tw-p-2.5 md:tw-p-3 tw-ml-6 tw-cursor-pointer hover:tw-brightness-90">
      <img src="@/assets/img/icon_cart.svg" alt="">
      <strong v-show="globalStore.cart.carts?.length>0" class="tw-w-5 tw-h-5 bg-notice tw-absolute -tw-top-1 -tw-right-1.5 tw-flex tw-justify-center tw-text-sm tw-text-white tw-rounded-full">
        {{ globalStore.cart.carts?.length }}
      </strong>
    </router-link>
  </nav>
  <div @click="openMobileNav=false" :class="(!openMobileNav?'tw-pointer-events-none tw-opacity-0':'tw-opacity-50')" class="bg-theme tw-block md:tw-hidden tw-fixed tw-w-full tw-h-full tw-top-0 tw-z-10" />
  <div v-if="globalStore.loadingPage || openLoading" class="loadingBg tw-fixed tw-w-full tw-h-full tw-flex tw-flex-col tw-items-center tw-justify-center tw-z-30">
    <font-awesome-icon :icon="['fas', 'spinner']" class="fa-2xl fa-spin tw-ml-8 tw-mt-2" />
    <img src="@/assets/img/loading.png" alt="loading cat" class="cat tw-w-32 tw-h-auto">
  </div>
</template>
<script>

import { defineComponent, onBeforeMount, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// store composition API
import { useGlobalStore } from '@/stores/global.js'

export default defineComponent({
  setup() {
    const route = useRoute()
    const router = useRouter()
    const globalStore = useGlobalStore()
    const openLoading = ref(true)
    const openMobileNav = ref(false)
    onBeforeMount(() =>  {
      globalStore.getProducts()
      globalStore.getCart()
    })
    onMounted(() =>  {
      setTimeout(()=>{
        openLoading.value = false
      }, 300)
    })
    return {
      route, router, globalStore, openMobileNav, openLoading
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
      height: 21rem;
    }
  }
}
.loadingBg{
  background-color: rgba(#fff, .75);
}
.shake {
  animation: boom 1s both;
}
@keyframes boom {
  30% {
    transform: rotate(10deg);
    transform-origin: center bottom;
  }
  50% {
    transform: rotate(-12deg);
  }
  70% {
    transform: rotate(3deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.cat {
  animation: heartbeat 1.2s 1.5s ease-in infinite;
}
</style>