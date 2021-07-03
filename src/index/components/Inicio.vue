<template>
    <section class="flex flex-col">
        <div class="flex-grow flex flex-col justify-center items-center">
            <p class="text-2xl font-bold text-rojo">
                ¿Crees o creas la buena suerte?
            </p>

            <h2 class="mt-12 text-3xl font-bold">
                Ajusta tus parámetros o
                <a
                    href="#"
                    class="
                        text-dorado
                        underline
                        hover:text-rojo
                        transition-colors
                        duration-200
                        ease-out
                    "
                    >vitrinea todo</a
                >
            </h2>

            <FiltrosForm class="mt-12" />

            <div class="mt-12 text-center">
                <h3 class="mb-3 text-4xl font-bold">
                    Grandes premios merecen una oportunidad
                </h3>
                <p>
                    Rifalapp es la aplicación donde debes poner buen ojo y
                    podrás ganar<br />
                    excelentes propiedades, automóviles y más
                </p>
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

export default {
    name: 'Inicio',
    components: { FiltrosForm, MarqueeText },
};
</script>

<style>
/* .marquee {
    display: inline-block;
    padding-left: 100%;
    animation: marquee 10s linear infinite;
}

@keyframes marquee {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(-100%, 0);
    }
} */
</style>
