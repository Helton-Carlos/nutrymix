<script setup lang="ts">
import { ref, watch } from 'vue'
import axios from 'axios'
import Modal from '@/components/Modal.vue'
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'

const modalRegisterPatient = ref<boolean>(false)
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
    <div class="card flex-col">
      <h3 class="text-sm font-semibold pt-2 mx-auto text-center md:px-4">
        Pré-cadastro de pacientes
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
  </div>
</template>
