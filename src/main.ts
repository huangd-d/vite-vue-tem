import { createApp } from 'vue'
import { ElButton, ElSelect } from 'element-plus'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

const app = createApp(App)
app.component(ElButton.name, ElButton)
app.component(ElSelect.name, ElSelect)
app.use(router).use(store)

app.mount('#app')
