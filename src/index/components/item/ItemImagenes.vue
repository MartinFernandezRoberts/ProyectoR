<template>
    <Slideshow :imagenes="imagenes" class="lg:hidden" />
    <Galeria :imagenes="imagenes" class="mb-4 hidden lg:flex" />
</template>

<script>
import Galeria from './Galeria.vue';
import Slideshow from './Slideshow.vue';

export default {
    name: 'ItemImagenes',
    components: { Slideshow, Galeria },
    props: {
        imagenes: Array,
    },
};
</script>
