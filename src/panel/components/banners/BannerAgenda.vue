<template>
    <h2 class="mb-2 text-xl text-center">{{ banner.tituloBanner }}</h2>

    <form class="bg-white shadow rounded px-8 pt-6 pb-8 mb-4 flow-root">
        <div class="mb-4">
            <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="ubicacion"
            >
                Ubicación
            </label>
            <select
                :class="[
                    'border rounded border-pink-200 w-full py-1 px-2 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-pink-200',
                    ubicacion ? 'text-gray-700' : 'text-gray-400',
                ]"
                id="ubicacion"
                v-model="ubicacion"
            >
                <option value="" disabled selected hidden
                    >Selecciona una ubicación</option
                >
                <option
                    v-for="(ubicacion, i) in ubicaciones"
                    class="text-gray-700"
                    :key="i"
                    :value="ubicacion"
                    >{{
                        `${ubicacion[0].toUpperCase()}${ubicacion.slice(1)}`
                    }}</option
                >
            </select>
        </div>

        <div class="mb-4">
            <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="fechas"
            >
                Rango de fechas
            </label>
            <DatePicker
                id="fechas"
                mode="dateTime"
                is-range
                :minute-increment="5"
                color="pink"
                v-model="fechas"
            >
                <template v-slot="{ inputValue, inputEvents }">
                    <div class="flex justify-start items-center">
                        <input
                            :value="inputValue.start"
                            v-on="inputEvents.start"
                            class="border rounded border-pink-200 py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-pink-200"
                        />
                        <svg
                            class="w-4 h-4 mx-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                        <input
                            :value="inputValue.end"
                            v-on="inputEvents.end"
                            class="border rounded border-pink-200 py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-pink-200"
                        />
                    </div>
                </template>
            </DatePicker>
        </div>

        <div class="mb-4">
            <input
                class="border rounded border-pink-200 h-4 w-4 text-gray-700 focus:ring-2 focus:ring-pink-200"
                id="horario"
                type="checkbox"
                v-model="horario"
            />
            <label
                class="ml-3 text-gray-700 text-sm font-bold mb-2"
                for="horario"
            >
                Aplicar horario cada día
            </label>
        </div>

        <div class="mb-4">
            <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="recurrencia"
            >
                Recurrencia
            </label>
            <select
                :class="[
                    'border rounded border-pink-200 w-full py-1 px-2 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-pink-200',
                    recurrencia ? 'text-gray-700' : 'text-gray-400',
                ]"
                id="recurrencia"
                v-model="recurrencia"
            >
                <option value="" disabled selected hidden
                    >Selecciona un tipo de recurrencia</option
                >
                <option
                    v-for="(recurrencia, i) in recurrencias"
                    class="text-gray-700"
                    :key="i"
                    :value="recurrencia"
                    >{{
                        `${recurrencia[0].toUpperCase()}${recurrencia.slice(1)}`
                    }}</option
                >
            </select>
        </div>

        <div v-show="recurrencia && recurrencia !== 'continuado'" class="mb-4">
            <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="iteracion"
            >
                Repeticiones
            </label>
            <input
                class="border rounded border-pink-200 w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-pink-200"
                id="iteracion"
                type="number"
                placeholder="Número de repeticiones"
                v-model="iteracion"
            />
        </div>

        <div class="float-right space-x-2">
            <button
                class="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-pink-200"
                type="button"
                @click="$emit('cerrar')"
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
import axios from 'axios';
import { DatePicker } from 'v-calendar';

export default {
    name: 'BannerAgenda',
    components: {
        DatePicker,
    },
    props: {
        banner: Object,
        agenda: {
            type: Object,
            default: function() {
                return {
                    ubicacion: '',
                    fechaIni: '',
                    fechaFin: '',
                    horario: '',
                    recurrencia: '',
                    iteracion: '',
                };
            },
        },
        guardando: Boolean,
    },
    emits: ['cerrar', 'guardar'],
    data() {
        return {
            ubicaciones: [],
            recurrencias: ['continuado', 'semanal'],
            ubicacion: this.agenda.ubicacion,
            fechas: {
                start: new Date(this.agenda.fechaIni),
                end: new Date(this.agenda.fechaFin),
            },
            horario: this.agenda.horario,
            recurrencia: this.agenda.recurrencia,
            iteracion: this.agenda.iteracion,
        };
    },
    mounted() {
        axios('http://localhost:3000/api/ubicaciones')
            .then((res) => (this.ubicaciones = res.data))
            .catch((err) => console.error(err));
    },
    methods: {
        handleSubmit() {
            let formData = new FormData();

            formData.set('ubicacion', this.ubicacion);
            formData.set('idBanner', this.banner._id);
            formData.set('fechaIni', this.fechas.start.toISOString());
            formData.set('fechaFin', this.fechas.end.toISOString());
            formData.set('horario', this.horario);
            formData.set('recurrencia', this.recurrencia);
            formData.set('iteracion', this.iteracion);

            console.log(formData);
            // this.$emit('guardar', formData);
        },
    },
};
</script>
