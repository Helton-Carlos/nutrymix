<script setup lang="ts">
  import { ref, onMounted, watch } from 'vue'
  import { IColumn } from '../types/index.types'
  import Table from '@/components/Table.vue'

  const search = ref<number | string>('')

  const rows = ['Nome', 'C.P.F', 'Dieta', 'Peso']

  const columns = ref<IColumn[]>([])

  const users = ref<any[]>([])

  function getColumns() {
    if (search.value) {
      const column = users.value.filter(({ name }) =>
        name.includes(search.value.toString().toLowerCase())
      )
      return (columns.value = column)
    }

    return (columns.value = [])
  }

  onMounted(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((json) => {
        users.value = json
      })
  })

  watch(search, getColumns)
</script>

<template>
  <div class="flex flex-col p-4">
    <div class="card p-2 flex-col">
      <label class="text-sm font-semibold pl-1"
        >Digite o nome do(a) paciente:</label
      >
      <input type="text" placeholder="" v-model="search" class="input-on" />
    </div>

    <Table class="mt-4" :row="rows" :column="columns" />
  </div>
</template>
