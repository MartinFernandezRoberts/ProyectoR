<template>
    <input
        class="
            appearance-none
            border-3
            rounded-lg
            border-amarillo
            px-6
            py-2
            font-light
            leading-tight
            ring-amarillo
            focus:outline-none focus:border-dorado
            transition-colors
            duration-200
            ease-out
        "
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<script>
export default {
    name: 'CustomInput',
    props: ['modelValue'],
    emits: ['update:modelValue'],
};
</script>
