<template>
    <section
        id="como-funciona"
        class="flex flex-col justify-center items-center bg-anaranjado"
    >
        <div
            class="
                flex flex-row
                w-full
                text-center text-white
                font-semibol
                text-xl
                items-center
                relative
            "
        >
            <div class="flex-col flex w-1/5">
                <div class="bg-rojo w-1/3 h-7 mx-auto"></div>
                <h2 class="text-white font-bold mx-auto text-7xl">
                    Co<br />mo<br />
                    par <br />tici <br />par
                </h2>
            </div>
            <div
                class="
                    flex flex-col
                    items-baseline
                    w-1/4
                    py-10
                    h-full
                    align-middle
                    mx-auto
                    border-3
                    rounded-3xl
                    shadow-lg
                    border-dorado
                    bg-white
                "
            >
                <div
                    class="
                        px-10
                        my-6
                        w-full
                        h-full
                        justify-center
                        mx-auto
                        bg-white
                        rounded-b-3xl
                        text-black text-sm
                    "
                >
                    Si eres propietaria o propietario de una casa, departamento,
                    automóvil u otro objeto de valor, no dudes en leer nuestras
                    bases legales, escribir una bella descripción de lo que
                    quieres rifar y por qué tiene un valor tan especial y podrás
                    enviarlo para su revisión por el personal de RifasApp
                </div>
                <router-link
                    to="/cuenta"
                    class="
                        flex
                        absolute
                        -bottom-6
                        p-4
                        self-center
                        text-white
                        bg-anaranjado
                        border-dorado border-4
                        rounded-3xl
                        transition-colors
                        duration-200
                        ease-out
                        shadow-2xl
                        hover:text-white hover:bg-rojo
                    "
                >
                    <h3>¡Quiero publicar!</h3>
                </router-link>
            </div>

            <div
                class="
                    flex flex-col
                    items-baseline
                    w-1/4
                    py-10
                    h-full
                    align-middle
                    mx-auto
                    border-3
                    rounded-3xl
                    shadow-lg
                    border-dorado
                    bg-white
                "
            >
                <div
                    class="
                        my-6
                        px-10
                        w-full
                        h-full
                        justify-center
                        mx-auto
                        bg-white
                        rounded-b-3xl
                        text-black text-sm
                    "
                >
                    Busca las variadas ofertas disponibles, compra uno o más
                    números y ya estarás participando en el sorteo de
                    expectaculares premios!
                </div>
                <router-link
                    to="/buscador"
                    class="
                        flex
                        absolute
                        -bottom-6
                        p-4
                        self-center
                        text-white
                        bg-anaranjado
                        border-dorado border-4
                        rounded-3xl
                        transition-colors
                        duration-200
                        ease-out
                        shadow-2xl
                        hover:text-white hover:bg-rojo
                    "
                >
                    <h3>¡Quiero participar!</h3>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ComoParticipar',
};
</script>
