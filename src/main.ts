import { createApp } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './apollo'

import router from './router'
import store from './store'
import { storeKey } from './store'
import App from './App.vue'


import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import './assets/main.css'

const app = createApp(App)
app.provide(DefaultApolloClient, apolloClient)

app.use(router)
app.use(store, storeKey)

app.mount('#app')

app.config.globalProperties.$filters = {
  currencyUSD(value) {
    return '$' + value
  }
}