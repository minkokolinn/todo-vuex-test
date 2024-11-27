import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

// Boostrap import
import 'bootstrap/dist/css/bootstrap.css'
// Bootstrap icons import
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)
app.use(store)
app.mount('#app')
