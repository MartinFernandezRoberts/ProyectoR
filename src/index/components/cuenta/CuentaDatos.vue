<template>
    <section class="pt-12 px-6 2xl:px-24 flex flex-col">
        <div class="mb-6 2xl:mb-7 flex justify-center items-center">
            <h2 class="text-2xl 2xl:text-3xl font-bold">Mis datos</h2>
        </div>

        <form
            class="p-10 flex flex-col rounded-lg bg-claro space-y-1.5"
            action=""
        >
            <div
                :class="[
                    'px-4 2xl:px-6 py-1.5 2xl:py-2 flex bg-white text-sm font-light leading-tight rounded-t-lg',
                    {
                        'bg-red-50 ring-1 ring-inset ring-red-400':
                            errores.nombre,
                    },
                ]"
            >
                <span class="w-1/2">Nombre</span>

                <input
                    :class="[
                        'appearance-none flex-1',
                        {
                            'bg-red-50': errores.nombre,
                        },
                    ]"
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder="Nombre"
                    :readonly="!edit"
                    v-model="form.nombre"
                    @input="validar('nombre', $event.target.value)"
                />
            </div>
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

            <div
                :class="[
                    'px-4 2xl:px-6 py-1.5 2xl:py-2 flex bg-white text-sm font-light leading-tight',
                    {
                        'bg-red-50 ring-1 ring-inset ring-red-400':
                            errores.correo,
                    },
                ]"
            >
                <span class="w-1/2">Correo</span>

                <input
                    :class="[
                        'appearance-none flex-1',
                        {
                            'bg-red-50': errores.correo,
                        },
                    ]"
                    type="email"
                    name="correo"
                    id="correo"
                    placeholder="Correo"
                    :readonly="!edit"
                    v-model="form.correo"
                    @input="validar('correo', $event.target.value)"
                />
            </div>
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

            <div
                :class="[
                    'px-4 2xl:px-6 py-1.5 2xl:py-2 flex bg-white text-sm font-light leading-tight',
                    {
                        'bg-red-50 ring-1 ring-inset ring-red-400':
                            errores.telefono,
                    },
                ]"
            >
                <span class="w-1/2">Teléfono</span>

                <input
                    :class="[
                        'appearance-none flex-1',
                        {
                            'bg-red-50': errores.telefono,
                        },
                    ]"
                    type="email"
                    name="telefono"
                    id="telefono"
                    placeholder="Teléfono"
                    :readonly="!edit"
                    v-model="form.telefono"
                    @input="validar('telefono', $event.target.value)"
                />
            </div>
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

            <div
                class="
                    px-4
                    2xl:px-6
                    py-1.5
                    2xl:py-2
                    flex
                    bg-white
                    text-sm
                    font-light
                    leading-tight
                    rounded-b-lg
                "
            >
                <span class="w-1/2">Contraseña</span>

                <a
                    class="flex-1 text-dorado font-bold text-right"
                    href="/password"
                >
                    Cambiar
                </a>
            </div>

            <div class="flex justify-end">
                <button
                    v-if="!edit"
                    type="button"
                    :class="[
                        'block mt-4 ml-auto px-6 py-2 border border-anaranjado rounded-lg bg-white text-anaranjado hover:bg-anaranjado hover:text-white transition-colors duration-200 ease-out',
                        { 'animate-loading cursor-wait': enviando },
                    ]"
                    @click="edit = true"
                >
                    Editar
                </button>

                <div v-else class="flex space-x-2">
                    <button
                        type="button"
                        :class="[
                            'block mt-4 ml-auto px-6 py-2 border border-gris rounded-lg bg-white text-gris hover:bg-gris hover:text-white transition-colors duration-200 ease-out',
                            { 'animate-loading cursor-wait': enviando },
                        ]"
                        @click="reset"
                    >
                        Cancelar
                    </button>

                    <button
                        type="button"
                        :class="[
                            'block mt-4 ml-auto px-6 py-2 rounded-lg bg-anaranjado text-white hover:bg-rojo transition-colors duration-200 ease-out',
                            { 'animate-loading cursor-wait': enviando },
                        ]"
                        @click="submit"
                    >
                        Guardar cambios
                    </button>
                </div>
            </div>
        </form>

        <div
            v-if="errorServidor"
            class="
                mt-2
                px-6
                py-2
                w-1/2
                2xl:w-2/5
                rounded-lg
                text-center text-white
                font-thin
                cursor-pointer
                bg-red-400
            "
            @click="errorServidor = ''"
        >
            {{ errorServidor }}
        </div>
    </section>
</template>

<script>
// import axios from 'axios';
import validator from './validaDatos';

export default {
    name: 'CuentaDatos',
    data() {
        return {
            user: {
                nombre: '',
                correo: '',
                telefono: '',
            },
            form: {
                nombre: '',
                correo: '',
                telefono: '',
            },
            edit: false,
            validado: false,
            errores: {},
            enviando: false,
            errorServidor: '',
        };
    },
    created() {
        this.user.nombre = 'Sujeto de prueba';
        this.user.correo = 'sujeto.prueba@rifasapp.cl';
        this.user.telefono = '+56987654321';
        this.reset();
    },
    methods: {
        reset() {
            this.edit = false;
            this.form.nombre = this.user.nombre;
            this.form.correo = this.user.correo;
            this.form.telefono = this.user.telefono;
        },
        async validar(campo, valor) {
            if (this.validado)
                this.errores[campo] = await validator.validate(campo, valor);
        },
        async submit() {
            const res = await validator.validateAll(this.form);

            if (res.valid && !this.enviando) {
                this.enviando = true;

                console.log('enviar datos');

                this.enviando = false;
            } else {
                this.errores = res.errors;
            }

            this.validado = true;
        },
    },
};
</script>
