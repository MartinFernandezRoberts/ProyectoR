<template>
    <form class="flex flex-col space-y-3">
        <div class="flex flex-col space-y-1.5">
            <label class="text-sm font-bold" for="tipo">Categoría</label>

            <select
                :class="[
                    'px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight',
                    { 'text-gray-400': !info.tipo },
                ]"
                id="tipo"
                :value="info.tipo"
                @change="
                    $emit('update', 'info', 'tipo', $event.target.value),
                        $emit('update:detalles')
                "
            >
                <option value="" disabled selected hidden>
                    Selecciona una categoría
                </option>

                <option
                    v-for="(texto, tipo) in tipos"
                    :key="tipo"
                    class="text-gris"
                    :value="tipo"
                >
                    {{ texto }}
                </option>
            </select>

            <small
                v-show="errores.tipo"
                class="
                    block
                    px-4
                    py-1
                    rounded-lg
                    bg-red-400
                    text-center text-white
                "
                >{{ errores.tipo }}</small
            >
        </div>

        <div class="flex flex-col space-y-1.5">
            <label class="text-sm font-bold" for="titulo">Título</label>

            <input
                :class="[
                    'px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight',
                    {
                        'bg-red-50 ring-1 ring-inset ring-red-400':
                            errores.titulo,
                    },
                ]"
                type="text"
                id="titulo"
                placeholder="Título"
                :value="info.titulo"
                @input="$emit('update', 'info', 'titulo', $event.target.value)"
            />

            <small
                v-show="errores.titulo"
                class="
                    block
                    px-4
                    py-1
                    rounded-lg
                    bg-red-400
                    text-center text-white
                "
                >{{ errores.titulo }}</small
            >
        </div>

        <div class="flex flex-col space-y-1.5">
            <label class="text-sm font-bold" for="descripcion">
                Descripción
            </label>

            <textarea
                :class="[
                    'px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight',
                    {
                        'bg-red-50 ring-1 ring-inset ring-red-400':
                            errores.descripcion,
                    },
                ]"
                id="descripcion"
                placeholder="Descripción"
                :value="info.descripcion"
                @input="
                    $emit('update', 'info', 'descripcion', $event.target.value)
                "
            />

            <small
                v-show="errores.descripcion"
                class="
                    block
                    px-4
                    py-1
                    rounded-lg
                    bg-red-400
                    text-center text-white
                "
                >{{ errores.descripcion }}</small
            >
        </div>

        <div class="flex flex-col space-y-1.5">
            <label class="text-sm font-bold" for="comuna">Comuna</label>

            <input
                :class="[
                    'px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight',
                    {
                        'bg-red-50 ring-1 ring-inset ring-red-400':
                            errores.comuna,
                    },
                ]"
                type="text"
                id="comuna"
                placeholder="Comuna"
                list="lista-comuna"
                :value="info.comuna"
                @input="$emit('update', 'info', 'comuna', $event.target.value)"
            />

            <datalist id="lista-comuna">
                <option
                    v-for="(comuna, i) in comunas"
                    :key="i"
                    :value="comuna"
                />
            </datalist>

            <small
                v-show="errores.comuna"
                class="
                    block
                    px-4
                    py-1
                    rounded-lg
                    bg-red-400
                    text-center text-white
                "
                >{{ errores.comuna }}</small
            >
        </div>
    </form>
</template>

<script>
import axios from 'axios';

export default {
    name: 'InfoItemForm',
    props: {
        info: Object,
        imagenes: Object,
        errores: Object,
    },
    emits: ['update', 'update:detalles'],
    data() {
        return {
            tipos: { Casa: 'Casa', Wheels: 'Vehículo', Otro: 'Otro' },
            comunas: [],
        };
    },
    created() {
        axios('https://apis.digital.gob.cl/dpa/comunas').then(
            (res) => (this.comunas = res.data.map((comuna) => comuna.nombre))
        );
    },
};
</script>
