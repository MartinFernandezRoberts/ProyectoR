<template>
    <!-- overlay -->
    <transition name="navMov">
        <div
            v-if="abierto"
            @click="abierto = !abierto"
            class="w-screen h-screen fixed bg-gris bg-opacity-40 z-20 lg:hidden"
        />
    </transition>

    <header
        ref="header"
        class="
            flex flex-col
            text-base
            bg-anaranjado
            lg:mx-auto
            lg:p-2
            lg:container
            lg:flex-row
            lg:items-center
            lg:bg-white
            lg:text-sm
            xl:text-base
        "
    >
        <div class="flex-row flex justify-center items-center lg:flex-1">
            <router-link to="/">
                <LogoRifasapp class="w-48 hidden lg:block xl:w-52 2xl:w-64" />
                <LogoRifasAppMovil class="w-48 inline-block lg:hidden" />
            </router-link>

            <BotonNav
                :abierto="abierto"
                @abrir="abierto = !abierto"
                class="lg:hidden"
            />
        </div>

        <Nav class="hidden lg:block" />
        <transition name="navMov">
            <Nav
                v-if="abierto"
                :abierto="abierto"
                @abrir="abierto = !abierto"
                @click="abierto = !abierto"
                class="lg:hidden w-7/12 shadow-2xl md:w-4/12"
            />
        </transition>

        <BotonMiCuenta class="flex-1 hidden lg:block" />
    </header>
</template>

<script>
import { mapMutations } from 'vuex';

import BotonMiCuenta from './movil/BotonMiCuenta.vue';
import LogoRifasapp from './svg/LogoRifasapp.vue';
import LogoRifasAppMovil from './svg/LogoRifasAppMovil.vue';
import Nav from './movil/Nav.vue';
import BotonNav from './movil/BotonNav.vue';

export default {
    name: 'Header',
    components: {
        LogoRifasapp,
        LogoRifasAppMovil,
        BotonMiCuenta,
        Nav,
        BotonNav,
    },
    data() {
        return { abierto: false };
    },
    mounted() {
        this.setHeaderHeight(this.$refs.header.offsetHeight);
    },
    methods: mapMutations(['setHeaderHeight']),
};
</script>
<style scoped>
.navMov-enter-active,
.navMov-leave-active {
    transition: opacity 0.5s ease;
}

.navMov-enter-from,
.navMov-leave-to {
    opacity: 0;
}
</style>
