<template>
    <header>
        <div class="icon"><span @click="closeNav()" class="material-icons">menu</span></div>
        <div class="login">login</div>
    </header>
</template>

<script setup>
import { ref } from 'vue';
import { Sidebar } from '../stores/Sidebar';
const sidebarBtn = Sidebar();
const emit = defineEmits(['closeNav-emit'])
const navActiveBtn = ref(false);
const closeNav = () => {
    navActiveBtn.value = !navActiveBtn.value;
    sidebarBtn.setSideBtn(navActiveBtn.value);
}
</script>
