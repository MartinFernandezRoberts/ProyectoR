<template>
    <footer ref="footer" class="bg-anaranjado text-white relative">
        <div class="container mx-auto pl-6 2xl:pl-0 flex justify-between">
            <div class="text-lg pt-3 pb-6">
                <nav>
                    <ul class="flex space-x-4 font-bold">
                        <li>
                            <a href="">Privacidad</a>
                        </li>

                        <li>|</li>

                        <li>
                            <a href="">Términos y condiciones</a>
                        </li>

                        <li>|</li>

                        <li>
                            <a href="">Ayuda</a>
                        </li>

                        <li>|</li>

                        <li>
                            <a href="">Más información</a>
                        </li>
                    </ul>
                </nav>

                <address>Calle n° 0001. Santiago - Chile</address>
            </div>

            <IsotipoBlanco class="w-64 text-white fill-current" />
        </div>
    </footer>
</template>

<script>
import IsotipoBlanco from '../svg/IsotipoBlanco.vue';
import { mapMutations } from 'vuex';

export default {
    name: 'Footer',
    components: {
        IsotipoBlanco,
    },
    mounted() {
        this.setFooterHeight(this.$refs.footer.offsetHeight);
    },
    methods: {
        ...mapMutations(['setFooterHeight']),
    },
};
</script>
