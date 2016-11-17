import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import {fileURLToPath, URL} from 'node:url'
import path from 'node:path'

export default defineConfig({
    plugins: [
        vue(),
        VueI18n({
            include: [path.resolve(__dirname, './src/locales/**')]
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        port: 3000,
        open: true
    }
})