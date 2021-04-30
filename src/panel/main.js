import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Panel from './Panel.vue'
import CasaMain from './components/casa/CasaMain'

import '../assets/styles/index.css'

const routes = [
    { path: '/panel/casa', component: CasaMain },
];

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
});

createApp(Panel)
    .use(router)
    .mount('#panel');