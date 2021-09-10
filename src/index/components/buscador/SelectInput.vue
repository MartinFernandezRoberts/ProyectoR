<template>
    <div class="flex flex-col md:space-y-1.5">
        <label class="font-bold text-2xs md:text-xs lg:text-sm" :for="campo">
            {{ label }}
        </label>

        <div class="flex items-center md:space-x-2">
            <select
                :class="[
                    'flex-1 py-1.5 border rounded border-amarillo font-light leading-tight text-2xs md:text-xs md:px-4 lg:text-sm 2xl:px-6 2xl:py-2',
                    { 'text-gray-400': !modelValue },
                ]"
                :id="campo"
                :value="modelValue"
                @change="$emit('update:modelValue', $event.target.value)"
            >
                <option class="" value="" disabled selected hidden>
                    {{ label }}
                </option>

                <option
                    v-for="(opcion, i) in opciones"
                    :key="i"
                    class="text-gris"
                    :value="opcion"
                >
                    {{ textos[i] || format(opcion) }}
                </option>
            </select>

            <XIcon
                v-show="modelValue"
                class="h-5 cursor-pointer text-gray-400"
                @click="$emit('reset')"
            />
        </div>
    </div>
</template>

<script>
import XIcon from '../svg/XIcon.vue';

export default {
    name: 'SelectInput',
    components: { XIcon },
    props: {
        modelValue: String,
        campo: String,
        label: String,
        opciones: Array,
        textos: {
            type: Array,
            default() {
                return [];
            },
        },
        format: {
            type: Function,
            default(str) {
                return str.charAt(0).toUpperCase() + str.slice(1);
            },
        },
    },
    emits: ['update:modelValue', 'reset'],
};
</script>
