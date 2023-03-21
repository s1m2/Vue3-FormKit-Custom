<script setup lang="ts">

export interface Props {
  type: string
  modelValue: any
  label?: string
  id?: string
}

withDefaults(defineProps<Props>(), {
  type: 'text',
  modelValue: '',
  label: '',
  id: ''
})

const emit = defineEmits<{ (e: "update:modelValue", value: string): void }>();

function handleInput(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

</script>

<template>
  <div class="form-input">
    <label :for="id">{{ label }}</label>
    <input :type="type" :id="id" :name="id" :value="modelValue" @change="handleInput" @blur="handleInput">
  </div>
</template>



