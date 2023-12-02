<template>
  <Component :is="$route.meta.componentLayout">
    <RouterView />
  </Component>
</template>

<script setup>
import { initFirebase } from './db/db.js';
initFirebase();
</script>

<style lang="scss">
@import url('./assets/css/main.scss');
</style>
