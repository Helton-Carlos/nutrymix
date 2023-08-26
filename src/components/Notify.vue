<script setup lang="ts">
  import type { INotify } from '../types/index.types'
  import { ref, onMounted } from 'vue'

  defineProps<INotify>()

  const close = ref<boolean>(true)

  onMounted(() => {
    setTimeout(() => {
      close.value = false
    }, 2500)
  })
</script>

<template>
  <div
    class="absolute bottom-0 right-2 z-10 m-8 bg-error min-w-[150px] h-[70px] p-2 rounded-lg"
    v-if="close"
  >
    <div class="flex items-center gap-4 text-white">
      <slot name="icon"></slot>

      <div class="text-left">
        <p class="font-bold">{{ title }}</p>
        <span>{{ text }}</span>
      </div>
    </div>
  </div>
</template>
