import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router) // Router'ı projeye entegre ettik
app.mount('#app')