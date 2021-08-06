import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import '../index.css';

import Index from './Index.vue';
import Landing from './components/landing/Landing.vue';
import BuscadorMain from './components/buscador/BuscadorMain.vue';

const routes = [
    { path: '/', component: Landing },
    { path: '/buscador', component: BuscadorMain },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(Index).use(router).mount('#index');
