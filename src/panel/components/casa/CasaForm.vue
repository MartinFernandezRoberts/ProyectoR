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
                v-model="infoItem.titulo"
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
                    py-1
                    px-2
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
                v-model="infoItem.descripcion"
            />
        </div>

        <div class="mb-4">
            <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="comuna"
            >
                Comuna
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
                id="comuna"
                placeholder="Comuna"
                list="lista-comuna"
                v-model="infoItem.comuna"
            />

            <datalist id="lista-comuna">
                <option
                    v-for="(comuna, i) in comunas"
                    :key="i"
                    :value="comuna"
                />
            </datalist>
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
                    py-1
                    px-2
                    text-gray-700
                    leading-tight
                    focus:outline-none
                    focus:shadow-outline
                    focus:ring-2
                    focus:ring-pink-200
                "
                id="ubicacion"
                placeholder="Ubicación"
                v-model="infoCasa.ubicacion"
            />
        </div>

        <div class="mb-6">
            <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="fecha"
            >
                Fecha
            </label>

            <DatePicker
                v-model="infoItem.fecha"
                id="fecha"
                mode="dateTime"
                color="pink"
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
                    infoCasa.orientacion ? 'text-gray-700' : 'text-gray-400',
                ]"
                id="orientacion"
                v-model="infoCasa.orientacion"
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
            v-model:images="imagenes"
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
import axios from 'axios';
import { DatePicker } from 'v-calendar';

import ImgDropMulti from '../ImgDropMulti.vue';

export default {
    name: 'CasaForm',
    components: {
        ImgDropMulti,
        DatePicker,
    },
    props: {
        casa: {
            type: Object,
            default: function () {
                return {
                    titulo: '',
                    descripcion: '',
                    comuna: '',
                    ubicacion: '',
                    fecha: new Date(),
                    imagenes: [],
                    orientacion: '',
                };
            },
        },
        guardando: Boolean,
    },
    emits: ['close', 'guardar'],
    data() {
        return {
            infoItem: {
                titulo: this.casa.titulo,
                descripcion: this.casa.descripcion,
                comuna: this.casa.comuna,
                fecha: this.casa.fecha,
            },
            infoCasa: {
                ubicacion: this.casa.ubicacion,
                orientacion: this.casa.orientacion,
            },
            imagenes: this.casa.imagenes,
            paBorrar: [],
            comunas: [],
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
    created() {
        axios('https://apis.digital.gob.cl/dpa/comunas').then(
            (res) => (this.comunas = res.data.map((comuna) => comuna.nombre))
        );
    },
    methods: {
        handleSubmit() {
            let formData = new FormData();

            this.imagenes.forEach((imagen) => {
                formData.append('files', imagen);
            });
            this.paBorrar.forEach((imagen) => {
                formData.append('paBorrar', imagen);
            });

            for (const [key, value] of Object.entries(this.infoItem)) {
                formData.set(`item[${key}]`, value);
            }
            for (const [key, value] of Object.entries(this.infoCasa)) {
                formData.set(`casa[${key}]`, value);
            }

            this.$emit('guardar', formData);
        },
    },
};
</script>
