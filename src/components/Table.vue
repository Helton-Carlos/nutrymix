<script setup lang="ts">
  import { ITable } from '../types/index.types'

  const props = defineProps<ITable>()
</script>

<template>
  <table class="w-full text-sm text-center text-black bg-white">
    <div class="p-2">
      <thead class="text-xs text-black uppercase">
        <tr>
          <th
            scope="col"
            class="px-9 inline-block"
            v-for="rows in props.row"
            :key="rows"
            data-test="row"
          >
            {{ rows }}
          </th>
        </tr>
      </thead>
      <tbody>
        <div>
          <tr
            class="border-b"
            v-for="columns in props.column"
            data-test="column"
          >
            <td class="px-2 py-3 font-bold text-black capitalize">
              {{ columns.name }}
            </td>
            <td class="px-4 py-3">{{ columns.cpf }}</td>
            <td class="px-8 py-3 capitalize">{{ columns.dieta }}</td>
            <td class="px-7 py-3">{{ columns.peso }} Kg</td>
          </tr>
        </div>
      </tbody>
    </div>
  </table>
</template>
