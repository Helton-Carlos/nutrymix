export function columnWeekCharts() {
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

export function columnYearCharts() {
  const series = [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1080, 1200, 800, 1104]
    }
  ]
 
  const chartOptions = {
    chart: {
      type: 'bar',
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['Jan', 'Fev', 'Mar', 'Abri', 'Mai', 'Jun', 'Jul',
        'Ago', 'Set', 'Out', 'Nov', 'Dez'
      ],
    }
  }

  return {
    chartOptions,
    series,
  };
}