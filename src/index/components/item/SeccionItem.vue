<template>
    <section class="py-2">
        <div
            :class="[
                'flex justify-between items-center text-lg font-bold cursor-pointer hover:text-anaranjado transition-colors duration-200 ease-out',
                { 'text-dorado': activa },
            ]"
            @click="$emit('toggle', seccion)"
        >
            <h2>{{ seccion }}</h2>

            <ChevronIcon
                :class="[
                    'h-4 transition-transform duration-200 ease-out',
                    {
                        'transform rotate-180': activa,
                    },
                ]"
            />
        </div>

        <div v-show="activa" class="mt-1 px-4 py-4 border rounded-lg">
            <slot />
        </div>
    </section>
</template>

<script>
import ChevronIcon from '@/assets/svg/ChevronIcon.vue';

export default {
    name: 'SeccionItem',
    components: { ChevronIcon },
    props: {
        seccion: String,
        seccionActual: String,
    },
    emits: ['toggle'],
    computed: {
        activa() {
            return this.seccion === this.seccionActual;
        },
    },
};
</script>
