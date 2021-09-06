<template>
    <div class="border-6 border-claro rounded-lg">
        <div class="px-2 py-3 justify-around items-center md:flex">
            <div
                class="
                    flex
                    items-center
                    text-2xs
                    font-bold
                    text-dorado
                    space-x-1
                    w-full
                    mx-auto
                    justify-center
                "
            >
                <RelojArenaIcon class="w-6" />

                <div class="w-24">{{ tiempoRestante }}</div>
            </div>

            <div class="text-dorado">
                <p class="mb-1 text-3xs font-bold text-center uppercase">
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
                        v-for="(digit, i) in item.numerosComprados.padStart(
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
        </div>

        <img
            :src="urlDev(item.imagenes[0])"
            alt="imagen item"
            class="h-48 w-full object-cover"
        />

        <div id="info" class="px-7 bg-claro">
            <div
                id="estrellas"
                class="text-lg text-center text-dorado space-x-1"
            >
                <span
                    v-for="n in 5"
                    :key="n"
                    v-html="n <= item.valoracion ? '&starf;' : '&star;'"
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
                {{ item.titulo }}
            </h3>
        </div>
    </div>
</template>

<script>
import RelojArenaIcon from '../svg/RelojArenaIcon.vue';

export default {
    name: 'MiniItem',
    components: { RelojArenaIcon },
    props: {
        item: Object,
        tiempoRestante: String,
    },
    methods: {
        urlDev(path) {
            return 'https://rifasapp.cl/' + path;
        },
    },
};
</script>
