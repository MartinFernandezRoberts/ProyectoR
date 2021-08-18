import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import '../index.css';

import Panel from './Panel.vue';
import CasaMain from './components/casa/CasaMain.vue';
import BannerMain from './components/banners/BannerMain.vue';
import BannerTest from './components/banners/BannerTest.vue';
import NotFound from './components/NotFound.vue';

const routes = [
    { path: '/panel/casa', component: CasaMain },
    { path: '/panel/banners', component: BannerMain },
    { path: '/panel/banner_test', component: BannerTest },
    { path: '/panel/:pathMatch(.*)', component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(Panel).use(router).mount('body');
