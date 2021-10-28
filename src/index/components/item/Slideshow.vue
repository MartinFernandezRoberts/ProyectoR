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
                opacity-0
                hover:opacity-50
                transition-opacity
                duration-200
                ease-out
            "
        >
            <FlechaCirculoIcon
                class="mx-4 w-8 z-10 cursor-pointer"
                transform="scale(-1,1)"
                @click="
                    slide(-1);
                    resetTimer();
                "
            />

            <div class="self-end pb-2 flex space-x-2">
                <svg
                    v-for="(imagen, i) in imagenes"
                    :key="i"
                    viewBox="0 0 10 10"
                    class="w-4 z-10 cursor-pointer"
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
                class="mx-4 w-8 z-10 cursor-pointer"
                @click="
                    slide(1);
                    resetTimer();
                "
            />
        </div>
    </div>
</template>

<script>
import FlechaCirculoIcon from '@/assets/svg/FlechaCirculoIcon.vue';

export default {
    name: 'Slideshow',
    components: { FlechaCirculoIcon },
    props: {
        imagenes: Array,
    },
    data() {
        return {
            index: 0,
            timer: null,
        };
    },
    created() {
        this.timer = setInterval(this.autoSlide, 5000);
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
        autoSlide() {
            this.slide(1);
        },
        resetTimer() {
            clearInterval(this.timer);
            this.timer = setInterval(this.autoSlide, 5000);
        },
    },
};
</script>
