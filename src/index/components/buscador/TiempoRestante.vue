<template>
    <div class="flex flex-col">
        <div class="flex text-center font-bold">
            <div class="flex-1">
                {{ String(tiempoRestante.dias).padStart(2, '0') }}
            </div>

            <div>:</div>

            <div class="flex-1">
                {{ String(tiempoRestante.horas).padStart(2, '0') }}
            </div>

            <div>:</div>

            <div class="flex-1">
                {{ String(tiempoRestante.minutos).padStart(2, '0') }}
            </div>

            <div>:</div>

            <div class="flex-1">
                {{ String(tiempoRestante.segundos).padStart(2, '0') }}
            </div>
        </div>

        <div class="grid grid-cols-4 text-center text-2xs font-thin">
            <div>DÍAS</div>
            <div>HORAS</div>
            <div>MINUTOS</div>
            <div>SEGUNDOS</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TiempoRestante',
    props: {
        tiempoRestante: Object,
    },
};
</script>
