<template>
    <footer ref="footer" class="bg-anaranjado text-white relative">
        <div
            class="container mx-auto flex justify-between pl-2 md:pl-6 2xl:pl-0"
        >
            <div class="pt-3 pb-6 text-2xs md:text-lg">
                <nav>
                    <ul class="flex font-bold space-x-1 md:space-x-4">
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
                <div class="flex flex-row w-full items-center mx-auto">
                    <address class="pt-2 flex-1 flex lg:flex-none">
                        Calle n° 0001. Santiago - Chile
                    </address>

                    <IsotipoBlanco
                        class="
                            text-white
                            fill-current
                            w-14
                            inline-flex
                            md:w-16
                            lg:hidden
                        "
                    />
                </div>
            </div>

            <IsotipoBlanco
                class="text-white fill-current w-28 hidden lg:block"
            />
        </div>
    </footer>
</template>

<script>
import IsotipoBlanco from '@/assets/svg/IsotipoIcon.vue';
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
