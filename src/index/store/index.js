import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import Cookies from 'js-cookie';

export default createStore({
    state() {
        return {
            headerHeight: 80,
            footerHeight: 80,
            user: false,
        };
    },
    plugins: [
        createPersistedState({
            storage: {
                getItem: (key) => Cookies.get(key),
                setItem: (key, value) =>
                    Cookies.set(key, value, { expires: 3, secure: true }),
                removeItem: (key) => Cookies.remove(key),
            },
        }),
    ],
    mutations: {
        setHeaderHeight(state, payload) {
            state.headerHeight = payload;
        },
        setFooterHeight(state, payload) {
            state.footerHeight = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        },
    },
});
