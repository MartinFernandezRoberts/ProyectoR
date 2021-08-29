<template>
    <!-- overlay -->
    <transition name="navMov">
        <div
            v-if="abierto"
            @click="abierto = !abierto"
            class="w-screen h-screen fixed bg-gris bg-opacity-40 z-40 lg:hidden"
        ></div>
    </transition>
    <header
        ref="header"
        class="
            flex flex-col
            text-base
            pt-2
            bg-anaranjado
            lg:h-auto
            lg:flex-row
            lg:container
            lg:mx-auto
            lg:p-4
            lg:flex
            lg:items-start
            lg:bg-white
            lg:text-lg
        "
    >
        <div class="flex-row mx-auto my-6 lg:flex-1">
            <router-link to="/">
                <LogoRifasapp class="w-64 hidden lg:block" />
                <LogoRifasAppMovil class="w-56 inline-block -mt-4 lg:hidden" />
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
                class="lg:hidden w-7/12 shadow-2xl"
            />
        </transition>
        <BotonMiCuenta class="hidden lg:block flex-1" />
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
    methods: {
        ...mapMutations(['setHeaderHeight']),
    },
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
