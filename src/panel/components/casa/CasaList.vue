<template>
    <p class="error" v-if="error">{{ error }}</p>

    <div class="grid grid-cols-3 gap-4">
        <div
            v-for="casa in casas"
            :key="casa._id"
            class="border rounded p-5 bg-gray-100 shadow"
        >
            <CasaForm
                v-if="edit == casa._id"
                :casa="casa"
                :guardando="guardando"
                @close="edit = ''"
                @guardar="actualizarCasa"
            />

            <div v-else>
                <div class="flex justify-between">
                    <h3 class="text-xl">{{ casa.tituloCasa }}</h3>

                    <small class="text-sm text-gray-600">{{
                        casa.estadoCasa
                    }}</small>
                </div>

                <img
                    v-if="casa.imagenCasa"
                    :src="casa.imagenCasa[0]"
                    :alt="casa.tituloCasa"
                />

                <h4 class="text-lg">{{ casa.descripcionCasa }}</h4>
                <p>{{ casa.ubicacionCasa }}</p>
                <p>{{ casa.fechaCasa }}</p>

                <div class="flex justify-end pt-3 space-x-2">
                    <EditIcon
                        class="text-yellow-400 cursor-pointer"
                        @click="edit = casa._id"
                    />
                    <DeleteIcon
                        :class="[
                            'text-red-500',
                            eliminando == casa._id
                                ? 'animate-bounce'
                                : 'cursor-pointer',
                        ]"
                        @click="eliminarCasa(casa._id)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CasaService from './CasaService';
import CasaForm from './CasaForm.vue';
import DeleteIcon from '../svg/DeleteIcon.vue';
import EditIcon from '../svg/EditIcon.vue';

export default {
    name: 'CasaList',
    components: {
        CasaForm,
        EditIcon,
        DeleteIcon,
    },
    props: {
        casas: Array,
    },
    emits: ['cargarCasas'],
    data() {
        return {
            error: '',
            edit: '',
            guardando: false,
            eliminando: '',
        };
    },
    methods: {
        async actualizarCasa(data) {
            this.guardando = true;
            await CasaService.update(this.edit, data);
            this.guardando = false;
            this.$emit('cargarCasa');
        },
        async eliminarCasa(id) {
            this.eliminando = id;
            await CasaService.delete(id);
            this.eliminando = '';
            this.$emit('cargarCasa');
        },
    },
};
</script>
