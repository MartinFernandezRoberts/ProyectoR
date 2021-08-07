<template>
    <textarea
        class="
            appearance-none
            border-3
            rounded-lg
            border-amarillo
            px-4
            py-1
            2xl:px-6 2xl:py-2
            font-light
            leading-tight
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
