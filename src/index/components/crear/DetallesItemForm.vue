<template>
    <component
        :is="`Detalles${tipo}Form`"
        :detalles="detalles"
        :errores="errores"
        @update="actualizarInput"
    />
</template>

<script>
import DetallesCasaForm from './DetallesCasaForm.vue';
import DetallesWheelsForm from './DetallesWheelsForm.vue';

export default {
    name: 'DetallesItemForm',
    components: {
        DetallesCasaForm,
        DetallesWheelsForm,
    },
    props: {
        tipo: String,
        detalles: Object,
        errores: Object,
    },
    emits: ['update'],
    methods: {
        actualizarInput(campo, valor) {
            this.$emit('update', 'detalles', campo, valor);
        },
    },
};
</script>
