<script setup lang="ts">
  import CardMain from './CardMain.vue'

  defineProps<{
    title: string;
    type: string;
    height: number;
    series: string | number;
    chartOptions: any;
  }>()

  
</script>

<template>
  <card-main :title="title">
    <template #body>
      <div id="chart" class="card justify-center">
        <apexchart
          :type="type"
          height="220"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </template>
  </card-main>
</template>
