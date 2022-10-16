<template>
  <div class="tw-h-screen tw-relative">
    <n-layout position="absolute">
      <n-layout-header class="tw-flex tw-items-center tw-justify-between tw-px-6 tw-h-16" bordered>
        <span>Meow Forest</span>
        <n-menu mode="horizontal" :options="menuOptions" />
      </n-layout-header>
      <n-layout has-sider position="absolute" style="top: 64px;">
        <n-layout content-style="padding: 24px;" class="tw-bg-teal-50">
          <RouterView/>
        </n-layout>
      </n-layout>
    </n-layout>
  </div>
</template>
<script>
import { NLayout, NLayoutHeader, NMenu } from 'naive-ui'
import { defineComponent, inject, h } from 'vue'
import { useRouter, RouterLink } from 'vue-router';
export default defineComponent({
  components: { NLayout, NLayoutHeader, NMenu },
  setup() {
    const axios = inject('axios')
    const router = useRouter()
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)meowforestToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
    const api = `${import.meta.env.VITE_API}api/user/check`
    axios.defaults.headers.common['Authorization'] = token
    axios.post(api).then((res) => {
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
    return { menuOptions }
  }
})
</script>