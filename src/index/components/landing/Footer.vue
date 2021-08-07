<template>
    <footer ref="footer" class="bg-anaranjado text-white">
        <div class="container mx-auto pl-6 2xl:pl-0">
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
        </div>
    </footer>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name: 'Footer',
    mounted() {
        this.setFooterHeight(this.$refs.footer.offsetHeight);
    },
    methods: {
        ...mapMutations(['setFooterHeight']),
    },
};
</script>
