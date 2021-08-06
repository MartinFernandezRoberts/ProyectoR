<template>
    <header
        ref="header"
        class="container mx-auto p-4 flex items-start bg-white text-lg"
    >
        <div class="flex-1">
            <LogoRifalapp class="w-64" />
        </div>

        <nav>
            <ul class="flex justify-center space-x-4 font-bold text-anaranjado">
                <li
                    class="
                        hover:text-rojo
                        transition-colors
                        duration-200
                        ease-out
                    "
                >
                    <a href="#destacadas">Destacadas</a>
                </li>

                <li>|</li>

                <li
                    class="
                        hover:text-rojo
                        transition-colors
                        duration-200
                        ease-out
                    "
                >
                    <a href="#como-funciona">Cómo funciona</a>
                </li>

                <li>|</li>

                <li
                    class="
                        hover:text-rojo
                        transition-colors
                        duration-200
                        ease-out
                    "
                >
                    <a href="#contacto">Contacto</a>
                </li>
            </ul>
        </nav>

        <div class="flex-1 text-right">
            <button
                type="button"
                class="
                    px-6
                    py-2
                    border-3 border-amarillo
                    rounded-lg
                    font-bold
                    text-gris
                    hover:border-anaranjado hover:bg-anaranjado hover:text-white
                    transition-colors
                    duration-200
                    ease-out
                "
            >
                <a href="/panel/">Mi cuenta</a>
            </button>
        </div>
    </header>
</template>

<script>
import LogoRifalapp from './svg/LogoRifalapp.vue';

export default {
    name: 'Header',
    components: {
        LogoRifalapp,
    },
    emits: ['measured'],
    created() {
        window.addEventListener('resize', this.sendHeight);
    },
    unmounted() {
        window.removeEventListener('resize', this.sendHeight);
    },
    mounted() {
        this.sendHeight();
    },
    methods: {
        sendHeight() {
            this.$emit('measured', this.$refs.header.offsetHeight);
        },
    },
};
</script>
