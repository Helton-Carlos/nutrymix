<script setup lang="ts">
  import { RouterLink } from 'vue-router'

  const router = [
    { path: '/', icon: 'home' },
    { path: '/user', icon: 'user' },
    { path: '/file', icon: 'th-large' },
    { path: '/calendar', icon: 'calendar-plus' },
    { path: '/historic', icon: 'filter' },
    { path: '/contact', icon: 'file-o' },
    { path: '/config', icon: 'cog' },
  ]
</script>

<template>
  <div class="sidebar">
    <div class="text-center py-8 mt-4">
      <div v-for="(routes, index) in router" :key="index">
        <router-link :to="routes.path">
          <i :class="`cursor-pointer my-4 pi pi-${routes.icon}`"
        /></router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .router-link-active {
    @apply text-primary rounded-full transition-colors;
  }
</style>
