<template>
  <div class="tw-relative tw-h-screen tw-overflow-hidden tw-flex tw-justify-center tw-items-center">
    <div class="bg bg-paw"></div>
    <NSpin :show="loading" class="tw-bg-white tw-rounded-2xl tw-shadow-xl tw-px-10 tw-py-6">
      <NForm ref="formRef" :model="model">
        <NFormItem path="username" label="Account">
          <NInput type="email" v-model:value="model.username" @keydown.enter.prevent />
        </NFormItem>
        <NFormItem path="password" label="Password">
          <NInput type="password" v-model:value="model.password" @keydown.enter.prevent="login"/>
        </NFormItem>
        <NRow :gutter="[0, 24]">
          <NCol :span="24">
            <div class="tw-flex tw-justify-end">
              <NButton
                :disabled="model.username === ''||model.password === ''"
                round
                type="primary"
                @click="login"
              >
                Submit
              </NButton>
            </div>
          </NCol>
        </NRow>
      </NForm>
    </NSpin>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { NForm, NFormItem, NInput, NRow, NCol, NButton, NSpin } from 'naive-ui'
import api from '@/utils/api.js'

const loading = ref(false)
const router = useRouter()
const model = ref({
  username: '',
  password: ''
})
const login = async () => {
  try {
    loading.value = true
    const res = await api.login(model.value)
    loading.value = false
    if (!res.data.success) {
      window.$notification.error({
        content: res.data.message,
        meta: res.data.error.message,
        duration: 2500,
        keepAliveOnHover: true
      })
    } else {
      await window.$notification.success({
        content: res.data.message,
        duration: 2000
      })
      const { token, expired } = res.data
      document.cookie = `meowForestToken=${token}; expires=${new Date(expired)}`
      await router.push('/admin')
    }
  } catch (err) {
    loading.value = false
    window.$message.error(err)
  }
}
</script>

<style>
.bg {
  background-position: 50%;
  height: 200%;
  width: 200%;
  position: absolute;
  top: -50%;
  left: -50%;
  z-index: -1;
  animation: moveBg 10s linear infinite;
}
@keyframes moveBg {
  to {
    transform:translateX(-100px) translateY(-100px) scale(1)
  }
}
</style>
