<script setup lang="ts">
  defineProps<{
    title?: string
  }>()
</script>

<template>
  <div class="card-main">
    <h4 class="font-bold text-sm text-center p-2" data-test="title">{{ title }}</h4>
    <slot name="body"/>
  </div>
</template>
