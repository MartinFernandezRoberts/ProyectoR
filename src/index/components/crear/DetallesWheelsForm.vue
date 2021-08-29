<template>
    <form class="flex flex-col space-y-3">
        <div class="flex flex-col space-y-1.5">
            <label class="text-sm font-bold" for="marca">Marca</label>

            <input
                :class="[
                    'px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight',
                    {
                        'bg-red-50 ring-1 ring-inset ring-red-400':
                            errores.marca,
                    },
                ]"
                type="text"
                id="marca"
                placeholder="Marca"
                :value="detalles.marca"
                @input="$emit('update', 'marca', $event.target.value)"
            />

            <small
                v-show="errores.marca"
                class="
                    block
                    px-4
                    py-1
                    rounded-lg
                    bg-red-400
                    text-center text-white
                "
            >
                {{ errores.marca }}
            </small>
        </div>

        <div class="flex flex-col space-y-1.5">
            <label class="text-sm font-bold" for="categoria">Categoría</label>

            <select
                :class="[
                    'px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight',
                    { 'text-gray-400': !detalles.categoria },
                ]"
                id="categoria"
                :value="detalles.categoria"
                @change="$emit('update', 'categoria', $event.target.value)"
            >
                <option value="" disabled selected hidden>
                    Selecciona una categoría
                </option>

                <option
                    v-for="categoria in categorias"
                    :key="categoria"
                    class="text-gris"
                    :value="categoria"
                >
                    {{ categoria }}
                </option>
            </select>

            <small
                v-show="errores.categoria"
                class="
                    block
                    px-4
                    py-1
                    rounded-lg
                    bg-red-400
                    text-center text-white
                "
                >{{ errores.categoria }}</small
            >
        </div>

        <div class="flex flex-col space-y-1.5">
            <label class="text-sm font-bold" for="transmision"
                >Transmisión</label
            >

            <select
                :class="[
                    'px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight',
                    { 'text-gray-400': !detalles.transmision },
                ]"
                id="transmision"
                :value="detalles.transmision"
                @change="$emit('update', 'transmision', $event.target.value)"
            >
                <option value="" disabled selected hidden>
                    Selecciona una transmisión
                </option>

                <option
                    v-for="transmision in transmisiones"
                    :key="transmision"
                    class="text-gris"
                    :value="transmision"
                >
                    {{ transmision }}
                </option>
            </select>

            <small
                v-show="errores.transmision"
                class="
                    block
                    px-4
                    py-1
                    rounded-lg
                    bg-red-400
                    text-center text-white
                "
                >{{ errores.transmision }}</small
            >
        </div>

        <div class="flex flex-col space-y-1.5">
            <label class="text-sm font-bold" for="combustible"
                >Combustible</label
            >

            <select
                :class="[
                    'px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight',
                    { 'text-gray-400': !detalles.combustible },
                ]"
                id="combustible"
                :value="detalles.combustible"
                @change="$emit('update', 'combustible', $event.target.value)"
            >
                <option value="" disabled selected hidden>
                    Selecciona un combustible
                </option>

                <option
                    v-for="combustible in combustibles"
                    :key="combustible"
                    class="text-gris"
                    :value="combustible"
                >
                    {{ combustible }}
                </option>
            </select>

            <small
                v-show="errores.combustible"
                class="
                    block
                    px-4
                    py-1
                    rounded-lg
                    bg-red-400
                    text-center text-white
                "
                >{{ errores.combustible }}</small
            >
        </div>

        <div class="flex flex-col space-y-1.5">
            <label class="text-sm font-bold" for="color">Color</label>

            <input
                :class="[
                    'px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight',
                    {
                        'bg-red-50 ring-1 ring-inset ring-red-400':
                            errores.color,
                    },
                ]"
                type="text"
                id="color"
                placeholder="Color"
                :value="detalles.color"
                @input="$emit('update', 'color', $event.target.value)"
            />

            <small
                v-show="errores.color"
                class="
                    block
                    px-4
                    py-1
                    rounded-lg
                    bg-red-400
                    text-center text-white
                "
            >
                {{ errores.color }}
            </small>
        </div>

        <div id="numbers" class="grid gap-x-6 gap-y-3 xl:grid-cols-2">
            <div class="flex flex-col space-y-1.5">
                <label class="text-sm font-bold" for="year">Año</label>

                <input
                    :class="[
                        'px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight',
                        {
                            'bg-red-50 ring-1 ring-inset ring-red-400':
                                errores.year,
                        },
                    ]"
                    type="number"
                    id="year"
                    placeholder="Año"
                    :value="detalles.year"
                    @input="$emit('update', 'year', $event.target.value)"
                />

                <small
                    v-show="errores.year"
                    class="
                        block
                        px-4
                        py-1
                        rounded-lg
                        bg-red-400
                        text-center text-white
                    "
                >
                    {{ errores.year }}
                </small>
            </div>

            <div class="flex flex-col space-y-1.5">
                <label class="text-sm font-bold" for="km">Kilometraje</label>

                <input
                    :class="[
                        'px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight',
                        {
                            'bg-red-50 ring-1 ring-inset ring-red-400':
                                errores.km,
                        },
                    ]"
                    type="number"
                    id="km"
                    placeholder="Kilometraje"
                    :value="detalles.km"
                    @input="$emit('update', 'km', $event.target.value)"
                />

                <small
                    v-show="errores.km"
                    class="
                        block
                        px-4
                        py-1
                        rounded-lg
                        bg-red-400
                        text-center text-white
                    "
                >
                    {{ errores.km }}
                </small>
            </div>

            <div class="flex flex-col space-y-1.5">
                <label class="text-sm font-bold" for="cilindrada">
                    Cilindrada
                </label>

                <input
                    :class="[
                        'px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight',
                        {
                            'bg-red-50 ring-1 ring-inset ring-red-400':
                                errores.cilindrada,
                        },
                    ]"
                    type="number"
                    id="cilindrada"
                    placeholder="Cilindrada"
                    :value="detalles.cilindrada"
                    @input="$emit('update', 'cilindrada', $event.target.value)"
                />

                <small
                    v-show="errores.cilindrada"
                    class="
                        block
                        px-4
                        py-1
                        rounded-lg
                        bg-red-400
                        text-center text-white
                    "
                >
                    {{ errores.cilindrada }}
                </small>
            </div>

            <div class="flex flex-col space-y-1.5">
                <label class="text-sm font-bold" for="rendimiento">
                    Rendimiento (km/l)
                </label>

                <input
                    :class="[
                        'px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight',
                        {
                            'bg-red-50 ring-1 ring-inset ring-red-400':
                                errores.rendimiento,
                        },
                    ]"
                    type="number"
                    id="rendimiento"
                    placeholder="Rendimiento"
                    :value="detalles.rendimiento"
                    @input="$emit('update', 'rendimiento', $event.target.value)"
                />

                <small
                    v-show="errores.rendimiento"
                    class="
                        block
                        px-4
                        py-1
                        rounded-lg
                        bg-red-400
                        text-center text-white
                    "
                >
                    {{ errores.rendimiento }}
                </small>
            </div>
        </div>

        <div id="booleans" class="pt-3 grid gap-3 xl:grid-cols-3">
            <div>
                <input
                    class="h-4 w-4"
                    id="abs"
                    type="checkbox"
                    :checked="detalles.abs"
                    @change="$emit('update', 'abs', $event.target.checked)"
                />

                <label
                    class="ml-3 text-gray-700 text-sm font-bold mb-2"
                    for="abs"
                >
                    ABS
                </label>
            </div>

            <div>
                <input
                    class="h-4 w-4"
                    id="airbag"
                    type="checkbox"
                    :checked="detalles.airbag"
                    @change="$emit('update', 'airbag', $event.target.checked)"
                />

                <label
                    class="ml-3 text-gray-700 text-sm font-bold mb-2"
                    for="airbag"
                >
                    Airbag
                </label>
            </div>

            <div>
                <input
                    class="h-4 w-4"
                    id="ac"
                    type="checkbox"
                    :checked="detalles.ac"
                    @change="$emit('update', 'ac', $event.target.checked)"
                />

                <label
                    class="ml-3 text-gray-700 text-sm font-bold mb-2"
                    for="ac"
                >
                    Aire acondicionado
                </label>
            </div>

            <div>
                <input
                    class="h-4 w-4"
                    id="alarma"
                    type="checkbox"
                    :checked="detalles.alarma"
                    @change="$emit('update', 'alarma', $event.target.checked)"
                />

                <label
                    class="ml-3 text-gray-700 text-sm font-bold mb-2"
                    for="alarma"
                >
                    Alarma
                </label>
            </div>

            <div>
                <input
                    class="h-4 w-4"
                    id="vidriosElectricos"
                    type="checkbox"
                    :checked="detalles.vidriosElectricos"
                    @change="
                        $emit(
                            'update',
                            'vidriosElectricos',
                            $event.target.checked
                        )
                    "
                />

                <label
                    class="ml-3 text-gray-700 text-sm font-bold mb-2"
                    for="vidriosElectricos"
                >
                    Vidrios eléctricos
                </label>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: 'DetallesWheelsForm',
    props: { detalles: Object, errores: Object },
    emits: ['update'],
    data() {
        return {
            categorias: [
                'Aéreos',
                'Autos, camionetas y 4x4',
                'Buses',
                'Camiones',
                'Casas rodantes',
                'Maquinarias',
                'Motos',
                'Náutica',
                'Otros',
            ],
            transmisiones: ['Automática', 'Manual'],
            combustibles: [
                'Bencina',
                'Diesel',
                'Eléctrico',
                'Gas',
                'Híbrido',
                'Otro',
            ],
            equipamientos: [
                'ABS',
                'Airbag',
                'Aire acondicionado',
                'Alarma',
                'Vidrios eléctricos',
            ],
        };
    },
};
</script>
