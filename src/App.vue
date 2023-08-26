<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import NameTitle from '@/components/NameTitle.vue'
  import Header from '@/layout/Header.vue'
  import Sidebar from '@/layout/Sidebar.vue'

  const route = useRoute()

  function openSidebar() {
    alert('hey')
  }
</script>

<template>
  <Header @open-sidebar="openSidebar" />
  <div class="flex">
    <Sidebar />
    <div class="m-14">
      <NameTitle>
        <template #title>
          <span class="bg-primary rounded-full pr-1 mr-1"></span>
          <span class="text-base font-bold capitalize">{{
            route.meta.title
          }}</span>
        </template>
        <template #subTitle>
          <p class="text-sm">{{ route.meta.subTitle }}</p>
        </template>
      </NameTitle>

      <div class="m-4">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
