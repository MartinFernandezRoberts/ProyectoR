import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Panel from './Panel.vue';
import CasaMain from './components/casa/CasaMain.vue';
import BannerMain from './components/banners/BannerMain.vue';

import '../index.css';

const routes = [
    { path: '/panel/casa', component: CasaMain },
    { path: '/panel/banners', component: BannerMain },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(Panel).use(router).mount('#panel');
