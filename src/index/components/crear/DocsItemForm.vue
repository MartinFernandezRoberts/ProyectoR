<template>
    <form class="flex flex-col space-y-3">
        <FormFileInput
            label="Archivo de prueba"
            :archivo="docs.test ? docs.test.name : ''"
            :error="errores.test"
            @change="(file) => $emit('update', 'docs', 'test', file)"
        />
    </form>
</template>

<script>
import FormFileInput from '../form/FormFileInput.vue';

export default {
    name: 'DocsItemForm',
    components: { FormFileInput },
    props: {
        docs: Object,
        errores: Object,
    },
    emits: ['update'],
    data() {
        return {
            dragging: '',
            hovering: '',
        };
    },
};
</script>
