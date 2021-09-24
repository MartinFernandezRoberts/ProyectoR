<template>
    <div
        class="
            px-4
            py-2
            w-full
            flex flex-col
            border-r border-b border-l-2 border-gray-500
            text-gray-700
            space-y-2
        "
    >
        <DatePicker
            id="fecha"
            :modelValue="fecha"
            mode="dateTime"
            color="pink"
            :minute-increment="30"
            :min-date="new Date()"
            :model-config="datePickerConfig"
            @update:modelValue="update"
        />
    </div>
</template>

<script>
import { DatePicker } from 'v-calendar';

export default {
    name: 'SorteoMenu',
    components: {
        DatePicker,
    },
    props: {
        fechaSorteo: String,
    },
    emits: ['update'],
    data() {
        return {
            fecha: new Date(this.fechaSorteo),
            datePickerConfig: {
                timeAdjust: '18:00:00',
            },
        };
    },
    methods: {
        update(date) {
            this.$emit('update', 'info', 'fechaSorteo', date.toISOString());
        },
    },
};
</script>
