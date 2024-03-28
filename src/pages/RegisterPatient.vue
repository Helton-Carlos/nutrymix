<script setup lang="ts">
  import { useRoute } from 'vue-router'

  const route = useRoute()
</script>

<template>
  <div class="flex flex-wrap">
    <h3 class="font-bold capitalize">{{ route.params.list }}</h3>
  </div>
</template>
