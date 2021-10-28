<template>
    <nav
        class="
            flex flex-wrap flex-col
            md:flex-row
            justify-between
            md:items-center
            bg-black
            p-4
            md:p-6
            text-white
        "
    >
        <div class="flex items-center">
            <a href="/">
                <IsotipoIcon class="w-12 text-white" />
            </a>

            <router-link class="text-sm md:text-base" to="/panel">
                <span class="text-pink-600 font-bold mx-1"> ></span>Panel de
                Control
            </router-link>

            <SandwichIcon
                class="ml-auto h-4 md:hidden cursor-pointer"
                @click="menu = !menu"
            />
        </div>

        <nav :class="['mt-4 md:mt-0 md:block', { hidden: !menu }]">
            <div
                v-for="(link, i) in links"
                :key="i"
                class="flex items-center md:inline"
            >
                <span v-if="i > 0" class="mx-2 hidden md:inline">|</span>
                <span class="mr-4 h-px flex-1 md:hidden bg-pink-600" />

                <router-link
                    :to="`/panel/${link}`"
                    active-class="text-pink-600 font-bold"
                    @click="menu = false"
                >
                    {{ capitalize(link) }}
                </router-link>
            </div>
        </nav>
    </nav>

    <router-view></router-view>
</template>

<script>
import IsotipoIcon from '@/assets/svg/IsotipoIcon.vue';
import SandwichIcon from '@/assets/svg/SandwichIcon.vue';

export default {
    name: 'Panel',
    components: { SandwichIcon, IsotipoIcon },
    data() {
        return {
            links: ['items', 'banners'],
            menu: false,
        };
    },
    methods: {
        capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
    },
};
</script>
