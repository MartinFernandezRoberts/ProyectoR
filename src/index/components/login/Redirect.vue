<template>
    <h1>Cargando...</h1>
    <button type="button" @click="getUser">GET USER</button>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Redirect',
    methods: {
        getUser() {
            axios('http://localhost:3000/user')
                .then((res) => console.log(res.data))
                .catch((err) => console.error(err));
        },
    },
};
</script>
