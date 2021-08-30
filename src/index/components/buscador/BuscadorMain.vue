<template>
    <div class="flex-1 flex">
        <div id="sidebar" class="w-1/4 py-12 px-6">
            <div class="mb-6 2xl:mb-7 flex justify-center items-center">
                <h1 class="mr-10 text-lg 2xl:text-xl font-bold text-center">
                    Buscador
                </h1>
            </div>

            <form class="flex flex-col space-y-3">
                <div class="flex flex-col space-y-1.5">
                    <label class="text-sm font-bold" for="tipo"
                        >Categoría</label
                    >

                    <select
                        :class="[
                            'px-4 2xl:px-6 py-1.5 2xl:py-2 border rounded border-amarillo text-sm font-light leading-tight',
                            { 'text-gray-400': !filtros.tipo },
                        ]"
                        id="tipo"
                        v-model="filtros.tipo"
                        @change="filtrar"
                    >
                        <option value="" disabled selected hidden>
                            Selecciona una categoría
                        </option>

                        <option
                            v-for="(texto, tipo) in selects.tipos"
                            :key="tipo"
                            class="text-gris"
                            :value="tipo"
                        >
                            {{ texto }}
                        </option>
                    </select>
                </div>
            </form>
        </div>

        <div id="contenido" class="py-12 px-6 2xl:px-24 w-3/4 relative">
            <Cargando v-show="cargando" class="absolute inset-0 z-10" />

            <div
                :class="[
                    'grid grid-cols-3 gap-4 auto-rows-max',
                    { 'opacity-20 filter blur-sm': cargando },
                ]"
            >
                <MiniItem v-for="(item, i) in filtrado" :key="i" :item="item" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

import Cargando from '../Cargando.vue';
import MiniItem from './MiniItem.vue';

export default {
    name: 'BuscadorMain',
    components: { MiniItem, Cargando },
    data() {
        return {
            items: [],
            filtrado: [],
            filtros: {
                tipo: '',
            },
            selects: {
                tipos: {
                    Casa: 'Casa',
                    Wheels: 'Vehículo',
                },
            },
            cargando: true,
        };
    },
    created() {
        axios('http://localhost:3000/api/items/todo')
            .then((res) => {
                this.filtrado = this.items = res.data;
                this.cargando = false;
            })
            .catch((err) => console.error(err));
    },
    methods: {
        filtrar() {
            this.cargando = true;

            let items = this.items;

            for (const [campo, valor] of Object.entries(this.filtros)) {
                if (valor) {
                    items = items.filter((item) => item[campo] == valor);
                }
            }

            this.filtrado = items;
            this.cargando = false;
        },
    },
};
</script>
