<script setup lang="ts">
  defineProps<{
    title: string;
    type: string;
    height: number;
    series?: string[] | number[];
    chartOptions: any;
  }>()
</script>

<template>
  <div id="chart" class="card justify-center">
    <h2 class="font-medium">{{ title }}</h2>
    
    <div class="lg:mx-auto">
      <apexchart
        :type="type"
        :height="height"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>
