<template>
    <div class="container mx-auto flex flex-col items-center">
        <h1 class="mb-14 text-3xl">Serial Experiments Banners</h1>

        <figure
            v-for="(url, ubicacion) in banners"
            :key="ubicacion"
            class="mb-10"
        >
            <figcaption class="mb-2 text-xl capitalize">
                {{ ubicacion }}
            </figcaption>
            <img :src="url" :alt="`banner ${ubicacion}`" width="336" />
        </figure>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'BannerTest',
    data() {
        return {
            banners: {
                principal: '',
                ladito: '',
            },
        };
    },
    created() {
        axios(this.urlDev('api/banners/principal'))
            .then(
                (res) =>
                    (this.banners.principal = this.urlDev(
                        res.data.imagenBanner
                    ))
            )
            .catch((err) => console.error(err));

        axios(this.urlDev('api/banners/ladito'))
            .then(
                (res) =>
                    (this.banners.ladito = this.urlDev(res.data.imagenBanner))
            )
            .catch((err) => console.error(err));
    },
    methods: {
        urlDev(path) {
            return 'https://rifasapp.cl/' + path;
        },
    },
};
</script>
