<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const listFile = [
  {
    icon: 'pi-user',
    title: 'pacientes',
    context: 'Veja tudo sobre seus cuidados com a paciente.',
  },
  {
    icon: 'pi-info-circle',
    title: 'dietas',
    context: 'Tire suas duvidas sobre cada tipo de dieta para seu paciente.',
  },
  {
    icon: 'pi-briefcase',
    title: 'negócios',
    context: 'Veja gráficos e organização do seu negócios.',
  },
];

function getList(name: string) {
  router.push({ path: `/file/${name}` })
}
</script>

<template>
  <div class="flex flex-wrap">
    <div
      v-for="list in listFile"
      :key="list.title"
      @click="getList(list.title)"
      class="card w-full my-2 p-4 flex gap-4 rounded-lg cursor-pointer hover:-translate-y-1 hover:scale-70 duration-300 hover:bg-primary-clear"
    >
      <div
        class="bg-primary text-left min-w-[50px] min-h-[50px] m-2 flex my-auto rounded-lg"
      >
        <i
          class="pi flex justify-center mx-auto my-auto text-white text-xl"
          :class="list.icon"
        />
      </div>
      <div>
        <h3 class="font-bold capitalize">{{ list.title }}</h3>
        <p>{{ list.context }}</p>
      </div>
    </div>
  </div>
</template>
