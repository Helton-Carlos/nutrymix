<script setup lang="ts">
  defineProps<{
    color?: string
  }>()

  defineEmits<(e: 'onClick') => void>()
</script>

<template>
  <button
    data-test="btn-id"
    :class="{
      'btn-primary': color == 'primary',
      btn: color == 'null',
    }"
    @click="$emit('onClick')"
  >
    <slot></slot>
  </button>
</template>
