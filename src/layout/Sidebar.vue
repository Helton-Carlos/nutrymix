<script setup lang="ts">
  const router = [
    { path: '/', icon: 'th-large' },
    { path: '/', icon: 'user' },
    { path: '/', icon: 'th-large' },
    { path: '/', icon: 'calendar-plus' },
    { path: '/', icon: 'file-o' },
    { path: '/', icon: 'chevron-circle-left' },
    { path: '/', icon: 'cog' },
  ]
</script>

<template>
  <div class="sidebar">
    <div class="mx-auto text-center py-8 mt-4">
      <i
        v-for="(routes, index) in router"
        :key="index"
        :class="`w-[40px] py-3 pi pi-${routes.icon}`"
      />
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  @apply bg-primary text-white rounded-full transition-colors
}
</style>
