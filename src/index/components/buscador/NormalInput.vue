<template>
    <div class="flex flex-col md:space-y-1.5">
        <label class="font-bold text-2xs md:text-xs lg:text-sm" :for="campo">
            {{ label }}
        </label>

        <div class="flex items-center md:space-x-2">
            <input
                class="
                    flex-1
                    py-1.5
                    rounded
                    border border-amarillo
                    font-light
                    leading-tight
                    text-2xs
                    w-full
                    px-1.5
                    md:text-xs md:px-4
                    lg:text-sm
                    2xl:px-6 2xl:py-2
                "
                :type="type"
                :id="campo"
                :value="modelValue"
                :placeholder="label"
                :list="list.length > 0 ? `lista-${campo}` : ''"
                @input="$emit('update:modelValue', $event.target.value)"
            />

            <datalist v-if="list.length > 0" :id="`lista-${campo}`">
                <option v-for="(option, i) in list" :key="i" :value="option" />
            </datalist>

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
    name: 'NormalInput',
    components: { XIcon },
    props: {
        type: String,
        modelValue: String,
        campo: String,
        label: String,
        list: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    emits: ['update:modelValue', 'reset'],
};
</script>
