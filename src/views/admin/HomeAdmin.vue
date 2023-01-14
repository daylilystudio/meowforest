<template>
  <div class="tw-h-screen tw-relative">
    <n-layout position="absolute">
      <n-layout-header class="tw-flex tw-items-center tw-justify-between tw-px-6 tw-h-16" bordered>
        <img :src="logo" alt="Meow Forest" height="28">
        <n-menu mode="horizontal" :options="menuOptions" style="--n-font-size:16px" />
      </n-layout-header>
      <n-layout has-sider position="absolute" style="top: 64px;">
        <n-layout content-style="padding: 24px;" class="bg-primary bg-paw">
          <div v-if="route.path==='/admin/'" class="tips shadow tw-relative tw-max-w-full tw-w-60 tw-ml-auto tw-bg-white tw-rounded-xl tw-text-center tw-p-2">
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
import { defineComponent, inject, h } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router';
// img
import logo from '@/assets/logo.svg'

export default defineComponent({
  components: { NLayout, NLayoutHeader, NMenu },
  setup() {
    const axios = inject('axios')
    const route = useRoute()
    const router = useRouter()
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)meowforestToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
    const api = `${import.meta.env.VITE_API}api/user/check`
    axios.defaults.headers.common['Authorization'] = token
    axios.post(api).then((res) => {
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
    const logout = ()=> {
      const api = `${import.meta.env.VITE_API}logout`
      axios.post(api).then((res) => {
        if(res.data.success){
          window.$notification.success({
            content: 'Logout Success!',
            duration: 2000,
          })
          router.push('/login')
          }
      })
    }
    const menuOptions = [
      {
        label: () =>
          h (RouterLink, 
            { to: '/admin/products' },
            { default: () => 'Products list' }
          ),
        key: "parent1",
      },
      {
        label: () =>
          h ('a', 
            { onclick: logout },
            { default: () => 'Logout' }
          ),
        key: "parent2",
      },
    ]
    return { route, menuOptions, logo }
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
  top: -20px;
  border: 10px solid transparent;
  border-bottom-color: #fff;
}
</style>