<template>
    <form class="flex flex-col space-y-1.5">
        <ImgDropMulti
            :images="imagenes.archivos"
            :paBorrar="imagenes.borrar"
            @update:images="
                (imagenes) => $emit('update', 'imagenes', 'archivos', imagenes)
            "
            @update:paBorrar="
                (imagenes) => $emit('update', 'imagenes', 'borrar', imagenes)
            "
        />

        <small
            v-show="errores.archivos"
            class="block px-4 py-1 rounded-lg bg-red-400 text-center text-white"
            >{{ errores.archivos }}</small
        >
    </form>
</template>

<script>
import ImgDropMulti from '../form/ImgDropMulti.vue';

export default {
    name: 'DetallesItemForm',
    components: {
        ImgDropMulti,
    },
    props: {
        imagenes: Object,
        errores: Object,
    },
    emits: ['update'],
};
</script>
