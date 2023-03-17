import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { plugin } from '@formkit/vue';
import { config } from './../formkit.config';
import App from './App.vue';
import './assets/main.css';

const app = createApp(App)

app.use(createPinia())
app.use(plugin, config)
app.mount('#app') 
