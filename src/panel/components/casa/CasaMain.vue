<template>
    <div class="container mx-auto space-y-4">
        <button
            class="w-full border border-pink-600 rounded px-5 hover:bg-pink-600 hover:shadow text-pink-600 hover:text-white text-xl uppercase font-bold"
            v-if="!nuevo"
            @click="nuevo = true"
        >
            Nueva Casa
        </button>

        <CasaForm
            v-else
            :guardando="guardando"
            @close="nuevo = false"
            @guardar="createCasa"
        />

        <CasaList :casa="casa" @cargarCasa="loadCasa" />
    </div>
</template>

<script>
import CasaService from '../../CasaService';
import CasaForm from './CasaForm';
import CasaList from './CasaList';

export default {
    name: 'CasaMain',
    components: {
        CasaForm,
        CasaList,
    },
    data() {
        return {
            casa: [],
            nuevo: false,
            guardando: false,
        };
    },
    methods: {
        compararFecha(a, b) {
            if (a.fechaCasa > b.fechaCasa) {
                return -1;
            } else if (b.fechaCasa > a.fechaCasa) {
                return 1;
            } else {
                return 0;
            }
        },
        async loadCasa() {
            try {
                const desordenado = await CasaService.index();
                this.casa = desordenado.sort(this.compararFecha);
            } catch (err) {
                this.error = err.message;
            }
        },
        async createCasa(data) {
            this.guardando = true;
            await CasaService.create(data);
            this.guardando = false;
            this.nuevo = false;
            this.loadCasa();
        },
    },
    created() {
        this.loadCasa();
    },
};
</script>
