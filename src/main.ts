import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { plugin, defaultConfig } from '@formkit/vue';
import App from './App.vue';
import { createInput } from '@formkit/vue';
import ComponentWrapper from './components/ComponentWrapper.vue';

import './assets/main.css';

const app = createApp(App)

const config = defaultConfig({
  inputs: {
    inputText: createInput(ComponentWrapper),
    inputSelect: createInput(ComponentWrapper),
    inputRadio: createInput(ComponentWrapper),
    inputCheckBox: createInput(ComponentWrapper)
  }
})

app.use(createPinia())

app.use(plugin, config)

app.mount('#app')
