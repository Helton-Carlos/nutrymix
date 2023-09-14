<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import { breakpoints } from '../use/breakpoints.use'

  defineProps<{ menuMobile: boolean }>()

  const { xs } = breakpoints()

  const router = [
    { path: '/', icon: 'home', name: 'dashboard' },
    { path: '/user', icon: 'user', name: 'user' },
    { path: '/file', icon: 'th-large', name: 'file' },
    { path: '/calendar', icon: 'calendar-plus', name: 'calendar' },
    { path: '/historic', icon: 'filter', name: 'historic' },
    { path: '/contact', icon: 'file-o', name: 'contact' },
    { path: '/config', icon: 'cog', name: 'config' },
  ]
</script>

<template>
  <div class="sidebar-desktop" v-if="!xs">
    <div class="text-center py-8 mt-4">
      <div v-for="routes in router" :key="routes.name">
        <router-link :to="routes.path">
          <i :class="`cursor-pointer my-4 pi pi-${routes.icon}`"
        /></router-link>
      </div>
    </div>
  </div>
  <transition name="fade" mode="out-in">
    <div
      class="absolute z-20 top-0 right-0 min-w-full min-h-screen bg-secondary bg-opacity-75 transition-opacity"
      v-if="xs && menuMobile"
    >
      <div class="sidebar-mobile">
        <div class="text-left py-8 mt-4">
          <div v-for="routes in router" :key="routes.name">
            <router-link :to="routes.path" @click="$emit('closeMenu')">
              <i :class="`cursor-pointer pr-2 my-4 pi pi-${routes.icon}`" />
              <span class="capitalize font-semibold">{{
                routes.name
              }}</span></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
  .router-link-active {
    @apply bg-primary text-white py-1 px-1.5 rounded-md transition-colors;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.2s ease;
  }
</style>
