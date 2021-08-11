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
                    :class="[
                        'appearance-none px-6 py-2 font-light leading-tight rounded-t-lg',
                        {
                            'bg-red-50 ring-1 ring-inset ring-red-400':
                                errores.nombre,
                        },
                    ]"
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder="Nombre"
                    v-model="form.nombre"
                    @input="validar('nombre', $event.target.value)"
                />
                <small
                    v-show="errores.nombre"
                    class="
                        block
                        px-4
                        py-1
                        rounded-lg
                        bg-red-400
                        text-center text-white
                    "
                    >{{ errores.nombre }}</small
                >

                <input
                    :class="[
                        'appearance-none px-6 py-2 font-light leading-tight',
                        {
                            'bg-red-50 ring-1 ring-inset ring-red-400':
                                errores.correo,
                        },
                    ]"
                    type="email"
                    name="correo"
                    id="correo"
                    placeholder="Correo"
                    v-model="form.correo"
                    @input="validar('correo', $event.target.value)"
                />
                <small
                    v-show="errores.correo"
                    class="
                        block
                        px-4
                        py-1
                        rounded-lg
                        bg-red-400
                        text-center text-white
                    "
                    >{{ errores.correo }}</small
                >

                <input
                    :class="[
                        'appearance-none px-6 py-2 font-light leading-tight',
                        {
                            'bg-red-50 ring-1 ring-inset ring-red-400':
                                errores.telefono,
                        },
                    ]"
                    type="tel"
                    name="telefono"
                    id="telefono"
                    placeholder="Telefono"
                    v-model="form.telefono"
                    @input="validar('telefono', $event.target.value)"
                />
                <small
                    v-show="errores.telefono"
                    class="
                        block
                        px-4
                        py-1
                        rounded-lg
                        bg-red-400
                        text-center text-white
                    "
                    >{{ errores.telefono }}</small
                >

                <textarea
                    :class="[
                        'appearance-none px-6 py-2 font-light leading-tight rounded-b-lg',
                        {
                            'bg-red-50 ring-1 ring-inset ring-red-400':
                                errores.mensaje,
                        },
                    ]"
                    name="mensaje"
                    id="mensaje"
                    placeholder="Mensaje"
                    v-model="form.mensaje"
                    @input="validar('mensaje', $event.target.value)"
                />
                <small
                    v-show="errores.mensaje"
                    class="
                        block
                        px-4
                        py-1
                        rounded-lg
                        bg-red-400
                        text-center text-white
                    "
                    >{{ errores.mensaje }}</small
                >

                <div>
                    <button
                        type="button"
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
                        @click="submit"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>

        <div
            v-if="notificacion.mostrar"
            :class="[
                'mt-2 px-6 py-2 w-1/2 2xl:w-2/5 rounded-lg text-center text-white font-thin cursor-pointer',
                notificacion.exito ? 'bg-green-500' : 'bg-red-400',
            ]"
            @click="this.notificacion.mostrar = false"
        >
            <p v-if="notificacion.exito">
                ¡Gracias! Pronto nos comunicaremos contigo.
            </p>

            <p v-else>
                Lo sentimos, ha ocurrido un error. Por favor intenta más
                tarde.<br />
                También puedes enviarnos un correo directamente a
                <a href="mailto:contacto@rifasapp.cl">contacto@rifasapp.cl</a>.
            </p>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import validator from './validaContacto';

export default {
    name: 'Contacto',
    data() {
        return {
            form: {
                nombre: '',
                correo: '',
                telefono: '',
                mensaje: '',
            },
            validado: false,
            errores: {},
            notificacion: {
                mostrar: false,
                exito: true,
            },
        };
    },
    methods: {
        async validar(campo, valor) {
            if (this.validado)
                this.errores[campo] = await validator.validate(campo, valor);
        },
        async submit() {
            const res = await validator.validateAll(this.form);

            if (res.valid) {
                axios
                    .post('http://localhost:3000/api/contacto', this.form)
                    .then((res) => {
                        console.log(res);
                        this.notificacion.exito = true;
                    })
                    .catch((err) => {
                        console.error(err);
                        this.notificacion.exito = false;
                    })
                    .then((this.notificacion.mostrar = true));
            } else {
                this.errores = res.errors;
            }

            this.validado = true;
        },
    },
};
</script>
