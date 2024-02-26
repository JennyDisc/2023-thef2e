import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import './assets/all.scss';

// 引入Bootstrap的JavaScript
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const app = createApp(App)

// 建立 Pinia 實例
const pinia = createPinia();

// 使用 createApp 方法而創立的 app 實例
app.use(pinia);

app.use(router)


app.mount('#app')
