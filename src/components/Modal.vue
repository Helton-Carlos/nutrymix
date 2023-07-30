<script setup lang="ts"></script>

<template>
  <div
    class="absolute z-10 top-0 right-0 min-w-full min-h-screen bg-secondary bg-opacity-75 transition-opacity"
  >
    <div class="fixed inset-0 z-10">
      <div
        class="flex h-full justify-center p-4 text-center items-center"
      >
        <div class="card">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
