<template>
    <div class="container mx-auto pb-10 space-y-4">
        <button
            class="
                w-full
                border border-pink-600
                rounded
                px-5
                hover:bg-pink-600 hover:shadow
                text-pink-600
                hover:text-white
                text-xl
                uppercase
                font-bold
            "
            v-if="!nuevo"
            @click="nuevo = true"
        >
            Nueva Casa
        </button>

        <CasaForm
            v-else
            :guardando="guardando"
            @close="nuevo = false"
            @guardar="crearCasa"
        />

        <CasaList :casas="casas" @cargarCasas="cargarCasas" />
    </div>
</template>

<script>
import CasaService from './CasaService';
import CasaForm from './CasaForm.vue';
import CasaList from './CasaList.vue';

export default {
    name: 'CasaMain',
    components: {
        CasaForm,
        CasaList,
    },
    data() {
        return {
            casas: [],
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
        async cargarCasas() {
            try {
                const desordenado = await CasaService.index();
                this.casas = desordenado.sort(this.compararFecha);
            } catch (err) {
                this.error = err.message;
            }
        },
        async crearCasa(data) {
            this.guardando = true;
            await CasaService.create(data);
            this.guardando = false;
            this.nuevo = false;
            this.cargarCasas();
        },
    },
    created() {
        this.cargarCasas();
    },
};
</script>
