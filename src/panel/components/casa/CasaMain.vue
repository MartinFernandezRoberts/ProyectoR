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
        async cargarCasas() {
            this.casas = await CasaService.index();
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
