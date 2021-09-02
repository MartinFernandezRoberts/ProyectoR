<template>
    <div class="flex-1 md:flex">
        <div id="sidebar" class="pt-12 md:ml-4 md:w-1/4">
            <div class="mb-6 flex justify-center items-center 2xl:mb-7">
                <h1 class="font-bold text-center text-lg md:mr-10 2xl:text-xl">
                    Nueva publicación
                </h1>
            </div>

            <nav class="mx-auto w-max">
                <ul
                    class="
                        space-y-2
                        font-bold
                        md:text-base
                        lg:text-lg
                        2xl:text-xl 2xl:space-y-3
                    "
                >
                    <li
                        v-for="(seccion, i) in secciones"
                        :key="i"
                        :class="[
                            'hover:text-anaranjado transition-colors duration-200 ease-out cursor-pointer',
                            {
                                'text-anaranjado': indexActual === i,
                            },
                        ]"
                        @click="seccionActual = seccion"
                    >
                        <span>{{ `${i + 1}. ` }}</span>
                        {{ seccion.nombre }}
                        <sup
                            v-show="tieneErrores(seccion.objeto)"
                            class="text-rojo"
                            >&excl;</sup
                        >
                    </li>
                </ul>
            </nav>
        </div>

        <div id="contenido" class="py-12 px-6 w-full lg:w-2/3 2xl:px-24">
            <section class="flex flex-col">
                <div class="mb-6 flex justify-center items-center 2xl:mb-7">
                    <h2 class="font-bold md:text-lg lg:text-2xl 2xl:text-3xl">
                        {{ seccionActual.nombre }}
                    </h2>
                </div>

                <div class="p-10 flex flex-col rounded bg-claro space-y-3">
                    <InfoItemForm
                        v-show="seccionActual.objeto === 'info'"
                        :info="form.info"
                        :errores="errores.info"
                        @update="actualizarInput"
                        @update:detalles="actualizarDetalles"
                    />
                    <ImagenesItemForm
                        v-show="seccionActual.objeto === 'imagenes'"
                        :imagenes="form.imagenes"
                        :errores="errores.imagenes"
                        @update="actualizarInput"
                    />
                    <DetallesItemForm
                        v-show="seccionActual.objeto === 'detalles'"
                        :tipo="form.info.tipo"
                        :detalles="form.detalles"
                        :errores="errores.detalles"
                        @update="actualizarInput"
                    />
                    <DocsItemForm
                        v-show="seccionActual.objeto === 'docs'"
                        :docs="form.docs"
                        :errores="errores.docs"
                        @update="actualizarInput"
                    />
                    <BasesItemForm
                        v-show="seccionActual.objeto === 'bases'"
                        :bases="form.bases"
                        :errores="errores.bases"
                        @update="actualizarInput"
                    />

                    <div
                        class="
                            pt-6
                            flex
                            justify-center
                            text-xs
                            space-x-2
                            md:justify-end md:text-base
                        "
                    >
                        <button
                            type="button"
                            :class="[
                                'block mt-4 px-6 py-2 border border-gris rounded-lg bg-white text-gris hover:bg-gris hover:text-white transition-colors duration-200 ease-out md:ml-auto',
                                { 'animate-loading cursor-wait': enviando },
                            ]"
                            @click="guardar"
                        >
                            Guardar progreso
                        </button>

                        <button
                            type="button"
                            :class="[
                                'block mt-4 px-6 py-2 rounded-lg bg-anaranjado text-white hover:bg-rojo transition-colors duration-200 ease-out md:ml-auto',
                                { 'animate-loading cursor-wait': enviando },
                            ]"
                            @click="submit"
                        >
                            Solicitar publicación
                        </button>
                    </div>
                </div>
            </section>

            <div
                v-if="errorServidor"
                class="
                    mt-2
                    px-6
                    py-2
                    w-1/2
                    2xl:w-2/5
                    rounded-lg
                    text-center text-white
                    font-thin
                    cursor-pointer
                    bg-red-400
                "
                @click="errorServidor = ''"
            >
                {{ errorServidor }}
            </div>

            <div class="pt-6 flex font-bold">
                <div
                    v-if="indexActual > 0"
                    class="
                        flex
                        items-center
                        space-x-4
                        text-dorado
                        cursor-pointer
                        hover:text-anaranjado
                        transition-colors
                        duration-200
                        ease-out
                    "
                    @click="seccionActual = secciones[indexActual - 1]"
                >
                    <MarcadorIcon class="h-4" transform="rotate(90)" />
                    <span>{{ secciones[indexActual - 1].nombre }}</span>
                </div>

                <div
                    v-if="indexActual < secciones.length - 1"
                    class="
                        ml-auto
                        flex
                        items-center
                        space-x-4
                        text-dorado
                        cursor-pointer
                        hover:text-anaranjado
                        transition-colors
                        duration-200
                        ease-out
                    "
                    @click="seccionActual = secciones[indexActual + 1]"
                >
                    <span>{{ secciones[indexActual + 1].nombre }}</span>
                    <MarcadorIcon class="h-4" transform="rotate(-90)" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { validator, validaDetalles } from './validaItem';

