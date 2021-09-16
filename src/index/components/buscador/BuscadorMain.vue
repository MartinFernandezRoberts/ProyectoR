<template>
    <div class="flex-1 flex flex-col lg:flex-row">
        <div
            id="sidebar"
            :class="[
                'self-stretch p-4 flex flex-col bg-white z-10 md:px-6 md:py-12 lg:w-1/4 lg:block',
                modalFiltros ? 'fixed inset-0' : 'hidden',
            ]"
        >
            <div class="mb-12 2xl:mb-7 flex items-end">
                <h2 class="font-bold text-center text-xl leading-tight">
                    Filtros
                </h2>

                <button
                    type="button"
                    class="ml-4 text-sm font-thin text-rojo"
                    @click="resetTodo"
                >
                    Borrar todo
                </button>

                <button
                    type="button"
                    class="ml-auto w-6 lg:hidden"
                    @click="modalFiltros = false"
                >
                    <XIcon />
                </button>
            </div>

            <form
                id="filtros"
                class="flex-1 flex flex-col overflow-auto space-y-4"
            >
                <SelectInput
                    v-model="filtros.info.tipo"
                    campo="tipo"
                    label="Categoría"
                    :opciones="Object.keys(selects.tipos)"
                    :textos="Object.values(selects.tipos)"
                    @reset="reset('info', 'tipo')"
                    @update:modelValue="filtrar"
                />

                <SelectInput
                    v-model="filtros.info.precioBoleto"
                    campo="precioBoleto"
                    label="Precio boleto"
                    :opciones="selects.precios"
                    :format="formatPrecio"
                    @reset="reset('info', 'precioBoleto')"
                    @update:modelValue="filtrar"
                />

                <NormalInput
                    type="text"
                    v-model="filtros.info.comuna"
                    campo="comuna"
                    label="Comuna"
                    :list="selects.comunas"
                    @reset="reset('info', 'comuna')"
                    @update:modelValue="filtrar"
                />

                <div
                    v-if="filtros.info.tipo === 'Casa'"
                    id="filtrosCasa"
                    class="flex flex-col space-y-4"
                >
                    <NormalInput
                        type="number"
                        v-model.number="filtros.casa.wc"
                        campo="wc"
                        label="Baños (mín.)"
                        @reset="reset('casa', 'wc')"
                        @update:modelValue="filtrar"
                    />

                    <NormalInput
                        type="number"
                        v-model.number="filtros.casa.estacionamiento"
                        campo="estacionamiento"
                        label="Estacionamientos (mín.)"
                        @reset="reset('casa', 'estacionamiento')"
                        @update:modelValue="filtrar"
                    />

                    <NormalInput
                        type="number"
                        v-model.number="filtros.casa.dormitorio"
                        campo="dormitorio"
                        label="Dormitorios (mín.)"
                        @reset="reset('casa', 'dormitorio')"
                        @update:modelValue="filtrar"
                    />

                    <NormalInput
                        type="number"
                        v-model.number="filtros.casa.piso"
                        campo="piso"
                        label="Pisos (mín.)"
                        @reset="reset('casa', 'piso')"
                        @update:modelValue="filtrar"
                    />

                    <div id="checkCasa" class="pt-2 space-y-4">
                        <CheckboxInput
                            v-model="filtros.casa.mascotas"
                            campo="mascotas"
                            label="Apto para mascotas"
                            @update:modelValue="filtrar"
                        />

                        <CheckboxInput
                            v-model="filtros.casa.piscina"
                            campo="piscina"
                            label="Piscina"
                            @update:modelValue="filtrar"
                        />

                        <CheckboxInput
                            v-model="filtros.casa.edificio"
                            campo="edificio"
                            label="Edificio"
                            @update:modelValue="filtrar"
                        />
                    </div>

                    <div
                        v-if="filtros.casa.edificio"
                        id="filtrosEdificio"
                        class="flex flex-col space-y-4"
                    >
                        <CheckboxInput
                            v-model="filtros.casa.lavanderia"
                            campo="lavanderia"
                            label="Lavandería"
                            @update:modelValue="filtrar"
                        />

                        <CheckboxInput
                            v-model="filtros.casa.eventos"
                            campo="eventos"
                            label="Eventos"
                            @update:modelValue="filtrar"
                        />
                    </div>
                </div>

                <div
                    v-if="filtros.info.tipo === 'Wheels'"
                    id="filtrosWheels"
                    class="flex flex-col space-y-4"
                >
                    <NormalInput
                        type="text"
                        v-model="filtros.wheels.marca"
                        campo="marca"
                        label="Marca"
                        @reset="reset('wheels', 'marca')"
                        @update:modelValue="filtrar"
                    />

                    <SelectInput
                        v-model="filtros.wheels.transmision"
                        campo="transmision"
                        label="Transmisión"
                        :opciones="selects.transmisiones"
                        @reset="reset('wheels', 'transmision')"
                        @update:modelValue="filtrar"
                    />

                    <SelectInput
                        v-model="filtros.wheels.combustible"
                        campo="combustible"
                        label="Combustible"
                        :opciones="selects.combustibles"
                        @reset="reset('wheels', 'combustible')"
                        @update:modelValue="filtrar"
                    />

                    <NormalInput
                        type="number"
                        v-model.number="filtros.wheels.year"
                        campo="year"
                        label="Año (mín.)"
                        @reset="reset('wheels', 'year')"
                        @update:modelValue="filtrar"
                    />

                    <NormalInput
                        type="number"
                        v-model.number="filtros.wheels.cilindrada"
                        campo="cilindrada"
                        label="Cilindrada (mín.)"
                        @reset="reset('wheels', 'cilindrada')"
                        @update:modelValue="filtrar"
                    />

                    <div id="checkWheels" class="pt-2 space-y-4">
                        <CheckboxInput
                            v-model="filtros.wheels.abs"
                            campo="abs"
                            label="ABS"
                            @update:modelValue="filtrar"
                        />

                        <CheckboxInput
                            v-model="filtros.wheels.airbag"
                            campo="airbag"
                            label="Airbag"
                            @update:modelValue="filtrar"
                        />

                        <CheckboxInput
                            v-model="filtros.wheels.ac"
                            campo="ac"
                            label="Aire acondicionado"
                            @update:modelValue="filtrar"
                        />

                        <CheckboxInput
                            v-model="filtros.wheels.alarma"
                            campo="alarma"
                            label="Alarma"
                            @update:modelValue="filtrar"
                        />

                        <CheckboxInput
                            v-model="filtros.wheels.vidriosElectricos"
                            campo="vidriosElectricos"
                            label="Vidrios eléctricos"
                            @update:modelValue="filtrar"
                        />
                    </div>
                </div>
            </form>

            <button
                class="
                    mt-4
                    py-2
                    rounded-lg
                    bg-anaranjado
                    text-white text-center
                    font-thin
                    lg:hidden
                "
                @click="modalFiltros = false"
            >
                Listo
            </button>
        </div>

        <div id="contenido" class="px-4 lg:h-auto 2xl:px-16 lg:w-3/4">
            <h1 class="text-xl text-center font-bold my-6">Sorteos</h1>

            <div class="flex">
                <button
                    type="button"
                    class="
                        px-2
                        py-1
                        flex
                        items-center
                        border
                        rounded-lg
                        border-anaranjado
                        text-anaranjado text-sm
                        font-thin
                        space-x-2
                        lg:hidden
                    "
                    @click="modalFiltros = true"
                >
                    <FadersIcon class="w-4" />

                    <p>Filtrar</p>
                </button>

                <button
                    type="button"
                    class="
                        ml-auto
                        flex
                        items-center
                        text-gray-400 text-sm
                        font-thin
                        space-x-1
                    "
                >
                    <BarrasIcon class="w-4" />

                    <select
                        v-model="orden"
                        class="cursor-pointer"
                        @change="ordenar"
                    >
                        <option
                            v-for="(opcion, i) in Object.keys(selects.ordenes)"
                            :key="i"
                            class="text-gris"
                            :value="opcion"
                        >
                            {{ selects.ordenes[opcion] }}
                        </option>
                    </select>
                </button>
            </div>

            <Cargando v-show="cargando" class="absolute inset-0 z-10" />

            <div
                :class="[
                    'pt-4 pb-12 grid gap-4 auto-rows-max grid-cols-1 sm:grid-cols-2 lg:pt-8 xl:pb-16 xl:grid-cols-3 2xl:pb-24',
                    { 'opacity-20 filter blur-sm': cargando },
                ]"
            >
                <MiniItem
                    v-for="(item, i) in filtrado"
                    :key="i"
                    class="cursor-pointer"
                    :item="{ ...item, ...parche }"
                    :tiempoRestante="tiempoRestante(parche.fechaSorteo)"
                    @click="
                        itemActual = item;
                        modal = true;
                    "
                />
            </div>

            <DetalleItem
                v-if="modal"
                :item="itemActual"
                :tiempoRestante="tiempoRestante(parche.fechaSorteo)"
                @cerrar="modal = false"
            />
        </div>
    </div>
