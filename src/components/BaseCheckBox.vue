<script setup lang="ts">
defineProps<{
  modelValue: boolean,
  title: string
  id: string
  options: Array<{ id: string, name: string }>
}>()

defineEmits<{ (e: "update:modelValue", value: boolean): void }>();
</script>

<template>
  <fieldset>
    <legend>{{ title }}</legend>
    <div v-for="(option, index) in options" :key="index">
      <input type="checkbox" :id="option.id" :name="option.name" :checked="modelValue"
        @change="(event) => $emit('update:modelValue', ((event.target) as HTMLInputElement).checked)">
      <label :for="option.name">{{ option.name }}</label>
    </div>
  </fieldset>
</template>