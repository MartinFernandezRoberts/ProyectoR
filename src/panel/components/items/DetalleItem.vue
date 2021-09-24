<template>
    <div
        class="
            fixed
            z-30
            inset-0
            flex
            justify-center
            items-center
            bg-black bg-opacity-75
        "
        @click.self="$emit('cerrar')"
    >
        <div
            class="
                w-11/12
                md:w-3/4
                h-3/4
                flex flex-col
                rounded-lg
                bg-gray-200
                text-black
                overflow-auto
            "
        >
            <div
                id="cabecera"
                class="flex bg-gray-500 text-white cursor-pointer"
                @click="seccionActual = ''"
            >
                <h3 class="flex-1 pl-4 py-2 text-xl font-bold">
                    {{ item.titulo }}
                </h3>

                <p class="p-2 bg-white text-xs text-gray-500 underline">
                    {{ item.tipo }}
                </p>
            </div>

            <Slideshow
                v-show="seccionActual === ''"
                class="h-48"
                :imagenes="item.imagenes"
            />

            <div class="flex-1 p-2 pb-6 flex flex-col justify-center space-y-1">
                <section class="flex flex-col">
                    <HeaderAcordeon
                        seccion="Estado"
                        :actual="seccionActual === 'Estado'"
                        :error="false"
                        @click="toggleSeccion('Estado')"
                    />

                    <EstadoMenu
                        v-show="seccionActual === 'Estado'"
                        :id="item._id"
                        :estado="item.estado"
                        @cargar="$emit('cargar')"
                    />
                </section>

                <section class="flex flex-col">
                    <HeaderAcordeon
                        seccion="Información general"
                        :actual="seccionActual === 'Información general'"
                        :error="tieneErrores('info')"
                        @click="toggleSeccion('Información general')"
                    />

                    <InfoForm
                        v-show="seccionActual === 'Información general'"
                        :info="form.info"
                        :errores="errores.info"
                        @update="actualizarInput"
                        @update:detalles="actualizarDetalles"
                    />
                </section>

                <section class="flex flex-col">
                    <HeaderAcordeon
                        seccion="Imágenes"
                        :actual="seccionActual === 'Imágenes'"
                        :error="tieneErrores('imagenes')"
                        @click="toggleSeccion('Imágenes')"
                    />

                    <ImagenesItemForm
                        v-show="seccionActual === 'Imágenes'"
                        class="
                            px-4
                            py-2
                            flex flex-col
                            border-r border-b border-l-2 border-gray-500
                            text-gray-700
                            space-y-2
                        "
                        :imagenes="form.imagenes"
                        :errores="errores.imagenes"
                        @update="actualizarInput"
                    />
                </section>

                <section
                    v-if="form.info.tipo && form.info.tipo !== 'Otro'"
                    class="flex flex-col"
                >
                    <HeaderAcordeon
                        seccion="Detalles"
                        :actual="seccionActual === 'Detalles'"
                        :error="tieneErrores('detalles')"
                        @click="toggleSeccion('Detalles')"
                    />

                    <DetallesItemForm
                        v-show="seccionActual === 'Detalles'"
                        class="
                            px-4
                            py-2
                            flex flex-col
                            border-r border-b border-l-2 border-gray-500
                            text-gray-700
                            space-y-2
                        "
                        :tipo="form.info.tipo"
                        :detalles="form.detalles"
                        :errores="errores.detalles"
                        @update="actualizarInput"
                    />
                </section>

                <section class="flex flex-col">
                    <HeaderAcordeon
                        seccion="Documentos"
                        :actual="seccionActual === 'Documentos'"
                        :error="tieneErrores('docs')"
                        @click="toggleSeccion('Documentos')"
                    />

                    <DocsItemForm
                        v-show="seccionActual === 'Documentos'"
                        class="
                            px-4
                            py-2
                            flex flex-col
                            border-r border-b border-l-2 border-gray-500
                            text-gray-700
                            space-y-2
                        "
                        :og="ogItem.docs || {}"
                        :docs="form.docs"
                        :errores="errores.docs"
                        @update="actualizarInput"
                        @reset="form.docs = {}"
                        @borrarOg="borrarOg"
                    />
                </section>

                <section class="flex flex-col">
                    <HeaderAcordeon
                        seccion="Fecha Sorteo"
                        :actual="seccionActual === 'Fecha Sorteo'"
                        :error="false"
                        @click="toggleSeccion('Fecha Sorteo')"
                    />

                    <SorteoMenu
                        v-show="seccionActual === 'Fecha Sorteo'"
                        class="
                            mx-auto
                            justify-center
                            items-center
                            px-4
                            py-2
                            flex flex-col
                            border-r border-b border-l-2 border-gray-500
                            text-gray-700
                            space-y-2
                        "
                        :fechaSorteo="form.info.fechaSorteo"
                        :error="errores.info.fechaSorteo"
                        @update="actualizarInput"
                    />
                </section>
            </div>

            <div class="mt-auto flex border-t border-gray-500">
                <button
                    class="
                        px-4
                        py-2
                        text-gray-700
                        border-r border-gray-500
                        hover:bg-gray-700 hover:text-white
                        font-bold
                    "
                    type="button"
                    @click="$emit('cerrar')"
                >
                    Cancelar
                </button>

                <button
                    class="
                        flex-1
                        px-4
                        py-2
                        text-pink-700 text-right
                        hover:bg-pink-700 hover:text-white
                        font-bold
                    "
                    type="button"
                    @click="submit"
                >
                    Guardar
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import EstadoMenu from './EstadoMenu.vue';
import SorteoMenu from './SorteoMenu.vue';
import DocsItemForm from '../../../index/components/crear/DocsItemForm.vue';
import DetallesItemForm from '../../../index/components/crear/DetallesItemForm.vue';
import ImagenesItemForm from '../../../index/components/crear/ImagenesItemForm.vue';
import InfoForm from './InfoForm.vue';
import axios from 'axios';
import { validator, validaDetalles } from './validaItem';

