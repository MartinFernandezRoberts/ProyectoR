import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';
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

const store = createStore({
    state() {
        return {
            headerHeight: 80,
            footerHeight: 80,
        };
    },
    mutations: {
        setHeaderHeight(state, payload) {
            state.headerHeight = payload;
        },
        setFooterHeight(state, payload) {
            state.footerHeight = payload;
        },
    },
});

createApp(Index).use(router).use(store).mount('#index');
