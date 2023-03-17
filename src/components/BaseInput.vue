<script setup lang="ts">
defineProps<{
  label?: string
  id?: string
  modelValue: any
}>()

const emit = defineEmits<{ (e: "update:modelValue", value: string): void }>();
 
function handleInput(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

</script>

<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input type="text" :id="id" :name="id" :value="modelValue" @change="handleInput">
  </div>
</template>



