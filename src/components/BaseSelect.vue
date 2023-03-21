<script setup lang="ts">
defineProps<{
  label: string
  id: string
  modelValue: string,
  hint?: string,
  options: Array<{ value: string, name: string }>
}>()

defineEmits<{ (e: "update:modelValue", value: string): void }>();
</script>

<template>
  <div class="form-input">
    <label :for="id">{{ label }}</label>
    <small>{{ hint }}</small>
    <select :value="modelValue" :name="id" :id="id" @change="(event) => $emit('update:modelValue', ((event.target) as HTMLInputElement).value)">
      <option value="- select -">- select -</option>
      <option v-for="(option, index) in options" :key="index" :value="option.value">{{ option.name }}</option>
    </select>
  </div>
</template>