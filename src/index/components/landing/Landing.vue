<template>
    <Inicio :style="{ minHeight: inicioHeight + 'px' }" />
    <ItemsDestacados class="min-h-screen" />
    <ComoParticipar class="min-h-screen" />
    <Contacto :style="{ minHeight: contactoHeight + 'px' }" />
</template>

<script>
import { mapState } from 'vuex';

import Contacto from './contacto/Contacto.vue';
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
            posicion: window.scrollY,
            desplazando: false,
            scrolling: false,
            clicking: false,
        };
    },
    computed: mapState(['headerHeight', 'footerHeight']),
    created() {
        this.adjustHeight();

        window.addEventListener('resize', this.adjustHeight);
        // window.addEventListener('scroll', this.scrollear);
        // window.addEventListener('mousedown', this.mouseDown);
        // window.addEventListener('mouseup', this.mouseUp);

        //     setInterval(() => {
        //         if (this.scrolling && !this.desplazando && !this.clicking) {
        //             this.desplazando = true;

        //             const seccionBase = Math.round(
        //                 this.posicion / window.innerHeight
        //             );
        //             const seccionTransito = Math.round(
        //                 window.scrollY / window.innerHeight
        //             );
        //             let destino = window.innerHeight * seccionTransito;

        //             if (seccionTransito !== seccionBase) {
        //                 window.scrollTo(0, destino);
        //             } else if (window.scrollY > this.posicion) {
        //                 destino = window.innerHeight * (seccionBase + 1);
        //                 window.scrollTo(0, destino);
        //             } else if (window.scrollY < this.posicion) {
        //                 destino = window.innerHeight * (seccionBase - 1);
        //                 window.scrollTo(0, destino);
        //             }

        //             setTimeout(() => {
        //                 this.posicion = destino;
        //                 this.desplazando = false;
        //             }, 1000);
        //             this.scrolling = false;
        //         }
        //     }, 300);
    },
    unmounted() {
        window.removeEventListener('resize', this.adjustHeight);
        // window.removeEventListener('scroll', this.scrollear);
        // window.removeEventListener('mousedown', this.mouseDown);
        // window.removeEventListener('mouseup', this.mouseUp);
    },
    methods: {
        adjustHeight() {
            this.inicioHeight = window.innerHeight - this.headerHeight;
            this.contactoHeight = window.innerHeight - this.footerHeight;
        },
        // scrollear() {
        //     this.scrolling = true;
        // },
        // mouseDown() {
        //     this.clicking = true;
        // },
        // mouseUp() {
        //     this.clicking = false;
        // },
    },
};
</script>
