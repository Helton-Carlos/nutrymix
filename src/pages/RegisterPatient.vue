<script setup lang="ts">
import { ref } from 'vue';
import CardMain from '@/components/CardMain.vue';
import Button from '@/components/Button.vue';
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required().min(6),
  nascimento: yup.string().required(),
  email: yup.string().email().required(),
  endereco: yup.string().required().min(6),
  phone: yup.number().required().min(6),
});

const error = ref<boolean>(false);

function registerPatient(data: any) {
  if(data) {
    console.log(data);
  } else {
    error.value = false;
  }
}

</script>

<template>
  <div>
    <card-main title="Cadastro Inicial">
      <template #body>
        <div class="card">
          <Form
            class="flex flex-col space-y-4 md:space-y-6"
            v-slot="{ errors }"
            :validation-schema="schema"
            @submit="registerPatient"
          >
            <label for="name">Nome</label>
            <Field  
              :class="errors.name ? 'input-off' : 'input-on'"  
              name="name" 
              type="text"
              placeholder="Nome: João Brito Souza"
            />
            <ErrorMessage class="text-error" name="text" />

            <label for="nascimento">Data de nascimento</label>
            <Field  
              :class="errors.nascimento ? 'input-off' : 'input-on'"  
              name="nascimento" 
              type="date"
            />
            <ErrorMessage class="text-error" name="text" />

            <label for="email">E-mail</label>
            <Field  
              :class="errors.email ? 'input-off' : 'input-on'"  
              name="email" 
              type="email" 
              placeholder="E-mail: email@gmail.com"
            />
            <ErrorMessage class="text-error" name="email" />

            <label for="endereco">Endereço</label>
            <Field  
              :class="errors.endereco ? 'input-off' : 'input-on'"  
              name="endereco" 
              type="text"
              placeholder="Rua: Londres"
            />
            <ErrorMessage class="text-error" name="endereco" />

            <label for="phone">Telefone</label>
            <Field  
              :class="errors.phone ? 'input-off' : 'input-on'"  
              name="phone" 
              type="number"
              placeholder="75 98855-0000"
            />
            <ErrorMessage class="text-error" name="phone" />

            <button
              data-test="btn-account-submit"
              class="btn-primary"
            >
              Avançar
            </button>
          </Form>
        </div>
      </template>
    </card-main>
  </div>
</template>
