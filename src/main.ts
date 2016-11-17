import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import {createI18n} from 'vue-i18n'
import App from './App.vue'
import Home from './views/Home.vue'
import Playground from './views/Playground.vue'
import enUS from './locales/en-US.json'
import zhCN from './locales/zh-CN.json'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/playground',
            component: Playground
        }
    ]
})

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