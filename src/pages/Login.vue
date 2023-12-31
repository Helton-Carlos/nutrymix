<script setup lang="ts">
  import { ref } from 'vue'
  import { ILogin } from '../types/index.types'
  import Input from '../components/Input.vue'

  const register = ref<ILogin>({
    email: '',
    password: '',
  })

  function onsubmit() {
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
          >
            Sign in to your account
          </h1>

          <form
            class="space-y-4 md:space-y-6"
            action="#"
            @submit.prevent="onsubmit"
          >
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
                  <label for="remember" class="text-primary-500"
                    >Remember me</label
                  >
                </div>
              </div>
              <a
                href="#"
                class="text-sm font-medium text-primary-600 hover:underline"
                >Forgot password?</a
              >
            </div>
            <button type="submit" class="btn-primary">Sign in</button>
            <p class="text-sm font-light text-primary-500">
              Don’t have an account yet?
              <a href="#" class="font-medium text-primary-600 hover:underline"
                >Sign up</a
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
