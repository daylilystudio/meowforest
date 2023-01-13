<template>
  <n-space justify="center" align="center" class="bg tw-h-screen">
    <n-spin :show="loading" class="tw-bg-white tw-rounded-2xl tw-shadow-xl tw-px-10 tw-py-6">
      <n-form ref="formRef" :model="model">
        <n-form-item path="username" label="Account">
          <n-input type="email" v-model:value="model.username" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="password" label="Password">
          <n-input type="password" v-model:value="model.password" @keydown.enter.prevent/>
        </n-form-item>
        <n-row :gutter="[0, 24]">
          <n-col :span="24">
            <div class="tw-flex tw-justify-end">
              <n-button
                :disabled="model.username === ''||model.password === ''"
                round
                type="primary"
                @click="login"
              >
                Submit
              </n-button>
            </div>
          </n-col>
        </n-row>
      </n-form>
    </n-spin>
  </n-space>
</template>

<script>
import { defineComponent, ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import { NSpace, NForm, NFormItem, NInput, NRow, NCol, NButton, NSpin } from 'naive-ui'

export default defineComponent({
  components: {
    NSpace, NForm, NFormItem, NInput, NRow, NCol, NButton, NSpin
  },
  setup () {
    const axios = inject('axios')
    let loading = ref(false)
    const router = useRouter()
    const modelRef = ref({
      username: '',
      password: ''
    });
    return {
      loading,
      model: modelRef,
      login() {
        loading.value = true
        const api = `${import.meta.env.VITE_API}admin/signin`
        axios.post(api,modelRef.value).then((res) => {
          loading.value = false
          //toast alert
          if(!res.data.success){
            window.$notification.error({
              content: res.data.message,
              meta: res.data.error.message,
              duration: 2500,
              keepAliveOnHover: true
            })
          } else {
            window.$notification.success({
              content: res.data.message,
              duration: 2000,
            })
            const { token, expired } = res.data
            document.cookie = `meowforestToken=${token}; expires=${new Date(expired)}`
            router.push('/admin')
          }
        }).catch((err) => {
          loading.value = false
          console.log(err)
        })
      }
    }
  }
})
</script>

<style>
.bg {
  background-color: #fff;
}
</style>