<template>
    <p class="error" v-if="error">{{ error }}</p>
    <div
        v-for="item in casa"
        :key="item._id"
        class="border rounded p-5 bg-gray-100 shadow divide-y"
    >
        <CasaForm
            v-if="edit == item._id"
            :casa="item"
            :guardando="guardando"
            @close="edit = ''"
            @guardar="updateCasa"
        />

        <div v-else>
            <div class="flex justify-between">
                <h3 class="text-xl">{{ item.tituloCasa }}</h3>

                <small class="text-sm text-gray-600">{{
                    item.estadoCasa
                }}</small>
            </div>

            <h4 class="text-lg">{{ item.descripcionCasa }}</h4>
            <p>{{ item.ubicacionCasa }}</p>
            <p>{{ item.fechaCasa }}</p>

            <div class="flex justify-end pt-3">
                <EditIcon
                    color="gold"
                    class="cursor-pointer ml-2"
                    @click="edit = item._id"
                />
                <DeleteIcon
                    color="red"
                    :class="[
                        'ml-2',
                        eliminando == item._id
                            ? 'animate-bounce'
                            : 'cursor-pointer',
                    ]"
                    @click="deleteCasa(item._id)"
                />
            </div>
        </div>
    </div>
</template>

<script>
import CasaService from '../../CasaService';
import CasaForm from './CasaForm';
import DeleteIcon from '../DeleteIcon';
import EditIcon from '../EditIcon';
export default {
    name: 'CasaList',
    components: {
        CasaForm,
        EditIcon,
        DeleteIcon,
    },
    props: {
        casa: Array,
    },
    emits: ['cargarCasa'],
    data() {
        return {
            error: '',
            edit: '',
            guardando: false,
            eliminando: '',
        };
    },
    methods: {
        async updateCasa(data) {
            this.guardando = true;
            await CasaService.update(this.edit, data);
            this.guardando = false;
            this.$emit('cargarCasa');
        },
        async deleteCasa(id) {
            this.eliminando = id;
            await CasaService.delete(id);
            this.eliminando = '';
            this.$emit('cargarCasa');
        },
    },
};
</script>