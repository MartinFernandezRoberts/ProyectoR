<template>
    <Header @measured="setContentHeight" />

    <main class="text-gris" :style="{ height: contentHeight + 'px' }">
        <router-view></router-view>
    </main>
</template>

<script>
import Header from './components/Header.vue';

export default {
    name: 'Index',
    components: {
        Header,
    },
    data() {
        return {
            contentHeight: 80,
        };
    },
    methods: {
        setContentHeight(headerHeight) {
            this.contentHeight = window.innerHeight - headerHeight;
        },
    },
};
</script>

<style>
html {
    scroll-behavior: smooth;
}
</style>
