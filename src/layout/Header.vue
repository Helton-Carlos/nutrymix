<script setup lang="ts">
  import { ref } from 'vue'

  const name = ref<string>('John Smith')
</script>

<template>
  <header class="header-nutry">
    <div class="mx-auto px-3 pt-3 flex justify-between">
      <div>
        <img src="../assets/nutrymix.svg" alt="nutrymix" />
      </div>

      <div class="flex items-center">
        <img
          class="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="persona"
        />
        <div class="cursor-pointer hover:text-primary flex items-center">
          <span class="text-sm font-bold pl-2">{{ name }}</span>
          <i class="pi pi-angle-down"></i>
        </div>
      </div>
    </div>
  </header>
</template>
