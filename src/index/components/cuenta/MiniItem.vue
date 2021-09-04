<template>
    <div class="flex flex-col rounded-lg bg-gris-100 shadow">
        <img
            :src="urlDev(item.imagenes[0])"
            alt="imagen item"
            class="h-48 object-cover rounded-t-lg"
        />

        <div :class="['py-1 text-center text-sm', color]">
            {{ item.estado }}
        </div>

        <div id="info" class="p-4">
            <h3 class="text-lg text-center text-gray-700 font-bold">
                {{ item.titulo }}
            </h3>
        </div>

        <button
            v-if="item.estado === 'borrador'"
            class="
                mt-auto
                px-4
                py-2
                border-t border-dorado
                rounded-b-lg
                text-right
                font-bold
                text-sm text-dorado
                hover:bg-dorado hover:text-white
            "
            type="button"
            @click="$emit('editar')"
        >
            Editar
        </button>
    </div>
</template>

<script>
export default {
    name: 'MiniItem',
    props: {
        item: Object,
    },
    emits: ['editar'],
    computed: {
        color() {
            switch (this.item.estado) {
                case 'borrador':
                    return 'bg-gray-500 text-white';

                case 'pendiente':
                    return 'bg-white text-gris';

                case 'publicado':
                    return 'bg-blue-300 text-white';

                case 'sorteado':
                    return 'bg-green-300 text-white';

                case 'bajado':
                    return 'bg-red-700 text-white';

                default:
                    return '';
            }
        },
    },
    methods: {
        urlDev(path) {
            return 'http://localhost:3000/' + path;
        },
    },
};
</script>
