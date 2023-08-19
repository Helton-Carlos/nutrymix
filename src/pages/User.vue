<script setup lang="ts">
  import { ref } from 'vue'
  import Table from '../components/Table.vue'

  const search = ref<number | string>('')

  const rows = ['Nome', 'C.P.F', 'Dieta', 'Peso']

  const columns = [
    {
      name: 'Carlos Brito',
      cpf: '025.255.855-33',
      dieta: 'Perda de gordura',
      peso: '115,45',
    },
    {
      name: 'Jose Brito',
      cpf: '033.277.437-02',
      dieta: 'Atleta',
      peso: '85,75',
    },
  ]
</script>

<template>
  <div class="flex flex-col p-4">
    <div class="card p-4">
      <input
        type="text"
        placeholder="pesquisa de pacientes"
        v-model="search"
        class="input-on"
      />
    </div>

    <Table class="mt-4" :row="rows" :column="columns" />
  </div>
</template>
