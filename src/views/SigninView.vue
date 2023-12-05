<template>
    <appForm @login-event="signIn($event)" />
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import appForm from '../components/appForm.vue';
import fetchApi from '../composables/fetchApi.js';

const route = useRoute();
const router = useRouter();

const signIn = async (v$) => {
    const res = await fetchApi(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${import.meta.env.VITE_FIREBASE_API_KEY}`, route.fullPath, v$.value.email.$model, v$.value.password.$model);

    if (res) {
        setTimeout(() => {
            router.replace({ path: '/' });
        }, 1500)
    }
}
</script>