<template>
    <section
        id="como-funciona"
        class="flex justify-center items-center bg-green-400"
        ref="como"
    >
        <h2 class="text-xl text-white font-bold lg:text-4xl">
            Aquí dirá cómo participar
        </h2>

        <button type="button" @click="scrollear">scroll</button>
    </section>
</template>

<script>
export default {
    name: 'ComoParticipar',
    methods: {
        scrollear() {
            this.$refs.como.scrollIntoView();
        },
    },
};
</script>
