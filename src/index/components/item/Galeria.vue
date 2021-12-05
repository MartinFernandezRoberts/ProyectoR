<template>
    <div class="h-96">
        <img
            :src="urlDev(imagenes[index])"
            :alt="'Imagen ' + index"
            class="h-full aspect-w-4 aspect-h-3 rounded-lg"
        />

        <div
            id="miniaturas"
            class="px-4 grid grid-cols-1 xl:grid-cols-2 gap-4 overflow-auto"
        >
            <img
                v-for="(imagen, i) in imagenes"
                :key="i"
                :src="urlDev(imagen)"
                :alt="'Imagen ' + i"
                class="h-full w-full rounded-lg object-cover"
                @click="index = i"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Galeria',
    props: {
        imagenes: Array,
    },
    data() {
        return {
            index: 0,
        };
    },
    methods: {
        urlDev(path) {
            return 'http://localhost:3000/' + path;
        },
    },
};
</script>

<style scoped>
#miniaturas {
    grid-auto-rows: 128px;
}
</style>
