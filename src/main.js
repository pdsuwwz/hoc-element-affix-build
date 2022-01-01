import { createApp } from 'vue'

import router from '@/router'
import '@/router/permission'

import App from './App.vue'

import HocElementAffix from '@hoc-element/affix'

import '@/styles/variables.scss'
const app = createApp(App)

app
  .use(router)

app
  .use(HocElementAffix)
  .mount('#app')

export default app
