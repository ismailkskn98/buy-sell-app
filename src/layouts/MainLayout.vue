<template>
    <div class="main-layout">
        <appHeader />
        <appAside />
        <main>
            <h2>Anasayfa</h2>
            <slot />
        </main>
    </div>
</template>

<script setup>
import appHeader from '../components/appHeader.vue';
import appAside from '../components/appAside.vue';
</script>
