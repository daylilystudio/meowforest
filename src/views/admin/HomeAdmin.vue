<template lang="">
  <div>
    12
  </div>
</template>
<script>
import {defineComponent, inject } from 'vue'
import { useRouter } from 'vue-router';
export default defineComponent({
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
    return {}
  }
})
</script>
<style lang="">
  
</style>