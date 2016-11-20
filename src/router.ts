import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home.vue";
import Playground from "@/views/Playground.vue";

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
        }
    ]
})