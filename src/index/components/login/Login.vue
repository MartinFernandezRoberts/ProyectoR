<template>
    <section class="py-12 flex flex-col justify-center items-center">
        <h1 class="mb-10 2xl:mb-12 text-3xl 2xl:text-4xl font-bold text-center">
            Inicio de sesión
        </h1>

        <div class="w-1/2 2xl:w-2/5 border-6 border-claro rounded-lg">
            <form class="p-10 flex flex-col bg-claro space-y-1.5" action="">
                <input
                    :class="[
                        'appearance-none px-4 2xl:px-6 py-1.5 2xl:py-2 text-sm font-light leading-tight rounded-t-lg',
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
                        'appearance-none px-4 2xl:px-6 py-1.5 2xl:py-2 text-sm font-light leading-tight rounded-b-lg',
                        {
                            'bg-red-50 ring-1 ring-inset ring-red-400':
                                errores.password,
                        },
                    ]"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Contraseña"
                    v-model="form.password"
                    @input="validar('password', $event.target.value)"
                />
                <small
                    v-show="errores.password"
                    class="
                        block
                        px-4
                        py-1
                        rounded-lg
                        bg-red-400
                        text-center text-white
                    "
                    >{{ errores.password }}</small
                >

                <div>
                    <button
                        type="button"
                        :class="[
                            'block mt-4 ml-auto px-6 py-2 rounded-lg bg-anaranjado text-white hover:bg-rojo transition-colors duration-200 ease-out',
                            { 'animate-loading cursor-wait': enviando },
                        ]"
                        @click="submit"
                    >
                        Ingresar
                    </button>
                </div>
            </form>
        </div>

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

        <div class="mt-10 flex items-center">
            <span class="mr-4">También puedes</span>
            <a href="http://localhost:3000/auth/google"><Google /></a>
        </div>
    </section>
</template>

<script>
import Google from './Google.vue';
import axios from 'axios';
import validator from './validaLogin';

export default {
    name: 'Login',
    components: {
        Google,
    },
    data() {
        return {
            form: {
                correo: '',
                password: '',
            },
            validado: false,
            errores: {},
            enviando: false,
            errorServidor: '',
        };
    },
    methods: {
        async validar(campo, valor) {
            if (this.validado)
                this.errores[campo] = await validator.validate(campo, valor);
        },
        async submit() {
            const res = await validator.validateAll(this.form);

            if (res.valid && !this.enviando) {
                this.enviando = true;

                await axios
                    .post('http://localhost:3000/login', this.form)
                    .then((res) => {
                        console.log(res);
                    })
                    .catch((err) => {
                        console.error(err);
                        this.errorServidor = err.message;
                    });

                this.enviando = false;
            } else {
                this.errores = res.errors;
            }

            this.validado = true;
        },
    },
};
</script>
