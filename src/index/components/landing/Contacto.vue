<template>
    <section
        id="contacto"
        class="flex flex-col justify-center items-center overflow-hidden"
    >
        <h2 class="mb-12 text-3xl 2xl:text-4xl font-bold text-center">
            Contacto
        </h2>

        <div class="w-1/2 2xl:w-2/5 border-6 border-claro rounded-lg">
            <div class="py-3 text-center">
                <p class="text-xl font-bold">¿Alguna pregunta?</p>
                <p class="2xl:text-lg">Te respondemos en menos de 24 horas</p>
            </div>

            <form class="p-10 flex flex-col bg-claro space-y-1.5" action="">
                <input
                    class="
                        appearance-none
                        px-6
                        py-2
                        font-light
                        leading-tight
                        rounded-t-lg
                    "
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder="Nombre"
                />
                <input
                    class="appearance-none px-6 py-2 font-light leading-tight"
                    type="email"
                    name="correo"
                    id="correo"
                    placeholder="Correo"
                />
                <input
                    class="appearance-none px-6 py-2 font-light leading-tight"
                    type="tel"
                    name="telefono"
                    id="telefono"
                    placeholder="Telefono"
                />
                <textarea
                    class="
                        appearance-none
                        px-6
                        py-2
                        font-light
                        leading-tight
                        rounded-b-lg
                    "
                    name="mensaje"
                    id="mensaje"
                    placeholder="Mensaje"
                />

                <div>
                    <button
                        type="submit"
                        class="
                            block
                            mt-4
                            ml-auto
                            px-6
                            py-2
                            rounded-lg
                            bg-anaranjado
                            text-white
                            hover:bg-rojo
                            transition-colors
                            duration-200
                            ease-out
                        "
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Contacto',
};
</script>
