<template>
    <form class="flex flex-col space-y-3">
        <div class="flex flex-col space-y-1.5">
            <label class="text-sm font-bold" for="ubicacion">Ubicación</label>

            <input
                :class="[
                    'px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight',
                    {
                        'bg-red-50 ring-1 ring-inset ring-rojo':
                            errores.ubicacion,
                    },
                ]"
                type="text"
                id="ubicacion"
                placeholder="Ubicación"
                :value="detalles.ubicacion"
                @input="$emit('update', 'ubicacion', $event.target.value)"
            />

            <small
                v-show="errores.ubicacion"
                class="
                    block
                    px-4
                    py-1
                    rounded-lg
                    bg-rojo
                    text-center text-white
                "
            >
                {{ errores.ubicacion }}
            </small>
        </div>

        <div class="flex flex-col space-y-1.5">
            <label class="text-sm font-bold" for="orientacion"
                >Orientación</label
            >

            <select
                :class="[
                    'px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight',
                    { 'text-gray-400': !detalles.orientacion },
                ]"
                id="orientacion"
                :value="detalles.orientacion"
                @change="$emit('update', 'orientacion', $event.target.value)"
            >
                <option value="" disabled selected hidden>
                    Selecciona una orientación
                </option>

                <option
                    v-for="orientacion in orientaciones"
                    :key="orientacion"
                    class="text-gris"
                    :value="orientacion"
                >
                    {{ orientacion }}
                </option>
            </select>

            <small
                v-show="errores.orientacion"
                class="
                    block
                    px-4
                    py-1
                    rounded-lg
                    bg-rojo
                    text-center text-white
                "
                >{{ errores.orientacion }}</small
            >
        </div>

        <div id="numbers" class="grid gap-x-6 gap-y-3 xl:grid-cols-2">
            <div class="flex flex-col space-y-1.5">
                <label class="text-sm font-bold" for="area"
                    >Área total (m<sup>2</sup>)</label
                >

                <input
                    :class="[
                        'px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight',
                        {
                            'bg-red-50 ring-1 ring-inset ring-rojo':
                                errores.area,
                        },
                    ]"
                    type="number"
                    id="area"
                    placeholder="Área"
                    :value="detalles.area"
                    @input="$emit('update', 'area', $event.target.value)"
                />

                <small
                    v-show="errores.area"
                    class="
                        block
                        px-4
                        py-1
                        rounded-lg
                        bg-rojo
                        text-center text-white
                    "
                >
                    {{ errores.area }}
                </small>
            </div>

            <div class="flex flex-col space-y-1.5">
                <label class="text-sm font-bold" for="construido"
                    >Superficie construida (m<sup>2</sup>)</label
                >

                <input
                    :class="[
                        'px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight',
                        {
                            'bg-red-50 ring-1 ring-inset ring-rojo':
                                errores.construido,
                        },
                    ]"
                    type="number"
                    id="construido"
                    placeholder="Área"
                    :value="detalles.construido"
                    @input="$emit('update', 'construido', $event.target.value)"
                />

                <small
                    v-show="errores.construido"
                    class="
                        block
                        px-4
                        py-1
                        rounded-lg
                        bg-rojo
                        text-center text-white
                    "
                >
                    {{ errores.construido }}
                </small>
            </div>

            <div class="flex flex-col space-y-1.5">
                <label class="text-sm font-bold" for="wc">Baños</label>

                <input
                    :class="[
                        'px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight',
                        {
                            'bg-red-50 ring-1 ring-inset ring-rojo': errores.wc,
                        },
                    ]"
                    type="number"
                    id="wc"
                    placeholder="Baños"
                    :value="detalles.wc"
                    @input="$emit('update', 'wc', $event.target.value)"
                />

                <small
                    v-show="errores.wc"
                    class="
                        block
                        px-4
                        py-1
                        rounded-lg
                        bg-rojo
                        text-center text-white
                    "
                >
                    {{ errores.wc }}
                </small>
            </div>

            <div class="flex flex-col space-y-1.5">
                <label class="text-sm font-bold" for="estacionamiento"
                    >Estacionamientos</label
                >

                <input
                    :class="[
                        'px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight',
                        {
                            'bg-red-50 ring-1 ring-inset ring-rojo':
                                errores.estacionamiento,
                        },
                    ]"
                    type="number"
                    id="estacionamiento"
                    placeholder="Estacionamientos"
                    :value="detalles.estacionamiento"
                    @input="
                        $emit('update', 'estacionamiento', $event.target.value)
                    "
                />

                <small
                    v-show="errores.estacionamiento"
                    class="
                        block
                        px-4
                        py-1
                        rounded-lg
                        bg-rojo
                        text-center text-white
                    "
                >
                    {{ errores.estacionamiento }}
                </small>
            </div>

            <div class="flex flex-col space-y-1.5">
                <label class="text-sm font-bold" for="dormitorio"
                    >Dormitorios</label
                >

                <input
                    :class="[
                        'px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight',
                        {
                            'bg-red-50 ring-1 ring-inset ring-rojo':
                                errores.dormitorio,
                        },
                    ]"
                    type="number"
                    id="dormitorio"
                    placeholder="Dormitorios"
                    :value="detalles.dormitorio"
                    @input="$emit('update', 'dormitorio', $event.target.value)"
                />

                <small
                    v-show="errores.dormitorio"
                    class="
                        block
                        px-4
                        py-1
                        rounded-lg
                        bg-rojo
                        text-center text-white
                    "
                >
                    {{ errores.dormitorio }}
                </small>
            </div>

            <div class="flex flex-col space-y-1.5">
                <label class="text-sm font-bold" for="piso">Pisos</label>

                <input
                    :class="[
                        'px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight',
                        {
                            'bg-red-50 ring-1 ring-inset ring-rojo':
                                errores.piso,
                        },
                    ]"
                    type="number"
                    id="piso"
                    placeholder="Pisos"
                    :value="detalles.piso"
                    @input="$emit('update', 'piso', $event.target.value)"
                />

                <small
                    v-show="errores.piso"
                    class="
                        block
                        px-4
                        py-1
                        rounded-lg
                        bg-rojo
                        text-center text-white
                    "
                >
                    {{ errores.piso }}
                </small>
            </div>

            <div class="flex flex-col space-y-1.5">
                <label class="text-sm font-bold" for="gastosComunes"
                    >Gastos comunes</label
                >

                <input
                    :class="[
                        'px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight',
                        {
                            'bg-red-50 ring-1 ring-inset ring-rojo':
                                errores.gastosComunes,
                        },
                    ]"
                    type="number"
                    id="gastosComunes"
                    placeholder="Gastos comunes"
                    :value="detalles.gastosComunes"
                    @input="
                        $emit('update', 'gastosComunes', $event.target.value)
                    "
                />

                <small
                    v-show="errores.gastosComunes"
                    class="
                        block
                        px-4
                        py-1
                        rounded-lg
                        bg-rojo
                        text-center text-white
                    "
                >
                    {{ errores.gastosComunes }}
                </small>
            </div>
        </div>

        <div id="booleans" class="pt-3 grid gap-3 grid-cols-2 md:grid-cols-3">
            <div>
                <input
                    class="h-4 w-4"
                    id="bodega"
                    type="checkbox"
                    :checked="detalles.bodega"
                    @change="$emit('update', 'bodega', $event.target.checked)"
                />

                <label
                    class="ml-3 text-gray-700 text-sm font-bold mb-2"
                    for="bodega"
                >
                    Bodega
                </label>
            </div>

            <div>
                <input
                    class="h-4 w-4"
                    id="mascotas"
                    type="checkbox"
                    :checked="detalles.mascotas"
                    @change="$emit('update', 'mascotas', $event.target.checked)"
                />

                <label
                    class="ml-3 text-gray-700 text-sm font-bold mb-2"
                    for="mascotas"
                >
                    Mascotas
                </label>
            </div>

            <div>
                <input
                    class="h-4 w-4"
                    id="calefaccion"
                    type="checkbox"
                    :checked="detalles.calefaccion"
                    @change="
                        $emit('update', 'calefaccion', $event.target.checked)
                    "
                />

                <label
                    class="ml-3 text-gray-700 text-sm font-bold mb-2"
                    for="calefaccion"
                >
                    Calefacción
                </label>
            </div>

            <div>
                <input
                    class="h-4 w-4"
                    id="cocina"
                    type="checkbox"
                    :checked="detalles.cocina"
                    @change="$emit('update', 'cocina', $event.target.checked)"
                />

                <label
                    class="ml-3 text-gray-700 text-sm font-bold mb-2"
                    for="cocina"
                >
                    Cocina
                </label>
            </div>

            <div>
                <input
                    class="h-4 w-4"
                    id="terraza"
                    type="checkbox"
                    :checked="detalles.terraza"
                    @change="$emit('update', 'terraza', $event.target.checked)"
                />

                <label
                    class="ml-3 text-gray-700 text-sm font-bold mb-2"
                    for="terraza"
                >
                    Terraza
                </label>
            </div>

            <div>
                <input
                    class="h-4 w-4"
                    id="balcon"
                    type="checkbox"
                    :checked="detalles.balcon"
                    @change="$emit('update', 'balcon', $event.target.checked)"
                />

                <label
                    class="ml-3 text-gray-700 text-sm font-bold mb-2"
                    for="balcon"
                >
                    Balcón
                </label>
            </div>

            <div>
                <input
                    class="h-4 w-4"
                    id="piscina"
                    type="checkbox"
                    :checked="detalles.piscina"
                    @change="$emit('update', 'piscina', $event.target.checked)"
                />

                <label
                    class="ml-3 text-gray-700 text-sm font-bold mb-2"
                    for="piscina"
                >
                    Piscina
                </label>
            </div>

            <div>
                <input
                    class="h-4 w-4"
                    id="quincho"
                    type="checkbox"
                    :checked="detalles.quincho"
                    @change="$emit('update', 'quincho', $event.target.checked)"
                />

                <label
                    class="ml-3 text-gray-700 text-sm font-bold mb-2"
                    for="quincho"
                >
                    Quincho
                </label>
            </div>

            <div>
                <input
                    class="h-4 w-4"
                    id="edificio"
                    type="checkbox"
                    :checked="detalles.edificio"
                    @change="$emit('update', 'edificio', $event.target.checked)"
                />

                <label
                    class="ml-3 text-gray-700 text-sm font-bold mb-2"
                    for="edificio"
                >
                    Edificio
                </label>
            </div>
        </div>

        <div v-if="detalles.edificio" class="grid gap-3 xl:grid-cols-3">
            <div>
                <input
                    class="h-4 w-4"
                    id="gimnasioE"
                    type="checkbox"
                    :checked="detalles.gimnasioE"
                    @change="
                        $emit('update', 'gimnasioE', $event.target.checked)
                    "
                />

                <label
                    class="ml-3 text-gray-700 text-sm font-bold mb-2"
                    for="gimnasioE"
                >
                    Gimnasio
                </label>
            </div>

            <div>
                <input
                    class="h-4 w-4"
                    id="lavanderiaE"
                    type="checkbox"
                    :checked="detalles.lavanderiaE"
                    @change="
                        $emit('update', 'lavanderiaE', $event.target.checked)
                    "
                />

                <label
                    class="ml-3 text-gray-700 text-sm font-bold mb-2"
                    for="lavanderiaE"
                >
                    Lavandería
                </label>
            </div>

            <div>
                <input
                    class="h-4 w-4"
                    id="eventosE"
                    type="checkbox"
                    :checked="detalles.eventosE"
                    @change="$emit('update', 'eventosE', $event.target.checked)"
                />

                <label
                    class="ml-3 text-gray-700 text-sm font-bold mb-2"
                    for="eventosE"
                >
                    Eventos
                </label>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: 'DetallesCasaForm',
    props: { detalles: Object, errores: Object },
    emits: ['update'],
    data() {
        return {
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
};
</script>
