<template>
    <div class="border-6 border-claro rounded-lg shadow">
        <div class="px-4 py-2 flex items-center rounded-t bg-claro">
            <div
                class="
                    flex
                    items-center
                    space-x-1
                    w-full
                    mx-auto
                    text-anaranjado
                "
            >
                <RelojArenaIcon class="h-10" />

                <TiempoRestante
                    class="flex-1"
                    :tiempoRestante="tiempoRestante"
                />
            </div>
        </div>

        <img
            :src="urlDev(item.imagenes[0])"
            alt="imagen item"
            class="h-48 w-full object-cover shadow-inner"
        />

        <div
            class="
                py-1
                flex
                justify-center
                items-center
                bg-amarillo
                text-sm text-white
                space-x-4
            "
        >
            <div class="flex font-bold">
                <span
                    v-for="(digit, i) in String(item.numerosComprados)"
                    :key="i"
                    class="flex-1 text-center w-5"
                >
                    {{ digit }}
                </span>
            </div>

            <p>Números vendidos</p>
        </div>

        <div id="info" class="px-7 py-4 bg-claro">
            <h3
                class="
                    p-1.5
                    bg-white
                    border-2 border-dorado
                    rounded-lg
                    text-center
                    font-bold
                "
            >
                {{ item.titulo }}
            </h3>
        </div>
    </div>
</template>

<script>
import TiempoRestante from './TiempoRestante.vue';
import RelojArenaIcon from '../svg/RelojArenaIcon.vue';

export default {
    name: 'MiniItem',
    components: { RelojArenaIcon, TiempoRestante },
    props: {
        item: Object,
        tiempoRestante: Object,
    },
    methods: {
        urlDev(path) {
            return 'https://rifasapp.cl/' + path;
        },
    },
};
</script>
