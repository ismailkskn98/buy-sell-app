import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/router.js'
import './assets/css/main.scss'

const app = createApp(App)
app.use(createPinia());
app.use(router);
app.mount('#app')
