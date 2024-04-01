<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import Charts from '@/components/Charts.vue'
import { columnWeekCharts } from '../use/charts';

const router = useRouter();

function addPatient() {
  router.push({ name: 'registerPatient'})
}

const dataToday = computed(()=> {
  let today = new Date();

  let day = today.getDate().toString().padStart(2, '0'); 
  let month = (today.getMonth() + 1).toString().padStart(2, '0'); 
  let year = today.getFullYear();

  return day + '/' + month + '/' + year;
})
</script>

<template>
  <div class="flex flex-wrap">
    <div class="card">
      <div class="flex justify-between items-center">
        <div>
          <h2 class="font-medium">Próximas consultas:</h2>
          <p>Veja suas consultas do dia.</p>
        </div>

        <div>
          <button 
            class="bg-primary text-white w-[40px] h-[40px] font-bold text-xl hover:bg-primary-clear"
            @click="addPatient"
          >
            +
          </button>
        </div>
      </div>

      <div>
        <hr class="py-1 text-gray">
        <p class="text-black text-center">
          Você não possue consultas para hoje: {{ dataToday }}
        </p>
      </div>
    </div>

    <div class="card">
      <div class="flex justify-between items-center">
        <div>
          <h2 class="font-medium">Atendimentos de hoje:</h2>
          <p>Barra de progresso.</p>
        </div>
      </div>

        <div class="bg-gray-dark rounded-full h-2.5 ">
          <canvas class="bg-primary h-2.5 rounded-full" style="width: 40%" />
        </div>

        <p class="font-bold text-gray-dark py-1 text-base text-center">2/5</p>
    </div>

    <Charts 
        type="bar"
        title="Gráfico semanal:"
        :series="columnWeekCharts().series" 
        :chartOptions="columnWeekCharts().chartOptions"
      />
  </div>
</template>
