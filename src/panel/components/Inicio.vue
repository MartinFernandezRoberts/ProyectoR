<template>
    <div class="flex-1 flex flex-col justify-center items-center">
        <IsotipoIcon class="w-32 text-black" />
        <h1 class="mb-2 text-3xl font-bold border-b-2 border-pink-700">
            Panel de Control
        </h1>
        <p class="text-gray-700">Bienvenidx al Panel de Control de RifasApp</p>
    </div>
</template>

<script>
import IsotipoIcon from '../../index/components/svg/IsotipoIcon.vue';

export default {
    name: 'Inicio',
    components: { IsotipoIcon },
};
</script>
