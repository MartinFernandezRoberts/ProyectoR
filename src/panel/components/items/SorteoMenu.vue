<template>
    <DatePicker
        id="fecha"
        mode="dateTime"
        :minute-increment="30"
        :min-date="new Date()"
        color="pink"
        :model-config="datePickerConfig"
        v-model="fechaSorteo"
    />
    <button
        :class="[
            'bg-pink-400 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-pink-200',
            { 'animate-pulse': cargar },
        ]"
        type="button"
        @click="handleSubmit"
    >
        Agendar Sorteo
    </button>
</template>

<script>
import axios from 'axios';
import { DatePicker } from 'v-calendar';

export default {
    name: 'SorteoMenu',
    components: {
        DatePicker,
    },
    props: {
        id: String,
        fechaSorteo: Date,
    },
    emits: ['cargar'],
    methods: {
        setFecha(fechaSorteo) {
            axios
                .post(`http://localhost:3000/api/items/${this.id}/setSorteo`, {
                    fechaSorteo,
                })
                .then((res) => {
                    console.log(res.data);
                    this.$emit('cargar');
                })
                .catch((err) => {
                    console.error(err);
                });
        },
        handleSubmit() {
            let formData = {
                fechaSorteo: this.fechaSorteo.toISOString(),
            };

            this.$emit(formData);
        },
    },
    data() {
        return {
            fechaSorteo: new Date(),
        };
    },
};
</script>
