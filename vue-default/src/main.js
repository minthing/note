import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // router 폴더를 가리킴 => 라우터 안의 index.js가 라우터에 자동으로 들어감

const app = createApp(App);
app.use(router);
app.mount('#app') //index id="app"인 곳에 연결시켜라
// use(router)