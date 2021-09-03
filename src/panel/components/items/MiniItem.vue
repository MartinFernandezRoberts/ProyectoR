<template>
    <div class="flex flex-col bg-gray-100 rounded-lg shadow">
        <img
            :src="urlDev(item.imagenes[0])"
            alt="imagen item"
            class="h-48 object-cover rounded-t-lg"
        />

        <div id="info" class="p-4">
            <h3 class="text-lg text-center text-gray-700 font-bold">
                {{ item.titulo }}
            </h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MiniItem',
    props: {
        item: Object,
    },
    methods: {
        urlDev(path) {
            return 'http://localhost:3000/' + path;
        },
    },
};
</script>
