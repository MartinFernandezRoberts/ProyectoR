<template>
    <div class="relative px-6 pt-2.5 pb-1.5 rounded-lg bg-amarillo">
        <Marcador
            v-show="modelValue === '' || typeof modelValue === 'undefined'"
            height="48"
            class="
                absolute
                left-0
                -top-8
                transform-gpu
                -translate-x-1/2
                text-dorado
            "
        />

        <template v-for="(option, i) in options" :key="i">
            <button
                type="button"
                @click="select"
                :value="option"
                :class="[
                    'relative font-bold',
                    { 'ml-6': i > 0, 'text-anaranjado': option === modelValue },
                ]"
            >
                <Marcador
                    v-show="option === modelValue"
                    height="48"
                    class="
                        absolute
                        left-2/4
                        -top-11
                        transform-gpu
                        -translate-x-1/2
                        text-anaranjado
                    "
                />

                {{ option }}
            </button>
        </template>
    </div>
</template>

<script>
import Marcador from '@/assets/svg/MarcadorIcon.vue';

export default {
    name: 'CustomRadioInput',
    components: { Marcador },
    props: ['modelValue', 'options'],
    emits: ['update:modelValue'],
    methods: {
        select(e) {
            this.$emit('update:modelValue', e.target.value);
        },
    },
};
</script>
