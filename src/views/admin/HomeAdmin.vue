<template>
  <div class="tw-h-screen tw-relative">
    <n-layout position="absolute">
      <n-layout-header class="tw-flex tw-items-center tw-justify-between tw-px-6 tw-h-16" bordered>
        <router-link to="/"><img src="@/assets/logo.svg" alt="Meow Forest" height="28"></router-link>
        <n-menu mode="horizontal" :options="menuOptions" style="--n-font-size:16px" />
      </n-layout-header>
      <n-layout has-sider position="absolute" style="top: 64px;">
        <n-layout content-style="padding: 24px;" class="bg-primary bg-paw">
          <div v-if="route.path==='/admin/'||route.path==='/admin'" class="tips shadow tw-relative tw-max-w-full tw-w-60 tw-ml-auto tw-bg-white tw-rounded-xl tw-text-center tw-p-2">
            Please Click Menu !
          </div>
          <RouterView/>
        </n-layout>
      </n-layout>
    </n-layout>
  </div>
</template>
<script>
import { NLayout, NLayoutHeader, NMenu } from 'naive-ui'
import { defineComponent, inject, h, onMounted } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router';

export default defineComponent({
  components: { NLayout, NLayoutHeader, NMenu },
  setup() {
    const axios = inject('axios')
    const route = useRoute()
    const router = useRouter()
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)meowforestToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
    axios.defaults.headers.common['Authorization'] = token
    const check = async () => {
      const api = `${import.meta.env.VITE_API}api/user/check`
      await axios.post(api).then((res) => {
        console.log(res)
        if (!res.data.success) {
          window.$notification.warning({
            content: 'Plz Login!',
            duration: 2000,
          })
          router.push('/login')
        }
      }).catch((err) => {
        console.log(err)
      })
    }
    const logout = async ()=> {
      const api = `${import.meta.env.VITE_API}logout`
      await axios.post(api).then((res) => {
        if(res.data.success){
          window.$notification.success({
            content: 'Logout Success!',
            duration: 2000,
          })
          router.push('/login')
          }
      })
    }
    onMounted(() => {
      check()
    })
    const menuOptions = [
      {
        label: () =>
          h (RouterLink, 
            { to: '/admin/products' },
            { default: () => 'Products list' }
          ),
        key: "product",
      },
      {
        label: () =>
          h (RouterLink, 
            { to: '/admin/orders' },
            { default: () => 'Orders' }
          ),
        key: "order",
      },
      {
        label: () =>
          h (RouterLink, 
            { to: '/admin/coupons' },
            { default: () => 'Coupons' }
          ),
        key: "coupon",
      },
      {
        label: () =>
          h ('a', 
            { onclick: logout },
            { default: () => 'Logout' }
          ),
        key: "logout",
      }
    ]
    return { route, menuOptions }
  }
})
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