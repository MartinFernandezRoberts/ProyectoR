<template>
    <Inicio class="h-full" />
    <ItemsDestacados class="h-screen" />
    <ComoParticipar class="h-screen" />
    <Contacto class="h-screen" />
</template>

<script>
import Contacto from '../Contacto.vue';
import ComoParticipar from '../ComoParticipar.vue';
import ItemsDestacados from './destacados/ItemsDestacados.vue';
import Inicio from './inicio/Inicio.vue';

export default {
    components: { ComoParticipar, Contacto, ItemsDestacados, Inicio },
    name: 'Landing',
};
</script>
