<template>
    <nav
        class="
            flex-col
            self-end
            text-right
            fixed
            h-screen
            z-50
            bg-white
            -mt-2
            lg:mt-0
            lg:relative
            lg:text-center
            lg:h-auto
            lg:mx-auto
            lg:self-center
        "
    >
        <ul
            class="
                space-y-6
                font-bold
                p-4
                mt-6
                text-gris
                lg:text-anaranjado
                lg:space-y-0
                lg:mt-0
                lg:flex
                lg:justify-center
                lg:space-x-4
            "
        >
            <li class="hover:text-rojo transition-colors duration-200 ease-out">
                <a href="/#destacadas">Destacadas</a>
            </li>

            <li class="hidden lg:block">|</li>

            <li class="hover:text-rojo transition-colors duration-200 ease-out">
                <a href="/#como-funciona">Cómo funciona</a>
            </li>

            <li class="hidden lg:block">|</li>

            <li class="hover:text-rojo transition-colors duration-200 ease-out">
                <a href="/#contacto">Contacto</a>
            </li>
        </ul>
        <BotonMiCuenta class="lg:hidden mt-10" />
    </nav>
</template>

<script>
import BotonMiCuenta from './BotonMiCuenta.vue';
import BotonNav from './BotonNav.vue';

export default {
    name: 'Nav',
    components: {
        BotonMiCuenta,
        BotonNav,
    },
};
</script>
