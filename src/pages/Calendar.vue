<script setup lang="ts">
  import { useRoute } from 'vue-router';

  const route = useRoute();
</script>

<template>
  <h2 class="text-3xl font-bold m-4 capitalize">
    {{ route.meta.title }}
  </h2>
</template>
