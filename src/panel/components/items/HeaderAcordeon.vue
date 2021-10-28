<template>
    <button
        type="button"
        :class="[
            'flex justify-between items-end text-left font-bold border-b-2  border-gray-500',
            error ? 'text-red-700' : 'text-gray-500',
        ]"
    >
        {{ seccion }}

        <div class="px-2 pt-1 bg-gray-500">
            <ChevronIcon
                :class="[
                    'h-3 bg-gray-500 text-white',
                    {
                        'transform rotate-180': actual,
                    },
                ]"
            />
        </div>
    </button>
</template>

<script>
import ChevronIcon from '@/assets/svg/ChevronIcon.vue';

export default {
    name: 'HeaderAcordeon',
    components: { ChevronIcon },
    props: {
        seccion: String,
        actual: Boolean,
        error: Boolean,
    },
};
</script>
