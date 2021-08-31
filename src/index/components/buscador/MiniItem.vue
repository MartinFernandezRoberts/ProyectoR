<template>
    <div class="border-6 border-claro rounded-lg">
        <div class="px-2 py-3 flex justify-around items-center">
            <div
                class="
                    flex
                    items-center
                    text-2xs
                    font-bold
                    text-dorado
                    space-x-1
                "
            >
                <RelojArenaIcon class="w-6" />

                <div class="w-24">{{ tiempoRestante(item.fechaSorteo) }}</div>
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
    },
    data() {
        return {
            ahora: new Date().getTime(),
        };
    },
    created() {
        setInterval(() => {
            this.ahora = new Date().getTime();
        }, 1000);
    },
    methods: {
        urlDev(path) {
            return 'http://localhost:3000/' + path;
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