import HeaderAcordeon from './HeaderAcordeon.vue';
import Slideshow from './Slideshow.vue';

export default {
    name: 'DetalleItem',
    components: {
        Slideshow,
        HeaderAcordeon,
        InfoForm,
        ImagenesItemForm,
        DetallesItemForm,
        DocsItemForm,
        EstadoMenu,
        SorteoMenu,
    },
    props: {
        item: Object,
    },
    emits: ['cerrar', 'cargar'],
    data() {
        return {
            seccionActual: '',
            ogItem: this.item,
            form: {
                info: {
                    tipo: this.item.tipo,
                    titulo: this.item.titulo,
                    descripcion: this.item.descripcion,
                    comuna: this.item.comuna,
                    fechaSorteo: this.item.fechaSorteo || '',
                },
                imagenes: {
                    archivos: this.item.imagenes,
                    borrar: [],
                },
                detalles: this.item.item,
                docs: this.item.docs || {},
            },
            errores: {
                info: {},
                imagenes: {},
                detalles: {},
                docs: {},
            },
            validado: false,
            enviando: false,
            errorServidor: '',
        };
    },
    methods: {
        urlDev(path) {
            return 'https://rifasapp.cl/' + path;
        },
        toggleSeccion(seccion) {
            if (this.seccionActual === seccion) {
                this.seccionActual = '';
            } else {
                this.seccionActual = seccion;
            }
        },
        tieneErrores(seccion) {
            return Object.values(this.errores[seccion]).some((valor) => valor);
        },
        async actualizarDetalles() {
            this.form.detalles = {};
            this.errores.detalles = {};
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
        borrarOg(seccion, campo) {
            this.ogItem[seccion][campo] = '';
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
                    .post(
                        this.urlDev(`api/items/${this.item._id}/editar`),
                        formData
                    )
                    .then((res) => {
                        console.log(res.data);
                        this.$emit('cargar');
                    })
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

                alert('Validación fallida.');
            }

            this.validado = true;
        },
    },
};
</script>
