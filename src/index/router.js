import { createRouter, createWebHistory } from 'vue-router';

import BuscadorMain from './components/buscador/BuscadorMain.vue';
import CrearItemMain from './components/crear/CrearItemMain.vue';
import CuentaMain from './components/cuenta/CuentaMain.vue';
import Landing from './components/landing/Landing.vue';
import Login from './components/login/Login.vue';

const routes = [
    { path: '/buscador', component: BuscadorMain },
    { path: '/crear', component: CrearItemMain },
    { path: '/cuenta', component: CuentaMain },
    { path: '/login', component: Login },
    { path: '/', component: Landing },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
