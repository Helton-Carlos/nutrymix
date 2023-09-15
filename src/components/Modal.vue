<script setup lang="ts"></script>

<template>
  <div
    class="fixed left-0 z-50 top-0 right-0 min-w-full min-h-full bg-secondary bg-opacity-75 transition-opacity"
  >
    <div class="fixed inset-0">
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
