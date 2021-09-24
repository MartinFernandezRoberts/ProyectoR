<template>
    <form class="flex flex-col space-y-3">
        <div class="flex flex-col space-y-1.5">
            <label class="text-sm font-bold" for="test">
                Archivo de prueba
            </label>

            <div v-if="og.test" class="flex">
                <a
                    class="
                        px-4
                        py-2
                        flex-1
                        rounded-l-lg
                        bg-blue-300
                        text-center
                        font-bold
                        text-white
                    "
                    :href="urlDescarga('test')"
                    >Descargar</a
                >

                <button
                    class="
                        px-4
                        py-2
                        flex-1
                        rounded-r-lg
                        bg-yellow-500
                        text-center
                        font-bold
                    "
                    type="button"
                    @click="$emit('borrarOg', 'docs', 'test')"
                >
                    Reemplazar
                </button>
            </div>

            <FormFileInput
                v-else
                :archivo="docs.test ? docs.test.name : ''"
                :error="errores.test"
                @change="(file) => agregarDoc('test', file)"
            />
        </div>
    </form>
</template>

<script>
import FormFileInput from '../form/FormFileInput.vue';

export default {
    name: 'DocsItemForm',
    components: { FormFileInput },
    props: {
        id: String,
        og: Object,
        docs: Object,
        errores: Object,
    },
    emits: ['update', 'reset', 'borrarOg'],
    data() {
        return {
            dragging: '',
            hovering: '',
        };
    },
    created() {
        this.$emit('reset');
    },
    methods: {
        logOg() {
            console.log(this.og);
        },
        urlDev(path) {
            return 'https://rifasapp.cl/' + path;
        },
        urlDescarga(ind) {
            return this.urlDev(`/api/items/${this.id}/docs/${ind}`);
        },
        agregarDoc(campo, file) {
            const doc = new File([file], `${campo}.pdf`, {
                type: 'application/pdf',
            });
            this.$emit('update', 'docs', 'test', doc);
        },
    },
};
</script>
