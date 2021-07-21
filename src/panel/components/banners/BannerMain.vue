<template>
    <div class="container mx-auto pb-10">
        <div
            class="text-center bg-red-200 mb-5 p-4 rounded shadow"
            v-if="error"
        >
            {{ error }}
        </div>

        <button
            class="
                w-full
                border border-pink-600
                rounded
                mb-5
                px-5
                hover:bg-pink-600 hover:shadow
                text-pink-600
                hover:text-white
                text-xl
                uppercase
                font-bold
            "
            v-if="!nuevo"
            @click="nuevo = true"
        >
            Nuevo Banner
        </button>

        <BannerForm
            v-else
            :guardando="guardando"
            @close="nuevo = false"
            @guardar="crearBanner"
        />

        <BannerList :banners="banners" @cargarBanner="cargarBanners" />
    </div>
</template>

<script>
import BannerService from './BannerService';
import BannerForm from './BannerForm.vue';
import BannerList from './BannerList.vue';

export default {
    name: 'BannerMain',
    components: {
        BannerForm,
        BannerList,
    },
    data() {
        return {
            banners: [],
            nuevo: false,
            guardando: false,
            error: '',
        };
    },
    created() {
        this.cargarBanners();
    },
    methods: {
        async cargarBanners() {
            try {
                this.banners = await BannerService.index();
            } catch (err) {
                this.error = err.message;
            }
        },
        async crearBanner(data) {
            this.guardando = true;
            await BannerService.create(data);
            this.guardando = false;
            this.nuevo = false;
            this.cargarBanners();
        },
    },
};
</script>
