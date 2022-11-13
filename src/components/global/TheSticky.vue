<template>
  <div class="tw-fixed tw-bottom-3 sm:tw-bottom-6 tw-right-3 md:tw-right-5 tw-z-20">
    <a v-for="item in list" :key="item.icon"
      @click="clickBtn(item.icon)" :class="item.class"
      class="shadow tw-block tw-w-10 tw-h-10 tw-flex tw-items-center tw-justify-center
      tw-bg-white tw-rounded-full tw-mb-2 tw-cursor-pointer">
      <font-awesome-icon :icon="['fas', item.icon]" class="fa-lg" />
    </a>
  </div>
  <n-modal v-model:show="showModal" :block-scroll="false">
    <n-card
      style="max-width:95%; width: 800px"
      title="My Fav Product"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      dasdsa
    </n-card>
  </n-modal>
</template>
<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { NModal, NCard } from 'naive-ui'

export default {
  components: { NModal, NCard },
  setup() {
    const router = useRouter()
    const showModal = ref(false)
    return {
      router,
      showModal,
      clickBtn(e) {
        switch(e) {
          case 'heart':
            showModal.value = true
            break
          case 'arrow-up':
            window.scrollTo({
              top: document.querySelector('body'),
              behavior: 'smooth'
            })
            break
        }
      },
      list: [
        {
          icon: 'heart',
          class: 'text-second',
        },
        {
          icon: 'arrow-up',
          class: 'tw-mb-2'
        }
      ]
    }
  }
}
</script>