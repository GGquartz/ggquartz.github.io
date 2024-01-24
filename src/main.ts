import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'

import './assets/variables.scss'
import './assets/main.scss'
import './assets/header.scss'
import './assets/footer.scss'
import './assets/fonts.scss'

createApp(App).use(router).mount('#app')
