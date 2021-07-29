<template>
    <form
        :class="[
            'bg-white shadow rounded px-8 pt-6 pb-8 mb-4 flow-root',
            { 'mx-auto w-1/2': banner.tituloBanner.length === 0 },
        ]"
    >
        <div class="mb-4">
            <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="tituloBanner"
            >
                Título
            </label>
            <input
                class="
                    appearance-none
                    border
                    rounded
                    border-pink-200
                    w-full
                    py-1
                    px-2
                    text-gray-700
                    leading-tight
                    focus:outline-none
                    focus:shadow-outline
                    focus:ring-2
                    focus:ring-pink-200
                "
                id="tituloBanner"
                type="text"
                placeholder="Título"
                v-model="tituloBanner"
            />
        </div>

        <div>
            <ImgDropSingle
                class="mb-6"
                :images="imagenBanner"
                @update="(data) => (imagenBanner = data)"
            />
        </div>

        <div class="mb-4">
            <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="urlBanner"
            >
                Url
            </label>
            <input
                class="
                    appearance-none
                    border
                    rounded
                    border-pink-200
                    w-full
                    py-1
                    px-2
                    text-gray-700
                    leading-tight
                    focus:outline-none
                    focus:shadow-outline
                    focus:ring-2
                    focus:ring-pink-200
                "
                id="urlBanner"
                type="text"
                placeholder="Url"
                v-model="urlBanner"
            />
        </div>

        <div class="float-right space-x-2">
            <button
                class="
                    bg-gray-400
                    hover:bg-gray-600
                    text-white
                    font-bold
                    py-2
                    px-4
                    rounded
                    focus:outline-none
                    focus:shadow-outline
                    focus:ring-2
                    focus:ring-pink-200
                "
                type="button"
                @click="$emit('close')"
            >
                Cancelar
            </button>
            <button
                :class="[
                    'bg-pink-400 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-pink-200',
                    { 'animate-pulse': guardando },
                ]"
                type="button"
                @click="handleSubmit"
            >
                Guardar
            </button>
        </div>
    </form>
</template>

<script>
import ImgDropSingle from '../ImgDropSingle.vue';

export default {
    name: 'BannerForm',
    components: {
        ImgDropSingle,
    },
    props: {
        banner: {
            type: Object,
            default: function () {
                return {
                    tituloBanner: '',
                    imagenBanner: '',
                    urlBanner: '',
                };
            },
        },
        guardando: Boolean,
    },
    emits: ['close', 'guardar'],
    data() {
        return {
            tituloBanner: this.banner.tituloBanner,
            imagenBanner: this.banner.imagenBanner,
            urlBanner: this.banner.urlBanner,
        };
    },
    methods: {
        handleSubmit() {
            let formData = new FormData();

            formData.set('file', this.imagenBanner);
            formData.set('tituloBanner', this.tituloBanner);
            formData.set('urlBanner', this.urlBanner);

            this.$emit('guardar', formData);
        },
    },
};
</script>
