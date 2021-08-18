import { createStore } from 'vuex';

export default createStore({
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
