<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import NameTitle from './components/NameTitle.vue'
  import Header from './layout/Header.vue'
  import Sidebar from './layout/Sidebar.vue'

  const route = useRoute()
</script>

<template>
  <Header />
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

      <router-view></router-view>
    </div>
  </div>
</template>
