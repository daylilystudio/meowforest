<template>
  <TheHeader />
  <div class="container lg:tw-grid lg:tw-grid-cols-4 tw-gap-8 tw-pt-10 -tw-mt-24 sm:tw-mt-auto">
    <aside class="tw-shadow-main tw-col-span-1 tw-self-start tw-bg-white tw-rounded-2xl tw-p-6 sm:tw-p-8">
      <label for="search" class="tw-relative">
        <input class="tw-border-primary focus:tw-border-second tw-w-full tw-rounded-full tw-border-solid tw-py-2 tw-pl-8 tw-pr-4"
          v-model="searchText" id="search" type="text" placeholder="Search">
        <FontAwesomeIcon class="tw-absolute tw-top-1/2 tw-left-3 -tw-translate-y-1/2" :icon="['fas', 'magnifying-glass']" />
      </label>
      <div class="tw-mt-4 lg:tw-ml-2 tw-flex lg:tw-flex-col tw-justify-around">
        <RouterLink :to="item.link" v-for="item in productMenu" :key="item.name" class="tw-leading-8 tw-font-bold tw-cursor-pointer">
          <FontAwesomeIcon class="tw-hidden sm:tw-inline sm:tw-mr-2" :icon="['fas', 'paw']" />
          {{ item.name === 'Products' ? 'All' : item.name }}
        </RouterLink>
      </div>
    </aside>
    <main class="tw-col-span-3">
      <div class="tw-mt-8 lg:tw-mt-0">
        <RouterLink to="/" class="tw-font-bold">Home</RouterLink> / Product List
        <span v-if="bread">/ {{ bread[0].toUpperCase()+bread.slice(1) }}</span>
      </div>
      <section class="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-x-4 tw-gap-y-10 tw-mt-6">
        <RouterLink :to="`/products/${list.id}`" class="tw-group" v-for="list in productsList" :key="list.id">
          <div class="tw-relative tw-overflow-hidden">
            <img class="tw-w-full group-hover:tw-scale-110" :src="list.imagesUrl[0]" alt="product image">
            <p @click.prevent="globalStore.toggleFav(list.id)" class="tw-text-second fa-xl tw-absolute tw-right-3 tw-top-3" title="Add Favorite">
              <FontAwesomeIcon :icon="[globalStore.isfav['meowforestFav' + list.id] ? 'fas' : 'far', 'heart']" />
            </p>
          </div>
          <p class="tw-font-bold tw-mt-3 tw-mb-1">{{ list.title }}</p>
          <span class="tw-text-second tw-mr-4 tw-font-bold">NTD. {{ list.price }}</span>
          <del>NTD. {{ list.origin_price }}</del>
        </RouterLink>
      </section>
      <div v-if="productsList.length===0" class="tw-opacity-50 tw-w-2/3 md:tw-w-72 tw-mx-auto tw-mt-10">
        <img src="@/assets/img/nodata.png" class="tw-w-full tw-h-auto" alt="no data">
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '@/stores/global.js'
import TheHeader from '@/components/global/TheHeader.vue'

const route = useRoute()
const globalStore = useGlobalStore()
const { menu, products } = storeToRefs(globalStore)
const searchText = ref('')
const bread = computed(() => route.query?.category ? route.query.category : '')
const productMenu = ref([])
productMenu.value.push(...menu.value)
productMenu.value.forEach((el, i) => {
  if (el.key.includes('login')) productMenu.value.splice(i, 1)
})
watch(bread, () => {
  searchText.value = ''
})
const productsList = computed({
  get: () => {
    if (route.query?.category && searchText.value === '') {
      const category = menu.value.filter(el => el.key === route.query?.category)
      return products.value.filter(el => el.category === category[0].name)
    } else if (searchText.value) {
      return products.value.filter(el => el.title.includes(searchText.value))
    }
    return products.value
  }
})
</script>
