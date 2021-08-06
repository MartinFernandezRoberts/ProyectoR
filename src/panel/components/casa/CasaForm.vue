<template>
    <form class="bg-white shadow rounded px-8 pt-6 pb-8 mb-4 flow-root">
        <div class="mb-4">
            <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="titulo"
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
                id="titulo"
                type="text"
                placeholder="Título"
                v-model="titulo"
            />
        </div>

        <div class="mb-4">
            <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="descripcion"
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
                id="descripcion"
                type="text"
                placeholder="Descripción"
                v-model="descripcion"
            />
        </div>

        <div class="mb-4">
            <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="ubicacion"
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
                id="ubicacion"
                placeholder="Descripción"
                v-model="ubicacion"
            />
        </div>

        <div class="mb-6">
            <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="fecha"
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
                id="fecha"
                type="date"
                v-model="fecha"
            />
        </div>

        <div class="mb-4">
            <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="orientacion"
            >
                Orientación
            </label>

            <select
                :class="[
                    'border rounded border-pink-200 w-full py-1 px-2 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-pink-200',
                    orientacion ? 'text-gray-700' : 'text-gray-400',
                ]"
                id="orientacion"
                v-model="orientacion"
            >
                <option value="" disabled selected hidden>
                    Selecciona una orientación
                </option>

                <option
                    v-for="(orientacion, i) in orientaciones"
                    class="text-gray-700"
                    :key="i"
                    :value="orientacion"
                >
                    {{
                        `${orientacion[0].toUpperCase()}${orientacion.slice(1)}`
                    }}
                </option>
            </select>
        </div>

        <ImgDropMulti
            class="mb-6"
            v-model:images="imagen"
            v-model:paBorrar="paBorrar"
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
                Cancelar
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
                    imagen: [],
                    titulo: '',
                    descripcion: '',
                    ubicacion: '',
                    fecha: '',
                    orientacion: '',
                };
            },
        },
        guardando: Boolean,
    },
    emits: ['close', 'guardar'],
    data() {
        return {
            imagen: this.casa.imagen,
            paBorrar: [],
            titulo: this.casa.titulo,
            descripcion: this.casa.descripcion,
            ubicacion: this.casa.ubicacion,
            fecha: this.casa.fecha,
            orientacion: this.casa.orientacion,
            orientaciones: [
                'Oriente',
                'Poniente',
                'Norte',
                'Sur',
                'Nororiente',
                'Norponiente',
                'Suroriente',
                'Surponiente',
            ],
        };
    },
    methods: {
        handleSubmit() {
            let formData = new FormData();

            this.imagen.forEach((imagen) => {
                formData.append('files', imagen);
            });
            this.paBorrar.forEach((imagen) => {
                formData.append('paBorrar', imagen);
            });
            formData.set('titulo', this.titulo);
            formData.set('descripcion', this.descripcion);
            formData.set('ubicacion', this.ubicacion);
            formData.set('fecha', this.fecha);
            formData.set('orientacion', this.orientacion);

            this.$emit('guardar', formData);
        },
    },
};
</script>
