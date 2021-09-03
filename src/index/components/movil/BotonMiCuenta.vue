<template>
    <div class="lg:text-center">
        <a v-if="user" href="/cuenta">
            <button
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
                    lg:mt-6
                "
            >
                Mi cuenta
            </button>
        </a>

        <a v-else href="/login">
            <button
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
                    lg:mt-6
                "
            >
                Iniciar sesión
            </button>
        </a>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'BotonMiCuenta',
    computed: mapState(['user']),
};
</script>
