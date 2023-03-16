<template>
  <div class="tw-h-screen tw-relative">
    <NLayout position="absolute">
      <NLayoutHeader class="tw-flex tw-items-center tw-justify-between tw-px-6 tw-h-16" bordered>
        <router-link to="/"><img src="@/assets/logo.svg" alt="Meow Forest" height="28"></router-link>
        <NMenu mode="horizontal" :options="menuOptions" style="--n-font-size:16px" />
      </NLayoutHeader>
      <NLayout has-sider position="absolute" style="top: 64px;">
        <NLayout content-style="padding: 24px;" class="tw-bg-primary bg-paw">
          <div v-if="route.path==='/admin/'||route.path==='/admin'" class="tips tw-shadow-main tw-relative tw-max-w-full tw-w-60 tw-ml-auto tw-bg-white tw-rounded-xl tw-text-center tw-p-2">
            Please Click Menu !
          </div>
          <RouterView/>
        </NLayout>
      </NLayout>
    </NLayout>
  </div>
</template>
<script>
import { NLayout, NLayoutHeader, NMenu } from 'naive-ui'
import { h, onBeforeMount } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import api from '@/utils/api.js'

export default {
  components: { NLayout, NLayoutHeader, NMenu },
  setup () {
    const route = useRoute()
    const router = useRouter()
    const check = async () => {
      try {
        const res = await api.check()
        if (!res.data.success) {
          window.$notification.warning({
            content: 'Plz Login!',
            duration: 2000
          })
          router.push('/login')
        }
      } catch (err) {
        window.$message.error(err)
      }
    }
    const logout = async () => {
      try {
        const res = await api.logout()
        if (res.data.success) {
          window.$notification.success({
            content: 'Logout Success!',
            duration: 2000
          })
          router.push('/login')
        }
      } catch (err) {
        window.$message.error(err)
      }
    }
    onBeforeMount(() => {
      check()
    })
    const menuOptions = [
      {
        label: () =>
          h(RouterLink,
            { to: '/admin/products' },
            { default: () => 'Products list' }
          ),
        key: 'product'
      },
      {
        label: () =>
          h(RouterLink,
            { to: '/admin/orders' },
            { default: () => 'Orders' }
          ),
        key: 'order'
      },
      {
        label: () =>
          h(RouterLink,
            { to: '/admin/coupons' },
            { default: () => 'Coupons' }
          ),
        key: 'coupon'
      },
      {
        label: () =>
          h('a',
            { onclick: logout },
            { default: () => 'Logout' }
          ),
        key: 'logout'
      }
    ]
    return { route, menuOptions }
  }
}
</script>

<style lang="scss" scoped>
.tips::before{
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  left: 36%;
  top: -23px;
  border: 12px solid transparent;
  border-bottom-color: #fff;
}
:deep(.n-data-table-wrapper), :deep(.n-pagination-item) {
  background-color: #fff !important;
}
</style>
