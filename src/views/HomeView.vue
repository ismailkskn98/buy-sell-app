<template>
    <div class="product-wrapper">
        <appProduct v-for="item in 5" :key="item" />
    </div>
</template>

<script setup>
import appProduct from '../components/appProduct.vue';
</script>

<style lang="scss" scoped></style>