<template>
    <Cargando v-if="cargando" />

    <div v-else class="container mx-auto lg:px-8">
        <div class="lg:flex justify-between">
            <div
                class="
                    px-4
                    py-2
                    flex
                    justify-between
                    items-center
                    border-b border-gray-300
                    lg:border-none
                "
            >
                <a href="/buscador" class="lg:pl-2">
                    <FlechaCirculoIcon
                        class="
                            w-6
                            text-gray-300
                            hover:text-gris
                            transition-colors
                            duration-200
                            ease-out
                        "
                        transform="scale(-1,1)"
                    />
                </a>

                <span class="text-sm font-thin lg:order-first">{{
                    tipos[item.tipo]
                }}</span>
            </div>

            <h1 class="p-4 font-bold text-center text-2xl lg:order-first">
                {{ item.titulo }}
            </h1>
        </div>

        <ItemImagenes :imagenes="item.imagenes" />

        <div
            class="
                px-8
                py-1
                flex
                justify-center
                items-center
                font-bold
                bg-gris
                text-white
                space-x-1
                lg:rounded-lg
            "
        >
            <RelojArenaIcon class="h-8" />

            <TiempoRestante class="flex-1" :tiempoRestante="tiempoRestante" />
        </div>

        <div class="p-4">
            <SeccionItem
                seccion="Descripción"
                :seccionActual="seccionActual"
                @toggle="toggle"
            >
                {{ item.descripcion }}
            </SeccionItem>

            <SeccionItem
                v-if="item.tipo"
                seccion="Detalles"
                :seccionActual="seccionActual"
                @toggle="toggle"
            >
                <DetalleCasa v-if="item.tipo === 'Casa'" :item="item.item" />

                <DetalleWheels
                    v-else-if="item.tipo === 'Wheels'"
                    :item="item.item"
                />
            </SeccionItem>

            <SeccionItem
                seccion="Sorteo"
                :seccionActual="seccionActual"
                @toggle="toggle"
            >
                Detalles del sorteo
            </SeccionItem>
        </div>

        <div class="p-4 sticky bottom-0 bg-white">
            <button
                class="
                    py-2
                    w-full
                    rounded-lg
                    bg-rojo
                    text-center text-white
                    font-thin
                    lg:hidden
                "
            >
                Participar
            </button>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import axios from 'axios';

import ItemImagenes from './ItemImagenes.vue';
import Cargando from '../Cargando.vue';
import SeccionItem from './SeccionItem.vue';
import TiempoRestante from '../buscador/TiempoRestante.vue';
import FlechaCirculoIcon from '@/assets/svg/FlechaCirculoIcon.vue';
import RelojArenaIcon from '@/assets/svg/RelojArenaIcon.vue';

export default {
    name: 'ItemMain',
    components: {
        RelojArenaIcon,
        TiempoRestante,
        Cargando,
        FlechaCirculoIcon,
        SeccionItem,
        DetalleCasa: defineAsyncComponent(() => import('./DetalleCasa.vue')),
        DetalleWheels: defineAsyncComponent(() =>
            import('./DetalleWheels.vue')
        ),
        ItemImagenes,
    },
    emits: ['cerrar'],
    data() {
        return {
            item: {},
            ahora: new Date().getTime(),
            cargando: true,
            tipos: {
                Casa: 'Casas',
                Wheels: 'Vehículos',
            },
            seccionActual: 'Descripción',
            secciones: ['Descripción', 'Detalles', 'Sorteo'],
        };
    },
    computed: {
        tiempoRestante() {
            const tiempo =
                new Date(
                    this.item.fechaSorteo || '2021-10-30T18:00:00-0400'
                ).getTime() - this.ahora;

            const dias = Math.floor(tiempo / (1000 * 60 * 60 * 24));
            const horas = Math.floor(
                (tiempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutos = Math.floor(
                (tiempo % (1000 * 60 * 60)) / (1000 * 60)
            );
            const segundos = Math.floor((tiempo % (1000 * 60)) / 1000);

            return {
                tiempo,
                dias,
                horas,
                minutos,
                segundos,
            };
        },
    },
    created() {
        axios(this.urlDev(`api/items/${this.$route.params.id}`))
            .then((res) => {
                this.item = res.data;
                this.cargando = false;
            })
            .catch((err) => console.error(err));

        setInterval(() => {
            this.ahora = new Date().getTime();
        }, 1000);
    },
    methods: {
        urlDev(path) {
            return 'http://localhost:3000/' + path;
        },
        formatPrecio(n) {
            let precio = String(n);
            let formateado = '';

            while (precio.length > 0) {
                formateado =
                    (precio.length > 3 ? '.' : '$') +
                    precio.slice(-3) +
                    formateado;
                precio = precio.slice(0, -3);
            }

            return formateado;
        },
        toggle(seccion) {
            this.seccionActual = seccion === this.seccionActual ? '' : seccion;
        },
    },
};
</script>
