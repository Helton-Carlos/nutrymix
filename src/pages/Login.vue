<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStorage } from '@vueuse/core'
import { useStorageUser } from '../store/user.ts'
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(6).required(),
});

const { NAME_LOCAL, getStorageUser } = useStorageUser();

const router = useRouter();
const login = ref<boolean>(true);

function onSubmit(data: any) {
  if(getStorageUser) {
    let {email, password} = getStorageUser;
    
    if(email === data.email && password === data.password) {
      router.push({ name: 'dashboard' })
    }
  }
}

function onRegister(data: any) {
  useStorage(NAME_LOCAL, data)

  login.value = true
}
</script>

<template>
  <section>
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <h1
        class="flex items-center mb-6 text-2xl text-primary font-semibold font-mono capitalize"
      >
        <img class="w-8 h-8 mr-2" src="../assets/nutrymix.svg" alt="logo" />
        nutrymix
      </h1>

      <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h2
            class="text-xl text-primary font-bold leading-tight tracking-tight md:text-2xl"
            v-if="login"
          >
            Faça seu login
          </h2>

          <h2
            v-else
            class="text-xl text-primary font-bold leading-tight tracking-tight md:text-2xl"
          >
            Crie sua conta
          </h2>

          <Form 
            class="flex flex-col space-y-4 md:space-y-6"
            v-slot="{ errors }"
            :validation-schema="schema"
            @submit="onSubmit"
            v-if="login"
          >

            <label for="email">Seu e-mail</label>
            <Field  
              :class="errors.email ? 'input-off' : 'input-on'"  
              name="email" 
              type="email" 
              placeholder="name@company.com"
            />
            <ErrorMessage class="text-error" name="email" />

            <label for="password">Sua senha</label>
            <Field  
              :class="errors.password ? 'input-off' : 'input-on'"  
              name="password" 
              type="password"
              placeholder="••••••••"
            />
            <ErrorMessage class="text-error" name="password"  />

            <button type="submit" class="btn-primary block">Entrar</button>

            <p class="text-sm font-light text-gray-dark">
              Ainda não tem sua conta?
              <span
                class="font-medium text-primary hover:underline"
                @click="login = false"
                >Cadastra-se</span
              >
            </p>
          </Form>

          <Form
            class="flex flex-col space-y-4 md:space-y-6"
            v-slot="{ errors }"
            :validation-schema="schema"
            @submit="onRegister"
            v-else
          >
            <label for="name">* Seu nome</label>
            <Field  
              :class="errors.email ? 'input-off' : 'input-on'"  
              name="name" 
              type="text"
              placeholder="Nome: João Brito Souza"
            />
            <ErrorMessage class="text-error" name="text" />

            <label for="company">* Sua empresa</label>
            <Field  
              :class="errors.email ? 'input-off' : 'input-on'"  
              name="company" 
              type="text"
              placeholder="Empresa: NutriVida"
            />
            <ErrorMessage class="text-error" name="text" />

            <label for="email">* Seu e-mail</label>
            <Field  
              :class="errors.email ? 'input-off' : 'input-on'"  
              name="email" 
              type="email" 
              placeholder="E-mail: email@company.com"
            />
            <ErrorMessage class="text-error" name="email" />

            <label for="password">* Sua senha</label>
            <Field  
              :class="errors.password ? 'input-off' : 'input-on'"  
              name="password" 
              type="password"
              placeholder="••••••••"
            />
            <ErrorMessage class="text-error" name="password" />

            <div class="flex justify-center gap-5">
              <button
                class="font-semibold hover:underline"
                @click="login = true"
              >
                Cancelar
              </button>

              <button class="btn-primary">
                Salvar
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </section>
</template>
