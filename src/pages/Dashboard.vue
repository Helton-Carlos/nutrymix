<script setup lang="ts">
  import { ref, computed } from 'vue'
  import type { ICards } from '../types/index.types'
  import CardMain from '@/components/CardMain.vue'
  import Card from '@/components/Card.vue'
  import Modal from '@/components/Modal.vue'
  import Input from '@/components/Input.vue'
  import Button from '@/components/Button.vue'
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
      alert('Cliente salvo')
    } else {
      errorInput.value = true
    }
  }

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
    { client: 'Newton Própocopio', type: 'dieta', hour: '09:00' },
    { client: 'Eduardo Fran', type: 'renal', hour: '10:00' },
    { client: 'Vanderson Nunes', type: 'diabetico', hour: '11:00' },
  ])
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <CardMain title="Consultas de hoje">
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
                  element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'
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
    </CardMain>

    <CardMain title="Consultas de amanhã">
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
                  element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'
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
    </CardMain>

    <CardMain class="h-[150px]" title="Cadastro paciênte">
      <template #body>
        <div class="card flex-col justify-center">
          <h3 class="text-sm font-semibold text-center px-4">
            Cadastre agora o paciente de forma rápida.
          </h3>
          <Button
            color="primary"
            class="mx-auto my-2"
            @click="modalRegisterPatient = true"
          >
            <i class="pi pi-user" />
            Cadastrar
          </Button>
        </div>
      </template>
    </CardMain>

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
      title="Erro ao cadastrar."
      text="Preencha os campos corretamente."
      v-if="errorInput"
    >
      <template #icon>
        <i class="pi pi-times-circle" />
      </template>
    </Notify>
  </div>
</template>
