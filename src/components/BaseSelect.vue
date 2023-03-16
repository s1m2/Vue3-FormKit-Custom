<script setup lang="ts">
defineProps<{
  title: string
  id: string
  modelValue: string,
  options: Array<{ value: string, name: string }>
}>()

defineEmits<{ (e: "update:modelValue", value: string): void }>();
</script>

<template>
  <div>
    <label :for="id">{{ title }}</label>
    <select :value="modelValue" :name="id" :id="id" @change="(event) => $emit('update:modelValue', ((event.target) as HTMLInputElement).value)">
      <option v-for="(option, index) in options" :key="index" :value="option.value">{{ option.name }}</option>
    </select>
  </div>
</template>