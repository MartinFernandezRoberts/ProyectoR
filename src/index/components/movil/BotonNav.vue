<template>
    <button
        :class="
            abierto
                ? 'bg-dorado text-white bg-opacity-20 '
                : 'bg-white bg-opacity-10 text-white'
        "
        class="justify-center inline-flex w-12 h-12 p-3 rounded-3xl ml-3"
        @click="$emit('abrir')"
    >
        <span class="sr-only">Abrir Menú</span>
        <!-- --- -->
        <svg
            :class="abierto ? 'hidden' : 'block'"
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
            />
        </svg>
        <!-- x -->
        <svg
            :class="abierto ? 'block' : 'hidden'"
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    </button>
</template>

<script>
export default {
    name: 'BotonNav',
    props: {
        abierto: Boolean,
    },
};
</script>
