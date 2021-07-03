<template>
    <header
        ref="header"
        class="p-4 flex justify-around items-start bg-white text-lg"
    >
        <span>LOGO</span>

        <nav>
            <ul class="flex space-x-4 font-bold text-anaranjado">
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

        <button
            type="button"
            class="
                px-6
                py-2
                border-3 border-amarillo
                rounded-lg
                font-bold
                text-gris
                hover:border-dorado hover:bg-dorado hover:text-white
                transition-colors
                duration-200
                ease-out
            "
        >
            Mi cuenta
        </button>
    </header>
</template>

<script>
export default {
    name: 'Header',
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
