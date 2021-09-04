<template>
    <div
        :class="[
            'flex relative rounded text-sm bg-white font-light transition-colors duration-200 ease-out appearance-none',
            {
                'bg-red-50 ring-1 ring-inset ring-red-400': error,
            },
        ]"
    >
        <input
            class="w-full h-full opacity-0 absolute inset-0 z-20 cursor-pointer"
            type="file"
            @change="$emit('change', $event.target.files[0])"
            @dragover="dragging = true"
            @dragleave="dragging = false"
            @drop="dragging = false"
            @mouseenter="hovering = true"
            @mouseleave="hovering = false"
        />

        <div
            :class="[
                'w-full h-full absolute inset-0 z-10 flex justify-center items-center border-3 border-dorado border-dashed rounded bg-claro text-dorado font-bold leading-tight transition-opacity duration-200 ease-out',
                { 'opacity-0': !dragging },
            ]"
        >
            Suelte aquí su archivo
        </div>

        <div
            :class="[
                'px-4 2xl:px-6 py-1.5 2xl:py-2 flex-1 leading-tight',
                { 'text-gray-400': !archivo },
            ]"
        >
            {{ archivo || 'Ningún archivo seleccionado' }}
        </div>

        <div
            :class="[
                'px-4 2xl:px-6 py-1.5 2xl:py-2 rounded-r font-bold text-white leading-tight transition-colors duration-200 ease-out appearance-none',
                hovering || dragging ? 'bg-anaranjado' : 'bg-dorado',
            ]"
        >
            Examinar
        </div>
    </div>

    <small
        v-show="error"
        class="block px-4 py-1 rounded-lg bg-red-400 text-center text-white"
    >
        {{ error }}
    </small>
</template>

<script>
export default {
    name: 'FormFileInput',
    props: {
        label: String,
        archivo: String,
        error: String,
    },
    emits: ['change'],
    data() {
        return {
            dragging: false,
            hovering: false,
        };
    },
};
</script>
