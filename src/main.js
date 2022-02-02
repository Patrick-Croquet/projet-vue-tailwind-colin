import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './dest/main.css'
import microModal from 'micromodal'

createApp(App).use(store).use(router).use(microModal).mount('#app')