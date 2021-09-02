<template>
    <h2>Mis publicaciones</h2>

    <Cargando v-show="cargando" class="absolute inset-0 z-10" />

    <div
        :class="[
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max',
            { 'opacity-20 filter blur-sm': cargando },
        ]"
    >
        <MiniItem
            v-for="item in items"
            :key="item._id"
            :item="{ ...item, ...parche }"
        />
    </div>
</template>

<script>
import MiniItem from '../buscador/MiniItem.vue';
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
    methods: {
        urlDev(path) {
            return 'http://localhost:3000/' + path;
        },
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
};
</script>
