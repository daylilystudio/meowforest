<template>
  <NConfigProvider>
    <NLoadingBarProvider>
      <NDialogProvider>
        <NNotificationProvider placement="bottom-left">
          <NMessageProvider placement="bottom-left">
            <slot></slot>
            <NaiveProviderContent />
          </NMessageProvider>
        </NNotificationProvider>
      </NDialogProvider>
    </NLoadingBarProvider>
  </NConfigProvider>
</template>

<script setup>
import { h } from 'vue'
import { useLoadingBar, useDialog, useMessage, useNotification, NConfigProvider, NLoadingBarProvider, NDialogProvider, NNotificationProvider, NMessageProvider } from 'naive-ui'

// globle naive tool
function setupNaiveTools () {
  window.$loadingBar = useLoadingBar()
  window.$dialog = useDialog()
  window.$message = useMessage()
  window.$notification = useNotification()
}

const NaiveProviderContent = {
  setup () {
    setupNaiveTools()
  },
  render () {
    return h('div')
  }
}
</script>
