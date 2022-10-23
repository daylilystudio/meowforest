import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

// index
import App from './App.vue'
// style
import './assets/main.scss'

const app = createApp(App)
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios) 
app.use(createPinia())
app.use(router)
// filter
import filter from './utils/filter'
app.config.globalProperties.$filter = filter
app.provide('$filter', filter)
// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
