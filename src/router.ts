import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home.vue";
import Playground from "@/views/Playground.vue";
import Document from "@/views/Document.vue";
import Download from "@/views/Download.vue";
import Community from "@/views/Community.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/playground',
            component: Playground
        },
        {
            path: '/document',
            component: Document
        },
        {
            path: '/download',
            component: Download
        },
        {
            path: '/community',
            component: Community
        }
    ]
})