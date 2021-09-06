<template>
    <p class="error" v-if="error">{{ error }}</p>

    <div class="grid grid-cols-3 gap-4">
        <div
            v-for="banner in banners"
            :key="banner._id"
            class="flex flex-col border rounded p-5 bg-gray-100 shadow"
        >
            <h2 class="text-xl mb-2">{{ banner.tituloBanner }}</h2>

            <BannerForm
                v-if="edit == banner._id"
                :banner="banner"
                :guardando="guardando"
                @close="edit = ''"
                @guardar="actualizarBanner"
            />

            <BannerAgenda
                v-else-if="agenda === banner._id"
                :idBanner="banner._id"
                :agenda="banner.agenda"
                @cerrar="agenda = ''"
                @cargarBanners="$emit('cargarBanners')"
            />

            <div
                v-else
                class="flex-grow flex flex-col justify-between text-center"
            >
                <div>
                    <img
                        class="mb-2 mx-auto rounded-lg"
                        :src="urlDev(banner.imagenBanner)"
                        :alt="banner.tituloBanner"
                    />

                    <a :href="banner.urlBanner">{{ banner.urlBanner }}</a>
                </div>

                <div class="mt-auto flex justify-end pt-3 space-x-2">
                    <CalendarIcon
                        class="text-blue-400 cursor-pointer"
                        @click="agenda = banner._id"
                    />
                    <EditIcon
                        class="text-yellow-400 cursor-pointer"
                        @click="edit = banner._id"
                    />
                    <DeleteIcon
                        :class="[
                            'text-red-500',
                            eliminando == banner._id
                                ? 'animate-bounce'
                                : 'cursor-pointer',
                        ]"
                        @click="borrarBanner(banner._id)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BannerService from './BannerService';
import BannerForm from './BannerForm.vue';
import BannerAgenda from './BannerAgenda.vue';
import EditIcon from '../svg/EditIcon.vue';
import DeleteIcon from '../svg/DeleteIcon.vue';
import CalendarIcon from '../svg/CalendarIcon.vue';

export default {
    name: 'BannerList',
    components: {
        BannerForm,
        BannerAgenda,
        EditIcon,
        DeleteIcon,
        CalendarIcon,
    },
    props: {
        banners: Array,
    },
    emits: ['cargarBanners'],
    data() {
        return {
            edit: '',
            guardando: false,
            eliminando: '',
            error: '',
            agenda: '',
        };
    },
    methods: {
        urlDev(path) {
            return 'https://rifasapp.cl/' + path;
        },
        async actualizarBanner(data) {
            this.guardando = true;

            try {
                await BannerService.update(this.edit, data);
                this.edit = '';
                this.$emit('cargarBanners');
            } catch (error) {
                console.error(error);
            }

            this.guardando = false;
        },
        async borrarBanner(id) {
            this.eliminando = id;

            if (window.confirm('¿Eliminar banner?')) {
                try {
                    await BannerService.delete(id);
                    this.$emit('cargarBanners');
                } catch (error) {
                    console.error(error);
                }
            }

            this.eliminando = '';
        },
    },
};
</script>
