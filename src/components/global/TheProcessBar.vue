<template>
  <section class="md:tw-w-4/5 tw-mx-auto tw-grid tw-grid-cols-3 tw-gap-y-2 tw-justify-between tw-mt-4 tw-mb-8">
    <div v-for="(item, i) in list" :key="i" class="tw-text-center">
      <img :src="item.img" :alt="item.txt" class="tw-w-3/5 md:tw-w-2/5">
    </div>
    <div v-for="(item, i) in list" :key="item.txt"
      :class="{'tw-text-primary tw-font-bold':process>i||process===i}"
      class="tw-relative tw-flex tw-flex-col tw-items-center tw-text-center">
      <span :class="(process>i?'tw-bg-primary':'tw-bg-theme')"
        style="width:94%"
        class="tw-absolute tw-top-1.5 tw-left-1/2 tw-translate-y-px tw-translate-x-2 tw-h-0.5"
        v-if="i!==list.length-1" />
      <span class="tw-bg-white">
        <font-awesome-icon :icon="['far', 'circle']" v-if="process<i" />
        <font-awesome-icon :icon="['far', 'circle-dot']" v-if="process===i" />
        <font-awesome-icon :icon="['fas', 'circle-check']" v-if="process>i" />
      </span>
      {{ item.txt }}
      <span>{{ item.en }}</span>
    </div>
  </section>
</template>

<script>
// image
import bar1 from '@/assets/img/processbar1.png'
import bar2 from '@/assets/img/processbar2.png'
import bar3 from '@/assets/img/processbar3.png'
export default {
  props: {
    process: {
      type: Number,
      default: 0
    }
  },
  setup () {
    return {
      bar1,
      bar2,
      bar3,
      list: [
        {
          txt: '購物車',
          en: 'Cart',
          img: bar1
        },
        {
          txt: '資料填寫',
          en: 'Checkout',
          img: bar2
        },
        {
          txt: '訂購完成',
          en: 'Finish',
          img: bar3
        }
      ]
    }
  }
}
</script>
