<script setup lang="ts">
  import { ref, computed, watch } from 'vue'
  import type { ICards } from '../types/index.types'
  import { columnWeekCharts, columnYearCharts} from '../use/charts'
  import { EMessages } from '../use/message'
  import axios from 'axios'
  import CardMain from '@/components/CardMain.vue'
  import Card from '@/components/Card.vue'
  import Modal from '@/components/Modal.vue'
  import Input from '@/components/Input.vue'
  import Button from '@/components/Button.vue'
  import Charts from '@/components/Charts.vue'
  import Notify from '@/components/Notify.vue'
  import draggable from 'vuedraggable'

  const modalRegisterPatient = ref<boolean>(false)
  const drag = ref<boolean>(false)
  const errorInput = ref<boolean>(false)

  const name = ref<string>('')
  const email = ref<string>('')
  const age = ref<number>()
  const size = ref<number>()
  const phone = ref<number>()
  const height = ref<number>()
  const pressure = ref<number>()

  const { REGISTER_ERROR, REGISTER_TEXT_ERROR } = EMessages

  const dragOptions = computed(() => {
    return {
      animation: 200,
      group: 'description',
      disabled: false,
      ghostClass: 'ghost',
    }
  })

  const cards = ref<ICards[]>([
    { client: 'Renato Carlos', type: 'dieta', hour: '09:00' },
    { client: 'João Altemar', type: 'renal', hour: '10:00' },
    { client: 'José Brito', type: 'diabetico', hour: '11:00' },
    { client: 'Francisco Walter', type: 'atleta', hour: '12:00' },
    { client: 'Marcos Prado', type: 'atleta', hour: '14:00' },
  ])

  const cards2 = ref<ICards[]>([
    { client: 'Newton Prócopio', type: 'dieta', hour: '09:00' },
    { client: 'Eduardo França', type: 'renal', hour: '10:00' },
    { client: 'Vanderson Nunes', type: 'diabetico', hour: '11:00' },
  ])

  function saveRegister() {
    if (
      name.value &&
      email.value &&
      age.value &&
      size.value &&
      phone.value &&
      height.value &&
      pressure.value
    ) {
      axios
        .post('/api/users', {
          name,
          email,
          age,
          size,
          phone,
          height,
          pressure,
        })
        .then((response) => {
          errorInput.value = false

          if (response) return (modalRegisterPatient.value = false)
        })
        .catch((error) => {
          console.error(error)
        })
    } else {
      errorInput.value = true
    }
  }

  function cleanErro() {
    errorInput.value = false
  }

  watch(name, cleanErro)
</script>

