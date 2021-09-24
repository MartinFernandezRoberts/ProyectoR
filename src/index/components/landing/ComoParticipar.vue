<template>
    <section
        id="como-funciona"
        class="p-8 flex flex-col justify-center items-center bg-white"
    >
        <h1
            class="
                mt-10
                mb-2
                font-bold
                text-center text-xl
                md:text-3xl
                2xl:mb-12 2xl:text-4xl
            "
        >
            ¿Cómo participar?
        </h1>
        <a
            href="/condiciones"
            class="mb-4 underline text-dorado text-sm md:text-base lg:text-xl"
        >
            Términos y Condiciones para participantes.
        </a>
        <p class="text-center text-sm md:text-base lg:text-xl">
            Simple, elige lo que quisieras ganar, compra un boleto y a esperar
            el sorteo.
        </p>
        <div class="hidden flex-row mx-auto w-full items-center justify-center">
            <div>Automovil o Casa</div>
            <div>Ticket</div>
            <div>Sorteo Programado</div>
        </div>
        <a href="/buscador">
            <button
                class="
                    md:text-xl
                    lg:text-2xl
                    mt-6
                    mb-10
                    px-6
                    py-2
                    border-3
                    rounded-lg
                    text-anaranjado
                    border-anaranjado
                    hover:bg-anaranjado hover:text-white
                    transition-colors
                    duration-200
                    ease-out
                "
            >
                Buscar sorteos para participar
            </button>
        </a>
        <h2
            class="
                mt-10
                mb-2
                font-bold
                text-center text-xl
                md:text-3xl
                2xl:mb-12 2xl:text-4xl
            "
        >
            ¿Cómo sortear mi automóvil, casa u otros objetos de valor?
        </h2>
        <a
            href="/condiciones"
            class="mb-4 underline text-dorado text-sm md:text-base lg:text-xl"
        >
            Términos y Condiciones para sorteadores.
        </a>
        <p class="text-center text-sm md:text-base lg:text-xl">
            ¡Bienvenid@! Ya estás de acuerdo con nuestras bases legales,
            <br class="hidden md:block" />
            ahora rellena el siguiente formulario y te contactaremos
            prontamente.
        </p>
        <a href="/crear">
            <button
                class="
                    md:text-xl
                    lg:text-2xl
                    mt-6
                    mb-10
                    px-6
                    py-2
                    border-3
                    rounded-lg
                    text-anaranjado
                    border-anaranjado
                    hover:bg-anaranjado hover:text-white
                    transition-colors
                    duration-200
                    ease-out
                "
            >
                Rifar mi propiedad
            </button>
        </a>
    </section>
</template>

<script>
export default {
    name: 'ComoParticipar',
};
</script>
