import { createApp } from 'vue'
import App from './App.vue'
// import Global from './components/global.vue'
import { createPinia } from 'pinia'
import router from './router'
const app = createApp(App)
app.use(createPinia())
app.use(router)
// app.component('globalComponents', Global)
app.mount('#app')
