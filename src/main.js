import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router';
import piniaPersist from 'pinia-plugin-persist'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App);

const pinia = createPinia()
pinia.use(piniaPersist)

app.use(vuetify);
app.use(pinia)
app.use(router)

app.mount('#app')