<template>
  <div class="flex flex-col flex-wrap gap-4">
    <div class="flex flex-wrap gap-4">
      <Charts 
        type="bar"
        title="Gráfico semanal atual"
        :series="columnWeekCharts().series" 
        :chartOptions="columnWeekCharts().chartOptions"
      />

      <Charts 
        type="bar" 
        title="Gráfico anual atual"
        :series="columnYearCharts().series" 
        :chartOptions="columnYearCharts().chartOptions"
      />

      <Charts 
        type="bar"
        title="Gráfico semanal passado"
        :series="columnWeekCharts().series" 
        :chartOptions="columnWeekCharts().chartOptions"
      />

      <Charts 
        type="bar"
        title="Gráfico anual passado"
        :series="columnYearCharts().series" 
        :chartOptions="columnYearCharts().chartOptions"
      />
      
    </div>

    <div class="flex flex-wrap gap-4">
      <div class="flex gap-4 w-full md:w-[550px]">
        <card-main title="Consultas de hoje">
          <template #body>
            <draggable
              class="list-group"
              tag="transition-group"
              :component-data="{
                tag: 'ul',
                type: 'transition-group',
                name: !drag ? 'flip-list' : null,
              }"
              v-model="cards"
              v-bind="dragOptions"
              @start="drag = true"
              @end="drag = false"
              item-key="order"
            >
              <template #item="{ element }">
                <li class="list-group-item">
                  <i
                    :class="
                      element.fixed
                        ? 'fa fa-anchor'
                        : 'glyphicon glyphicon-pushpin'
                    "
                    @click="element.fixed = !element.fixed"
                    aria-hidden="true"
                  ></i>
                  <Card
                    class="m-0.5"
                    :client="element.client"
                    :type="element.type"
                    :hour="element.hour"
                  />
                </li>
              </template>
            </draggable>
          </template>
        </card-main>

        <card-main title="Consultas de amanhã">
          <template #body>
            <draggable
              class="list-group"
              tag="transition-group"
              :component-data="{
                tag: 'ul',
                type: 'transition-group',
                name: !drag ? 'flip-list' : null,
              }"
              v-model="cards2"
              v-bind="dragOptions"
              @start="drag = true"
              @end="drag = false"
              item-key="order"
            >
              <template #item="{ element }">
                <li class="list-group-item">
                  <i
                    :class="
                      element.fixed
                        ? 'fa fa-anchor'
                        : 'glyphicon glyphicon-pushpin'
                    "
                    @click="element.fixed = !element.fixed"
                    aria-hidden="true"
                  ></i>
                  <Card
                    class="m-0.5"
                    :client="element.client"
                    :type="element.type"
                    :hour="element.hour"
                  />
                </li>
              </template>
            </draggable>
          </template>
        </card-main>
      </div>

      <card-main class="h-[155px]" title="Cadastro paciênte">
        <template #body>
          <div class="card flex-col">
            <h3 class="text-sm font-semibold pt-2 mx-auto text-center md:px-4">
              Cadastre agora o paciente de forma rápida.
            </h3>

            <Button
              color="primary"
              class="mx-auto my-2 flex gap-1 items-center"
              @click="modalRegisterPatient = true"
            >
              <i class="pi pi-user" />
              <p>Cadastrar</p>
            </Button>
          </div>
        </template>
      </card-main>
    </div>

    <Modal v-if="modalRegisterPatient">
      <tempalte>
        <form class="flex flex-col p-4" @submit.prevent="saveRegister">
          <Input
            type="text"
            label="Nome"
            placeholder="Laura Carla Brito"
            :error="errorInput"
            v-model:modelValue="name"
          />

          <Input
            type="email"
            label="E-mail"
            placeholder="lauracarla@gmail.com"
            :error="errorInput"
            v-model:modelValue="email"
          />

          <Input
            type="number"
            label="Numero"
            placeholder="(75) 3281-4022"
            :error="errorInput"
            v-model:modelValue="phone"
          />

          <div class="flex gap-4">
            <Input
              type="number"
              label="Idade"
              placeholder="14"
              :error="errorInput"
              v-model:modelValue="age"
            />
            <Input
              type="number"
              label="Peso"
              placeholder="77,14"
              :error="errorInput"
              v-model:modelValue="size"
            />
          </div>

          <div class="flex gap-4">
            <Input
              type="number"
              label="Altura"
              placeholder="1,90"
              :error="errorInput"
              v-model:modelValue="height"
            />
            <Input
              type="number"
              label="Pressão arterial"
              placeholder="12,80"
              :error="errorInput"
              v-model:modelValue="pressure"
            />
          </div>

          <Button color="primary" class="w-full my-4" type="submit">
            <i class="pi pi-save" />
            Registar
          </Button>

          <Button
            class="w-full hover:text-primary"
            @click="modalRegisterPatient = false"
          >
            <i class="pi pi-times" />
            Cancel
          </Button>
        </form>
      </tempalte>
    </Modal>
    
    <Notify
      :title="REGISTER_ERROR"
      :text="REGISTER_TEXT_ERROR"
      v-if="errorInput"
    >
      <template #icon>
        <i class="pi pi-times-circle" />
      </template>
    </Notify>
  </div>
</template>