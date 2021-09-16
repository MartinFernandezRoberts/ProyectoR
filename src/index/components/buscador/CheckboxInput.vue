<template>
    <div class="flex items center space-x-2">
        <input
            class="h-5 w-5"
            :id="campo"
            type="checkbox"
            :value="modelValue"
            @change="$emit('update:modelValue', $event.target.checked)"
        />

        <label class="font-bold text-sm" :for="campo">
            {{ label }}
        </label>
    </div>
</template>

<script>
export default {
    name: 'CheckboxInput',
    props: {
        modelValue: Boolean,
        campo: String,
        label: String,
    },
    emits: ['update:modelValue'],
};
</script>
