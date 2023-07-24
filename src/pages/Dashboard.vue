<script setup lang="ts">
  import { ref } from 'vue'
  import CardDraggable from '../components/CardDraggable.vue'

  interface ICards {
    client: string
    type: string
    hour: string
  }

  const Cards = ref<ICards[]>([
    { client: 'Renato Carlos', type: 'dieta', hour: '09:00' },
    { client: 'João Brito', type: 'renal', hour: '10:00' },
    { client: 'Jose Brito', type: 'diabetico', hour: '11:00' },
    { client: 'João Walter', type: 'atleta', hour: '12:00' },
    { client: 'Marcos Prado', type: 'atleta', hour: '14:00' },
    { client: 'Wagner Lacerda', type: 'dieta', hour: '13:00' },
    { client: 'Eduardo João', type: 'dieta', hour: '14:00' },
  ])
</script>

<template>
  <div>
    <CardDraggable :cards="Cards" />
  </div>
</template>
