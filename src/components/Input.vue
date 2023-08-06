<script setup lang="ts">
  import type { IInput } from '../types/index.types';

  defineProps<IInput>()

  const emit = defineEmits<{
    (e: 'update:modelValue', id: string | number): void
  }>()

  function updateInput(event: any) {
    emit('update:modelValue', event.target.value)
  }
</script>

<template>
  <div class="text-left">
    <label v-if="label" data-test="label">{{ label }}</label>
    <input
      data-test="input"
      :class="error ? 'input-off' : 'input-on'"
      :type="type"
      :placeholder="placeholder"
      @input="updateInput"
    />
  </div>
</template>
