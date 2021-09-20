<template>
    <form class="text-lg lg:text-sm 2xl:text-lg">
        <div class="flex">
            <CustomInput
                v-model="lugar"
                type="text"
                placeholder="Buscar por ciudad, comuna"
                class="flex-auto"
            />

            <CustomInput
                v-model="tasacion"
                type="number"
                placeholder="Precio tasación"
                class="flex-auto ml-6 max-w-xs"
            />

            <button
                type="submit"
                class="
                    ml-12
                    px-6
                    py-2
                    rounded-lg
                    bg-anaranjado
                    text-white
                    font-light
                    hover:bg-rojo
                    transition-colors
                    duration-200
                    ease-out
                "
                @click.prevent="console.log('submit')"
            >
                Buscar
            </button>
        </div>

        <div class="mt-16 flex justify-between space-x-12 lg:mt-10 2xl:mt-16">
            <CustomRadioInput v-model="categoria" :options="['Casa', 'Auto']" />
            <CustomRadioInput
                v-model="subCategoria"
                :options="['Parcelas', 'Urbanas', 'Mansiones', 'Vacacionales']"
            />
            <CustomRadioInput v-model="precio" :options="['5.000', '20.000']" />
        </div>
    </form>
</template>

<script>
import CustomInput from '../../form/CustomInput.vue';
import CustomRadioInput from '../../form/CustomRadioInput.vue';

export default {
    name: 'FiltrosForm',
    components: { CustomInput, CustomRadioInput },
    data() {
        return {
            lugar: '',
            tasacion: '',
            categoria: '',
            subCategoria: '',
            precio: '',
        };
    },
};
</script>
