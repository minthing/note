import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app') //index id="app"인 곳에 연결시켜라
