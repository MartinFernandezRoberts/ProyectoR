<template>
    <div class="flex-1">
        <FlechaCirculoIcon
            :class="[
                'h-6 m-1 sticky top-0 z-10 hover:text-pink-600 cursor-pointer transition-colors duration-200 ease-out',
                menu ? 'text-white' : 'text-black',
            ]"
            :transform="menu ? 'scale(-1,1)' : ''"
            @click="menu = !menu"
        />

        <div
            id="menu"
            :class="[
                'h-full flex flex-col justify-center inset-0 bg-black text-center text-white',
                menu ? 'fixed' : 'hidden',
            ]"
            @click.self="menu = false"
        >
            <ul>
                <li
                    v-for="(seccion, i) in secciones"
                    :key="i"
                    :class="[
                        'cursor-pointer hover:text-pink-600 transition-colors duration-200 ease-out',
                        {
                            'font-bold text-pink-600':
                                seccionActual === seccion,
                        },
                    ]"
                    @click="setSeccion(seccion)"
                >
                    {{ capitalize(seccion) }}
                </li>
            </ul>
        </div>

        <h2 class="mb-4 text-xl text-center font-bold text-gray-700">
            {{ capitalize(seccionActual) }}
        </h2>

        <div
            :class="[
                'container 3xl:w-3/4 mx-auto px-4 grid gap-4 auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4',
                { 'opacity-20 filter blur-sm': cargando },
            ]"
        >
            <MiniItem
                v-for="(item, i) in filtrado"
                :key="i"
                class="cursor-pointer"
                :item="{ ...item, ...parche }"
                @click="
                    itemActual = item;
                    modal = true;
                "
            />
        </div>

        <DetalleItem
            v-if="modal"
            :item="itemActual"
            @cerrar="modal = false"
            @cargar="cargar"
        />
    </div>
</template>

<script>
import DetalleItem from './DetalleItem.vue';
import MiniItem from './MiniItem.vue';
import axios from 'axios';
import FlechaCirculoIcon from '../../../index/components/svg/FlechaCirculoIcon.vue';

export default {
    name: 'GestorItems',
    components: { FlechaCirculoIcon, MiniItem, DetalleItem },
    data() {
        return {
            menu: true,
            seccionActual: 'pendiente',
            secciones: [
                'pendiente',
                'publicado',
                'sorteado',
                'borrador',
                'bajado',
            ],
            items: [],
            filtrado: [],
            itemActual: {},
            modal: false,
            parche: {
                numerosComprados: '132',
                valoracion: '3.5',
                fechaSorteo: new Date('2021-10-30T18:00:00-0400'),
                precioBoleto: 5000,
            },
            cargando: true,
        };
    },
    created() {
        this.cargar();
    },
    methods: {
        cargar() {
            axios('http://localhost:3000/api/items/todo')
                .then((res) => {
                    this.items = res.data;
                    this.filtrar(this.seccionActual);
                    this.cargando = false;
                })
                .catch((err) => {
                    console.error(err);
                });
            this.modal = false;
        },
        filtrar(seccion) {
            this.filtrado = this.items.filter(
                (item) => item.estado === seccion
            );
        },
        setSeccion(seccion) {
            this.cargando = true;
            this.seccionActual = seccion;
            this.filtrar(seccion);
            this.cargando = false;
            this.menu = false;
        },
        capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
    },
};
</script>
