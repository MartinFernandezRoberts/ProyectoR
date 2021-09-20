<template>
    <section
        id="como-funciona"
        class="p-8 flex flex-col justify-center items-center bg-white"
    >
        <div
            class="
                flex flex-row
                w-full
                text-white
                font-semibol
                items-center
                relative
            "
        >
            <div class="flex-col flex md:1/5 lg:w-2/5">
                <div class="w-20 h-6 mx-auto">
                    <div class="bg-dorado -ml-5 w-full h-6"></div>
                </div>
                <h2 class="text-rojo text-left font-bold mx-auto text-7xl">
                    Co<br />mo<br />
                    par <br />tici <br />par
                </h2>
            </div>
            <div
                class="
                    hidden
                    md:ml-20 md:flex md:w-1/3
                    lg:w-1/4
                    2xl:ml-32
                    flex-col
                    items-baseline
                    py-10
                    h-full
                    align-middle
                    mx-auto
                    border-3 border-amarillo
                    bg-white
                    transition-colors
                    duration-200
                    ease-out
                    hover:border-anaranjado
                "
            >
                <div
                    class="
                        px-10
                        my-2
                        w-full
                        h-full
                        justify-center
                        mx-auto
                        bg-white
                        rounded-b-3xl
                        text-center text-black text-opacity-70 text-lg
                    "
                >
                    Si eres propietaria o propietario de una casa, departamento,
                    automóvil u otro objeto de valor, no dudes en leer nuestras
                    bases legales, escribir una bella descripción de lo que
                    quieres rifar y por qué tiene un valor tan especial y podrás
                    enviarlo para su revisión por el personal de RifasApp
                </div>
                <router-link
                    to="/crear"
                    class="
                        flex
                        absolute
                        -bottom-6
                        p-4
                        self-center
                        text-white text-xl
                        bg-anaranjado
                        border-dorado border-4
                        rounded-3xl
                        transition-colors
                        duration-200
                        ease-out
                        hover:text-white hover:bg-rojo
                    "
                >
                    <h3>¡Quiero publicar!</h3>
                </router-link>
            </div>

            <div
                class="
                    hidden
                    md:flex md:w-1/3
                    lg:w-1/4
                    flex-col
                    items-baseline
                    py-10
                    h-full
                    align-middle
                    mx-auto
                    border-3 border-amarillo
                    bg-white
                    transition-colors
                    duration-200
                    ease-out
                    hover:border-anaranjado
                "
            >
                <div
                    class="
                        px-10
                        my-2
                        w-full
                        h-full
                        justify-center
                        mx-auto
                        bg-white
                        rounded-b-3xl
                        text-center text-black text-opacity-70 text-lg
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
                        text-white text-xl
                        bg-anaranjado
                        border-dorado border-4
                        rounded-3xl
                        transition-colors
                        duration-200
                        ease-out
                        hover:text-white hover:bg-rojo
                    "
                >
                    <h3>¡Quiero participar!</h3>
                </router-link>
            </div>

            <!--MOVIL-->

            <div class="mx-10 md:hidden">
                <div
                    class="
                        md:hidden
                        border-3 border-amarillo
                        bg-white
                        text-center
                        hover:border-anaranjado
                    "
                >
                    <div
                        class="
                            flex
                            px-2
                            my-2
                            justify-center
                            bg-white
                            rounded-b-3xl
                            text-black text-opacity-70 text-xs
                        "
                    >
                        Si eres propietaria o propietario de una casa,
                        departamento, automóvil u otro objeto de valor, no dudes
                        en leer nuestras bases legales, escribir una bella
                        descripción de lo que quieres rifar y por qué tiene un
                        valor tan especial y podrás enviarlo para su revisión
                        por el personal de RifasApp
                    </div>
                </div>
                <router-link
                    to="/cuenta"
                    class="
                        flex flex-row
                        p-4
                        -mt-2
                        mb-5
                        self-center
                        w-full
                        text-white text-xs text-center
                        bg-anaranjado
                        border-dorado border-4
                        rounded-3xl
                        transition-colors
                        justify-center
                        duration-200
                        ease-out
                        hover:text-white hover:bg-rojo
                    "
                >
                    <h3>¡Quiero publicar!</h3>
                </router-link>
                <div
                    class="
                        md:hidden
                        border-3 border-amarillo
                        bg-white
                        text-center
                        hover:border-anaranjado
                    "
                >
                    <div
                        class="
                            flex
                            px-2
                            my-2
                            justify-center
                            bg-white
                            rounded-b-3xl
                            text-black text-opacity-70 text-xs
                        "
                    >
                        Busca las variadas ofertas disponibles, compra uno o más
                        números y ya estarás participando en el sorteo de
                        expectaculares premios!
                    </div>
                </div>
                <router-link
                    to="/buscador"
                    class="
                        flex flex-row
                        p-4
                        -mt-2
                        mb-5
                        self-center
                        w-full
                        text-white text-xs text-center
                        bg-anaranjado
                        border-dorado border-4
                        rounded-3xl
                        transition-colors
                        justify-center
                        duration-200
                        ease-out
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
