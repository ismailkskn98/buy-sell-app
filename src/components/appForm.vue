<template>
    <form @submit.prevent="">
        <h1 v-if="$route.fullPath === '/signin'">Giriş Yap</h1>
        <h1 v-else-if="$route.fullPath === '/signup'">Kayıt Ol</h1>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" placeholder="Email giriniz" name="email">
        </div>
        <div class="form-group">
            <label for="password">Parola</label>
            <input type="password" placeholder="Parolanızı giriniz" name="password">
        </div>
        <button v-if="$route.fullPath === '/signin'">Giriş Yap</button>
        <button v-else-if="$route.fullPath === '/signup'">Kayıt Ol</button>
        <p v-if="$route.fullPath === '/signin'">Hesabın yok mu? <routerLink to="/signup">Kayıt Ol</routerLink>
        </p>
        <p v-else-if="$route.fullPath === '/signup'">Hesabın var mı? <routerLink to="/signin">Giriş Yap</routerLink>
        </p>
    </form>
</template>

<script setup>
</script>

<style></style>