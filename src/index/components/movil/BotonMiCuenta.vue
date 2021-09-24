<template>
    <div class="lg:text-center">
        <a :href="user ? '/cuenta' : '/login'">
            <button
                class="
                    px-4
                    py-2
                    border-3 border-amarillo
                    rounded-lg
                    text-sm
                    font-bold
                    text-gris
                    hover:border-anaranjado hover:bg-anaranjado hover:text-white
                    transition-colors
                    duration-200
                    ease-out
                    xl:px-6
                    2xl:text-base
                "
            >
                {{ user ? 'Mi cuenta' : 'Iniciar sesión' }}
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
