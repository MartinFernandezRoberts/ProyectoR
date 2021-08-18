<template>
    <header
        ref="header"
        class="container mx-auto p-4 flex items-start bg-white text-lg"
    >
        <div class="flex-1">
            <router-link to="/">
                <LogoRifasapp class="w-64" />
            </router-link>
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
                    <a href="/#destacadas">Destacadas</a>
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
                    <a href="/#como-funciona">Cómo funciona</a>
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
                    <a href="/#contacto">Contacto</a>
                </li>
            </ul>
        </nav>

        <div class="flex-1 text-right">
            <router-link
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
                to="/login"
                >Mi cuenta</router-link
            >
        </div>
    </header>
</template>

<script>
import { mapMutations } from 'vuex';
import LogoRifasapp from './svg/LogoRifasapp.vue';

export default {
    name: 'Header',
    components: {
        LogoRifasapp,
    },
    mounted() {
        this.setHeaderHeight(this.$refs.header.offsetHeight);
    },
    methods: {
        ...mapMutations(['setHeaderHeight']),
    },
};
</script>
