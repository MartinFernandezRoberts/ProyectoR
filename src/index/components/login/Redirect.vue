<template>
    <section
        id="como-funciona"
        class="flex justify-center items-center"
        ref="como"
    >
        <Cargando />
    </section>
</template>

<script>
import axios from 'axios';
import { mapMutations } from 'vuex';
import Cargando from '../Cargando.vue';

export default {
    name: 'Redirect',
    components: { Cargando },
    created() {
        axios('https://rifasapp.cl/user')
            .then((res) => {
                this.setUser(res.data);
                window.location.href = '/buscador';
            })
            .catch(() => {
                window.location.href = '/';
                this.setUser(false);
            });
    },
    methods: {
        ...mapMutations(['setUser']),
    },
};
</script>
