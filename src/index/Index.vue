<template>
    <Header @measured="setContentHeight" />

    <main class="text-gris">
        <Inicio :style="{ height: contentHeight + 'px' }" />

        <CasasDestacadas class="h-screen" />
        <ComoParticipar class="h-screen" />
        <Contacto class="h-screen" />
    </main>
</template>

<script>
import Header from './components/Header.vue';
import Inicio from './components/inicio/Inicio.vue';
import CasasDestacadas from './components/casasDestacadas/CasasDestacadas.vue';
import ComoParticipar from './components/ComoParticipar.vue';
import Contacto from './components/Contacto.vue';

export default {
    name: 'Index',
    components: {
        Header,
        Inicio,
        CasasDestacadas,
        ComoParticipar,
        Contacto,
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
