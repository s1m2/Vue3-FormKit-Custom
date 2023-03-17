<script setup lang="ts">
import { ref , computed} from 'vue';
import { FormKitSchema, submitForm } from '@formkit/vue';
import type { FormKitFrameworkContext } from '@formkit/core';

const data = ref({});
const form = ref<FormKitFrameworkContext>()
const isValid = computed(() => form.value?.node.context?.state.valid)

const schema = [
  {
    $formkit: 'inputText',
    name: 'reason',
    id: 'question',
    label: 'What is the reason for getting a new car ?',
    validation: 'required',
    validationVisibility: 'dirty',
    validationMessages: {
      required: 'This field is required for some apparent reason'
    }
  },
  {
    $formkit: 'inputRadio',
    name: 'gearbox',
    id: 'gearbox',
    title: 'Select your preferred gearbox ?',
    options: [{ value: 'auto', name: 'Automatic' }, { value: 'manual', name: 'Manual' }],
    validation: 'required'
  },
  {
    $formkit: 'inputSelect',
    name: 'make',
    id: 'make',
    title: 'Select your preferred manufacturer ?',
    options: [{ value: 'audi', name: 'Audi' }, { value: 'bmw', name: 'BMW' }, { value: 'mercedes', name: 'Mercedes' }],
    validation: 'required'
  },
  {
    $formkit: 'inputSelect',
    if: '$get(make).value',
    name: 'model',
    id: 'model',
    title: 'Select your preferred model ?',
    options: {
      if: '$get(make).value === audi',
      then: [{ value: 'A4', name: 'A4' }, { value: 'A6', name: 'A6' }],
      else: {
        if: '$get(make).value === bmw',
        then: [{ value: '3 series', name: '3 series' }, { value: '5 series', name: '5 series' }],
        else: [{ value: 'C class', name: 'C Klasse' }, { value: 'E class', name: 'E Klasse' }]
      }
    }
  },
  {
    $formkit: 'inputCheckBox',
    if: '$get(model).value === A6',
    name: 'engine',
    id: 'engine',
    title: 'Select the supercharged engine ?',
    options: [{ id: 'Supercharged', name: 'Supercharged' }],
    validation: 'required'
  },
]

function submitPageData(data: any) {
  // // retrieve the core node (several ways to do this):
  // const node = form.value.node
  // // submit the form!
  // node.submit()
  console.log(data)
}

function submitHandler () {
  submitForm('car-stuff')
}

</script>

<template>
  <header>
    <p>Vue 3 FormKit Trial</p>
  </header>

  <main>
    <FormKit ref="form" id="car-stuff" type="form" v-model="data" :actions="false" @submit="submitPageData">
      <FormKitSchema :schema="schema" />
    </FormKit>

    <button :disabled="!isValid" @click="submitHandler">Validate Form</button>
    <pre wrap>{{ data }}</pre>
  </main>
</template>

<style scoped></style>
