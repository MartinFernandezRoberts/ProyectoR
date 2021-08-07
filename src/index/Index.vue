<template>
    <Header />

    <main class="text-gris">
        <router-view></router-view>
    </main>

    <Footer />
</template>

<script>
import Footer from './components/landing/Footer.vue';
import Header from './components/Header.vue';

export default {
    name: 'Index',
    components: {
        Header,
        Footer,
    },
};
</script>

<style>
html {
    scroll-behavior: smooth;
}
</style>
