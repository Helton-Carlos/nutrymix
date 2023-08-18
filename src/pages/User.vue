<script setup lang="ts">
  import { ref } from 'vue'
  import Table from '../components/Table.vue'

  const search = ref<number | string>('')
</script>

<template>
  <div class="card flex-col">
    <input type="text" v-model="search" class="input-on" />

    <Table class="mt-4" />
  </div>
</template>
