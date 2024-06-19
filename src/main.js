import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(Quasar)
app.use(pinia)
app.use(router)

app.mount('#app')
