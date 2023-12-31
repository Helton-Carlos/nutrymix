<script setup lang="ts">
  import { ref } from 'vue'
  import { ISignIn, ISignUp } from '../types/index.types'
  import Input from '../components/Input.vue'

  const login = ref<boolean>(true)

  const signIn = ref<ISignIn>({
    email: '',
    password: '',
  })

  const register = ref<ISignUp>({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  })

  function onSubmit() {
    console.log(signIn.value)
  }

  function onRegister() {
    console.log(register.value)
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

          <form
            class="space-y-4 md:space-y-6"
            action="#"
            @submit.prevent="onSubmit"
            v-if="login"
          >
            <Input
              label="Your email"
              type="email"
              :modelValue="signIn.email"
              :error="false"
              placeholder="name@company.com"
              required
            />

            <Input
              label="Your password"
              type="password"
              :modelValue="signIn.password"
              :error="false"
              placeholder="••••••••"
              required
            />

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
          </form>

          <form
            class="space-y-4 md:space-y-6"
            action="#"
            @submit.prevent="onRegister"
            v-else
          >
            <Input
              label="Your name"
              type="text"
              :modelValue="register.name"
              :error="false"
              placeholder="João Brito Souza"
              required
            />

            <Input
              label="Your email"
              type="email"
              :modelValue="register.email"
              :error="false"
              placeholder="name@company.com"
              required
            />

            <Input
              label="Your password"
              type="password"
              :modelValue="register.password"
              :error="false"
              placeholder="••••••••"
              required
            />

            <Input
              label="Confirm password"
              type="password"
              :modelValue="register.confirmPassword"
              :error="false"
              placeholder="••••••••"
              required
            />

            <div class="flex justify-center gap-5">
              <button
                class="font-semibold hover:underline"
                @click="login = true"
              >
                Cancelar
              </button>

              <button type="submit" class="btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
