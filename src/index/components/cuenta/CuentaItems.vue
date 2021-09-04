<template>
    <section class="pt-12 px-6 2xl:px-24 flex flex-col">
        <div class="mb-6 2xl:mb-7 flex justify-center items-center">
            <h2 class="text-2xl 2xl:text-3xl font-bold">Mis items</h2>
        </div>

        <Cargando v-show="cargando" class="absolute inset-0 z-10" />

        <div
            :class="[
                'grid gap-4 auto-rows-max grid-cols-1 lg:grid-cols-2 xl:grid-cols-3',
                { 'opacity-20 filter blur-sm': cargando },
            ]"
        >
            <MiniItem
                v-for="item in items"
                :key="item._id"
                :item="{ ...item, ...parche }"
                @editar="editarItem(item.estado, item._id)"
            />
        </div>
    </section>
</template>

<script>
import { mapMutations } from 'vuex';

import MiniItem from './MiniItem.vue';
import Cargando from '../Cargando.vue';
import axios from 'axios';

export default {
    name: 'CuentaItems',
    components: {
        MiniItem,
        Cargando,
    },
    data() {
        return {
            items: [],
            parche: {
                numerosComprados: '132',
                valoracion: '3.5',
                fechaSorteo: new Date('2021-10-30T18:00:00-0400'),
                precioBoleto: 5000,
            },
            cargando: true,
        };
    },
    mounted() {
        axios
            .get(this.urlDev('api/items/userItems'))
            .then((res) => {
                this.items = res.data;
                this.cargando = false;
            })
            .catch((err) => console.error(err));
    },
    methods: {
        ...mapMutations(['setEditItem']),
        urlDev(path) {
            return 'http://localhost:3000/' + path;
        },
        editarItem(estado, id) {
            if (estado === 'borrador') {
                this.setEditItem(id);
                window.location.href = '/crear';
            }
        },
    },
};
</script>
