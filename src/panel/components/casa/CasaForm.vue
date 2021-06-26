<template>
    <form class="bg-white shadow rounded px-8 pt-6 pb-8 mb-4 flow-root">
        <div class="mb-4">
            <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="tituloCasa"
            >
                Título
            </label>
            <input
                class="
                    appearance-none
                    border
                    rounded
                    border-pink-200
                    w-full
                    py-1
                    px-2
                    text-gray-700
                    leading-tight
                    focus:outline-none
                    focus:shadow-outline
                    focus:ring-2
                    focus:ring-pink-200
                "
                id="tituloCasa"
                type="text"
                placeholder="Título"
                v-model="tituloCasa"
            />
        </div>

        <div class="mb-4">
            <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="descripcionCasa"
            >
                Descripción
            </label>
            <textarea
                class="
                    appearance-none
                    border
                    rounded
                    border-pink-200
                    w-full
                    py-2
                    px-3
                    text-gray-700
                    leading-tight
                    focus:outline-none
                    focus:shadow-outline
                    focus:ring-2
                    focus:ring-pink-200
                "
                id="descripcionCasa"
                type="text"
                placeholder="Descripción"
                v-model="descripcionCasa"
            />
        </div>

        <div class="mb-4">
            <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="ubicacionCasa"
            >
                Ubicación
            </label>
            <input
                class="
                    appearance-none
                    border
                    rounded
                    border-pink-200
                    w-full
                    py-2
                    px-3
                    text-gray-700
                    leading-tight
                    focus:outline-none
                    focus:shadow-outline
                    focus:ring-2
                    focus:ring-pink-200
                "
                id="ubicacionCasa"
                placeholder="Descripción"
                v-model="ubicacionCasa"
            />
        </div>

        <div class="mb-6">
            <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="fechaCasa"
            >
                Fecha
            </label>
            <input
                class="
                    appearance-none
                    border
                    rounded
                    border-pink-200
                    w-full
                    py-2
                    px-3
                    text-gray-700
                    leading-tight
                    focus:outline-none
                    focus:shadow-outline
                    focus:ring-2
                    focus:ring-pink-200
                "
                id="fechaCasa"
                type="date"
                v-model="fechaCasa"
            />
        </div>

        <ImgDropMulti
            class="mb-6"
            :images="imagenCasa"
            @update="(data) => (imagenCasa = data)"
        />

        <div class="float-right space-x-2">
            <button
                class="
                    bg-gray-400
                    hover:bg-gray-600
                    text-white
                    font-bold
                    py-2
                    px-4
                    rounded
                    focus:outline-none
                    focus:shadow-outline
                    focus:ring-2
                    focus:ring-pink-200
                "
                type="button"
                @click="$emit('close')"
            >
                Cerrar
            </button>
            <button
                :class="[
                    'bg-pink-400 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-pink-200',
                    { 'animate-pulse': guardando },
                ]"
                type="button"
                @click="handleSubmit"
            >
                Guardar
            </button>
        </div>
    </form>
</template>

<script>
import ImgDropMulti from '../ImgDropMulti.vue';

export default {
    name: 'CasaForm',
    components: {
        ImgDropMulti,
    },
    props: {
        casa: {
            type: Object,
            default: function () {
                return {
                    imagenCasa: [],
                    tituloCasa: '',
                    descripcionCasa: '',
                    ubicacionCasa: '',
                    fechaCasa: '',
                };
            },
        },
        guardando: Boolean,
    },
    emits: ['close', 'guardar'],
    data() {
        return {
            imagenCasa: this.casa.imagenCasa,
            tituloCasa: this.casa.tituloCasa,
            descripcionCasa: this.casa.descripcionCasa,
            ubicacionCasa: this.casa.ubicacionCasa,
            fechaCasa: this.casa.fechaCasa,
        };
    },
    methods: {
        handleSubmit() {
            let formData = new FormData();

            this.imagenCasa.forEach((imagen) => {
                formData.append('files', imagen);
            });
            formData.set('tituloCasa', this.tituloCasa);
            formData.set('descripcionCasa', this.descripcionCasa);
            formData.set('ubicacionCasa', this.ubicacionCasa);
            formData.set('fechaCasa', this.fechaCasa);

            this.$emit('guardar', formData);
        },
    },
};
</script>