import MarcadorIcon from '../svg/MarcadorIcon.vue';
import InfoItemForm from './InfoItemForm.vue';
import ImagenesItemForm from './ImagenesItemForm.vue';
import DetallesItemForm from './DetallesItemForm.vue';
import DocsItemForm from './DocsItemForm.vue';
import BasesItemForm from './BasesItemForm.vue';

export default {
    name: 'CrearItemMain',
    components: {
        InfoItemForm,
        ImagenesItemForm,
        DetallesItemForm,
        DocsItemForm,
        BasesItemForm,
        MarcadorIcon,
    },
    props: {
        edit: String,
    },
    data() {
        return {
            secciones: [
                { objeto: 'info', nombre: 'Información General' },
                { objeto: 'imagenes', nombre: 'Imágenes' },
                { objeto: 'docs', nombre: 'Documentos' },
                { objeto: 'bases', nombre: 'Bases Legales' },
            ],
            seccionActual: { objeto: 'info', nombre: 'Información General' },
            form: {
                info: {},
                imagenes: {
                    archivos: [],
                    borrar: [],
                },
                detalles: {},
                docs: {},
                bases: {},
            },
            errores: {
                info: {},
                imagenes: {},
                detalles: {},
                docs: {},
                bases: {},
            },
            validado: false,
            enviando: false,
            errorServidor: '',
        };
    },
    computed: {
        indexActual() {
            return Object.values(this.secciones).findIndex(
                (seccion) => seccion.objeto === this.seccionActual.objeto
            );
        },
    },
    created() {
        if (this.edit) {
            // get publicación en progreso.
        }
    },
    methods: {
        urlDev(path) {
            return 'http://localhost:3000/' + path;
        },
        tieneErrores(seccion) {
            return Object.values(this.errores[seccion]).some((valor) => valor);
        },
        async actualizarDetalles() {
            this.form.detalles = {};
            this.errores.detalles = {};

            if (this.secciones.length < 5 && this.form.info.tipo !== 'Otro') {
                this.secciones.splice(2, 0, {
                    objeto: 'detalles',
                    nombre: 'Detalles',
                });
            } else if (
                this.secciones.length === 5 &&
                this.form.info.tipo === 'Otro'
            ) {
                this.secciones.splice(2, 1);
            }

            if (this.validado) this.submit();
        },
        async actualizarInput(seccion, campo, valor) {
            this.form[seccion][campo] = valor;

            if (this.validado) {
                if (seccion === 'detalles') {
                    this.errores.detalles[campo] =
                        await validaDetalles.validate(campo, valor);
                } else {
                    this.errores[seccion][campo] =
                        await validator.validateNested(seccion, campo, valor);
                }
            }
        },
        async guardar() {
            console.log('enviar datos para guardar como borrador');
        },
        async submit() {
            console.log(validator.schema);

            const res = await validator.validateAll(this.form);

            if (res.valid && !this.enviando) {
                this.enviando = true;

                let formData = new FormData();

                for (const [key, value] of Object.entries(this.form.info)) {
                    formData.set(`info[${key}]`, value);
                }
                for (const [key, value] of Object.entries(this.form.detalles)) {
                    formData.set(`detalles[${key}]`, value);
                }

                this.form.imagenes.archivos.forEach((imagen) => {
                    formData.append('imagenes', imagen);
                });
                this.form.imagenes.borrar.forEach((imagen) => {
                    formData.append('borrar', imagen);
                });
                Object.values(this.form.docs).forEach((doc) => {
                    formData.append('docs', doc);
                });

                axios
                    .post(this.urlDev('api/items'), formData)
                    .then((res) => console.log(res.data))
                    .catch((err) => console.error(err));

                this.enviando = false;
            } else {
                for (const [key, value] of Object.entries(res.errors)) {
                    const campos = key.split('.');

                    if (campos.length > 1) {
                        this.errores[campos[0]][campos[1]] = value.substring(
                            campos[0].length + 1
                        );
                    } else {
                        this.errores[campos[0]] = value;
                    }
                }

                console.log('validación fallida');
            }

            this.validado = true;
        },
    },
};
</script>
