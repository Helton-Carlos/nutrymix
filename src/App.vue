<script setup lang="ts">
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'
  import NameTitle from '@/components/NameTitle.vue'
  import Header from '@/layout/Header.vue'
  import Sidebar from '@/layout/Sidebar.vue'
  import { breakpoints } from './use/breakpoints.use'

  const route = useRoute()
  const { xs } = breakpoints()

  const menuMobile = ref<boolean>(false)

  function openSidebar() {
    menuMobile.value = !menuMobile.value
  }

  function closeSidebar() {
    menuMobile.value = false
  }
</script>

<template>
  <Header @open-sidebar="openSidebar" />
  <div class="flex">
    <Sidebar @close-menu="closeSidebar" :menuMobile="menuMobile" />

    <div :class="xs ? 'mt-14' : 'm-14'">
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
