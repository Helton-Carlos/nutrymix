<script setup lang="ts">
import { ref } from 'vue'
import { useStorageUser } from '../store/user.ts'
import {useRouter} from 'vue-router';

const { getStorageUser, deleteStorageUser } = useStorageUser();
const router = useRouter();

const name = getStorageUser?.name;
const itemMenu = ref<boolean>(false);

const menu = [
  { name: 'Sua conta', path: 'profile' },
  { name: 'Configuração', path: 'config' },
  { name: 'Sair', path: 'login' },
]

function openMenu() {
  itemMenu.value = !itemMenu.value
}

function onPath(pathName: string) {
  if(pathName === 'login') {
    deleteStorageUser();
    router.push({ name : pathName})
  };
}
</script>

<template>
  <header class="header-nutry">
    <div class="mx-auto px-3 pt-3 flex justify-between">
      <div
        class="flex items-center cursor-pointer"
        @click="$emit('openSidebar')"
      >
        <img src="@/assets/nutrymix.svg" alt="nutrymix" />
        <h1 class="pl-1 text-base font-bold capitalize">Nutrymix</h1>
      </div>

      <div class="flex items-center">
        <img
          class="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="persona"
        />
        <div
          class="cursor-pointer hover:text-primary flex items-center"
          data-test="btn-click"
          @click="openMenu"
        >
          <span class="text-sm font-bold pl-2" data-test="name">{{
            name
          }}</span>
          <i
            class="pi pi-angle-down"
            data-test="item-menu-down"
            v-if="!itemMenu"
          ></i>
          <i class="pi pi-angle-up" data-test="item-menu-up" v-else></i>
        </div>

        <div
          v-if="itemMenu"
          class="absolute top-10 right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabindex="-1"
        >
          <a
            href="#"
            class="block px-4 py-2 font-semibold text-sm text-gray-dark hover:bg-black hover:text-white"
            role="menuitem"
            tabindex="-1"
            id="user-menu-item-0"
            v-for="item in menu"
            :key="item.name"
            @click="onPath(item.path)"
            >{{ item.name }}</a
          >
        </div>
      </div>
    </div>
  </header>
</template>
