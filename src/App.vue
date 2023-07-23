<script setup lang="ts">
  import Header from './layout/Header.vue'
  import Sidebar from './layout/Sidebar.vue'
</script>

<template>
  <Header />
  <div class="flex">
    <Sidebar />
    
   <div class="m-14">
    <router-view></router-view>
   </div>
  </div>
</template>
