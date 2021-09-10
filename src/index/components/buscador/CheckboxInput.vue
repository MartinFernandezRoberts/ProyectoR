<template>
    <div class="md:space-x-2">
        <input
            class="h-3 w-3 md:h-4 md:w-4"
            :id="campo"
            type="checkbox"
            :value="modelValue"
            @change="$emit('update:modelValue', $event.target.checked)"
        />

        <label
            class="text-gray-700 font-bold mb-2 text-2xs md:text-xs lg:text-sm"
            :for="campo"
        >
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
