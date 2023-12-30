<script setup lang="ts">
import { ref,computed } from 'vue';
import { format } from 'date-fns'
import Datepicker from 'vuejs3-datepicker';

const atual = ref<string>('');

const state= new Date();

const formatDate = computed(()=>{
  return format(new Date('2019/01/01'), 'dd/MM/yyyy')
})
 
</script>

<template>
  <div>
    <p class="font-bold pb-2">Agendar</p>

    <div class="block">
      <datepicker
        theme="blue"
        name="agendar" 
        v-model="atual" 
        :value="state"
        :addBootstrapClass="true"
        language="pt"
      ></datepicker>
    </div>
  
  </div>

  <div class="card flex-col mt-4 p-4">
    <p class="font-bold">formatDate:</p>
    <span>{{ formatDate }}</span>
    
    <p class="font-bold">stateValue:</p>
    <span>{{ state }}</span>

    <p class="font-bold">atual:</p>
    <span>{{ atual }}</span>
  </div>
</template>
