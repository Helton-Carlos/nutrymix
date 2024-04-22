<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import NameTitle from '@/components/NameTitle.vue'
import Header from '@/layout/Header.vue'
import Sidebar from '@/layout/Sidebar.vue'
import { breakpoints } from './use/breakpoints.use'
import Login from './pages/Login.vue'

const route = useRoute()
const { xs } = breakpoints()

const menuMobile = ref<boolean>(false)

function openSidebar() {
  menuMobile.value = !menuMobile.value
}

function closeSidebar() {
  menuMobile.value = false
}

function goBack() {
  history.back()
}

const login = computed(()=> {
   if(route.name === 'login') return true;
});
</script>

<template>
  <div v-if="!login">
    <Header @open-sidebar="openSidebar" />

    <div>
      <Sidebar @close-menu="closeSidebar" :menuMobile="menuMobile" />

      <div :class="xs ? 'mt-14' : 'm-14'">
        <div class="flex justify-between items-center">
          <div>
            <NameTitle v-if="route.meta.title">
              <template #title>
                <span class="bg-primary rounded-full pr-1 mr-1"></span>

                <span class="text-base font-bold capitalize">{{
                  route.meta.title
                }}</span>
              </template>

              <template #subTitle>
                <p class="text-sm">{{ route.meta.subTitle }}</p>
              </template>
            </NameTitle>

            <div
            v-else
              class="flex m-4 items-center cursor-pointer hover:text-primary"
              @click="goBack"
            >
              <i class="pi pi-arrow-left pr-2" />
              <p class="font-bold">Voltar</p>
            </div>
          </div>
        </div>

        <div class="m-4">
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
        </div>
      </div>
    </div>
  </div>

  <Login v-else/>
</template>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