</template>

<script>
import BarrasIcon from '../svg/BarrasIcon.vue';
import FadersIcon from '../svg/FadersIcon.vue';
import XIcon from '../svg/XIcon.vue';
import axios from 'axios';

import SelectInput from './SelectInput.vue';
import NormalInput from './NormalInput.vue';
import CheckboxInput from './CheckboxInput.vue';
import DetalleItem from '../detalle/DetalleItem.vue';
import Cargando from '../Cargando.vue';
import MiniItem from './MiniItem.vue';

export default {
    name: 'BuscadorMain',
    components: {
        MiniItem,
        Cargando,
        DetalleItem,
        SelectInput,
        NormalInput,
        CheckboxInput,
        XIcon,
        FadersIcon,
        BarrasIcon,
    },
    data() {
        return {
            items: [],
            filtrado: [],
            itemActual: {},
            modal: false,
            modalFiltros: false,
            orden: 'nuevo',
            parche: {
                numerosComprados: 132,
                fechaSorteo: new Date('2021-10-30T18:00:00-0400'),
                precioBoleto: 5000,
            },
            filtros: {
                info: {
                    tipo: '',
                    precioBoleto: '',
                    comuna: '',
                },
                casa: {
                    wc: '',
                    estacionamiento: '',
                    dormitorio: '',
                    piso: '',
                    mascotas: '',
                    piscina: '',
                    edificio: '',
                    lavanderia: '',
                    eventos: '',
                },
                wheels: {
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
                ordenes: {
                    // sorteo: 'Sorteo más próximo',
                    nuevo: 'Más nuevo',
                    antiguo: 'Más antiguo',
                },
            },
            cargando: true,
            ahora: new Date().getTime(),
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
            (res) =>
                (this.selects.comunas = res.data.map((comuna) => comuna.nombre))
        );

        setInterval(() => {
            this.ahora = new Date().getTime();
        }, 1000);
    },
    methods: {
        filtrar() {
            this.cargando = true;

            let items = this.items;

            for (const [campo, valor] of Object.entries(this.filtros.info)) {
                if (valor) {
                    items = items.filter((item) => {
                        if (item[campo] || this.parche[campo]) {
                            const compara = item[campo]
                                ? item[campo]
                                : this.parche[campo];

                            switch (typeof valor) {
                                case 'string':
                                    return String(compara)
                                        .toLowerCase()
                                        .includes(valor.toLowerCase());

                                case 'number':
                                    return Number(compara) >= valor;

                                default:
                                    return compara === valor;
                            }
                        } else {
                            return false;
                        }
                    });
                }
            }

            let tipo = this.filtros.info.tipo.toLowerCase();

            if (tipo) {
                for (const [campo, valor] of Object.entries(
                    this.filtros[tipo]
                )) {
                    if (valor) {
                        items = items.filter((item) => {
                            if (item.item[campo]) {
                                switch (typeof valor) {
                                    case 'string':
                                        return item.item[campo]
                                            .toLowerCase()
                                            .includes(valor.toLowerCase());

                                    case 'number':
                                        return item.item[campo] >= valor;

                                    default:
                                        return item.item[campo] === valor;
                                }
                            } else {
                                return false;
                            }
                        });
                    }
                }
            }

            this.filtrado = items;
            this.cargando = false;
        },
        reset(grupo, campo) {
            this.filtros[grupo][campo] = '';

            if (campo === 'tipo') {
                this.filtros.casa = this.filtros.wheels = {};
            }

            this.filtrar();
        },
        resetTodo() {
            for (const campo in this.filtros.info) {
                this.filtros.info[campo] = '';
            }

            this.filtros.casa = this.filtros.wheels = {};

            this.filtrar();
        },
        ordenar() {
            let compara;

            switch (this.orden) {
                /* case 'sorteo':
                    compara = (a, b) => {a.fechaSorteo - b.fechaSorteo};
                    break; */

                case 'nuevo':
                    compara = (a, b) =>
                        Date.parse(b.fecha) - Date.parse(a.fecha);
                    break;

                case 'antiguo':
                    compara = (a, b) =>
                        Date.parse(a.fecha) - Date.parse(b.fecha);
                    break;

                default:
                    return 1;
            }

            this.items.sort(compara);
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
        tiempoRestante(fecha) {
            const tiempo = new Date(fecha).getTime() - this.ahora;

            const dias = Math.floor(tiempo / (1000 * 60 * 60 * 24));
            const horas = Math.floor(
                (tiempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutos = Math.floor(
                (tiempo % (1000 * 60 * 60)) / (1000 * 60)
            );
            const segundos = Math.floor((tiempo % (1000 * 60)) / 1000);

            return {
                tiempo,
                dias,
                horas,
                minutos,
                segundos,
            };
        },
        pad(n) {
            return ('0' + n).slice(-2);
        },
    },
};
</script>
