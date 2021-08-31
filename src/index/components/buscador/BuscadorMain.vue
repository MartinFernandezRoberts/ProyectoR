<template>
    <div class="flex-1 flex">
        <div id="sidebar" class="w-1/4 py-12 px-6">
            <div class="mb-6 2xl:mb-7 flex justify-center items-center">
                <h1 class="mr-10 text-lg 2xl:text-xl font-bold text-center">
                    Buscador
                </h1>
            </div>

            <form id="filtros" class="flex flex-col space-y-3">
                <div class="flex flex-col space-y-1.5">
                    <label class="text-sm font-bold" for="tipo">
                        Categoría
                    </label>

                    <div class="flex items-center space-x-2">
                        <select
                            :class="[
                                'flex-1 px-4 2xl:px-6 py-1.5 2xl:py-2 border rounded border-amarillo text-sm font-light leading-tight',
                                { 'text-gray-400': !filtros.tipo },
                            ]"
                            id="tipo"
                            v-model="filtros.tipo"
                            @change="filtrar"
                        >
                            <option value="" disabled selected hidden>
                                Selecciona una categoría
                            </option>

                            <option
                                v-for="(texto, tipo) in selects.tipos"
                                :key="tipo"
                                class="text-gris"
                                :value="tipo"
                            >
                                {{ texto }}
                            </option>
                        </select>

                        <XIcon
                            v-show="filtros.tipo"
                            class="h-5 cursor-pointer text-gray-400"
                            @click="reset('tipo')"
                        />
                    </div>
                </div>

                <div class="flex flex-col space-y-1.5">
                    <label class="text-sm font-bold" for="precioBoleto">
                        Precio boleto
                    </label>

                    <div class="flex items-center space-x-2">
                        <select
                            :class="[
                                'flex-1 px-4 2xl:px-6 py-1.5 2xl:py-2 border rounded border-amarillo text-sm font-light leading-tight',
                                { 'text-gray-400': !filtros.precioBoleto },
                            ]"
                            id="precioBoleto"
                            v-model="filtros.precioBoleto"
                            @change="filtrar"
                        >
                            <option value="" disabled selected hidden>
                                Selecciona un precio
                            </option>

                            <option
                                v-for="(precio, i) in selects.precios"
                                :key="i"
                                class="text-gris"
                                :value="String(precio)"
                            >
                                {{ formatPrecio(precio) }}
                            </option>
                        </select>

                        <XIcon
                            v-show="filtros.precioBoleto"
                            class="h-5 cursor-pointer text-gray-400"
                            @click="reset('precioBoleto')"
                        />
                    </div>
                </div>

                <div class="flex flex-col space-y-1.5">
                    <label class="text-sm font-bold" for="comuna">Comuna</label>

                    <div class="flex items-center space-x-2">
                        <input
                            class="
                                flex-1
                                px-4
                                2xl:px-6
                                py-1.5
                                2xl:py-2
                                rounded
                                border border-amarillo
                                text-sm
                                font-light
                                leading-tight
                            "
                            type="text"
                            id="comuna"
                            placeholder="Comuna"
                            list="lista-comuna"
                            v-model="filtros.comuna"
                            @input="filtrar"
                        />

                        <datalist id="lista-comuna">
                            <option
                                v-for="(comuna, i) in comunas"
                                :key="i"
                                :value="comuna"
                            />
                        </datalist>

                        <XIcon
                            v-show="filtros.comuna"
                            class="h-5 cursor-pointer text-gray-400"
                            @click="reset('comuna')"
                        />
                    </div>
                </div>

                <div
                    v-if="filtros.tipo === 'Casa'"
                    id="filtrosCasa"
                    class="flex flex-col space-y-3"
                >
                    <div class="flex flex-col space-y-1.5">
                        <label class="text-sm font-bold" for="wc">
                            Baños (mín.)
                        </label>

                        <div class="flex items-center space-x-2">
                            <input
                                class="
                                    flex-1
                                    px-4
                                    2xl:px-6
                                    py-1.5
                                    2xl:py-2
                                    rounded
                                    border border-amarillo
                                    text-sm
                                    font-light
                                    leading-tight
                                "
                                type="number"
                                id="wc"
                                placeholder="Baños"
                                v-model="filtros.wc"
                                @input="filtrar"
                            />

                            <XIcon
                                v-show="filtros.wc"
                                class="h-5 cursor-pointer text-gray-400"
                                @click="reset('wc')"
                            />
                        </div>
                    </div>

                    <div class="flex flex-col space-y-1.5">
                        <label class="text-sm font-bold" for="estacionamiento">
                            Estacionamientos (mín.)
                        </label>

                        <div class="flex items-center space-x-2">
                            <input
                                class="
                                    flex-1
                                    px-4
                                    2xl:px-6
                                    py-1.5
                                    2xl:py-2
                                    rounded
                                    border border-amarillo
                                    text-sm
                                    font-light
                                    leading-tight
                                "
                                type="number"
                                id="estacionamiento"
                                placeholder="Estacionamientos"
                                v-model="filtros.estacionamiento"
                                @input="filtrar"
                            />

                            <XIcon
                                v-show="filtros.estacionamiento"
                                class="h-5 cursor-pointer text-gray-400"
                                @click="reset('estacionamiento')"
                            />
                        </div>
                    </div>

                    <div class="flex flex-col space-y-1.5">
                        <label class="text-sm font-bold" for="dormitorio">
                            Dormitorios (mín.)
                        </label>

                        <div class="flex items-center space-x-2">
                            <input
                                class="
                                    flex-1
                                    px-4
                                    2xl:px-6
                                    py-1.5
                                    2xl:py-2
                                    rounded
                                    border border-amarillo
                                    text-sm
                                    font-light
                                    leading-tight
                                "
                                type="number"
                                id="dormitorio"
                                placeholder="Dormitorios"
                                v-model="filtros.dormitorio"
                                @input="filtrar"
                            />

                            <XIcon
                                v-show="filtros.dormitorio"
                                class="h-5 cursor-pointer text-gray-400"
                                @click="reset('dormitorio')"
                            />
                        </div>
                    </div>

                    <div class="flex flex-col space-y-1.5">
                        <label class="text-sm font-bold" for="piso">
                            Pisos (mín.)
                        </label>

                        <div class="flex items-center space-x-2">
                            <input
                                class="
                                    flex-1
                                    px-4
                                    2xl:px-6
                                    py-1.5
                                    2xl:py-2
                                    rounded
                                    border border-amarillo
                                    text-sm
                                    font-light
                                    leading-tight
                                "
                                type="number"
                                id="piso"
                                placeholder="Pisos"
                                v-model="filtros.piso"
                                @input="filtrar"
                            />

                            <XIcon
                                v-show="filtros.piso"
                                class="h-5 cursor-pointer text-gray-400"
                                @click="reset('piso')"
                            />
                        </div>
                    </div>

                    <div class="space-x-2">
                        <input
                            class="h-4 w-4"
                            id="mascotas"
                            type="checkbox"
                            v-model="filtros.mascotas"
                            @change="filtrar"
                        />

                        <label
                            class="text-gray-700 text-sm font-bold mb-2"
                            for="mascotas"
                        >
                            Apto para mascotas
                        </label>
                    </div>

                    <div class="space-x-2">
                        <input
                            class="h-4 w-4"
                            id="piscina"
                            type="checkbox"
                            v-model="filtros.piscina"
                            @change="filtrar"
                        />

                        <label
                            class="text-gray-700 text-sm font-bold mb-2"
                            for="piscina"
                        >
                            Piscina
                        </label>
                    </div>

                    <div class="space-x-2">
                        <input
                            class="h-4 w-4"
                            id="edificio"
                            type="checkbox"
                            v-model="filtros.edificio"
                            @change="filtrar"
                        />

                        <label
                            class="text-gray-700 text-sm font-bold mb-2"
                            for="edificio"
                        >
                            Edificio
                        </label>
                    </div>

                    <div
                        v-if="filtros.edificio"
                        id="filtrosEdificio"
                        class="flex flex-col space-y-3"
                    >
                        <div class="space-x-2">
                            <input
                                class="h-4 w-4"
                                id="lavanderia"
                                type="checkbox"
                                v-model="filtros.lavanderia"
                                @change="filtrar"
                            />

                            <label
                                class="text-gray-700 text-sm font-bold mb-2"
                                for="lavanderia"
                            >
                                Lavandería
                            </label>
                        </div>

                        <div class="space-x-2">
                            <input
                                class="h-4 w-4"
                                id="eventos"
                                type="checkbox"
                                v-model="filtros.eventos"
                                @change="filtrar"
                            />

                            <label
                                class="text-gray-700 text-sm font-bold mb-2"
                                for="eventos"
                            >
                                Eventos
                            </label>
                        </div>
                    </div>
                </div>

                <div
                    v-if="filtros.tipo === 'Wheels'"
                    id="filtrosWheels"
                    class="flex flex-col space-y-3"
                >
                    <div class="flex flex-col space-y-1.5">
                        <label class="text-sm font-bold" for="marca"
                            >Marca</label
                        >

                        <div class="flex items-center space-x-2">
                            <input
                                class="
                                    flex-1
                                    px-4
                                    2xl:px-6
                                    py-1.5
                                    2xl:py-2
                                    rounded
                                    border border-amarillo
                                    text-sm
                                    font-light
                                    leading-tight
                                "
                                type="text"
                                id="marca"
                                placeholder="Marca"
                                v-model="filtros.marca"
                                @input="filtrar"
                            />

                            <XIcon
                                v-show="filtros.marca"
                                class="h-5 cursor-pointer text-gray-400"
                                @click="reset('marca')"
                            />
                        </div>
                    </div>

                    <div class="flex flex-col space-y-1.5">
                        <label class="text-sm font-bold" for="transmision">
                            Transmisión
                        </label>

                        <div class="flex items-center space-x-2">
                            <select
                                :class="[
                                    'flex-1 px-4 2xl:px-6 py-1.5 2xl:py-2 border rounded border-amarillo text-sm font-light leading-tight',
                                    { 'text-gray-400': !filtros.transmision },
                                ]"
                                id="transmision"
                                v-model="filtros.transmision"
                                @change="filtrar"
                            >
                                <option value="" disabled selected hidden>
                                    Selecciona una transmisión
                                </option>

                                <option
                                    v-for="(
                                        transmision, i
                                    ) in selects.transmisiones"
                                    :key="i"
                                    class="text-gris"
                                    :value="transmision"
                                >
                                    {{ transmision }}
                                </option>
                            </select>

                            <XIcon
                                v-show="filtros.transmision"
                                class="h-5 cursor-pointer text-gray-400"
                                @click="reset('transmision')"
                            />
                        </div>
                    </div>

                    <div class="flex flex-col space-y-1.5">
                        <label class="text-sm font-bold" for="combustible">
                            Combustible
                        </label>

                        <div class="flex items-center space-x-2">
                            <select
                                :class="[
                                    'flex-1 px-4 2xl:px-6 py-1.5 2xl:py-2 border rounded border-amarillo text-sm font-light leading-tight',
                                    { 'text-gray-400': !filtros.combustible },
                                ]"
                                id="combustible"
                                v-model="filtros.combustible"
                                @change="filtrar"
                            >
                                <option value="" disabled selected hidden>
                                    Selecciona un combustible
                                </option>

                                <option
                                    v-for="(
                                        combustible, i
                                    ) in selects.combustibles"
                                    :key="i"
                                    class="text-gris"
                                    :value="combustible"
                                >
                                    {{ combustible }}
                                </option>
                            </select>

                            <XIcon
                                v-show="filtros.combustible"
                                class="h-5 cursor-pointer text-gray-400"
                                @click="reset('combustible')"
                            />
                        </div>
                    </div>

                    <div class="flex flex-col space-y-1.5">
                        <label class="text-sm font-bold" for="year">
                            Año (mín.)
                        </label>

                        <div class="flex items-center space-x-2">
                            <input
                                class="
                                    flex-1
                                    px-4
                                    2xl:px-6
                                    py-1.5
                                    2xl:py-2
                                    rounded
                                    border border-amarillo
                                    text-sm
                                    font-light
                                    leading-tight
                                "
                                type="number"
                                id="year"
                                placeholder="Año"
                                v-model="filtros.year"
                                @input="filtrar"
                            />

                            <XIcon
                                v-show="filtros.year"
                                class="h-5 cursor-pointer text-gray-400"
                                @click="reset('year')"
                            />
                        </div>
                    </div>

                    <div class="flex flex-col space-y-1.5">
                        <label class="text-sm font-bold" for="cilindrada">
                            Cilindrada (mín.)
                        </label>

                        <div class="flex items-center space-x-2">
                            <input
                                class="
                                    flex-1
                                    px-4
                                    2xl:px-6
                                    py-1.5
                                    2xl:py-2
                                    rounded
                                    border border-amarillo
                                    text-sm
                                    font-light
                                    leading-tight
                                "
                                type="number"
                                id="cilindrada"
                                placeholder="Cilindrada"
                                v-model="filtros.cilindrada"
                                @input="filtrar"
                            />

                            <XIcon
                                v-show="filtros.cilindrada"
                                class="h-5 cursor-pointer text-gray-400"
                                @click="reset('cilindrada')"
                            />
                        </div>
                    </div>

                    <div class="space-x-2">
                        <input
                            class="h-4 w-4"
                            id="abs"
                            type="checkbox"
                            v-model="filtros.abs"
                            @change="filtrar"
                        />

                        <label
                            class="text-gray-700 text-sm font-bold mb-2"
                            for="abs"
                        >
                            ABS
                        </label>
                    </div>

                    <div class="space-x-2">
                        <input
                            class="h-4 w-4"
                            id="airbag"
                            type="checkbox"
                            v-model="filtros.airbag"
                            @change="filtrar"
                        />

                        <label
                            class="text-gray-700 text-sm font-bold mb-2"
                            for="airbag"
                        >
                            Airbag
                        </label>
                    </div>

                    <div class="space-x-2">
                        <input
                            class="h-4 w-4"
                            id="ac"
                            type="checkbox"
                            v-model="filtros.ac"
                            @change="filtrar"
                        />

                        <label
                            class="text-gray-700 text-sm font-bold mb-2"
                            for="ac"
                        >
                            Aire acondicionado
                        </label>
                    </div>

                    <div class="space-x-2">
                        <input
                            class="h-4 w-4"
                            id="alarma"
                            type="checkbox"
                            v-model="filtros.alarma"
                            @change="filtrar"
                        />

                        <label
                            class="text-gray-700 text-sm font-bold mb-2"
                            for="alarma"
                        >
                            Alarma
                        </label>
                    </div>

                    <div class="space-x-2">
                        <input
                            class="h-4 w-4"
                            id="vidriosElectricos"
                            type="checkbox"
                            v-model="filtros.vidriosElectricos"
                            @change="filtrar"
                        />

                        <label
                            class="text-gray-700 text-sm font-bold mb-2"
                            for="vidriosElectricos"
                        >
                            Vidrios eléctricos
                        </label>
                    </div>
                </div>
            </form>
        </div>

        <div id="contenido" class="py-12 px-6 2xl:px-24 w-3/4 relative">
            <Cargando v-show="cargando" class="absolute inset-0 z-10" />

            <div
                :class="[
                    'grid grid-cols-3 gap-4 auto-rows-max',
                    { 'opacity-20 filter blur-sm': cargando },
                ]"
            >
                <MiniItem
                    v-for="(item, i) in filtrado"
                    :key="i"
                    :item="{ ...item, ...parche }"
                />
            </div>
        </div>
    </div>
