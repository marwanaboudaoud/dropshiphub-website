import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/scss/tailwind.scss';
import '@/assets/libs/@iconscout/unicons/css/line.css';
import '@/assets/libs/@mdi/font/css/materialdesignicons.min.css';
import  '@/assets/libs/animate.css/animate.min.css';
import VueDatePicker from '@vuepic/vue-datepicker';
import VueSmoothScroll from 'vue3-smooth-scroll'
import '@vuepic/vue-datepicker/dist/main.css';
import router from './router' 
import { i18n } from './plugins/i18n'

const app = createApp(App)
app.config.globalProperties.$t = i18n.t
app.config.globalProperties.$i18n = i18n

app.use(i18n) 
app.use(VueDatePicker)
app.use(VueSmoothScroll)
app.use(router)
app.mount('#app')

