<script setup lang="ts">
import type { INotify } from '../types/index.types';

defineProps<INotify>();
</script>

<template>
  <div
    :class="bgGround ? 'bg-success':'bg-error'"
    class="absolute bottom-0 right-2 z-50 min-w-[250px] h-[70px] m-8 p-2 px-4 rounded-lg"
  >
    <div class="flex items-center gap-4 text-white">
      <slot name="icon"></slot>

      <div class="text-left">
        <p class="font-medium">{{ title }}</p>
        <span>{{ text }}</span>
      </div>
    </div>
  </div>
</template>
