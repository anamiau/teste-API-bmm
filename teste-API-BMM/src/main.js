import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vue-loading-overlay/dist/css/index.css'
import './assets/main.css'

import { createPinia } from 'pinia'

app.use(createPinia())
const app = createApp(App)
app.use(router)

app.mount('#app')



