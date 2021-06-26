<template>
    <p class="error" v-if="error">{{ error }}</p>

    <div
        v-for="banner in banners"
        :key="banner._id"
        class="border rounded p-5 bg-gray-100 shadow divide-y"
    >
        <BannerForm
            v-if="edit == banner._id"
            :banner="banner"
            :guardando="guardando"
            @close="edit = ''"
            @guardar="actualizarBanner"
        />

        <BannerAgenda
            v-else-if="calendarizar === banner._id"
            :banner="banner"
            @cerrar="calendarizar = ''"
        />

        <div v-else class="text-center">
            <h2 class="text-xl mb-2">{{ banner.tituloBanner }}</h2>

            <img
                class="mb-2 mx-auto rounded-lg"
                :src="banner.imagenBanner.url"
                :alt="banner.tituloBanner"
            />

            <a :href="banner.urlBanner">{{ banner.urlBanner }}</a>

            <div class="flex justify-end pt-3 space-x-2">
                <CalendarIcon
                    class="text-blue-400 cursor-pointer"
                    @click="calendarizar = banner._id"
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
    emits: ['cargarBanner'],
    data() {
        return {
            edit: '',
            guardando: false,
            eliminando: '',
            error: '',
            calendarizar: '',
        };
    },
    methods: {
        async actualizarBanner(data) {
            this.guardando = true;
            await BannerService.update(this.edit, data);
            this.guardando = false;
            this.$emit('cargarBanner');
        },
        async borrarBanner(id) {
            this.eliminando = id;
            await BannerService.delete(id);
            this.eliminando = '';
            this.$emit('cargarBanner');
        },
    },
};
</script>
