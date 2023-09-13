export function columnCharts() {
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

  return {
    chartOptions,
    series,
  };
}

export function polarAreaCharts() {
  const series = [17, 14, 12, 11, 15,2];

  const chartOptions = {
      chart: {
        type: 'polarArea',
      },
      stroke: {
        colors: ['#fff']
      },
      fill: {
        opacity: 0.8
      },
      labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
  }

  return {
    chartOptions,
    series,
  };
}