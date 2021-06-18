<template>
    
    <div class="block h-96 w-full bg-white" 
    v-for="item in casa"
    :key="item._id"
    >
            <div class="flex justify-between">
                <h3 class="text-xl">{{ item.tituloCasa }}</h3>

                <small class="text-sm text-gray-600">{{
                    item.estadoCasa
                }}</small>
            </div>

            <img
                v-if="item.imagenCasa"
                :src="getImage(item.imagenCasa)"
                :alt="item.tituloCasa"
            />

            <h4 class="text-lg">{{ item.descripcionCasa }}</h4>
            <p>{{ item.ubicacionCasa }}</p>
            <p>{{ item.fechaCasa }}</p>
    </div>
</template>

<script>
import CasaService from '../../../panel/CasaService'
export default {
    name: 'CasasDestacadas',
    
    data() {
        return {
            casa: [],
        };
    },
    methods: {
        compararFecha(a, b) {
            if (a.fechaCasa > b.fechaCasa) {
                return -1;
            } else if (b.fechaCasa > a.fechaCasa) {
                return 1;
            } else {
                return 0;
            }
        },
        async loadCasa() {
            try {
                const desordenado = await CasaService.index();
                this.casa = desordenado.sort(this.compararFecha)[0];
            } catch (err) {
                this.error = err.message;
            }
        },
    
        getImage(imagenCasa) {
            if (imagenCasa.length > 0) {
                return imagenCasa[0].url;
            } else {
                return 'https://i.kym-cdn.com/entries/icons/original/000/019/092/sada.gif';
            }
        },
        created() {
            this.loadCasa();
        },
     },
}
</script>