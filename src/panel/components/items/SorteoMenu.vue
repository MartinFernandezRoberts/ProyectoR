<template>
    <DatePicker
        id="fechas"
        mode="dateTime"
        :minute-increment="60"
        :min-date="new Date()"
        color="pink"
        :model-config="datePickerConfig"
        v-model="fechaSorteo"
    />
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
    },
    data() {
        return {
            fechaSorteo: new Date(),
            datePickerConfig: {
                mask: 'DD/MM/YYYY',
            },
        };
    },
};
</script>
