import { createApp } from 'vue'
import App from './App.vue'
import Global from './components/global.vue'

const app = createApp(App)
app.component('globalComponents', Global)
app.mount('#app')
