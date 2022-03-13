import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueSmoothScroll from 'vue3-smooth-scroll'

const app = createApp(App)
app.use(VueSmoothScroll)
app.mount('#app')
