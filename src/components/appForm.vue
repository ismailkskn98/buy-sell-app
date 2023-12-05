<template>
    <form @submit.prevent="onLogin()">
        <h1 v-if="$route.fullPath === '/signin'">Giriş Yap</h1>
        <h1 v-else-if="$route.fullPath === '/signup'">Kayıt Ol</h1>
        <div class="form-group">
            <input :class="{ 'error': v$.email.$error, 'message': message }" @blur="v$.email.$touch"
                v-model="v$.email.$model" type="email" placeholder="Email giriniz" name="email">
            <label class="form-error-text" v-if="v$.email.$error" for="email"><span class="material-icons">warning</span>{{
                v$.email.$errors[0].$message }}</label>
            <span class="material-icons input-icon">email</span>
        </div>
        <div class="form-group">
            <input :class="{ 'error': v$.password.$error, 'message': message }" @blur="v$.password.$touch"
                v-model="v$.password.$model" type="password" placeholder="Parolanızı giriniz" name="password">
            <label class="form-error-text" v-if="v$.password.$error" for="password"><span
                    class="material-icons">warning</span>{{
                        v$.password.$errors[0].$message }}</label>
            <span class="material-icons input-icon">lock</span>
        </div>
        <p class="message" v-if="message">Başarıyla yönlendiriliyor.</p>
        <button v-if="$route.fullPath === '/signin'">Giriş Yap</button>
        <button v-else-if="$route.fullPath === '/signup'">Kayıt Ol</button>
        <p v-if="$route.fullPath === '/signin'">Hesabın yok mu? <routerLink to="/signup">Kayıt Ol</routerLink>
        </p>
        <p v-else-if="$route.fullPath === '/signup'">Hesabın var mı? <routerLink to="/signin">Giriş Yap</routerLink>
        </p>
    </form>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { reactive, ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength, helpers } from '@vuelidate/validators';

const router = useRouter();
const route = useRoute();

const message = ref(false);
const state = reactive({
    email: '',
    requiredNameLength: 8,
    password: '',
    requiredPasswordLength: 4,
})
const rules = {
    email: {
        required: helpers.withMessage('Bu alan zorunludur.', required),
        email: helpers.withMessage('Geçerli bir mail adresi girmelisiniz.', email),
        minLength: helpers.withMessage(`Minimum ${state.requiredNameLength} karakter girmelisiniz.`, minLength(state.requiredNameLength))
    },
    password: {
        required: helpers.withMessage('Bu alan zorunludur.', required),
        minLength: helpers.withMessage(`minimum ${state.requiredPasswordLength} karakter girmeilisiniz.`, minLength(state.requiredPasswordLength))
    }
}
const v$ = useVuelidate(rules, state);

const emit = defineEmits(['login-event']);

const onLogin = () => {
    if (!v$.value.email.$error && !(state.email.trim() === '') && !(state.password.trim() === '') && !v$.value.password.$error) {
        emit("login-event", v$);
        v$.value.email.$model = '';
        v$.value.password.$model = '';
        message.value = true;
        setTimeout(() => {
            v$.value.$reset();

        }, 100)
        setTimeout(() => {
            message.value = false;
            if (route.fullPath === '/signup') {
                router.push({ path: '/signin', replace: true })
            }
        }, 1500)
    } else {
        alert('Lütfen gerekli alanları doldurunuz!');
    }
}

</script>

<style></style>