<template>
    <svg viewBox="0 0 32 32">
        <defs>
            <mask id="flecha">
                <rect x="0" y="0" width="32" height="32" fill="white" />

                <polyline
                    points="13,8 21,16 13,24"
                    stroke="black"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                />
            </mask>
        </defs>

        <circle
            cx="16"
            cy="16"
            r="16"
            fill="currentColor"
            mask="url(#flecha)"
        />
    </svg>
</template>

<script>
export default {
    name: 'FlechaCirculoIcon',
};
</script>
