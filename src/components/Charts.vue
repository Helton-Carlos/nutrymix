<script setup lang="ts">
  import CardMain from './CardMain.vue'
  const series = [
    {
      name: 'Marcadas',
      data: [8, 14, 12, 14, 11, 8],
    },
    {
      name: 'Mudança',
      data: [7, 8, 1, 4, 0, 3],
    },
    {
      name: 'Canacelado',
      data: [1, 0, 1, 4, 0, 2],
    },
  ]

  const chartOptions = {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    },
    fill: {
      opacity: 1,
    },
  }
</script>

<template>
  <CardMain title="Gráfico semanal">
    <template #body>
      <div id="chart" class="card justify-center">
        <apexchart
          type="bar"
          height="280"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </template>
  </CardMain>
</template>
