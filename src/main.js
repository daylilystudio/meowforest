import { createApp } from 'vue'
import router from './router'

// index
import App from './App.vue'
// style
import './assets/scss/main.scss'

// filter
import filter from './utils/filter'
// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
// pinia
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(router)
app.config.globalProperties.$filter = filter
app.provide('$filter', filter)
library.add(fas, far, fab)
app.component('FontAwesomeIcon', FontAwesomeIcon)
const pinia = createPinia()
app.use(pinia)

app.mount('#app')
