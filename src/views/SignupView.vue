<template>
    <appForm @login-event="signUp($event)" />
</template>

<script setup>
import { useRoute } from 'vue-router'
import appForm from '../components/appForm.vue';
import fetchApi from '../composables/fetchApi.js';

const route = useRoute();
const signUp = async (v$) => {
    const res = await fetchApi(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${import.meta.env.VITE_FIREBASE_API_KEY}`, route.fullPath, v$.value.email.$model, v$.value.password.$model);
    onsole.log(res);
}
</script>
