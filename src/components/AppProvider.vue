<template>
    <n-config-provider>
      <n-loading-bar-provider>
        <n-dialog-provider>
          <n-notification-provider>
            <n-message-provider>
              <slot></slot>
              <NaiveProviderContent />
            </n-message-provider>
          </n-notification-provider>
        </n-dialog-provider>
      </n-loading-bar-provider>
    </n-config-provider>
  </template>
    
  <script setup>
  import { defineComponent, h } from 'vue'
  import { useLoadingBar, useDialog, useMessage, useNotification, NConfigProvider, NLoadingBarProvider, NDialogProvider, NNotificationProvider, NMessageProvider } from 'naive-ui'
  
  // globle naive tool
  function setupNaiveTools() {
    window.$loadingBar = useLoadingBar()
    window.$dialog = useDialog()
    window.$message = useMessage()
    window.$notification = useNotification()
  }
  
  const NaiveProviderContent = defineComponent({
    setup() {
      setupNaiveTools()
    },
    render() {
      return h('div')
    },
  })
  </script>