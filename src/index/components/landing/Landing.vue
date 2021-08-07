<template>
    <Inicio :style="{ height: inicioHeight + 'px' }" />
    <ItemsDestacados class="h-screen" />
    <ComoParticipar class="h-screen" />
    <Contacto :style="{ height: contactoHeight + 'px' }" />
</template>

<script>
import { mapState } from 'vuex';

import Contacto from './Contacto.vue';
import ComoParticipar from './ComoParticipar.vue';
import ItemsDestacados from './destacados/ItemsDestacados.vue';
import Inicio from './inicio/Inicio.vue';

export default {
    components: { ComoParticipar, Contacto, ItemsDestacados, Inicio },
    name: 'Landing',
    data() {
        return {
            inicioHeight: 1000,
            contactoHeight: 1000,
        };
    },
    computed: mapState(['headerHeight', 'footerHeight']),
    created() {
        window.addEventListener('resize', this.adjustHeight);
    },
    unmounted() {
        window.removeEventListener('resize', this.adjustHeight);
    },
    methods: {
        adjustHeight() {
            console.log('ajustando altura...');
            this.inicioHeight = window.innerHeight - this.headerHeight;
            this.contactoHeight = window.innerHeight - this.footerHeight;
        },
    },
};
</script>
