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
                <SelectInput
                    v-model="filtros.tipo"
                    campo="tipo"
                    label="Categoría"
                    :opciones="Object.keys(selects.tipos)"
                    :textos="Object.values(selects.tipos)"
                    @reset="reset('tipo')"
                    @update:modelValue="filtrar"
                />

                <SelectInput
                    v-model="filtros.precioBoleto"
                    campo="precioBoleto"
                    label="Precio boleto"
                    :opciones="selects.precios"
                    :format="formatPrecio"
                    @reset="reset('precioBoleto')"
                    @update:modelValue="filtrar"
                />

                <NormalInput
                    type="text"
                    v-model="filtros.comuna"
                    campo="comuna"
                    label="Comuna"
                    :list="selects.comunas"
                    @reset="reset('comuna')"
                    @update:modelValue="filtrar"
                />

                <div
                    v-if="filtros.tipo === 'Casa'"
                    id="filtrosCasa"
                    class="flex flex-col space-y-3"
                >
                    <NormalInput
                        type="number"
                        v-model="filtros.wc"
                        campo="wc"
                        label="Baños (mín.)"
                        @reset="reset('wc')"
                        @update:modelValue="filtrar"
                    />

                    <NormalInput
                        type="number"
                        v-model="filtros.estacionamiento"
                        campo="estacionamiento"
                        label="Estacionamientos (mín.)"
                        @reset="reset('estacionamiento')"
                        @update:modelValue="filtrar"
                    />

                    <NormalInput
                        type="number"
                        v-model="filtros.dormitorio"
                        campo="dormitorio"
                        label="Dormitorios (mín.)"
                        @reset="reset('dormitorio')"
                        @update:modelValue="filtrar"
                    />

                    <NormalInput
                        type="number"
                        v-model="filtros.piso"
                        campo="piso"
                        label="Pisos (mín.)"
                        @reset="reset('piso')"
                        @update:modelValue="filtrar"
                    />

                    <CheckboxInput
                        v-model="filtros.mascotas"
                        campo="mascotas"
                        label="Apto para mascotas"
                        @update:modelValue="filtrar"
                    />

                    <CheckboxInput
                        v-model="filtros.piscina"
                        campo="piscina"
                        label="Piscina"
                        @update:modelValue="filtrar"
                    />

                    <CheckboxInput
                        v-model="filtros.edificio"
                        campo="edificio"
                        label="Edificio"
                        @update:modelValue="filtrar"
                    />

                    <div
                        v-if="filtros.edificio"
                        id="filtrosEdificio"
                        class="flex flex-col space-y-3"
                    >
                        <CheckboxInput
                            v-model="filtros.lavanderia"
                            campo="lavanderia"
                            label="Lavandería"
                            @update:modelValue="filtrar"
                        />

                        <CheckboxInput
                            v-model="filtros.eventos"
                            campo="eventos"
                            label="Eventos"
                            @update:modelValue="filtrar"
                        />
                    </div>
                </div>

                <div
                    v-if="filtros.tipo === 'Wheels'"
                    id="filtrosWheels"
                    class="flex flex-col space-y-3"
                >
                    <NormalInput
                        type="text"
                        v-model="filtros.marca"
                        campo="marca"
                        label="Marca"
                        @reset="reset('marca')"
                        @update:modelValue="filtrar"
                    />

                    <SelectInput
                        v-model="filtros.transmision"
                        campo="transmision"
                        label="Transmisión"
                        :opciones="selects.transmisiones"
                        @reset="reset('transmision')"
                        @update:modelValue="filtrar"
                    />

                    <SelectInput
                        v-model="filtros.combustible"
                        campo="combustible"
                        label="Combustible"
                        :opciones="selects.combustiblees"
                        @reset="reset('combustible')"
                        @update:modelValue="filtrar"
                    />

                    <NormalInput
                        type="number"
                        v-model="filtros.year"
                        campo="year"
                        label="Año (mín.)"
                        @reset="reset('year')"
                        @update:modelValue="filtrar"
                    />

                    <NormalInput
                        type="number"
                        v-model="filtros.cilindrada"
                        campo="cilindrada"
                        label="Cilindrada (mín.)"
                        @reset="reset('cilindrada')"
                        @update:modelValue="filtrar"
                    />

                    <CheckboxInput
                        v-model="filtros.abs"
                        campo="abs"
                        label="ABS"
                        @update:modelValue="filtrar"
                    />

                    <CheckboxInput
                        v-model="filtros.airbag"
                        campo="airbag"
                        label="Airbag"
                        @update:modelValue="filtrar"
                    />

                    <CheckboxInput
                        v-model="filtros.ac"
                        campo="ac"
                        label="Aire acondicionado"
                        @update:modelValue="filtrar"
                    />

                    <CheckboxInput
                        v-model="filtros.alarma"
                        campo="alarma"
                        label="Alarma"
                        @update:modelValue="filtrar"
                    />

                    <CheckboxInput
                        v-model="filtros.vidriosElectricos"
                        campo="vidriosElectricos"
                        label="Vidrios eléctricos"
                        @update:modelValue="filtrar"
                    />
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
    },
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
