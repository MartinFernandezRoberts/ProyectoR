<template>
    <section class="flex flex-col">
        <div class="p-8 flex-grow flex flex-col justify-center items-center">
            <p
                class="
                    flex
                    items-end
                    text-2xl
                    font-bold
                    text-rojo text-center
                    mt-6
                    lg:mt-0 lg:text-base
                    2xl:text-2xl
                "
            >
                <BrilloIcon class="mb-2 inline w-12 lg:w-8 2xl:w-12" />
                ¿Crees o creas la buena suerte?
                <BrilloIcon
                    transform="scale(-1,1)"
                    class="mb-2 inline w-12 lg:w-8 2xl:w-12"
                />
            </p>

            <h2
                class="
                    mt-12
                    font-bold
                    text-center
                    hidden
                    lg:block lg:text-xl lg:mt-4
                    2xl:mt-12 2xl:text-3xl
                "
            >
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

            <FiltrosForm
                class="mt-12 max-w-5xl hidden lg:block lg:mt-4 2xl:mt-12"
            />

            <div class="mt-6 w-full flex items-center space-x-8">
                <div class="flex-1">
                    <TrebolIcon
                        class="
                            ml-auto
                            text-dorado
                            w-10
                            md:w-32
                            lg:w-20
                            2xl:w-32
                        "
                    />
                </div>

                <div class="flex flex-col items-center text-center">
                    <LlaveCasaIcon
                        class="mb-2 w-12 text-anaranjado lg:w-20 2xl:w-28"
                    />

                    <h3
                        class="
                            mb-3
                            text-xl
                            font-bold
                            md:text-4xl
                            lg:text-2xl
                            2xl:text-4xl
                        "
                    >
                        Grandes premios merecen una oportunidad
                    </h3>

                    <p
                        class="
                            text-center text-xs
                            md:text-base
                            lg:text-xs
                            2xl:text-base
                        "
                    >
                        RifasApp es la aplicación donde debes poner buen ojo y
                        podrás ganar<br />
                        excelentes propiedades, automóviles y más
                    </p>

                    <ManoIcon
                        class="mt-2 text-anaranjado w-24 lg:w-20 2xl:w-36"
                    />
                    <router-link
                        to="/buscador"
                        class="
                            underline
                            text-bold text-2xl
                            pt-5
                            text-rojo
                            lg:hidden
                        "
                        >¡Encuentrate con tu suerte!</router-link
                    >
                </div>

                <div class="flex-1">
                    <BoletosIcon
                        class="text-dorado w-10 md:w-36 lg:w-20 2xl:w-36"
                    />
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
import FiltrosForm from './FiltrosForm.vue';
import MarqueeText from './MarqueeText.vue';
import BoletosIcon from '@/assets/svg/BoletosIcon.vue';
import BrilloIcon from '@/assets/svg/BrilloIcon.vue';
import LlaveCasaIcon from '@/assets/svg/LlaveCasaIcon.vue';
import ManoIcon from '@/assets/svg/ManoIcon.vue';
import TrebolIcon from '@/assets/svg/TrebolIcon.vue';

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
