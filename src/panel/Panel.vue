<template>
    <nav
        class="
            flex
            items-center
            justify-between
            flex-wrap
            bg-black
            p-6
            mb-10
            text-white
        "
    >
        <div class="flex items-center">
            <a class="text-xl font-bold" href="/">ProyectoR</a>
            <h2>
                <span class="text-pink-600 font-bold mx-1"> ></span>Panel de
                Control
            </h2>
        </div>
        <div>
            <router-link
                to="/panel/casa"
                active-class="text-pink-600 font-bold"
            >
                Casa
            </router-link>

            <span class="mx-2">|</span>

            <router-link
                to="/panel/banners"
                active-class="text-pink-600 font-bold"
            >
                Banners
            </router-link>

            <span class="mx-2">|</span>

            <router-link
                to="/panel/banner_test"
                active-class="text-pink-600 font-bold"
            >
                Banner Test
            </router-link>
        </div>
    </nav>
    <router-view></router-view>
</template>

<script>
export default {
    name: 'Panel',
};
</script>
