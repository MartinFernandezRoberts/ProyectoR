import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Panel from './Panel.vue';
import CasaMain from './components/casa/CasaMain';
import ImgDrop from './components/ImgDrop';

import '../assets/styles/index.css';

const routes = [
    { path: '/panel/casa', component: CasaMain },
    { path: '/panel/imagenes', component: ImgDrop },
];

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
});

createApp(Panel)
    .use(router)
    .mount('#panel');
