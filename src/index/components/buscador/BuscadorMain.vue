<template>
    <div class="flex-1 flex">
        <div
            id="sidebar"
            class="h-full px-2 w-1/3 py-4 md:px-6 md:py-12 lg:w-1/4"
        >
            <div class="mb-6 2xl:mb-7 flex justify-center items-center">
                <h1
                    class="
                        font-bold
                        text-center text-sm
                        md:text-lg md:mr-10
                        2xl:text-xl
                    "
                >
                    Buscador
                </h1>
            </div>

            <form id="filtros" class="flex flex-col space-y-3">
                <div class="flex flex-col md:space-y-1.5">
                    <label
                        class="font-bold text-2xs md:text-xs lg:text-sm"
                        for="tipo"
                    >
                        Categoría
                    </label>

                    <div class="flex items-center md:space-x-2">
                        <select
                            :class="[
                                'flex-1 py-1.5 border rounded border-amarillo font-light leading-tight text-2xs md:text-xs md:px-4 lg:text-sm 2xl:px-6 2xl:py-2',
                                { 'text-gray-400': !filtros.tipo },
                            ]"
                            id="tipo"
                            v-model="filtros.tipo"
                            @change="filtrar"
                        >
                            <option class="" value="" disabled selected hidden>
                                Categoría
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

                <div class="flex flex-col md:space-y-1.5">
                    <label
                        class="font-bold text-2xs md:text-xs lg:text-sm"
                        for="precioBoleto"
                    >
                        Precio boleto
                    </label>

                    <div class="flex items-center md:space-x-2">
                        <select
                            :class="[
                                'flex-1 py-1.5 border rounded border-amarillo font-light leading-tight text-2xs md:text-xs md:px-4 lg:text-sm 2xl:px-6 2xl:py-2',
                                { 'text-gray-400': !filtros.precioBoleto },
                            ]"
                            id="precioBoleto"
                            v-model="filtros.precioBoleto"
                            @change="filtrar"
                        >
                            <option value="" disabled selected hidden>
                                Precio
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

                <div class="flex flex-col md:space-y-1.5">
                    <label
                        class="font-bold text-2xs md:text-xs lg:text-sm"
                        for="comuna"
                        >Comuna</label
                    >

                    <div class="flex items-center md:space-x-2">
                        <input
                            class="
                                flex-1
                                py-1.5
                                rounded
                                border border-amarillo
                                font-light
                                leading-tight
                                text-2xs
                                w-full
                                px-1.5
                                md:text-xs md:px-4
                                lg:text-sm
                                2xl:px-6 2xl:py-2
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
                    <div class="flex flex-col md:space-y-1.5">
                        <label
                            class="font-bold text-2xs md:text-xs lg:text-sm"
                            for="wc"
                        >
                            Baños (mín.)
                        </label>

                        <div class="flex items-center md:space-x-2">
                            <input
                                class="
                                    flex-1
                                    py-1.5
                                    rounded
                                    border border-amarillo
                                    font-light
                                    leading-tight
                                    w-full
                                    px-1
                                    text-2xs
                                    md:text-xs md:px-4
                                    lg:text-sm
                                    2xl:px-6 2xl:py-2
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

                    <div class="flex flex-col md:space-y-1.5">
                        <label
                            class="font-bold text-2xs md:text-xs lg:text-sm"
                            for="estacionamiento"
                        >
                            Estacionamientos (mín.)
                        </label>

                        <div class="flex items-center md:space-x-2">
                            <input
                                class="
                                    flex-1
                                    py-1.5
                                    rounded
                                    border border-amarillo
                                    font-light
                                    leading-tight
                                    px-1
                                    w-full
                                    text-2xs
                                    md:text-xs md:px-4
                                    lg:text-sm
                                    2xl:px-6 2xl:py-2
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
                        <label
                            class="font-bold text-2xs md:text-xs lg:text-sm"
                            for="dormitorio"
                        >
                            Dormitorios (mín.)
                        </label>

                        <div class="flex items-center space-x-2">
                            <input
                                class="
                                    flex-1
                                    py-1.5
                                    rounded
                                    border border-amarillo
                                    font-light
                                    leading-tight
                                    px-1
                                    w-full
                                    text-2xs
                                    md:text-xs md:px-4
                                    lg:text-sm
                                    2xl:px-6 2xl:py-2
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
                        <label
                            class="font-bold text-2xs md:text-xs lg:text-sm"
                            for="piso"
                        >
                            Pisos (mín.)
                        </label>

                        <div class="flex items-center space-x-2">
                            <input
                                class="
                                    flex-1
                                    py-1.5
                                    rounded
                                    border border-amarillo
                                    font-light
                                    leading-tight
                                    px-1
                                    w-full
                                    text-2xs
                                    md:text-xs md:px-4
                                    lg:text-sm
                                    2xl:px-6 2xl:py-2
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

                    <div class="md:space-x-2">
                        <input
                            class="h-3 w-3 md:h-4 md:w-4"
                            id="mascotas"
                            type="checkbox"
                            v-model="filtros.mascotas"
                            @change="filtrar"
                        />

                        <label
                            class="
                                text-gray-700
                                font-bold
                                mb-2
                                text-2xs
                                md:text-xs
                                lg:text-sm
                            "
                            for="mascotas"
                        >
                            Apto para mascotas
                        </label>
                    </div>

                    <div class="md:space-x-2">
                        <input
                            class="h-3 w-3 md:h-4 md:w-4"
                            id="piscina"
                            type="checkbox"
                            v-model="filtros.piscina"
                            @change="filtrar"
                        />

                        <label
                            class="
                                text-gray-700
                                font-bold
                                mb-2
                                text-2xs
                                md:text-xs
                                lg:text-sm
                            "
                            for="piscina"
                        >
                            Piscina
                        </label>
                    </div>

                    <div class="md:space-x-2">
                        <input
                            class="h-3 w-3 md:h-4 md:w-4"
                            id="edificio"
                            type="checkbox"
                            v-model="filtros.edificio"
                            @change="filtrar"
                        />

                        <label
                            class="
                                text-gray-700
                                font-bold
                                mb-2
                                text-2xs
                                md:text-xs
                                lg:text-sm
                            "
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
                        <div class="md:space-x-2">
                            <input
                                class="h-3 w-3 md:h-4 md:w-4"
                                id="lavanderia"
                                type="checkbox"
                                v-model="filtros.lavanderia"
                                @change="filtrar"
                            />

                            <label
                                class="
                                    text-gray-700
                                    font-bold
                                    mb-2
                                    text-2xs
                                    md:text-xs
                                    lg:text-sm
                                "
                                for="lavanderia"
                            >
                                Lavandería
                            </label>
                        </div>

                        <div class="md:space-x-2">
                            <input
                                class="h-3 w-3 md:h-4 md:w-4"
                                id="eventos"
                                type="checkbox"
                                v-model="filtros.eventos"
                                @change="filtrar"
                            />

                            <label
                                class="
                                    text-gray-700
                                    font-bold
                                    mb-2
                                    text-2xs
                                    md:text-xs
                                    lg:text-sm
                                "
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
                    <div class="flex flex-col md:space-y-1.5">
                        <label
                            class="font-bold text-2xs md:text-xs lg:text-sm"
                            for="marca"
                            >Marca</label
                        >

                        <div class="flex items-center md:space-x-2">
                            <input
                                class="
                                    flex-1
                                    py-1.5
                                    rounded
                                    border border-amarillo
                                    font-light
                                    leading-tight
                                    px-1
                                    w-full
                                    text-2xs
                                    md:text-xs md:px-4
                                    lg:text-sm
                                    2xl:px-6 2xl:py-2
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

                    <div class="flex flex-col md:space-y-1.5">
                        <label
                            class="font-bold text-2xs md:text-xs lg:text-sm"
                            for="transmision"
                        >
                            Transmisión
                        </label>

                        <div class="flex items-center md:space-x-2">
                            <select
                                :class="[
                                    'flex-1 py-1.5 border rounded border-amarillo text-sm font-light leading-tight px-1 w-full text-2xs md:text-xs md:px-4 lg:text-sm 2xl:px-6 2xl:py-2',
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

                    <div class="flex flex-col md:space-y-1.5">
                        <label
                            class="font-bold text-2xs md:text-xs lg:text-sm"
                            for="combustible"
                        >
                            Combustible
                        </label>

                        <div class="flex items-center space-x-2">
                            <select
                                :class="[
                                    'flex-1 py-1.5 border rounded border-amarillo text-sm font-light leading-tight  px-1 w-full text-2xs md:text-xs md:px-4 lg:text-sm 2xl:px-6 2xl:py-2',
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

                    <div class="flex flex-col md:space-y-1.5">
                        <label
                            class="font-bold text-2xs md:text-xs lg:text-sm"
                            for="year"
                        >
                            Año (mín.)
                        </label>

                        <div class="flex items-center space-x-2">
                            <input
                                class="
                                    flex-1
                                    py-1.5
                                    rounded
                                    border border-amarillo
                                    text-sm
                                    font-light
                                    leading-tight
                                    px-1
                                    w-full
                                    text-2xs
                                    md:text-xs md:px-4
                                    lg:text-sm
                                    2xl:px-6 2xl:py-2
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

                    <div class="flex flex-col md:space-y-1.5">
                        <label
                            class="font-bold text-2xs md:text-xs lg:text-sm"
                            for="cilindrada"
                        >
                            Cilindrada (mín.)
                        </label>

                        <div class="flex items-center space-x-2">
                            <input
                                class="
                                    flex-1
                                    py-1.5
                                    rounded
                                    border border-amarillo
                                    text-sm
                                    font-light
                                    leading-tight
                                    px-1
                                    w-full
                                    text-2xs
                                    md:text-xs md:px-4
                                    lg:text-sm
                                    2xl:px-6 2xl:py-2
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

                    <div class="md:space-x-2">
                        <input
                            class="h-3 w-3 md:h-4 md:w-4"
                            id="abs"
                            type="checkbox"
                            v-model="filtros.abs"
                            @change="filtrar"
                        />

                        <label
                            class="
                                text-gray-700
                                font-bold
                                mb-2
                                text-2xs
                                md:text-xs
                                lg:text-sm
                            "
                            for="abs"
                        >
                            ABS
                        </label>
                    </div>

                    <div class="md:space-x-2">
                        <input
                            class="h-3 w-3 md:h-4 md:w-4"
                            id="airbag"
                            type="checkbox"
                            v-model="filtros.airbag"
                            @change="filtrar"
                        />

                        <label
                            class="
                                text-gray-700
                                font-bold
                                mb-2
                                text-2xs
                                md:text-xs
                                lg:text-sm
                            "
                            for="airbag"
                        >
                            Airbag
                        </label>
                    </div>

                    <div class="md:space-x-2">
                        <input
                            class="h-3 w-3 md:h-4 md:w-4"
                            id="ac"
                            type="checkbox"
                            v-model="filtros.ac"
                            @change="filtrar"
                        />

                        <label
                            class="
                                text-gray-700
                                font-bold
                                mb-2
                                text-2xs
                                md:text-xs
                                lg:text-sm
                            "
                            for="ac"
                        >
                            Aire acondicionado
                        </label>
                    </div>

                    <div class="md:space-x-2">
                        <input
                            class="h-3 w-3 md:h-4 md:w-4"
                            id="alarma"
                            type="checkbox"
                            v-model="filtros.alarma"
                            @change="filtrar"
                        />

                        <label
                            class="
                                text-gray-700
                                font-bold
                                mb-2
                                text-2xs
                                md:text-xs
                                lg:text-sm
                            "
                            for="alarma"
                        >
                            Alarma
                        </label>
                    </div>

                    <div class="md:space-x-2">
                        <input
                            class="h-3 w-3 md:h-4 md:w-4"
                            id="vidriosElectricos"
                            type="checkbox"
                            v-model="filtros.vidriosElectricos"
                            @change="filtrar"
                        />

                        <label
                            class="
                                text-gray-700
                                font-bold
                                mb-2
                                text-2xs
                                md:text-xs
                                lg:text-sm
                            "
                            for="vidriosElectricos"
                        >
                            Vidrios eléctricos
                        </label>
                    </div>
                </div>
            </form>
        </div>

        <div
            id="contenido"
            class="
                py-12
                px-6
                h-screen
                lg:h-auto
                2xl:px-24
                w-3/4
                relative
                overflow-auto
            "
        >
            <Cargando v-show="cargando" class="absolute inset-0 z-10" />

            <div
                :class="[
                    'grid gap-4 auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
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
import XIcon from '../svg/XIcon.vue';
import axios from 'axios';

import DetalleItem from '../detalle/DetalleItem.vue';
import Cargando from '../Cargando.vue';
import MiniItem from './MiniItem.vue';

export default {
    name: 'BuscadorMain',
    components: { MiniItem, Cargando, XIcon, DetalleItem },
    data() {
        return {
            items: [],
            filtrado: [],
            itemActual: {},
            modal: false,
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
            (res) => (this.comunas = res.data.map((comuna) => comuna.nombre))
        );

        setInterval(() => {
            this.ahora = new Date().getTime();
        }, 1000);
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

            return tiempo <= 0
                ? '¡En sorteo!'
                : `${this.pad(dias)}d ${this.pad(horas)}h ${this.pad(
                      minutos
                  )}m ${this.pad(segundos)}s`;
        },
        pad(n) {
            return ('0' + n).slice(-2);
        },
    },
};
</script>
