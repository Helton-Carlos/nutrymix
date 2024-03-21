<script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import Input from '../components/Input.vue';
  import { Field, Form, ErrorMessage } from 'vee-validate';
  import * as yup from 'yup';
  import { useStorage } from '@vueuse/core'

  const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required().min(6).required(),
  });

  const router = useRouter();
  const login = ref<boolean>(true);
  const NAME_LOCAL = ref<string>('user-store');

  function onSubmit(data: any) {
    let getLocal = localStorage.getItem(NAME_LOCAL.value);

    if(getLocal) {
      let {email, password} = JSON.parse(getLocal);
      
      if(email === data.email && password === data.password) {
        router.push({ name: 'dashboard' })
      }
    }
  }

  function onRegister(data: string) {
    useStorage(NAME_LOCAL.value, data)

    login.value = true
  }

</script>

<template>
  <section>
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <p
        class="flex items-center mb-6 text-2xl text-primary font-semibold font-mono capitalize"
      >
        <img class="w-8 h-8 mr-2" src="../assets/nutrymix.svg" alt="logo" />
        nutrymix
      </p>

      <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl text-primary font-bold leading-tight tracking-tight md:text-2xl"
            v-if="login"
          >
            Sign in to your account
          </h1>

          <h1
            v-else
            class="text-xl text-primary font-bold leading-tight tracking-tight md:text-2xl"
          >
            Register here
          </h1>

          <Form 
            class="space-y-4 md:space-y-6"
            v-slot="{ errors }"
            :validation-schema="schema"
            @submit="onSubmit"
            v-if="login"
          >

            <Field  
              :class="errors.email ? 'input-off' : 'input-on'"  
              name="email" 
              type="email" 
              placeholder="name@company.com"
            />
            <ErrorMessage class="text-error" name="email" />

            <Field  
              :class="errors.password ? 'input-off' : 'input-on'"  
              name="password" 
              type="password"
              placeholder="••••••••"
            />
            <ErrorMessage class="text-error" name="password"  />

            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    class="input-on"
                    required
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-dark"
                    >Remember me</label
                  >
                </div>
              </div>
            </div>

            <button type="submit" class="btn-primary">Sign in</button>

            <p class="text-sm font-light text-gray-dark">
              Don’t have an account yet?
              <span
                class="font-medium text-primary hover:underline"
                @click="login = false"
                >Sign up</span
              >
            </p>
          </Form>

          <Form
            class="space-y-4 md:space-y-6"
            v-slot="{ errors }"
            :validation-schema="schema"
            @submit="onRegister"
            v-else
          >
            <Field  
              :class="errors.email ? 'input-off' : 'input-on'"  
              name="name" 
              type="text"
              placeholder="João Brito Souza"
            />
            <ErrorMessage class="text-error" name="text" />

            <Field  
              :class="errors.email ? 'input-off' : 'input-on'"  
              name="email" 
              type="email" 
              placeholder="name@company.com"
            />
            <ErrorMessage class="text-error" name="email" />

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
                Register
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </section>
</template>
