import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import store, { type State } from './store'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
