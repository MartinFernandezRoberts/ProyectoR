<template>
    <section
        id="destacadas"
        class="flex flex-col justify-center items-center overflow-hidden"
    >
        <h2 class="mb-6 text-3xl font-bold">Últimas propiedades en sorteo</h2>

        <Cargando v-show="cargando" class="mb-6 h-2/4" />

        <div v-show="!cargando" class="mb-6 flex justify-center space-x-8">
            <FlechitaIcon
                v-show="sliceStart > 0"
                class="
                    w-6
                    text-dorado
                    cursor-pointer
                    hover:text-anaranjado
                    transition-colors
                    duration-200
                    ease-out
                "
                @click="correrCarrusel(-3)"
            />

            <ul class="flex justify-center space-x-10">
                <li
                    v-for="casa in casas"
                    :key="casa._id"
                    class="border-6 border-claro rounded-lg"
                >
                    <div
                        class="
                            px-2
                            py-3
                            flex
                            justify-around
                            items-center
                            uppercase
                        "
                    >
                        <div
                            class="
                                flex
                                items-center
                                text-3xs
                                font-bold
                                text-dorado
                            "
                        >
                            <RelojArenaIcon class="w-12" />

                            <div>Quedan<br />X meses</div>
                        </div>

                        <div class="text-dorado">
                            <p class="mb-1 text-3xs font-bold text-center">
                                Números vendidos
                            </p>

                            <div
                                class="
                                    flex
                                    border-3 border-dorado
                                    rounded-lg
                                    divide-x-3 divide-dorado
                                    text-sm
                                    font-light
                                "
                            >
                                <span
                                    v-for="(
                                        digit, i
                                    ) in parche.numerosComprados.padStart(
                                        4,
                                        '0'
                                    )"
                                    :key="i"
                                    class="flex-1 text-center w-6"
                                >
                                    {{ digit }}
                                </span>
                            </div>
                        </div>

                        <ParticiparIcon class="w-24 text-anaranjado text-3xs" />
                    </div>

                    <img
                        :src="
                            casa.imagenCasa
                                ? casa.imagenCasa[0].url
                                : 'https://i.pinimg.com/originals/b7/af/94/b7af941d973a200a5c553e74357eab14.jpg'
                        "
                        alt="imagen casa"
                        class="w-80 h-60 object-cover"
                    />

                    <div id="info" class="px-7 bg-claro">
                        <div
                            id="estrellas"
                            class="text-lg text-center text-dorado space-x-1"
                        >
                            <span
                                v-for="n in 5"
                                :key="n"
                                v-html="
                                    n <= parche.valoracion
                                        ? '&starf;'
                                        : '&star;'
                                "
                            />
                        </div>

                        <h3
                            class="
                                p-1.5
                                bg-white
                                border-3 border-dorado
                                rounded-lg
                                text-lg text-center text-gris
                            "
                        >
                            {{ casa.tituloCasa }}
                        </h3>

                        <ul class="py-7 text-lg font-bold space-y-1">
                            <li class="flex items-center space-x-1">
                                <div class="w-14 text-gris">
                                    <AreaIcon />
                                </div>

                                <div class="text-dorado">
                                    <p class="leading-tight">
                                        {{ parche.area }} m2 total
                                    </p>

                                    <p
                                        class="
                                            text-base
                                            font-light
                                            leading-tight
                                        "
                                    >
                                        {{ parche.construido }} m2 construidos
                                    </p>
                                </div>
                            </li>

                            <li class="flex items-center space-x-1">
                                <div class="w-14 text-gris">
                                    <DormitoriosIcon />
                                </div>

                                <p class="text-dorado">
                                    {{ parche.dormitorios }} dormitorios
                                </p>
                            </li>

                            <li class="flex items-center space-x-1">
                                <div class="w-14 text-gris">
                                    <TinaIcon />
                                </div>

                                <p class="text-dorado">
                                    {{ parche.baños }} baños
                                </p>
                            </li>

                            <li
                                v-if="parche.estacionamiento"
                                class="flex items-center space-x-1"
                            >
                                <div class="w-14 text-gris">
                                    <CocheraIcon />
                                </div>

                                <p class="text-dorado">estacionamiento</p>
                            </li>

                            <li
                                v-if="parche.mascotas"
                                class="flex items-center space-x-1"
                            >
                                <div class="w-14 text-gris">
                                    <MascotasIcon />
                                </div>

                                <p class="text-dorado">apto mascotas</p>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>

            <FlechitaIcon
                v-show="sliceStart < casasLength - 3"
                class="
                    w-6
                    text-dorado
                    cursor-pointer
                    hover:text-anaranjado
                    transition-colors
                    duration-200
                    ease-out
                "
                transform="scale(-1,1)"
                @click="correrCarrusel(3)"
            />
        </div>

        <button
            type="button"
            class="
                px-6
                py-2
                border-3 border-amarillo
                rounded-lg
                text-lg
                font-bold
                text-gris
                hover:bg-anaranjado hover:border-anaranjado hover:text-white
                transition-colors
                duration-200
                ease-out
            "
        >
            También te puede interesar
        </button>
    </section>
</template>

<script>
import Cargando from '../Cargando.vue';
import FlechitaIcon from '../svg/FlechitaIcon.vue';
import MascotasIcon from '../svg/MascotasIcon.vue';
import CocheraIcon from '../svg/CocheraIcon.vue';
import TinaIcon from '../svg/TinaIcon.vue';
import DormitoriosIcon from '../svg/DormitoriosIcon.vue';
import AreaIcon from '../svg/AreaIcon.vue';
import ParticiparIcon from '../svg/ParticiparIcon.vue';
import RelojArenaIcon from '../svg/RelojArenaIcon.vue';
import CasaService from '../../../panel/components/casa/CasaService';

export default {
    name: 'CasasDestacadas',
    components: {
        RelojArenaIcon,
        ParticiparIcon,
        AreaIcon,
        DormitoriosIcon,
        TinaIcon,
        CocheraIcon,
        MascotasIcon,
        FlechitaIcon,
        Cargando,
    },
    data() {
        return {
            cargando: true,
            casas: [],
            parche: {
                numerosComprados: '132',
                valoracion: '3.5',
                area: '1500',
                construido: '1000',
                baños: '2',
                estacionamiento: '1',
                mascotas: '1',
            },
            sliceStart: 0,
            casasLength: 0,
        };
    },
    methods: {
        compararFecha(a, b) {
            if (a.fechaCasa > b.fechaCasa) {
                return -1;
            } else if (b.fechaCasa > a.fechaCasa) {
                return 1;
            } else {
                return 0;
            }
        },
        async loadCasa() {
            try {
                const desordenado = await CasaService.index();
                this.casasLength = desordenado.length;
                this.casas = desordenado
                    .sort(this.compararFecha)
                    .slice(this.sliceStart, this.sliceStart + 3);
                this.cargando = false;
            } catch (err) {
                console.error(err.message);
            }
        },
        correrCarrusel(n) {
            this.cargando = true;
            this.sliceStart += n;
            this.loadCasa();
        },
    },
    created() {
        this.loadCasa();
    },
};
</script>
