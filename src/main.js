import { createApp } from 'vue'
import App from './App.vue'
// import Global from './components/global.vue'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(createPinia())
// app.component('globalComponents', Global)
app.mount('#app')
