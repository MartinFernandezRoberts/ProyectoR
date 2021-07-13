<template>
    <div class="flex justify-center items-center space-x-6">
        <span id="punto-1" class="w-6 h-6 bg-amarillo rounded-full" />
        <span id="punto-2" class="w-6 h-6 bg-amarillo rounded-full" />
        <span id="punto-3" class="w-6 h-6 bg-amarillo rounded-full" />
    </div>
</template>

<script>
export default {
    name: 'Cargando',
};
</script>

<style scoped>
#punto-1 {
    animation: pulse 2s linear 0s infinite;
}

#punto-2 {
    animation: pulse 2s linear 0.66s infinite;
}

#punto-3 {
    animation: pulse 2s linear 1.33s infinite;
}

@keyframes pulse {
    0% {
        opacity: 10%;
    }

    25% {
        opacity: 100%;
    }

    50% {
        opacity: 100%;
    }

    75% {
        opacity: 10%;
    }

    100% {
        opacity: 10%;
    }
}
</style>
