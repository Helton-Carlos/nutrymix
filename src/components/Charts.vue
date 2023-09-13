<script setup lang="ts">
  import CardMain from './CardMain.vue'

  defineProps<{
    title: string;
    type: string;
    series: string | number;
    chartOptions: any;
  }>()

  
</script>

<template>
  <CardMain :title="title">
    <template #body>
      <div id="chart" class="card justify-center">
        <apexchart
          :type="type"
          height="280"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </template>
  </CardMain>
</template>
