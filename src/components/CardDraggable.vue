<script setup lang="ts">
  import Card from './Card.vue';

  defineProps<{
    cards: any
  }>()
</script>

<template>
  <div class="card-dragg">
    <h4 class="font-bold text-sm text-center p-2">Consultas de hoje</h4>

    <Card 
      v-for="(card, index) in cards"
      :key="index"
      :client="card.client"
      :type="card.type"
      :hour="card.hour" />
  </div>
</template>
