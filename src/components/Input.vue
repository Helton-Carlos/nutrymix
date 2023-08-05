<script setup lang="ts">
interface IInput {
  label?: string;
  placeholder: string;
  type: string;
  modelValue: string | number;
  error?: boolean;
}

defineProps<IInput>();

const emit = defineEmits<{
  (e: "update:modelValue", id: string | number): void;
}>();

function updateInput(event: any) {
  emit("update:modelValue", event.target.value);
}
</script>

<template>
  <div class="text-left">
    <label v-if="label">{{label}}</label>
    <input
      :class="error ? 'inputOff' : 'inputOn'"
      :type="type"
      :placeholder="placeholder"
      @input="updateInput"
    />
  </div>
</template>