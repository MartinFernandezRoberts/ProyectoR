<template>
    <div>
        <button
            v-show="estado !== 'publicado'"
            class="
                px-4
                py-2
                rounded-lg
                bg-blue-300
                text-white
                font-bold
                transition-colors
                duration-200
                ease-out
            "
            type="button"
            @click="cambiarEstado('publicado')"
        >
            Publicar
        </button>

        <button
            v-show="estado !== 'bajado'"
            class="
                px-4
                py-2
                rounded-lg
                bg-yellow-500
                text-gray-700
                font-bold
                transition-colors
                duration-200
                ease-out
            "
            type="button"
            @click="cambiarEstado('bajado')"
        >
            Bajar
        </button>

        <button
            class="
                px-4
                py-2
                rounded-lg
                bg-red-700
                font-bold
                text-white
                transition-colors
                duration-200
                ease-out
            "
            type="button"
            @click="eliminar"
        >
            Eliminar
        </button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'EstadoMenu',
    props: {
        id: String,
        estado: String,
    },
    emits: ['cargar'],
    methods: {
        cambiarEstado(estado) {
            axios
                .post(
                    `https://rifasapp.cl/api/items/${this.id}/cambiarEstado`,
                    { estado }
                )
                .then((res) => {
                    console.log(res.data);
                    this.$emit('cargar');
                })
                .catch((err) => {
                    console.error(err);
                });
        },
        eliminar() {
            axios
                .delete(`https://rifasapp.cl/api/items/${this.id}`)
                .then((res) => {
                    console.log(res.data);
                    this.$emit('cargar');
                })
                .catch((err) => {
                    console.error(err);
                });
        },
    },
};
</script>
