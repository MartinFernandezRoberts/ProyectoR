<template>
    <section class="flex flex-col overflow-hidden">
        <div class="flex-grow flex flex-col justify-center items-center">
            <p
                class="
                    flex
                    items-end
                    text-2xl
                    font-bold
                    text-rojo text-center
                    mt-6
                    lg:mt-0
                "
            >
                <BrilloIcon class="mb-2 inline w-12" />
                ¿Crees o creas la buena suerte?
                <BrilloIcon transform="scale(-1,1)" class="mb-2 inline w-12" />
            </p>

            <h2 class="mt-12 md:text-3xl font-bold text-center">
                Ajusta tus parámetros o
                <router-link
                    to="/buscador"
                    class="
                        text-dorado
                        underline
                        hover:text-rojo
                        transition-colors
                        duration-200
                        ease-out
                    "
                    >vitrinea todo</router-link
                >
            </h2>

            <FiltrosForm class="mt-12 hidden lg:block" />

            <div class="mt-6 w-full flex items-center space-x-8">
                <div class="flex-1">
                    <TrebolIcon class="ml-auto text-dorado w-10 md:w-32" />
                </div>

                <div class="flex flex-col items-center text-center">
                    <LlaveCasaIcon class="mb-2 w-28 text-anaranjado" />

                    <h3 class="mb-3 text-xl font-bold md:text-4xl">
                        Grandes premios merecen una oportunidad
                    </h3>

                    <p class="text-center text-xs md:text-base">
                        RifasApp es la aplicación donde debes poner buen ojo y
                        podrás ganar<br />
                        excelentes propiedades, automóviles y más
                    </p>

                    <ManoIcon class="mt-2 text-anaranjado w-36" />
                </div>

                <div class="flex-1">
                    <BoletosIcon class="text-dorado w-10 md:w-36" />
                </div>
            </div>
        </div>

        <MarqueeText
            :duration="10"
            :repeat="4"
            class="
                w-full
                h-20
                flex
                items-center
                bg-anaranjado
                overflow-hidden
                truncate
            "
        >
            <p class="ml-4 text-white text-2xl">
                FALTAN <span class="font-bold text-4xl">3 DÍAS</span> PARA EL
                SORTEO DE
                <span class="font-bold text-4xl"
                    >CASA MODERNA EN MAITENCILLO</span
                >
            </p>
        </MarqueeText>
    </section>
</template>

<script>
import BoletosIcon from '../../svg/BoletosIcon.vue';
import FiltrosForm from './FiltrosForm.vue';
import MarqueeText from './MarqueeText.vue';
import BrilloIcon from '../../svg/BrilloIcon.vue';
import LlaveCasaIcon from '../../svg/LlaveCasaIcon.vue';
import ManoIcon from '../../svg/ManoIcon.vue';
import TrebolIcon from '../../svg/TrebolIcon.vue';

export default {
    name: 'Inicio',
    components: {
        FiltrosForm,
        MarqueeText,
        BrilloIcon,
        LlaveCasaIcon,
        ManoIcon,
        TrebolIcon,
        BoletosIcon,
    },
};
</script>
