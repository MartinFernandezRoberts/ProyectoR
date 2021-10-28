<template>
    <div class="flex flex-col space-y-1.5">
        <label class="font-bold text-sm" :for="campo">
            {{ label }}
        </label>

        <div class="flex items-center space-x-2">
            <input
                class="
                    flex-1
                    px-2
                    py-1.5
                    rounded
                    border border-amarillo
                    font-light
                    leading-tight
                    overflow-x-hidden
                    text-xs
                    md:px-4
                    lg:border-2 lg:text-sm
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
import XIcon from '@/assets/svg/XIcon.vue';

export default {
    name: 'NormalInput',
    components: { XIcon },
    props: {
        type: String,
        modelValue: [String, Number],
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
