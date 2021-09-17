import { createRouter, createWebHistory } from 'vue-router';

import BuscadorMain from './components/buscador/BuscadorMain.vue';
import CrearItemMain from './components/crear/CrearItemMain.vue';
import CuentaMain from './components/cuenta/CuentaMain.vue';
import DetalleItem from './components/detalle/DetalleItem.vue';
import Landing from './components/landing/Landing.vue';
import Login from './components/login/Login.vue';
import Redirect from './components/login/Redirect.vue';
import Condiciones from './components/politics/Condiciones.vue';
import Privacidad from './components/politics/Privacidad.vue';

const routes = [
    { path: '/buscador', component: BuscadorMain },
    { path: '/crear', component: CrearItemMain },
    { path: '/cuenta', component: CuentaMain },
    { path: '/item/:id', component: DetalleItem },
    { path: '/login', component: Login },
    { path: '/redirect', component: Redirect },
    { path: '/condiciones', component: Condiciones },
    { path: '/privacidad', component: Privacidad },

    { path: '/', component: Landing },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
