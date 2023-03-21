<script setup lang="ts">
defineProps<{
  label: string
  modelValue: string,
  options: Array<{ id: string, name: string, value: string }>
}>();

defineEmits<{ (e: "update:modelValue", value: string): void }>();

// const suggestedSchema = [

//   {
//     $formField: 'CFormFieldPassword',
//     props: {
//       name: 'password_confirm',
//       label?: 'Confirm password',
//       help?: 'Enter your new password again to confirm it.',
//     },
//     /* in discussion */
//     validation?: 'required|confirm',
//     validationLabel?: 'password confirmation',
//     dependsOn: [],

//   },
// ]

</script>

<template>
  <fieldset class="form-input">
    <legend>{{ label }}</legend>
    <div v-for="(option, index) in options" :key="index">
      <input type="radio" :id="option.id" :name="option.name" :checked="modelValue === option.value" :value="option.value"
        @change="(event) => $emit('update:modelValue', ((event.target) as HTMLInputElement).value)" />
      <label :for="option.id">{{ option.name }}</label>
    </div>
  </fieldset>
</template>