<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { IUser } from '../types/index.types'
  import axios from 'axios'
  import Table from '@/components/Table.vue'

  const search = ref<number | string>('')
  const columns = ref<IUser[]>([])

  const rows = ['Nome', 'C.P.F', 'Dieta', 'Peso']

  function getColumns() {
    if (search.value) {
      axios
        .get('/api/users')
        .then((response) => {
          const users: IUser[] = response.data

          const column = users.filter(({ name }) =>
            name.includes(search.value.toString().toLowerCase())
          )

          return (columns.value = column)
        })
        .catch((error) => {
          console.error(error)
        })
    }

    return (columns.value = [])
  }

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
