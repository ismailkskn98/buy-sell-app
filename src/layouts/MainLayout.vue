<template>
    <div class="main-layout" :class="{ 'activeBtn': sidebarBtn.navActiveBtn }">
        <appHeader />
        <appAside />
        <main>
            <h4>Anasayfa</h4>
            <slot />
        </main>
    </div>
</template>

<script setup>
import { Sidebar } from '../stores/Sidebar.js';
const sidebarBtn = Sidebar();
import appHeader from '../components/appHeader.vue';
import appAside from '../components/appAside.vue';

</script>
