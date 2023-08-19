<script setup lang="ts">
  import { ITable } from '../types/index.types'

  const props = defineProps<ITable>()
</script>

<template>
    <table class="w-full text-sm text-left text-black px-2">
      <thead
        class="text-xs text-grayuppercase bg-white"
      >
        <tr>
          <th
            scope="col"
            class="px-9 py-3 inline-block"
            v-for="rows in props.row"
          >
            {{ rows }}
          </th>
        </tr>
      </thead>
      <tbody>
        <div>
          <tr
            class="bg-white border-b"
            v-for="columns in props.column"
          >
            <td class="px-2 py-3 font-bold text-black">{{ columns.name }}</td>
            <td class="px-4  py-3">{{ columns.cpf }}</td>
            <td class="px-1  py-3">{{ columns.dieta }}</td>
            <td class="px-4 py-3">{{ columns.peso }} Kg</td>
          </tr>
        </div>
      </tbody>
    </table>
</template>
