<template>
    <ul class="space-y-2">
        <li class="flex items-center space-x-4">
            <UbicacionIcon class="w-10" />

            <div class="text-sm leading-tight">
                <p class="font-bold">Emplazada en</p>
                <p>{{ item.ubicacion }}</p>
            </div>
        </li>

        <li class="flex items-center space-x-4">
            <AreaIcon class="w-10" />

            <div class="text-sm leading-tight">
                <p class="font-bold">{{ item.area }} m<sup>2</sup> total</p>
                <p>{{ item.construido }} m<sup>2</sup> construido</p>
            </div>
        </li>

        <li class="flex items-center space-x-4">
            <DormitorioIcon class="w-10 p-1" />

            <p class="text-sm font-bold">
                {{ item.dormitorio }}
                {{ pluralize('dormitorio', item.dormitorio) }}
            </p>
        </li>

        <li class="flex items-center space-x-4">
            <TinaIcon class="w-10" />

            <p class="text-sm font-bold">
                {{ item.wc }} {{ pluralize('baño', item.wc) }}
            </p>
        </li>

        <li v-if="item.orientacion" class="flex items-center space-x-4">
            <BrujulaIcon class="w-10 p-1" />

            <p class="text-sm font-bold">
                Mirando hacia el {{ item.orientacion }}
            </p>
        </li>

        <li class="flex items-center space-x-4">
            <PisosIcon class="w-10 p-1" />

            <p class="text-sm font-bold">
                {{ item.piso }}
                {{ pluralize('piso', item.piso) }}
            </p>
        </li>

        <li v-if="item.bodega" class="flex items-center space-x-4">
            <BodegaIcon class="w-10 p-1" />

            <p class="text-sm font-bold">Bodega</p>
        </li>

        <li v-if="item.mascotas" class="flex items-center space-x-4">
            <MascotasIcon class="w-10 p-1" />

            <p class="text-sm font-bold">Mascotas</p>
        </li>

        <li v-if="item.calefaccion" class="flex items-center space-x-4">
            <ChimeneaIcon class="w-10 p-1" />

            <p class="text-sm font-bold">Calefacción</p>
        </li>

        <li v-if="item.cocina" class="flex items-center space-x-4">
            <CocinaIcon class="w-10 p-1" />

            <p class="text-sm font-bold">Cocina</p>
        </li>

        <li v-if="item.terraza" class="flex items-center space-x-4">
            <TerrazaIcon class="w-10 p-1" />

            <p class="text-sm font-bold">Terraza</p>
        </li>

        <li v-if="true" class="flex items-center space-x-4">
            <BalconIcon class="w-10 p-1" />

            <p class="text-sm font-bold">Balcón</p>
        </li>

        <li v-if="item.piscina" class="flex items-center space-x-4">
            <PiscinaIcon class="w-10 p-1" />

            <p class="text-sm font-bold">Piscina</p>
        </li>

        <li v-if="true" class="flex items-center space-x-4">
            <ParrillaIcon class="w-10 p-1" />

            <p class="text-sm font-bold">Quincho</p>
        </li>

        <li v-if="true" class="flex items-center space-x-4">
            <PlazaIcon class="w-10 p-1" />

            <p class="text-sm font-bold">
                {{ formatPrecio(50000) }} gastos comunes
            </p>
        </li>

        <li v-if="item.piscinaE" class="flex items-center space-x-4">
            <PiscinaIcon class="w-10 p-1" />

            <p class="text-sm font-bold">Piscina edificio</p>
        </li>

        <li v-if="true" class="flex items-center space-x-4">
            <GimnasioIcon class="w-10 p-1" />

            <p class="text-sm font-bold">Gimnasio</p>
        </li>

        <li v-if="true" class="flex items-center space-x-4">
            <LavadoraIcon class="w-10 p-1" />

            <p class="text-sm font-bold">Lavandería</p>
        </li>

        <li v-if="true" class="flex items-center space-x-4">
            <GlobosIcon class="w-10 p-1" />

            <p class="text-sm font-bold">Eventos</p>
        </li>

        <li v-if="item.quinchoE" class="flex items-center space-x-4">
            <ParrillaIcon class="w-10 p-1" />

            <p class="text-sm font-bold">Quincho edificio</p>
        </li>
    </ul>
</template>

<script>
import GlobosIcon from '../../../assets/svg/GlobosIcon.vue';
import LavadoraIcon from '../../../assets/svg/LavadoraIcon.vue';
import GimnasioIcon from '../../../assets/svg/GimnasioIcon.vue';
import PlazaIcon from '../../../assets/svg/PlazaIcon.vue';
import ParrillaIcon from '../../../assets/svg/ParrillaIcon.vue';
import PiscinaIcon from '../../../assets/svg/PiscinaIcon.vue';
import BalconIcon from '../../../assets/svg/BalconIcon.vue';
import TerrazaIcon from '../../../assets/svg/TerrazaIcon.vue';
import CocinaIcon from '../../../assets/svg/CocinaIcon.vue';
import ChimeneaIcon from '../../../assets/svg/ChimeneaIcon.vue';
import BodegaIcon from '../../../assets/svg/BodegaIcon.vue';
import PisosIcon from '../../../assets/svg/PisosIcon.vue';
import BrujulaIcon from '@/assets/svg/BrujulaIcon.vue';
import UbicacionIcon from '@/assets/svg/UbicacionIcon.vue';
import MascotasIcon from '@/assets/svg/MascotasIcon.vue';
// import CocheraIcon from '@/assets/svg/CocheraIcon.vue';
import TinaIcon from '@/assets/svg/TinaIcon.vue';
import DormitorioIcon from '@/assets/svg/DormitorioIcon.vue';
import AreaIcon from '@/assets/svg/AreaIcon.vue';

export default {
    name: 'DetalleCasa',
    components: {
        UbicacionIcon,
        AreaIcon,
        TinaIcon,
        BrujulaIcon,
        DormitorioIcon,
        PisosIcon,
        BodegaIcon,
        MascotasIcon,
        ChimeneaIcon,
        CocinaIcon,
        TerrazaIcon,
        BalconIcon,
        PiscinaIcon,
        ParrillaIcon,
        PlazaIcon,
        GimnasioIcon,
        LavadoraIcon,
        GlobosIcon,
    },
    props: {
        item: Object,
    },
    methods: {
        pluralize(palabra, n) {
            if (n > 1) {
                // si no termina con vocal
                if (!'aeiou'.includes(palabra.slice(-1))) {
                    palabra += 'e';
                }

                palabra += 's';
            }

            return palabra;
        },
        formatPrecio(n) {
            let precio = String(n);
            let formateado = '';

            while (precio.length > 0) {
                formateado =
                    (precio.length > 3 ? '.' : '$') +
                    precio.slice(-3) +
                    formateado;
                precio = precio.slice(0, -3);
            }

            return formateado;
        },
    },
};
</script>
