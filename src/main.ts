import {createApp} from 'vue'
import {createI18n} from 'vue-i18n'
import App from './App.vue'
import enUS from './locales/en-US.json'
import zhCN from './locales/zh-Hans.json'
import {router} from "@/router";

const i18n = createI18n({
    legacy: false,
    locale: 'zh-CN',
    fallbackLocale: 'en-US',
    messages: {
        'en-US': enUS,
        'zh-CN': zhCN
    }
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')