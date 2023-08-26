<script setup lang="ts">
  import type { ICards } from '../types/index.types'

  defineProps<ICards>()
</script>

<template>
  <div class="card">
    <div class="p-1 pr-2">
      <img
        class="h-8 w-8 rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="persona"
      />
    </div>
    <div>
      <p class="text-sm font-semibold" data-test="client">{{ client }}</p>
      <p class="text-sm font-normal" data-test="type">
        Tipo: <span class="font-semibold capitalize">{{ type }}</span>
      </p>
      <p class="text-sm font-normal" data-test="hour">
        Horas: <span class="font-semibold capitalize">{{ hour }}</span>
      </p>
    </div>
  </div>
</template>
