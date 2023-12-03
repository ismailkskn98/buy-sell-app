<template>
    <aside :class="{ 'activeBtn': sidebarBtn.navActiveBtn }">
        <ul>
            <li v-for="(item, i) in sidebar" :key="i">
                <routerLink to="" :title="item.title"><span class="material-icons">{{ item.icon }}</span>
                    <p>{{ item.title }}</p>
                </routerLink>
            </li>
        </ul>
    </aside>
</template>

<script setup>
import { ref } from 'vue';
import { Sidebar } from '../stores/Sidebar';
const sidebarBtn = Sidebar();
const sidebar = ref([
    { title: 'ürünlerim', icon: 'shopping_bag' },
    { title: 'ürün oluştur', icon: 'add' },
    { title: 'favorilerim', icon: 'favorite' },
    { title: 'kayıt edilenler', icon: 'save' },
    { title: 'kategoriler', icon: 'category' },
])
</script>