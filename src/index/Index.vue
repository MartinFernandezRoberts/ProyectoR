<template>
    <Header />

    <main class="flex-1 flex flex-col justify-center text-gris">
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

body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

input:focus {
    outline: none !important;
}
</style>