</template>

<script>
import XIcon from '../svg/XIcon.vue';
import axios from 'axios';

import Cargando from '../Cargando.vue';
import MiniItem from './MiniItem.vue';

export default {
    name: 'BuscadorMain',
    components: { MiniItem, Cargando, XIcon },
    data() {
        return {
            items: [],
            filtrado: [],
            parche: {
                numerosComprados: '132',
                valoracion: '3.5',
                fechaSorteo: new Date('2021-10-30T18:00:00-0400'),
                precioBoleto: 5000,
            },
            filtros: {
                tipo: '',
                precioBoleto: '',
                comuna: '',
                wc: '',
                estacionamiento: '',
                dormitorio: '',
                piso: '',
                mascotas: '',
                piscina: '',
                edificio: '',
                lavanderia: '',
                eventos: '',
                marca: '',
                transmision: '',
                combustible: '',
                year: '',
                cilindrada: '',
                abs: '',
                airbag: '',
                ac: '',
                alarma: '',
                vidriosElectricos: '',
            },
            selects: {
                tipos: {
                    Casa: 'Casa',
                    Wheels: 'Vehículo',
                },
                precios: [5000, 20000],
                comunas: [],
                transmisiones: ['Automática', 'Manual'],
                combustibles: [
                    'Bencina',
                    'Diesel',
                    'Eléctrico',
                    'Gas',
                    'Híbrido',
                    'Otro',
                ],
            },
            cargando: true,
        };
    },
    created() {
        axios('http://localhost:3000/api/items/todo')
            .then((res) => {
                this.filtrado = this.items = res.data;
                this.cargando = false;
            })
            .catch((err) => console.error(err));

        axios('https://apis.digital.gob.cl/dpa/comunas').then(
            (res) => (this.comunas = res.data.map((comuna) => comuna.nombre))
        );
    },
    methods: {
        filtrar() {
            this.cargando = true;

            let items = this.items;

            for (const [campo, valor] of Object.entries(this.filtros)) {
                if (valor) {
                    items = items.filter((item) => {
                        if (item[campo] || this.parche[campo]) {
                            const compara = item[campo]
                                ? item[campo]
                                : this.parche[campo];

                            switch (typeof valor) {
                                case 'string':
                                    return compara
                                        .toLowerCase()
                                        .includes(valor.toLowerCase());

                                case 'number':
                                    return compara >= valor;

                                default:
                                    return compara === valor;
                            }
                        } else {
                            return false;
                        }
                    });
                }
            }

            this.filtrado = items;
            this.cargando = false;
        },
        reset(campo) {
            this.filtros[campo] = '';
            this.filtrar();
        },
        formatPrecio(n) {
            let precio = String(n);
            let formateado = '';

            while (precio.length > 0) {
                formateado =
                    (precio.length > 3 ? '.' : '$') +
                    precio.slice(-3) +
                    formateado;
                precio = precio.slice(0, -3);
            }

            return formateado;
        },
    },
};
</script>
