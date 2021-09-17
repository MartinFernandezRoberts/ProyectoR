<template>
    <Cargando v-if="cargando" />

    <div v-else>
        <div id="cabecera" class="px-8 py-4 flex justify-between items-center">
            <h3 class="font-bold text-2xl">{{ item.titulo }}</h3>

            <div class="flex items-center font-bold text-dorado space-x-1">
                <RelojArenaIcon class="h-16" />

                <TiempoRestante :tiempoRestante="tiempoRestante" />
            </div>

            <ParticiparIcon class="h-16 text-3xs text-rojo" />
        </div>

        <div id="cuerpo" class="flex">
            <div
                id="info"
                class="
                    w-2/5
                    py-1
                    lg:py-7
                    bg-claro
                    text-lg
                    font-bold
                    space-y-1
                    hidden
                    md:block
                "
            >
                <ul class="space-y-1">
                    <li v-if="item.comuna" class="flex items-center space-x-1">
                        <CirculoIcon class="px-3 w-12 text-gris" />

                        <p class="text-sm">Sector {{ item.comuna }}</p>
                    </li>
                </ul>

                <ul v-if="item.tipo === 'Casa'" class="space-y-1">
                    <li class="flex items-center space-x-1">
                        <AreaIcon class="w-12 text-gris" />

                        <div>
                            <p class="text-sm leading-tight">
                                {{ item.item.area }} m<sup>2</sup> total
                            </p>

                            <p
                                v-if="item.item.construido"
                                class="text-base font-light leading-tight"
                            >
                                {{ item.item.construido }} m<sup>2</sup>
                                construidos
                            </p>
                        </div>
                    </li>

                    <li
                        v-if="item.item.dormitorio"
                        class="flex items-center space-x-1"
                    >
                        <DormitoriosIcon class="w-12 text-gris" />

                        <p class="text-sm">
                            {{ item.item.dormitorio }} dormitorios
                        </p>
                    </li>

                    <li v-if="item.item.wc" class="flex items-center space-x-1">
                        <TinaIcon class="w-12 text-gris" />

                        <p class="text-sm">{{ item.item.wc }} baños</p>
                    </li>

                    <li
                        v-if="item.item.piso"
                        class="flex items-center space-x-1"
                    >
                        <CirculoIcon class="px-3 w-12 text-gris" />

                        <p class="text-sm">{{ item.item.piso }} pisos</p>
                    </li>

                    <li
                        v-if="item.item.estacionamiento"
                        class="flex items-center space-x-1"
                    >
                        <CocheraIcon class="w-12 text-gris" />

                        <p class="text-sm">Estacionamiento</p>
                    </li>

                    <li
                        v-if="item.item.bodega"
                        class="flex items-center space-x-1"
                    >
                        <CirculoIcon class="px-3 w-12 text-gris" />

                        <p class="text-sm">Bodega</p>
                    </li>

                    <li
                        v-if="item.item.orientacion"
                        class="flex items-center space-x-1"
                    >
                        <CirculoIcon class="px-3 w-12 text-gris" />

                        <p class="text-sm">
                            Mirando al {{ item.item.orientacion }}
                        </p>
                    </li>

                    <li
                        v-if="item.item.gastosComunes"
                        class="flex items-center space-x-1"
                    >
                        <CirculoIcon class="px-3 w-12 text-gris" />

                        <p class="text-sm">
                            {{ formatPrecio(item.item.gastosComunes) }} en
                            gastos comunes
                        </p>
                    </li>

                    <li
                        v-if="item.item.mascotas"
                        class="flex items-center space-x-1"
                    >
                        <MascotasIcon class="w-12 text-gris" />

                        <p class="text-sm">Mascotas</p>
                    </li>

                    <li
                        v-if="item.item.calefaccion"
                        class="flex items-center space-x-1"
                    >
                        <CirculoIcon class="px-3 w-12 text-gris" />

                        <p class="text-sm">Calefacción</p>
                    </li>

                    <li
                        v-if="item.item.cocina"
                        class="flex items-center space-x-1"
                    >
                        <CirculoIcon class="px-3 w-12 text-gris" />

                        <p class="text-sm">Cocina</p>
                    </li>

                    <li
                        v-if="item.item.terraza"
                        class="flex items-center space-x-1"
                    >
                        <CirculoIcon class="px-3 w-12 text-gris" />

                        <p class="text-sm">Terraza</p>
                    </li>

                    <li
                        v-if="item.item.balcon"
                        class="flex items-center space-x-1"
                    >
                        <CirculoIcon class="px-3 w-12 text-gris" />

                        <p class="text-sm">Balcón</p>
                    </li>

                    <li
                        v-if="item.item.piscina"
                        class="flex items-center space-x-1"
                    >
                        <CirculoIcon class="px-3 w-12 text-gris" />

                        <p class="text-sm">Piscina</p>
                    </li>

                    <li
                        v-if="item.item.quincho"
                        class="flex items-center space-x-1"
                    >
                        <CirculoIcon class="px-3 w-12 text-gris" />

                        <p class="text-sm">Quincho</p>
                    </li>

                    <li
                        v-if="item.item.lavanderiaE"
                        class="flex items-center space-x-1"
                    >
                        <CirculoIcon class="px-3 w-12 text-gris" />

                        <p class="text-sm">Lavandería</p>
                    </li>

                    <li
                        v-if="item.item.eventosE"
                        class="flex items-center space-x-1"
                    >
                        <CirculoIcon class="px-3 w-12 text-gris" />

                        <p class="text-sm">Eventos</p>
                    </li>
                </ul>

                <ul v-if="item.tipo === 'Wheels'" class="space-y-1">
                    <li
                        v-if="item.item.marca"
                        class="flex items-center space-x-1"
                    >
                        <CirculoIcon class="px-3 w-12 text-gris" />

                        <p class="text-sm">{{ item.item.marca }}</p>
                    </li>

                    <li
                        v-if="item.item.transmision"
                        class="flex items-center space-x-1"
                    >
                        <CirculoIcon class="px-3 w-12 text-gris" />

                        <p class="text-sm">
                            Transmisión {{ item.item.transmision }}
                        </p>
                    </li>

                    <li
                        v-if="item.item.combustible"
                        class="flex items-center space-x-1"
                    >
                        <CirculoIcon class="px-3 w-12 text-gris" />

                        <p class="text-sm">
                            Combustible {{ item.item.combustible }}
                        </p>
                    </li>

                    <li
                        v-if="item.item.categoria"
                        class="flex items-center space-x-1"
                    >
                        <CirculoIcon class="px-3 w-12 text-gris" />

                        <p class="text-sm">{{ item.item.categoria }}</p>
                    </li>

                    <li
                        v-if="item.item.year"
                        class="flex items-center space-x-1"
                    >
                        <CirculoIcon class="px-3 w-12 text-gris" />

                        <p class="text-sm">Año {{ item.item.year }}</p>
                    </li>

                    <li v-if="item.item.km" class="flex items-center space-x-1">
                        <CirculoIcon class="px-3 w-12 text-gris" />

                        <p class="text-sm">{{ item.item.km }} km</p>
                    </li>

                    <li
                        v-if="item.item.cilindrada"
                        class="flex items-center space-x-1"
                    >
                        <CirculoIcon class="px-3 w-12 text-gris" />

                        <p class="text-sm">
                            Motor {{ item.item.cilindrada }} cc
                        </p>
                    </li>

                    <li
                        v-if="item.item.color"
                        class="flex items-center space-x-1"
                    >
                        <CirculoIcon class="px-3 w-12 text-gris" />

                        <p class="text-sm">Color {{ item.item.color }}</p>
                    </li>
                </ul>
            </div>

            <Slideshow
                class="
                    w-4/5
                    mx-auto
                    md:w-3/5
                    justify-center
                    md:aspect-w-5 md:aspect-h-2
                "
                :imagenes="item.imagenes"
            />
        </div>

        <div id="pie" class="px-12 py-6">
            <p>{{ item.descripcion }}</p>
        </div>
        <div
            id="infoMovile"
            class="
                w-full
                py-1
                lg:py-7
                bg-claro
                text-lg
                font-bold
                space-y-1
                md:hidden
            "
        >
            <ul class="space-y-1">
                <li v-if="item.comuna" class="flex items-center space-x-1">
                    <CirculoIcon class="px-3 w-12 text-gris" />

                    <p class="text-sm">Sector {{ item.comuna }}</p>
                </li>
            </ul>

            <ul v-if="item.tipo === 'Casa'" class="space-y-1">
                <li class="flex items-center space-x-1">
                    <AreaIcon class="w-12 text-gris" />

                    <div>
                        <p class="text-sm leading-tight">
                            {{ item.item.area }} m<sup>2</sup> total
                        </p>

                        <p
                            v-if="item.item.construido"
                            class="text-base font-light leading-tight"
                        >
                            {{ item.item.construido }} m<sup>2</sup>
                            construidos
                        </p>
                    </div>
                </li>

                <li
                    v-if="item.item.dormitorio"
                    class="flex items-center space-x-1"
                >
                    <DormitoriosIcon class="w-12 text-gris" />

                    <p class="text-sm">
                        {{ item.item.dormitorio }} dormitorios
                    </p>
                </li>

                <li v-if="item.item.wc" class="flex items-center space-x-1">
                    <TinaIcon class="w-12 text-gris" />

                    <p class="text-sm">{{ item.item.wc }} baños</p>
                </li>

                <li v-if="item.item.piso" class="flex items-center space-x-1">
                    <CirculoIcon class="px-3 w-12 text-gris" />

                    <p class="text-sm">{{ item.item.piso }} pisos</p>
                </li>

                <li
                    v-if="item.item.estacionamiento"
                    class="flex items-center space-x-1"
                >
                    <CocheraIcon class="w-12 text-gris" />

                    <p class="text-sm">Estacionamiento</p>
                </li>

                <li v-if="item.item.bodega" class="flex items-center space-x-1">
                    <CirculoIcon class="px-3 w-12 text-gris" />

                    <p class="text-sm">Bodega</p>
                </li>

                <li
                    v-if="item.item.orientacion"
                    class="flex items-center space-x-1"
                >
                    <CirculoIcon class="px-3 w-12 text-gris" />

                    <p class="text-sm">
                        Mirando al {{ item.item.orientacion }}
                    </p>
                </li>

                <li
                    v-if="item.item.gastosComunes"
                    class="flex items-center space-x-1"
                >
                    <CirculoIcon class="px-3 w-12 text-gris" />

                    <p class="text-sm">
                        {{ formatPrecio(item.item.gastosComunes) }} en gastos
                        comunes
                    </p>
                </li>

                <li
                    v-if="item.item.mascotas"
                    class="flex items-center space-x-1"
                >
                    <MascotasIcon class="w-12 text-gris" />

                    <p class="text-sm">Mascotas</p>
                </li>

                <li
                    v-if="item.item.calefaccion"
                    class="flex items-center space-x-1"
                >
                    <CirculoIcon class="px-3 w-12 text-gris" />

                    <p class="text-sm">Calefacción</p>
                </li>

                <li v-if="item.item.cocina" class="flex items-center space-x-1">
                    <CirculoIcon class="px-3 w-12 text-gris" />

                    <p class="text-sm">Cocina</p>
                </li>

                <li
                    v-if="item.item.terraza"
                    class="flex items-center space-x-1"
                >
                    <CirculoIcon class="px-3 w-12 text-gris" />

                    <p class="text-sm">Terraza</p>
                </li>

                <li v-if="item.item.balcon" class="flex items-center space-x-1">
                    <CirculoIcon class="px-3 w-12 text-gris" />

                    <p class="text-sm">Balcón</p>
                </li>

                <li
                    v-if="item.item.piscina"
                    class="flex items-center space-x-1"
                >
                    <CirculoIcon class="px-3 w-12 text-gris" />

                    <p class="text-sm">Piscina</p>
                </li>

                <li
                    v-if="item.item.quincho"
                    class="flex items-center space-x-1"
                >
                    <CirculoIcon class="px-3 w-12 text-gris" />

                    <p class="text-sm">Quincho</p>
                </li>

                <li
                    v-if="item.item.lavanderiaE"
                    class="flex items-center space-x-1"
                >
                    <CirculoIcon class="px-3 w-12 text-gris" />

                    <p class="text-sm">Lavandería</p>
                </li>

                <li
                    v-if="item.item.eventosE"
                    class="flex items-center space-x-1"
                >
                    <CirculoIcon class="px-3 w-12 text-gris" />

                    <p class="text-sm">Eventos</p>
                </li>
            </ul>

            <ul v-if="item.tipo === 'Wheels'" class="space-y-1">
                <li v-if="item.item.marca" class="flex items-center space-x-1">
                    <CirculoIcon class="px-3 w-12 text-gris" />

                    <p class="text-sm">{{ item.item.marca }}</p>
                </li>

                <li
                    v-if="item.item.transmision"
                    class="flex items-center space-x-1"
                >
                    <CirculoIcon class="px-3 w-12 text-gris" />

                    <p class="text-sm">
                        Transmisión {{ item.item.transmision }}
                    </p>
                </li>

                <li
                    v-if="item.item.combustible"
                    class="flex items-center space-x-1"
                >
                    <CirculoIcon class="px-3 w-12 text-gris" />

                    <p class="text-sm">
                        Combustible {{ item.item.combustible }}
                    </p>
                </li>

                <li
                    v-if="item.item.categoria"
                    class="flex items-center space-x-1"
                >
                    <CirculoIcon class="px-3 w-12 text-gris" />

                    <p class="text-sm">{{ item.item.categoria }}</p>
                </li>

                <li v-if="item.item.year" class="flex items-center space-x-1">
                    <CirculoIcon class="px-3 w-12 text-gris" />

                    <p class="text-sm">Año {{ item.item.year }}</p>
                </li>

                <li v-if="item.item.km" class="flex items-center space-x-1">
                    <CirculoIcon class="px-3 w-12 text-gris" />

                    <p class="text-sm">{{ item.item.km }} km</p>
                </li>

                <li
                    v-if="item.item.cilindrada"
                    class="flex items-center space-x-1"
                >
                    <CirculoIcon class="px-3 w-12 text-gris" />

                    <p class="text-sm">Motor {{ item.item.cilindrada }} cc</p>
                </li>

                <li v-if="item.item.color" class="flex items-center space-x-1">
                    <CirculoIcon class="px-3 w-12 text-gris" />

                    <p class="text-sm">Color {{ item.item.color }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

import Cargando from '../Cargando.vue';
import Slideshow from './Slideshow.vue';
import TiempoRestante from '../buscador/TiempoRestante.vue';
import MascotasIcon from '../svg/MascotasIcon.vue';
import CirculoIcon from '../svg/CirculoIcon.vue';
import CocheraIcon from '../svg/CocheraIcon.vue';
import TinaIcon from '../svg/TinaIcon.vue';
import DormitoriosIcon from '../svg/DormitoriosIcon.vue';
import AreaIcon from '../svg/AreaIcon.vue';
import ParticiparIcon from '../svg/ParticiparIcon.vue';
import RelojArenaIcon from '../svg/RelojArenaIcon.vue';

export default {
    name: 'DetalleItem',
    components: {
        RelojArenaIcon,
        ParticiparIcon,
        AreaIcon,
        DormitoriosIcon,
        TinaIcon,
        CocheraIcon,
        CirculoIcon,
        MascotasIcon,
        Slideshow,
        TiempoRestante,
        Cargando,
    },
    emits: ['cerrar'],
    data() {
        return {
            item: {},
            ahora: new Date().getTime(),
            cargando: true,
        };
    },
    computed: {
        tiempoRestante() {
            const tiempo =
                new Date(
                    this.item.fechaSorteo || '2021-10-30T18:00:00-0400'
                ).getTime() - this.ahora;

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
    },
    created() {
        axios(this.urlDev(`api/items/${this.$route.params.id}`))
            .then((res) => {
                this.item = res.data;
                this.cargando = false;
            })
            .catch((err) => console.error(err));

        setInterval(() => {
            this.ahora = new Date().getTime();
        }, 1000);
    },
    methods: {
        urlDev(path) {
            return 'http://localhost:3000/' + path;
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
