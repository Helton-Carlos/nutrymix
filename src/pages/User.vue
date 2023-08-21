<script setup lang="ts">
  import { ref, watch } from 'vue'
  import Table from '@/components/Table.vue'

  const search = ref<number | string>('')

  const rows = ['Nome', 'C.P.F', 'Dieta', 'Peso']

  const columns = ref<any[]>([])

  const mock = [
    {
      name: 'carlos brito',
      cpf: '025.255.855-33',
      dieta: 'perda de gordura',
      peso: '115,45',
    },
    {
      name: 'jose brito',
      cpf: '033.277.437-02',
      dieta: 'atleta',
      peso: '85,75',
    },
  ]

  function getColumns() {
    if (search.value) {
      const column = mock.filter(({ name }) =>
        name.includes(search.value.toString().toLowerCase())
      )
      return (columns.value = column)
    }

    return (columns.value = [])
  }

  watch(search, getColumns)
</script>

<template>
  <div class="flex flex-col p-4">
    <div class="card p-2 flex-col">
      <label class="text-sm font-semibold pl-1">Digite o nome do(a) paciente:</label>
      <input type="text" placeholder="" v-model="search" class="input-on" />
    </div>

    <Table class="mt-4" :row="rows" :column="columns" />
  </div>
</template>
