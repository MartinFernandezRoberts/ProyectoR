<template>
    <button
        class="
            mb-5
            px-4
            py-2
            bg-pink-400
            text-white
            font-bold
            rounded
            hover:bg-pink-600
        "
        v-if="!nuevo"
        @click="nuevo = true"
    >
        Agregar Evento
    </button>

    <EventoForm
        v-else
        :idBanner="idBanner"
        :guardando="guardando"
        @guardar="agendar"
        @cerrar="nuevo = false"
    />

    <div
        v-for="(evento, i) in agenda"
        :key="i"
        class="bg-white shadow rounded px-8 py-6 mb-4"
    >
        <ul class="divide-y">
            <li>
                Ubicación: <span>{{ evento.ubicacion }}</span>
            </li>
            <li>
                Fecha de inicio: <span>{{ formatFecha(evento.fechaIni) }}</span>
            </li>
            <li>
                Fecha de fin: <span>{{ formatFecha(evento.fechaFin) }}</span>
            </li>
            <li>
                Con horario: <span>{{ evento.horario ? 'Sí' : 'No' }}</span>
            </li>
            <li>
                Recurrencia: <span>{{ evento.recurrencia }}</span>
            </li>
            <li v-if="evento.recurrencia === 'semanal'">
                Semanas restantes: <span>{{ evento.iteracion }}</span>
            </li>
        </ul>

        <div class="mt-auto flex justify-end pt-3 space-x-2">
            <DeleteIcon
                :class="[
                    'text-red-500',
                    eliminando == evento._id
                        ? 'animate-bounce'
                        : 'cursor-pointer',
                ]"
                @click="eliminarEvento(evento._id)"
            />
        </div>
    </div>

    <button
        class="
            mt-auto
            px-4
            py-2
            bg-gray-400
            text-white
            font-bold
            rounded
            hover:bg-gray-600
        "
        type="button"
        @click="$emit('cerrar')"
    >
        Volver
    </button>
</template>

<script>
import DeleteIcon from '../svg/DeleteIcon.vue';
import AgendaService from './AgendaService';
import EventoForm from './EventoForm.vue';

export default {
    name: 'BannerAgenda',
    components: {
        EventoForm,
        DeleteIcon,
    },
    props: {
        idBanner: String,
        agenda: Array,
    },
    emits: ['cargarBanners'],
    data() {
        return {
            nuevo: false,
            guardando: false,
            eliminando: '',
            error: '',
        };
    },
    methods: {
        formatFecha(fechaIso) {
            return new Date(fechaIso).toLocaleString();
        },
        async agendar(data) {
            this.guardando = true;

            try {
                await AgendaService.create(data);
                this.nuevo = false;
                this.$emit('cargarBanners');
            } catch (error) {
                console.error(error);
            }

            this.guardando = false;
        },
        async eliminarEvento(id) {
            this.eliminando = id;

            if (window.confirm('¿Eliminar evento?')) {
                try {
                    await AgendaService.delete(id);
                    this.$emit('cargarBanners');
                } catch (error) {
                    console.error(error);
                }
            }

            this.eliminando = '';
        },
    },
};
</script>

<style scoped>
li {
    display: flex;
    justify-content: space-between;
}
</style>
