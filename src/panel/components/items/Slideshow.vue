<template>
    <div class="relative">
        <img
            class="w-full h-full object-cover"
            :src="urlDev(imagenes[index])"
            alt=""
        />

        <div
            v-if="imagenes.length > 1"
            class="
                absolute
                inset-0
                flex
                justify-between
                items-center
                text-white
                opacity-20
                hover:opacity-50
                transition-opacity
                duration-200
                ease-out
            "
        >
            <FlechaCirculoIcon
                class="mx-2 w-6 z-10 cursor-pointer"
                transform="scale(-1,1)"
                @click="slide(-1)"
            />

            <div class="self-end pb-1 flex space-x-1">
                <svg
                    v-for="(imagen, i) in imagenes"
                    :key="i"
                    viewBox="0 0 10 10"
                    class="w-3 z-10 cursor-pointer"
                    @click="index = i"
                >
                    <circle
                        cx="5"
                        cy="5"
                        r="4"
                        stroke="white"
                        :fill="i === index ? 'white' : 'none'"
                    />
                </svg>
            </div>

            <FlechaCirculoIcon
                class="mx-2 w-6 z-10 cursor-pointer"
                @click="slide(1)"
            />
        </div>
    </div>
</template>

<script>
import FlechaCirculoIcon from '../../../index/components/svg/FlechaCirculoIcon.vue';

export default {
    name: 'Slideshow',
    components: { FlechaCirculoIcon },
    props: {
        imagenes: Array,
    },
    data() {
        return {
            index: 0,
        };
    },
    created() {
        setInterval(() => this.slide(1), 3000);
    },
    methods: {
        urlDev(path) {
            return 'http://localhost:3000/' + path;
        },
        slide(n) {
            n += this.index;

            if (n < 0) {
                n = this.imagenes.length - 1;
            } else if (n === this.imagenes.length) {
                n = 0;
            }

            this.index = n;
        },
    },
};
</script>
