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
                    <h3 class="text-xl">{{ casa.titulo }}</h3>

                    <small class="text-sm text-gray-600">{{
                        casa.estado
                    }}</small>
                </div>

                <img
                    v-if="casa.imagen"
                    :src="casa.imagen[0]"
                    :alt="casa.titulo"
                />

                <h4 class="text-lg">{{ casa.descripcion }}</h4>
                <p>{{ casa.ubicacion }}</p>
                <p>{{ casa.fecha }}</p>

                <div class="flex justify-end pt-3 space-x-2">
                    <StarIcon
                        :class="[
                            'text-dorado',
                            destacando == casa._id
                                ? 'animate-bounce'
                                : 'cursor-pointer',
                            { 'fill-current': casa.destacado },
                        ]"
                        @click="cambiarDestacado(casa._id, casa.destacado)"
                    />
                    <EditIcon class="text-blue-400" @click="edit = casa._id" />
                    <DeleteIcon
                        :class="[
                            'text-rojo',
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
import StarIcon from '../svg/StarIcon.vue';
import CasaService from './CasaService';
import DestacadoService from '../DestacadoService';
import CasaForm from './CasaForm.vue';
import DeleteIcon from '../svg/DeleteIcon.vue';
import EditIcon from '../svg/EditIcon.vue';

export default {
    name: 'CasaList',
    components: {
        CasaForm,
        EditIcon,
        DeleteIcon,
        StarIcon,
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
            destacando: '',
        };
    },
    methods: {
        async actualizarCasa(data) {
            this.guardando = true;
            await CasaService.update(this.edit, data);
            this.guardando = false;
            this.$emit('cargarCasas');
        },
        async eliminarCasa(id) {
            this.eliminando = id;
            await CasaService.delete(id);
            this.eliminando = '';
            this.$emit('cargarCasas');
        },
        async cambiarDestacado(id, esDestacado) {
            this.destacando = id;

            if (esDestacado) {
                await DestacadoService.delete(id);
            } else {
                await DestacadoService.create({
                    categoriaDestacado: 'Casa',
                    itemDestacado: id,
                });
            }

            this.destacando = '';
            this.$emit('cargarCasas');
        },
    },
};
</script>
