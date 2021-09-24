<template>
    <section
        id="destacadas"
        class="p-8 flex flex-col justify-center items-center lg:my-2"
    >
        <h2 class="mb-6 text-3xl font-bold lg:mb-2">Sorteos destacados</h2>

        <Cargando v-show="cargando" class="mb-6 h-2/4" />

        <div v-show="!cargando" class="mb-6 flex justify-center lg:space-x-8">
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
                    hidden
                    lg:block
                "
                @click="correrCarrusel(-3)"
            />
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
                    hidden
                    md:block
                    lg:hidden
                "
                @click="correrCarrusel(-2)"
            />
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
                    md:hidden
                "
                @click="correrCarrusel(-1)"
            />

            <ul
                class="
                    grid grid-cols-1
                    md:grid-cols-2 md:gap-6
                    lg:gap-10 lg:grid-cols-3
                "
            >
                <!-- movil -->
                <li
                    v-for="destacado in destacados.slice(
                        sliceStart,
                        sliceStart + 1
                    )"
                    :key="destacado._id"
                    class="border-6 border-claro rounded-lg md:hidden"
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
                        :src="urlDev(destacado.imagenes[0])"
                        alt="imagen destacado"
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
                                text-sm text-center text-gris
                                lg:text-lg
                            "
                        >
                            {{ destacados[sliceStart].titulo }}
                        </h3>

                        <InfoCasa
                            v-if="destacado.tipo === 'Casa'"
                            :casa="destacado.item"
                        />

                        <InfoWheels
                            v-else-if="destacado.tipo === 'Wheels'"
                            :wheels="destacado.item"
                        />
                    </div>
                </li>
                <!-- MD -->
                <li
                    v-for="destacado in destacados.slice(
                        sliceStart,
                        sliceStart + 2
                    )"
                    :key="destacado._id"
                    class="
                        border-6 border-claro
                        rounded-lg
                        hidden
                        md:block
                        lg:hidden
                    "
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
                        :src="urlDev(destacado.imagenes[0])"
                        alt="imagen destacado"
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
                            {{ destacado.titulo }}
                        </h3>

                        <InfoCasa
                            v-if="destacado.tipo === 'Casa'"
                            :casa="destacado.item"
                        />

                        <InfoWheels
                            v-else-if="destacado.tipo === 'Wheels'"
                            :wheels="destacado.item"
                        />
                    </div>
                </li>
                <!--lg -->
                <li
                    v-for="destacado in destacados.slice(
                        sliceStart,
                        sliceStart + 3
                    )"
                    :key="destacado._id"
                    class="border-6 border-claro rounded-lg hidden lg:block"
                >
                    <div
                        class="
                            px-2
                            py-3
                            flex
                            justify-around
                            items-center
                            uppercase
                            lg:py-0
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
                        :src="urlDev(destacado.imagenes[0])"
                        alt="imagen destacado"
                        class="w-80 h-44 object-cover"
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
                            {{ destacado.titulo }}
                        </h3>

                        <InfoCasa
                            v-if="destacado.tipo === 'Casa'"
                            :casa="destacado.item"
                        />

                        <InfoWheels
                            v-else-if="destacado.tipo === 'Wheels'"
                            :wheels="destacado.item"
                        />
                    </div>
                </li>
            </ul>
            <!--movil -->
            <FlechitaIcon
                v-show="sliceStart < destLength - 1"
                class="
                    w-6
                    text-dorado
                    cursor-pointer
                    hover:text-anaranjado
                    transition-colors
                    duration-200
                    ease-out
                    md:hidden
                "
                transform="scale(-1,1)"
                @click="correrCarrusel(1)"
            />
            <!--md -->
            <FlechitaIcon
                v-show="sliceStart < destLength - 2"
                class="
                    w-6
                    text-dorado
                    cursor-pointer
                    hover:text-anaranjado
                    transition-colors
                    duration-200
                    ease-out
                    hidden
                    md:block
                    lg:hidden
                "
                transform="scale(-1,1)"
                @click="correrCarrusel(2)"
            />
            <FlechitaIcon
                v-show="sliceStart < destLength - 3"
                class="
                    w-6
                    text-dorado
                    cursor-pointer
                    hover:text-anaranjado
                    transition-colors
                    duration-200
                    ease-out
                    hidden
                    lg:block
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
                text-sm
                font-bold
                text-gris
                hover:bg-anaranjado hover:border-anaranjado hover:text-white
                transition-colors
                duration-200
                ease-out
                lg:text-lg
            "
        >
            También te puede interesar
        </button>
    </section>
</template>

<script>
import axios from 'axios';

import Cargando from '../../Cargando.vue';
import FlechitaIcon from '../../svg/FlechitaIcon.vue';
import ParticiparIcon from '../../svg/ParticiparIcon.vue';
import RelojArenaIcon from '../../svg/RelojArenaIcon.vue';
import InfoCasa from './InfoCasa.vue';
import InfoWheels from './InfoWheels.vue';

export default {
    name: 'ItemsDestacados',
    components: {
        RelojArenaIcon,
        ParticiparIcon,
        FlechitaIcon,
        Cargando,
        InfoCasa,
        InfoWheels,
    },
    data() {
        return {
            cargando: true,
            destacados: [],
            parche: {
                numerosComprados: '132',
                valoracion: '3.5',
            },
            destLength: 0,
            sliceStart: 0,
        };
    },
    methods: {
        urlDev(path) {
            return 'https://rifasapp.cl/' + path;
        },
        async cargarDestacados() {
            axios
                .get(this.urlDev('api/destacados'))
                .then((res) => {
                    this.destacados = res.data;
                    this.destLength = res.data.length;
                    this.cargando = false;
                })
                .catch((err) => console.error(err.message));
        },
        correrCarrusel(n) {
            this.cargando = true;
            this.sliceStart += n;
            this.cargarDestacados();
        },
    },
    created() {
        this.cargarDestacados();
    },
};
</script>
